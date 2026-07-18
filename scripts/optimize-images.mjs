import sharp from 'sharp';
import { readdir, mkdir, unlink } from 'node:fs/promises';
import { join, dirname, extname, basename } from 'node:path';
import { existsSync } from 'node:fs';

/**
 * Sharpness-first image pipeline for tour heroes/galleries.
 * Prefer visual quality over aggressive KB targets.
 */
const IMG_DIR = 'src/assets/img';
const WIDTHS = [320, 640, 960, 1280, 1600, 1920];

/** Homepage LCP / carousel. */
const HERO_PATTERNS = [/mainpage\//i, /carousel/i, /destination-\d/i];

/** Tour gallery & package hero imagery — keep crisp on desktop/retina. */
const GALLERY_PATTERNS = [
  /5daysTours\//i,
  /SixdaysTous\//i,
  /2daysTours\//i,
  /eightdaysTours\//i,
  /7dayschange\//i,
  /onedayTour\//i,
  /package-\d/i,
  /tour-galleries\//i,
];

const HERO_MAX_KB = 380;
/** Gallery masters stay premium — avoid soft mid-size compression. */
const GALLERY_MAX_KB = 520;
const OTHER_MAX_KB = 180;
const QUALITY_FLOOR = 88;
const WEBP_START = 93;
const AVIF_START = 84;
/** Skip AVIF when even high-quality encode is still soft vs WebP — require AVIF quality >= 80. */
const AVIF_MIN_QUALITY = 80;
const FORMATS = ['webp', 'avif'];
/** Cap masters at Full HD — sharp on desktop/retina without huge payloads. */
const MASTER_MAX_WIDTH = 1920;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (/\.(jpe?g|png)$/i.test(entry.name) && !/-\d+w\./i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function classify(path) {
  const p = path.replace(/\\/g, '/');
  if (HERO_PATTERNS.some((re) => re.test(p))) return 'hero';
  if (GALLERY_PATTERNS.some((re) => re.test(p))) return 'gallery';
  return 'other';
}

function maxKbFor(kind) {
  if (kind === 'hero') return HERO_MAX_KB;
  if (kind === 'gallery') return GALLERY_MAX_KB;
  return OTHER_MAX_KB;
}

async function optimizeToTarget(buffer, maxKb, width, format) {
  let quality = format === 'avif' ? AVIF_START : WEBP_START;
  const floor = format === 'avif' ? Math.max(QUALITY_FLOOR, AVIF_MIN_QUALITY) : QUALITY_FLOOR;

  const encode = (q) => {
    const pipeline = sharp(buffer)
      .rotate()
      .resize({ width, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 });
    if (format === 'avif') {
      return pipeline.avif({ quality: q, effort: 5, chromaSubsampling: '4:2:0' }).toBuffer();
    }
    return pipeline.webp({ quality: q, effort: 4, smartSubsample: true }).toBuffer();
  };

  let result = await encode(quality);
  while (result.length > maxKb * 1024 && quality > floor) {
    quality -= 3;
    result = await encode(quality);
  }
  return { buffer: result, quality };
}

async function removeStaleVariants(dir, baseName) {
  if (!existsSync(dir)) return;
  const entries = await readdir(dir);
  for (const name of entries) {
    // Remove old responsive + base encodes so we never serve stale crushed files.
    if (
      name === `${baseName}.webp` ||
      name === `${baseName}.avif` ||
      new RegExp(`^${escapeRegExp(baseName)}-\\d+w\\.(webp|avif)$`, 'i').test(name)
    ) {
      await unlink(join(dir, name));
    }
  }
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

async function writeFormatOutputs(buffer, dir, baseName, maxKb, maxWidth, format) {
  const ext = `.${format}`;
  const mainOut = join(dir, `${baseName}${ext}`);
  const { buffer: mainBuf, quality: mainQ } = await optimizeToTarget(
    buffer,
    maxKb,
    maxWidth,
    format,
  );

  // Drop AVIF if quality had to fall to the floor and file is still huge relative to soft — keep only excellent AVIF.
  if (format === 'avif' && mainQ < AVIF_MIN_QUALITY) {
    return { skipped: true, bytes: 0, quality: mainQ };
  }

  await mkdir(dirname(mainOut), { recursive: true });
  await sharp(mainBuf).toFile(mainOut);

  for (const w of WIDTHS) {
    if (w > maxWidth) continue;
    const variantOut = join(dir, `${baseName}-${w}w${ext}`);
    // Thumbnails (320) can use a slightly tighter budget; main/hero widths keep quality.
    const variantMax = w <= 320 ? Math.min(maxKb, 90) : maxKb;
    const { buffer: variantBuf } = await optimizeToTarget(buffer, variantMax, w, format);
    await sharp(variantBuf).toFile(variantOut);
  }

  return { skipped: false, bytes: mainBuf.length, quality: mainQ };
}

async function processImage(filePath) {
  const rel = filePath.replace(/\\/g, '/');
  const kind = classify(rel);
  const maxKb = maxKbFor(kind);
  const baseName = basename(filePath, extname(filePath));
  const dir = dirname(filePath);
  const buffer = await sharp(filePath).toBuffer();
  const meta = await sharp(buffer).metadata();
  // Cap at Full HD so retina desktops stay sharp without giant masters.
  const maxWidth = Math.min(meta.width ?? MASTER_MAX_WIDTH, MASTER_MAX_WIDTH);

  await removeStaleVariants(dir, baseName);

  const sizes = {};
  for (const format of FORMATS) {
    sizes[format] = await writeFormatOutputs(buffer, dir, baseName, maxKb, maxWidth, format);
  }

  const webp = sizes.webp;
  const avif = sizes.avif;
  const avifNote = avif.skipped
    ? 'avif skipped (quality)'
    : `${baseName}.avif (${(avif.bytes / 1024).toFixed(1)} KB q${avif.quality})`;
  console.log(
    `✓ [${kind}] ${rel} → ${baseName}.webp (${(webp.bytes / 1024).toFixed(1)} KB q${webp.quality}), ${avifNote}`,
  );
}

async function main() {
  const onlyArg = process.argv.find((a) => a.startsWith('--only='));
  const only = onlyArg ? onlyArg.slice('--only='.length).split(',').map((s) => s.trim()) : null;

  let files = await walk(IMG_DIR);
  if (only?.length) {
    files = files.filter((f) => {
      const rel = f.replace(/\\/g, '/');
      return only.some((token) => rel.includes(token));
    });
  }

  console.log(
    `Processing ${files.length} sources (WebP q≥${QUALITY_FLOOR}, AVIF q≥${AVIF_MIN_QUALITY}, widths ${WIDTHS.join(',')})...`,
  );
  for (const file of files) {
    try {
      await processImage(file);
    } catch (err) {
      console.error(`✗ ${file}:`, err.message);
    }
  }
  console.log('Done.');
}

main();

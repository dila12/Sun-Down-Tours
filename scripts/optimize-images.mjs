import sharp from 'sharp';
import { readdir, stat, mkdir } from 'node:fs/promises';
import { join, dirname, extname, basename } from 'node:path';
import { existsSync } from 'node:fs';

const IMG_DIR = 'src/assets/img';
const WIDTHS = [320, 640, 960, 1280];
const HERO_PATTERNS = [/mainpage\/1/i, /carousel/i];
const HERO_MAX_KB = 180;
const OTHER_MAX_KB = 80;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function isHero(path) {
  return HERO_PATTERNS.some((p) => p.test(path.replace(/\\/g, '/')));
}

async function optimizeToTarget(buffer, maxKb, width) {
  let quality = 82;
  let result = await sharp(buffer)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toBuffer();

  while (result.length > maxKb * 1024 && quality > 40) {
    quality -= 5;
    result = await sharp(buffer)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality })
      .toBuffer();
  }
  return result;
}

async function processImage(filePath) {
  const rel = filePath.replace(/\\/g, '/');
  const hero = isHero(rel);
  const maxKb = hero ? HERO_MAX_KB : OTHER_MAX_KB;
  const baseName = basename(filePath, extname(filePath));
  const dir = dirname(filePath);
  const buffer = await sharp(filePath).toBuffer();
  const meta = await sharp(buffer).metadata();
  const maxWidth = Math.min(meta.width ?? 1280, 1280);

  const mainOut = join(dir, `${baseName}.webp`);
  const mainBuf = await optimizeToTarget(buffer, maxKb, maxWidth);
  await sharp(mainBuf).toFile(mainOut);

  for (const w of WIDTHS) {
    if (w > maxWidth) continue;
    const variantOut = join(dir, `${baseName}-${w}w.webp`);
    const variantBuf = await optimizeToTarget(buffer, maxKb, w);
    await sharp(variantBuf).toFile(variantOut);
  }

  const kb = (mainBuf.length / 1024).toFixed(1);
  console.log(`✓ ${rel} → ${baseName}.webp (${kb} KB)`);
}

async function main() {
  const files = await walk(IMG_DIR);
  console.log(`Processing ${files.length} images...`);
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

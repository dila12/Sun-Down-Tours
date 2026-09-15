/**
 * Build homepage hero collages from real tour photos (1920×600-class crop).
 * Slide 1: viewpoint board + Labookellie board
 * Slide 3: train guests + Galle + Ella
 * Slide 5: sunset viewpoint + boat + highland tracks
 */
import sharp from 'sharp';
import { mkdir, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const GREECE = join(ROOT, 'src/assets/img/7dayschange');
const OUT_DIR = join(ROOT, 'src/assets/img/mainpage');
const ATT_DIR = join(
  process.env.USERPROFILE || '',
  '.cursor/projects/d-Website-Sun-Down-Tours/assets',
);

const W = 2400;
const H = 750;
const GAP = 10;
const BG = { r: 18, g: 22, b: 26 };

async function findAttachment(token) {
  if (!existsSync(ATT_DIR)) return null;
  const names = await readdir(ATT_DIR);
  const hit = names.find((n) => n.includes(token));
  return hit ? join(ATT_DIR, hit) : null;
}

async function cover(src, width, height, position = 'attention') {
  return sharp(src)
    .rotate()
    .resize(width, height, { fit: 'cover', position, kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.6 })
    .jpeg({ quality: 94, mozjpeg: true })
    .toBuffer();
}

/** Crop a tall photo so the focal band (0–1 vertical) sits in the output, not the top or floor. */
async function coverFocusY(src, width, height, yCenter) {
  const rotated = sharp(src).rotate();
  const meta = await rotated.metadata();
  const sw = meta.width ?? width;
  const sh = meta.height ?? height;
  const targetRatio = width / height;
  const srcRatio = sw / sh;

  let extract;
  if (srcRatio > targetRatio) {
    const ew = Math.round(sh * targetRatio);
    extract = { left: Math.max(0, Math.round((sw - ew) / 2)), top: 0, width: ew, height: sh };
  } else {
    const eh = Math.min(sh, Math.round(sw / targetRatio));
    let top = Math.round(sh * yCenter - eh / 2);
    top = Math.max(0, Math.min(sh - eh, top));
    extract = { left: 0, top, width: sw, height: eh };
  }

  return sharp(src)
    .rotate()
    .extract(extract)
    .resize(width, height, { fit: 'fill', kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.6 })
    .jpeg({ quality: 94, mozjpeg: true })
    .toBuffer();
}

async function writeCollage(parts, outFile) {
  const canvas = sharp({
    create: { width: W, height: H, channels: 3, background: BG },
  });
  await mkdir(dirname(outFile), { recursive: true });
  await canvas
    .composite(parts)
    .jpeg({ quality: 93, mozjpeg: true, chromaSubsampling: '4:4:4' })
    .toFile(outFile);
  console.log('wrote', outFile.replace(ROOT, ''));
}

async function twoPanel(leftSrc, rightSrc, outFile, leftPos, rightPos, rightY) {
  const leftW = Math.floor((W - GAP) / 2);
  const rightW = W - leftW - GAP;
  const left = await cover(leftSrc, leftW, H, leftPos);
  const right = rightY != null
    ? await coverFocusY(rightSrc, rightW, H, rightY)
    : await cover(rightSrc, rightW, H, rightPos);
  await writeCollage(
    [
      { input: left, left: 0, top: 0 },
      { input: right, left: leftW + GAP, top: 0 },
    ],
    outFile,
  );
}

async function threePanel(aSrc, bSrc, cSrc, outFile, position = 'attention') {
  const cell = Math.floor((W - GAP * 2) / 3);
  const last = W - cell * 2 - GAP * 2;
  const [a, b, c] = await Promise.all([
    cover(aSrc, cell, H, position),
    cover(bSrc, cell, H, position),
    cover(cSrc, last, H, position),
  ]);
  await writeCollage(
    [
      { input: a, left: 0, top: 0 },
      { input: b, left: cell + GAP, top: 0 },
      { input: c, left: cell * 2 + GAP * 2, top: 0 },
    ],
    outFile,
  );
}

async function main() {
  const viewpoint = join(GREECE, 'Greece-3.jpeg');
  const labookellie = join(GREECE, 'Greece-5.jpeg');
  for (const f of [viewpoint, labookellie]) {
    if (!existsSync(f)) throw new Error(`Missing source: ${f}`);
  }
  await twoPanel(
    viewpoint,
    labookellie,
    join(OUT_DIR, 'hero-slide-boards.jpg'),
    'west',
    'centre',
    0.43,
  );
  const mobileBuf = await coverFocusY(labookellie, 900, 1200, 0.4);
  await sharp(mobileBuf)
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(join(OUT_DIR, 'hero-slide-boards-mobile.jpg'));
  console.log('wrote mobile Labookellie crop');
  if (process.argv.includes('--only-boards')) return;

  const sigiriya = join(ROOT, 'src/assets/img/5daysTours/41.webp');
  if (!existsSync(sigiriya)) throw new Error(`Missing source: ${sigiriya}`);

  await sharp(sigiriya)
    .rotate()
    .resize(W, H, { fit: 'cover', position: 'centre', kernel: sharp.kernel.lanczos3 })
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(join(OUT_DIR, '1.jpg'));
  console.log('wrote LCP landscape (no faces)');

  const train = join(GREECE, 'Greece-12.jpeg');
  const galle = join(GREECE, 'Greece-9.jpeg');
  const boat = join(GREECE, 'Greece-15.jpeg');
  const sunset = join(GREECE, 'Greece-21.jpeg');
  const ella = await findAttachment('images_6-320w-');
  const tracks = await findAttachment('images_1-1280w-');
  if (!ella) throw new Error('Missing Ella station attachment (6-320w)');
  if (!tracks) throw new Error('Missing railway tracks attachment (1-1280w)');
  for (const f of [train, galle, boat, sunset]) {
    if (!existsSync(f)) throw new Error(`Missing source: ${f}`);
  }

  await threePanel(train, galle, ella, join(OUT_DIR, 'hero-slide-3.jpg'), 'north');
  await threePanel(sunset, boat, tracks, join(OUT_DIR, 'hero-slide-5.jpg'), 'north');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

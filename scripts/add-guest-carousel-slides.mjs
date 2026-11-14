/**
 * Build homepage hero carousel slides from guest photos (Sigiriya banner, car, home celebration).
 * Usage: node scripts/add-guest-carousel-slides.mjs
 */
import sharp from 'sharp';
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = join(ROOT, 'src/assets/img/mainpage');
const GUESTS_DIR = join(ROOT, 'src/assets/img/guests');
const ATT_DIR = join(
  process.env.USERPROFILE || '',
  '.cursor/projects/d-website-sundown-tours-Sun-Down-Tours/assets',
);

const W = 2400;
const H = 750;
const GAP = 10;
const BG = { r: 18, g: 22, b: 26 };

const SOURCES = {
  celebration: 'WhatsApp_Image_2026-11-08_at_08.24.42-d775ddd5-47c4-42c1-a271-7fb4ff4dee3b.jpg',
  banner: 'WhatsApp_Image_2026-11-08_at_08.24.42__1_-0bbd9753-2e38-4dfe-951a-16f84ea264ea.jpg',
  car: 'WhatsApp_Image_2026-11-08_at_08.24.43-529813b4-c0ff-4eef-acdc-7bbd87389157.jpg',
};

function srcPath(name) {
  const att = join(ATT_DIR, name);
  if (existsSync(att)) return att;
  const local = join(GUESTS_DIR, name);
  if (existsSync(local)) return local;
  throw new Error(`Missing guest photo: ${name}`);
}

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
    .sharpen({ sigma: 0.55 })
    .jpeg({ quality: 93, mozjpeg: true })
    .toBuffer();
}

async function cover(src, width, height, position = 'attention') {
  return sharp(src)
    .rotate()
    .resize(width, height, { fit: 'cover', position, kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.55 })
    .jpeg({ quality: 93, mozjpeg: true })
    .toBuffer();
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  mkdirSync(GUESTS_DIR, { recursive: true });

  const paths = {};
  for (const [key, name] of Object.entries(SOURCES)) {
    const from = srcPath(name);
    const dest = join(GUESTS_DIR, `${key}.jpg`);
    copyFileSync(from, dest);
    paths[key] = dest;
    console.log('copied', key, '→', dest.replace(ROOT, ''));
  }

  // Three-panel hero collage: celebration + Sigiriya banner + car.
  const cell = Math.floor((W - GAP * 2) / 3);
  const last = W - cell * 2 - GAP * 2;
  const [a, b, c] = await Promise.all([
    cover(paths.celebration, cell, H, 'attention'),
    // Lower focus = less cloudy sky, more people/sign.
    coverFocusY(paths.banner, cell, H, 0.52),
    // Lower focus = more car/hood visible, less sky.
    coverFocusY(paths.car, last, H, 0.62),
  ]);
  await sharp({ create: { width: W, height: H, channels: 3, background: BG } })
    .composite([
      { input: a, left: 0, top: 0 },
      { input: b, left: cell + GAP, top: 0 },
      { input: c, left: cell * 2 + GAP * 2, top: 0 },
    ])
    .jpeg({ quality: 93, mozjpeg: true, chromaSubsampling: '4:4:4' })
    .toFile(join(OUT_DIR, 'hero-slide-guest-sigiriya.jpg'));
  console.log('wrote hero-slide-guest-sigiriya.jpg (3-panel)');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

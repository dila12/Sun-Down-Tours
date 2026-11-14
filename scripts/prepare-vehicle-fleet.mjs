/**
 * Prepare Our Vehicles fleet photos: blur plates, crop for cards, write JPEG masters.
 * Usage: node scripts/prepare-vehicle-fleet.mjs
 */
import sharp from 'sharp';
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = join(ROOT, 'src/assets/img/vehicles');
const GUESTS_DIR = join(ROOT, 'src/assets/img/guests');
const ATT_DIR = join(
  process.env.USERPROFILE || '',
  '.cursor/projects/d-website-sundown-tours-Sun-Down-Tours/assets',
);

const OUT_W = 1200;
const OUT_H = 900;

/** Plate boxes as fractions of width/height: [left, top, width, height]. */
const FLEET = [
  {
    id: 'suv-grey-sigiriya',
    file: 'WhatsApp_Image_2026-11-14_at_10.31.49-5091381d-7a7a-4506-a24c-45050ffa0b7b.jpg',
    type: 'suv',
    plate: [0.18, 0.698, 0.32, 0.065],
    yCenter: 0.56,
  },
  {
    id: 'suv-red-vezel',
    file: 'WhatsApp_Image_2026-11-14_at_10.31.58-1da2b0e0-b52c-4f24-8a18-c083d89b9eac.jpg',
    type: 'suv',
    plate: [0.33, 0.49, 0.34, 0.06],
    yCenter: 0.48,
  },
  {
    id: 'kdh-white',
    file: 'WhatsApp_Image_2026-11-14_at_10.32.03-12c86099-67b4-4419-90ad-e7468d3b42c2.jpg',
    type: 'kdh',
    plate: [0.5, 0.555, 0.34, 0.085],
    yCenter: 0.48,
  },
  {
    id: 'kdh-silver',
    file: 'WhatsApp_Image_2026-11-14_at_10.32.10-c1c92e7f-f468-48e7-bd72-e85947ecf1d6.jpg',
    type: 'kdh',
    plate: [0.34, 0.86, 0.32, 0.1],
    yCenter: 0.52,
  },
];

function srcPath(name) {
  const att = join(ATT_DIR, name);
  if (existsSync(att)) return att;
  const local = join(GUESTS_DIR, name);
  if (existsSync(local)) return local;
  throw new Error(`Missing vehicle photo: ${name}`);
}

async function blurPlate(inputPath, plateFrac) {
  const img = sharp(inputPath).rotate();
  const meta = await img.metadata();
  const w = meta.width ?? 1;
  const h = meta.height ?? 1;

  let left = Math.round(plateFrac[0] * w);
  let top = Math.round(plateFrac[1] * h);
  let pw = Math.round(plateFrac[2] * w);
  let ph = Math.round(plateFrac[3] * h);
  left = Math.max(0, Math.min(w - 1, left));
  top = Math.max(0, Math.min(h - 1, top));
  pw = Math.max(8, Math.min(w - left, pw));
  ph = Math.max(8, Math.min(h - top, ph));

  const plateBuf = await sharp(inputPath)
    .rotate()
    .extract({ left, top, width: pw, height: ph })
    .blur(28)
    .toBuffer();

  // Extra soft cover so digits are unreadable
  const cover = await sharp({
    create: {
      width: pw,
      height: ph,
      channels: 4,
      background: { r: 170, g: 170, b: 170, alpha: 0.5 },
    },
  })
    .png()
    .toBuffer();

  const blurredPlate = await sharp(plateBuf)
    .composite([{ input: cover, blend: 'over' }])
    .blur(10)
    .toBuffer();

  return sharp(inputPath)
    .rotate()
    .composite([{ input: blurredPlate, left, top }])
    .jpeg({ quality: 94, mozjpeg: true })
    .toBuffer();
}

async function cropCard(buffer, yCenter) {
  const meta = await sharp(buffer).metadata();
  const sw = meta.width ?? OUT_W;
  const sh = meta.height ?? OUT_H;
  const targetRatio = OUT_W / OUT_H;
  const srcRatio = sw / sh;

  let extract;
  if (srcRatio > targetRatio) {
    const ew = Math.round(sh * targetRatio);
    extract = {
      left: Math.max(0, Math.round((sw - ew) / 2)),
      top: 0,
      width: ew,
      height: sh,
    };
  } else {
    const eh = Math.min(sh, Math.round(sw / targetRatio));
    let top = Math.round(sh * yCenter - eh / 2);
    top = Math.max(0, Math.min(sh - eh, top));
    extract = { left: 0, top, width: sw, height: eh };
  }

  return sharp(buffer)
    .extract(extract)
    .resize(OUT_W, OUT_H, { fit: 'fill', kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.45 })
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  mkdirSync(GUESTS_DIR, { recursive: true });

  for (const item of FLEET) {
    const from = srcPath(item.file);
    copyFileSync(from, join(GUESTS_DIR, item.file));

    const withBlur = await blurPlate(from, item.plate);
    const card = await cropCard(withBlur, item.yCenter);
    const outJpg = join(OUT_DIR, `${item.id}.jpg`);
    await sharp(card).toFile(outJpg);

    // Preview for plate-check
    await sharp(withBlur)
      .resize(480, null, { withoutEnlargement: true })
      .jpeg({ quality: 80 })
      .toFile(join(OUT_DIR, `${item.id}-preview.jpg`));

    console.log('OK', item.id, '->', outJpg);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

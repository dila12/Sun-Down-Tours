/**
 * Recompress WebP/JPG assets still over 250KB (quality-preserving).
 */
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = 'src/assets/img';
const MAX_BYTES = 250 * 1024;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (/\.(jpe?g|png|webp)$/i.test(entry.name)) files.push(full);
  }
  return files;
}

async function compress(file) {
  const info = await stat(file);
  if (info.size <= MAX_BYTES) return false;

  const buf = await sharp(file).toBuffer();
  const meta = await sharp(buf).metadata();
  const width = Math.min(meta.width ?? 1280, 1280);
  let quality = 78;
  let out = await sharp(buf)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toBuffer();

  while (out.length > MAX_BYTES && quality > 45) {
    quality -= 5;
    out = await sharp(buf)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality })
      .toBuffer();
  }

  // Write alongside as .webp if source wasn't webp; overwrite webp in place
  const target = /\.webp$/i.test(file)
    ? file
    : file.replace(/\.(jpe?g|png)$/i, '.webp');

  try {
    await sharp(out).toFile(target + '.tmp.webp');
    const { rename, unlink } = await import('node:fs/promises');
    await rename(target + '.tmp.webp', target);
    console.log(
      `✓ ${file} ${(info.size / 1024).toFixed(0)}KB → ${target} ${(out.length / 1024).toFixed(0)}KB q${quality}`,
    );
    return true;
  } catch (err) {
    console.warn(`✗ ${file}: ${err.message}`);
    return false;
  }
}

const files = await walk(ROOT);
let n = 0;
for (const f of files) {
  if (await compress(f)) n++;
}
console.log(`Done. Compressed ${n} files over 250KB.`);

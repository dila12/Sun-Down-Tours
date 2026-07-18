import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

function extractBlock(src, key) {
  const marker = `  ${key}: {`;
  const start = src.indexOf(marker);
  if (start < 0) return null;
  let i = start + marker.length;
  let depth = 1;
  while (i < src.length && depth > 0) {
    const c = src[i++];
    if (c === '{') depth++;
    else if (c === '}') depth--;
  }
  return src.slice(start, i);
}

const dirs = ['src/app/i18n/tours', 'src/app/i18n/destinations', 'src/app/i18n/guides'];
const skip = new Set([
  'index.ts',
  'catalog.ts',
  'localize.ts',
  'cards.ts',
  'tour-content.service.ts',
  'tour-related-graph.ts',
]);

let updated = 0;
for (const dir of dirs) {
  for (const f of await readdir(dir)) {
    if (!f.endsWith('.ts') || skip.has(f)) continue;
    const path = join(dir, f);
    let src = await readFile(path, 'utf8');
    if (src.includes('  nl: {')) continue;
    const deText = extractBlock(src, 'de');
    if (!deText) {
      console.log('no de', path);
      continue;
    }
    const nlText = deText.replace('  de: {', '  nl: {');
    const trimmed = src.replace(/\s*$/, '');
    if (!trimmed.endsWith('};')) {
      console.log('unexpected end', path);
      continue;
    }
    // Remove trailing }; then add ,\n nl block \n};
    const body = trimmed.slice(0, -2).replace(/\s*$/, '');
    const withComma = body.endsWith(',') ? body : `${body},`;
    src = `${withComma}\n${nlText}\n};\n`;
    await writeFile(path, src);
    updated++;
    console.log('ok', path);
  }
}
console.log('Updated', updated);

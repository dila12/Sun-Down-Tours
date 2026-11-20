import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

function removeFirstObject(src, key) {
  const start = src.indexOf(`${key}: {`);
  if (start < 0) return src;
  const second = src.indexOf(`${key}: {`, start + 1);
  if (second < 0) return src;
  let i = start + `${key}: {`.length;
  let depth = 1;
  while (i < src.length && depth > 0) {
    const ch = src[i++];
    if (ch === '{') depth++;
    else if (ch === '}') depth--;
  }
  while (i < src.length && /[\s,]/.test(src[i])) i++;
  return src.slice(0, start) + src.slice(i);
}

for (const loc of ['es', 'pl', 'nl']) {
  const file = join(process.cwd(), 'src/app/i18n/content', `${loc}.ts`);
  let src = readFileSync(file, 'utf8');
  const before = (src.match(/restaurantsExplore:\s*\{/g) || []).length;
  src = removeFirstObject(src, 'restaurantsExplore');
  const after = (src.match(/restaurantsExplore:\s*\{/g) || []).length;
  writeFileSync(file, src);
  console.log(loc, before, '->', after);
}

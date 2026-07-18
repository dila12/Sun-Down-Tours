import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const locs = ['en', 'de', 'fr', 'it', 'es', 'pl', 'ru', 'nl'];
const pages = ['home', 'tours', 'about', 'tour7', 'destSigiriya', 'guideBestTime'];

function getField(src, pageId, field) {
  const re = new RegExp(
    `${pageId}:\\s*\\{[\\s\\S]*?${field}:\\s*['"]([^'"]+)['"]`,
  );
  const m = src.match(re);
  return m ? m[1] : null;
}

const dicts = {};
for (const loc of locs) {
  dicts[loc] = readFileSync(join('src/app/i18n/content', `${loc}.ts`), 'utf8');
}

console.log('=== SEO TITLE SAMPLES ===');
for (const p of pages) {
  console.log(`\n${p}`);
  for (const loc of locs) {
    console.log(`  ${loc}: ${getField(dicts[loc], p, 'title') || 'MISSING'}`);
  }
}

console.log('\n=== common.cta.bookNow ===');
for (const loc of locs) {
  const m = dicts[loc].match(/bookNow:\s*['"]([^'"]+)['"]/);
  console.log(loc, m ? m[1] : 'MISSING');
}

console.log('\n=== seo title counts ===');
for (const loc of locs) {
  const i = dicts[loc].indexOf('seo:');
  const chunk = dicts[loc].slice(i);
  console.log(loc, (chunk.match(/title:/g) || []).length);
}

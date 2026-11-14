/**
 * Applies SEO_CTR_COPY into src/app/i18n/content/{locale}.ts seo blocks.
 * Usage: node scripts/apply-seo-ctr-copy.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SEO_CTR_COPY, assertSeoCtrCopy } from './seo-ctr-copy.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
assertSeoCtrCopy();

function esc(value) {
  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function formatBlock(page) {
  return `title: '${esc(page.title)}',
      description:
        '${esc(page.description)}',
      keywords: '${esc(page.keywords)}',`;
}

for (const [locale, pages] of Object.entries(SEO_CTR_COPY)) {
  const path = join(root, 'src', 'app', 'i18n', 'content', `${locale}.ts`);
  let text = readFileSync(path, 'utf8');
  const seoStart = text.indexOf('\n  seo: {');
  if (seoStart < 0) throw new Error(`${locale}: seo block missing`);
  let seo = text.slice(seoStart);
  let updated = 0;
  for (const [pageId, page] of Object.entries(pages)) {
    const re = new RegExp(
      `(\\n\\s*${pageId}:\\s*\\{)([\\s\\S]*?)(\\n\\s*\\},)`,
    );
    if (!re.test(seo)) {
      console.warn(`${locale}: missing seo.${pageId}`);
      continue;
    }
    seo = seo.replace(re, (_m, open, _body, close) => {
      updated += 1;
      return `${open}\n      ${formatBlock(page)}${close}`;
    });
  }
  text = text.slice(0, seoStart) + seo;
  writeFileSync(path, text);
  console.log(`${locale}: updated ${updated} seo pages`);
}

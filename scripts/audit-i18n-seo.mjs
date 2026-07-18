/**
 * Audit missing page slugs and seo.* keys per locale.
 * Usage: node scripts/audit-i18n-seo.mjs
 */
import { PAGES, LOCALES, DEFAULT_LOCALE } from '../src/app/i18n/site-data.mjs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

// Dynamic TS content is not loaded here — check slugs only + list expected seo ids.
const missingSlugs = [];
for (const page of PAGES) {
  for (const locale of LOCALES) {
    if (page.slugs[locale] === undefined || page.slugs[locale] === null) {
      missingSlugs.push(`${page.id}/${locale}`);
    }
  }
}

console.log('=== Slug audit ===');
if (missingSlugs.length) {
  console.log('MISSING slugs:', missingSlugs.join(', '));
  process.exitCode = 1;
} else {
  console.log(`OK: all ${PAGES.length} pages have slugs for ${LOCALES.length} locales`);
}

const indexed = PAGES.filter((p) => p.index);
console.log(`Indexed pages: ${indexed.length}; total pages: ${PAGES.length}`);
console.log('Locales:', LOCALES.join(', '), '(default', DEFAULT_LOCALE + ')');

const scaffoldIds = PAGES.filter((p) => !p.index && (p.kind === 'destination' || p.kind === 'guide')).map(
  (p) => p.id,
);
console.log('P2 scaffold (noindex) page ids:', scaffoldIds.length);

import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { PAGES, LOCALES, buildUrl, buildAlternates } from '../src/app/i18n/site-data.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_FILE = join(__dirname, '..', 'public', 'sitemap.xml');

function xmlEscape(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildUrlEntry(page, locale, lastmod) {
  const loc = buildUrl(page.id, locale);
  const alternates = buildAlternates(page.id)
    .map(
      (alt) =>
        `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${xmlEscape(alt.href)}" />`,
    )
    .join('\n');

  return [
    '  <url>',
    `    <loc>${xmlEscape(loc)}</loc>`,
    alternates,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${page.changefreq ?? 'monthly'}</changefreq>`,
    `    <priority>${(page.priority ?? 0.6).toFixed(2)}</priority>`,
    '  </url>',
  ].join('\n');
}

async function main() {
  const lastmod = new Date().toISOString().split('T')[0];
  const indexablePages = PAGES.filter((page) => page.index);

  const entries = [];
  for (const page of indexablePages) {
    for (const locale of LOCALES) {
      entries.push(buildUrlEntry(page, locale, lastmod));
    }
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    entries.join('\n'),
    '</urlset>',
    '',
  ].join('\n');

  await writeFile(OUT_FILE, xml, 'utf8');
  console.log(
    `Wrote ${entries.length} URLs (${indexablePages.length} pages x ${LOCALES.length} locales) to ${OUT_FILE}`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

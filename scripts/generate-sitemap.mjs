import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { PAGES, LOCALES, BASE_URL, buildUrl, buildAlternates } from '../src/app/i18n/site-data.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');

const GUIDE_HERO_IMAGES = {
  guideBestTime: 'assets/img/mainpage/1.webp',
  guideVisa: 'assets/img/mainpage/2.webp',
  guidePrivateDriver: 'assets/img/mainpage/3.webp',
  guideBudget: 'assets/img/mainpage/4.webp',
  guideWildlife: 'assets/img/5daysTours/45.webp',
  guideSafari: 'assets/img/5daysTours/33.webp',
  guideBeaches: 'assets/img/mainpage/5.webp',
  guideTeaCountry: 'assets/img/mainpage/6.webp',
  guideFood: 'assets/img/5daysTours/9.webp',
  guidePacking: 'assets/img/5daysTours/17.webp',
  guideSafety: 'assets/img/5daysTours/26.webp',
  guides: 'assets/img/mainpage/1.webp',
};

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

function buildHreflangEntry(pageId) {
  const lines = ['  <url>'];
  for (const alt of buildAlternates(pageId)) {
    lines.push(
      `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${xmlEscape(alt.href)}" />`,
    );
  }
  // Primary loc = x-default / English canonical for the cluster
  lines.push(`    <loc>${xmlEscape(buildUrl(pageId, 'en'))}</loc>`);
  lines.push('  </url>');
  return lines.join('\n');
}

function absoluteAsset(path) {
  return `${BASE_URL}/${path.replace(/^\//, '')}`;
}

function buildImageEntry(pageId, locale, imagePath, lastmod) {
  const loc = buildUrl(pageId, locale);
  const title = pageId;
  return [
    '  <url>',
    `    <loc>${xmlEscape(loc)}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    '    <image:image>',
    `      <image:loc>${xmlEscape(absoluteAsset(imagePath))}</image:loc>`,
    `      <image:title>${xmlEscape(title)}</image:title>`,
    '    </image:image>',
    '  </url>',
  ].join('\n');
}

async function main() {
  const lastmod = new Date().toISOString().split('T')[0];
  const indexablePages = PAGES.filter((page) => page.index);

  const urlEntries = [];
  for (const page of indexablePages) {
    for (const locale of LOCALES) {
      urlEntries.push(buildUrlEntry(page, locale, lastmod));
    }
  }

  const sitemapXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    urlEntries.join('\n'),
    '</urlset>',
    '',
  ].join('\n');

  const hreflangEntries = indexablePages.map((page) => buildHreflangEntry(page.id));
  const hreflangXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    hreflangEntries.join('\n'),
    '</urlset>',
    '',
  ].join('\n');

  const imagePages = indexablePages.filter(
    (page) => page.kind === 'guide' || page.id === 'guides' || GUIDE_HERO_IMAGES[page.id],
  );
  const imageEntries = [];
  for (const page of imagePages) {
    const imagePath = GUIDE_HERO_IMAGES[page.id];
    if (!imagePath) continue;
    for (const locale of LOCALES) {
      imageEntries.push(buildImageEntry(page.id, locale, imagePath, lastmod));
    }
  }

  const imageXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    imageEntries.join('\n'),
    '</urlset>',
    '',
  ].join('\n');

  const indexXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    '  <sitemap>',
    `    <loc>${BASE_URL}/sitemap.xml</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    '  </sitemap>',
    '  <sitemap>',
    `    <loc>${BASE_URL}/sitemap-hreflang.xml</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    '  </sitemap>',
    '  <sitemap>',
    `    <loc>${BASE_URL}/sitemap-images.xml</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    '  </sitemap>',
    '</sitemapindex>',
    '',
  ].join('\n');

  await writeFile(join(PUBLIC_DIR, 'sitemap.xml'), sitemapXml, 'utf8');
  await writeFile(join(PUBLIC_DIR, 'sitemap-hreflang.xml'), hreflangXml, 'utf8');
  await writeFile(join(PUBLIC_DIR, 'sitemap-images.xml'), imageXml, 'utf8');
  await writeFile(join(PUBLIC_DIR, 'sitemap-index.xml'), indexXml, 'utf8');

  console.log(
    `Wrote sitemap.xml (${urlEntries.length} URLs), sitemap-hreflang.xml (${hreflangEntries.length} clusters), sitemap-images.xml (${imageEntries.length} image URLs), sitemap-index.xml`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

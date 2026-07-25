import { writeFile, unlink } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import {
  BASE_URL,
  collectSitemapEntries,
  formatLastmod,
  validateHreflangReciprocity,
  xmlEscape,
} from './sitemap-utils.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = join(__dirname, '..');
const PUBLIC_DIR = join(ROOT_DIR, 'public');

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

function buildUrlEntry(entry) {
  const alternatesXml = entry.alternates
    .map(
      (alt) =>
        `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${xmlEscape(alt.href)}" />`,
    )
    .join('\n');

  return [
    '  <url>',
    `    <loc>${xmlEscape(entry.url)}</loc>`,
    alternatesXml,
    `    <lastmod>${entry.lastmod}</lastmod>`,
    `    <changefreq>${entry.page.changefreq ?? 'monthly'}</changefreq>`,
    `    <priority>${(entry.page.priority ?? 0.6).toFixed(2)}</priority>`,
    '  </url>',
  ].join('\n');
}

function absoluteAsset(path) {
  return `${BASE_URL}/${path.replace(/^\//, '')}`;
}

function buildImageEntry(entry, imagePath) {
  return [
    '  <url>',
    `    <loc>${xmlEscape(entry.url)}</loc>`,
    `    <lastmod>${entry.lastmod}</lastmod>`,
    '    <image:image>',
    `      <image:loc>${xmlEscape(absoluteAsset(imagePath))}</image:loc>`,
    `      <image:title>${xmlEscape(entry.page.id)}</image:title>`,
    '    </image:image>',
    '  </url>',
  ].join('\n');
}

async function main() {
  const { included, excluded, candidateCount } = collectSitemapEntries(ROOT_DIR);

  const reciprocity = validateHreflangReciprocity(included);
  if (!reciprocity.ok) {
    console.warn('[sitemap] hreflang reciprocity warnings:');
    for (const issue of reciprocity.issues) {
      console.warn(`  - ${issue}`);
    }
  } else {
    console.log('[sitemap] hreflang reciprocity: all clusters OK');
  }

  if (excluded.length > 0) {
    const byReason = excluded.reduce((acc, row) => {
      acc[row.reason] = (acc[row.reason] ?? 0) + 1;
      return acc;
    }, {});
    console.log(
      `[sitemap] filtered ${excluded.length} of ${candidateCount} candidates:`,
      byReason,
    );
  }

  const urlEntries = included.map(buildUrlEntry);
  const sitemapXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    urlEntries.join('\n'),
    '</urlset>',
    '',
  ].join('\n');

  const imagePageIds = new Set(
    included
      .filter(
        ({ page }) =>
          page.kind === 'guide' || page.id === 'guides' || GUIDE_HERO_IMAGES[page.id],
      )
      .map(({ page }) => page.id),
  );

  const imageEntries = [];
  for (const entry of included) {
    if (!imagePageIds.has(entry.page.id)) continue;
    const imagePath = GUIDE_HERO_IMAGES[entry.page.id];
    if (!imagePath) continue;
    imageEntries.push(buildImageEntry(entry, imagePath));
  }

  const imageXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    imageEntries.join('\n'),
    '</urlset>',
    '',
  ].join('\n');

  const indexLastmod = formatLastmod(
    Math.max(...included.map((e) => e.lastmodMs), Date.now()),
  );

  const indexXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    '  <sitemap>',
    `    <loc>${BASE_URL}/sitemap.xml</loc>`,
    `    <lastmod>${indexLastmod}</lastmod>`,
    '  </sitemap>',
    '  <sitemap>',
    `    <loc>${BASE_URL}/sitemap-images.xml</loc>`,
    `    <lastmod>${indexLastmod}</lastmod>`,
    '  </sitemap>',
    '</sitemapindex>',
    '',
  ].join('\n');

  await writeFile(join(PUBLIC_DIR, 'sitemap.xml'), sitemapXml, 'utf8');
  await writeFile(join(PUBLIC_DIR, 'sitemap-images.xml'), imageXml, 'utf8');
  await writeFile(join(PUBLIC_DIR, 'sitemap-index.xml'), indexXml, 'utf8');

  const legacyHreflangPath = join(PUBLIC_DIR, 'sitemap-hreflang.xml');
  if (existsSync(legacyHreflangPath)) {
    await unlink(legacyHreflangPath);
    console.log('[sitemap] removed legacy sitemap-hreflang.xml (hreflang merged into sitemap.xml)');
  }

  const sample = included.slice(0, 3).map((e) => ({
    loc: e.url,
    lastmod: e.lastmod,
    alternateCount: e.alternates.length,
    alternates: e.alternates.map((a) => `${a.hreflang}→${a.href}`),
  }));

  console.log(
    JSON.stringify(
      {
        urls: {
          candidates: candidateCount,
          included: included.length,
          excluded: excluded.length,
        },
        hreflang: {
          reciprocityOk: reciprocity.ok,
          issueCount: reciprocity.issues.length,
          issues: reciprocity.issues.slice(0, 10),
        },
        sampleEntries: sample,
      },
      null,
      2,
    ),
  );

  console.log(
    `Wrote sitemap.xml (${included.length} URLs), sitemap-images.xml (${imageEntries.length} image URLs), sitemap-index.xml`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

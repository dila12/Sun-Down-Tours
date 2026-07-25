import { readFileSync, existsSync } from 'node:fs';

import { PAGES, INDEXABLE_LOCALES, BASE_URL, buildUrl, buildAlternates } from '../src/app/i18n/site-data.mjs';
import {
  isSitemapEligible,
  collectSitemapEntries,
  validateHreflangReciprocity,
} from './sitemap-utils.mjs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = join(__dirname, '..');

const indexable = PAGES.filter((p) => p.index);
const nonIndex = PAGES.filter((p) => !p.index);

const sitemap = readFileSync('public/sitemap.xml', 'utf8');
const images = readFileSync('public/sitemap-images.xml', 'utf8');
const index = readFileSync('public/sitemap-index.xml', 'utf8');
const robots = readFileSync('public/robots.txt', 'utf8');

function locs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const mainLocs = locs(sitemap);
const allImgLocs = locs(images);
const imgPageLocs = allImgLocs.filter((u) => !u.includes('/assets/'));
const imgAssets = allImgLocs.filter((u) => u.includes('/assets/'));

const expected = [];
for (const p of indexable) {
  for (const l of INDEXABLE_LOCALES) {
    if (isSitemapEligible(p, l)) {
      expected.push(buildUrl(p.id, l));
    }
  }
}

const { included, excluded } = collectSitemapEntries(ROOT_DIR);
const reciprocity = validateHreflangReciprocity(included);

const mainSet = new Set(mainLocs);
const expectedSet = new Set(expected);
const missing = expected.filter((u) => !mainSet.has(u));
const extra = mainLocs.filter((u) => !expectedSet.has(u));
const seen = new Set();
const dupMain = [];
for (const u of mainLocs) {
  if (seen.has(u)) dupMain.push(u);
  seen.add(u);
}

const badScheme = mainLocs.filter((u) => !u.startsWith(`${BASE_URL}/`) && u !== `${BASE_URL}/`);
const httpOnly = mainLocs.filter((u) => u.startsWith('http://'));

const noindexUrls = [];
for (const p of nonIndex) {
  for (const l of INDEXABLE_LOCALES) {
    noindexUrls.push(buildUrl(p.id, l));
  }
}
const leaked = noindexUrls.filter((u) => mainSet.has(u));

const xhtmlCount = (sitemap.match(/xhtml:link/g) || []).length;
const robotsLines = robots
  .split(/\r?\n/)
  .filter((l) => l.toLowerCase().startsWith('sitemap:'));

const lastmods = [...sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]);
const uniqueLastmods = new Set(lastmods);

console.log(
  JSON.stringify(
    {
      files: {
        index: existsSync('public/sitemap-index.xml'),
        main: existsSync('public/sitemap.xml'),
        hreflangLegacy: existsSync('public/sitemap-hreflang.xml'),
        images: existsSync('public/sitemap-images.xml'),
      },
      counts: {
        indexablePages: indexable.length,
        indexableLocales: INDEXABLE_LOCALES.length,
        expectedUrls: expected.length,
        mainLocs: mainLocs.length,
        filteredExcluded: excluded.length,
        imagePageLocs: imgPageLocs.length,
        imageAssetLocs: imgAssets.length,
        xhtmlLinksInMain: xhtmlCount,
        uniqueLastmodDates: uniqueLastmods.size,
        lastmodSample: [...uniqueLastmods].slice(0, 5),
      },
      missingFromMain: missing,
      extraInMain: extra,
      duplicateMain: [...new Set(dupMain)],
      badDomainOrSchemeCount: badScheme.length,
      badDomainSample: badScheme.slice(0, 5),
      httpUrls: httpOnly.length,
      noindexLeaked: leaked,
      nonIndexPageIds: nonIndex.map((p) => p.id),
      hreflangReciprocity: {
        ok: reciprocity.ok,
        issueCount: reciprocity.issues.length,
        sample: reciprocity.issues.slice(0, 10),
      },
      relativeImages: imgAssets.filter((u) => !u.startsWith('https://')).length,
      robotsSitemapLines: robotsLines,
      indexChildren: locs(index),
      imageTitleSample: [...images.matchAll(/<image:title>([^<]*)<\/image:title>/g)]
        .slice(0, 3)
        .map((m) => m[1]),
      cancellationIndexed: indexable.some((p) => p.id === 'cancellation'),
      mainHasNamespaces:
        sitemap.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"') &&
        sitemap.includes('xmlns:xhtml="http://www.w3.org/1999/xhtml"'),
      imageHasNamespace: images.includes(
        'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"',
      ),
      perPageAlternateCounts: indexable.slice(0, 3).map((p) => ({
        pageId: p.id,
        alternates: buildAlternates(p.id).length,
      })),
    },
    null,
    2,
  ),
);

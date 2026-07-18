import { readFileSync, existsSync } from 'node:fs';
import { PAGES, LOCALES, BASE_URL, buildUrl, buildAlternates } from '../src/app/i18n/site-data.mjs';

const indexable = PAGES.filter((p) => p.index);
const nonIndex = PAGES.filter((p) => !p.index);

const sitemap = readFileSync('public/sitemap.xml', 'utf8');
const hreflang = readFileSync('public/sitemap-hreflang.xml', 'utf8');
const images = readFileSync('public/sitemap-images.xml', 'utf8');
const index = readFileSync('public/sitemap-index.xml', 'utf8');
const robots = readFileSync('public/robots.txt', 'utf8');

function locs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const mainLocs = locs(sitemap);
const hrefLocs = locs(hreflang);
const allImgLocs = locs(images);
const imgPageLocs = allImgLocs.filter((u) => !u.includes('/assets/'));
const imgAssets = allImgLocs.filter((u) => u.includes('/assets/'));

const expected = [];
for (const p of indexable) {
  for (const l of LOCALES) {
    expected.push(buildUrl(p.id, l));
  }
}

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

const recipIssues = [];
for (const p of indexable) {
  const alts = buildAlternates(p.id);
  if (alts.length !== 8) recipIssues.push(`${p.id}: alt count ${alts.length}`);
  const targets = alts.map((a) => a.href);
  if (new Set(targets).size !== targets.length) recipIssues.push(`${p.id}: dup targets`);
  const langs = alts.map((a) => a.hreflang).sort().join(',');
  const expectedLangs = [...LOCALES, 'x-default'].sort().join(',');
  if (langs !== expectedLangs) recipIssues.push(`${p.id}: langs ${langs}`);
}

const noindexUrls = [];
for (const p of nonIndex) {
  for (const l of LOCALES) noindexUrls.push(buildUrl(p.id, l));
}
const leaked = noindexUrls.filter((u) => mainSet.has(u));

const hrefNonEn = hrefLocs.filter((u) => {
  const path = u.replace(BASE_URL, '');
  return /^\/(de|fr|it|es|pl|ru)(\/|$)/.test(path);
});

const xhtmlCount = (sitemap.match(/xhtml:link/g) || []).length;
const robotsLines = robots
  .split(/\r?\n/)
  .filter((l) => l.toLowerCase().startsWith('sitemap:'));

console.log(
  JSON.stringify(
    {
      files: {
        index: existsSync('public/sitemap-index.xml'),
        main: existsSync('public/sitemap.xml'),
        hreflang: existsSync('public/sitemap-hreflang.xml'),
        images: existsSync('public/sitemap-images.xml'),
      },
      counts: {
        indexablePages: indexable.length,
        locales: LOCALES.length,
        expectedUrls: expected.length,
        mainLocs: mainLocs.length,
        hreflangLocs: hrefLocs.length,
        imagePageLocs: imgPageLocs.length,
        imageAssetLocs: imgAssets.length,
        xhtmlLinksInMain: xhtmlCount,
      },
      missingFromMain: missing,
      extraInMain: extra,
      duplicateMain: [...new Set(dupMain)],
      badDomainOrSchemeCount: badScheme.length,
      badDomainSample: badScheme.slice(0, 5),
      httpUrls: httpOnly.length,
      noindexLeaked: leaked,
      nonIndexPageIds: nonIndex.map((p) => p.id),
      reciprocalIssueCount: recipIssues.length,
      reciprocalSample: recipIssues.slice(0, 5),
      relativeImages: imgAssets.filter((u) => !u.startsWith('https://')).length,
      hreflangSitemapNonEnLocs: hrefNonEn.length,
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
    },
    null,
    2,
  ),
);

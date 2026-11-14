/**
 * Asserts GSC "Page with redirect" sources resolve in one hop.
 * Run: node scripts/test-edge-redirects.mjs
 */
import { readFileSync } from 'node:fs';
import {
  buildApexMergedPathRedirects,
  buildApexShortcutRedirects,
  buildDormantLocaleVercelRedirects,
  buildEdgeRedirectMap,
  buildLocaleHomeTrailingSlashRedirects,
  resolveApexWwwDestination,
  resolveEdgeRedirect,
} from '../src/app/i18n/edge-redirects.mjs';
import { BASE_URL, DORMANT_LOCALE_PREFIXES, NON_DEFAULT_LOCALES } from '../src/app/i18n/site-data.mjs';

/** @type {[string, string | null][]} */
const cases = [
  ['/lt', '/'],
  ['/lt/', '/'],
  ['/lt/privacy-policy', '/privacy-policy'],
  ['/cs/', '/'],
  ['/en/', '/'],
  ['/en', '/'],
  ['/lv', '/'],
  ['/el/', '/'],
  ['/pl/', '/pl'],
  ['/ru/', '/ru'],
  ['/de/', '/de'],
  ['/it/', '/it'],
  ['/pl', null],
  ['/ru', null],
  ['/nl/', '/nl'],
  ['/index.html', '/'],
  ['/contact', '/contact-us'],
  ['/packages', '/sri-lanka-private-tour'],
  ['/tour-packages', '/sri-lanka-private-tour'],
  ['/tours', '/sri-lanka-private-tour'],
  ['/sri-lanka-tours', '/sri-lanka-private-tour'],
  ['/sri-lanka-tour-packages', '/sri-lanka-private-tour'],
  ['/sri-lanka-holidays', '/sri-lanka-private-tour'],
  ['/sri-lanka-vacation', '/sri-lanka-private-tour'],
  ['/de/tours', '/de/sri-lanka-rundreise'],
  ['/twodaystours', '/sri-lanka-private-tour'],
  ['/2-day-sri-lanka-tour', '/2-day-ella-kandy-private-tour-sri-lanka'],
  ['/zh', '/'],
  ['/zh/', '/'],
  [
    '/it/guides/osservazione-balene-sri-lanka',
    '/travel-guides/sri-lanka-whale-watching',
  ],
  [
    '/it/guides/trasferte-aeroporto-sri-lanka',
    '/it/guide/transfer-aeroporto-sri-lanka',
  ],
  ['/it/guide/avvistamento-balene-sri-lanka', '/travel-guides/sri-lanka-whale-watching'],
  ['/it/restaurants-in-sri-lanka', '/it/ristoranti-in-sri-lanka'],
  ['/de/2-day-ella-kandy-private-tour-sri-lanka', '/de/2-tage-ella-kandy-private-rundreise'],
  ['/ru/5-day-sri-lanka-tour', '/ru/5-dnevnyy-tur-shri-lanka'],
  ['/de/5-day-sri-lanka-tour', '/de/5-tage-sri-lanka-rundreise'],
  ['/it/sigiriya-day-tour', '/it/escursione-giornaliera-sigiriya'],
  ['/de/customer-testimonials', '/de/kundenbewertungen'],
  ['/es/customer-testimonials', '/es/opiniones-clientes'],
  ['/ru/galle-sri-lanka', '/ru/galle-shri-lanka'],
  ['/ru/dambulla-sri-lanka', '/ru/dambulla-shri-lanka'],
  ['/de/4-day-sri-lanka-tour', '/de/4-tage-sri-lanka-rundreise'],
  ['/pl/galle-day-tour', '/pl/wycieczka-jednodniowa-galle'],
  ['/ru/restaurants-in-sri-lanka', '/ru/restorany-na-shri-lanka'],
  ['/es/welligama-sri-lanka', '/es/weligama-sri-lanka'],
  ['/welligama-sri-lanka', '/weligama-sri-lanka'],
  ['/ru/welligama-sri-lanka', '/ru/veligama-shri-lanka'],
  ['/it/7-cay-sri-lanka-tour', '/it/tour-sri-lanka-7-giorni'],
  ['/7-cay-sri-lanka-tour', '/7-day-sri-lanka-tour'],
  ['/de/7-cay-sri-lanka-tour', '/de/7-tage-sri-lanka-rundreise'],
  ['/pl/colombo-sri-lanka', '/pl/kolombo-sri-lanka'],
  ['/ru/colombo-sri-lanka', '/ru/kolombo-shri-lanka'],
  ['/de/colombo-sri-lanka', null],
  ['/de/hiriketiya-sri-lanka', '/hiriketiya-sri-lanka'],
  ['/ru/hiriketiya-shri-lanka', '/hiriketiya-sri-lanka'],
  ['/pl/kolombo-sri-lanka', null],
  // Localized policy / restaurant slugs (EN roots unchanged).
  ['/es/cancellation-policy', '/es/politica-de-cancelacion'],
  ['/de/privacy-policy', '/de/datenschutz'],
  ['/fr/cancellation-policy', '/fr/politique-d-annulation'],
  ['/de/restaurants-in-sri-lanka', '/de/wo-essen-sri-lanka'],
  ['/nl/restaurants-in-sri-lanka', '/nl/waar-eten-sri-lanka'],
  ['/privacy-policy', null],
  ['/cancellation-policy', null],
  ['/es/politica-de-cancelacion', null],
  // Final destinations must not redirect again.
  ['/contact-us', null],
  ['/de/5-tage-sri-lanka-rundreise', null],
  ['/it/escursione-giornaliera-sigiriya', null],
  ['/ru/restorany-na-shri-lanka', null],
  ['/es/opiniones-clientes', null],
  ['/ru/dambulla-shri-lanka', null],
  ['/travel-guides/sri-lanka-whale-watching', null],
];

let failed = 0;
for (const [from, expected] of cases) {
  const actual = resolveEdgeRedirect(from);
  if (actual !== expected) {
    failed += 1;
    console.error(`FAIL ${from} → ${JSON.stringify(actual)} (expected ${JSON.stringify(expected)})`);
  }
}

const map = buildEdgeRedirectMap();
for (const [from, to] of map) {
  const again = resolveEdgeRedirect(to, map);
  if (again) {
    failed += 1;
    console.error(`FAIL chain ${from} → ${to} → ${again}`);
  }
}

if (!DORMANT_LOCALE_PREFIXES.includes('lt')) {
  failed += 1;
  console.error('FAIL DORMANT_LOCALE_PREFIXES missing lt');
}
if (!DORMANT_LOCALE_PREFIXES.includes('en')) {
  failed += 1;
  console.error('FAIL DORMANT_LOCALE_PREFIXES missing en');
}
for (const live of NON_DEFAULT_LOCALES) {
  if (DORMANT_LOCALE_PREFIXES.includes(live)) {
    failed += 1;
    console.error(`FAIL live locale ${live} must not be dormant`);
  }
}

const dormantRules = buildDormantLocaleVercelRedirects();
if (
  dormantRules.length !== 3 ||
  !dormantRules[0].source.includes('lt') ||
  dormantRules[0].destination !== '/' ||
  !dormantRules[1].source.endsWith('/') ||
  !dormantRules[2].source.includes(':path*')
) {
  failed += 1;
  console.error('FAIL Vercel dormant locale group rules');
}

const localeSlash = buildLocaleHomeTrailingSlashRedirects();
if (
  localeSlash.length !== 1 ||
  !localeSlash[0].source.includes('pl') ||
  localeSlash[0].destination !== '/:locale'
) {
  failed += 1;
  console.error('FAIL Vercel locale-home trailing-slash rule');
}

const apexShortcuts = buildApexShortcutRedirects();
const expectedApexLocaleHomes = NON_DEFAULT_LOCALES.length;
if (
  apexShortcuts.length !== expectedApexLocaleHomes + 3 ||
  !apexShortcuts.some((r) => r.source === '/pl/' && r.destination === 'https://www.sundowntours.com/pl') ||
  !apexShortcuts.some((r) => r.source.includes('zh') && r.destination === 'https://www.sundowntours.com/')
) {
  failed += 1;
  console.error('FAIL Vercel apex shortcut redirects');
}

/** @type {[string, string][]} */
const apexCases = [
  ['/', 'https://www.sundowntours.com/'],
  ['/pl/', 'https://www.sundowntours.com/pl'],
  ['/it/', 'https://www.sundowntours.com/it'],
  ['/ru/', 'https://www.sundowntours.com/ru'],
  ['/zh/', 'https://www.sundowntours.com/'],
  ['/index.html', 'https://www.sundowntours.com/'],
  ['/contact', 'https://www.sundowntours.com/contact-us'],
  ['/de/5-day-sri-lanka-tour', 'https://www.sundowntours.com/de/5-tage-sri-lanka-rundreise'],
  ['/it/sigiriya-day-tour', 'https://www.sundowntours.com/it/escursione-giornaliera-sigiriya'],
  ['/ru/restaurants-in-sri-lanka', 'https://www.sundowntours.com/ru/restorany-na-shri-lanka'],
  ['/es/customer-testimonials', 'https://www.sundowntours.com/es/opiniones-clientes'],
  ['/ru/dambulla-sri-lanka', 'https://www.sundowntours.com/ru/dambulla-shri-lanka'],
];
for (const [path, expected] of apexCases) {
  const actual = resolveApexWwwDestination(path, map);
  if (actual !== expected) {
    failed += 1;
    console.error(`FAIL apex ${path} → ${JSON.stringify(actual)} (expected ${JSON.stringify(expected)})`);
  }
}

const apexMerged = buildApexMergedPathRedirects(map);
const mustMerge = [
  '/de/5-day-sri-lanka-tour',
  '/contact',
  '/index.html',
  '/es/customer-testimonials',
];
for (const source of mustMerge) {
  const rule = apexMerged.find((r) => r.source === source);
  if (!rule || !rule.destination.startsWith('https://www.sundowntours.com/')) {
    failed += 1;
    console.error(`FAIL missing apex-merged rule for ${source}`);
  }
}

const sitemap = readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
const sitemapLocs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
for (const loc of sitemapLocs) {
  let url;
  try {
    url = new URL(loc);
  } catch {
    failed += 1;
    console.error(`FAIL sitemap loc is not a URL: ${loc}`);
    continue;
  }
  if (url.origin !== BASE_URL) {
    failed += 1;
    console.error(`FAIL sitemap loc must be on ${BASE_URL}: ${loc}`);
  }
  if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
    failed += 1;
    console.error(`FAIL sitemap loc has trailing slash (redirects): ${loc}`);
  }
  const redirectTo = resolveEdgeRedirect(url.pathname);
  if (redirectTo) {
    failed += 1;
    console.error(`FAIL sitemap loc redirects ${url.pathname} → ${redirectTo}`);
  }
}

// hreflang alternates inside sitemap must also be final URLs
const hrefAlts = [...sitemap.matchAll(/hreflang="[^"]+"\s+href="([^"]+)"/g)].map((m) => m[1]);
for (const href of hrefAlts) {
  let url;
  try {
    url = new URL(href);
  } catch {
    failed += 1;
    console.error(`FAIL hreflang href is not a URL: ${href}`);
    continue;
  }
  const redirectTo = resolveEdgeRedirect(url.pathname);
  if (redirectTo) {
    failed += 1;
    console.error(`FAIL hreflang href redirects ${url.pathname} → ${redirectTo}`);
  }
}

if (failed) {
  console.error(`[edge-redirects] ${failed} assertion(s) failed`);
  process.exit(1);
}

console.log(
  `[edge-redirects] ${cases.length} path cases + ${apexCases.length} apex merges OK; ` +
    `${apexMerged.length} apex-merged rules; ${DORMANT_LOCALE_PREFIXES.length} dormant prefixes`,
);

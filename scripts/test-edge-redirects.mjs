/**
 * Asserts GSC "Page with redirect" sources resolve in one hop.
 * Run: node scripts/test-edge-redirects.mjs
 */
import {
  buildDormantLocaleVercelRedirects,
  buildLocaleHomeTrailingSlashRedirects,
  resolveEdgeRedirect,
} from '../src/app/i18n/edge-redirects.mjs';
import { DORMANT_LOCALE_PREFIXES, NON_DEFAULT_LOCALES } from '../src/app/i18n/site-data.mjs';

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
  ['/pl', null],
  ['/ru', null],
  ['/nl/', '/nl'],
  ['/index.html', '/'],
  ['/packages', '/sri-lanka-private-tour'],
  ['/tour-packages', '/sri-lanka-private-tour'],
  ['/twodaystours', '/sri-lanka-private-tour'],
  ['/2-day-sri-lanka-tour', '/2-day-ella-kandy-private-tour-sri-lanka'],
  ['/zh', '/'],
  ['/zh/', '/'],
  ['/it/restaurants-in-sri-lanka', '/it/ristoranti-in-sri-lanka'],
  ['/de/2-day-ella-kandy-private-tour-sri-lanka', '/de/2-tage-ella-kandy-private-rundreise'],
  ['/ru/5-day-sri-lanka-tour', '/ru/5-dnevnyy-tur-shri-lanka'],
  ['/de/customer-testimonials', '/de/kundenbewertungen'],
  ['/es/customer-testimonials', '/es/opiniones-clientes'],
  ['/ru/galle-sri-lanka', '/ru/galle-shri-lanka'],
  ['/de/4-day-sri-lanka-tour', '/de/4-tage-sri-lanka-rundreise'],
  ['/pl/galle-day-tour', '/pl/wycieczka-jednodniowa-galle'],
  ['/ru/restaurants-in-sri-lanka', '/ru/restorany-na-shri-lanka'],
];

let failed = 0;
for (const [from, expected] of cases) {
  const actual = resolveEdgeRedirect(from);
  if (actual !== expected) {
    failed += 1;
    console.error(`FAIL ${from} → ${JSON.stringify(actual)} (expected ${JSON.stringify(expected)})`);
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

if (failed) {
  console.error(`[edge-redirects] ${failed} assertion(s) failed`);
  process.exit(1);
}

console.log(`[edge-redirects] ${cases.length} cases OK; ${DORMANT_LOCALE_PREFIXES.length} dormant prefixes`);

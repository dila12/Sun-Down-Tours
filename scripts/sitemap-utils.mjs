import { statSync } from 'node:fs';
import { join } from 'node:path';

import { buildEdgeRedirectMap } from '../src/app/i18n/edge-redirects.mjs';
import {
  PAGES,
  INDEXABLE_LOCALES,
  BASE_URL,
  buildPath,
  buildUrl,
  buildAlternates,
  getPage,
} from '../src/app/i18n/site-data.mjs';

/** Primary content files per page — used to derive per-page lastmod from filesystem mtimes. */
export const PAGE_CONTENT_SOURCES = {
  home: [
    'src/app/mainComponents/home-page-component/home-page-component.ts',
    'src/assets/data/home-tours.json',
    'src/assets/data/home-tour-prices.json',
  ],
  tours: [
    'src/app/mainComponents/tour-packages/tour-packages.ts',
    'src/assets/data/tours.json',
    'src/assets/data/tourdetails.json',
  ],
  services: ['src/app/mainComponents/service-component/service-component.ts'],
  about: ['src/app/mainComponents/about-component/about-component.ts'],
  contact: ['src/app/sharedComponents/contact-us-component/contact-us-component.ts'],
  restaurants: ['src/app/mainComponents/resturant-component/resturant-component.ts'],
  testimonials: ['src/app/sharedComponents/testimonial/testimonial.ts'],
  cancellation: ['src/app/sharedComponents/cancellation-policy/cancellation-policy.ts'],

  tour7: [
    'src/app/mainComponents/tour-packages/roundTours/seven-days-tour-component/seven-days-tour-component.ts',
    'src/assets/data/sevendaystours.json',
    'src/assets/data/US7-day-sri-lanka-tour.json',
  ],
  tour10: [
    'src/app/mainComponents/tour-packages/roundTours/ten-days-tour-component/ten-days-tour-component.ts',
    'src/assets/data/tendaystours.json',
    'src/assets/data/US10-day-sri-lanka-tour.json',
  ],
  tour8: [
    'src/app/mainComponents/tour-packages/roundTours/eightdays-component/eightdays-component.ts',
    'src/assets/data/US8-day-sri-lanka-private-tour.json',
  ],
  tour6: [
    'src/app/mainComponents/tour-packages/roundTours/six-days-tour/six-days-tour.ts',
    'src/assets/data/US6-day-sri-lanka-private-tour.json',
  ],
  tour5: [
    'src/app/mainComponents/tour-packages/roundTours/five-days-tour-component/five-days-tour-component.ts',
    'src/assets/data/fivedaystours.json',
    'src/assets/data/US5-day-sri-lanka-tour.json',
  ],
  tour4: [
    'src/app/mainComponents/tour-packages/roundTours/fourdays-tour-component/fourdays-tour-component.ts',
    'src/assets/data/US4-day-sri-lanka-tour.json',
  ],
  tour2ek: [
    'src/app/mainComponents/tour-packages/roundTours/two-days-tour-plus/two-days-tour-plus.ts',
    'src/assets/data/twodaystours.json',
    'src/assets/data/US2-day-ella-kandy-private-tour-sri-lanka.json',
  ],
  tour2ey: [
    'src/app/mainComponents/tour-packages/roundTours/ella-yala-two-day-tour/ella-yala-two-day-tour.ts',
    'src/assets/data/US2-day-ella-yala-private-tour-sri-lanka.json',
  ],

  ellaDay: [
    'src/app/mainComponents/tour-packages/dayTours/ella-day-tour-component/ella-day-tour-component.ts',
    'src/assets/data/daytour-ella.json',
    'src/assets/data/USella-day-tour.json',
  ],
  galleDay: [
    'src/app/mainComponents/tour-packages/dayTours/galle-day-tour/galle-day-tour.ts',
    'src/assets/data/daytour-galle.json',
    'src/assets/data/USgalle-day-tour.json',
  ],
  kandyDay: [
    'src/app/mainComponents/tour-packages/dayTours/kandy-day-tour-component/kandy-day-tour-component.ts',
    'src/assets/data/daytour-kandy.json',
    'src/assets/data/USkandy-day-tour.json',
  ],
  sigiriyaDay: [
    'src/app/mainComponents/tour-packages/dayTours/sigiriya-day-tour-component/sigiriya-day-tour-component.ts',
    'src/assets/data/daytour-sigiriya.json',
    'src/assets/data/USsigiriya-day-tour.json',
  ],

  destinations: [
    'src/app/sharedComponents/article-page/article-page.ts',
    'src/app/i18n/destinations/catalog.ts',
    'src/app/i18n/destinations/sigiriya.ts',
    'src/app/i18n/destinations/ella.ts',
    'src/app/i18n/destinations/yala.ts',
    'src/app/i18n/destinations/kandy.ts',
    'src/app/i18n/destinations/dambulla.ts',
    'src/app/i18n/destinations/galle.ts',
  ],
  guides: [
    'src/app/sharedComponents/article-page/article-page.ts',
    'src/app/i18n/guides/catalog.ts',
    'src/app/i18n/guides/bestTime.ts',
    'src/app/i18n/guides/visa.ts',
    'src/app/i18n/guides/privateDriver.ts',
    'src/app/i18n/guides/budget.ts',
    'src/app/i18n/guides/wildlife.ts',
    'src/app/i18n/guides/safari.ts',
    'src/app/i18n/guides/beaches.ts',
    'src/app/i18n/guides/teaCountry.ts',
    'src/app/i18n/guides/food.ts',
    'src/app/i18n/guides/packing.ts',
    'src/app/i18n/guides/safety.ts',
    'src/app/i18n/guides/whaleWatching.ts',
    'src/app/i18n/guides/trainJourneys.ts',
    'src/app/i18n/guides/honeymoon.ts',
    'src/app/i18n/guides/familyTours.ts',
    'src/app/i18n/guides/luxuryTours.ts',
    'src/app/i18n/guides/airportTransfers.ts',
  ],

  destSigiriya: ['src/app/i18n/destinations/sigiriya.ts'],
  destElla: ['src/app/i18n/destinations/ella.ts'],
  destYala: ['src/app/i18n/destinations/yala.ts'],
  destKandy: ['src/app/i18n/destinations/kandy.ts'],
  destDambulla: ['src/app/i18n/destinations/dambulla.ts'],
  destGalle: ['src/app/i18n/destinations/galle.ts'],

  guideBestTime: ['src/app/i18n/guides/bestTime.ts'],
  guideVisa: ['src/app/i18n/guides/visa.ts'],
  guidePrivateDriver: ['src/app/i18n/guides/privateDriver.ts'],
  guideBudget: ['src/app/i18n/guides/budget.ts'],
  guideWildlife: ['src/app/i18n/guides/wildlife.ts'],
  guideSafari: ['src/app/i18n/guides/safari.ts'],
  guideBeaches: ['src/app/i18n/guides/beaches.ts'],
  guideTeaCountry: ['src/app/i18n/guides/teaCountry.ts'],
  guideFood: ['src/app/i18n/guides/food.ts'],
  guidePacking: ['src/app/i18n/guides/packing.ts'],
  guideSafety: ['src/app/i18n/guides/safety.ts'],
  guideWhaleWatching: ['src/app/i18n/guides/whaleWatching.ts'],
  guideTrainJourneys: ['src/app/i18n/guides/trainJourneys.ts'],
  guideHoneymoon: ['src/app/i18n/guides/honeymoon.ts'],
  guideFamilyTours: ['src/app/i18n/guides/familyTours.ts'],
  guideLuxuryTours: ['src/app/i18n/guides/luxuryTours.ts'],
  guideAirportTransfers: ['src/app/i18n/guides/airportTransfers.ts'],
};

const SITE_DATA_FILE = 'src/app/i18n/site-data.mjs';

/**
 * Whether a page/locale pair should be considered for the sitemap.
 * Mirrors SeoService indexability: noindex pages and Dutch are excluded.
 */
export function isSitemapEligible(page, locale) {
  return Boolean(page?.index) && INDEXABLE_LOCALES.includes(locale);
}

/**
 * Returns the newest filesystem mtime (ms) among mapped content sources for a page.
 * Falls back to site-data.mjs mtime, then build time.
 */
export function getPageLastmodMs(pageId, rootDir, fallbackMs = Date.now()) {
  const sources = PAGE_CONTENT_SOURCES[pageId] ?? [];
  let maxMs = 0;

  for (const rel of sources) {
    try {
      const ms = statSync(join(rootDir, rel)).mtimeMs;
      if (ms > maxMs) maxMs = ms;
    } catch {
      // Missing optional source — skip.
    }
  }

  if (maxMs === 0) {
    try {
      maxMs = statSync(join(rootDir, SITE_DATA_FILE)).mtimeMs;
    } catch {
      maxMs = fallbackMs;
    }
  }

  return maxMs;
}

export function formatLastmod(ms) {
  return new Date(ms).toISOString().split('T')[0];
}

/**
 * Collects sitemap URL records with exclusion reasons for anything filtered out.
 */
export function collectSitemapEntries(rootDir) {
  const redirectMap = buildEdgeRedirectMap();
  const redirectSources = new Set(redirectMap.keys());

  const candidates = [];
  for (const page of PAGES) {
    for (const locale of INDEXABLE_LOCALES) {
      candidates.push({ page, locale });
    }
  }

  const included = [];
  const excluded = [];
  const seenUrls = new Map();

  for (const { page, locale } of candidates) {
    const url = buildUrl(page.id, locale);
    const path = buildPath(page.id, locale);

    if (!isSitemapEligible(page, locale)) {
      excluded.push({ url, pageId: page.id, locale, reason: page.index ? 'non-indexable-locale' : 'noindex' });
      continue;
    }

    if (redirectSources.has(path)) {
      excluded.push({ url, pageId: page.id, locale, reason: 'redirect-source' });
      continue;
    }

    const redirectTarget = redirectMap.get(path);
    if (redirectTarget && redirectTarget !== path) {
      excluded.push({ url, pageId: page.id, locale, reason: 'redirect-source' });
      continue;
    }

    if (seenUrls.has(url)) {
      excluded.push({
        url,
        pageId: page.id,
        locale,
        reason: `duplicate-of-${seenUrls.get(url)}`,
      });
      continue;
    }

    const lastmodMs = getPageLastmodMs(page.id, rootDir);
    const alternates = buildAlternates(page.id);

    included.push({
      page,
      locale,
      url,
      path,
      lastmod: formatLastmod(lastmodMs),
      lastmodMs,
      alternates,
    });
    seenUrls.set(url, page.id);
  }

  return { included, excluded, candidateCount: candidates.length };
}

/**
 * Validates that every hreflang cluster is fully reciprocal and consistent.
 * Returns { ok, issues, fixed } where fixed is always empty (build uses buildAlternates).
 */
export function validateHreflangReciprocity(entries) {
  const issues = [];
  const byLoc = new Map(entries.map((e) => [e.url, e]));

  const expectedAltCount = INDEXABLE_LOCALES.length + 1;

  for (const entry of entries) {
    const { url, alternates, page } = entry;

    if (alternates.length !== expectedAltCount) {
      issues.push(`${page.id} (${url}): expected ${expectedAltCount} alternates, got ${alternates.length}`);
    }

    const hreflangKeys = alternates.map((a) => a.hreflang);
    if (new Set(hreflangKeys).size !== hreflangKeys.length) {
      issues.push(`${page.id} (${url}): duplicate hreflang codes`);
    }

    const langs = alternates.map((a) => a.hreflang).sort();
    const expectedLangs = [...INDEXABLE_LOCALES.map((l) => (l === 'en' ? 'en' : l)), 'x-default'].sort();
    // HREFLANG uses identity map — rebuild expected from alternates helper
    const expectedFromHelper = buildAlternates(page.id)
      .map((a) => a.hreflang)
      .sort();
    if (langs.join(',') !== expectedFromHelper.join(',')) {
      issues.push(`${page.id} (${url}): unexpected hreflang set [${langs.join(', ')}]`);
    }

    const selfAlt = alternates.find((a) => a.href === url);
    if (!selfAlt) {
      issues.push(`${page.id} (${url}): missing self-referencing alternate`);
    }

    for (const alt of alternates) {
      const partner = byLoc.get(alt.href);
      if (!partner) {
        issues.push(`${url}: alternate ${alt.hreflang} → ${alt.href} has no sitemap entry`);
        continue;
      }
      const backLink = partner.alternates.find((a) => a.href === url);
      if (!backLink) {
        issues.push(`Non-reciprocal: ${url} → ${alt.href} but ${alt.href} does not link back`);
      } else if (backLink.hreflang !== alternates.find((a) => a.href === url)?.hreflang) {
        // Self hreflang on partner should reference entry's locale — checked via full set equality below
      }
    }
  }

  // Cluster consistency: all locale variants of a page must share identical alternate sets
  const clusters = new Map();
  for (const entry of entries) {
    const sig = JSON.stringify(
      entry.alternates
        .map((a) => `${a.hreflang}:${a.href}`)
        .sort(),
    );
    const list = clusters.get(entry.page.id) ?? [];
    list.push(sig);
    clusters.set(entry.page.id, list);
  }

  for (const [pageId, sigs] of clusters) {
    const unique = new Set(sigs);
    if (unique.size > 1) {
      issues.push(`${pageId}: hreflang cluster has ${unique.size} inconsistent alternate sets`);
    }
  }

  return { ok: issues.length === 0, issues };
}

export function xmlEscape(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export { BASE_URL, buildUrl, getPage, INDEXABLE_LOCALES, PAGES };

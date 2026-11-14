/**
 * HTTP 301 redirect map for legacy slugs + dormant locale prefixes.
 * Consumed by Express (`server.ts`) and `scripts/generate-vercel-redirects.mjs`.
 * Does not strip or redirect Dutch`/nl/*` stays available in the UI.
 */
import {
  DEFAULT_LOCALE,
  DORMANT_LOCALE_PREFIXES,
  LEGACY_DEST_REDIRECTS,
  LEGACY_GUIDE_REDIRECTS,
  LEGACY_POLICY_REDIRECTS,
  LEGACY_TOUR_REDIRECTS,
  NON_DEFAULT_LOCALES,
  buildPath,
} from './site-data.mjs';
import { INCOMPLETE_LOCALE_REDIRECTS } from './incomplete-locale-redirects.mjs';

const DORMANT_SET = new Set(DORMANT_LOCALE_PREFIXES);

/**
 * Fixed path redirects (not locale-prefixed). Keep `/fr/contact` aloneFR slug is `contact`.
 * @type {Record<string, string>}
 */
const STATIC_PATH_REDIRECTS = {
  '/index.html': '/',
  '/index.htm': '/',
  '/contact': '/contact-us',
  '/packages': '/sri-lanka-private-tour',
  '/tour-packages': '/sri-lanka-private-tour',
  '/tours': '/sri-lanka-private-tour',
  '/sri-lanka-tours': '/sri-lanka-private-tour',
  '/sri-lanka-tour-packages': '/sri-lanka-private-tour',
  '/sri-lanka-holidays': '/sri-lanka-private-tour',
  '/sri-lanka-vacation': '/sri-lanka-private-tour',
  '/twodaystours': '/sri-lanka-private-tour',
  '/2-day-sri-lanka-tour': '/2-day-ella-kandy-private-tour-sri-lanka',
  // Old Italian hub (`guides`) + draft slugs. Whale IT is incomplete→EN;
  // airport IT is indexable so it keeps the localized guide path.
  '/it/guides/osservazione-balene-sri-lanka': '/travel-guides/sri-lanka-whale-watching',
  '/it/guides/trasferte-aeroporto-sri-lanka': '/it/guide/transfer-aeroporto-sri-lanka',
};

/**
 * Misspellings Google already crawled. These 500 in SSR today, so they stay
 * in "Crawled - currently not indexed" until they 301 to the live page.
 * @type {Record<string, string>} slug → page id
 */
const TYPO_PAGE_REDIRECTS = {
  'welligama-sri-lanka': 'destWeligama',
  '7-cay-sri-lanka-tour': 'tour7',
};

/**
 * @returns {Map<string, string>} pathname (no query) → root-relative target path
 */
export function buildEdgeRedirectMap() {
  /** @type {Map<string, string>} */
  const map = new Map();

  for (const [from, to] of Object.entries(STATIC_PATH_REDIRECTS)) {
    map.set(from, to);
  }

  for (const locale of NON_DEFAULT_LOCALES) {
    const hub = buildPath('tours', locale);
    const from = `/${locale}/tours`;
    if (from !== hub) {
      map.set(from, hub);
    }
  }

  const legacyMaps = [
    LEGACY_GUIDE_REDIRECTS,
    LEGACY_TOUR_REDIRECTS,
    LEGACY_DEST_REDIRECTS,
    LEGACY_POLICY_REDIRECTS,
  ];

  for (const legacy of legacyMaps) {
    for (const [legacySlug, pageId] of Object.entries(legacy)) {
      const target = buildPath(pageId, DEFAULT_LOCALE);
      const from = `/${legacySlug}`;
      if (from !== target) {
        map.set(from, target);
      }
    }
  }

  for (const [typo, pageId] of Object.entries(TYPO_PAGE_REDIRECTS)) {
    const target = buildPath(pageId, DEFAULT_LOCALE);
    const from = `/${typo}`;
    if (from !== target) {
      map.set(from, target);
    }
  }

  for (const locale of NON_DEFAULT_LOCALES) {
    for (const [typo, pageId] of Object.entries(TYPO_PAGE_REDIRECTS)) {
      const target = buildPath(pageId, locale);
      const from = `/${locale}/${typo}`;
      if (from !== target) {
        map.set(from, target);
      }
    }
  }

  for (const locale of NON_DEFAULT_LOCALES) {
    for (const legacy of legacyMaps) {
      for (const [legacySlug, pageId] of Object.entries(legacy)) {
        const target = buildPath(pageId, locale);
        const from = `/${locale}/${legacySlug}`;
        if (from !== target) {
          map.set(from, target);
        }
      }
    }
  }

  // Incomplete translations 301 to the same page in English. Legacy slug
  // migrations already in the map keep their own destination.
  for (const [from, to] of Object.entries(INCOMPLETE_LOCALE_REDIRECTS)) {
    if (!from || !to || from === to || to === '/' || map.has(from)) continue;
    let target = to;
    const seen = new Set([from]);
    while (map.has(target) && !seen.has(target)) {
      seen.add(target);
      target = map.get(target);
    }
    if (target && target !== from && target !== '/') {
      map.set(from, target);
    }
  }

  // Collapse A→B→C so every edge hop is final (no redirect chains).
  collapseRedirectMap(map);
  return map;
}

/**
 * Rewrites every map entry so its destination is not itself a redirect source.
 * @param {Map<string, string>} map
 */
export function collapseRedirectMap(map) {
  for (const from of [...map.keys()]) {
    const to = map.get(from);
    if (!to) continue;
    let cur = to;
    const seen = new Set([from]);
    while (map.has(cur) && !seen.has(cur)) {
      seen.add(cur);
      cur = map.get(cur);
    }
    if (cur && cur !== to) {
      map.set(from, cur);
    }
  }
}

/**
 * Strip a dormant locale prefix: `/cs/privacy-policy` → `/privacy-policy`.
 * @param {string} path normalized pathname (no trailing slash except root)
 * @returns {string | null}
 */
export function resolveDormantLocaleRedirect(path) {
  const segments = path.split('/').filter(Boolean);
  if (!segments.length || !DORMANT_SET.has(segments[0])) {
    return null;
  }
  const rest = segments.slice(1).join('/');
  return rest ? `/${rest}` : '/';
}

/**
 * @param {string} pathname
 * @param {Map<string, string>} [map]
 * @returns {string | null}
 */
export function resolveEdgeRedirect(pathname, map = buildEdgeRedirectMap()) {
  if (!pathname) {
    return null;
  }
  let path = pathname.split('?')[0].split('#')[0];
  const hadTrailingSlash = path.length > 1 && path.endsWith('/');
  if (hadTrailingSlash) {
    path = path.slice(0, -1);
  }

  const dormant = resolveDormantLocaleRedirect(path);
  if (dormant) {
    return dormant;
  }

  const mapped = map.get(path);
  if (mapped) {
    return mapped;
  }

  // Canonicalize `/pl/` → `/pl` (sitemap + hreflang omit the trailing slash).
  if (hadTrailingSlash) {
    return path;
  }

  return null;
}

/**
 * Vercel catch-all 301s for every dormant locale prefix.
 * `/:code/` is listed explicitly`/:code` does not match a trailing slash,
 * and `/:code/:path*` requires at least one extra segment.
 * @returns {{ source: string, destination: string, permanent: boolean }[]}
 */
export function buildDormantLocaleVercelRedirects() {
  const codes = DORMANT_LOCALE_PREFIXES.join('|');
  return [
    { source: `/:code(${codes})`, destination: '/', permanent: true },
    { source: `/:code(${codes})/`, destination: '/', permanent: true },
    { source: `/:code(${codes})/:path*`, destination: '/:path*', permanent: true },
  ];
}

/**
 * Live locale homepages: `/de/` → `/de` so Google indexes one URL.
 * @returns {{ source: string, destination: string, permanent: boolean }[]}
 */
export function buildLocaleHomeTrailingSlashRedirects() {
  const codes = NON_DEFAULT_LOCALES.join('|');
  return [
    { source: `/:locale(${codes})/`, destination: '/:locale', permanent: true },
  ];
}

/**
 * Apex-host shortcuts so `sundowntours.com/pl/` and `sundowntours.com/zh/`
 * 308 once to the www canonical (not apex→www `/pl/` then a second hop).
 * Live locale homes use explicit `/pl/` sources — Vercel often fails to match
 * `/:locale(pl|…)/` and falls through to the catch-all (keeping the slash).
 * Must be listed before the catch-all apex `/:path*` rule.
 * @returns {{ source: string, destination: string, statusCode: number, has: object[] }[]}
 */
export function buildApexShortcutRedirects() {
  const dormant = DORMANT_LOCALE_PREFIXES.join('|');
  const apex = [{ type: 'host', value: 'sundowntours.com' }];
  /** @type {{ source: string, destination: string, statusCode: number, has: object[] }[]} */
  const rules = [];

  for (const locale of NON_DEFAULT_LOCALES) {
    rules.push({
      source: `/${locale}/`,
      has: apex,
      destination: `https://www.sundowntours.com/${locale}`,
      statusCode: 308,
    });
  }

  rules.push(
    {
      source: `/:code(${dormant})`,
      has: apex,
      destination: 'https://www.sundowntours.com/',
      statusCode: 308,
    },
    {
      source: `/:code(${dormant})/`,
      has: apex,
      destination: 'https://www.sundowntours.com/',
      statusCode: 308,
    },
    {
      source: `/:code(${dormant})/:path*`,
      has: apex,
      destination: 'https://www.sundowntours.com/:path*',
      statusCode: 308,
    },
  );

  return rules;
}

/**
 * Apex-host copies of every path redirect, already resolved to the final www URL.
 * Prevents `sundowntours.com/de/5-day-…` → www same path → localized slug (2 hops).
 * Requires the Vercel *project* redirects to see the apex Host (disable any
 * Domains-UI apex→www redirect that runs first and strips that chance).
 * @param {Map<string, string>} [map]
 * @returns {{ source: string, destination: string, statusCode: number, has: object[] }[]}
 */
export function buildApexMergedPathRedirects(map = buildEdgeRedirectMap()) {
  const apex = [{ type: 'host', value: 'sundowntours.com' }];
  return [...map.entries()]
    .filter(([from, to]) => from && to && from !== to)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([from, to]) => ({
      source: from === '/' ? '/' : from,
      has: apex,
      destination: `https://www.sundowntours.com${to}`,
      statusCode: 308,
    }));
}

/**
 * Same merge Express uses: apex Host + path redirect → one absolute www URL.
 * @param {string} pathname
 * @param {Map<string, string>} [map]
 * @returns {string}
 */
export function resolveApexWwwDestination(pathname, map = buildEdgeRedirectMap()) {
  const pathTarget = resolveEdgeRedirect(pathname, map);
  const path = pathTarget || pathname.split('?')[0].split('#')[0] || '/';
  return `https://www.sundowntours.com${path || '/'}`;
}

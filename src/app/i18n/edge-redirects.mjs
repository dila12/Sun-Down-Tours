/**
 * HTTP 301 redirect map for legacy slugs + dormant locale prefixes.
 * Consumed by Express (`server.ts`) and `scripts/generate-vercel-redirects.mjs`.
 * Does not strip or redirect Dutch — `/nl/*` stays available in the UI.
 */
import {
  DEFAULT_LOCALE,
  DORMANT_LOCALE_PREFIXES,
  LEGACY_DEST_REDIRECTS,
  LEGACY_GUIDE_REDIRECTS,
  LEGACY_TOUR_REDIRECTS,
  NON_DEFAULT_LOCALES,
  buildPath,
} from './site-data.mjs';

const DORMANT_SET = new Set(DORMANT_LOCALE_PREFIXES);

/**
 * Fixed path redirects (not locale-prefixed). Keep `/fr/contact` alone — FR slug is `contact`.
 * @type {Record<string, string>}
 */
const STATIC_PATH_REDIRECTS = {
  '/index.html': '/',
  '/index.htm': '/',
  '/contact': '/contact-us',
  '/packages': '/sri-lanka-private-tour',
  '/tour-packages': '/sri-lanka-private-tour',
  '/twodaystours': '/sri-lanka-private-tour',
  '/2-day-sri-lanka-tour': '/2-day-ella-kandy-private-tour-sri-lanka',
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

  const legacyMaps = [LEGACY_GUIDE_REDIRECTS, LEGACY_TOUR_REDIRECTS, LEGACY_DEST_REDIRECTS];

  for (const legacy of legacyMaps) {
    for (const [legacySlug, pageId] of Object.entries(legacy)) {
      const target = buildPath(pageId, DEFAULT_LOCALE);
      const from = `/${legacySlug}`;
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

  return map;
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
 * `/:code/` is listed explicitly — `/:code` does not match a trailing slash,
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

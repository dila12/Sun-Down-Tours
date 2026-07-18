/**
 * HTTP 301 redirect map for legacy slugs.
 * Consumed by Express (`server.ts`) and `scripts/generate-vercel-redirects.mjs`.
 * Does not strip or redirect Dutch — `/nl/*` stays available in the UI.
 */
import {
  DEFAULT_LOCALE,
  LEGACY_DEST_REDIRECTS,
  LEGACY_GUIDE_REDIRECTS,
  LEGACY_TOUR_REDIRECTS,
  NON_DEFAULT_LOCALES,
  buildPath,
} from './site-data.mjs';

/**
 * @returns {Map<string, string>} pathname (no query) → root-relative target path
 */
export function buildEdgeRedirectMap() {
  /** @type {Map<string, string>} */
  const map = new Map();

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
 * @param {string} pathname
 * @param {Map<string, string>} [map]
 * @returns {string | null}
 */
export function resolveEdgeRedirect(pathname, map = buildEdgeRedirectMap()) {
  if (!pathname) {
    return null;
  }
  let path = pathname.split('?')[0].split('#')[0];
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  return map.get(path) ?? null;
}

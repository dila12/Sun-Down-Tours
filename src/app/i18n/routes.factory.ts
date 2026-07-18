import { Routes } from '@angular/router';
import { LayoutComponent } from '../mainComponents/layout-component/layout-component';
import { DEFAULT_LOCALE, NON_DEFAULT_LOCALES, type Locale } from './locales';
import { REGISTRY } from './pages.registry';
import { articleResolver } from './articles/article.resolver';
import {
  LEGACY_DEST_REDIRECTS,
  LEGACY_GUIDE_REDIRECTS,
  LEGACY_TOUR_REDIRECTS,
  buildPath,
  getPage,
} from './site-data.mjs';

/**
 * Builds the full route table from the page registry:
 *   - English (default) pages are served from the root (no prefix).
 *   - Every other locale is served from a `/{locale}` prefix with translated
 *     slugs.
 *
 * All routes share a single `LayoutComponent` shell so the header/footer are
 * not recreated when switching locale. Each route carries `{ pageId, locale }`
 * in its data for the SEO and structured-data services.
 */
export function buildRoutes(): Routes {
  const children: Routes = [];

  // English (default locale) at the site root.
  for (const page of REGISTRY) {
    const needsArticle =
      page.kind === 'destination' ||
      page.kind === 'guide' ||
      page.id === 'destinations' ||
      page.id === 'guides';
    children.push({
      path: page.slugs[DEFAULT_LOCALE],
      loadComponent: page.load,
      data: { pageId: page.id, locale: DEFAULT_LOCALE, kind: page.kind },
      resolve: needsArticle ? { article: articleResolver } : undefined,
    });
  }

  // Permanent redirects from legacy flat English guide/hub slugs (EN root).
  pushLegacyRedirects(children, DEFAULT_LOCALE, LEGACY_GUIDE_REDIRECTS);

  // Prefixed locales with translated slugs.
  for (const locale of NON_DEFAULT_LOCALES) {
    const localeChildren: Routes = REGISTRY.map((page) => {
      const needsArticle =
        page.kind === 'destination' ||
        page.kind === 'guide' ||
        page.id === 'destinations' ||
        page.id === 'guides';
      return {
        path: page.slugs[locale],
        loadComponent: page.load,
        data: { pageId: page.id, locale, kind: page.kind },
        resolve: needsArticle ? { article: articleResolver } : undefined,
      };
    });

    pushLegacyRedirects(localeChildren, locale as Locale, LEGACY_GUIDE_REDIRECTS);
    pushLegacyRedirects(localeChildren, locale as Locale, LEGACY_TOUR_REDIRECTS);
    pushLegacyRedirects(localeChildren, locale as Locale, LEGACY_DEST_REDIRECTS);

    children.push({
      path: locale,
      children: localeChildren,
    });
  }

  // True 404 (HTTP status set in NotFoundComponent via RESPONSE_INIT on SSR).
  // Legacy slug 301s are handled at the edge (Express / Vercel), not here.
  children.push({
    path: '**',
    loadComponent: () =>
      import('../mainComponents/not-found/not-found.component').then((m) => m.NotFoundComponent),
    data: { notFound: true },
  });

  return [
    {
      path: '',
      component: LayoutComponent,
      children,
    },
  ];
}

/**
 * Adds redirect routes for legacy slugs only when the live localized slug
 * differs (avoids duplicate-path conflicts when a slug is unchanged).
 */
function pushLegacyRedirects(
  routes: Routes,
  locale: Locale,
  map: Record<string, string>,
): void {
  for (const [legacySlug, pageId] of Object.entries(map)) {
    const page = getPage(pageId);
    if (!page) {
      continue;
    }
    if (page.slugs[locale] === legacySlug) {
      continue;
    }
    const target = buildPath(pageId, locale);
    routes.push({
      path: legacySlug,
      redirectTo:
        locale === DEFAULT_LOCALE
          ? target.replace(/^\//, '')
          : stripLocalePrefix(target, locale),
      pathMatch: 'full',
    });
  }
}

/** Strip `/{locale}/` so redirectTo stays relative to the locale parent route. */
function stripLocalePrefix(absolutePath: string, locale: string): string {
  const prefix = `/${locale}/`;
  if (absolutePath.startsWith(prefix)) {
    return absolutePath.slice(prefix.length);
  }
  return absolutePath.replace(/^\//, '');
}

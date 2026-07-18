import { Routes } from '@angular/router';
import { LayoutComponent } from '../mainComponents/layout-component/layout-component';
import { DEFAULT_LOCALE, NON_DEFAULT_LOCALES, type Locale } from './locales';
import { REGISTRY } from './pages.registry';
import { articleResolver } from './articles/article.resolver';
import { LEGACY_GUIDE_REDIRECTS, buildPath } from './site-data.mjs';

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

  // Permanent redirects from legacy flat English guide/hub slugs.
  for (const [legacySlug, pageId] of Object.entries(LEGACY_GUIDE_REDIRECTS)) {
    children.push({
      path: legacySlug,
      redirectTo: buildPath(pageId, DEFAULT_LOCALE).replace(/^\//, ''),
      pathMatch: 'full',
    });
  }

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

    for (const [legacySlug, pageId] of Object.entries(LEGACY_GUIDE_REDIRECTS)) {
      localeChildren.push({
        path: legacySlug,
        redirectTo: stripLocalePrefix(buildPath(pageId, locale as Locale), locale),
        pathMatch: 'full',
      });
    }

    children.push({
      path: locale,
      children: localeChildren,
    });
  }

  // Unknown paths fall back to the English home page.
  children.push({ path: '**', redirectTo: '' });

  return [
    {
      path: '',
      component: LayoutComponent,
      children,
    },
  ];
}

/** Strip `/{locale}/` so redirectTo stays relative to the locale parent route. */
function stripLocalePrefix(absolutePath: string, locale: string): string {
  const prefix = `/${locale}/`;
  if (absolutePath.startsWith(prefix)) {
    return absolutePath.slice(prefix.length);
  }
  return absolutePath.replace(/^\//, '');
}

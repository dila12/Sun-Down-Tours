import { Routes } from '@angular/router';
import { LayoutComponent } from '../mainComponents/layout-component/layout-component';
import { DEFAULT_LOCALE, NON_DEFAULT_LOCALES } from './locales';
import { REGISTRY } from './pages.registry';

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
    children.push({
      path: page.slugs[DEFAULT_LOCALE],
      loadComponent: page.load,
      data: { pageId: page.id, locale: DEFAULT_LOCALE },
    });
  }

  // Prefixed locales with translated slugs.
  for (const locale of NON_DEFAULT_LOCALES) {
    children.push({
      path: locale,
      children: REGISTRY.map((page) => ({
        path: page.slugs[locale],
        loadComponent: page.load,
        data: { pageId: page.id, locale },
      })),
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

import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';

import { ArticleContentService } from './article-content.service';
import { DEFAULT_LOCALE, type Locale } from '../locales';
import { buildPath } from '../site-data.mjs';
import type { BaseArticle } from './types';

/**
 * Preloads destination/guide article dictionaries into ArticleContentService
 * before the page activates, so SeoService / StructuredDataService can read
 * them synchronously on NavigationEnd. Hub pages warm the card catalogue.
 *
 * Locale must come from route dataresolvers run before NavigationEnd, so
 * LocaleService may still hold the previous (or default) locale during SSR.
 */
export const articleResolver: ResolveFn<BaseArticle | null> = (route) => {
  const pageId = (route.data['pageId'] as string) ?? '';
  const kind = route.data['kind'] as string | undefined;
  const locale = (route.data['locale'] as Locale) ?? DEFAULT_LOCALE;
  const articles = inject(ArticleContentService);

  if (kind === 'destination' || kind === 'guide') {
    if (locale === DEFAULT_LOCALE) return articles.preload(pageId, locale);
    const router = inject(Router);
    return articles.hasCompleteTranslation(pageId, locale).then(async (complete) => {
      if (complete) return articles.preload(pageId, locale);
      const fallback = router.createUrlTree([buildPath(pageId, DEFAULT_LOCALE)], {
        queryParams: route.queryParams,
        fragment: route.fragment ?? undefined,
      });
      return new RedirectCommand(fallback, { replaceUrl: true });
    });
  }
  if (pageId === 'destinations') {
    return articles.destinationHubCards(locale).then(() => null);
  }
  if (pageId === 'guides') {
    return articles.guideHubCards(locale).then(() => null);
  }
  return null;
};

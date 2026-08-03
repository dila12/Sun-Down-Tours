import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { ArticleContentService } from './article-content.service';
import { DEFAULT_LOCALE, type Locale } from '../locales';
import type { BaseArticle } from './types';

/**
 * Preloads destination/guide article dictionaries into ArticleContentService
 * before the page activates, so SeoService / StructuredDataService can read
 * them synchronously on NavigationEnd. Hub pages warm the card catalogue.
 *
 * Locale must come from route data — resolvers run before NavigationEnd, so
 * LocaleService may still hold the previous (or default) locale during SSR.
 */
export const articleResolver: ResolveFn<BaseArticle | null> = (route) => {
  const pageId = (route.data['pageId'] as string) ?? '';
  const kind = route.data['kind'] as string | undefined;
  const locale = (route.data['locale'] as Locale) ?? DEFAULT_LOCALE;
  const articles = inject(ArticleContentService);

  if (kind === 'destination' || kind === 'guide') {
    return articles.preload(pageId, locale);
  }
  if (pageId === 'destinations') {
    return articles.destinationHubCards(locale).then(() => null);
  }
  if (pageId === 'guides') {
    return articles.guideHubCards(locale).then(() => null);
  }
  return null;
};

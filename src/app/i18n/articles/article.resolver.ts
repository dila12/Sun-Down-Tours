import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { ArticleContentService } from './article-content.service';
import type { BaseArticle } from './types';

/**
 * Preloads destination/guide article dictionaries into ArticleContentService
 * before the page activates, so SeoService / StructuredDataService can read
 * them synchronously on NavigationEnd. Hub pages warm the card catalogue.
 */
export const articleResolver: ResolveFn<BaseArticle | null> = (route) => {
  const pageId = (route.data['pageId'] as string) ?? '';
  const kind = route.data['kind'] as string | undefined;
  const articles = inject(ArticleContentService);

  if (kind === 'destination' || kind === 'guide') {
    return articles.preload(pageId);
  }
  if (pageId === 'destinations') {
    return articles.destinationHubCards().then(() => null);
  }
  if (pageId === 'guides') {
    return articles.guideHubCards().then(() => null);
  }
  return null;
};

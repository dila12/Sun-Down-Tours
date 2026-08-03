import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { TourContentService } from './tour-content.service';
import { DEFAULT_LOCALE, type Locale } from '../locales';
import type { BaseTour } from './localize';

/**
 * Preloads tour detail dictionaries into TourContentService before the page
 * activates, so components / StructuredDataService can read them synchronously.
 *
 * Locale must come from route data — resolvers run before NavigationEnd, so
 * LocaleService may still hold the previous (or default) locale during SSR.
 */
export const tourResolver: ResolveFn<BaseTour | undefined> = (route) => {
  const pageId = (route.data['pageId'] as string) ?? '';
  const kind = route.data['kind'] as string | undefined;
  const locale = (route.data['locale'] as Locale) ?? DEFAULT_LOCALE;
  const tours = inject(TourContentService);

  if (kind === 'tour' && tours.hasLoader(pageId)) {
    return tours.preloadDetail(pageId, locale);
  }
  return undefined;
};

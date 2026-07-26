import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { TourContentService } from './tour-content.service';
import type { BaseTour } from './localize';

/**
 * Preloads tour detail dictionaries into TourContentService before the page
 * activates, so components / StructuredDataService can read them synchronously.
 */
export const tourResolver: ResolveFn<BaseTour | undefined> = (route) => {
  const pageId = (route.data['pageId'] as string) ?? '';
  const kind = route.data['kind'] as string | undefined;
  const tours = inject(TourContentService);

  if (kind === 'tour' && tours.hasLoader(pageId)) {
    return tours.preloadDetail(pageId);
  }
  return undefined;
};

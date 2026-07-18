import type { TourContent } from './localize';
import { TOUR2EK } from './tour2ek';
import { TOUR2EY } from './tour2ey';
import { TOUR4 } from './tour4';
import { TOUR5 } from './tour5';
import { TOUR6 } from './tour6';
import { TOUR7 } from './tour7';
import { TOUR8 } from './tour8';
import { TOUR10 } from './tour10';
import { ELLA_DAY } from './ellaDay';
import { GALLE_DAY } from './galleDay';
import { KANDY_DAY } from './kandyDay';
import { SIGIRIYA_DAY } from './sigiriyaDay';

export { localizeTour } from './localize';
export type { TourContent, TourL10n, BaseTour } from './localize';
export { TOUR_CATALOG, getTourMeta } from './catalog';
export { TOUR_CARDS } from './cards';
export { TourContentService } from './tour-content.service';
export type { TourCardView } from './tour-content.service';

/**
 * Registry of full tour detail content (English base + locale overlays).
 * Keyed by page id from site-data / catalog.
 */
export const TOUR_CONTENT: Record<string, TourContent> = {
  tour2ek: TOUR2EK,
  tour2ey: TOUR2EY,
  tour4: TOUR4,
  tour5: TOUR5,
  tour6: TOUR6,
  tour7: TOUR7,
  tour8: TOUR8,
  tour10: TOUR10,
  ellaDay: ELLA_DAY,
  galleDay: GALLE_DAY,
  kandyDay: KANDY_DAY,
  sigiriyaDay: SIGIRIYA_DAY,
};

import type { ArticleContent } from '../articles/types';
import { BEST_TIME_GUIDE } from './bestTime';
import { VISA_GUIDE } from './visa';
import { PRIVATE_DRIVER_GUIDE } from './privateDriver';
import { BUDGET_GUIDE } from './budget';
import { WILDLIFE_GUIDE } from './wildlife';
import { SAFARI_GUIDE } from './safari';
import { BEACHES_GUIDE } from './beaches';
import { TEA_COUNTRY_GUIDE } from './teaCountry';
import { FOOD_GUIDE } from './food';
import { PACKING_GUIDE } from './packing';
import { SAFETY_GUIDE } from './safety';

export { GUIDE_PAGE_IDS, GUIDE_HUB_CARDS, getGuideHubCardMeta } from './catalog';
export type { GuideHubCardMeta, GuidePageId } from './catalog';

/**
 * Registry of authored travel-guide detail content.
 * Only guides with full ArticleContent are listed here; hub cards hide the rest.
 */
export const GUIDE_CONTENT: Record<string, ArticleContent> = {
  guideBestTime: BEST_TIME_GUIDE,
  guideVisa: VISA_GUIDE,
  guidePrivateDriver: PRIVATE_DRIVER_GUIDE,
  guideBudget: BUDGET_GUIDE,
  guideWildlife: WILDLIFE_GUIDE,
  guideSafari: SAFARI_GUIDE,
  guideBeaches: BEACHES_GUIDE,
  guideTeaCountry: TEA_COUNTRY_GUIDE,
  guideFood: FOOD_GUIDE,
  guidePacking: PACKING_GUIDE,
  guideSafety: SAFETY_GUIDE,
};

export function getGuide(pageId: string): ArticleContent | undefined {
  return GUIDE_CONTENT[pageId];
}

/**
 * Structural travel-guide catalog — NO visible marketing copy.
 * Hub-card titles and blurbs are derived from the localized `ArticleContent`
 * registry at render time (see `ArticleContentService`); this file only
 * holds the stable page id, the hero image path and a plain fallback alt.
 */

export interface GuideHubCardMeta {
  /** Stable page id used by routing / site-data / language switcher. */
  pageId: string;
  /** Card thumbnail — reuses existing gallery/mainpage imagery. */
  image: string;
  /** Plain fallback alt text (English); localized cards prefer the article h1. */
  imageAlt: string;
}

export const GUIDE_PAGE_IDS = [
  'guideBestTime',
  'guideVisa',
  'guidePrivateDriver',
  'guideBudget',
  'guideWildlife',
  'guideSafari',
  'guideBeaches',
  'guideTeaCountry',
  'guideFood',
  'guidePacking',
  'guideSafety',
  'guideWhaleWatching',
  'guideTrainJourneys',
  'guideHoneymoon',
  'guideFamilyTours',
  'guideLuxuryTours',
  'guideAirportTransfers',
] as const;

export type GuidePageId = (typeof GUIDE_PAGE_IDS)[number];

export const GUIDE_HUB_CARDS: GuideHubCardMeta[] = [
  {
    pageId: 'guideBestTime',
    image: 'assets/img/mainpage/1.webp',
    imageAlt: 'Sunny coastline representing the best travel season in Sri Lanka',
  },
  {
    pageId: 'guideVisa',
    image: 'assets/img/mainpage/2.webp',
    imageAlt: 'Passport and travel documents for a Sri Lanka visa on arrival',
  },
  {
    pageId: 'guidePrivateDriver',
    image: 'assets/img/mainpage/3.webp',
    imageAlt: 'Private chauffeur-driven car for touring Sri Lanka',
  },
  {
    pageId: 'guideBudget',
    image: 'assets/img/mainpage/4.webp',
    imageAlt: 'Budget travel planning for a Sri Lanka trip',
  },
  {
    pageId: 'guideWildlife',
    image: 'assets/img/5daysTours/45.webp',
    imageAlt: 'Wild elephants in a Sri Lankan national park',
  },
  {
    pageId: 'guideSafari',
    image: 'assets/img/5daysTours/33.webp',
    imageAlt: 'Safari jeep on a game drive in Sri Lanka',
  },
  {
    pageId: 'guideBeaches',
    image: 'assets/img/mainpage/5.webp',
    imageAlt: 'Palm-lined beach on the Sri Lankan coast',
  },
  {
    pageId: 'guideTeaCountry',
    image: 'assets/img/mainpage/6.webp',
    imageAlt: 'Tea plantation rows in the Sri Lankan hill country',
  },
  {
    pageId: 'guideFood',
    image: 'assets/img/5daysTours/9.webp',
    imageAlt: 'Sri Lankan rice and curry spread',
  },
  {
    pageId: 'guidePacking',
    image: 'assets/img/5daysTours/17.webp',
    imageAlt: 'Packed travel bag ready for a Sri Lanka trip',
  },
  {
    pageId: 'guideSafety',
    image: 'assets/img/5daysTours/26.webp',
    imageAlt: 'Traveller safety essentials for a Sri Lanka trip',
  },
  {
    pageId: 'guideWhaleWatching',
    image: 'assets/img/mainpage/5.webp',
    imageAlt: 'South coast waters near Mirissa for seasonal whale watching',
  },
  {
    pageId: 'guideTrainJourneys',
    image: 'assets/img/mainpage/6.webp',
    imageAlt: 'Hill country scenery along Sri Lanka train routes',
  },
  {
    pageId: 'guideHoneymoon',
    image: 'assets/img/package-2.webp',
    imageAlt: 'Private honeymoon touring in Sri Lanka',
  },
  {
    pageId: 'guideFamilyTours',
    image: 'assets/img/5daysTours/33.webp',
    imageAlt: 'Family-friendly wildlife and touring in Sri Lanka',
  },
  {
    pageId: 'guideLuxuryTours',
    image: 'assets/img/package-2.webp',
    imageAlt: 'Luxury private chauffeur travel in Sri Lanka',
  },
  {
    pageId: 'guideAirportTransfers',
    image: 'assets/img/mainpage/3.webp',
    imageAlt: 'Private airport transfer vehicle in Sri Lanka',
  },
];

export function getGuideHubCardMeta(pageId: string): GuideHubCardMeta | undefined {
  return GUIDE_HUB_CARDS.find((c) => c.pageId === pageId);
}

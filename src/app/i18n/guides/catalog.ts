/**
 * Structural travel-guide catalogNO visible marketing copy.
 * Hub-card titles and blurbs are derived from the localized `ArticleContent`
 * registry at render time (see `ArticleContentService`); this file only
 * holds the stable page id, the hero image path and a plain fallback alt.
 */

export interface GuideHubCardMeta {
  /** Stable page id used by routing / site-data / language switcher. */
  pageId: string;
  /** Card thumbnailreuses existing gallery/mainpage imagery. */
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
  'marketUK',
  'marketGermany',
  'marketFrance',
  'marketItaly',
  'marketSpain',
  'marketPoland',
  'marketRussia',
  'marketNetherlands',
  'monthAugust',
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
    image: 'assets/img/onedayTour/Galle/1.webp',
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
    image: 'assets/img/5daysTours/Mirissa-Whale-Watching-1.webp',
    imageAlt: 'Whale watching boat off the south coast near Mirissa',
  },
  {
    pageId: 'guideTrainJourneys',
    image: 'assets/img/5daysTours/6.webp',
    imageAlt: 'Hill country train crossing a viaduct in Sri Lanka',
  },
  {
    pageId: 'guideHoneymoon',
    image: 'assets/img/package-2.webp',
    imageAlt: 'Private honeymoon touring in Sri Lanka',
  },
  {
    pageId: 'guideFamilyTours',
    image: 'assets/img/package-3.webp',
    imageAlt: 'Family meeting an elephant on a Sri Lanka tour',
  },
  {
    pageId: 'guideLuxuryTours',
    image: 'assets/img/5daysTours/30.webp',
    imageAlt: 'Hillside stay on a luxury Sri Lanka tour',
  },
  {
    pageId: 'guideAirportTransfers',
    image: 'assets/img/5daysTours/8.webp',
    imageAlt: 'Scenic stop on a private Sri Lanka tour',
  },
  {
    pageId: 'marketUK',
    image: 'assets/img/tour-galleries/seven-day/10.webp',
    imageAlt: 'Sri Lanka holidays from the UK with a private chauffeur guide',
  },
  {
    pageId: 'marketGermany',
    image: 'assets/img/package-1.webp',
    imageAlt: 'Sri Lanka Rundreise aus Deutschland mit privatem Fahrer Guide',
  },
  {
    pageId: 'marketFrance',
    image: 'assets/img/tour-galleries/seven-day/06.webp',
    imageAlt: 'Circuit prive au Sri Lanka depuis la France avec chauffeur guide',
  },
  {
    pageId: 'marketItaly',
    image: 'assets/img/tour-galleries/seven-day/01.webp',
    imageAlt: 'Tour privato in Sri Lanka dall’Italia con autista guida',
  },
  {
    pageId: 'marketSpain',
    image: 'assets/img/package-8.webp',
    imageAlt: 'Circuito privado por Sri Lanka desde Espana con chofer guia',
  },
  {
    pageId: 'marketPoland',
    image: 'assets/img/5daysTours/4.webp',
    imageAlt: 'Prywatna wycieczka po Sri Lance z Polski z kierowca przewodnikiem',
  },
  {
    pageId: 'marketRussia',
    image: 'assets/img/package-7.webp',
    imageAlt: 'Частный тур по Шри Ланке из России с водителем гидом',
  },
  {
    pageId: 'marketNetherlands',
    image: 'assets/img/5daysTours/12.webp',
    imageAlt: 'Prive Sri Lanka rondreis vanuit Nederland met chauffeur gids',
  },
  {
    pageId: 'monthAugust',
    image: 'assets/img/onedayTour/Sigiriya/1.webp',
    imageAlt: 'Sri Lanka travel in August across Cultural Triangle and east coast',
  },
];

export function getGuideHubCardMeta(pageId: string): GuideHubCardMeta | undefined {
  return GUIDE_HUB_CARDS.find((c) => c.pageId === pageId);
}

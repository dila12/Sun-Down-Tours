/**
 * Structural destination catalogNO visible marketing copy.
 * Hub-card titles and blurbs are derived from the localized `ArticleContent`
 * registry at render time (see `ArticleContentService`); this file only
 * holds the stable page id, the hero image path and a plain fallback alt.
 */

export interface DestHubCardMeta {
  /** Stable page id used by routing / site-data / language switcher. */
  pageId: string;
  /** Card thumbnailsame asset family as the article hero image. */
  image: string;
  /** Plain fallback alt text (English); localized cards prefer the article h1. */
  imageAlt: string;
}

export const DEST_PAGE_IDS = [
  'destSigiriya',
  'destElla',
  'destYala',
  'destKandy',
  'destDambulla',
  'destGalle',
  'destMirissa',
  'destHiriketiya',
  'destWeligama',
  'destColombo',
  'destNegombo',
  'destBentota',
  'destTrincomalee',
] as const;

export type DestPageId = (typeof DEST_PAGE_IDS)[number];

export const DEST_HUB_CARDS: DestHubCardMeta[] = [
  {
    pageId: 'destSigiriya',
    image: 'assets/img/destination-1.webp',
    imageAlt: 'Sigiriya Rock Fortress rising above the jungle canopy',
  },
  {
    pageId: 'destElla',
    image: 'assets/img/destination-2.webp',
    imageAlt: 'Nine Arch Bridge in the hill country of Ella',
  },
  {
    pageId: 'destYala',
    image: 'assets/img/destination-3.webp',
    imageAlt: 'Leopard resting on a rock in Yala National Park',
  },
  {
    pageId: 'destKandy',
    image: 'assets/img/destination-4.webp',
    imageAlt: 'Temple of the Sacred Tooth Relic beside Kandy Lake',
  },
  {
    pageId: 'destDambulla',
    image: 'assets/img/destination-5.webp',
    imageAlt: 'Golden Cave Temple murals and Buddha statues at Dambulla',
  },
  {
    pageId: 'destGalle',
    image: 'assets/img/destination-6.webp',
    imageAlt: 'Galle Fort ramparts overlooking the Indian Ocean',
  },
  {
    pageId: 'destMirissa',
    image: 'assets/img/destination-6.webp',
    imageAlt: "palm fringed beach on Sri Lanka's south coast near Mirissa",
  },
  {
    pageId: 'destHiriketiya',
    image: 'assets/img/mainpage/5.webp',
    imageAlt: 'Horseshoe surf bay at Hiriketiya on Sri Lanka’s south coast',
  },
  {
    pageId: 'destColombo',
    image: 'assets/img/destination-6.webp',
    imageAlt: 'Colombo city and Indian Ocean coastline',
  },
  {
    pageId: 'destNegombo',
    image: 'assets/img/mainpage/5.webp',
    imageAlt: 'Negombo beach near Colombo airport',
  },
  {
    pageId: 'destBentota',
    image: 'assets/img/mainpage/5.webp',
    imageAlt: 'Bentota west-coast beach',
  },
  {
    pageId: 'destWeligama',
    image: 'assets/img/mainpage/5.webp',
    imageAlt: 'Weligama surf bay on the south coast',
  },
  {
    pageId: 'destTrincomalee',
    image: 'assets/img/mainpage/5.webp',
    imageAlt: 'east coast beach near Trincomalee',
  },
];

export function getDestHubCardMeta(pageId: string): DestHubCardMeta | undefined {
  return DEST_HUB_CARDS.find((c) => c.pageId === pageId);
}

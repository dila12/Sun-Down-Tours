/**
 * Structural tour catalog — NO visible marketing copy.
 * Titles, day labels, persons, overview, itinerary prose etc. live in
 * locale content (`cards.ts` + per-tour content files).
 */
export type TourCategory = 'day' | 'multi';

export interface TourMeta {
  /** Stable page id used by routing / site-data / language switcher. */
  pageId: string;
  /** Legacy numeric id (kept for price-map compatibility where needed). */
  id: number;
  category: TourCategory;
  /** Price / booking file stem, e.g. `7-day-sri-lanka-tour`. */
  filecode: string;
  rating: number;
  imageFolder: string;
  imageName: string;
  imageExt: string;
}

export const TOUR_CATALOG: TourMeta[] = [
  // Day tours
  {
    pageId: 'ellaDay',
    id: 2,
    category: 'day',
    filecode: 'ella-day-tour',
    rating: 5,
    imageFolder: 'onedayTour/ella',
    imageName: '7',
    imageExt: 'jpeg',
  },
  {
    pageId: 'galleDay',
    id: 6,
    category: 'day',
    filecode: 'galle-day-tour',
    rating: 5,
    imageFolder: 'onedayTour/Galle',
    imageName: '7',
    imageExt: 'jpg',
  },
  {
    pageId: 'kandyDay',
    id: 7,
    category: 'day',
    filecode: 'kandy-day-tour',
    rating: 5,
    imageFolder: 'onedayTour/kandy',
    imageName: '3',
    imageExt: 'jpg',
  },
  {
    pageId: 'sigiriyaDay',
    id: 8,
    category: 'day',
    filecode: 'sigiriya-day-tour',
    rating: 5,
    imageFolder: 'onedayTour/Sigiriya',
    imageName: '3',
    imageExt: 'jpg',
  },

  // Multi-day tours
  {
    pageId: 'tour2ey',
    id: 1,
    category: 'multi',
    filecode: '2-day-ella-yala-private-tour-sri-lanka',
    rating: 5,
    imageFolder: '5daysTours',
    imageName: '24',
    imageExt: 'jpg',
  },
  {
    pageId: 'tour2ek',
    id: 9,
    category: 'multi',
    filecode: '2-day-ella-kandy-private-tour-sri-lanka',
    rating: 5,
    imageFolder: '',
    imageName: 'package-2',
    imageExt: 'jpg',
  },
  {
    pageId: 'tour4',
    id: 13,
    category: 'multi',
    filecode: '4-day-sri-lanka-tour',
    rating: 5,
    imageFolder: '',
    imageName: 'package-8',
    imageExt: 'jpg',
  },
  {
    pageId: 'tour5',
    id: 3,
    category: 'multi',
    filecode: '5-day-sri-lanka-tour',
    rating: 5,
    imageFolder: '',
    imageName: 'package-4',
    imageExt: 'jpg',
  },
  {
    pageId: 'tour6',
    id: 11,
    category: 'multi',
    filecode: '6-day-sri-lanka-private-tour',
    rating: 5,
    imageFolder: '',
    imageName: 'package-7',
    imageExt: 'jpg',
  },
  {
    pageId: 'tour7',
    id: 4,
    category: 'multi',
    filecode: '7-day-sri-lanka-tour',
    rating: 5,
    imageFolder: '',
    imageName: 'package-1',
    imageExt: 'jpg',
  },
  {
    pageId: 'tour8',
    id: 12,
    category: 'multi',
    filecode: '8-day-sri-lanka-private-tour',
    rating: 5,
    imageFolder: '',
    imageName: 'package-6',
    imageExt: 'jpg',
  },
  {
    pageId: 'tour10',
    id: 5,
    category: 'multi',
    filecode: '10-day-sri-lanka-tour',
    rating: 5,
    imageFolder: '',
    imageName: 'package-2',
    imageExt: 'jpg',
  },
];

export function getTourMeta(pageId: string): TourMeta | undefined {
  return TOUR_CATALOG.find((t) => t.pageId === pageId);
}

export function getTourMetaByFilecode(filecode: string): TourMeta | undefined {
  return TOUR_CATALOG.find((t) => t.filecode === filecode);
}

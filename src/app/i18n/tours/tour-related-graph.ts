import type { RelatedLink } from '../articles/types';

/**
 * Topical authority graph for tour pages.
 * Links existing destinations, guides, restaurants hub, and related tours only.
 */
export interface TourRelatedGraph {
  destinations: RelatedLink[];
  guides: RelatedLink[];
  restaurants: RelatedLink[];
  tours: RelatedLink[];
  /** Short contextual blurb shown above link chips (English; UI uses as-is). */
  context: string;
}

const restaurant: RelatedLink = {
  pageId: 'restaurants',
  label: 'Sundown Beach Restaurant',
};

export const TOUR_RELATED_GRAPH: Record<string, TourRelatedGraph> = {
  ellaDay: {
    context:
      'This day trip centres on Ella explore the destination guide, tea-country tips, and related hill-country tours before you book.',
    destinations: [
      { pageId: 'destElla', label: 'Ella destination guide' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    guides: [
      { pageId: 'guideTeaCountry', label: 'Tea country guide' },
      { pageId: 'guideBestTime', label: 'Best time to visit' },
      { pageId: 'guidePrivateDriver', label: 'Private driver guide' },
    ],
    restaurants: [restaurant],
    tours: [
      { pageId: 'tour2ey', label: '2-day Ella & Yala' },
      { pageId: 'tour2ek', label: '2-day Ella & Kandy' },
      { pageId: 'kandyDay', label: 'Kandy day tour' },
    ],
  },
  galleDay: {
    context:
      'A Galle day tour pairs the fort and south coast read the destination page, beach guide, and nearby coastal dining.',
    destinations: [
      { pageId: 'destGalle', label: 'Galle destination guide' },
      { pageId: 'destMirissa', label: 'Mirissa' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    guides: [
      { pageId: 'guideBeaches', label: 'Sri Lanka beaches' },
      { pageId: 'guideWhaleWatching', label: 'Whale watching' },
      { pageId: 'guideFood', label: 'Food guide' },
      { pageId: 'guideBestTime', label: 'Best time to visit' },
    ],
    restaurants: [restaurant],
    tours: [
      { pageId: 'tour5', label: '5-day Sri Lanka tour' },
      { pageId: 'tour7', label: '7-day Sri Lanka tour' },
      { pageId: 'ellaDay', label: 'Ella day tour' },
    ],
  },
  kandyDay: {
    context:
      'Kandy day trips cover the Temple of the Tooth and hill-country approaches link through to destination and tea-country guides.',
    destinations: [
      { pageId: 'destKandy', label: 'Kandy destination guide' },
      { pageId: 'destDambulla', label: 'Dambulla' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    guides: [
      { pageId: 'guideTeaCountry', label: 'Tea country guide' },
      { pageId: 'guideBestTime', label: 'Best time to visit' },
      { pageId: 'guidePrivateDriver', label: 'Private driver guide' },
    ],
    restaurants: [restaurant],
    tours: [
      { pageId: 'tour2ek', label: '2-day Ella & Kandy' },
      { pageId: 'sigiriyaDay', label: 'Sigiriya day tour' },
      { pageId: 'tour7', label: '7-day Sri Lanka tour' },
    ],
  },
  sigiriyaDay: {
    context:
      'Sigiriya day tours sit in the Cultural Triangle continue with Sigiriya and Dambulla destination pages plus safari planning guides.',
    destinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya destination guide' },
      { pageId: 'destDambulla', label: 'Dambulla' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    guides: [
      { pageId: 'guideBestTime', label: 'Best time to visit' },
      { pageId: 'guidePrivateDriver', label: 'Private driver guide' },
      { pageId: 'guideSafari', label: 'Safari guide' },
    ],
    restaurants: [restaurant],
    tours: [
      { pageId: 'tour4', label: '4-day Cultural Triangle' },
      { pageId: 'tour7', label: '7-day Sri Lanka tour' },
      { pageId: 'kandyDay', label: 'Kandy day tour' },
    ],
  },
  tour2ey: {
    context:
      'Ella and Yala combine hill country with wildlife use destination pages for Ella and Yala plus safari and packing guides.',
    destinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destYala', label: 'Yala' },
      { pageId: 'destGalle', label: 'Galle' },
    ],
    guides: [
      { pageId: 'guideSafari', label: 'Safari guide' },
      { pageId: 'guideWildlife', label: 'Wildlife guide' },
      { pageId: 'guidePacking', label: 'Packing list' },
    ],
    restaurants: [restaurant],
    tours: [
      { pageId: 'ellaDay', label: 'Ella day tour' },
      { pageId: 'tour7', label: '7-day Sri Lanka tour' },
      { pageId: 'tour5', label: '5-day Sri Lanka tour' },
    ],
  },
  tour2ek: {
    context:
      'Ella and Kandy cover tea country and the hill capital deepen planning with destination and tea-country guides.',
    destinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
      { pageId: 'destDambulla', label: 'Dambulla' },
    ],
    guides: [
      { pageId: 'guideTeaCountry', label: 'Tea country guide' },
      { pageId: 'guideBestTime', label: 'Best time to visit' },
      { pageId: 'guidePrivateDriver', label: 'Private driver guide' },
    ],
    restaurants: [restaurant],
    tours: [
      { pageId: 'ellaDay', label: 'Ella day tour' },
      { pageId: 'kandyDay', label: 'Kandy day tour' },
      { pageId: 'tour7', label: '7-day Sri Lanka tour' },
    ],
  },
  tour4: {
    context:
      'A four-day Cultural Triangle route links Sigiriya, Dambulla and Kandy follow those destination pages and related guides.',
    destinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destDambulla', label: 'Dambulla' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    guides: [
      { pageId: 'guideBestTime', label: 'Best time to visit' },
      { pageId: 'guidePrivateDriver', label: 'Private driver guide' },
      { pageId: 'guideBudget', label: 'Budget guide' },
    ],
    restaurants: [restaurant],
    tours: [
      { pageId: 'sigiriyaDay', label: 'Sigiriya day tour' },
      { pageId: 'tour7', label: '7-day Sri Lanka tour' },
      { pageId: 'tour5', label: '5-day Sri Lanka tour' },
    ],
  },
  tour5: {
    context:
      'Five-day itineraries usually mix culture, hills and coast explore Sigiriya, Ella, Galle and supporting travel guides.',
    destinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    guides: [
      { pageId: 'guideBestTime', label: 'Best time to visit' },
      { pageId: 'guideBeaches', label: 'Beaches guide' },
      { pageId: 'guidePrivateDriver', label: 'Private driver guide' },
    ],
    restaurants: [restaurant],
    tours: [
      { pageId: 'tour7', label: '7-day Sri Lanka tour' },
      { pageId: 'galleDay', label: 'Galle day tour' },
      { pageId: 'ellaDay', label: 'Ella day tour' },
    ],
  },
  tour6: {
    context:
      'Six-day private tours typically include wildlife or coast time link to Yala, Ella and safari planning content.',
    destinations: [
      { pageId: 'destYala', label: 'Yala' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    guides: [
      { pageId: 'guideSafari', label: 'Safari guide' },
      { pageId: 'guideWildlife', label: 'Wildlife guide' },
      { pageId: 'guideBestTime', label: 'Best time to visit' },
    ],
    restaurants: [restaurant],
    tours: [
      { pageId: 'tour2ey', label: '2-day Ella & Yala' },
      { pageId: 'tour7', label: '7-day Sri Lanka tour' },
      { pageId: 'tour8', label: '8-day private tour' },
    ],
  },
  tour7: {
    context:
      'The classic seven-day circuit covers Sigiriya, Kandy, Ella, Yala and Galle use each destination page and matching guides.',
    destinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destKandy', label: 'Kandy' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destYala', label: 'Yala' },
      { pageId: 'destGalle', label: 'Galle' },
    ],
    guides: [
      { pageId: 'guideBestTime', label: 'Best time to visit' },
      { pageId: 'guideSafari', label: 'Safari guide' },
      { pageId: 'guidePrivateDriver', label: 'Private driver guide' },
      { pageId: 'guidePacking', label: 'Packing list' },
    ],
    restaurants: [restaurant],
    tours: [
      { pageId: 'tour8', label: '8-day private tour' },
      { pageId: 'tour10', label: '10-day Sri Lanka tour' },
      { pageId: 'tour5', label: '5-day Sri Lanka tour' },
    ],
  },
  tour8: {
    context:
      'An eight-day private tour adds breathing room across culture, hills, wildlife and coast dig into destination and guide pages below.',
    destinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destDambulla', label: 'Dambulla' },
      { pageId: 'destKandy', label: 'Kandy' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destYala', label: 'Yala' },
      { pageId: 'destGalle', label: 'Galle' },
    ],
    guides: [
      { pageId: 'guideBestTime', label: 'Best time to visit' },
      { pageId: 'guideSafari', label: 'Safari guide' },
      { pageId: 'guideTeaCountry', label: 'Tea country guide' },
      { pageId: 'guideBeaches', label: 'Beaches guide' },
    ],
    restaurants: [restaurant],
    tours: [
      { pageId: 'tour7', label: '7-day Sri Lanka tour' },
      { pageId: 'tour10', label: '10-day Sri Lanka tour' },
      { pageId: 'tour6', label: '6-day private tour' },
    ],
  },
  tour10: {
    context:
      'Ten days allows a fuller island circuit explore all core destinations plus budget, visa and safety guides.',
    destinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destDambulla', label: 'Dambulla' },
      { pageId: 'destKandy', label: 'Kandy' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destYala', label: 'Yala' },
      { pageId: 'destGalle', label: 'Galle' },
    ],
    guides: [
      { pageId: 'guideVisa', label: 'Visa & ETA guide' },
      { pageId: 'guideBudget', label: 'Budget guide' },
      { pageId: 'guideSafety', label: 'Safety guide' },
      { pageId: 'guideBestTime', label: 'Best time to visit' },
    ],
    restaurants: [restaurant],
    tours: [
      { pageId: 'tour7', label: '7-day Sri Lanka tour' },
      { pageId: 'tour8', label: '8-day private tour' },
      { pageId: 'tour5', label: '5-day Sri Lanka tour' },
    ],
  },
};

export function getTourRelatedGraph(pageId: string): TourRelatedGraph | null {
  return TOUR_RELATED_GRAPH[pageId] ?? null;
}

import type { ArticleContent, BaseArticle } from '../articles/types';

/** Thin EN stubs for P2 landing pages — expand with full multilingual bodies later. */
function stub(opts: {
  h1: string;
  lead: string;
  heroImage?: string;
  relatedTours?: { pageId: string; label: string }[];
  relatedDestinations?: { pageId: string; label: string }[];
  relatedGuides?: { pageId: string; label: string }[];
}): ArticleContent {
  const en: BaseArticle = {
    h1: opts.h1,
    lead: opts.lead,
    heroImage: opts.heroImage ?? 'assets/img/destination-1.webp',
    heroAlt: opts.h1,
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        body: `${opts.lead}\n\nThis page is a planning stub. Sundown Tours can include this destination or theme in a private chauffeur itinerary tailored to your dates, pace and hotel style. Contact us for a custom quote.`,
      },
      {
        id: 'withUs',
        title: 'Travel with a private driver',
        body: 'Our local chauffeur-guides handle logistics, timing and flexible stops so you can focus on the experience. Multi-day packages and day trips can be combined around this topic.',
      },
    ],
    faq: [
      {
        q: 'Can Sundown Tours include this in a private itinerary?',
        a: 'Yes. Tell us your travel dates, group size and interests and we will propose a private driver itinerary that fits.',
      },
      {
        q: 'Is this a fixed group tour?',
        a: 'No. We specialise in private tours for couples, families and small groups, with hotel and pacing choices you control.',
      },
    ],
    ctaTitle: 'Plan this with Sundown Tours',
    ctaBody: 'Message us on WhatsApp or use the contact form for a private Sri Lanka itinerary.',
    ctaLabel: 'Contact us',
    relatedTours: opts.relatedTours ?? [
      { pageId: 'tour7', label: '7-day Sri Lanka tour' },
      { pageId: 'tour5', label: '5-day Sri Lanka tour' },
    ],
    relatedDestinations: opts.relatedDestinations ?? [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destGalle', label: 'Galle' },
    ],
    relatedGuides: opts.relatedGuides ?? [
      { pageId: 'guideBestTime', label: 'Best time to visit' },
      { pageId: 'guidePrivateDriver', label: 'Private driver guide' },
      { pageId: 'restaurants', label: 'Restaurants' },
    ],
  };
  return { en };
}

const defaultTours = [
  { pageId: 'tour7', label: '7-day Sri Lanka tour' },
  { pageId: 'tour10', label: '10-day Sri Lanka tour' },
];

export const SCAFFOLD_ARTICLES: Record<string, ArticleContent> = {
  destColombo: stub({
    h1: 'Colombo, Sri Lanka: Gateway City for Private Tours',
    lead: 'Colombo is the usual arrival hub for international flights and a practical first or last stop on a private Sri Lanka itinerary, with museums, markets and Indian Ocean coast within easy reach of your chauffeur.',
    relatedTours: defaultTours,
    relatedDestinations: [
      { pageId: 'destNegombo', label: 'Negombo' },
      { pageId: 'destGalle', label: 'Galle' },
    ],
  }),
  destNegombo: stub({
    h1: 'Negombo, Sri Lanka: Beach Town Near the Airport',
    lead: 'Negombo is a convenient first-night beach base near Bandaranaike International Airport, ideal before heading inland to the Cultural Triangle or south along the west coast.',
    relatedDestinations: [
      { pageId: 'destColombo', label: 'Colombo' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
  }),
  destBentota: stub({
    h1: 'Bentota, Sri Lanka: West-Coast Beach Holidays',
    lead: 'Bentota is a classic west-coast beach strip for river mouths, water sports and relaxed resort stays, often combined with Galle on private southbound itineraries.',
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destMirissa', label: 'Mirissa' },
    ],
    relatedGuides: [
      { pageId: 'guideBeaches', label: 'Beaches guide' },
      { pageId: 'guideBestTime', label: 'Best time to visit' },
    ],
  }),
  destNuwaraEliya: stub({
    h1: 'Nuwara Eliya, Sri Lanka: Tea Country Highlands',
    lead: 'Nuwara Eliya sits in the cool central highlands among tea estates, lakes and colonial-era gardens a natural stop between Kandy and Ella on private hill-country itineraries.',
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guideTeaCountry', label: 'Tea country guide' },
      { pageId: 'guideTrainJourneys', label: 'Train journeys' },
    ],
  }),
  destAnuradhapura: stub({
    h1: 'Anuradhapura, Sri Lanka: Ancient Capital of the North-Central Plains',
    lead: 'Anuradhapura is a vast sacred city of dagobas, monasteries and reservoirs a deep Cultural Triangle stop best explored with a private driver and a flexible day plan.',
    relatedDestinations: [
      { pageId: 'destPolonnaruwa', label: 'Polonnaruwa' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
  }),
  destPolonnaruwa: stub({
    h1: 'Polonnaruwa, Sri Lanka: Medieval Ruins of the Cultural Triangle',
    lead: 'Polonnaruwa preserves medieval royal ruins, stone Buddhas and irrigation works and pairs naturally with Sigiriya and Dambulla on a private Cultural Triangle circuit.',
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destDambulla', label: 'Dambulla' },
    ],
  }),
  destTrincomalee: stub({
    h1: 'Trincomalee, Sri Lanka: East-Coast Beaches and Harbour',
    lead: 'Trincomalee offers east-coast beaches, temples and a natural harbour best timed with the east-coast dry season and linked by private transfer from the Cultural Triangle.',
    relatedGuides: [
      { pageId: 'guideBeaches', label: 'Beaches guide' },
      { pageId: 'guideBestTime', label: 'Best time to visit' },
    ],
  }),
  destArugamBay: stub({
    h1: 'Arugam Bay, Sri Lanka: Surf and East-Coast Vibes',
    lead: 'Arugam Bay is Sri Lanka’s best-known surf town on the east coast, suited to travellers who want beach time after wildlife parks or Cultural Triangle stops.',
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala' },
      { pageId: 'destTrincomalee', label: 'Trincomalee' },
    ],
  }),
  destKalpitiya: stub({
    h1: 'Kalpitiya, Sri Lanka: Lagoon, Kitesurf and Dolphins',
    lead: 'Kalpitiya is a peninsula of lagoons and beaches on the north-west coast, known for kitesurfing and seasonal dolphin trips, reachable by private transfer from Negombo or Colombo.',
    relatedDestinations: [
      { pageId: 'destNegombo', label: 'Negombo' },
      { pageId: 'destColombo', label: 'Colombo' },
    ],
  }),

  guideWhaleWatching: stub({
    h1: 'Whale Watching in Sri Lanka: Mirissa and Beyond',
    lead: 'Seasonal whale watching operates mainly from Mirissa (and sometimes Trincomalee). Pair boat mornings with a private south-coast itinerary and flexible hotel nights.',
    relatedDestinations: [
      { pageId: 'destMirissa', label: 'Mirissa' },
      { pageId: 'destGalle', label: 'Galle' },
    ],
    relatedGuides: [
      { pageId: 'guideBeaches', label: 'Beaches guide' },
      { pageId: 'guideBestTime', label: 'Best time to visit' },
    ],
  }),
  guideTrainJourneys: stub({
    h1: 'Sri Lanka Train Journeys: Ella, Kandy and Tea Country',
    lead: 'Scenic train segments such as Kandy–Ella are highlights of hill-country travel. A private driver can drop you at the station and meet you at the other end with your luggage.',
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
      { pageId: 'destNuwaraEliya', label: 'Nuwara Eliya' },
    ],
    relatedGuides: [
      { pageId: 'guideTeaCountry', label: 'Tea country guide' },
    ],
  }),
  guideHoneymoon: stub({
    h1: 'Sri Lanka Honeymoon Tours: Private Routes for Couples',
    lead: 'Honeymoon itineraries usually mix culture, tea country and beach time at a slower pace private vehicles and flexible hotels make the island easy for couples.',
    relatedTours: [
      { pageId: 'tour7', label: '7-day Sri Lanka tour' },
      { pageId: 'tour10', label: '10-day Sri Lanka tour' },
      { pageId: 'tour2ek', label: '2-day Ella & Kandy' },
    ],
  }),
  guideFamilyTours: stub({
    h1: 'Sri Lanka Family Tours: Private Trips with Kids',
    lead: 'Family tours work best with private transport, sensible day lengths and a mix of wildlife, beaches and gentle culture stops. We plan pacing around your children’s ages.',
    relatedTours: defaultTours,
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Safari guide' },
      { pageId: 'guideSafety', label: 'Safety guide' },
    ],
  }),
  guideLuxuryTours: stub({
    h1: 'Sri Lanka Luxury Tours: Private Chauffeur and Boutique Stays',
    lead: 'Luxury private tours emphasise boutique hotels, carefully timed sightseeing and a dedicated chauffeur-guide without rigid group schedules.',
    relatedTours: [
      { pageId: 'tour8', label: '8-day private tour' },
      { pageId: 'tour10', label: '10-day Sri Lanka tour' },
    ],
  }),
  guideAirportTransfers: stub({
    h1: 'Sri Lanka Airport Transfers: Private Pickup and Drop-Off',
    lead: 'Private airport transfers from Colombo (CMB) to Negombo, Colombo city, the west coast or your first tour hotel remove arrival stress and start your trip with a dedicated driver.',
    relatedDestinations: [
      { pageId: 'destNegombo', label: 'Negombo' },
      { pageId: 'destColombo', label: 'Colombo' },
    ],
    relatedGuides: [
      { pageId: 'guidePrivateDriver', label: 'Private driver guide' },
    ],
  }),

  marketGermany: stub({
    h1: 'Sri Lanka Tours from Germany: Private Holidays with Local Drivers',
    lead: 'German travellers often favour private round trips covering culture, tea country and beaches. We plan in German or English and tailor pacing to your flight schedule from Europe.',
  }),
  marketFrance: stub({
    h1: 'Sri Lanka Tours from France: Private Circuits with Chauffeur Guides',
    lead: 'French visitors frequently want culture, nature and coast on one private itinerary. We support planning in French or English with flexible hotel categories.',
  }),
  marketItaly: stub({
    h1: 'Sri Lanka Tours from Italy: Tailor-Made Private Travel',
    lead: 'Italian travellers often combine Cultural Triangle highlights with hill country and the south coast on a private driver circuit sized to their holiday length.',
  }),
  marketSpain: stub({
    h1: 'Sri Lanka Tours from Spain: Private Holidays and Beach Extensions',
    lead: 'Spanish travellers can pair inland culture and wildlife with west- or south-coast beach time using a private chauffeur and flexible overnight stops.',
  }),
  marketPoland: stub({
    h1: 'Sri Lanka Tours from Poland: Private Island Itineraries',
    lead: 'Polish travellers often choose multi-day private tours covering Sigiriya, Kandy, Ella and the coast we plan around your flight connections and preferred pace.',
  }),
  marketRussia: stub({
    h1: 'Sri Lanka Tours from Russia: Private Driver Holidays',
    lead: 'Russian travellers frequently request private circuits with wildlife and beach time. We arrange chauffeur-guided routes matched to season and hotel style.',
  }),
  marketNetherlands: stub({
    h1: 'Sri Lanka Tours from the Netherlands: Private Rondreizen',
    lead: 'Dutch travellers often prefer efficient private rondreizen with culture, tea country and coast. Plan with us in Dutch or English around Schiphol connections.',
  }),
  marketUK: stub({
    h1: 'Sri Lanka Tours from the UK: Private Holidays with Local Experts',
    lead: 'UK travellers commonly combine Cultural Triangle, hill country and beach time on private tours with English-speaking chauffeur-guides.',
  }),
  marketAustria: stub({
    h1: 'Sri Lanka Tours from Austria: Private Rundreisen',
    lead: 'Austrian travellers often look for private Rundreisen covering culture and nature with reliable local drivers and flexible hotel choices.',
  }),
  marketSwitzerland: stub({
    h1: 'Sri Lanka Tours from Switzerland: Tailor-Made Private Travel',
    lead: 'Swiss travellers frequently choose carefully paced private itineraries with boutique hotels and a dedicated chauffeur across Sri Lanka’s highlights.',
  }),
};

const MONTHS: { id: string; name: string }[] = [
  { id: 'monthJanuary', name: 'January' },
  { id: 'monthFebruary', name: 'February' },
  { id: 'monthMarch', name: 'March' },
  { id: 'monthApril', name: 'April' },
  { id: 'monthMay', name: 'May' },
  { id: 'monthJune', name: 'June' },
  { id: 'monthJuly', name: 'July' },
  { id: 'monthAugust', name: 'August' },
  { id: 'monthSeptember', name: 'September' },
  { id: 'monthOctober', name: 'October' },
  { id: 'monthNovember', name: 'November' },
  { id: 'monthDecember', name: 'December' },
];

for (const m of MONTHS) {
  SCAFFOLD_ARTICLES[m.id] = stub({
    h1: `Sri Lanka in ${m.name}: Weather, Regions and Travel Tips`,
    lead: `Planning Sri Lanka in ${m.name}? Regional monsoon patterns mean the best coast and hill-country windows shift through the year. Use this stub with our best-time guide and a private itinerary matched to ${m.name} weather.`,
    relatedGuides: [
      { pageId: 'guideBestTime', label: 'Best time to visit' },
      { pageId: 'guidePacking', label: 'Packing list' },
      { pageId: 'guidePrivateDriver', label: 'Private driver guide' },
    ],
  });
}

export function getScaffoldArticle(pageId: string): ArticleContent | undefined {
  return SCAFFOLD_ARTICLES[pageId];
}

import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const stubs = {
  destColombo: [
    'Colombo Sri Lanka Travel Guide | Private Tours',
    'Plan Colombo as your arrival hub with private airport transfers and tailor-made Sri Lanka itineraries.',
  ],
  destNegombo: [
    'Negombo Sri Lanka | Beach Near Airport',
    'Stay in Negombo near Bandaranaike Airport before a private Cultural Triangle or west-coast tour.',
  ],
  destBentota: [
    'Bentota Sri Lanka | West Coast Beach Holidays',
    'Bentota beach holidays with private chauffeur links to Galle and the south coast.',
  ],
  destMirissa: [
    'Mirissa Sri Lanka | Beaches and Whale Watching',
    'Mirissa beaches and whale watching on private south-coast Sri Lanka tours.',
  ],
  destNuwaraEliya: [
    'Nuwara Eliya Sri Lanka | Tea Country Highlands',
    'Nuwara Eliya tea country stays between Kandy and Ella on private hill-country itineraries.',
  ],
  destAnuradhapura: [
    'Anuradhapura Sri Lanka | Ancient Sacred City',
    'Explore Anuradhapura with a private driver in Sri Lanka Cultural Triangle itineraries.',
  ],
  destPolonnaruwa: [
    'Polonnaruwa Sri Lanka | Medieval Ruins Guide',
    'Visit Polonnaruwa ruins on a private Cultural Triangle tour with Sundown Tours.',
  ],
  destTrincomalee: [
    'Trincomalee Sri Lanka | East Coast Beaches',
    'Trincomalee east-coast beaches and harbour stops on seasonal private itineraries.',
  ],
  destArugamBay: [
    'Arugam Bay Sri Lanka | Surf and East Coast',
    'Arugam Bay surf town stays linked by private transfer after wildlife or culture days.',
  ],
  destKalpitiya: [
    'Kalpitiya Sri Lanka | Lagoon and Dolphins',
    'Kalpitiya lagoon, kitesurf and dolphin trips with private transfers from Negombo.',
  ],
  guideWhaleWatching: [
    'Whale Watching Sri Lanka | Mirissa Guide',
    'Plan Mirissa whale watching on a private south-coast Sri Lanka itinerary.',
  ],
  guideTrainJourneys: [
    'Sri Lanka Train Journeys | Ella and Kandy',
    'Scenic Sri Lanka train journeys with private driver station transfers in tea country.',
  ],
  guideHoneymoon: [
    'Sri Lanka Honeymoon Tours | Private Couples Travel',
    'Private honeymoon itineraries mixing culture, tea country and beach time.',
  ],
  guideFamilyTours: [
    'Sri Lanka Family Tours | Private Trips with Kids',
    'Family-friendly private Sri Lanka tours with flexible pacing and wildlife options.',
  ],
  guideLuxuryTours: [
    'Sri Lanka Luxury Tours | Private Chauffeur Travel',
    'Luxury private chauffeur tours with boutique hotels across Sri Lanka.',
  ],
  guideAirportTransfers: [
    'Sri Lanka Airport Transfers | Private Pickup',
    'Private CMB airport transfers to Negombo, Colombo and your first tour hotel.',
  ],
  marketGermany: [
    'Sri Lanka Tours from Germany | Private Rundreisen',
    'Private Sri Lanka tours for travellers from Germany with local chauffeur-guides.',
  ],
  marketFrance: [
    'Sri Lanka Tours from France | Circuits Privés',
    'Private Sri Lanka circuits for travellers from France with flexible hotels.',
  ],
  marketItaly: [
    'Sri Lanka Tours from Italy | Private Travel',
    'Tailor-made private Sri Lanka tours for travellers from Italy.',
  ],
  marketSpain: [
    'Sri Lanka Tours from Spain | Private Holidays',
    'Private Sri Lanka holidays for travellers from Spain with coast and culture.',
  ],
  marketPoland: [
    'Sri Lanka Tours from Poland | Private Itineraries',
    'Private Sri Lanka itineraries for travellers from Poland.',
  ],
  marketRussia: [
    'Sri Lanka Tours from Russia | Private Driver Holidays',
    'Private chauffeur holidays in Sri Lanka for travellers from Russia.',
  ],
  marketNetherlands: [
    'Sri Lanka Tours from the Netherlands | Privé Rondreizen',
    'Private Sri Lanka rondreizen for travellers from the Netherlands.',
  ],
  marketUK: [
    'Sri Lanka Tours from the UK | Private Holidays',
    'Private Sri Lanka holidays for travellers from the United Kingdom.',
  ],
  marketAustria: [
    'Sri Lanka Tours from Austria | Private Rundreisen',
    'Private Sri Lanka Rundreisen for travellers from Austria.',
  ],
  marketSwitzerland: [
    'Sri Lanka Tours from Switzerland | Tailor-Made Travel',
    'Tailor-made private Sri Lanka travel for visitors from Switzerland.',
  ],
  monthJanuary: ['Sri Lanka in January | Weather and Travel Tips', 'Travel tips for Sri Lanka in January — regions, weather and private itinerary ideas.'],
  monthFebruary: ['Sri Lanka in February | Weather and Travel Tips', 'Travel tips for Sri Lanka in February — regions, weather and private itinerary ideas.'],
  monthMarch: ['Sri Lanka in March | Weather and Travel Tips', 'Travel tips for Sri Lanka in March — regions, weather and private itinerary ideas.'],
  monthApril: ['Sri Lanka in April | Weather and Travel Tips', 'Travel tips for Sri Lanka in April — regions, weather and private itinerary ideas.'],
  monthMay: ['Sri Lanka in May | Weather and Travel Tips', 'Travel tips for Sri Lanka in May — regions, weather and private itinerary ideas.'],
  monthJune: ['Sri Lanka in June | Weather and Travel Tips', 'Travel tips for Sri Lanka in June — regions, weather and private itinerary ideas.'],
  monthJuly: ['Sri Lanka in July | Weather and Travel Tips', 'Travel tips for Sri Lanka in July — regions, weather and private itinerary ideas.'],
  monthAugust: ['Sri Lanka in August | Weather and Travel Tips', 'Travel tips for Sri Lanka in August — regions, weather and private itinerary ideas.'],
  monthSeptember: ['Sri Lanka in September | Weather and Travel Tips', 'Travel tips for Sri Lanka in September — regions, weather and private itinerary ideas.'],
  monthOctober: ['Sri Lanka in October | Weather and Travel Tips', 'Travel tips for Sri Lanka in October — regions, weather and private itinerary ideas.'],
  monthNovember: ['Sri Lanka in November | Weather and Travel Tips', 'Travel tips for Sri Lanka in November — regions, weather and private itinerary ideas.'],
  monthDecember: ['Sri Lanka in December | Weather and Travel Tips', 'Travel tips for Sri Lanka in December — regions, weather and private itinerary ideas.'],
  terms: [
    'Terms of Service | Sundown Tours Sri Lanka',
    'Terms of service for private tours and chauffeur bookings with Sundown Tours Sri Lanka.',
  ],
  bookingPolicy: [
    'Booking Policy | Sundown Tours Sri Lanka',
    'How deposits, confirmations and booking changes work for Sundown Tours private itineraries.',
  ],
};

function block(id, title, desc) {
  return `    ${id}: {
      title: ${JSON.stringify(title)},
      description: ${JSON.stringify(desc)},
      keywords: ${JSON.stringify(id)},
    },`;
}

const insert = Object.entries(stubs)
  .map(([id, [t, d]]) => block(id, t, d))
  .join('\n');

const dir = 'src/app/i18n/content';
for (const f of await readdir(dir)) {
  if (!f.endsWith('.ts') || f === 'types.ts' || f === 'index.ts') continue;
  const path = join(dir, f);
  let src = await readFile(path, 'utf8');
  if (src.includes('destColombo:')) {
    console.log('skip', f);
    continue;
  }
  if (!src.includes('bookingSuccess:')) {
    console.log('no bookingSuccess', f);
    continue;
  }
  src = src.replace(/(\n    bookingSuccess:)/, `\n${insert}$1`);
  await writeFile(path, src);
  console.log('seo stubs', f);
}

import type { ArticleContent } from '../articles/types';

/**
 * Hiriketiya destination (pageId: destHiriketiya).
 * Rising UK Google Trends query (+200% over 5 years).
 */
export const HIRIKETIYA_DEST: ArticleContent = {
  en: {
    h1: 'Hiriketiya, Sri Lanka: Surf Bay, Cafes and a Quieter south coast Stay',
    lead:
      'Hiriketiya is a horseshoe bay on Sri Lanka’s south coast, between Dikwella and the Ahangama to Mirissa stretch. UK searches for the name have surged because travellers want the same swimming and surf as Mirissa with a smaller village feel, walkable cafes and a curve of sand you can cross in a few minutes.',
    heroImage: 'assets/img/mainpage/5.webp',
    heroAlt: 'Palm lined south coast bay typical of Hiriketiya, Sri Lanka',
    sections: [
      {
        id: 'overview',
        title: 'A compact bay, not a resort strip',
        body: 'Hiriketiya (often shortened to “Hiri”) sits on the south coast east of Mirissa and west of Tangalle. The beach is a sheltered cove with a rocky point that holds a friendly surf break in season, a handful of guesthouses stacked on the hillside, and a cafe scene that grew quickly in the 2010s. It is still small: most visitors walk the bay rather than taking tuk tuks between every meal.\n\nIt is not wilderness. Popularity on social media means peak season rooms book out, and the village can feel busy in December to March. Compared with Mirissa’s longer crescent and whale watching harbour, Hiriketiya stays more containedbetter if you want one beach base rather than nightlife sprawl.',
      },
      {
        id: 'whenToGo',
        title: 'When to visit Hiriketiya',
        body: 'The southwest monsoon (roughly May to September) brings rain and choppier seas to this coast. The reliable window for swimming and beginner friendly surf is approximately November to April, overlapping UK winter sun holidays. Shoulder months can still work with a flexible private driver who can shift you west or east if a swell or storm sits on the bay.\n\nMorning is calmer for swimming; afternoon onshore winds pick up. As on other Sri Lankan beaches, rips can appearswim where locals swim and respect flags if they are flying.',
      },
      {
        id: 'thingsToDo',
        title: 'Surf, Secret Beach and slow days',
        body: 'The right hand point in the bay is the reason many travellers stay. Surf schools operate in season; boards and lessons are easy to find. Secret Beach (a short walk or tuk tuk over the headland) is a second cove for a change of scene. Yoga shalas and smoothie cafes fill the lanes behind the sand.\n\nDay trips from Hiriketiya work well with a chauffeur: Galle Fort (about 1.5 to 2 hours west), whale watching from Mirissa in season, and Yala National Park to the east if you want a safari morning then a beach afternoon. Dikwella’s blowhole (Hummanaya) is a short stop on the coast road.',
      },
      {
        id: 'vsMirissa',
        title: 'Hiriketiya vs Mirissa vs Galle',
        body: 'Choose Mirissa if whale watching is the priority and you want more restaurants on a longer bay. Choose Galle if you want ramparts, museums and boutique streets with the beach as a side trip (Unawatuna or Jungle Beach). Choose Hiriketiya if the holiday climax is swimming, surfing and cafe time in one walkable cove.\n\nMany private tours do not need to pick only one: Galle for a half day, Mirissa for whales, Hiriketiya for two or three beach nights before the drive back to Colombo airport.',
      },
      {
        id: 'practical',
        title: 'Practical tips',
        body: 'ATMs and larger supermarkets are limited in the villagecash and a bigger shop run in Matara or Tangalle help. The coast road is busy; a private driver for day trips is more comfortable than piecing together buses with luggage. Book rooms early for Christmas to February.\n\nHiriketiya is a finish, not a first night after a Heathrow red eye. Land at CMB, rest on the west coast or start inland, then drop to the south coast when you are ready for beach time.',
      },
    ],
    faq: [
      {
        q: 'Where is Hiriketiya in Sri Lanka?',
        a: 'On the south coast between Dikwella and the Mirissa to Weligama area, east of Galle Fort. It is a small horseshoe bay, not a large town.',
      },
      {
        q: 'Is Hiriketiya better than Mirissa?',
        a: 'Different mood. Hiriketiya is more compact and surf cafe oriented. Mirissa has a bigger beach, more dining and the main whale watching harbour. Many itineraries include both.',
      },
      {
        q: 'Can a private tour end in Hiriketiya?',
        a: 'Yes, in the south coast dry season. We typically place Hiriketiya after culture, hills and safari so you are not driving the full island on landing day.',
      },
      {
        q: 'When is the sea calm in Hiriketiya?',
        a: 'Generally November to April. May to September is the southwest monsoon on this coastbetter years to use the east coast or Cultural Triangle instead.',
      },
    ],
    ctaTitle: 'Add Hiriketiya to a private south coast finish',
    ctaBody: 'Tell us your dates and whether you want surf, quiet swimming or a mix with Galle and Yala. We will fit Hiriketiya into a chauffeur itinerary that matches the monsoon.',
    ctaLabel: 'Plan this stay',
    relatedTours: [
      { pageId: 'tour7', label: '7 day Sri Lanka tour' },
      { pageId: 'tour10', label: '10 day Sri Lanka tour' },
      { pageId: 'galleDay', label: 'Galle day tour' },
    ],
    relatedDestinations: [
      { pageId: 'destMirissa', label: 'Mirissa' },
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destYala', label: 'Yala' },
    ],
    relatedGuides: [
      { pageId: 'guideBeaches', label: 'Sri Lanka beaches' },
      { pageId: 'guideBestTime', label: 'Best time to visit' },
      { pageId: 'guidePrivateDriver', label: 'Sri Lanka private driver guide' },
    ],
  },
};

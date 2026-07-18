import type { ArticleContent } from '../articles/types';

export const FAMILY_TOURS_GUIDE: ArticleContent = {
  en: {
    h1: 'Sri Lanka Family Tours: Private Trips with Children',
    lead:
      'Family holidays in Sri Lanka work best with a private vehicle, shorter driving days and a mix of wildlife, gentle culture stops and beach time. We plan around school holiday dates from Europe and the ages of your children not a fixed coach schedule.',
    heroImage: 'assets/img/5daysTours/33.webp',
    heroAlt: 'Family-friendly Sri Lanka private tour with wildlife and beach time',
    sections: [
      {
        id: 'whyPrivate',
        title: 'Why families prefer private tours',
        body: 'Children need snacks, bathroom breaks and flexible timing. A private chauffeur can stop when needed, keep the AC running, and adjust the day’s plan if someone is tired.\n\nCar seats and booster preferences should be discussed before arrival so the vehicle setup matches your family.',
      },
      {
        id: 'pacing',
        title: 'Pacing for different ages',
        body: 'Toddlers do better with fewer hotel changes and more beach or garden downtime. Older children often enjoy Sigiriya (with realistic climb expectations), train segments, and a safari jeep morning.\n\nWe avoid stacking temple, hike and long transfer into a single day unless teens specifically want a packed schedule.',
      },
      {
        id: 'wildlife',
        title: 'Wildlife and safety with kids',
        body: 'Jeep safaris can be memorable for families when timed for cooler hours and realistic wildlife expectations. Guides brief guests on staying seated and quiet near animals.\n\nTemple visits need modest clothing and shoe removal pack socks for hot stone floors and explain etiquette beforehand.',
      },
      {
        id: 'hotels',
        title: 'Hotels and practical logistics',
        body: 'Family rooms, connecting rooms or villa-style stays are easier than hopping boutique singles every night. We suggest bases that reduce packing stress.\n\nWhatsApp communication helps parents share daily energy levels so the driver-guide can adapt.',
      },
      {
        id: 'withSundown',
        title: 'Planning a family tour with Sundown Tours',
        body: 'Share ages, school holiday window and must-sees. We propose a private route with clear driving times, optional safaris and beach nights.\n\nAirport pickup at CMB is included on multi-day family packages so arrival day stays calm.',
      },
    ],
    faq: [
      {
        q: 'What is a good length for a family Sri Lanka tour?',
        a: 'Seven to ten days suits most families combining culture, one wildlife morning and beach time without exhaustion.',
      },
      {
        q: 'Are safaris suitable for young children?',
        a: 'Often yes on shorter morning jeep slots, but discuss ages and nap schedules with us first.',
      },
      {
        q: 'Can you provide child seats?',
        a: 'Request them when booking so we can confirm availability for your vehicle type.',
      },
      {
        q: 'How do you handle food for picky eaters?',
        a: 'Hotels and roadside restaurants usually offer simple rice/noodle/western options; we plan stops with families in mind.',
      },
    ],
    ctaTitle: 'Plan a private family tour',
    ctaBody: 'Tell us children’s ages and travel dates we will design a private chauffeur itinerary with sensible pacing.',
    ctaLabel: 'Contact us',
    relatedTours: [
      { pageId: 'tour7', label: '7-day Sri Lanka tour' },
      { pageId: 'tour10', label: '10-day Sri Lanka tour' },
      { pageId: 'tour5', label: '5-day Sri Lanka tour' },
    ],
    relatedDestinations: [
      { pageId: 'destYala', label: 'Yala' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
    ],
    relatedGuides: [
      { pageId: 'guideSafari', label: 'Safari guide' },
      { pageId: 'guideSafety', label: 'Safety guide' },
      { pageId: 'guideBestTime', label: 'Best time to visit' },
      { pageId: 'guidePrivateDriver', label: 'Private driver guide' },
    ],
  },
  de: {
    h1: 'Sri Lanka Familienreisen: Private Touren mit Kindern',
    lead:
      'Familienreisen funktionieren am besten mit privatem Fahrzeug, kürzeren Fahrttagen und einer Mischung aus Wildlife, sanften Kulturstopps und Strand. Wir planen nach Schulferien und Alter der Kinder.',
    ctaTitle: 'Private Familienreise planen',
    ctaBody: 'Nennen Sie Alter der Kinder und Reisedaten wir erstellen eine Chauffeur-Route mit sinnvollem Tempo.',
    ctaLabel: 'Kontakt',
  },
};

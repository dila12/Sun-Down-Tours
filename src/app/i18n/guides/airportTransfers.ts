import type { ArticleContent } from '../articles/types';

export const AIRPORT_TRANSFERS_GUIDE: ArticleContent = {
  en: {
    h1: 'Sri Lanka Airport Transfers: Private Pickup from Colombo (CMB)',
    lead:
      'Bandaranaike International Airport (CMB) is the main arrival gateway for European flights. A private transfer to Negombo, Colombo, the west coast or your first tour hotel removes arrival stress especially after a long overnight flight with luggage and children.',
    heroImage: 'assets/img/mainpage/3.webp',
    heroAlt: 'Private airport transfer vehicle for Colombo Bandaranaike International Airport',
    sections: [
      {
        id: 'why',
        title: 'Why book a private airport transfer',
        body: 'Meter taxis and informal offers vary in price clarity. A pre-booked private driver meets you with a name board (or WhatsApp location share), helps with bags, and takes you directly to your hotel on an agreed rate.\n\nThis is the standard start to our multi-day private tours and is also available as a standalone transfer.',
      },
      {
        id: 'destinations',
        title: 'Common transfer destinations',
        body: 'Popular first stops are Negombo (short hop, beach night before touring), Colombo city hotels, Waskaduwa/Kalutara on the west coast, or a direct run toward the Cultural Triangle if you prefer to start inland immediately.\n\nLate-night arrivals often benefit from a Negombo sleep before a longer inland drive the next morning.',
      },
      {
        id: 'timing',
        title: 'Flight delays and meeting points',
        body: 'Share your flight number so we can track delays. Meeting procedures inside CMB follow current airport rules your confirmation message explains exactly where to find the driver.\n\nKeep WhatsApp available on arrival Wi-Fi or roaming for last-metre coordination.',
      },
      {
        id: 'vehicles',
        title: 'Vehicles and group size',
        body: 'We match car or van size to passengers and luggage. Soft bags travel easier than rigid oversized cases in smaller cars tell us bag count when booking.\n\nChild seats can be requested in advance subject to availability.',
      },
      {
        id: 'withSundown',
        title: 'Book with Sundown Tours',
        body: 'Message us your flight details, hotel address and passenger count. You receive a clear transfer quote and driver contact before travel.\n\nTransfers can stand alone or open a full private island itinerary.',
      },
    ],
    faq: [
      {
        q: 'How long is the transfer to Negombo?',
        a: 'Typically around 20–40 minutes depending on traffic and exact hotel location.',
      },
      {
        q: 'Can you take us straight to Sigiriya after landing?',
        a: 'Yes if you prefer, though many guests rest on the west coast first after long-haul flights.',
      },
      {
        q: 'Is the price fixed?',
        a: 'Yes quoted in advance for the agreed route and vehicle, with any waiting-time rules stated clearly.',
      },
      {
        q: 'Do you offer departure transfers too?',
        a: 'Yes. We schedule pickup from your last hotel with buffer time for CMB check-in and traffic.',
      },
    ],
    ctaTitle: 'Book a private CMB airport transfer',
    ctaBody: 'Send your flight number and hotel we will confirm a private pickup with clear pricing.',
    ctaLabel: 'Contact us',
    relatedTours: [
      { pageId: 'tour7', label: '7-day Sri Lanka tour' },
      { pageId: 'tour5', label: '5-day Sri Lanka tour' },
    ],
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guidePrivateDriver', label: 'Private driver guide' },
      { pageId: 'guideVisa', label: 'Visa & ETA guide' },
      { pageId: 'guideBestTime', label: 'Best time to visit' },
    ],
  },
  de: {
    h1: 'Sri Lanka Flughafentransfer: Privat ab Colombo (CMB)',
    lead:
      'Der Bandaranaike International Airport (CMB) ist das Hauptankunftstor. Ein privater Transfer nach Negombo, Colombo oder zum ersten Hotel nimmt Ankunftsstress besonders nach Nachtflügen.',
    ctaTitle: 'Privaten CMB-Transfer buchen',
    ctaBody: 'Senden Sie Flugnummer und Hotel wir bestätigen den Pickup mit klarem Preis.',
    ctaLabel: 'Kontakt',
  },
};

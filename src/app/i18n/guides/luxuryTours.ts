import type { ArticleContent } from '../articles/types';

export const LUXURY_TOURS_GUIDE: ArticleContent = {
  en: {
    h1: 'Sri Lanka Luxury Tours: Private Chauffeur and Boutique Stays',
    lead:
      'Luxury in Sri Lanka is less about ticking every sight and more about timing, privacy and stays that match your style. A dedicated chauffeur-guide, carefully chosen boutique hotels and honest driving days create a premium private holiday without group-tour compromise.',
    heroImage: 'assets/img/package-2.webp',
    heroAlt: 'Luxury private chauffeur touring in Sri Lanka',
    sections: [
      {
        id: 'define',
        title: 'What “luxury private tour” means here',
        body: 'We focus on private vehicles in good condition, experienced chauffeur-guides, flexible daily pacing and hotels you would choose yourself not a coach seat and a fixed buffet lunch stop.\n\nEntrance tickets, spa reservations and specialty experiences can be arranged transparently in your quote.',
      },
      {
        id: 'stays',
        title: 'Boutique hotels and fewer moves',
        body: 'Premium trips often use fewer hotel changes with longer stays in tea country or on the south coast. That reduces packing fatigue and leaves time for spa, pool and unhurried dinners.\n\nTell us whether you prefer heritage villas, modern design hotels or classic colonial properties availability varies by season.',
      },
      {
        id: 'experiences',
        title: 'Signature experiences without crowding the day',
        body: 'Sunrise at Sigiriya, a reserved train segment, a private cooking lesson, or a carefully timed safari can all fit a luxury route when we protect rest hours.\n\nWe will not overload a day just to fill an itinerary PDF.',
      },
      {
        id: 'service',
        title: 'Service style with Sundown Tours',
        body: 'You speak with the same local planning team on WhatsApp. Changes on the road later starts, extra beach night, skip a stop are normal on private luxury trips.\n\nWe do not invent awards or star ratings we have not earned; hotel categories in quotes reflect real booking classes.',
      },
      {
        id: 'withSundown',
        title: 'Request a luxury private itinerary',
        body: 'Share travel month, party size, preferred regions and hotel budget band. We reply with a route, sample stays and a clear inclusions list.\n\nEight to twelve days is typical for a full luxury circuit ending on the coast.',
      },
    ],
    faq: [
      {
        q: 'Do luxury tours include five-star hotels by default?',
        a: 'Only if you request them. Quotes list hotel options by category so you control the standard and price.',
      },
      {
        q: 'Can you arrange private dinners or spa bookings?',
        a: 'Yes, where partners allow we include known fees in the quote rather than surprising add-ons on arrival.',
      },
      {
        q: 'Is a private guide separate from the driver?',
        a: 'Many days use a chauffeur-guide. Specialist site guides can be added at major monuments when useful.',
      },
      {
        q: 'What vehicle types do you use?',
        a: 'Air-conditioned cars or vans sized to your group. Exact fleet allocation is confirmed for your dates we do not publish misleading model guarantees months ahead.',
      },
    ],
    ctaTitle: 'Design a luxury private Sri Lanka tour',
    ctaBody: 'Tell us your dates and preferred hotel style we will propose a private chauffeur itinerary with transparent options.',
    ctaLabel: 'Contact us',
    relatedTours: [
      { pageId: 'tour10', label: '10-day Sri Lanka tour' },
      { pageId: 'tour8', label: '8-day private tour' },
      { pageId: 'tour7', label: '7-day Sri Lanka tour' },
    ],
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destKandy', label: 'Kandy' },
    ],
    relatedGuides: [
      { pageId: 'guidePrivateDriver', label: 'Private driver guide' },
      { pageId: 'guideBestTime', label: 'Best time to visit' },
      { pageId: 'guideTeaCountry', label: 'Tea country guide' },
    ],
  },
  de: {
    h1: 'Sri Lanka Luxusreisen: Privater Chauffeur und Boutique-Hotels',
    lead:
      'Luxus bedeutet Timing, Privatsphäre und passende Unterkünfte nicht jeden Punkt abzuhaken. Privater Chauffeur-Guide und ehrliche Fahrttage schaffen eine Premium-Reise ohne Gruppentour-Kompromisse.',
    ctaTitle: 'Luxuriöse Privattour gestalten',
    ctaBody: 'Nennen Sie Daten und Hotelstil wir schlagen eine Chauffeur-Route mit transparenten Optionen vor.',
    ctaLabel: 'Kontakt',
  },
};

import type { ArticleContent } from '../articles/types';

export const TRAIN_JOURNEYS_GUIDE: ArticleContent = {
  en: {
    h1: 'Sri Lanka Train Journeys: Kandy to Ella and Tea Country by Rail',
    lead:
      'The hill-country train between Kandy, Nanu Oya (for Nuwara Eliya) and Ella is one of Sri Lanka’s signature experiences tea slopes, viaducts and village stations. A private chauffeur tour pairs best with selected scenic segments rather than trying to move all luggage by rail every day.',
    heroImage: 'assets/img/mainpage/6.webp',
    heroAlt: 'Hill country tea landscapes near the scenic Sri Lanka train route',
    sections: [
      {
        id: 'whyTrain',
        title: 'Why the hill-country train is worth planning',
        body: 'Few roads match the elevated views of the Kandy–Ella line on a clear morning. Travellers from Europe often rank this segment among their favourite Sri Lanka memories especially when seats are reserved and you are not fighting for standing room.\n\nIt is still a working public railway: delays happen, carriages can be busy, and luggage space is limited. Treat the train as a highlight activity, not as your only logistics plan.',
      },
      {
        id: 'bestSegment',
        title: 'Best segments for visitors',
        body: 'Popular choices are Kandy to Ella (full scenic day) or Nanu Oya to Ella (shorter, still dramatic). Early trains usually offer cooler air and better light for photography.\n\nYour chauffeur can drop you at the departure station with tickets arranged in advance, then drive ahead with larger bags and meet you at Ella the most comfortable pattern for multi-day private tours.',
      },
      {
        id: 'tickets',
        title: 'Tickets, classes and booking tips',
        body: 'Reserved seats in observation or first/second class sell out on peak dates. Book as soon as your tour dates are firm, and keep confirmation details offline for station staff.\n\nAvoid last-minute platform purchases for the most scenic trains if you are travelling with children or limited mobility standing for hours on busy carriages is tiring in the heat.',
      },
      {
        id: 'withDriver',
        title: 'Combining train rides with a private driver',
        body: 'A private driver remains useful on train days: station transfers, hotel check-in, and flexible sightseeing before or after the ride. Many guests train one way and road-transfer the other to save time.\n\nWe plan driving times around train schedules so you are not racing across the island the same evening as a long rail segment.',
      },
      {
        id: 'withSundown',
        title: 'How Sundown Tours arranges train days',
        body: 'Tell us whether you want the full Kandy–Ella experience or a shorter Nanu Oya–Ella hop. We build it into 7–10 day private itineraries with realistic hotel nights in Kandy, Nuwara Eliya or Ella.\n\nWhatsApp us your preferred month peak European winter holidays need earlier seat reservations.',
      },
    ],
    faq: [
      {
        q: 'Should I take the train with all my luggage?',
        a: 'Usually no for multi-day tours. Send larger bags with your driver and travel light on the scenic segment.',
      },
      {
        q: 'Is the Kandy–Ella train suitable for families?',
        a: 'Yes if seats are reserved and the day is not overloaded with other long transfers. We adjust pacing for children’s ages.',
      },
      {
        q: 'What if the train is delayed?',
        a: 'Delays are possible. Your chauffeur itinerary keeps buffer time and alternative road options when needed.',
      },
      {
        q: 'Can you book train tickets for us?',
        a: 'Yes tickets can be arranged as part of your private tour quote once dates are confirmed.',
      },
    ],
    ctaTitle: 'Add a scenic train day to your private tour',
    ctaBody: 'Share your dates and whether you prefer Kandy–Ella or a shorter segment we will fit reserved seats into a private chauffeur plan.',
    ctaLabel: 'Contact us',
    relatedTours: [
      { pageId: 'tour7', label: '7-day Sri Lanka tour' },
      { pageId: 'tour2ek', label: '2-day Ella & Kandy' },
      { pageId: 'ellaDay', label: 'Ella day tour' },
    ],
    relatedDestinations: [
      { pageId: 'destElla', label: 'Ella' },
      { pageId: 'destKandy', label: 'Kandy' },
      { pageId: 'destDambulla', label: 'Dambulla' },
    ],
    relatedGuides: [
      { pageId: 'guideTeaCountry', label: 'Tea country guide' },
      { pageId: 'guideBestTime', label: 'Best time to visit' },
      { pageId: 'guidePrivateDriver', label: 'Private driver guide' },
    ],
  },
  de: {
    h1: 'Zugreisen in Sri Lanka: Kandy nach Ella und Teehochland',
    lead:
      'Die Hochlandstrecke zwischen Kandy, Nanu Oya und Ella ist eines der bekanntesten Erlebnisse Sri Lankas. Am besten kombiniert man ausgewählte Zugsegmente mit einem privaten Chauffeur statt den gesamten Gepäcktransfer über die Bahn zu lösen.',
    faq: [
      {
        q: 'Soll ich mit dem ganzen Gepäck Zug fahren?',
        a: 'Bei Mehrtagesreisen meist nein große Taschen fährt der Chauffeur voraus.',
      },
      {
        q: 'Ist die Strecke familientauglich?',
        a: 'Ja mit reservierten Plätzen und realistischer Tagesplanung.',
      },
      {
        q: 'Was bei Verspätungen?',
        a: 'Pufferzeiten und ggf. Straßenalternativen sind Teil der Planung.',
      },
      {
        q: 'Können Sie Tickets buchen?',
        a: 'Ja, nach Datumsbestätigung im Tourangebot.',
      },
    ],
    ctaTitle: 'Zugtag in Ihre Privattour einplanen',
    ctaBody: 'Nennen Sie Daten und Wunschsegment wir integrieren reservierte Plätze in die Chauffeur-Route.',
    ctaLabel: 'Kontakt',
  },
};

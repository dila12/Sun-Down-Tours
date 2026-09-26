import type { ArticleContent } from '../articles/types';

/**
 * Netherlands market landing page (pageId: marketNetherlands).
 * Dutch phrases use spaces (sri lanka vakantie), never sri-lanka in visible copy.
 */
export const NETHERLANDS_FROM_NL_GUIDE: ArticleContent = {
  en: {
    h1: 'Sri Lanka Holidays from the Netherlands: Private Rondreis and Chauffeur',
    lead:
      'Dutch searches for sri lanka vakantie and sri lanka rondreis usually want a private island circuit after Colombo, not airline tickets from Schiphol. This page covers flight duration only, CMB airport, ETA, best time, Sigiriya, safari and a licensed chauffeur.',
    heroImage: 'assets/img/package-2.webp',
    heroAlt: 'Private Sri Lanka rondreis with chauffeur guide for travellers from the Netherlands',
    sections: [
      {
        id: 'who',
        title: 'Sri Lanka holidays from the Netherlands: local operator, not a brochure brand',
        body: 'Sundown Tours is based on the island since 1992. We do not sell flights from Schiphol and we are not TUI or D-reizen. We organise private tours: chauffeur from CMB, Cultural Triangle, safari and beach.\n\nWhere is Sri Lanka: an island country in the Indian Ocean, south of India. English name: Sri Lanka. You land at Colombo (CMB).',
      },
      {
        id: 'flight',
        title: 'Flight time from the Netherlands, duration only',
        body: 'Typical air time from Amsterdam is about 10 to 13 hours plus a connection. We do not sell tickets.\n\nOnce you have landing time at Colombo (CMB), we quote the ground package and first hotel night.',
      },
      {
        id: 'airport',
        title: 'Sri Lanka airport versus Colombo',
        body: 'Bandaranaike International Airport is at Katunayake, not downtown. Negombo is 20 to 40 minutes from the terminal. Colombo city is typically 45 to 90 minutes. Do not drive to Sigiriya the same night after a long haul landing unless you insist.',
      },
      {
        id: 'entry',
        title: 'ETA and Dutch passports',
        body: 'Dutch nationals need an Electronic Travel Authorisation (ETA) before boarding. From 25 May 2026 the tourist ETA is often free for 30 days with double entry for listed countries including the Netherlands. You still apply in advance at eta.gov.lk only.\n\nAn arrival card does not replace ETA.',
      },
      {
        id: 'when',
        title: 'Best time and weather',
        body: 'Two monsoons. December to April is usually stronger for west and south beaches. May to September often favours the east coast plus Cultural Triangle and dry season safari.\n\nSri Lanka time is UTC+5:30.',
      },
      {
        id: 'whatToDo',
        title: 'What to see: Sigiriya, Kandy, Ella, safari, beach',
        body: 'A first visit typically includes Sigiriya, Kandy, the tea country train to Ella, a jeep safari at Yala, and a beach finish at Negombo, Hikkaduwa, Unawatuna, Mirissa or Galle. Seven days covers the highlights.',
      },
    ],
    faq: [
      {
        q: 'How long is the flight from Amsterdam to Sri Lanka?',
        a: 'Typically about 10 to 13 hours in the air plus a connection. We do not sell tickets; we plan your first night around the real arrival at CMB.',
      },
      {
        q: 'Do I need a Sri Lanka visa from the Netherlands?',
        a: 'Yes. Apply for ETA at eta.gov.lk before you fly. Free does not mean skip the form.',
      },
      {
        q: 'Is this self drive or a chauffeur tour?',
        a: 'A licensed driver guide with the vehicle, not a self drive hire desk.',
      },
    ],
    ctaTitle: 'Plan a private Sri Lanka rondreis from the Netherlands',
    ctaBody: 'Send Schiphol (or other) flight dates and what you want to see. We reply as a local tour operator with a chauffeur itinerary.',
    ctaLabel: 'Contact Sundown Tours',
    relatedTours: [
      { pageId: 'tour7', label: '7 day private tour' },
      { pageId: 'tour10', label: '10 day tour' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destYala', label: 'Yala' },
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destColombo', label: 'Colombo' },
      { pageId: 'destNegombo', label: 'Negombo' },
    ],
    relatedGuides: [
      { pageId: 'guideVisa', label: 'ETA / visa' },
      { pageId: 'guidePrivateDriver', label: 'Private chauffeur' },
      { pageId: 'guideBestTime', label: 'Best time' },
      { pageId: 'guideAirportTransfers', label: 'Airport transfer' },
    ],
  },
  nl: {
    h1: 'Sri Lanka vakantie vanuit Nederland: prive rondreis en chauffeur',
    lead:
      'Sri lanka vakantie, sri lanka rondreis en sri lanka reisepakket betekenen bij ons een prive circuit na Colombo. Geen vliegtickets vanaf Schiphol en geen TUI brochure. Schrijf sri lanka met spaties, niet met een koppelteken. Deze pagina: visum, beste tijd, luchthaven Colombo, Sigiriya, safari en chauffeur.',
    heroAlt: 'Prive Sri Lanka rondreis met chauffeur gids voor reizigers uit Nederland',
    sections: [
      {
        title: 'Sri Lanka vakantie vanuit Nederland: lokale operator, geen merkenfolder',
        body: 'Sundown Tours zit op het eiland sinds 1992. Wij verkopen geen sri lanka vliegtickets en zijn geen TUI of D reizen. Sri lanka rondreis en prive chauffeur sri lanka: ophalen in CMB, Culturele Driehoek, safari en strand.\n\nSri lanka waar: eilandstaat in de Indische Oceaan, ten zuiden van India. Sri lanka in het Engels: Sri Lanka. U landt in colombo sri lanka.',
      },
      {
        title: 'Vliegtijd vanuit Nederland: alleen duur',
        body: 'Amsterdam sri lanka en hoe lang vliegen: meestal 10 tot 13 uur in de lucht plus een overstap. Tickets verkopen wij niet.\n\nZodra de landingstijd in colombo sri lanka (CMB) bekend is, rekenen wij het grondpakket en de eerste hotel nacht.',
      },
      {
        title: 'Luchthaven sri lanka versus Colombo',
        body: 'Luchthaven colombo / sri lanka luchthaven is Bandaranaike in Katunayake, niet het stadscentrum. Negombo 20 tot 40 minuten van de terminal. Colombo stad meestal 45 tot 90 minuten. Rij niet dezelfde nacht naar Sigiriya na een lange vlucht, tenzij u dat zelf wilt.',
      },
      {
        title: 'Visum sri lanka en Nederlands paspoort',
        body: 'Visum sri lanka: ETA voor het boarden, alleen op eta.gov.lk. Vanaf 25 mei 2026 is de toeristische ETA voor Nederland vaak 30 dagen gratis met dubbele binnenkomst. U vraagt die nog steeds vooraf aan.\n\nEen arrival card vervangt de ETA niet.',
      },
      {
        title: 'Beste tijd sri lanka en weer',
        body: 'Beste tijd sri lanka en sri lanka weer: twee moessons. December tot april meestal west en zuid. Mei tot september vaak oostkust, Culturele Driehoek en droge safariseizoen.\n\nSri lanka tijd: UTC+5:30.',
      },
      {
        title: 'Wat te zien: Sigiriya, Kandy, Ella, safari, strand',
        body: 'Sri lanka wat te zien: Sigiriya, Kandy, trein naar Ella, safari Yala, daarna strand in Negombo, Hikkaduwa, Unawatuna, Mirissa of Galle. Zeven dagen dekt de hoogtepunten.',
      },
    ],
    faq: [
      {
        q: 'Hoe lang vliegen van Amsterdam naar sri lanka?',
        a: 'Meestal 10 tot 13 uur in de lucht plus overstap. Tickets verkopen wij niet; de eerste nacht volgt op de echte landing in CMB.',
      },
      {
        q: 'Heb ik een visum sri lanka nodig vanuit Nederland?',
        a: 'Ja. ETA op eta.gov.lk voor de vlucht. Gratis betekent niet zonder aanvraag.',
      },
      {
        q: 'Is dit self drive of een chauffeur?',
        a: 'Licensed chauffeur gids met auto, geen self drive balie.',
      },
      {
        q: 'Wat is de beste tijd voor een sri lanka vakantie?',
        a: 'Hangt van de kust af. West en zuid meestal december tot april; oost mei tot september. Cultuur en heuvels kunnen jaarrond.',
      },
    ],
    ctaTitle: 'Plan een prive sri lanka rondreis vanuit Nederland',
    ctaBody: 'Stuur vluchtdata vanaf Schiphol (of een andere luchthaven) en wat u wilt zien. Wij antwoorden als lokale touroperator met chauffeur.',
    ctaLabel: 'Contact Sundown Tours',
    relatedTours: [
      { pageId: 'tour7', label: 'Rondreis 7 dagen' },
      { pageId: 'tour10', label: 'Rondreis 10 dagen' },
    ],
    relatedDestinations: [
      { pageId: 'destSigiriya', label: 'Sigiriya' },
      { pageId: 'destYala', label: 'Yala' },
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destColombo', label: 'Colombo' },
      { pageId: 'destNegombo', label: 'Negombo' },
    ],
    relatedGuides: [
      { pageId: 'guideVisa', label: 'Visum / ETA' },
      { pageId: 'guidePrivateDriver', label: 'Prive chauffeur' },
      { pageId: 'guideBestTime', label: 'Beste tijd' },
      { pageId: 'guideAirportTransfers', label: 'Luchthaven transfer' },
    ],
  },
};

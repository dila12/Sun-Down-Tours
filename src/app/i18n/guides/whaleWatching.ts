import type { ArticleContent } from '../articles/types';

/**
 * Whale watching guide (pageId: guideWhaleWatching).
 * Factual seasonal guidance no guaranteed sightings claims.
 */
export const WHALE_WATCHING_GUIDE: ArticleContent = {
  en: {
    h1: 'Whale Watching in Sri Lanka: Mirissa, Trincomalee and Private Tour Timing',
    lead:
      'Sri Lanka is one of the few places where blue whales and sperm whales can be seen relatively close to shore in season. Most European travellers combine a morning boat trip from Mirissa (south coast) or Trincomalee (east coast) with a private chauffeur itinerary so hotels, transfers and rest days stay flexible.',
    heroImage: 'assets/img/mainpage/5.webp',
    heroAlt: 'South coast of Sri Lanka near Mirissa for seasonal whale watching',
    sections: [
      {
        id: 'where',
        title: 'Where whale watching runs in Sri Lanka',
        body: 'The main departure points are Mirissa and nearby south-coast harbours for the south-west monsoon window, and Trincomalee on the east coast when the season shifts. Operators typically leave early morning when seas are calmer and return before midday heat builds.\n\nA private driver makes the logistics practical: overnight near the harbour, early pickup if you stay inland, and a quiet afternoon afterwards in Galle, Ella or your beach hotel rather than rushing a fixed group coach schedule.',
      },
      {
        id: 'season',
        title: 'Best season and realistic expectations',
        body: 'South-coast whale watching is generally strongest from roughly December through April, while the east coast is more often considered from around May through September always confirm the current season with your operator because sea conditions change year to year.\n\nSightings are never guaranteed. Choose licensed boats, ask about safety briefings, and avoid operators that promise “100% sightings”. Responsible trips keep distance from animals and do not chase pods.',
      },
      {
        id: 'combine',
        title: 'How to combine whale watching with a private tour',
        body: 'A common pattern for a week-long private tour is Cultural Triangle → Kandy/Ella → south coast (Galle + Mirissa whale morning) → beach nights. Families often place the boat trip mid-holiday when children have adjusted to the climate.\n\nIf you prefer fewer early starts, we can schedule whale watching near the end of the trip after inland driving is done, then keep the final days for beach recovery.',
      },
      {
        id: 'practical',
        title: 'Practical tips for the boat morning',
        body: 'Wear non-slip shoes, bring sun protection, motion-sickness tablets if you need them, and a dry bag for phones. Breakfast is often light before boarding; many hotels pack a simple takeaway on request.\n\nConfirm meeting point, boat size and cancellation rules for rough seas the day before. Your chauffeur can wait at the harbour or return you to the hotel after landing.',
      },
      {
        id: 'withSundown',
        title: 'Planning whale watching with Sundown Tours',
        body: 'We arrange private south- or east-coast itineraries around your dates, hotel style and pace. Whale boat tickets can be booked with transparent pricing in your quote, or left flexible if you want to decide after seeing the weather forecast on arrival.\n\nMessage us on WhatsApp with your travel month and group size we will propose a route that keeps driving days realistic around an early boat morning.',
      },
    ],
    faq: [
      {
        q: 'Is whale watching guaranteed in Sri Lanka?',
        a: 'No. Conditions and animal movements vary. Reputable operators never guarantee sightings; choose licensed boats and keep expectations realistic.',
      },
      {
        q: 'Mirissa or Trincomalee which should I choose?',
        a: 'It depends on your travel month and the rest of your itinerary. South-coast Mirissa suits winter–spring European holidays ending on the south-west coast; Trincomalee suits east-coast seasons. We advise based on your dates.',
      },
      {
        q: 'Can whale watching be added to a 7-day private tour?',
        a: 'Yes. Many 7–10 day private routes include a Mirissa morning when the season fits, usually paired with Galle Fort and a beach finish.',
      },
      {
        q: 'Is it suitable for children?',
        a: 'Often yes on calm mornings, but seas can be choppy. Tell us ages and any motion-sickness concerns so we can choose timing and boat type carefully.',
      },
    ],
    ctaTitle: 'Add whale watching to your private Sri Lanka tour',
    ctaBody:
      'Share your month of travel and preferred coast we will design a private chauffeur itinerary with realistic timing around a licensed boat trip.',
    ctaLabel: 'Contact us',
    relatedTours: [
      { pageId: 'tour7', label: '7-day Sri Lanka tour' },
      { pageId: 'tour5', label: '5-day Sri Lanka tour' },
      { pageId: 'galleDay', label: 'Galle day tour' },
    ],
    relatedDestinations: [
      { pageId: 'destGalle', label: 'Galle' },
      { pageId: 'destYala', label: 'Yala' },
      { pageId: 'destElla', label: 'Ella' },
    ],
    relatedGuides: [
      { pageId: 'guideBeaches', label: 'Beaches guide' },
      { pageId: 'guideBestTime', label: 'Best time to visit' },
      { pageId: 'guidePrivateDriver', label: 'Private driver guide' },
    ],
  },
  de: {
    h1: 'Walbeobachtung in Sri Lanka: Mirissa, Trincomalee und private Touren',
    lead:
      'Sri Lanka gehört zu den Orten, an denen Blauwale und Pottwale saisonal relativ nah an der Küste zu sehen sind. Die meisten europäischen Reisenden kombinieren eine morgendliche Bootstour ab Mirissa oder Trincomalee mit einer privaten Chauffeur-Route.',
    sections: [
      {
        title: 'Wo Walbeobachtung in Sri Lanka stattfindet',
        body: 'Die wichtigsten Abfahrten sind Mirissa an der Südküste und Trincomalee an der Ostküste – je nach Saison. Frühe Morgenstunden sind üblich, wenn die See ruhiger ist.\n\nEin privater Fahrer erleichtert die Logistik: Übernachtung nahe dem Hafen, früher Transfer und ein ruhiger Nachmittag in Galle, Ella oder im Strandhotel.',
      },
      {
        title: 'Beste Saison und realistische Erwartungen',
        body: 'An der Südküste ist die Saison oft etwa von Dezember bis April stark; an der Ostküste eher von Mai bis September – immer aktuell prüfen. Sichtungen sind nie garantiert. Wählen Sie lizenzierte Boote und meiden Sie „100 %-Garantien“.',
      },
      {
        title: 'Kombination mit einer Privattour',
        body: 'Ein häufiges Muster: Kulturdreieck → Kandy/Ella → Südküste (Galle + Mirissa) → Strandtage. Familien legen die Bootstour oft in die Mitte der Reise.',
      },
      {
        title: 'Praktische Tipps für den Bootstag',
        body: 'Rutschfeste Schuhe, Sonnenschutz, ggf. Mittel gegen Seekrankheit und eine Trockentasche mitnehmen. Treffpunkt, Bootsgröße und Regeln bei rauem Wetter am Vortag bestätigen.',
      },
      {
        title: 'Planung mit Sundown Tours',
        body: 'Wir planen private Südor Ostküsten-Routen um Ihre Daten und Ihr Tempo. Bootstickets können transparent im Angebot stehen oder flexibel bleiben, bis das Wetter klar ist.',
      },
    ],
    faq: [
      {
        q: 'Ist Walbeobachtung in Sri Lanka garantiert?',
        a: 'Nein. Seriöse Anbieter garantieren keine Sichtungen.',
      },
      {
        q: 'Mirissa oder Trincomalee?',
        a: 'Abhängig von Reimonat und Restroute. Wir beraten anhand Ihrer Daten.',
      },
      {
        q: 'Passt Walbeobachtung in eine 7-Tage-Tour?',
        a: 'Ja, oft mit Galle und einem Strandabschluss, wenn die Saison passt.',
      },
      {
        q: 'Geeignet für Kinder?',
        a: 'Oft ja bei ruhiger See – teilen Sie uns Alter und Empfindlichkeiten mit.',
      },
    ],
    ctaTitle: 'Walbeobachtung in Ihre Privattour einplanen',
    ctaBody: 'Nennen Sie Reimonat und Gruppengröße – wir schlagen eine realistische Chauffeur-Route vor.',
    ctaLabel: 'Kontakt',
  },
};

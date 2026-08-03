/**
 * SINGLE SOURCE OF TRUTH for locales, page slugs and URL construction.
 *
 * Plain ESM so it can be consumed both by the Angular app (typed via
 * `site-data.d.mts`) and by the Node build scripts (sitemap generation)
 * without any duplication or code generation.
 */

export const BASE_URL = 'https://www.sundowntours.com';

/**
 * All UI + routing locales (including Dutch). The language switcher shows every
 * entry here so travellers can still open `/nl/...` pages.
 */
export const LOCALES = ['en', 'de', 'fr', 'it', 'es', 'pl', 'ru', 'nl'];

/**
 * Locales emitted in sitemaps and hreflang. Dutch stays out until professionally
 * translated (pages remain reachable but noindex — see SeoService).
 */
export const INDEXABLE_LOCALES = LOCALES.filter((l) => l !== 'nl');

export const DEFAULT_LOCALE = 'en';

export const NON_DEFAULT_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

/**
 * Former / unsupported locale URL prefixes. Not in {@link LOCALES}; any
 * `/{code}` or `/{code}/...` request should 301 to the English equivalent
 * so Google stops indexing ghost locale URLs (e.g. `/cs/privacy-policy`).
 */
export const DORMANT_LOCALE_PREFIXES = [
  'cs',
  'pt',
  'ja',
  'zh',
  'ar',
  'tr',
  'sv',
  'da',
  'fi',
  'hu',
  'ro',
  'sk',
  'uk',
  'ko',
  'th',
  'vi',
  'id',
  'hi',
];

/** hreflang codes emitted in alternate links (identity map for now). */
export const HREFLANG = {
  en: 'en',
  de: 'de',
  fr: 'fr',
  it: 'it',
  es: 'es',
  pl: 'pl',
  ru: 'ru',
  nl: 'nl',
};

/** Helper: same slug across every locale (only the language prefix differs). */
function same(slug) {
  return LOCALES.reduce((acc, l) => ((acc[l] = slug), acc), /** @type {Record<string,string>} */ ({}));
}

/**
 * Every routable page. `id` is the stable page identifier used by routing,
 * SEO, structured data, the language switcher and the sitemap.
 *
 * `slugs` holds the localized URL segment per locale. Guides use nested
 * hub/article paths with native (Latin / transliterated) keywords.
 */
export const PAGES = [
  { id: 'home', kind: 'home', index: true, priority: 1.0, changefreq: 'weekly', slugs: same('') },

  {
    id: 'tours',
    kind: 'toursHub',
    index: true,
    priority: 0.98,
    changefreq: 'weekly',
    slugs: {
      en: 'sri-lanka-private-tour',
      de: 'sri-lanka-rundreise',
      fr: 'circuit-sri-lanka',
      it: 'tour-sri-lanka',
      es: 'circuito-sri-lanka',
      pl: 'wycieczka-sri-lanka',
      ru: 'tury-shri-lanka',
      nl: 'sri-lanka-prive-rondreis',
    },
  },

  {
    id: 'services',
    kind: 'services',
    index: true,
    priority: 0.8,
    changefreq: 'monthly',
    slugs: {
      en: 'our-services',
      de: 'unsere-leistungen',
      fr: 'nos-services',
      it: 'i-nostri-servizi',
      es: 'nuestros-servicios',
      pl: 'nasze-uslugi',
      ru: 'uslugi',
      nl: 'onze-diensten',
    },
  },

  {
    id: 'about',
    kind: 'about',
    index: true,
    priority: 0.8,
    changefreq: 'monthly',
    slugs: {
      en: 'about-us',
      de: 'ueber-uns',
      fr: 'a-propos',
      it: 'chi-siamo',
      es: 'sobre-nosotros',
      pl: 'o-nas',
      ru: 'o-nas',
      nl: 'over-ons',
    },
  },

  {
    id: 'contact',
    kind: 'contact',
    index: true,
    priority: 0.7,
    changefreq: 'yearly',
    slugs: {
      en: 'contact-us',
      de: 'kontakt',
      fr: 'contact',
      it: 'contatti',
      es: 'contacto',
      pl: 'kontakt',
      ru: 'kontakt',
      nl: 'contact',
    },
  },

  // Round tours — localized slugs per market.
  {
    id: 'tour7',
    kind: 'tour',
    days: 7,
    index: true,
    priority: 0.98,
    changefreq: 'monthly',
    slugs: {
      en: '7-day-sri-lanka-tour',
      de: '7-tage-sri-lanka-rundreise',
      fr: 'circuit-sri-lanka-7-jours',
      it: 'tour-sri-lanka-7-giorni',
      es: 'circuito-sri-lanka-7-dias',
      pl: '7-dniowa-wycieczka-sri-lanka',
      ru: '7-dnevnyy-tur-shri-lanka',
      nl: '7-daagse-sri-lanka-rondreis',
    },
  },
  {
    id: 'tour10',
    kind: 'tour',
    days: 10,
    index: true,
    priority: 0.96,
    changefreq: 'monthly',
    slugs: {
      en: '10-day-sri-lanka-tour',
      de: '10-tage-sri-lanka-rundreise',
      fr: 'circuit-sri-lanka-10-jours',
      it: 'tour-sri-lanka-10-giorni',
      es: 'circuito-sri-lanka-10-dias',
      pl: '10-dniowa-wycieczka-sri-lanka',
      ru: '10-dnevnyy-tur-shri-lanka',
      nl: '10-daagse-sri-lanka-rondreis',
    },
  },
  {
    id: 'tour8',
    kind: 'tour',
    days: 8,
    index: true,
    priority: 0.96,
    changefreq: 'monthly',
    slugs: {
      en: '8-day-sri-lanka-private-tour',
      de: '8-tage-private-sri-lanka-rundreise',
      fr: 'circuit-prive-sri-lanka-8-jours',
      it: 'tour-privato-sri-lanka-8-giorni',
      es: 'circuito-privado-sri-lanka-8-dias',
      pl: '8-dniowa-prywatna-wycieczka-sri-lanka',
      ru: '8-dnevnyy-individualnyy-tur-shri-lanka',
      nl: '8-daagse-prive-sri-lanka-rondreis',
    },
  },
  {
    id: 'tour6',
    kind: 'tour',
    days: 6,
    index: true,
    priority: 0.97,
    changefreq: 'monthly',
    slugs: {
      en: '6-day-sri-lanka-private-tour',
      de: '6-tage-private-sri-lanka-rundreise',
      fr: 'circuit-prive-sri-lanka-6-jours',
      it: 'tour-privato-sri-lanka-6-giorni',
      es: 'circuito-privado-sri-lanka-6-dias',
      pl: '6-dniowa-prywatna-wycieczka-sri-lanka',
      ru: '6-dnevnyy-individualnyy-tur-shri-lanka',
      nl: '6-daagse-prive-sri-lanka-rondreis',
    },
  },
  {
    id: 'tour5',
    kind: 'tour',
    days: 5,
    index: true,
    priority: 0.97,
    changefreq: 'monthly',
    slugs: {
      en: '5-day-sri-lanka-tour',
      de: '5-tage-sri-lanka-rundreise',
      fr: 'circuit-sri-lanka-5-jours',
      it: 'tour-sri-lanka-5-giorni',
      es: 'circuito-sri-lanka-5-dias',
      pl: '5-dniowa-wycieczka-sri-lanka',
      ru: '5-dnevnyy-tur-shri-lanka',
      nl: '5-daagse-sri-lanka-rondreis',
    },
  },
  {
    id: 'tour4',
    kind: 'tour',
    days: 4,
    index: true,
    priority: 0.98,
    changefreq: 'monthly',
    slugs: {
      en: '4-day-sri-lanka-tour',
      de: '4-tage-sri-lanka-rundreise',
      fr: 'circuit-sri-lanka-4-jours',
      it: 'tour-sri-lanka-4-giorni',
      es: 'circuito-sri-lanka-4-dias',
      pl: '4-dniowa-wycieczka-sri-lanka',
      ru: '4-dnevnyy-tur-shri-lanka',
      nl: '4-daagse-sri-lanka-rondreis',
    },
  },
  {
    id: 'tour2ek',
    kind: 'tour',
    days: 2,
    index: true,
    priority: 0.98,
    changefreq: 'monthly',
    slugs: {
      en: '2-day-ella-kandy-private-tour-sri-lanka',
      de: '2-tage-ella-kandy-private-rundreise',
      fr: 'circuit-prive-ella-kandy-2-jours',
      it: 'tour-privato-ella-kandy-2-giorni',
      es: 'circuito-privado-ella-kandy-2-dias',
      pl: '2-dniowa-prywatna-wycieczka-ella-kandy',
      ru: '2-dnevnyy-tur-ella-kandi',
      nl: '2-daagse-prive-rondreis-ella-kandy',
    },
  },
  {
    id: 'tour2ey',
    kind: 'tour',
    days: 2,
    index: true,
    priority: 0.98,
    changefreq: 'monthly',
    slugs: {
      en: '2-day-ella-yala-private-tour-sri-lanka',
      de: '2-tage-ella-yala-private-rundreise',
      fr: 'circuit-prive-ella-yala-2-jours',
      it: 'tour-privato-ella-yala-2-giorni',
      es: 'circuito-privado-ella-yala-2-dias',
      pl: '2-dniowa-prywatna-wycieczka-ella-yala',
      ru: '2-dnevnyy-tur-ella-yala',
      nl: '2-daagse-prive-rondreis-ella-yala',
    },
  },

  // Day tours.
  {
    id: 'ellaDay',
    kind: 'tour',
    days: 1,
    index: true,
    priority: 0.96,
    changefreq: 'weekly',
    slugs: {
      en: 'ella-day-tour',
      de: 'ella-tagesausflug',
      fr: 'excursion-ella-journee',
      it: 'escursione-giornaliera-ella',
      es: 'excursion-ella-un-dia',
      pl: 'wycieczka-jednodniowa-ella',
      ru: 'odnodnevnaya-ekskursiya-ella',
      nl: 'ella-dagexcursie',
    },
  },
  {
    id: 'galleDay',
    kind: 'tour',
    days: 1,
    index: true,
    priority: 0.96,
    changefreq: 'weekly',
    slugs: {
      en: 'galle-day-tour',
      de: 'galle-tagesausflug',
      fr: 'excursion-galle-journee',
      it: 'escursione-giornaliera-galle',
      es: 'excursion-galle-un-dia',
      pl: 'wycieczka-jednodniowa-galle',
      ru: 'odnodnevnaya-ekskursiya-galle',
      nl: 'galle-dagexcursie',
    },
  },
  {
    id: 'kandyDay',
    kind: 'tour',
    days: 1,
    index: true,
    priority: 0.96,
    changefreq: 'weekly',
    slugs: {
      en: 'kandy-day-tour',
      de: 'kandy-tagesausflug',
      fr: 'excursion-kandy-journee',
      it: 'escursione-giornaliera-kandy',
      es: 'excursion-kandy-un-dia',
      pl: 'wycieczka-jednodniowa-kandy',
      ru: 'odnodnevnaya-ekskursiya-kandi',
      nl: 'kandy-dagexcursie',
    },
  },
  {
    id: 'sigiriyaDay',
    kind: 'tour',
    days: 1,
    index: true,
    priority: 0.96,
    changefreq: 'weekly',
    slugs: {
      en: 'sigiriya-day-tour',
      de: 'sigiriya-tagesausflug',
      fr: 'excursion-sigiriya-journee',
      it: 'escursione-giornaliera-sigiriya',
      es: 'excursion-sigiriya-un-dia',
      pl: 'wycieczka-jednodniowa-sigiriya',
      ru: 'odnodnevnaya-ekskursiya-sigiriya',
      nl: 'sigiriya-dagexcursie',
    },
  },

  // Content hubs.
  {
    id: 'destinations',
    kind: 'content',
    index: true,
    priority: 0.9,
    changefreq: 'weekly',
    slugs: {
      en: 'destinations-sri-lanka',
      de: 'reiseziele-sri-lanka',
      fr: 'destinations-sri-lanka',
      it: 'destinazioni-sri-lanka',
      es: 'destinos-sri-lanka',
      pl: 'kierunki-sri-lanka',
      ru: 'napravleniya-shri-lanka',
      nl: 'bestemmingen-sri-lanka',
    },
  },
  {
    id: 'guides',
    kind: 'content',
    index: true,
    priority: 0.88,
    changefreq: 'weekly',
    slugs: {
      en: 'travel-guides',
      de: 'reisefuehrer',
      fr: 'guides',
      it: 'guide',
      es: 'guias',
      pl: 'przewodniki',
      ru: 'putevoditel',
      nl: 'reisgidsen',
    },
  },
  {
    id: 'restaurants',
    kind: 'content',
    index: true,
    priority: 0.75,
    changefreq: 'monthly',
    slugs: {
      en: 'restaurants-in-sri-lanka',
      de: 'restaurants-in-sri-lanka',
      fr: 'restaurants-au-sri-lanka',
      it: 'ristoranti-in-sri-lanka',
      es: 'restaurantes-en-sri-lanka',
      pl: 'restauracje-na-sri-lance',
      ru: 'restorany-na-shri-lanka',
      nl: 'restaurants-in-sri-lanka',
    },
  },
  {
    id: 'testimonials',
    kind: 'content',
    index: true,
    priority: 0.7,
    changefreq: 'monthly',
    slugs: {
      en: 'customer-testimonials',
      de: 'kundenbewertungen',
      fr: 'temoignages-clients',
      it: 'recensioni-clienti',
      es: 'opiniones-clientes',
      pl: 'opinie-klientow',
      ru: 'otzyvy-klientov',
      nl: 'klantbeoordelingen',
    },
  },

  // Destination detail pages.
  {
    id: 'destSigiriya',
    kind: 'destination',
    index: true,
    priority: 0.92,
    changefreq: 'monthly',
    slugs: {
      en: 'sigiriya-sri-lanka',
      de: 'sigiriya-sri-lanka',
      fr: 'sigiriya-sri-lanka',
      it: 'sigiriya-sri-lanka',
      es: 'sigiriya-sri-lanka',
      pl: 'sigiriya-sri-lanka',
      ru: 'sigiriya-shri-lanka',
      nl: 'sigiriya-sri-lanka',
    },
  },
  {
    id: 'destElla',
    kind: 'destination',
    index: true,
    priority: 0.92,
    changefreq: 'monthly',
    slugs: {
      en: 'ella-sri-lanka',
      de: 'ella-sri-lanka',
      fr: 'ella-sri-lanka',
      it: 'ella-sri-lanka',
      es: 'ella-sri-lanka',
      pl: 'ella-sri-lanka',
      ru: 'ella-shri-lanka',
      nl: 'ella-sri-lanka',
    },
  },
  {
    id: 'destYala',
    kind: 'destination',
    index: true,
    priority: 0.92,
    changefreq: 'monthly',
    slugs: {
      en: 'yala-sri-lanka',
      de: 'yala-nationalpark-sri-lanka',
      fr: 'yala-sri-lanka',
      it: 'yala-sri-lanka',
      es: 'yala-sri-lanka',
      pl: 'yala-sri-lanka',
      ru: 'yala-shri-lanka',
      nl: 'yala-sri-lanka',
    },
  },
  {
    id: 'destKandy',
    kind: 'destination',
    index: true,
    priority: 0.92,
    changefreq: 'monthly',
    slugs: {
      en: 'kandy-sri-lanka',
      de: 'kandy-sri-lanka',
      fr: 'kandy-sri-lanka',
      it: 'kandy-sri-lanka',
      es: 'kandy-sri-lanka',
      pl: 'kandy-sri-lanka',
      ru: 'kandi-shri-lanka',
      nl: 'kandy-sri-lanka',
    },
  },
  {
    id: 'destDambulla',
    kind: 'destination',
    index: true,
    priority: 0.9,
    changefreq: 'monthly',
    slugs: {
      en: 'dambulla-sri-lanka',
      de: 'dambulla-sri-lanka',
      fr: 'dambulla-sri-lanka',
      it: 'dambulla-sri-lanka',
      es: 'dambulla-sri-lanka',
      pl: 'dambulla-sri-lanka',
      ru: 'dambulla-shri-lanka',
      nl: 'dambulla-sri-lanka',
    },
  },
  {
    id: 'destGalle',
    kind: 'destination',
    index: true,
    priority: 0.92,
    changefreq: 'monthly',
    slugs: {
      en: 'galle-sri-lanka',
      de: 'galle-sri-lanka',
      fr: 'galle-sri-lanka',
      it: 'galle-sri-lanka',
      es: 'galle-sri-lanka',
      pl: 'galle-sri-lanka',
      ru: 'galle-shri-lanka',
      nl: 'galle-sri-lanka',
    },
  },

  // P2 destination scaffolds (thin stubs — expand content later).
  {
    id: 'destColombo',
    kind: 'destination',
    index: false,
    priority: 0.55,
    changefreq: 'monthly',
    slugs: {
      en: 'colombo-sri-lanka',
      de: 'colombo-sri-lanka',
      fr: 'colombo-sri-lanka',
      it: 'colombo-sri-lanka',
      es: 'colombo-sri-lanka',
      pl: 'colombo-sri-lanka',
      ru: 'kolombo-shri-lanka',
      nl: 'colombo-sri-lanka',
    },
  },
  {
    id: 'destNegombo',
    kind: 'destination',
    index: false,
    priority: 0.55,
    changefreq: 'monthly',
    slugs: {
      en: 'negombo-sri-lanka',
      de: 'negombo-sri-lanka',
      fr: 'negombo-sri-lanka',
      it: 'negombo-sri-lanka',
      es: 'negombo-sri-lanka',
      pl: 'negombo-sri-lanka',
      ru: 'negombo-shri-lanka',
      nl: 'negombo-sri-lanka',
    },
  },
  {
    id: 'destBentota',
    kind: 'destination',
    index: false,
    priority: 0.55,
    changefreq: 'monthly',
    slugs: {
      en: 'bentota-sri-lanka',
      de: 'bentota-sri-lanka',
      fr: 'bentota-sri-lanka',
      it: 'bentota-sri-lanka',
      es: 'bentota-sri-lanka',
      pl: 'bentota-sri-lanka',
      ru: 'bentota-shri-lanka',
      nl: 'bentota-sri-lanka',
    },
  },
  {
    id: 'destMirissa',
    kind: 'destination',
    index: true,
    priority: 0.55,
    changefreq: 'monthly',
    slugs: {
      en: 'mirissa-sri-lanka',
      de: 'mirissa-sri-lanka',
      fr: 'mirissa-sri-lanka',
      it: 'mirissa-sri-lanka',
      es: 'mirissa-sri-lanka',
      pl: 'mirissa-sri-lanka',
      ru: 'mirissa-shri-lanka',
      nl: 'mirissa-sri-lanka',
    },
  },
  {
    id: 'destNuwaraEliya',
    kind: 'destination',
    index: false,
    priority: 0.55,
    changefreq: 'monthly',
    slugs: {
      en: 'nuwara-eliya-sri-lanka',
      de: 'nuwara-eliya-sri-lanka',
      fr: 'nuwara-eliya-sri-lanka',
      it: 'nuwara-eliya-sri-lanka',
      es: 'nuwara-eliya-sri-lanka',
      pl: 'nuwara-eliya-sri-lanka',
      ru: 'nuwara-eliya-shri-lanka',
      nl: 'nuwara-eliya-sri-lanka',
    },
  },
  {
    id: 'destAnuradhapura',
    kind: 'destination',
    index: false,
    priority: 0.55,
    changefreq: 'monthly',
    slugs: {
      en: 'anuradhapura-sri-lanka',
      de: 'anuradhapura-sri-lanka',
      fr: 'anuradhapura-sri-lanka',
      it: 'anuradhapura-sri-lanka',
      es: 'anuradhapura-sri-lanka',
      pl: 'anuradhapura-sri-lanka',
      ru: 'anuradhapura-shri-lanka',
      nl: 'anuradhapura-sri-lanka',
    },
  },
  {
    id: 'destPolonnaruwa',
    kind: 'destination',
    index: false,
    priority: 0.55,
    changefreq: 'monthly',
    slugs: {
      en: 'polonnaruwa-sri-lanka',
      de: 'polonnaruwa-sri-lanka',
      fr: 'polonnaruwa-sri-lanka',
      it: 'polonnaruwa-sri-lanka',
      es: 'polonnaruwa-sri-lanka',
      pl: 'polonnaruwa-sri-lanka',
      ru: 'polonnaruwa-shri-lanka',
      nl: 'polonnaruwa-sri-lanka',
    },
  },
  {
    id: 'destTrincomalee',
    kind: 'destination',
    index: false,
    priority: 0.55,
    changefreq: 'monthly',
    slugs: {
      en: 'trincomalee-sri-lanka',
      de: 'trincomalee-sri-lanka',
      fr: 'trincomalee-sri-lanka',
      it: 'trincomalee-sri-lanka',
      es: 'trincomalee-sri-lanka',
      pl: 'trincomalee-sri-lanka',
      ru: 'trinkomali-shri-lanka',
      nl: 'trincomalee-sri-lanka',
    },
  },
  {
    id: 'destArugamBay',
    kind: 'destination',
    index: false,
    priority: 0.55,
    changefreq: 'monthly',
    slugs: {
      en: 'arugam-bay-sri-lanka',
      de: 'arugam-bay-sri-lanka',
      fr: 'arugam-bay-sri-lanka',
      it: 'arugam-bay-sri-lanka',
      es: 'arugam-bay-sri-lanka',
      pl: 'arugam-bay-sri-lanka',
      ru: 'arugam-bey-shri-lanka',
      nl: 'arugam-bay-sri-lanka',
    },
  },
  {
    id: 'destKalpitiya',
    kind: 'destination',
    index: false,
    priority: 0.55,
    changefreq: 'monthly',
    slugs: {
      en: 'kalpitiya-sri-lanka',
      de: 'kalpitiya-sri-lanka',
      fr: 'kalpitiya-sri-lanka',
      it: 'kalpitiya-sri-lanka',
      es: 'kalpitiya-sri-lanka',
      pl: 'kalpitiya-sri-lanka',
      ru: 'kalpitiya-shri-lanka',
      nl: 'kalpitiya-sri-lanka',
    },
  },

  // Travel guide detail pages (localized nested hub/article slugs).
  {
    id: 'guideBestTime',
    kind: 'guide',
    index: true,
    priority: 0.9,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/best-time-to-visit-sri-lanka',
      de: 'reisefuehrer/beste-reisezeit-sri-lanka',
      fr: 'guides/meilleure-periode-sri-lanka',
      it: 'guide/periodo-migliore-sri-lanka',
      es: 'guias/mejor-epoca-sri-lanka',
      pl: 'przewodniki/najlepszy-czas-na-sri-lanke',
      ru: 'putevoditel/luchshee-vremya-dlya-shri-lanka',
      nl: 'reisgidsen/beste-reistijd-sri-lanka',
    },
  },
  {
    id: 'guideVisa',
    kind: 'guide',
    index: true,
    priority: 0.9,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-visa-guide',
      de: 'reisefuehrer/sri-lanka-visum',
      fr: 'guides/visa-sri-lanka',
      it: 'guide/visto-sri-lanka',
      es: 'guias/visado-sri-lanka',
      pl: 'przewodniki/wiza-sri-lanka',
      ru: 'putevoditel/viza-shri-lanka',
      nl: 'reisgidsen/sri-lanka-visum',
    },
  },
  {
    id: 'guidePrivateDriver',
    kind: 'guide',
    index: true,
    priority: 0.9,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-private-driver-guide',
      de: 'reisefuehrer/privater-fahrer-sri-lanka',
      fr: 'guides/chauffeur-prive-sri-lanka',
      it: 'guide/autista-privato-sri-lanka',
      es: 'guias/conductor-privado-sri-lanka',
      pl: 'przewodniki/prywatny-kierowca-sri-lanka',
      ru: 'putevoditel/chastnyy-voditel-shri-lanka',
      nl: 'reisgidsen/prive-chauffeur-sri-lanka',
    },
  },
  {
    id: 'guideBudget',
    kind: 'guide',
    index: true,
    priority: 0.88,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-budget-travel-guide',
      de: 'reisefuehrer/sri-lanka-reisebudget',
      fr: 'guides/budget-voyage-sri-lanka',
      it: 'guide/budget-viaggio-sri-lanka',
      es: 'guias/presupuesto-viaje-sri-lanka',
      pl: 'przewodniki/budzet-podrozy-sri-lanka',
      ru: 'putevoditel/byudzhet-puteshestviya-shri-lanka',
      nl: 'reisgidsen/budget-reizen-sri-lanka',
    },
  },
  {
    id: 'guideWildlife',
    kind: 'guide',
    index: true,
    priority: 0.88,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-wildlife-guide',
      de: 'reisefuehrer/sri-lanka-wildtier-guide',
      fr: 'guides/faune-sri-lanka',
      it: 'guide/fauna-sri-lanka',
      es: 'guias/fauna-sri-lanka',
      pl: 'przewodniki/przyroda-sri-lanki',
      ru: 'putevoditel/dikaya-priroda-shri-lanki',
      nl: 'reisgidsen/wildlife-sri-lanka',
    },
  },
  {
    id: 'guideSafari',
    kind: 'guide',
    index: true,
    priority: 0.88,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-safari-guide',
      de: 'reisefuehrer/sri-lanka-safari',
      fr: 'guides/safari-sri-lanka',
      it: 'guide/safari-sri-lanka',
      es: 'guias/safari-sri-lanka',
      pl: 'przewodniki/safari-sri-lanka',
      ru: 'putevoditel/safari-shri-lanka',
      nl: 'reisgidsen/safari-sri-lanka',
    },
  },
  {
    id: 'guideBeaches',
    kind: 'guide',
    index: true,
    priority: 0.88,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-beaches-guide',
      de: 'reisefuehrer/sri-lanka-straende',
      fr: 'guides/plages-sri-lanka',
      it: 'guide/spiagge-sri-lanka',
      es: 'guias/playas-sri-lanka',
      pl: 'przewodniki/plaze-sri-lanka',
      ru: 'putevoditel/plyazhi-shri-lanka',
      nl: 'reisgidsen/stranden-sri-lanka',
    },
  },
  {
    id: 'guideTeaCountry',
    kind: 'guide',
    index: true,
    priority: 0.86,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-tea-country-guide',
      de: 'reisefuehrer/teeanbaugebiet-sri-lanka',
      fr: 'guides/region-the-sri-lanka',
      it: 'guide/regione-del-te-sri-lanka',
      es: 'guias/region-del-te-sri-lanka',
      pl: 'przewodniki/region-herbaty-sri-lanka',
      ru: 'putevoditel/chaynye-plantatsii-shri-lanka',
      nl: 'reisgidsen/theeplantages-sri-lanka',
    },
  },
  {
    id: 'guideFood',
    kind: 'guide',
    index: true,
    priority: 0.86,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-food-guide',
      de: 'reisefuehrer/sri-lanka-kueche',
      fr: 'guides/cuisine-sri-lanka',
      it: 'guide/cucina-sri-lanka',
      es: 'guias/comida-sri-lanka',
      pl: 'przewodniki/kuchnia-sri-lanki',
      ru: 'putevoditel/kukhnya-shri-lanka',
      nl: 'reisgidsen/eten-sri-lanka',
    },
  },
  {
    id: 'guidePacking',
    kind: 'guide',
    index: true,
    priority: 0.85,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-packing-guide',
      de: 'reisefuehrer/packliste-sri-lanka',
      fr: 'guides/liste-de-bagages-sri-lanka',
      it: 'guide/cosa-portare-sri-lanka',
      es: 'guias/que-llevar-sri-lanka',
      pl: 'przewodniki/co-spakowac-sri-lanka',
      ru: 'putevoditel/chto-vzyat-v-shri-lanka',
      nl: 'reisgidsen/paklijst-sri-lanka',
    },
  },
  {
    id: 'guideSafety',
    kind: 'guide',
    index: true,
    priority: 0.88,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-safety-guide',
      de: 'reisefuehrer/sicherheit-sri-lanka',
      fr: 'guides/securite-sri-lanka',
      it: 'guide/sicurezza-sri-lanka',
      es: 'guias/seguridad-sri-lanka',
      pl: 'przewodniki/bezpieczenstwo-sri-lanka',
      ru: 'putevoditel/bezopasnost-shri-lanka',
      nl: 'reisgidsen/veiligheid-sri-lanka',
    },
  },

  // P2 guides — body copy currently authored for EN+DE only. Other locales stay
  // reachable in the UI but are noindex / out of sitemap until translated
  // (English fallback bodies cause "Discovered - currently not indexed" / duplicate-canonical).
  {
    id: 'guideWhaleWatching',
    kind: 'guide',
    index: true,
    indexLocales: ['en', 'de'],
    priority: 0.55,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-whale-watching',
      de: 'reisefuehrer/walbeobachtung-sri-lanka',
      fr: 'guides/observation-baleines-sri-lanka',
      it: 'guide/avvistamento-balene-sri-lanka',
      es: 'guias/avistamiento-ballenas-sri-lanka',
      pl: 'przewodniki/obserwacja-wielorybow-sri-lanka',
      ru: 'putevoditel/nablyudenie-za-kitami-shri-lanka',
      nl: 'reisgidsen/walvissen-spotten-sri-lanka',
    },
  },
  {
    id: 'guideTrainJourneys',
    kind: 'guide',
    index: true,
    indexLocales: ['en', 'de'],
    priority: 0.55,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-train-journeys',
      de: 'reisefuehrer/zugreisen-sri-lanka',
      fr: 'guides/voyages-train-sri-lanka',
      it: 'guide/viaggi-treno-sri-lanka',
      es: 'guias/viajes-tren-sri-lanka',
      pl: 'przewodniki/podroze-pociagiem-sri-lanka',
      ru: 'putevoditel/poezdki-na-poezde-shri-lanka',
      nl: 'reisgidsen/treinreizen-sri-lanka',
    },
  },
  {
    id: 'guideHoneymoon',
    kind: 'guide',
    index: true,
    indexLocales: ['en', 'de'],
    priority: 0.55,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-honeymoon',
      de: 'reisefuehrer/flitterwochen-sri-lanka',
      fr: 'guides/lune-de-miel-sri-lanka',
      it: 'guide/luna-di-miele-sri-lanka',
      es: 'guias/luna-de-miel-sri-lanka',
      pl: 'przewodniki/miesiac-miodowy-sri-lanka',
      ru: 'putevoditel/medovyy-mesyats-shri-lanka',
      nl: 'reisgidsen/huwelijksreis-sri-lanka',
    },
  },
  {
    id: 'guideFamilyTours',
    kind: 'guide',
    index: true,
    priority: 0.55,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-family-tours',
      de: 'reisefuehrer/familienreisen-sri-lanka',
      fr: 'guides/voyages-famille-sri-lanka',
      it: 'guide/viaggi-famiglia-sri-lanka',
      es: 'guias/viajes-familia-sri-lanka',
      pl: 'przewodniki/wycieczki-rodzinne-sri-lanka',
      ru: 'putevoditel/semeynye-tury-shri-lanka',
      nl: 'reisgidsen/gezinsreizen-sri-lanka',
    },
  },
  {
    id: 'guideLuxuryTours',
    kind: 'guide',
    index: true,
    indexLocales: ['en', 'de'],
    priority: 0.55,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-luxury-tours',
      de: 'reisefuehrer/luxusreisen-sri-lanka',
      fr: 'guides/voyages-luxe-sri-lanka',
      it: 'guide/viaggi-lusso-sri-lanka',
      es: 'guias/viajes-lujo-sri-lanka',
      pl: 'przewodniki/wycieczki-luksusowe-sri-lanka',
      ru: 'putevoditel/roskoshnye-tury-shri-lanka',
      nl: 'reisgidsen/luxe-reizen-sri-lanka',
    },
  },
  {
    id: 'guideAirportTransfers',
    kind: 'guide',
    index: true,
    indexLocales: ['en', 'de'],
    priority: 0.55,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-airport-transfers',
      de: 'reisefuehrer/flughafentransfer-sri-lanka',
      fr: 'guides/transferts-aeroport-sri-lanka',
      it: 'guide/transfer-aeroporto-sri-lanka',
      es: 'guias/traslados-aeropuerto-sri-lanka',
      pl: 'przewodniki/transfer-lotnisko-sri-lanka',
      ru: 'putevoditel/transfert-iz-aeroporta-shri-lanka',
      nl: 'reisgidsen/luchthaven-transfers-sri-lanka',
    },
  },

  // P2 market scaffolds.
  {
    id: 'marketGermany',
    kind: 'guide',
    index: false,
    priority: 0.5,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-tours-from-germany',
      de: 'reisefuehrer/sri-lanka-reisen-aus-deutschland',
      fr: 'guides/circuits-sri-lanka-depuis-allemagne',
      it: 'guide/tour-sri-lanka-dalla-germania',
      es: 'guias/circuitos-sri-lanka-desde-alemania',
      pl: 'przewodniki/wycieczki-sri-lanka-z-niemiec',
      ru: 'putevoditel/tury-shri-lanka-iz-germanii',
      nl: 'reisgidsen/sri-lanka-reizen-vanuit-duitsland',
    },
  },
  {
    id: 'marketFrance',
    kind: 'guide',
    index: false,
    priority: 0.5,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-tours-from-france',
      de: 'reisefuehrer/sri-lanka-reisen-aus-frankreich',
      fr: 'guides/circuits-sri-lanka-depuis-france',
      it: 'guide/tour-sri-lanka-dalla-francia',
      es: 'guias/circuitos-sri-lanka-desde-francia',
      pl: 'przewodniki/wycieczki-sri-lanka-z-francji',
      ru: 'putevoditel/tury-shri-lanka-iz-frantsii',
      nl: 'reisgidsen/sri-lanka-reizen-vanuit-frankrijk',
    },
  },
  {
    id: 'marketItaly',
    kind: 'guide',
    index: false,
    priority: 0.5,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-tours-from-italy',
      de: 'reisefuehrer/sri-lanka-reisen-aus-italien',
      fr: 'guides/circuits-sri-lanka-depuis-italie',
      it: 'guide/tour-sri-lanka-dall-italia',
      es: 'guias/circuitos-sri-lanka-desde-italia',
      pl: 'przewodniki/wycieczki-sri-lanka-z-wloch',
      ru: 'putevoditel/tury-shri-lanka-iz-italii',
      nl: 'reisgidsen/sri-lanka-reizen-vanuit-italie',
    },
  },
  {
    id: 'marketSpain',
    kind: 'guide',
    index: false,
    priority: 0.5,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-tours-from-spain',
      de: 'reisefuehrer/sri-lanka-reisen-aus-spanien',
      fr: 'guides/circuits-sri-lanka-depuis-espagne',
      it: 'guide/tour-sri-lanka-dalla-spagna',
      es: 'guias/circuitos-sri-lanka-desde-espana',
      pl: 'przewodniki/wycieczki-sri-lanka-z-hiszpanii',
      ru: 'putevoditel/tury-shri-lanka-iz-ispanii',
      nl: 'reisgidsen/sri-lanka-reizen-vanuit-spanje',
    },
  },
  {
    id: 'marketPoland',
    kind: 'guide',
    index: false,
    priority: 0.5,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-tours-from-poland',
      de: 'reisefuehrer/sri-lanka-reisen-aus-polen',
      fr: 'guides/circuits-sri-lanka-depuis-pologne',
      it: 'guide/tour-sri-lanka-dalla-polonia',
      es: 'guias/circuitos-sri-lanka-desde-polonia',
      pl: 'przewodniki/wycieczki-sri-lanka-z-polski',
      ru: 'putevoditel/tury-shri-lanka-iz-polshi',
      nl: 'reisgidsen/sri-lanka-reizen-vanuit-polen',
    },
  },
  {
    id: 'marketRussia',
    kind: 'guide',
    index: false,
    priority: 0.5,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-tours-from-russia',
      de: 'reisefuehrer/sri-lanka-reisen-aus-russland',
      fr: 'guides/circuits-sri-lanka-depuis-russie',
      it: 'guide/tour-sri-lanka-dalla-russia',
      es: 'guias/circuitos-sri-lanka-desde-rusia',
      pl: 'przewodniki/wycieczki-sri-lanka-z-rosji',
      ru: 'putevoditel/tury-shri-lanka-iz-rossii',
      nl: 'reisgidsen/sri-lanka-reizen-vanuit-rusland',
    },
  },
  {
    id: 'marketNetherlands',
    kind: 'guide',
    index: false,
    priority: 0.5,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-tours-from-netherlands',
      de: 'reisefuehrer/sri-lanka-reisen-aus-den-niederlanden',
      fr: 'guides/circuits-sri-lanka-depuis-pays-bas',
      it: 'guide/tour-sri-lanka-dai-paesi-bassi',
      es: 'guias/circuitos-sri-lanka-desde-paises-bajos',
      pl: 'przewodniki/wycieczki-sri-lanka-z-holandii',
      ru: 'putevoditel/tury-shri-lanka-iz-niderlandov',
      nl: 'reisgidsen/sri-lanka-reizen-vanuit-nederland',
    },
  },
  {
    id: 'marketUK',
    kind: 'guide',
    index: false,
    priority: 0.5,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-tours-from-uk',
      de: 'reisefuehrer/sri-lanka-reisen-aus-grossbritannien',
      fr: 'guides/circuits-sri-lanka-depuis-royaume-uni',
      it: 'guide/tour-sri-lanka-dal-regno-unito',
      es: 'guias/circuitos-sri-lanka-desde-reino-unido',
      pl: 'przewodniki/wycieczki-sri-lanka-z-wielkiej-brytanii',
      ru: 'putevoditel/tury-shri-lanka-iz-velikobritanii',
      nl: 'reisgidsen/sri-lanka-reizen-vanuit-vk',
    },
  },
  {
    id: 'marketAustria',
    kind: 'guide',
    index: false,
    priority: 0.5,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-tours-from-austria',
      de: 'reisefuehrer/sri-lanka-reisen-aus-oesterreich',
      fr: 'guides/circuits-sri-lanka-depuis-autriche',
      it: 'guide/tour-sri-lanka-dall-austria',
      es: 'guias/circuitos-sri-lanka-desde-austria',
      pl: 'przewodniki/wycieczki-sri-lanka-z-austrii',
      ru: 'putevoditel/tury-shri-lanka-iz-avstrii',
      nl: 'reisgidsen/sri-lanka-reizen-vanuit-oostenrijk',
    },
  },
  {
    id: 'marketSwitzerland',
    kind: 'guide',
    index: false,
    priority: 0.5,
    changefreq: 'monthly',
    slugs: {
      en: 'travel-guides/sri-lanka-tours-from-switzerland',
      de: 'reisefuehrer/sri-lanka-reisen-aus-der-schweiz',
      fr: 'guides/circuits-sri-lanka-depuis-suisse',
      it: 'guide/tour-sri-lanka-dalla-svizzera',
      es: 'guias/circuitos-sri-lanka-desde-suiza',
      pl: 'przewodniki/wycieczki-sri-lanka-ze-szwajcarii',
      ru: 'putevoditel/tury-shri-lanka-iz-shveytsarii',
      nl: 'reisgidsen/sri-lanka-reizen-vanuit-zwitserland',
    },
  },

  // P2 monthly scaffolds.
  ...['january','february','march','april','may','june','july','august','september','october','november','december'].map((month, i) => {
    const id = `month${month.charAt(0).toUpperCase()}${month.slice(1)}`;
    const deMonths = ['januar','februar','maerz','april','mai','juni','juli','august','september','oktober','november','dezember'];
    const frMonths = ['janvier','fevrier','mars','avril','mai','juin','juillet','aout','septembre','octobre','novembre','decembre'];
    const itMonths = ['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'];
    const esMonths = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    const plMonths = ['styczen','luty','marzec','kwiecien','maj','czerwiec','lipiec','sierpien','wrzesien','pazdziernik','listopad','grudzien'];
    const ruMonths = ['yanvar','fevral','mart','aprel','may','iyun','iyul','avgust','sentyabr','oktyabr','noyabr','dekabr'];
    const nlMonths = ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'];
    return {
      id,
      kind: 'guide',
      index: false,
      priority: 0.5,
      changefreq: 'yearly',
      slugs: {
        en: `travel-guides/sri-lanka-in-${month}`,
        de: `reisefuehrer/sri-lanka-im-${deMonths[i]}`,
        fr: `guides/sri-lanka-en-${frMonths[i]}`,
        it: `guide/sri-lanka-a-${itMonths[i]}`,
        es: `guias/sri-lanka-en-${esMonths[i]}`,
        pl: `przewodniki/sri-lanka-w-${plMonths[i]}`,
        ru: `putevoditel/shri-lanka-v-${ruMonths[i]}`,
        nl: `reisgidsen/sri-lanka-in-${nlMonths[i]}`,
      },
    };
  }),

  // Utility pages (kept out of the sitemap / marked noindex).
  { id: 'privacy', kind: 'utility', index: true, priority: 0.3, changefreq: 'yearly', slugs: same('privacy-policy') },
  { id: 'cancellation', kind: 'utility', index: true, priority: 0.4, changefreq: 'yearly', slugs: same('cancellation-policy') },
  { id: 'terms', kind: 'utility', index: false, slugs: same('terms-of-service') },
  { id: 'bookingPolicy', kind: 'utility', index: false, slugs: same('booking-policy') },
  { id: 'bookingSuccess', kind: 'utility', index: false, slugs: same('booking-success') },
];

/**
 * Legacy flat English guide/hub slugs → current page ids.
 * Used for permanent redirects so indexed URLs keep equity.
 * @type {Record<string, string>}
 */
export const LEGACY_GUIDE_REDIRECTS = {
  'sri-lanka-travel-guides': 'guides',
  'best-time-to-visit-sri-lanka': 'guideBestTime',
  'sri-lanka-visa-guide': 'guideVisa',
  'sri-lanka-private-driver-guide': 'guidePrivateDriver',
  'sri-lanka-budget-travel-guide': 'guideBudget',
  'sri-lanka-wildlife-guide': 'guideWildlife',
  'sri-lanka-safari-guide': 'guideSafari',
  'sri-lanka-beaches-guide': 'guideBeaches',
  'sri-lanka-tea-country-guide': 'guideTeaCountry',
  'sri-lanka-food-guide': 'guideFood',
  'sri-lanka-packing-guide': 'guidePacking',
  'sri-lanka-safety-guide': 'guideSafety',
  'destinations-sri-lanka': 'destinations',
  'restaurants-in-sri-lanka': 'restaurants',
  'customer-testimonials': 'testimonials',
};

/**
 * Former English tour slugs (used under every locale prefix) → page ids.
 * @type {Record<string, string>}
 */
export const LEGACY_TOUR_REDIRECTS = {
  '7-day-sri-lanka-tour': 'tour7',
  '10-day-sri-lanka-tour': 'tour10',
  '8-day-sri-lanka-private-tour': 'tour8',
  '6-day-sri-lanka-private-tour': 'tour6',
  '5-day-sri-lanka-tour': 'tour5',
  '4-day-sri-lanka-tour': 'tour4',
  '2-day-ella-kandy-private-tour-sri-lanka': 'tour2ek',
  '2-day-ella-yala-private-tour-sri-lanka': 'tour2ey',
  'ella-day-tour': 'ellaDay',
  'galle-day-tour': 'galleDay',
  'kandy-day-tour': 'kandyDay',
  'sigiriya-day-tour': 'sigiriyaDay',
};

/**
 * Former English destination hub/detail slugs → page ids.
 * @type {Record<string, string>}
 */
export const LEGACY_DEST_REDIRECTS = {
  'sigiriya-sri-lanka': 'destSigiriya',
  'ella-sri-lanka': 'destElla',
  'yala-sri-lanka': 'destYala',
  'kandy-sri-lanka': 'destKandy',
  'dambulla-sri-lanka': 'destDambulla',
  'galle-sri-lanka': 'destGalle',
};

/** @param {string} id */
export function getPage(id) {
  return PAGES.find((p) => p.id === id);
}

/**
 * Builds the root-relative path for a page in a locale.
 * Requires an explicit slug for the locale (no English fallback).
 * @param {string} id
 * @param {string} locale
 */
export function buildPath(id, locale) {
  const page = getPage(id);
  if (!page) {
    return '/';
  }
  const slug = page.slugs[locale];
  if (slug === undefined || slug === null) {
    if (typeof console !== 'undefined') {
      console.error(`[Sundown Tours] Missing slug for page "${id}" locale "${locale}"`);
    }
    return locale === DEFAULT_LOCALE ? '/' : `/${locale}`;
  }
  if (locale === DEFAULT_LOCALE) {
    return slug ? `/${slug}` : '/';
  }
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

/**
 * Builds the absolute URL for a page in a locale.
 * @param {string} id
 * @param {string} locale
 */
export function buildUrl(id, locale) {
  return `${BASE_URL}${buildPath(id, locale)}`;
}

/**
 * Locales that may be indexed / listed in sitemap+hreflang for a page.
 * Uses optional `page.indexLocales` when only some translations are ready.
 * @param {object | undefined} page
 * @returns {string[]}
 */
export function getIndexableLocalesForPage(page) {
  if (!page?.index) {
    return [];
  }
  const allowed = page.indexLocales?.length
    ? page.indexLocales.filter((l) => INDEXABLE_LOCALES.includes(l))
    : INDEXABLE_LOCALES;
  return allowed;
}

/**
 * Whether a page/locale pair should be indexed (mirrors SeoService + sitemap).
 * @param {object | undefined} page
 * @param {string} locale
 */
export function isPageIndexable(page, locale) {
  return getIndexableLocalesForPage(page).includes(locale);
}

/**
 * Builds hreflang alternates (indexable locales for this page + x-default → English).
 * @param {string} id
 * @returns {{ hreflang: string, href: string }[]}
 */
export function buildAlternates(id) {
  const page = getPage(id);
  const locales = getIndexableLocalesForPage(page);
  const alts = locales.map((locale) => ({
    hreflang: HREFLANG[locale],
    href: buildUrl(id, locale),
  }));
  if (locales.includes(DEFAULT_LOCALE)) {
    alts.push({ hreflang: 'x-default', href: buildUrl(id, DEFAULT_LOCALE) });
  }
  return alts;
}

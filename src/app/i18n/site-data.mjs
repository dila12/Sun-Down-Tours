/**
 * SINGLE SOURCE OF TRUTH for locales, page slugs and URL construction.
 *
 * Plain ESM so it can be consumed both by the Angular app (typed via
 * `site-data.d.mts`) and by the Node build scripts (sitemap generation)
 * without any duplication or code generation.
 */

export const BASE_URL = 'https://www.sundowntours.com';

export const LOCALES = ['en', 'de', 'fr', 'it', 'es', 'pl', 'ru'];

export const DEFAULT_LOCALE = 'en';

export const NON_DEFAULT_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

/** hreflang codes emitted in alternate links (identity map for now). */
export const HREFLANG = {
  en: 'en',
  de: 'de',
  fr: 'fr',
  it: 'it',
  es: 'es',
  pl: 'pl',
  ru: 'ru',
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
    },
  },

  // Round tours (long-tail: English slug behind the language prefix).
  { id: 'tour7', kind: 'tour', days: 7, index: true, priority: 0.98, changefreq: 'monthly', slugs: same('7-day-sri-lanka-tour') },
  { id: 'tour10', kind: 'tour', days: 10, index: true, priority: 0.96, changefreq: 'monthly', slugs: same('10-day-sri-lanka-tour') },
  { id: 'tour8', kind: 'tour', days: 8, index: true, priority: 0.96, changefreq: 'monthly', slugs: same('8-day-sri-lanka-private-tour') },
  { id: 'tour6', kind: 'tour', days: 6, index: true, priority: 0.97, changefreq: 'monthly', slugs: same('6-day-sri-lanka-private-tour') },
  { id: 'tour5', kind: 'tour', days: 5, index: true, priority: 0.97, changefreq: 'monthly', slugs: same('5-day-sri-lanka-tour') },
  { id: 'tour4', kind: 'tour', days: 4, index: true, priority: 0.98, changefreq: 'monthly', slugs: same('4-day-sri-lanka-tour') },
  { id: 'tour2ek', kind: 'tour', days: 2, index: true, priority: 0.98, changefreq: 'monthly', slugs: same('2-day-ella-kandy-private-tour-sri-lanka') },
  { id: 'tour2ey', kind: 'tour', days: 2, index: true, priority: 0.98, changefreq: 'monthly', slugs: same('2-day-ella-yala-private-tour-sri-lanka') },

  // Day tours.
  { id: 'ellaDay', kind: 'tour', days: 1, index: true, priority: 0.96, changefreq: 'weekly', slugs: same('ella-day-tour') },
  { id: 'galleDay', kind: 'tour', days: 1, index: true, priority: 0.96, changefreq: 'weekly', slugs: same('galle-day-tour') },
  { id: 'kandyDay', kind: 'tour', days: 1, index: true, priority: 0.96, changefreq: 'weekly', slugs: same('kandy-day-tour') },
  { id: 'sigiriyaDay', kind: 'tour', days: 1, index: true, priority: 0.96, changefreq: 'weekly', slugs: same('sigiriya-day-tour') },

  // Content hubs.
  { id: 'destinations', kind: 'content', index: true, priority: 0.9, changefreq: 'weekly', slugs: same('destinations-sri-lanka') },
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
    },
  },
  { id: 'restaurants', kind: 'content', index: true, priority: 0.75, changefreq: 'monthly', slugs: same('restaurants-in-sri-lanka') },
  { id: 'testimonials', kind: 'content', index: true, priority: 0.7, changefreq: 'monthly', slugs: same('customer-testimonials') },

  // Destination detail pages.
  { id: 'destSigiriya', kind: 'destination', index: true, priority: 0.92, changefreq: 'monthly', slugs: same('sigiriya-sri-lanka') },
  { id: 'destElla', kind: 'destination', index: true, priority: 0.92, changefreq: 'monthly', slugs: same('ella-sri-lanka') },
  { id: 'destYala', kind: 'destination', index: true, priority: 0.92, changefreq: 'monthly', slugs: same('yala-sri-lanka') },
  { id: 'destKandy', kind: 'destination', index: true, priority: 0.92, changefreq: 'monthly', slugs: same('kandy-sri-lanka') },
  { id: 'destDambulla', kind: 'destination', index: true, priority: 0.9, changefreq: 'monthly', slugs: same('dambulla-sri-lanka') },
  { id: 'destGalle', kind: 'destination', index: true, priority: 0.92, changefreq: 'monthly', slugs: same('galle-sri-lanka') },

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
    },
  },

  // Utility pages (kept out of the sitemap / marked noindex).
  { id: 'privacy', kind: 'utility', index: false, slugs: same('privacy-policy') },
  { id: 'cancellation', kind: 'utility', index: true, priority: 0.4, changefreq: 'yearly', slugs: same('cancellation-policy') },
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
};

/** @param {string} id */
export function getPage(id) {
  return PAGES.find((p) => p.id === id);
}

/**
 * Builds the root-relative path for a page in a locale.
 * @param {string} id
 * @param {string} locale
 */
export function buildPath(id, locale) {
  const page = getPage(id);
  if (!page) {
    return '/';
  }
  const slug = page.slugs[locale] ?? page.slugs[DEFAULT_LOCALE];
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
 * Builds hreflang alternates (all locales + x-default -> English) for a page.
 * @param {string} id
 * @returns {{ hreflang: string, href: string }[]}
 */
export function buildAlternates(id) {
  const alts = LOCALES.map((locale) => ({
    hreflang: HREFLANG[locale],
    href: buildUrl(id, locale),
  }));
  alts.push({ hreflang: 'x-default', href: buildUrl(id, DEFAULT_LOCALE) });
  return alts;
}

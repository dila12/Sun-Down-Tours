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
 * `slugs` holds the localized URL segment per locale. Core pages use fully
 * translated (Latin, transliterated for Russian) slugs; long-tail pages keep
 * the English slug behind the language prefix.
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

  // Content pages.
  { id: 'destinations', kind: 'content', index: true, priority: 0.9, changefreq: 'weekly', slugs: same('destinations-sri-lanka') },
  { id: 'guides', kind: 'content', index: true, priority: 0.88, changefreq: 'weekly', slugs: same('sri-lanka-travel-guides') },
  { id: 'restaurants', kind: 'content', index: true, priority: 0.75, changefreq: 'monthly', slugs: same('restaurants-in-sri-lanka') },
  { id: 'testimonials', kind: 'content', index: true, priority: 0.7, changefreq: 'monthly', slugs: same('customer-testimonials') },

  // Utility pages (kept out of the sitemap / marked noindex).
  { id: 'privacy', kind: 'utility', index: false, slugs: same('privacy-policy') },
  { id: 'bookingSuccess', kind: 'utility', index: false, slugs: same('booking-success') },
];

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

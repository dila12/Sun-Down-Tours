export type Locale = 'en' | 'de' | 'fr' | 'it' | 'es' | 'pl' | 'ru' | 'nl';

export type PageKind =
  | 'home'
  | 'toursHub'
  | 'services'
  | 'about'
  | 'contact'
  | 'tour'
  | 'content'
  | 'destination'
  | 'guide'
  | 'utility';

export interface PageData {
  id: string;
  kind: PageKind;
  index: boolean;
  priority?: number;
  changefreq?: string;
  days?: number;
  slugs: Record<Locale, string>;
}

export interface Alternate {
  hreflang: string;
  href: string;
}

export const BASE_URL: string;
export const LOCALES: Locale[];
/** Locales included in sitemap + hreflang (excludes unfinished translations). */
export const INDEXABLE_LOCALES: Locale[];
export const DEFAULT_LOCALE: Locale;
export const NON_DEFAULT_LOCALES: Locale[];
export const HREFLANG: Record<Locale, string>;
export const PAGES: PageData[];
/** Legacy flat English guide/hub slugs → page ids for permanent redirects. */
export const LEGACY_GUIDE_REDIRECTS: Record<string, string>;
/** Former English tour slugs → page ids. */
export const LEGACY_TOUR_REDIRECTS: Record<string, string>;
/** Former English destination slugs → page ids. */
export const LEGACY_DEST_REDIRECTS: Record<string, string>;

export function getPage(id: string): PageData | undefined;
export function buildPath(id: string, locale: Locale): string;
export function buildUrl(id: string, locale: Locale): string;
export function buildAlternates(id: string): Alternate[];

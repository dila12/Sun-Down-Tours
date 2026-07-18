export type Locale = 'en' | 'de' | 'fr' | 'it' | 'es' | 'pl' | 'ru';

export type PageKind =
  | 'home'
  | 'toursHub'
  | 'services'
  | 'about'
  | 'contact'
  | 'tour'
  | 'content'
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
export const DEFAULT_LOCALE: Locale;
export const NON_DEFAULT_LOCALES: Locale[];
export const HREFLANG: Record<Locale, string>;
export const PAGES: PageData[];

export function getPage(id: string): PageData | undefined;
export function buildPath(id: string, locale: Locale): string;
export function buildUrl(id: string, locale: Locale): string;
export function buildAlternates(id: string): Alternate[];

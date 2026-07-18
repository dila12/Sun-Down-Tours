/**
 * Typed locale facade for the Angular app.
 *
 * Raw locale/slug data lives in `site-data.mjs` (shared with the Node build
 * scripts). This module adds the app-only, strongly typed metadata (labels,
 * flags, og:locale) plus small helpers.
 */

import {
  LOCALES as RAW_LOCALES,
  DEFAULT_LOCALE as RAW_DEFAULT_LOCALE,
  NON_DEFAULT_LOCALES as RAW_NON_DEFAULT_LOCALES,
} from './site-data.mjs';
import type { Locale } from './site-data.mjs';

export type { Locale } from './site-data.mjs';

export const LOCALES = RAW_LOCALES as readonly Locale[];
export const DEFAULT_LOCALE: Locale = RAW_DEFAULT_LOCALE;
export const NON_DEFAULT_LOCALES = RAW_NON_DEFAULT_LOCALES as readonly Locale[];

export interface LocaleMeta {
  /** Internal locale code / URL prefix (empty prefix for the default locale). */
  code: Locale;
  /** Native language label shown in the switcher. */
  label: string;
  /** flagcdn country code used for the switcher flag. */
  flag: string;
  /** `og:locale` value (e.g. `de_DE`). */
  ogLocale: string;
  /** `<html lang>` value. */
  htmlLang: string;
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  en: { code: 'en', label: 'English', flag: 'gb', ogLocale: 'en_GB', htmlLang: 'en' },
  de: { code: 'de', label: 'Deutsch', flag: 'de', ogLocale: 'de_DE', htmlLang: 'de' },
  fr: { code: 'fr', label: 'Français', flag: 'fr', ogLocale: 'fr_FR', htmlLang: 'fr' },
  it: { code: 'it', label: 'Italiano', flag: 'it', ogLocale: 'it_IT', htmlLang: 'it' },
  es: { code: 'es', label: 'Español', flag: 'es', ogLocale: 'es_ES', htmlLang: 'es' },
  pl: { code: 'pl', label: 'Polski', flag: 'pl', ogLocale: 'pl_PL', htmlLang: 'pl' },
  ru: { code: 'ru', label: 'Русский', flag: 'ru', ogLocale: 'ru_RU', htmlLang: 'ru' },
};

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/**
 * Parses the active locale from a URL path. The first path segment is treated
 * as a locale prefix only when it matches a known non-default locale.
 */
export function localeFromUrl(url: string): Locale {
  const clean = (url || '/').split('#')[0].split('?')[0];
  const first = clean.split('/').filter(Boolean)[0];
  return isLocale(first) && first !== DEFAULT_LOCALE ? first : DEFAULT_LOCALE;
}

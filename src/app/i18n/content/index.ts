import type { Translations } from './types';
import { en } from './en';
import { de } from './de';
import { fr } from './fr';
import { it } from './it';
import { es } from './es';
import { pl } from './pl';
import { ru } from './ru';
import { nl } from './nl';

/**
 * All bundled translation dictionaries. Bundled (not HTTP-loaded) so they are
 * available synchronously during SSR/prerender, producing fully translated
 * HTML with no flash of untranslated content.
 *
 * Dutch UI strings are active in the switcher; search indexing is gated via
 * `INDEXABLE_LOCALES` + SeoService noindex until professional translation lands.
 */
export const TRANSLATIONS: Translations = { en, de, fr, it, es, pl, ru, nl };

export type { Dict, DictValue, FaqItem, SeoEntry, Translations } from './types';

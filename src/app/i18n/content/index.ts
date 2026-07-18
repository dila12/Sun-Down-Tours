import type { Translations } from './types';
import { en } from './en';
import { de } from './de';
import { fr } from './fr';
import { it } from './it';
import { es } from './es';
import { pl } from './pl';
import { ru } from './ru';

/**
 * All bundled translation dictionaries. Bundled (not HTTP-loaded) so they are
 * available synchronously during SSR/prerender, producing fully translated
 * HTML with no flash of untranslated content.
 */
export const TRANSLATIONS: Translations = { en, de, fr, it, es, pl, ru };

export type { Dict, DictValue, FaqItem, SeoEntry, Translations } from './types';

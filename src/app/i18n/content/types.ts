import type { Locale } from '../locales';

export interface FaqItem {
  q: string;
  a: string;
}

export interface SeoEntry {
  title: string;
  description: string;
  keywords: string;
}

export type DictValue = string | string[] | FaqItem[] | Dict;

export interface Dict {
  [key: string]: DictValue;
}

export type Translations = Record<Locale, Dict>;

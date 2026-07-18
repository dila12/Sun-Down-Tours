import { Injectable, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { TRANSLATIONS } from './content';
import type { Dict, DictValue, FaqItem } from './content/types';
import { DEFAULT_LOCALE, type Locale, localeFromUrl } from './locales';
import { buildAlternates, buildPath, buildUrl } from './site-data.mjs';
import type { Alternate } from './site-data.mjs';

/**
 * Runtime i18n engine. Holds the active locale (derived from the URL prefix)
 * and the active page id, and resolves translation keys against the bundled
 * dictionaries with automatic fallback to English.
 */
@Injectable({ providedIn: 'root' })
export class LocaleService {
  private readonly router = inject(Router);

  private readonly _locale = signal<Locale>(DEFAULT_LOCALE);
  private readonly _pageId = signal<string>('home');

  /** Active locale, derived from the current URL prefix. */
  readonly locale = this._locale.asReadonly();
  /** Active page id, set from the resolved route data. */
  readonly pageId = this._pageId.asReadonly();

  constructor() {
    this.syncFromUrl(this.router.url);
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => this.syncFromUrl(e.urlAfterRedirects));
  }

  private syncFromUrl(url: string): void {
    this._locale.set(localeFromUrl(url));
  }

  /** Called by the app shell after each navigation with the resolved page id. */
  setPageId(id: string): void {
    this._pageId.set(id);
  }

  private resolve(key: string, locale: Locale): DictValue | undefined {
    const segments = key.split('.');
    let node: DictValue | undefined = TRANSLATIONS[locale] as DictValue;
    for (const segment of segments) {
      if (node && typeof node === 'object' && !Array.isArray(node)) {
        node = (node as Dict)[segment];
      } else {
        return undefined;
      }
    }
    return node;
  }

  /** Raw lookup (string, array or object) with English fallback. */
  get(key: string, locale: Locale = this._locale()): DictValue | undefined {
    const value = this.resolve(key, locale);
    if (value !== undefined) {
      return value;
    }
    return locale === DEFAULT_LOCALE ? undefined : this.resolve(key, DEFAULT_LOCALE);
  }

  /** Translate a key to a string; returns the key itself if not found. */
  t(key: string, locale: Locale = this._locale()): string {
    const value = this.get(key, locale);
    return typeof value === 'string' ? value : key;
  }

  /** Resolve a key that holds an FAQ array. */
  faq(key: string, locale: Locale = this._locale()): FaqItem[] {
    const value = this.get(key, locale);
    return Array.isArray(value) ? (value as FaqItem[]) : [];
  }

  /** Root-relative localized path for a page. */
  path(pageId: string, locale: Locale = this._locale()): string {
    return buildPath(pageId, locale);
  }

  /** Absolute localized URL for a page. */
  url(pageId: string, locale: Locale = this._locale()): string {
    return buildUrl(pageId, locale);
  }

  /** hreflang alternates (all locales + x-default) for a page. */
  alternates(pageId: string): Alternate[] {
    return buildAlternates(pageId);
  }
}

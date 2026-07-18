import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { LOCALE_META, type Locale } from './app/i18n/locales';
import { LocaleService } from './app/i18n/locale.service';
import { getPage } from './app/i18n/site-data.mjs';

const OG_IMAGE = 'https://www.sundowntours.com/assets/img/package-2.webp';
const SITE_NAME = 'Sundown Tours Sri Lanka';

/**
 * SSR-safe SEO service. Runs on both server (prerender) and browser and owns
 * every head tag that must differ per language: title, meta description,
 * keywords, robots, canonical, OpenGraph, Twitter cards, `og:locale`, the
 * `<html lang>` attribute and the full set of hreflang alternates.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly doc = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly titleService = inject(Title);
  private readonly i18n = inject(LocaleService);

  update(pageId: string, locale: Locale): void {
    const page = getPage(pageId);
    const indexable = page ? page.index : true;

    const title = this.field(pageId, locale, 'title', SITE_NAME);
    const description = this.field(pageId, locale, 'description', this.field('home', locale, 'description', ''));
    const keywords = this.field(pageId, locale, 'keywords', '');
    const url = this.i18n.url(pageId, locale);
    const localeMeta = LOCALE_META[locale];

    this.titleService.setTitle(title);
    this.doc.documentElement.setAttribute('lang', localeMeta.htmlLang);

    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords });
    this.meta.updateTag({ name: 'robots', content: indexable ? 'index, follow' : 'noindex, follow' });

    // OpenGraph
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });
    this.meta.updateTag({ property: 'og:image', content: OG_IMAGE });
    this.meta.updateTag({ property: 'og:locale', content: localeMeta.ogLocale });
    this.setOgAlternateLocales(locale);

    // Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: OG_IMAGE });

    this.setCanonical(url);
    this.setAlternates(pageId);
  }

  /**
   * @deprecated Canonical URLs (and all other head tags) are now set centrally
   * on each navigation via {@link update}. Kept as a no-op so existing per-page
   * callers keep compiling without overriding the correct localized canonical.
   */
  updateCanonicalUrl(_url?: string): void {
    /* no-op */
  }

  private field(pageId: string, locale: Locale, key: string, fallback: string): string {
    const value = this.i18n.get(`seo.${pageId}.${key}`, locale);
    return typeof value === 'string' && value.length ? value : fallback;
  }

  private setCanonical(url: string): void {
    let link = this.doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private setAlternates(pageId: string): void {
    this.doc.head
      .querySelectorAll('link[rel="alternate"][data-seo-hreflang]')
      .forEach((node) => node.remove());

    for (const alt of this.i18n.alternates(pageId)) {
      const link = this.doc.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', alt.hreflang);
      link.setAttribute('href', alt.href);
      link.setAttribute('data-seo-hreflang', '');
      this.doc.head.appendChild(link);
    }
  }

  private setOgAlternateLocales(active: Locale): void {
    this.meta.removeTag('property="og:locale:alternate"');
    for (const code of Object.keys(LOCALE_META) as Locale[]) {
      if (code === active) {
        continue;
      }
      this.meta.addTag({ property: 'og:locale:alternate', content: LOCALE_META[code].ogLocale });
    }
  }
}

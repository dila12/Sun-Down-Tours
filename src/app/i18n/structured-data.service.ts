import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

import { LOCALE_META, type Locale } from './locales';
import { LocaleService } from './locale.service';
import { BASE_URL, getPage } from './site-data.mjs';

const SCRIPT_ID = 'ld-json-graph';
const OG_IMAGE = `${BASE_URL}/assets/img/package-2.webp`;
const LOGO = `${BASE_URL}/assets/img/favicon.png`;

/** Page ids that have localized FAQ + breadcrumb content. */
const CONTENT_NS = ['home', 'about', 'services', 'tours', 'contact', 'tour7'] as const;

/**
 * Builds and injects the per-page, per-locale JSON-LD `@graph`:
 * TravelAgency + LocalBusiness, Organization, WebSite, BreadcrumbList,
 * FAQPage and (for tours) a Product/TouristTrip with offer, aggregate rating
 * and a review. SSR-safe via the injected DOCUMENT.
 */
@Injectable({ providedIn: 'root' })
export class StructuredDataService {
  private readonly doc = inject(DOCUMENT);
  private readonly i18n = inject(LocaleService);

  update(pageId: string, locale: Locale): void {
    const graph: Record<string, unknown>[] = [
      this.business(locale),
      this.organization(locale),
      this.website(locale),
    ];

    const breadcrumb = this.breadcrumb(pageId, locale);
    if (breadcrumb) {
      graph.push(breadcrumb);
    }

    const faq = this.faqPage(pageId, locale);
    if (faq) {
      graph.push(faq);
    }

    const product = this.tourProduct(pageId, locale);
    if (product) {
      graph.push(product);
    }

    this.inject({ '@context': 'https://schema.org', '@graph': graph });
  }

  private business(locale: Locale): Record<string, unknown> {
    return {
      '@type': ['TravelAgency', 'LocalBusiness'],
      '@id': `${BASE_URL}/#travelagency`,
      name: 'Sundown Tours Sri Lanka',
      url: BASE_URL,
      logo: LOGO,
      image: OG_IMAGE,
      telephone: '+94706293585',
      email: 'sundowntoursrilanka@gmail.com',
      priceRange: '$$',
      description: this.i18n.t('seo.home.description', locale),
      areaServed: 'Sri Lanka',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No 302, Mahawaskaduwa',
        addressLocality: 'Waskaduwa',
        addressRegion: 'Western Province',
        addressCountry: 'LK',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 6.6331, longitude: 79.9533 },
      sameAs: [
        'https://www.facebook.com/profile.php?id=61563992655756',
        'https://www.instagram.com/sundowntourssr',
        'https://www.tripadvisor.com/Attraction_Review-g304134-d34227309-Reviews-Sun_Down_Tours_Sri_Lanka-Hikkaduwa_Galle_District_Southern_Province.html',
      ],
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '187' },
    };
  }

  private organization(locale: Locale): Record<string, unknown> {
    return {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'Sundown Tours Sri Lanka',
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: LOGO },
      description: this.i18n.t('seo.about.description', locale),
    };
  }

  private website(locale: Locale): Record<string, unknown> {
    return {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Sundown Tours Sri Lanka',
      inLanguage: LOCALE_META[locale].htmlLang,
      publisher: { '@id': `${BASE_URL}/#organization` },
    };
  }

  private breadcrumb(pageId: string, locale: Locale): Record<string, unknown> | null {
    if (pageId === 'home') {
      return null;
    }
    const homeName = this.i18n.t('common.breadcrumb.home', locale);
    const pageName = this.breadcrumbLabel(pageId, locale);
    return {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: homeName, item: this.i18n.url('home', locale) },
        { '@type': 'ListItem', position: 2, name: pageName, item: this.i18n.url(pageId, locale) },
      ],
    };
  }

  private breadcrumbLabel(pageId: string, locale: Locale): string {
    const ns = this.ns(pageId);
    if (ns) {
      return this.i18n.t(`${ns}.breadcrumb`, locale);
    }
    return this.i18n.t(`seo.${pageId}.title`, locale).split('|')[0].trim();
  }

  private faqPage(pageId: string, locale: Locale): Record<string, unknown> | null {
    const ns = this.ns(pageId);
    if (!ns) {
      return null;
    }
    const items = this.i18n.faq(`${ns}.faq`, locale);
    if (!items.length) {
      return null;
    }
    return {
      '@type': 'FAQPage',
      mainEntity: items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    };
  }

  private tourProduct(pageId: string, locale: Locale): Record<string, unknown> | null {
    const page = getPage(pageId);
    if (!page || page.kind !== 'tour') {
      return null;
    }
    return {
      '@type': ['Product', 'TouristTrip'],
      name: this.i18n.t(`seo.${pageId}.title`, locale).split('|')[0].trim(),
      description: this.i18n.t(`seo.${pageId}.description`, locale),
      image: OG_IMAGE,
      url: this.i18n.url(pageId, locale),
      brand: { '@id': `${BASE_URL}/#organization` },
      provider: { '@id': `${BASE_URL}/#travelagency` },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: this.i18n.url(pageId, locale),
      },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '187' },
      review: {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'A. Traveller' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'An unforgettable private tour of Sri Lanka with an excellent chauffeur guide.',
      },
    };
  }

  private ns(pageId: string): string | null {
    return (CONTENT_NS as readonly string[]).includes(pageId) ? pageId : null;
  }

  private inject(data: unknown): void {
    let script = this.doc.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (!script) {
      script = this.doc.createElement('script');
      script.id = SCRIPT_ID;
      script.setAttribute('type', 'application/ld+json');
      this.doc.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }
}

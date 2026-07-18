import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

import { LOCALE_META, type Locale } from './locales';
import { LocaleService } from './locale.service';
import { ArticleContentService } from './articles/article-content.service';
import { TourContentService } from './tours/tour-content.service';
import { BASE_URL, getPage } from './site-data.mjs';
import {
  SITE_ADDRESS_LOCALITY,
  SITE_ADDRESS_REGION,
  SITE_ADDRESS_STREET,
  SITE_BRAND,
  SITE_EMAIL,
  SITE_FACEBOOK_URL,
  SITE_GEO,
  SITE_HOURS_CLOSES,
  SITE_HOURS_OPENS,
  SITE_INSTAGRAM_URL,
  SITE_PHONE_E164,
  SITE_TRIPADVISOR_URL,
} from './site-contact';
import { TOUR_OFFER_CURRENCY, getTourOfferPriceUsd } from '../utils/tour-prices.static';
import { buildTourImagePath, toWebpSrc, withImageVersion } from '../utils/image.util';
import { TOUR_CATALOG } from './tours/catalog';

const SCRIPT_ID = 'ld-json-graph';
const OG_IMAGE = `${BASE_URL}/assets/img/package-2.webp`;
const LOGO = `${BASE_URL}/assets/img/favicon.png`;

/** Page ids that have localized FAQ + breadcrumb content in content/*.ts. */
const CONTENT_NS = ['home', 'about', 'services', 'tours', 'contact'] as const;

/**
 * Builds and injects the per-page, per-locale JSON-LD `@graph`:
 * TravelAgency + LocalBusiness, Organization, WebSite, BreadcrumbList,
 * FAQPage and (for tours) a Product/TouristTrip with Offer (no AggregateRating).
 * Destinations emit TouristDestination; guides emit Article.
 * SSR-safe via the injected DOCUMENT.
 */
@Injectable({ providedIn: 'root' })
export class StructuredDataService {
  private readonly doc = inject(DOCUMENT);
  private readonly i18n = inject(LocaleService);
  private readonly articles = inject(ArticleContentService);
  private readonly tours = inject(TourContentService);

  update(pageId: string, locale: Locale): void {
    const graph: Record<string, unknown>[] = [
      this.business(locale),
      this.organization(locale),
      ...this.people(locale),
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

    const destination = this.touristDestination(pageId, locale);
    if (destination) {
      graph.push(destination);
    }

    const article = this.guideArticle(pageId, locale);
    if (article) {
      graph.push(article);
    }

    this.inject({ '@context': 'https://schema.org', '@graph': graph });
  }

  private business(locale: Locale): Record<string, unknown> {
    return {
      '@type': ['TravelAgency', 'LocalBusiness'],
      '@id': `${BASE_URL}/#travelagency`,
      name: SITE_BRAND,
      url: BASE_URL,
      logo: LOGO,
      image: OG_IMAGE,
      telephone: SITE_PHONE_E164,
      email: SITE_EMAIL,
      priceRange: '$$',
      description: this.i18n.t('seo.home.description', locale),
      areaServed: 'Sri Lanka',
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_ADDRESS_STREET,
        addressLocality: SITE_ADDRESS_LOCALITY,
        addressRegion: SITE_ADDRESS_REGION,
        addressCountry: 'LK',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: SITE_GEO.latitude,
        longitude: SITE_GEO.longitude,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: SITE_HOURS_OPENS,
        closes: SITE_HOURS_CLOSES,
      },
      sameAs: [SITE_FACEBOOK_URL, SITE_INSTAGRAM_URL, SITE_TRIPADVISOR_URL],
    };
  }

  private organization(locale: Locale): Record<string, unknown> {
    return {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: SITE_BRAND,
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: LOGO },
      description: this.i18n.t('seo.about.description', locale),
      founder: { '@id': `${BASE_URL}/#person-dilan-lakshitha` },
      employee: [
        { '@id': `${BASE_URL}/#person-dilan-lakshitha` },
        { '@id': `${BASE_URL}/#person-yohan-malshika` },
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_ADDRESS_STREET,
        addressLocality: SITE_ADDRESS_LOCALITY,
        addressRegion: SITE_ADDRESS_REGION,
        addressCountry: 'LK',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: SITE_PHONE_E164,
        email: SITE_EMAIL,
        contactType: 'customer service',
        areaServed: ['LK', 'EU', 'GB'],
        availableLanguage: ['English', 'German', 'French', 'Italian', 'Spanish', 'Polish', 'Russian', 'Dutch'],
      },
      sameAs: [SITE_FACEBOOK_URL, SITE_INSTAGRAM_URL, SITE_TRIPADVISOR_URL],
    };
  }

  private people(locale: Locale): Record<string, unknown>[] {
    const aboutUrl = this.i18n.url('about', locale);
    return [
      {
        '@type': 'Person',
        '@id': `${BASE_URL}/#person-dilan-lakshitha`,
        name: 'Dilan Lakshitha',
        jobTitle: 'Owner & Founder',
        worksFor: { '@id': `${BASE_URL}/#organization` },
        image: `${BASE_URL}/assets/img/Team/1.webp`,
        url: aboutUrl,
        knowsLanguage: ['en', 'si'],
        homeLocation: {
          '@type': 'Place',
          name: 'Waskaduwa, Sri Lanka',
        },
      },
      {
        '@type': 'Person',
        '@id': `${BASE_URL}/#person-yohan-malshika`,
        name: 'Yohan Malshika',
        jobTitle: 'Senior Consultant',
        worksFor: { '@id': `${BASE_URL}/#organization` },
        image: `${BASE_URL}/assets/img/Team/2.webp`,
        url: aboutUrl,
        knowsLanguage: ['en', 'si'],
      },
    ];
  }

  private website(locale: Locale): Record<string, unknown> {
    return {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: SITE_BRAND,
      inLanguage: LOCALE_META[locale].htmlLang,
      publisher: { '@id': `${BASE_URL}/#organization` },
    };
  }

  private breadcrumb(pageId: string, locale: Locale): Record<string, unknown> | null {
    if (pageId === 'home') {
      return null;
    }

    const homeName = this.i18n.t('common.breadcrumb.home', locale);
    const page = getPage(pageId);
    const elements: Record<string, unknown>[] = [
      { '@type': 'ListItem', position: 1, name: homeName, item: this.i18n.url('home', locale) },
    ];

    if (page?.kind === 'destination' || page?.kind === 'guide') {
      const hubId = page.kind === 'guide' ? 'guides' : 'destinations';
      const hubKey = page.kind === 'guide' ? 'guidesHub.breadcrumb' : 'destinationsHub.breadcrumb';
      elements.push({
        '@type': 'ListItem',
        position: 2,
        name: this.i18n.t(hubKey, locale),
        item: this.i18n.url(hubId, locale),
      });
      elements.push({
        '@type': 'ListItem',
        position: 3,
        name: this.breadcrumbLabel(pageId, locale),
        item: this.i18n.url(pageId, locale),
      });
    } else if (page?.kind === 'tour') {
      elements.push({
        '@type': 'ListItem',
        position: 2,
        name: this.i18n.t('tours.breadcrumb', locale),
        item: this.i18n.url('tours', locale),
      });
      elements.push({
        '@type': 'ListItem',
        position: 3,
        name: this.breadcrumbLabel(pageId, locale),
        item: this.i18n.url(pageId, locale),
      });
    } else {
      elements.push({
        '@type': 'ListItem',
        position: 2,
        name: this.breadcrumbLabel(pageId, locale),
        item: this.i18n.url(pageId, locale),
      });
    }

    return {
      '@type': 'BreadcrumbList',
      itemListElement: elements,
    };
  }

  private breadcrumbLabel(pageId: string, locale: Locale): string {
    const article = this.articles.get(pageId, locale);
    if (article) {
      return article.h1;
    }
    if (pageId === 'destinations') {
      return this.i18n.t('destinationsHub.breadcrumb', locale);
    }
    if (pageId === 'guides') {
      return this.i18n.t('guidesHub.breadcrumb', locale);
    }
    const ns = this.ns(pageId);
    if (ns) {
      return this.i18n.t(`${ns}.breadcrumb`, locale);
    }
    return this.i18n.t(`seo.${pageId}.title`, locale).split('|')[0].trim();
  }

  private faqPage(pageId: string, locale: Locale): Record<string, unknown> | null {
    const page = getPage(pageId);

    if (page?.kind === 'tour') {
      const tour = this.tours.detail(pageId, locale);
      if (tour?.faq?.length) {
        return this.faqSchema(tour.faq);
      }
    }

    const article = this.articles.get(pageId, locale);
    if (article?.faq?.length) {
      return this.faqSchema(article.faq);
    }

    const ns = this.ns(pageId);
    if (!ns) {
      return null;
    }
    const items = this.i18n.faq(`${ns}.faq`, locale);
    if (!items.length) {
      return null;
    }
    return this.faqSchema(items);
  }

  private faqSchema(items: { q: string; a: string }[]): Record<string, unknown> {
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

    const meta = TOUR_CATALOG.find((t) => t.pageId === pageId);
    const imagePath = meta
      ? withImageVersion(toWebpSrc(buildTourImagePath(meta)))
      : OG_IMAGE;
    const imageUrl = imagePath.startsWith('http')
      ? imagePath
      : `${BASE_URL}/${imagePath.replace(/^\//, '')}`;

    const offer: Record<string, unknown> = {
      '@type': 'Offer',
      priceCurrency: TOUR_OFFER_CURRENCY,
      availability: 'https://schema.org/InStock',
      url: this.i18n.url(pageId, locale),
    };
    const price = getTourOfferPriceUsd(pageId);
    if (price !== undefined) {
      offer['price'] = price.toFixed(2);
    }

    return {
      '@type': ['Product', 'TouristTrip'],
      name: this.i18n.t(`seo.${pageId}.title`, locale).split('|')[0].trim(),
      description: this.i18n.t(`seo.${pageId}.description`, locale),
      image: {
        '@type': 'ImageObject',
        url: imageUrl,
      },
      url: this.i18n.url(pageId, locale),
      brand: { '@id': `${BASE_URL}/#organization` },
      provider: { '@id': `${BASE_URL}/#travelagency` },
      offers: offer,
    };
  }

  private touristDestination(pageId: string, locale: Locale): Record<string, unknown> | null {
    const page = getPage(pageId);
    if (!page || page.kind !== 'destination') {
      return null;
    }
    const article = this.articles.get(pageId, locale);
    if (!article) {
      return null;
    }
    const imageUrl = article.heroImage.startsWith('http')
      ? article.heroImage
      : `${BASE_URL}/${article.heroImage.replace(/^\//, '')}`;
    return {
      '@type': ['TouristDestination', 'Place'],
      name: article.h1,
      description: article.lead,
      url: this.i18n.url(pageId, locale),
      image: {
        '@type': 'ImageObject',
        url: imageUrl,
        description: article.heroAlt,
      },
      touristType: 'Sightseeing',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'LK',
      },
    };
  }

  private guideArticle(pageId: string, locale: Locale): Record<string, unknown> | null {
    const page = getPage(pageId);
    if (!page || page.kind !== 'guide') {
      return null;
    }
    const article = this.articles.get(pageId, locale);
    if (!article) {
      return null;
    }
    const imageUrl = article.heroImage.startsWith('http')
      ? article.heroImage
      : `${BASE_URL}/${article.heroImage.replace(/^\//, '')}`;
    return {
      '@type': 'Article',
      headline: article.h1,
      description: article.lead,
      image: imageUrl,
      url: this.i18n.url(pageId, locale),
      inLanguage: LOCALE_META[locale].htmlLang,
      author: { '@id': `${BASE_URL}/#organization` },
      publisher: { '@id': `${BASE_URL}/#organization` },
      mainEntityOfPage: this.i18n.url(pageId, locale),
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

  /** Remove JSON-LD on 404 so soft-home schema is not emitted for unknown URLs. */
  clear(): void {
    const script = this.doc.getElementById(SCRIPT_ID);
    if (script) {
      script.remove();
    }
  }
}

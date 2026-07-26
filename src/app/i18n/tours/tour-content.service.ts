import { Injectable, inject } from '@angular/core';
import { LocaleService } from '../locale.service';
import type { Locale } from '../locales';
import { DEFAULT_LOCALE } from '../locales';
import {
  TOUR_CATALOG,
  getTourMeta,
  type TourCategory,
  type TourMeta,
} from './catalog';
import { TOUR_CARDS, type TourCardCopy } from './cards';
import { localizeTour, type BaseTour, type TourContent } from './localize';

/**
 * Localized tour card ready for PackageItemComponent / lists.
 * `pageId` drives locale-correct routing via LocaleService.path().
 */
export interface TourCardView {
  pageId: string;
  id: number;
  filecode: string;
  rating: number;
  imageFolder: string;
  imageName: string;
  imageExt: string;
  title: string;
  days: string;
  persons: string;
  imageAlt: string;
  /** Locale-prefixed path — NEVER a hard-coded English URL. */
  path: string;
  price?: number;
}

type TourDetailLoader = () => Promise<TourContent>;

/**
 * Per-pageId dynamic imports keep the home / tours-list chunks free of
 * full itinerary dictionaries (~1 MB of tour detail source).
 */
const TOUR_DETAIL_LOADERS: Record<string, TourDetailLoader> = {
  tour2ek: () => import('./tour2ek').then((m) => m.TOUR2EK),
  tour2ey: () => import('./tour2ey').then((m) => m.TOUR2EY),
  tour4: () => import('./tour4').then((m) => m.TOUR4),
  tour5: () => import('./tour5').then((m) => m.TOUR5),
  tour6: () => import('./tour6').then((m) => m.TOUR6),
  tour7: () => import('./tour7').then((m) => m.TOUR7),
  tour8: () => import('./tour8').then((m) => m.TOUR8),
  tour10: () => import('./tour10').then((m) => m.TOUR10),
  ellaDay: () => import('./ellaDay').then((m) => m.ELLA_DAY),
  galleDay: () => import('./galleDay').then((m) => m.GALLE_DAY),
  kandyDay: () => import('./kandyDay').then((m) => m.KANDY_DAY),
  sigiriyaDay: () => import('./sigiriyaDay').then((m) => m.SIGIRIYA_DAY),
};

@Injectable({ providedIn: 'root' })
export class TourContentService {
  private readonly i18n = inject(LocaleService);
  private readonly entries = new Map<string, TourContent>();
  private readonly inflight = new Map<string, Promise<TourContent | undefined>>();

  /** Structural meta for a page id. */
  meta(pageId: string): TourMeta | undefined {
    return getTourMeta(pageId);
  }

  /** Localized card copy for a page id. */
  cardCopy(pageId: string, locale: Locale = this.i18n.locale()): TourCardCopy {
    const dict = TOUR_CARDS[locale] ?? TOUR_CARDS[DEFAULT_LOCALE];
    const fallback = TOUR_CARDS[DEFAULT_LOCALE][pageId];
    return dict[pageId] ?? fallback;
  }

  /** Build a view-model card (localized text + locale path + images). */
  card(pageId: string, locale: Locale = this.i18n.locale()): TourCardView | undefined {
    const meta = getTourMeta(pageId);
    if (!meta) {
      return undefined;
    }
    const copy = this.cardCopy(pageId, locale);
    return {
      pageId: meta.pageId,
      id: meta.id,
      filecode: meta.filecode,
      rating: meta.rating,
      imageFolder: meta.imageFolder,
      imageName: meta.imageName,
      imageExt: meta.imageExt,
      title: copy.title,
      days: copy.days,
      persons: copy.persons,
      imageAlt: copy.imageAlt,
      path: this.i18n.path(pageId, locale),
    };
  }

  /** All cards in a category, localized for the active locale. */
  cards(category: TourCategory, locale: Locale = this.i18n.locale()): TourCardView[] {
    return TOUR_CATALOG.filter((t) => t.category === category)
      .map((t) => this.card(t.pageId, locale)!)
      .filter(Boolean);
  }

  /** Related tour cards (excludes current), localized. */
  related(
    excludePageId: string,
    count = 3,
    locale: Locale = this.i18n.locale(),
  ): TourCardView[] {
    const pool = TOUR_CATALOG.filter((t) => t.pageId !== excludePageId);
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    return shuffled
      .slice(0, count)
      .map((t) => this.card(t.pageId, locale)!)
      .filter(Boolean);
  }

  hasLoader(pageId: string): boolean {
    return pageId in TOUR_DETAIL_LOADERS;
  }

  /**
   * Sync read of full localized tour detail.
   * Returns undefined until {@link preloadDetail} / the tour route resolver has run.
   */
  detail(pageId: string, locale: Locale = this.i18n.locale()): BaseTour | undefined {
    const content = this.entries.get(pageId);
    if (!content?.en) {
      return undefined;
    }
    if (locale === 'en') {
      return content.en;
    }
    return localizeTour(content.en, content[locale]);
  }

  /** Preload detail dictionaries for a tour page (route resolver / SSR). */
  async preloadDetail(pageId: string): Promise<BaseTour | undefined> {
    const entry = await this.loadEntry(pageId);
    if (!entry?.en) {
      return undefined;
    }
    return this.detail(pageId);
  }

  /** Whether detail content exists (authored) for this page id. */
  hasDetail(pageId: string): boolean {
    if (this.entries.has(pageId)) {
      return !!this.entries.get(pageId)?.en;
    }
    return this.hasLoader(pageId);
  }

  private loadEntry(pageId: string): Promise<TourContent | undefined> {
    const cached = this.entries.get(pageId);
    if (cached) {
      return Promise.resolve(cached);
    }
    const pending = this.inflight.get(pageId);
    if (pending) {
      return pending;
    }
    const loader = TOUR_DETAIL_LOADERS[pageId];
    if (!loader) {
      return Promise.resolve(undefined);
    }
    const task = loader()
      .then((entry) => {
        this.entries.set(pageId, entry);
        this.inflight.delete(pageId);
        return entry;
      })
      .catch((err) => {
        this.inflight.delete(pageId);
        throw err;
      });
    this.inflight.set(pageId, task);
    return task;
  }
}

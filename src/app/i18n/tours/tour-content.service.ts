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
import { TOUR2EK } from './tour2ek';
import { TOUR2EY } from './tour2ey';
import { TOUR4 } from './tour4';
import { TOUR5 } from './tour5';
import { TOUR6 } from './tour6';
import { TOUR7 } from './tour7';
import { TOUR8 } from './tour8';
import { TOUR10 } from './tour10';
import { ELLA_DAY } from './ellaDay';
import { GALLE_DAY } from './galleDay';
import { KANDY_DAY } from './kandyDay';
import { SIGIRIYA_DAY } from './sigiriyaDay';

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

/** Full registry of per-tour localized content (detail pages). */
const TOUR_DETAIL: Record<string, TourContent> = {
  tour2ek: TOUR2EK,
  tour2ey: TOUR2EY,
  tour4: TOUR4,
  tour5: TOUR5,
  tour6: TOUR6,
  tour7: TOUR7,
  tour8: TOUR8,
  tour10: TOUR10,
  ellaDay: ELLA_DAY,
  galleDay: GALLE_DAY,
  kandyDay: KANDY_DAY,
  sigiriyaDay: SIGIRIYA_DAY,
};

@Injectable({ providedIn: 'root' })
export class TourContentService {
  private readonly i18n = inject(LocaleService);

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

  /**
   * Full localized tour detail for a page.
   * English content in the registry is the base; other locales overlay by index.
   * Returns undefined if detail content has not been authored yet.
   */
  detail(pageId: string, locale: Locale = this.i18n.locale()): BaseTour | undefined {
    const content = TOUR_DETAIL[pageId];
    if (!content?.en) {
      return undefined;
    }
    if (locale === 'en') {
      return content.en;
    }
    return localizeTour(content.en, content[locale]);
  }

  /** Register / look up whether detail content exists. */
  hasDetail(pageId: string): boolean {
    return !!TOUR_DETAIL[pageId]?.en;
  }
}

export { TOUR_DETAIL };

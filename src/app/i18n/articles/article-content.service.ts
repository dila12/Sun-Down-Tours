import { Injectable, inject } from '@angular/core';

import { LocaleService } from '../locale.service';
import type { Locale } from '../locales';
import { DEFAULT_LOCALE } from '../locales';
import { getPage, isPageIndexable } from '../site-data.mjs';
import { DEST_HUB_CARDS } from '../destinations/catalog';
import { GUIDE_HUB_CARDS } from '../guides/catalog';
import { localizeArticle, type ArticleContent, type BaseArticle } from './types';

export interface ArticleHubCard {
  pageId: string;
  image: string;
  title: string;
  blurb: string;
}

type ArticleLoader = () => Promise<ArticleContent>;

/** Per-pageId dynamic imports keep home/tour chunks free of article dictionaries. */
const ARTICLE_LOADERS: Record<string, ArticleLoader> = {
  destSigiriya: () => import('../destinations/sigiriya').then((m) => m.SIGIRIYA_DEST),
  destElla: () => import('../destinations/ella').then((m) => m.ELLA_DEST),
  destYala: () => import('../destinations/yala').then((m) => m.YALA_DEST),
  destKandy: () => import('../destinations/kandy').then((m) => m.KANDY_DEST),
  destDambulla: () => import('../destinations/dambulla').then((m) => m.DAMBULLA_DEST),
  destGalle: () => import('../destinations/galle').then((m) => m.GALLE_DEST),
  destMirissa: () => import('../destinations/mirissa').then((m) => m.MIRISSA_DEST),
  guideBestTime: () => import('../guides/bestTime').then((m) => m.BEST_TIME_GUIDE),
  guideVisa: () => import('../guides/visa').then((m) => m.VISA_GUIDE),
  guidePrivateDriver: () => import('../guides/privateDriver').then((m) => m.PRIVATE_DRIVER_GUIDE),
  guideBudget: () => import('../guides/budget').then((m) => m.BUDGET_GUIDE),
  guideWildlife: () => import('../guides/wildlife').then((m) => m.WILDLIFE_GUIDE),
  guideSafari: () => import('../guides/safari').then((m) => m.SAFARI_GUIDE),
  guideBeaches: () => import('../guides/beaches').then((m) => m.BEACHES_GUIDE),
  guideTeaCountry: () => import('../guides/teaCountry').then((m) => m.TEA_COUNTRY_GUIDE),
  guideFood: () => import('../guides/food').then((m) => m.FOOD_GUIDE),
  guidePacking: () => import('../guides/packing').then((m) => m.PACKING_GUIDE),
  guideSafety: () => import('../guides/safety').then((m) => m.SAFETY_GUIDE),

  // P2 scaffolds (destinations, activities, markets, months)
  destColombo: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['destColombo']),
  destNegombo: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['destNegombo']),
  destBentota: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['destBentota']),
  destNuwaraEliya: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['destNuwaraEliya']),
  destAnuradhapura: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['destAnuradhapura']),
  destPolonnaruwa: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['destPolonnaruwa']),
  destTrincomalee: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['destTrincomalee']),
  destArugamBay: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['destArugamBay']),
  destKalpitiya: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['destKalpitiya']),
  guideWhaleWatching: () => import('../guides/whaleWatching').then((m) => m.WHALE_WATCHING_GUIDE),
  guideTrainJourneys: () => import('../guides/trainJourneys').then((m) => m.TRAIN_JOURNEYS_GUIDE),
  guideHoneymoon: () => import('../guides/honeymoon').then((m) => m.HONEYMOON_GUIDE),
  guideFamilyTours: () => import('../guides/familyTours').then((m) => m.FAMILY_TOURS_GUIDE),
  guideLuxuryTours: () => import('../guides/luxuryTours').then((m) => m.LUXURY_TOURS_GUIDE),
  guideAirportTransfers: () => import('../guides/airportTransfers').then((m) => m.AIRPORT_TRANSFERS_GUIDE),
  marketGermany: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['marketGermany']),
  marketFrance: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['marketFrance']),
  marketItaly: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['marketItaly']),
  marketSpain: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['marketSpain']),
  marketPoland: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['marketPoland']),
  marketRussia: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['marketRussia']),
  marketNetherlands: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['marketNetherlands']),
  marketUK: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['marketUK']),
  marketAustria: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['marketAustria']),
  marketSwitzerland: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['marketSwitzerland']),
  monthJanuary: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['monthJanuary']),
  monthFebruary: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['monthFebruary']),
  monthMarch: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['monthMarch']),
  monthApril: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['monthApril']),
  monthMay: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['monthMay']),
  monthJune: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['monthJune']),
  monthJuly: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['monthJuly']),
  monthAugust: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['monthAugust']),
  monthSeptember: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['monthSeptember']),
  monthOctober: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['monthOctober']),
  monthNovember: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['monthNovember']),
  monthDecember: () => import('./scaffolds').then((m) => m.SCAFFOLD_ARTICLES['monthDecember']),
};

/**
 * Resolves localized destination / guide articles for ArticlePageComponent
 * and StructuredDataService. Content is loaded on demand via dynamic import().
 */
@Injectable({ providedIn: 'root' })
export class ArticleContentService {
  private readonly i18n = inject(LocaleService);
  private readonly entries = new Map<string, ArticleContent>();
  private readonly inflight = new Map<string, Promise<ArticleContent | undefined>>();

  hasLoader(pageId: string): boolean {
    return pageId in ARTICLE_LOADERS;
  }

  /** Sync read — returns null until {@link preload} / {@link resolve} has run. */
  get(pageId: string, locale: Locale = this.i18n.locale()): BaseArticle | null {
    const entry = this.entries.get(pageId);
    if (!entry) {
      return null;
    }
    return this.localize(entry, locale);
  }

  async preload(pageId: string, locale: Locale = this.i18n.locale()): Promise<BaseArticle | null> {
    const entry = await this.loadEntry(pageId);
    if (!entry) {
      return null;
    }
    return this.localize(entry, locale);
  }

  async destinationHubCards(locale: Locale = this.i18n.locale()): Promise<ArticleHubCard[]> {
    const cards: ArticleHubCard[] = [];
    for (const meta of DEST_HUB_CARDS) {
      if (!this.hasLoader(meta.pageId)) {
        continue;
      }
      if (!isPageIndexable(getPage(meta.pageId), locale)) {
        continue;
      }
      const article = await this.preload(meta.pageId, locale);
      if (!article) {
        continue;
      }
      cards.push({
        pageId: meta.pageId,
        image: meta.image,
        title: article.h1,
        blurb: this.blurb(article.lead),
      });
    }
    return cards;
  }

  async guideHubCards(locale: Locale = this.i18n.locale()): Promise<ArticleHubCard[]> {
    const cards: ArticleHubCard[] = [];
    for (const meta of GUIDE_HUB_CARDS) {
      if (!this.hasLoader(meta.pageId)) {
        continue;
      }
      if (!isPageIndexable(getPage(meta.pageId), locale)) {
        continue;
      }
      const article = await this.preload(meta.pageId, locale);
      if (!article) {
        continue;
      }
      cards.push({
        pageId: meta.pageId,
        image: meta.image,
        title: article.h1,
        blurb: this.blurb(article.lead),
      });
    }
    return cards;
  }

  private localize(entry: ArticleContent, locale: Locale): BaseArticle {
    if (locale === DEFAULT_LOCALE) {
      return entry.en;
    }
    return localizeArticle(entry.en, entry[locale]);
  }

  private loadEntry(pageId: string): Promise<ArticleContent | undefined> {
    const cached = this.entries.get(pageId);
    if (cached) {
      return Promise.resolve(cached);
    }
    const pending = this.inflight.get(pageId);
    if (pending) {
      return pending;
    }
    const loader = ARTICLE_LOADERS[pageId];
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

  private blurb(lead: string, max = 140): string {
    const trimmed = lead.trim();
    if (trimmed.length <= max) {
      return trimmed;
    }
    const cut = trimmed.slice(0, max);
    const lastSpace = cut.lastIndexOf(' ');
    return `${(lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trim()}…`;
  }
}

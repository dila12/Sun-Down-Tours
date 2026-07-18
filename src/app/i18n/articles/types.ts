import type { Locale } from '../locales';

export interface FaqPair {
  q: string;
  a: string;
}

export interface ArticleSection {
  id: string;
  title: string;
  body: string;
  bullets?: string[];
}

export interface RelatedLink {
  pageId: string;
  label: string;
}

export interface BaseArticle {
  h1: string;
  lead: string;
  heroImage: string;
  heroAlt: string;
  sections: ArticleSection[];
  faq: FaqPair[];
  ctaTitle: string;
  ctaBody: string;
  ctaLabel: string;
  relatedTours: RelatedLink[];
  relatedDestinations: RelatedLink[];
  relatedGuides: RelatedLink[];
}

export interface ArticleL10n {
  h1?: string;
  lead?: string;
  heroAlt?: string;
  sections?: Partial<ArticleSection>[];
  faq?: FaqPair[];
  ctaTitle?: string;
  ctaBody?: string;
  ctaLabel?: string;
  relatedTours?: RelatedLink[];
  relatedDestinations?: RelatedLink[];
  relatedGuides?: RelatedLink[];
}

export type ArticleContent = {
  en: BaseArticle;
} & Partial<Record<Exclude<Locale, 'en'>, ArticleL10n>>;

export function localizeArticle(base: BaseArticle, l10n?: ArticleL10n): BaseArticle {
  if (!l10n) return base;
  return {
    ...base,
    h1: l10n.h1 ?? base.h1,
    lead: l10n.lead ?? base.lead,
    heroAlt: l10n.heroAlt ?? base.heroAlt,
    ctaTitle: l10n.ctaTitle ?? base.ctaTitle,
    ctaBody: l10n.ctaBody ?? base.ctaBody,
    ctaLabel: l10n.ctaLabel ?? base.ctaLabel,
    faq: l10n.faq ?? base.faq,
    relatedTours: l10n.relatedTours ?? base.relatedTours,
    relatedDestinations: l10n.relatedDestinations ?? base.relatedDestinations,
    relatedGuides: l10n.relatedGuides ?? base.relatedGuides,
    sections: base.sections.map((section, i) => {
      const overlay = l10n.sections?.[i];
      if (!overlay) return section;
      return {
        ...section,
        title: overlay.title ?? section.title,
        body: overlay.body ?? section.body,
        bullets: overlay.bullets ?? section.bullets,
      };
    }),
  };
}

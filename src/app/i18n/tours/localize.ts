import type { Locale } from '../locales';

/**
 * Locale-overlay system for tour itineraries.
 *
 * English (`en`) is the complete structural base (text + images + icons).
 * Other locales overlay visible text by index. Missing strings fall back to English.
 */
export interface TourActivityL10n {
  type?: string;
  title?: string;
  description?: string;
  extra?: string[];
}

export interface TourDayL10n {
  title?: string;
  activities?: TourActivityL10n[];
}

export interface TourL10n {
  title?: string;
  description?: string;
  overview?: string;
  duration?: string;
  persons?: string;
  tourType?: string;
  includes?: string[];
  excludes?: string[];
  days?: TourDayL10n[];
}

export interface BaseActivity {
  type?: string;
  title?: { title?: string; icon?: string; color?: string };
  description?: string;
  image?: string;
  extra?: string[];
}

export interface BaseDay {
  day: number;
  title: string;
  activities: BaseActivity[];
}

export interface BaseTour {
  title: string;
  description: string;
  duration: string;
  persons: string;
  tourType?: string;
  overview?: string;
  itinerary?: BaseDay[];
  includes?: string[];
  excludes?: string[];
  filecode?: string;
}

/**
 * Per-tour content: English is the full structural base; other locales overlay text.
 */
export type TourContent = {
  en: BaseTour;
} & Partial<Record<Exclude<Locale, 'en'>, TourL10n>>;

/**
 * Merges a localized overlay onto the English base tour, by index.
 * Returns a new object; the base is never mutated.
 */
export function localizeTour(base: BaseTour, l10n?: TourL10n): BaseTour {
  if (!l10n) {
    return base;
  }
  return {
    ...base,
    title: l10n.title ?? base.title,
    description: l10n.description ?? base.description,
    overview: l10n.overview ?? base.overview,
    duration: l10n.duration ?? base.duration,
    persons: l10n.persons ?? base.persons,
    tourType: l10n.tourType ?? base.tourType,
    includes: l10n.includes ?? base.includes,
    excludes: l10n.excludes ?? base.excludes,
    itinerary: base.itinerary?.map((day, di) => {
      const dl = l10n.days?.[di];
      if (!dl) {
        return day;
      }
      return {
        ...day,
        title: dl.title ?? day.title,
        activities: day.activities?.map((act, ai) => {
          const al = dl.activities?.[ai];
          if (!al) {
            return act;
          }
          return {
            ...act,
            type: al.type ?? act.type,
            title: { ...act.title, title: al.title ?? act.title?.title },
            description: al.description ?? act.description,
            extra: al.extra ?? act.extra,
          };
        }),
      };
    }),
  };
}

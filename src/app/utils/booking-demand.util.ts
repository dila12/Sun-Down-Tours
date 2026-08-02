import { getTourMetaByFilecode } from '../i18n/tours/catalog';

/** Shared per-tour demand / scarcity helpers for booking card + listing cards. */

export type DemandStatus = 'open' | 'blocked' | 'demand' | 'lastSpot';
export type CardDemandBadge = 'demand' | 'lastSpot' | null;
export type SpotsLeft = 1 | 2 | 3;

/** Calendar + warnings span ~4 months (advance booking window). */
export const DEMAND_HORIZON_DAYS = 120;
/** Listing card only lights up if a warning falls within the next ~4 days. */
export const CARD_NEAR_WINDOW_DAYS = 5; // today .. today+4 (inclusive)
/** Prefer featuring the warning closest to “today + 4 days”. */
export const CARD_FOCUS_OFFSET_DAYS = 4;

export interface DayDemandInfo {
  status: Exclude<DemandStatus, 'blocked'>;
  /** 1–3 when status is lastSpot; otherwise 0 */
  spotsLeft: 0 | SpotsLeft;
}

export interface TourDemandHint {
  iso: string;
  status: 'demand' | 'lastSpot';
  date: Date;
  spotsLeft: 0 | SpotsLeft;
}

export interface CardFeaturedWarning {
  date: Date;
  status: 'demand' | 'lastSpot';
  spotsLeft: 0 | SpotsLeft;
}

/**
 * Always resolve to stable pageId (e.g. tour4) so listing cards and booking
 * calendars share the same warning schedule.
 */
export function resolveDemandTourKey(
  pageId?: string | null,
  filecode?: string | null,
  fallback?: string | null,
): string {
  if (pageId && String(pageId).trim()) {
    return String(pageId).trim();
  }
  if (filecode && String(filecode).trim()) {
    const meta = getTourMetaByFilecode(String(filecode).trim());
    if (meta?.pageId) {
      return meta.pageId;
    }
    return String(filecode).trim();
  }
  if (fallback && String(fallback).trim()) {
    return String(fallback).trim();
  }
  return 'tour';
}

export function toIsoDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function parseIsoLocal(iso: string): Date {
  const [y, m, d] = iso.split('-').map((n) => parseInt(n, 10));
  return new Date(y, m - 1, d);
}

export function isoWeekSeed(date: Date): number {
  const tmp = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  tmp.setDate(tmp.getDate() + 3 - ((tmp.getDay() + 6) % 7));
  const week1 = new Date(tmp.getFullYear(), 0, 4);
  const week =
    1 +
    Math.round(
      ((tmp.getTime() - week1.getTime()) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7,
    );
  return tmp.getFullYear() * 100 + week;
}

export function monthSeed(date: Date): number {
  return date.getFullYear() * 100 + (date.getMonth() + 1);
}

function hashString(value: string): number {
  let h = 2166136261;
  for (let i = 0; i < value.length; i++) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function daysFrom(from: Date, to: Date): number {
  const a = startOfDay(from).getTime();
  const b = startOfDay(to).getTime();
  return Math.round((b - a) / 86400000);
}

function addDays(from: Date, days: number): Date {
  const d = startOfDay(from);
  d.setDate(d.getDate() + days);
  return d;
}

/** Fri / Sat / Sun — common private-tour start days (slightly denser warnings). */
function isNiceTravelStart(date: Date): boolean {
  const dow = date.getDay();
  return dow === 0 || dow === 5 || dow === 6;
}

/**
 * Lifetime-stable scarcity for one tour + one calendar date.
 * Same inputs always produce the same result (today, tomorrow, or in 4 months).
 * Sparse on purpose so most days stay quiet.
 */
export function dayDemandFor(
  tourKey: string,
  date: Date,
  now = new Date(),
): DayDemandInfo {
  const key = tourKey || 'tour';
  const today = startOfDay(now);
  const offset = daysFrom(today, date);
  if (offset < 0 || offset >= DEMAND_HORIZON_DAYS) {
    return { status: 'open', spotsLeft: 0 };
  }

  const iso = toIsoDate(date);
  const h = hashString(`${key}|${iso}`);

  // ~8% weekdays / ~17% Fri–Sun get a signal → ~10–15 flagged days / 4 months
  const mod = h % 12;
  const limit = isNiceTravelStart(date) ? 2 : 1;
  if (mod >= limit) {
    return { status: 'open', spotsLeft: 0 };
  }

  // Among flagged days: high demand vs few spots left (1, 2, or 3)
  const kind = (h >>> 4) % 100;
  if (kind < 45) {
    return { status: 'demand', spotsLeft: 0 };
  }
  const spots = ((((h >>> 8) % 3) + 1) as SpotsLeft);
  return { status: 'lastSpot', spotsLeft: spots };
}

/**
 * Card / default date: only if a warning exists in the next ~4 days.
 * Picks the one closest to “today + 4”. If none in that window → no card warning
 * (even if later months have colored calendar days).
 */
export function cardFeaturedWarning(
  tourKey: string,
  now = new Date(),
): CardFeaturedWarning | null {
  const today = startOfDay(now);
  let best: CardFeaturedWarning | null = null;
  let bestScore = Number.POSITIVE_INFINITY;
  let bestOffset = Number.POSITIVE_INFINITY;

  for (let i = 0; i < CARD_NEAR_WINDOW_DAYS; i++) {
    const date = addDays(today, i);
    const info = dayDemandFor(tourKey, date, now);
    if (info.status === 'open') {
      continue;
    }
    const score = Math.abs(i - CARD_FOCUS_OFFSET_DAYS);
    if (score < bestScore || (score === bestScore && i < bestOffset)) {
      bestScore = score;
      bestOffset = i;
      best = {
        date,
        status: info.status,
        spotsLeft: info.spotsLeft,
      };
    }
  }

  return best;
}

export function demandInfoForDate(
  date: Date,
  tourKey: string,
  blockedDates: ReadonlySet<string> = new Set(),
  now = new Date(),
): { status: DemandStatus; spotsLeft: 0 | SpotsLeft } {
  const iso = toIsoDate(date);
  if (blockedDates.has(iso)) {
    return { status: 'blocked', spotsLeft: 0 };
  }
  return dayDemandFor(tourKey, date, now);
}

export function demandStatusForDate(
  date: Date,
  tourKey: string,
  blockedDates: ReadonlySet<string> = new Set(),
  now = new Date(),
): DemandStatus {
  return demandInfoForDate(date, tourKey, blockedDates, now).status;
}

export function spotsLeftForDate(
  date: Date,
  tourKey: string,
  now = new Date(),
): 0 | SpotsLeft {
  return dayDemandFor(tourKey, date, now).spotsLeft;
}

/** Listing ribbon from the near-window featured warning only. */
export function cardDemandBadge(tourKey: string, now = new Date()): CardDemandBadge {
  const featured = cardFeaturedWarning(tourKey, now);
  return featured?.status ?? null;
}

export function nextCardBadgeDate(
  _badge: CardDemandBadge,
  tourKey = 'tour',
  now = new Date(),
): Date | null {
  return cardFeaturedWarning(tourKey, now)?.date ?? null;
}

/** Spots (1–3) for the listing card ribbon when it shows lastSpot. */
export function cardSpotsLeft(tourKey: string, now = new Date()): 0 | SpotsLeft {
  const featured = cardFeaturedWarning(tourKey, now);
  if (!featured || featured.status !== 'lastSpot') {
    return 0;
  }
  return featured.spotsLeft;
}

/** Prefill booking date from the card’s featured near-window warning. */
export function defaultBookingDateForTour(tourKey: string, now = new Date()): Date | null {
  return cardFeaturedWarning(tourKey, now)?.date ?? null;
}

/** All flagged dates in the 4-month horizon (for calendar coloring). */
export function listTourDemandHints(tourKey: string, now = new Date()): TourDemandHint[] {
  const today = startOfDay(now);
  const items: TourDemandHint[] = [];
  for (let i = 0; i < DEMAND_HORIZON_DAYS; i++) {
    const date = addDays(today, i);
    const info = dayDemandFor(tourKey, date, now);
    if (info.status === 'open') {
      continue;
    }
    items.push({
      iso: toIsoDate(date),
      status: info.status,
      date,
      spotsLeft: info.spotsLeft,
    });
  }
  return items;
}

/** @deprecated kept for any leftover callers — prefer listTourDemandHints / dayDemandFor */
export interface TourWarningSchedule {
  demand: string[];
  lastSpot: string[];
}

export function getTourWarningSchedule(tourKey: string, now = new Date()): TourWarningSchedule {
  const demand: string[] = [];
  const lastSpot: string[] = [];
  for (const hint of listTourDemandHints(tourKey, now)) {
    if (hint.status === 'demand') {
      demand.push(hint.iso);
    } else {
      lastSpot.push(hint.iso);
    }
  }
  return { demand, lastSpot };
}

export function bookingsLeftLeadKey(spots: 0 | SpotsLeft): string {
  const n = spots === 2 || spots === 3 ? spots : 1;
  return `common.booking.bookingsLeftLead${n}`;
}

export function bookingsLeftDetailKey(spots: 0 | SpotsLeft): string {
  const n = spots === 2 || spots === 3 ? spots : 1;
  return `common.booking.bookingsLeftDetail${n}`;
}

export function formatShortCardDate(date: Date, locale = 'en'): string {
  try {
    return new Intl.DateTimeFormat(locale, { month: 'short', day: 'numeric' }).format(date);
  } catch {
    return toIsoDate(date);
  }
}

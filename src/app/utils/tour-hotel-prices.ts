/**
 * 3 star package totals (USD) by traveler count for multi day tours.
 * Existing US{filecode}.json `price` tiers remain the 4 star package.
 */
export type HotelStar = '3' | '4';
export type GuideLanguage = 'english' | 'german' | 'russian' | 'polish';

export const GUIDE_LANGUAGES: readonly GuideLanguage[] = [
  'english',
  'german',
  'russian',
  'polish',
] as const;

/** USD deducted from package total when the guest chooses without guide. */
export const GUIDE_DAILY_FEE_USD = 15;

type TierMap = Readonly<Record<string, number>>;

const THREE_STAR_BY_FILECODE: Record<string, TierMap> = {
  '7-day-sri-lanka-tour': {
    '1': 1060,
    '2': 1280,
    '3': 1760,
    '4': 2300,
    '5': 2600,
    '6': 2900,
  },
  '8-day-sri-lanka-private-tour': {
    '1': 1215,
    '2': 1620,
    '3': 1954,
    '4': 2490,
    '5': 2730,
    '6': 3100,
  },
  '10-day-sri-lanka-tour': {
    '1': 1530,
    '2': 1890,
    '3': 2190,
    '4': 2760,
    '5': 3200,
    '6': 3440,
  },
  '6-day-sri-lanka-private-tour': {
    '1': 1010,
    '2': 1190,
    '3': 1570,
    '4': 1890,
    '5': 2180,
    '6': 2360,
  },
  '5-day-sri-lanka-tour': {
    '1': 920,
    '2': 1190,
    '3': 1480,
    '4': 1780,
    '5': 2090,
    '6': 2270,
  },
  '4-day-sri-lanka-tour': {
    '1': 800,
    '2': 990,
    '3': 1190,
    '4': 1490,
    '5': 1780,
    '6': 2020,
  },
  '2-day-ella-yala-private-tour-sri-lanka': {
    '1': 340,
    '2': 420,
    '3': 520,
    '4': 630,
    '5': 740,
    '6': 880,
  },
  '2-day-ella-kandy-private-tour-sri-lanka': {
    '1': 360,
    '2': 440,
    '3': 540,
    '4': 650,
    '5': 760,
    '6': 900,
  },
};

export function hasThreeStarPricing(filecode: string | null | undefined): boolean {
  return !!THREE_STAR_BY_FILECODE[String(filecode ?? '')];
}

export function threeStarPackageTotal(
  filecode: string | null | undefined,
  travelers: number,
): number {
  const tiers = THREE_STAR_BY_FILECODE[String(filecode ?? '')];
  if (!tiers) {
    return 0;
  }
  return tiers[String(travelers)] ?? 0;
}

export function guideDiscountUsd(tourDays: number, withGuide: boolean): number {
  if (withGuide || tourDays < 1) {
    return 0;
  }
  return GUIDE_DAILY_FEE_USD * tourDays;
}

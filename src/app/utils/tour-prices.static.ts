/**
 * Sync 2-person tour prices (USD) for JSON-LD Offer schema.
 * Source of truth remains assets/data/US{filecode}.json — keep in sync when prices change.
 */
export const TOUR_OFFER_CURRENCY = 'USD' as const;

/** pageId → 2-person package price in USD */
export const TOUR_PRICE_2P_USD: Readonly<Record<string, number>> = {
  ellaDay: 350,
  galleDay: 190,
  kandyDay: 250,
  sigiriyaDay: 266,
  tour2ey: 550,
  tour2ek: 570,
  tour4: 1300,
  tour5: 1400,
  tour6: 1500,
  tour7: 1575,
  tour8: 1990,
  tour10: 2200,
};

export function getTourOfferPriceUsd(pageId: string): number | undefined {
  const price = TOUR_PRICE_2P_USD[pageId];
  return price > 0 ? price : undefined;
}

/** Approximate EUR display helper — backend/price JSON stays USD. */
export const USD_TO_EUR_RATE = 0.92;

export function formatTourPriceEur(usd: number): string {
  const eur = Math.round(usd * USD_TO_EUR_RATE);
  return `€${eur}`;
}

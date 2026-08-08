const GA_MEASUREMENT_ID = 'G-MLGT0JLHNQ';
/**
 * Real Google Ads conversion ID only — never ship the placeholder AW-1234567890.
 * Leave empty until a production Ads account ID is configured.
 */
const GOOGLE_ADS_ID: string = '';
const CONSENT_KEY = 'google_consent';

type ConsentValue = 'granted' | 'denied';

type ConsentState = {
  analytics_storage: ConsentValue;
  ad_storage: ConsentValue;
  ad_user_data: ConsentValue;
  ad_personalization: ConsentValue;
};

const DENIED_CONSENT: ConsentState = {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
};

const GRANTED_CONSENT: ConsentState = {
  analytics_storage: 'granted',
  ad_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
};

let gaLoading = false;
let gaReady = false;
let speedInsightsInjected = false;

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

function ensureGtag(): void {
  if (!isBrowser()) {
    return;
  }

  window.dataLayer = window.dataLayer || [];

  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }
}

function getStoredConsent(): ConsentState | null {
  if (!isBrowser()) {
    return null;
  }
  try {
    const value = localStorage.getItem(CONSENT_KEY);

    if (!value) {
      return null;
    }

    const parsed = JSON.parse(value);

    const valid =
      (parsed.analytics_storage === 'granted' || parsed.analytics_storage === 'denied') &&
      (parsed.ad_storage === 'granted' || parsed.ad_storage === 'denied') &&
      (parsed.ad_user_data === 'granted' || parsed.ad_user_data === 'denied') &&
      (parsed.ad_personalization === 'granted' || parsed.ad_personalization === 'denied');

    return valid ? (parsed as ConsentState) : null;
  } catch {
    return null;
  }
}

function analyticsAllowed(consent: ConsentState | null): boolean {
  return consent?.analytics_storage === 'granted';
}

/** Consent Mode v2 defaults: deny until the visitor chooses. */
export function initializeGoogleConsent(): void {
  if (!isBrowser()) {
    return;
  }
  ensureGtag();
  window.gtag?.('consent', 'default', DENIED_CONSENT);
  window.gtag?.('set', 'ads_data_redaction', true);
  window.gtag?.('set', 'url_passthrough', true);

  const storedConsent = getStoredConsent();
  if (storedConsent) {
    window.gtag?.('consent', 'update', storedConsent);
  }
}

export function initializeGoogleAnalytics(): void {
  if (!isBrowser() || gaLoading || gaReady) {
    return;
  }

  // Do not fetch 185KB gtag.js until analytics is actually allowed (PSI + first paint).
  if (!analyticsAllowed(getStoredConsent())) {
    return;
  }

  gaLoading = true;
  ensureGtag();
  const existingScript = document.querySelector(
    `script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`,
  );

  if (existingScript) {
    configureGoogleTags();
    gaReady = true;
    gaLoading = false;
    requestAnimationFrame(() => trackPageView());
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.onload = () => {
    window.gtag?.('js', new Date());
    const consent = getStoredConsent() ?? DENIED_CONSENT;
    window.gtag?.('consent', 'update', consent);
    configureGoogleTags();
    gaReady = true;
    gaLoading = false;
    if (analyticsAllowed(consent)) {
      trackPageView();
    }
  };
  script.onerror = () => {
    gaLoading = false;
  };
  document.head.appendChild(script);
}

function configureGoogleTags(): void {
  window.gtag?.('config', GA_MEASUREMENT_ID, {
    send_page_view: false,
  });
  if (GOOGLE_ADS_ID && !GOOGLE_ADS_ID.includes('1234567890')) {
    window.gtag?.('config', GOOGLE_ADS_ID);
  }
}

export function trackBookingConversion(
  orderNumber: string,
  value: number,
  _currency: string = 'USD',
): void {
  if (!isBrowser() || !orderNumber || value <= 0) {
    return;
  }
  if (!analyticsAllowed(getStoredConsent())) {
    return;
  }
  ensureGtag();
  const conversionKey = `booking_conversion_${orderNumber}`;

  if (sessionStorage.getItem(conversionKey)) {
    return;
  }

  // Conversion send_to requires a real Ads ID + label — intentionally not wired to a placeholder.
  sessionStorage.setItem(conversionKey, 'true');
}

export function hasConsentChoice(): boolean {
  return getStoredConsent() !== null;
}

export function acceptAnalyticsConsent(): void {
  if (!isBrowser()) {
    return;
  }

  ensureGtag();
  localStorage.setItem(CONSENT_KEY, JSON.stringify(GRANTED_CONSENT));
  window.gtag?.('consent', 'update', GRANTED_CONSENT);
  initializeGoogleAnalytics();
  initializeSpeedInsights();
}

export function rejectAnalyticsConsent(): void {
  if (!isBrowser()) {
    return;
  }

  ensureGtag();
  localStorage.setItem(CONSENT_KEY, JSON.stringify(DENIED_CONSENT));
  window.gtag?.('consent', 'update', DENIED_CONSENT);
}

/**
 * Vercel Speed Insights — samples Core Web Vitals on production only.
 * Loads after analytics consent; no-op in local development.
 */
export function initializeSpeedInsights(): void {
  if (!isBrowser() || speedInsightsInjected) {
    return;
  }
  if (!analyticsAllowed(getStoredConsent())) {
    return;
  }

  speedInsightsInjected = true;
  void import('@vercel/speed-insights')
    .then(({ injectSpeedInsights }) => {
      injectSpeedInsights();
    })
    .catch(() => {
      speedInsightsInjected = false;
    });
}

export function trackPageView(): void {
  if (!isBrowser()) {
    return;
  }
  if (!analyticsAllowed(getStoredConsent())) {
    return;
  }

  const pageData = {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname + window.location.search,
  };

  window.gtag?.('config', GA_MEASUREMENT_ID, {
    page_title: pageData.page_title,
    page_location: pageData.page_location,
    page_path: pageData.page_path,
  });
}

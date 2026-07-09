const GA_MEASUREMENT_ID = 'G-KVF224182X';
const GOOGLE_ADS_ID = 'AW-371326404';
const BOOKING_CONVERSION_LABEL = 'XyZabc123DEFghiJK';
const CONSENT_KEY = 'google_consent';

type ConsentValue = 'granted' | 'denied';

type ConsentState = {
  analytics_storage: ConsentValue;
  ad_storage: ConsentValue;
  ad_user_data: ConsentValue;
  ad_personalization: ConsentValue;
};

let gaLoading = false;
let gaReady = false;

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

function isBrowser(): boolean {
  return typeof window !== 'undefined' &&
         typeof document !== 'undefined';
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
      (parsed.analytics_storage === 'granted' ||
       parsed.analytics_storage === 'denied') &&
      (parsed.ad_storage === 'granted' ||
       parsed.ad_storage === 'denied') &&
      (parsed.ad_user_data === 'granted' ||
       parsed.ad_user_data === 'denied') &&
      (parsed.ad_personalization === 'granted' ||
       parsed.ad_personalization === 'denied');

    return valid ? parsed as ConsentState : null;
  } catch {
    return null;
  }
}


/* =========================================================
   1. CONSENT MODE V2 DEFAULT
   MUST RUN BEFORE GOOGLE TAG CONFIG / EVENTS
========================================================= */

export function initializeGoogleConsent(): void {
  if (!isBrowser()) {
    return;
  }

  ensureGtag();

  // Always establish the default consent state first
  window.gtag?.('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });

  // Privacy protection for advertising data
  window.gtag?.('set', 'ads_data_redaction', true);

  // Restore the visitor's saved choice
  const storedConsent = getStoredConsent();

  if (storedConsent) {
    window.gtag?.('consent', 'update', storedConsent);
  }
}


/* =========================================================
   2. LOAD GOOGLE ANALYTICS
========================================================= */

export function initializeGoogleAnalytics(): void {
  if (!isBrowser() || gaLoading || gaReady) {
    return;
  }

  gaLoading = true;

  ensureGtag();

  // Consent default/update is already queued before these
  window.gtag?.('js', new Date());

  window.gtag?.('config', GA_MEASUREMENT_ID, {
    send_page_view: false
  });

  window.gtag?.('config', GOOGLE_ADS_ID);

  const existingScript = document.querySelector(
    `script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`
  );

  if (existingScript) {
    gaReady = true;
    gaLoading = false;
    return;
  }

  const script = document.createElement('script');

  script.async = true;
  script.src =
    `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

  script.onload = () => {
    gaReady = true;
    gaLoading = false;

    console.log('GA4 Consent Mode v2 active');

    // One initial page view only
    trackPageView();
  };

  script.onerror = () => {
    gaLoading = false;

    console.error('GA4 failed to load');
  };

  document.head.appendChild(script);
}

export function trackBookingConversion(
  orderNumber: string,
  value: number,
  currency: string = 'USD'
): void {
  if (!isBrowser() || !orderNumber || value <= 0) {
    return;
  }

  ensureGtag();

  const conversionKey = `booking_conversion_${orderNumber}`;

  // Prevent duplicate conversions if the success page is reopened
  if (sessionStorage.getItem(conversionKey)) {
    console.log('Booking conversion already tracked:', orderNumber);
    return;
  }

  window.gtag?.('event', 'conversion', {
    send_to: `${GOOGLE_ADS_ID}/${BOOKING_CONVERSION_LABEL}`,
    value: value,
    currency: currency,
    transaction_id: orderNumber
  });

  sessionStorage.setItem(conversionKey, 'true');

  console.log('Google Ads booking conversion tracked:', {
    orderNumber,
    value,
    currency
  });
}


/* =========================================================
   3. CHECK SAVED CHOICE
========================================================= */

export function hasConsentChoice(): boolean {
  return getStoredConsent() !== null;
}


/* =========================================================
   4. ACCEPT ANALYTICS
========================================================= */

export function acceptAnalyticsConsent(): void {
  if (!isBrowser()) {
    return;
  }

  ensureGtag();

  const consent: ConsentState = {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  };

  localStorage.setItem(
    CONSENT_KEY,
    JSON.stringify(consent)
  );

  // Must happen immediately on the current page
  window.gtag?.('consent', 'update', consent);

  console.log('Analytics consent granted');

  // Re-fire page view so the initial landing page is fully tracked after consent
  trackPageView();
}


/* =========================================================
   5. REJECT ANALYTICS
========================================================= */

export function rejectAnalyticsConsent(): void {
  if (!isBrowser()) {
    return;
  }

  ensureGtag();

  const consent: ConsentState = {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  };

  localStorage.setItem(
    CONSENT_KEY,
    JSON.stringify(consent)
  );

  // Must happen immediately on the current page
  window.gtag?.('consent', 'update', consent);

  console.log('Analytics consent denied');
}


/* =========================================================
   6. SPA PAGE VIEWS
========================================================= */

export function trackPageView(): void {
  if (!isBrowser() || !gaReady) {
    return;
  }

  window.gtag?.('event', 'page_view', {
    send_to: GA_MEASUREMENT_ID,
    page_title: document.title,
    page_location: window.location.href,
    page_path:
      window.location.pathname +
      window.location.search
  });
}

export function loadGoogleTranslate(onReady?: () => void): void {
  if (typeof document === 'undefined') return;

  const w = window as Window & { google?: { translate: { TranslateElement: new (opts: object, id: string) => void } } };

  if (w.google?.translate) {
    onReady?.();
    return;
  }

  if (document.querySelector('script[data-google-translate]')) {
    const poll = setInterval(() => {
      if (w.google?.translate) {
        clearInterval(poll);
        onReady?.();
      }
    }, 200);
    setTimeout(() => clearInterval(poll), 10000);
    return;
  }

  (window as Window & { googleTranslateElementInit?: () => void }).googleTranslateElementInit = () => {
    const google = (window as Window & { google?: { translate: { TranslateElement: new (opts: object, id: string) => void } } }).google;
    if (!google?.translate) return;
    new google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        includedLanguages: 'en,de,it,fr,es,zh-CN,ru,pl',
        autoDisplay: false,
      },
      'google_translate_element',
    );

    onReady?.();
  };

  const s = document.createElement('script');
  s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  s.async = true;
  s.setAttribute('data-google-translate', 'true');
  document.body.appendChild(s);
}

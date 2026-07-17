const GA_MEASUREMENT_ID = 'G-KVF224182X';
const GOOGLE_ADS_ID = 'AW-1234567890';
// const BOOKING_CONVERSION_LABEL = 'XyZabc123DEFghiJK';
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

export function initializeGoogleConsent(): void {
  if (!isBrowser()) {
    return;
  }
  ensureGtag();
  window.gtag?.('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted'
  });

  window.gtag?.('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted'
  });

  window.gtag?.('set', 'ads_data_redaction', true);
  const storedConsent = getStoredConsent();

  if (storedConsent) {
    window.gtag?.('consent', 'update', storedConsent);
  }
}

export function initializeGoogleAnalytics(): void {
  if (!isBrowser() || gaLoading || gaReady) {
    return;
  }
  gaLoading = true;
  ensureGtag();
  const existingScript = document.querySelector(
    `script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`
  );

  if (existingScript) {
    configureGoogleTags();
    gaReady = true;
    gaLoading = false;
    requestAnimationFrame(() => {
      trackPageView();
    });
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.onload = () => {
    window.gtag?.('js', new Date());
    const consent = getStoredConsent();
    if (consent) {
      window.gtag?.('consent', 'default', consent);
    } else {
      window.gtag?.('consent', 'default', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted'
      });

      window.gtag?.('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted'
      });
    }

    window.gtag?.('config', GA_MEASUREMENT_ID, {
      send_page_view: false
    });

    window.gtag?.('config', GOOGLE_ADS_ID);

    gaReady = true;
    gaLoading = false;
  };
  script.onerror = () => {
    gaLoading = false;
  };
  document.head.appendChild(script);
}

function configureGoogleTags(): void {
  window.gtag?.('js', new Date());
  window.gtag?.('config', GA_MEASUREMENT_ID, {
    send_page_view: false
  });
  window.gtag?.('config', GOOGLE_ADS_ID);
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

  if (sessionStorage.getItem(conversionKey)) {
    return;
  }

  // window.gtag?.('event', 'conversion', {
  //   send_to: `${GOOGLE_ADS_ID}/${BOOKING_CONVERSION_LABEL}`,
  //   value: value,
  //   currency: currency,
  //   transaction_id: orderNumber
  // });
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

  const consent: ConsentState = {
    analytics_storage: 'granted',
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted'
  };

  localStorage.setItem(
    CONSENT_KEY,
    JSON.stringify(consent)
  );

  window.gtag?.('consent', 'update', consent);

  trackPageView();
}

export function rejectAnalyticsConsent(): void {
  if (!isBrowser()) {
    return;
  }

  ensureGtag();

  const consent: ConsentState = {
    analytics_storage: 'granted',
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted'
  };

  localStorage.setItem(
    CONSENT_KEY,
    JSON.stringify(consent)
  );

  window.gtag?.('consent', 'update', consent);

  trackPageView();
}

export function trackPageView(): void {

  if (!isBrowser()) {
    return;
  }

  const pageData = {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname + window.location.search
  };

  window.gtag?.('config', GA_MEASUREMENT_ID, {
    page_title: pageData.page_title,
    page_location: pageData.page_location,
    page_path: pageData.page_path
  });

  //window.gtag?.('config', GOOGLE_ADS_ID);
}
let googleTranslateElementCreated = false;
const googleTranslateReadyCallbacks: Array<() => void> = [];

function flushGoogleTranslateReady(): void {
  const cbs = googleTranslateReadyCallbacks.splice(0);
  cbs.forEach((cb) => cb());
}

function ensureGoogleTranslateElement(): void {
  const google = (window as Window & {
    google?: { translate: { TranslateElement: new (opts: object, id: string) => void } };
  }).google;
  if (!google?.translate) return;

  const host = document.getElementById('google_translate_element');
  if (googleTranslateElementCreated || (host && host.childElementCount > 0)) {
    googleTranslateElementCreated = true;
    return;
  }

  new google.translate.TranslateElement(
    {
      pageLanguage: 'en',
      includedLanguages: 'en,de,it,fr,es,zh-CN,ru,pl',
      autoDisplay: false,
    },
    'google_translate_element',
  );
  googleTranslateElementCreated = true;
}

export function loadGoogleTranslate(onReady?: () => void): void {
  if (typeof document === 'undefined') return;

  if (onReady) {
    googleTranslateReadyCallbacks.push(onReady);
  }

  const w = window as Window & {
    google?: { translate: { TranslateElement: new (opts: object, id: string) => void } };
  };

  if (w.google?.translate) {
    ensureGoogleTranslateElement();
    flushGoogleTranslateReady();
    return;
  }

  if (document.querySelector('script[data-google-translate]')) {
    const poll = setInterval(() => {
      if (w.google?.translate) {
        clearInterval(poll);
        ensureGoogleTranslateElement();
        flushGoogleTranslateReady();
      }
    }, 200);
    setTimeout(() => clearInterval(poll), 10000);
    return;
  }

  (window as Window & { googleTranslateElementInit?: () => void }).googleTranslateElementInit = () => {
    ensureGoogleTranslateElement();
    flushGoogleTranslateReady();
  };

  const s = document.createElement('script');
  s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  s.async = true;
  s.setAttribute('data-google-translate', 'true');
  document.body.appendChild(s);
}
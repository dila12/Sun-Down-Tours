const GA_MEASUREMENT_ID = 'G-KVF224182X';
const CONSENT_KEY = 'analytics_consent';

type ConsentChoice = 'granted' | 'denied';

let gaInitialized = false;

declare global {
  interface Window {
    dataLayer: IArguments[];
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

function getStoredConsent(): ConsentChoice | null {
  if (!isBrowser()) {
    return null;
  }

  const value = localStorage.getItem(CONSENT_KEY);

  return value === 'granted' || value === 'denied'
    ? value
    : null;
}

export function initializeGoogleConsent(): void {
  if (!isBrowser()) {
    return;
  }

  ensureGtag();

  const consent = getStoredConsent();

  window.gtag?.('consent', 'default', {
    analytics_storage:
      consent === 'granted' ? 'granted' : 'denied',

    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',

    wait_for_update: 500
  });
}

export function scheduleThirdPartyScripts(): void {
  if (!isBrowser() || gaInitialized) {
    return;
  }

  gaInitialized = true;

  ensureGtag();

  // IMPORTANT: queue initialization BEFORE adding the script
  window.gtag?.('js', new Date());

  window.gtag?.('config', GA_MEASUREMENT_ID, {
    send_page_view: false
  });

  const existingScript = document.querySelector(
    `script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`
  );

  if (!existingScript) {
    const script = document.createElement('script');

    script.async = true;
    script.src =
      `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

    script.onload = () => {
      console.log('GA4 script loaded successfully');

      // Send initial page view after library is available
      trackPageView();
    };

    script.onerror = () => {
      console.error('GA4 script failed to load');
    };

    document.head.appendChild(script);
  }
}

export function hasConsentChoice(): boolean {
  return getStoredConsent() !== null;
}

export function acceptAnalyticsConsent(): void {
  if (!isBrowser()) {
    return;
  }

  ensureGtag();

  localStorage.setItem(CONSENT_KEY, 'granted');

  window.gtag?.('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });

  console.log('Analytics consent granted');

  // Send event after consent update has been queued
  window.gtag?.('event', 'page_view', {
    send_to: GA_MEASUREMENT_ID,
    page_title: document.title,
    page_location: window.location.href,
    page_path:
      window.location.pathname +
      window.location.search
  });
}

export function rejectAnalyticsConsent(): void {
  if (!isBrowser()) {
    return;
  }

  ensureGtag();

  localStorage.setItem(CONSENT_KEY, 'denied');

  window.gtag?.('consent', 'update', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });
}

export function trackPageView(): void {
  if (!isBrowser()) {
    return;
  }

  ensureGtag();

  console.log('Sending GA4 page_view');

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

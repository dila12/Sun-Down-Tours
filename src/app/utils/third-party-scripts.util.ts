/** Deferred Google Analytics + Consent Mode */

const GA_MEASUREMENT_ID = 'G-KVF224182X';
const CONSENT_KEY = 'analytics_consent';

type ConsentChoice = 'granted' | 'denied';

let analyticsLoaded = false;
let analyticsLoading = false;
let userInteracted = false;

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}


/**
 * STEP 1
 * Call this immediately when your Angular app starts.
 *
 * IMPORTANT:
 * This does NOT download gtag.js.
 * It only creates the local dataLayer and sets consent defaults.
 */
export function initializeGoogleConsent(): void {
  if (!isBrowser()) return;

  window.dataLayer = window.dataLayer || [];

  window.gtag ??= (...args: any[]) => {
    window.dataLayer.push(args);
  };

  const savedConsent =
    localStorage.getItem(CONSENT_KEY) as ConsentChoice | null;

  window.gtag?.('consent', 'default', {
    analytics_storage:
      savedConsent === 'granted' ? 'granted' : 'denied',

    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',

    wait_for_update: 500
  });
}

/**
 * STEP 2
 * Call when visitor clicks "Accept Analytics" or "Accept All".
 */
export function acceptAnalyticsConsent(): void {
  if (!isBrowser()) return;

  localStorage.setItem(CONSENT_KEY, 'granted');

  window.gtag?.('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });

  if (userInteracted) {
    loadGoogleAnalytics();
  }
}

export function rejectAnalyticsConsent(): void {
  if (!isBrowser()) return;

  localStorage.setItem(CONSENT_KEY, 'denied');

  window.gtag?.('consent', 'update', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });
}

/**
 * Use this to decide whether your cookie banner should be visible.
 */
export function hasConsentChoice(): boolean {

  if (!isBrowser()) return false;

  return localStorage.getItem(CONSENT_KEY) !== null;
}


/**
 * STEP 3
 * Wait for a real user interaction.
 */
export function scheduleThirdPartyScripts(): void {

  if (!isBrowser() || analyticsLoaded || analyticsLoading) {
    return;
  }

  const handleInteraction = () => {

    userInteracted = true;

    removeListeners();

    const consent = localStorage.getItem(CONSENT_KEY);

    // Only load full Google Analytics after consent is granted
    if (consent === 'granted') {
      loadGoogleAnalytics();
    }
  };

  const removeListeners = () => {
    window.removeEventListener('pointerdown', handleInteraction);
    window.removeEventListener('scroll', handleInteraction);
    window.removeEventListener('touchstart', handleInteraction);
    window.removeEventListener('keydown', handleInteraction);
  };

  window.addEventListener('pointerdown', handleInteraction, {
    once: true,
    passive: true
  });

  window.addEventListener('scroll', handleInteraction, {
    once: true,
    passive: true
  });

  window.addEventListener('touchstart', handleInteraction, {
    once: true,
    passive: true
  });

  window.addEventListener('keydown', handleInteraction, {
    once: true
  });
}


/**
 * STEP 4
 * Load the actual external Google Analytics script.
 */
export function loadGoogleAnalytics(onLoaded?: () => void): void {

  if (!isBrowser() || analyticsLoaded || analyticsLoading) {
    onLoaded?.();
    return;
  }

  // Safety check: never load analytics without consent
  if (localStorage.getItem(CONSENT_KEY) !== 'granted') {
    return;
  }

  if (document.querySelector('script[data-gtag]')) {
    analyticsLoaded = true;
    onLoaded?.();
    return;
  }

  analyticsLoading = true;

  const script = document.createElement('script');

  script.src =
    `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

  script.async = true;
  script.setAttribute('data-gtag', 'true');

  script.onload = () => {

    window.gtag?.('js', new Date());

    window.gtag?.('config', GA_MEASUREMENT_ID, {
      send_page_view: false,
      transport_type: 'beacon'
    });

    analyticsLoaded = true;
    analyticsLoading = false;

    trackPageView();

    onLoaded?.();
  };

  script.onerror = () => {
    analyticsLoading = false;
  };

  document.head.appendChild(script);
}


/**
 * Angular SPA page tracking
 */
export function trackPageView(): void {

  if (!isBrowser() || !analyticsLoaded || !window.gtag) {
    return;
  }

  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname
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

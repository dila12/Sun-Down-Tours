const GA_MEASUREMENT_ID = 'G-KVF224182X';
const CONSENT_KEY = 'analytics_consent';

type ConsentChoice = 'granted' | 'denied';

let analyticsLoaded = false;
let analyticsLoading = false;

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

export function initializeGoogleConsent(): void {
  if (!isBrowser()) return;

  window.dataLayer = window.dataLayer || [];

  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }

  const savedConsent =
    localStorage.getItem(CONSENT_KEY) as ConsentChoice | null;

  window.gtag('consent', 'default', {
    analytics_storage:
      savedConsent === 'granted' ? 'granted' : 'denied',

    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',

    wait_for_update: 500
  });
}

export function acceptAnalyticsConsent(): void {
  if (!isBrowser()) return;

  localStorage.setItem(CONSENT_KEY, 'granted');

  window.gtag?.('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });

  loadGoogleAnalytics();
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

export function hasConsentChoice(): boolean {
  if (!isBrowser()) return false;

  return localStorage.getItem(CONSENT_KEY) !== null;
}

export function scheduleThirdPartyScripts(): void {
  if (!isBrowser()) return;

  const loadForReturningVisitor = () => {
    removeListeners();

    if (localStorage.getItem(CONSENT_KEY) === 'granted') {
      loadGoogleAnalytics();
    }
  };

  const removeListeners = () => {
    window.removeEventListener(
      'pointerdown',
      loadForReturningVisitor
    );

    window.removeEventListener(
      'scroll',
      loadForReturningVisitor
    );

    window.removeEventListener(
      'keydown',
      loadForReturningVisitor
    );
  };

  window.addEventListener(
    'pointerdown',
    loadForReturningVisitor,
    { once: true, passive: true }
  );

  window.addEventListener(
    'scroll',
    loadForReturningVisitor,
    { once: true, passive: true }
  );

  window.addEventListener(
    'keydown',
    loadForReturningVisitor,
    { once: true }
  );
}

export function loadGoogleAnalytics(): void {
  if (!isBrowser()) return;
  if (analyticsLoaded) {
    return;
  }
  if (analyticsLoading) {
    return;
  }
  const consent = localStorage.getItem(CONSENT_KEY);
  if (consent !== 'granted') {
    return;
  }

  analyticsLoading = true;

  const existingScript =
    document.querySelector<HTMLScriptElement>(
      'script[data-gtag]'
    );

  if (existingScript) {
    existingScript.remove();
  }

  const script = document.createElement('script');

  script.src =
    `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

  script.async = true;
  script.dataset['gtag'] = 'true';

  script.onload = () => {

    window.gtag?.('js', new Date());

    window.gtag?.('config', GA_MEASUREMENT_ID, {
      debug_mode: true
    });

    analyticsLoaded = true;
    analyticsLoading = false;
  };

  script.onerror = error => {
    analyticsLoading = false;
  };

  document.head.appendChild(script);
}

export function trackPageView(): void {
  if (!isBrowser() || !analyticsLoaded || !window.gtag) {
    return;
  }

  window.gtag('event', 'page_view', {
    send_to: GA_MEASUREMENT_ID,
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname + window.location.search,
    debug_mode: true
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

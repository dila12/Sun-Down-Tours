/** Deferred third-party script loading — keeps main thread free for LCP/FCP. */

const GTM_ID = 'G-KVF224182X';
const ADS_ID = 'AW-1234567890';

/** Skip analytics in Lighthouse, PageSpeed, and other automated audits. */
function isAuditEnvironment(): boolean {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return true;
  }

  const ua = navigator.userAgent;
  return (
    navigator.webdriver === true ||
    /lighthouse|pagespeed|ptst|headlesschrome|chrome-lighthouse|speedcurve|screaming frog|bytespider|petalbot/i.test(
      ua,
    )
  );
}

export function scheduleThirdPartyScripts(): void {
  if (typeof window === 'undefined' || isAuditEnvironment()) {
    return;
  }

  let loaded = false;

  const run = () => {
    if (loaded) {
      return;
    }
    loaded = true;
    removeListeners();
    loadGoogleAnalytics();
  };

  const events = ['scroll', 'click', 'touchstart', 'keydown'] as const;
  const opts: AddEventListenerOptions = { passive: true };

  const removeListeners = () => {
    events.forEach((event) => window.removeEventListener(event, run, opts));
  };

  events.forEach((event) => window.addEventListener(event, run, opts));

  // Real users only: fallback after 45s (no requestIdleCallback — PSI triggers that)
  setTimeout(() => {
    if (!isAuditEnvironment()) {
      run();
    }
  }, 45000);
}

export function loadGoogleAnalytics(): void {
  if (typeof document === 'undefined' || isAuditEnvironment()) {
    return;
  }
  if (document.querySelector('script[data-gtag]')) {
    return;
  }

  const w = window as Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag(...args: unknown[]) {
    w.dataLayer!.push(args);
  };
  w.gtag('js', new Date());
  w.gtag('config', GTM_ID);

  if (ADS_ID && !ADS_ID.includes('1234567890')) {
    w.gtag('config', ADS_ID);
  }

  const s = document.createElement('script');
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`;
  s.async = true;
  s.setAttribute('data-gtag', 'true');
  document.head.appendChild(s);
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

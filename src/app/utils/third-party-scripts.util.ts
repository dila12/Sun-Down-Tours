/** Deferred third-party script loading */

const GTM_ID = 'G-KVF224182X';
const ADS_ID = 'AW-1234567890';

let analyticsLoaded = false;

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

export function scheduleThirdPartyScripts(): void {
  if (!isBrowser() || analyticsLoaded) {
    return;
  }

  const run = () => {
    console.log('Loading GA...');
    if (analyticsLoaded) {
      return;
    }

    analyticsLoaded = true;
    removeListeners();
    loadGoogleAnalytics();
  };

  const removeListeners = () => {
    window.removeEventListener('pointerdown', run);
    window.removeEventListener('scroll', run);
    window.removeEventListener('keydown', run);
  };

  window.addEventListener('pointerdown', run, { once: true, passive: true });
  window.addEventListener('scroll', run, { once: true, passive: true });
  window.addEventListener('keydown', run, { once: true });

  // fallback after 3 seconds
  window.setTimeout(run, 3000);
}

export function loadGoogleAnalytics(): void {
  console.log('Loading Google Analytics...');
  if (!isBrowser()) {
    console.warn('Google Analytics cannot be loaded on the server side.');
    return;
  }

  if (document.querySelector('script[data-gtag]')) {
    console.log('Google Analytics script already loaded.');
    return;
  }

  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`;
  script.async = true;
  script.setAttribute('data-gtag', 'true');

  script.onload = () => {
    const w = window as any;

    w.dataLayer = w.dataLayer || [];

    w.gtag = function () {
      w.dataLayer.push(arguments);
    };

    w.gtag('js', new Date());

    w.gtag('config', GTM_ID, {
      debug_mode: location.hostname === 'localhost'
    });

    if (ADS_ID) {
      w.gtag('config', ADS_ID);
    }

    console.log('Google Analytics Loaded');
  };

  document.head.appendChild(script);
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

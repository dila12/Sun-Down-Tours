/** Deferred third-party script loading */

const GA_MEASUREMENT_ID = 'G-KVF224182X';

let analyticsLoaded = false;
let analyticsLoading = false;

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

export function scheduleThirdPartyScripts(): void {

  if (!isBrowser() || analyticsLoaded || analyticsLoading) {
    return;
  }

  const load = () => {

    if (analyticsLoaded || analyticsLoading) {
      return;
    }

    analyticsLoading = true;

    removeListeners();

    loadGoogleAnalytics(() => {
      analyticsLoaded = true;
      analyticsLoading = false;
    });

  };

  const removeListeners = () => {
    window.removeEventListener('pointerdown', load);
    window.removeEventListener('scroll', load);
    window.removeEventListener('touchstart', load);
    window.removeEventListener('keydown', load);
  };

  window.addEventListener('pointerdown', load, {
    once: true,
    passive: true
  });

  window.addEventListener('scroll', load, {
    once: true,
    passive: true
  });

  window.addEventListener('touchstart', load, {
    once: true,
    passive: true
  });

  window.addEventListener('keydown', load, {
    once: true
  });

}

export function loadGoogleAnalytics(onLoaded?: () => void): void {

  if (!isBrowser()) return;

  if (document.querySelector('script[data-gtag]')) {
    analyticsLoaded = true;
    analyticsLoading = false;
    onLoaded?.();
    return;
  }

  const script = document.createElement('script');

  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

  script.async = true;

  script.setAttribute('data-gtag', 'true');

  script.onload = () => {

    const w = window as any;

    w.dataLayer = w.dataLayer || [];

    function gtag(...args: any[]) {
      w.dataLayer.push(args);
    }

    w.gtag = gtag;

    gtag('js', new Date());

    gtag('config', GA_MEASUREMENT_ID, {
      transport_type: 'beacon',
      send_page_view: false
    });

    gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname
    });

    analyticsLoaded = true;
    analyticsLoading = false;

    onLoaded?.();
  };

  script.onerror = () => {
    analyticsLoading = false;
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

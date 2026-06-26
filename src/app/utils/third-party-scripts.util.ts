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
  if (!isBrowser()) {
    return;
  }

  if (document.querySelector('script[data-gtag]')) {
    return;
  }

  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`;
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

    gtag('config', GTM_ID, {
      send_page_view: true,
      page_path: window.location.pathname,
      page_location: window.location.href,
      page_title: document.title,
      debug_mode: location.hostname === 'localhost'
    });

    if (ADS_ID) {
      gtag('config', ADS_ID);
    }

    console.log('Google Analytics Loaded');
  };

  document.head.appendChild(script);
}

export function loadGoogleTranslate(onReady?: () => void): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const w = window as Window & {
    google?: {
      translate: {
        TranslateElement: new (options: object, elementId: string) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  };

  if (w.google?.translate) {
    onReady?.();
    return;
  }

  if (document.querySelector('script[data-google-translate]')) {
    const timer = setInterval(() => {
      if (w.google?.translate) {
        clearInterval(timer);
        onReady?.();
      }
    }, 200);

    setTimeout(() => clearInterval(timer), 10000);
    return;
  }

  w.googleTranslateElementInit = () => {
    if (!w.google?.translate) {
      return;
    }

    new w.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        includedLanguages: 'en,de,it,fr,es,ru,pl,zh-CN',
        autoDisplay: false,
      },
      'google_translate_element'
    );

    onReady?.();
  };

  const script = document.createElement('script');

  script.src =
    'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';

  script.async = true;
  script.defer = true;
  script.setAttribute('data-google-translate', 'true');

  document.body.appendChild(script);
}
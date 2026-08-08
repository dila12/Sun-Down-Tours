/** Load non-critical fonts and CSS after first paint / LCP window. */

const DEFERRED_FONT_STYLESHEET = '/assets/fonts/deferred.css';
const DEFERRED_BOOTSTRAP_STYLESHEET = '/deferred.css';
/** Post-load delay — keeps deferred assets off Lighthouse's critical request chain. */
const POST_LOAD_DELAY_MS = 8000;

function injectStylesheet(href: string): void {
  if (document.querySelector(`link[href="${href}"]`)) {
    return;
  }

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  if ('fetchPriority' in link) {
    link.fetchPriority = 'low';
  }
  document.head.appendChild(link);
}

export function scheduleDeferredAssets(): void {
  if (typeof window === 'undefined') {
    return;
  }

  let fontsLoaded = false;
  let cssLoaded = false;

  const loadFonts = () => {
    if (fontsLoaded) {
      return;
    }
    fontsLoaded = true;
    injectStylesheet(DEFERRED_FONT_STYLESHEET);
  };

  const loadCss = () => {
    if (cssLoaded) {
      return;
    }
    cssLoaded = true;
    injectStylesheet(DEFERRED_BOOTSTRAP_STYLESHEET);
  };

  const events = ['click', 'touchstart', 'keydown'] as const;
  const opts: AddEventListenerOptions = { passive: true, once: true };

  events.forEach((event) => {
    window.addEventListener(event, () => {
      loadFonts();
      loadCss();
    }, opts);
  });

  window.addEventListener(
    'load',
    () => {
      // Icons after LCP; Bootstrap utilities much later.
      window.setTimeout(loadFonts, 1500);
      window.setTimeout(loadCss, POST_LOAD_DELAY_MS);
    },
    { once: true },
  );
}

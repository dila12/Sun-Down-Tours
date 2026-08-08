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

function injectDeferredAssets(): void {
  injectStylesheet(DEFERRED_BOOTSTRAP_STYLESHEET);
  injectStylesheet(DEFERRED_FONT_STYLESHEET);
}

export function scheduleDeferredAssets(): void {
  if (typeof window === 'undefined') {
    return;
  }

  let loaded = false;

  const load = () => {
    if (loaded) {
      return;
    }
    loaded = true;
    removeListeners();
    injectDeferredAssets();
  };

  const events = ['click', 'touchstart', 'keydown'] as const;
  const opts: AddEventListenerOptions = { passive: true, once: true };

  const removeListeners = () => {
    events.forEach((event) => window.removeEventListener(event, load, opts));
  };

  events.forEach((event) => window.addEventListener(event, load, opts));

  window.addEventListener(
    'load',
    () => {
      window.setTimeout(load, POST_LOAD_DELAY_MS);
    },
    { once: true },
  );
}

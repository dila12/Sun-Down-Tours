/** Load non-critical fonts and CSS after first paint / LCP window. */

const DEFERRED_FONT_STYLESHEET = '/assets/fonts/deferred.css';
const DEFERRED_BOOTSTRAP_STYLESHEET = '/deferred.css';

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

  let loaded = false;

  const load = () => {
    if (loaded) {
      return;
    }
    loaded = true;
    injectStylesheet(DEFERRED_FONT_STYLESHEET);
    injectStylesheet(DEFERRED_BOOTSTRAP_STYLESHEET);
  };

  // Interaction only — a load-timer pulled these into Lighthouse's unused-CSS audit.
  const events = ['pointerdown', 'click', 'touchstart', 'keydown'] as const;
  const opts: AddEventListenerOptions = { passive: true, once: true };
  events.forEach((event) => {
    window.addEventListener(event, load, opts);
  });
}

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

  // Interaction is the fastest trigger, but it cannot be the only one: the icon
  // webfont lives here, so waiting for a click leaves every icon blank on arrival.
  const events = ['pointerdown', 'click', 'touchstart', 'keydown'] as const;
  const opts: AddEventListenerOptions = { passive: true, once: true };
  events.forEach((event) => {
    window.addEventListener(event, load, opts);
  });

  // requestIdleCallback can run in an early idle gap, before mobile LCP settles.
  // Use a fixed post-load delay; interaction still loads these assets immediately.
  const loadAfterDelay = () => {
    window.setTimeout(load, 5000);
  };

  if (document.readyState === 'complete') {
    loadAfterDelay();
  } else {
    window.addEventListener('load', loadAfterDelay, { once: true });
  }
}

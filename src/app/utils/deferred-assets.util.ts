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

  // Otherwise pick them up once the page is idle, which keeps them off the
  // critical path while still resolving icons without any user action.
  const loadWhenIdle = () => {
    const idle = (window as Window & { requestIdleCallback?: typeof requestIdleCallback })
      .requestIdleCallback;
    // Wait past typical LCP (~3–4s on Slow 4G) so FA/deferred.css stay off the LCP chain.
    if (typeof idle === 'function') {
      idle(() => load(), { timeout: 4500 });
    } else {
      window.setTimeout(load, 4000);
    }
  };

  if (document.readyState === 'complete') {
    loadWhenIdle();
  } else {
    window.addEventListener('load', loadWhenIdle, { once: true });
  }
}

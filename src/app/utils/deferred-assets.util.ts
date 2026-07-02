/** Load non-critical fonts and CSS after first paint. */

const DEFERRED_FONT_STYLESHEET = '/assets/fonts/deferred.css';

function injectStylesheet(href: string, onLoad?: () => void): void {
  if (document.querySelector(`link[href="${href}"]`)) {
    onLoad?.();
    return;
  }

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.onload = () => onLoad?.();
  document.head.appendChild(link);
}

function injectDeferredBootstrap(): void {
  if (document.querySelector('link[href*="deferred"]')) {
    return;
  }

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `${document.baseURI}deferred.css`.replace(/([^:]\/)\/+/g, '$1');
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
    removeListeners();
    injectDeferredBootstrap();
    injectStylesheet(DEFERRED_FONT_STYLESHEET, () => {
      document.body.classList.add('fonts-ready');
    });
  };

  // Defer Bootstrap + body font until after LCP; interaction loads sooner for real users.
  const events = ['click', 'touchstart', 'keydown'] as const;
  const opts: AddEventListenerOptions = { passive: true };

  const removeListeners = () => {
    events.forEach((event) => window.removeEventListener(event, load, opts));
  };

  events.forEach((event) => window.addEventListener(event, load, opts));

  const w = window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number };
  if (typeof w.requestIdleCallback === 'function') {
    w.requestIdleCallback(load, { timeout: 5000 });
  } else {
    w.setTimeout(load, 5000);
  }
}

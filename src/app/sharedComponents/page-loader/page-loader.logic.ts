/** Delay before the overlay appears, so a fast cached page never flashes it. */
export const LOADER_SHOW_DELAY_MS = 180;
/** Once shown, keep it just long enough to read, then get out of the way. */
export const LOADER_MIN_VISIBLE_MS = 320;
/** After the next view is in the DOM, do not wait on photos longer than this. */
export const LOADER_MAX_WAIT_MS = 2200;
export const LOADER_EXIT_MS = 220;
/** Last-resort cap so a stuck navigation cannot trap the page. */
export const LOADER_SAFETY_MS = 8000;
/** Redirects cancel one navigation and start another a moment later. */
export const LOADER_DONE_DEBOUNCE_MS = 48;

const TINY_IMAGE_PX = 48;

/**
 * True when this image should hold the page loader.
 * Skips icons, already-decoded photos, and lazy images still below the fold.
 */
export function isContentImagePending(img: HTMLImageElement, viewportHeight: number): boolean {
  if (img.closest('[data-page-loader]')) {
    return false;
  }

  const src = img.currentSrc || img.getAttribute('src') || '';
  if (!src || src.startsWith('data:')) {
    return false;
  }

  const widthAttr = Number(img.getAttribute('width') || 0);
  if (widthAttr > 0 && widthAttr <= TINY_IMAGE_PX) {
    return false;
  }

  if (img.complete && img.naturalWidth > 0) {
    return false;
  }

  if (img.loading === 'lazy') {
    const rect = img.getBoundingClientRect();
    const unlaid = rect.width === 0 && rect.height === 0;
    if (unlaid) {
      return false;
    }
    const below = rect.top > viewportHeight * 1.25;
    const above = rect.bottom < -40;
    if (below || above) {
      return false;
    }
  }

  return true;
}

/** Hash-only changes stay on the same view, so they should not raise the loader. */
export function sameDocumentPath(current: string, next: string): boolean {
  return stripHash(current) === stripHash(next);
}

export function stripHash(url: string): string {
  const hash = url.indexOf('#');
  return hash === -1 ? url : url.slice(0, hash);
}

/**
 * Resolves when in-view content images have decoded, or when `maxMs` elapses.
 * Keeps scanning briefly because the next route's images are inserted after navigation.
 */
export function waitForViewImages(
  signal: AbortSignal,
  maxMs: number,
  onProgress?: (loaded: number, total: number) => void,
): Promise<void> {
  return new Promise((resolve) => {
    const deadline = performance.now() + maxMs;
    const tracked = new Set<HTMLImageElement>();
    let timer = 0;
    let settled = false;
    let emptyScans = 0;

    const finish = () => {
      if (settled) {
        return;
      }
      settled = true;
      window.clearTimeout(timer);
      resolve();
    };

    const report = () => {
      const total = tracked.size;
      let loaded = 0;
      for (const img of tracked) {
        if (img.complete) {
          loaded += 1;
        }
      }
      onProgress?.(loaded, total);
      return total - loaded;
    };

    const scan = () => {
      const viewportHeight = window.innerHeight || 800;
      document.querySelectorAll('img').forEach((node) => {
        if (!(node instanceof HTMLImageElement) || tracked.has(node)) {
          return;
        }
        if (!isContentImagePending(node, viewportHeight)) {
          return;
        }
        tracked.add(node);
        if (!node.complete) {
          node.addEventListener('load', report, { once: true });
          node.addEventListener('error', report, { once: true });
        }
      });
      return report();
    };

    const tick = () => {
      if (settled) {
        return;
      }
      if (signal.aborted || performance.now() >= deadline) {
        finish();
        return;
      }
      const pending = scan();
      if (pending === 0) {
        emptyScans += 1;
        // Two quiet scans: the new view had a chance to insert images, and none are waiting.
        if (emptyScans >= 2) {
          finish();
          return;
        }
      } else {
        emptyScans = 0;
      }
      timer = window.setTimeout(tick, 70);
    };

    requestAnimationFrame(() => requestAnimationFrame(tick));
    signal.addEventListener('abort', finish, { once: true });
  });
}

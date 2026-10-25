import { isPlatformBrowser } from '@angular/common';
import {
  DestroyRef,
  Injectable,
  PLATFORM_ID,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import {
  Event as RouterEvent,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { Subscription } from 'rxjs';

import {
  LOADER_DONE_DEBOUNCE_MS,
  LOADER_EXIT_MS,
  LOADER_MAX_WAIT_MS,
  LOADER_MIN_VISIBLE_MS,
  LOADER_SAFETY_MS,
  LOADER_SHOW_DELAY_MS,
  sameDocumentPath,
  waitForViewImages,
} from './page-loader.logic';

export type LoaderPhase = 'hidden' | 'open' | 'leaving';

type TerminalNavigation = NavigationEnd | NavigationCancel | NavigationError;

/**
 * Light blurred veil and spinner for client navigations.
 *
 * The first document paint is left alone: the homepage hero is preloaded and
 * must stay visible. After that, moving between pages raises this overlay until
 * the next view's in-view photos have decoded (or a hard cap elapses).
 */
@Injectable({ providedIn: 'root' })
export class PageLoaderService {
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  private readonly phaseState = signal<LoaderPhase>('hidden');
  private readonly progressState = signal(0);

  readonly phase = this.phaseState.asReadonly();
  readonly progress = this.progressState.asReadonly();

  private seq = 0;
  private pendingNavId = 0;
  private holding = false;
  private closing = false;
  private shownAt = 0;
  private showTimer = 0;
  private doneTimer = 0;
  private safetyTimer = 0;
  private progressTimer = 0;
  private abort: AbortController | null = null;
  private sub: Subscription | null = null;
  private htmlOverflow = '';
  private bodyOverflow = '';
  private scrollLocked = false;
  private inertTargets: HTMLElement[] = [];

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    afterNextRender(() => this.connect());
    this.destroyRef.onDestroy(() => this.teardown());
  }

  private connect(): void {
    let primed = this.router.navigated;
    this.sub = this.router.events.subscribe((event) => {
      if (!primed) {
        if (isTerminalNavigation(event)) {
          primed = true;
        }
        return;
      }
      if (event instanceof NavigationStart) {
        this.onStart(event);
        return;
      }
      if (isTerminalNavigation(event)) {
        this.onDone(event);
      }
    });
  }

  private onStart(event: NavigationStart): void {
    window.clearTimeout(this.doneTimer);
    if (!this.holding && sameDocumentPath(this.router.url, event.url)) {
      return;
    }
    this.pendingNavId = event.id;
    if (this.holding && !this.closing) {
      return;
    }
    this.holding = true;
    this.closing = false;
    this.open(++this.seq);
  }

  private onDone(event: TerminalNavigation): void {
    if (!this.holding || event.id !== this.pendingNavId) {
      return;
    }
    const seq = this.seq;
    window.clearTimeout(this.doneTimer);
    this.doneTimer = window.setTimeout(() => {
      if (seq !== this.seq || event.id !== this.pendingNavId) {
        return;
      }
      const abort = this.abort;
      if (!abort) {
        return;
      }
      void this.finish(seq, abort.signal);
    }, LOADER_DONE_DEBOUNCE_MS);
  }

  private open(seq: number): void {
    window.clearTimeout(this.showTimer);
    window.clearTimeout(this.safetyTimer);
    this.abort?.abort();
    this.abort = new AbortController();
    this.progressState.set(8);

    if (this.phaseState() !== 'hidden') {
      this.phaseState.set('open');
      this.lock();
      this.shownAt = performance.now();
      this.creepProgress();
    }

    this.showTimer = window.setTimeout(() => {
      if (seq !== this.seq || !this.holding || this.closing) {
        return;
      }
      this.reveal();
    }, LOADER_SHOW_DELAY_MS);

    this.safetyTimer = window.setTimeout(() => {
      if (seq !== this.seq) {
        return;
      }
      this.abort?.abort();
      void this.dismiss(seq);
    }, LOADER_SAFETY_MS);
  }

  private async finish(seq: number, signal: AbortSignal): Promise<void> {
    try {
      await waitForViewImages(signal, LOADER_MAX_WAIT_MS, (loaded, total) => {
        if (seq !== this.seq || total <= 0) {
          return;
        }
        const value = Math.round(12 + (loaded / total) * 80);
        this.progressState.set(Math.max(this.progressState(), Math.min(92, value)));
      });
    } catch {
      // Image waits must never surface into navigation.
    }
    if (seq !== this.seq) {
      return;
    }
    await this.dismiss(seq);
  }

  private reveal(): void {
    this.shownAt = performance.now();
    this.phaseState.set('open');
    this.lock();
    this.creepProgress();
  }

  private async dismiss(seq: number): Promise<void> {
    if (seq !== this.seq || this.closing) {
      return;
    }
    this.closing = true;
    window.clearTimeout(this.showTimer);
    window.clearTimeout(this.safetyTimer);
    window.clearTimeout(this.doneTimer);

    try {
      if (this.phaseState() === 'hidden') {
        return;
      }

      const elapsed = performance.now() - this.shownAt;
      const rest = Math.max(0, LOADER_MIN_VISIBLE_MS - elapsed);
      if (rest > 0) {
        await delay(rest);
      }
      if (seq !== this.seq) {
        return;
      }

      this.progressState.set(100);
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion) {
        this.phaseState.set('hidden');
        this.unlock();
        return;
      }

      this.phaseState.set('leaving');
      await delay(LOADER_EXIT_MS);
      if (seq !== this.seq) {
        return;
      }
      this.phaseState.set('hidden');
      this.unlock();
    } finally {
      if (seq === this.seq) {
        this.closing = false;
        this.reset(seq);
      }
    }
  }

  private creepProgress(): void {
    window.clearInterval(this.progressTimer);
    this.progressTimer = window.setInterval(() => {
      const current = this.progressState();
      if (this.phaseState() !== 'open' || current >= 86) {
        return;
      }
      this.progressState.set(current + 1);
    }, 140);
  }

  private reset(seq: number): void {
    if (seq !== this.seq) {
      return;
    }
    this.holding = false;
    this.abort?.abort();
    this.abort = null;
    window.clearInterval(this.progressTimer);
  }

  private lock(): void {
    if (this.scrollLocked) {
      return;
    }
    this.scrollLocked = true;
    this.htmlOverflow = document.documentElement.style.overflow;
    this.bodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    const layout = document.querySelector('app-layout-component');
    if (layout instanceof HTMLElement && !layout.hasAttribute('inert')) {
      layout.setAttribute('inert', '');
      this.inertTargets.push(layout);
    }
  }

  private unlock(): void {
    if (!this.scrollLocked) {
      return;
    }
    this.scrollLocked = false;
    document.documentElement.style.overflow = this.htmlOverflow;
    document.body.style.overflow = this.bodyOverflow;
    for (const el of this.inertTargets) {
      el.removeAttribute('inert');
    }
    this.inertTargets = [];
  }

  private teardown(): void {
    this.sub?.unsubscribe();
    this.sub = null;
    window.clearTimeout(this.showTimer);
    window.clearTimeout(this.doneTimer);
    window.clearTimeout(this.safetyTimer);
    window.clearInterval(this.progressTimer);
    this.abort?.abort();
    this.unlock();
  }
}

function isTerminalNavigation(event: RouterEvent): event is TerminalNavigation {
  return (
    event instanceof NavigationEnd ||
    event instanceof NavigationCancel ||
    event instanceof NavigationError
  );
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

const ELFSIGHT_SCRIPT = 'https://elfsightcdn.com/platform.js';
const WIDGET_SELECTOR = '.elfsight-app-4ec1a88d-9653-4aa9-809d-29cab95b567c';

@Component({
  selector: 'app-home-elfsight-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-elfsight-widget.html',
  styleUrl: './home-elfsight-widget.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeElfsightWidgetComponent implements AfterViewInit, OnDestroy {
  @ViewChild('elfsightHost') elfsightHost?: ElementRef<HTMLElement>;

  widgetReady = false;
  private scriptLoading = false;
  private intersectionObserver?: IntersectionObserver;
  private mutationObserver?: MutationObserver;
  private renderTimeout?: ReturnType<typeof setTimeout>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
  ) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const host = this.elfsightHost?.nativeElement;
    if (!host) return;

    const loadScript = () => {
      if (this.scriptLoading) return;
      this.scriptLoading = true;
      this.intersectionObserver?.disconnect();
      this.injectScript();
    };

    if ('IntersectionObserver' in window) {
      this.intersectionObserver = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;
          this.intersectionObserver?.disconnect();

          if ('requestIdleCallback' in window) {
            (window as any).requestIdleCallback(loadScript, { timeout: 2000 });
          } else {
            setTimeout(loadScript, 100);
          }
        },
        { rootMargin: '200px', threshold: 0.01 },
      );
      this.intersectionObserver.observe(host);
    } else if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(loadScript, { timeout: 2000 });
    } else {
      setTimeout(loadScript, 100);
    }
  }

  private injectScript() {
    if (document.querySelector('script[data-elfsight], script[src*="elfsightcdn.com"]')) {
      this.initWidgets();
      this.watchWidgetRender();
      return;
    }

    const s = document.createElement('script');
    s.src = ELFSIGHT_SCRIPT;
    s.async = true;
    s.setAttribute('data-elfsight', 'true');
    s.onload = () => {
      requestAnimationFrame(() => {
        this.initWidgets();
        this.watchWidgetRender();
      });
    };
    s.onerror = () => this.markReady();
    document.body.appendChild(s);
  }

  private initWidgets() {
    const w = window as any;
    if (w.eapps && typeof w.eapps.init === 'function') {
      w.eapps.init();
    }
  }

  private watchWidgetRender() {
    const widget = this.elfsightHost?.nativeElement.querySelector(WIDGET_SELECTOR);
    if (!widget) {
      this.markReady();
      return;
    }

    const hasContent = () =>
      widget.children.length > 0 ||
      !!widget.querySelector('iframe') ||
      !!widget.querySelector('[class*="elfsight"]');

    if (hasContent()) {
      this.markReady();
      return;
    }

    this.mutationObserver = new MutationObserver(() => {
      if (hasContent()) {
        this.mutationObserver?.disconnect();
        this.markReady();
      }
    });
    this.mutationObserver.observe(widget, { childList: true, subtree: true });

    this.renderTimeout = setTimeout(() => {
      this.mutationObserver?.disconnect();
      this.markReady();
    }, 20000);
  }

  private markReady() {
    this.widgetReady = true;
    this.cdr.markForCheck();
  }

  ngOnDestroy() {
    this.intersectionObserver?.disconnect();
    this.mutationObserver?.disconnect();
    if (this.renderTimeout) clearTimeout(this.renderTimeout);
  }
}

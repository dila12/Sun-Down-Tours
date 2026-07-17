import { Injectable, Inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { applyGoogleTranslateLang, SUPPORTED_LANG_CODES } from '../utils/google-translate.util';

const LANG_PREFIX_RE = new RegExp(`^/(${SUPPORTED_LANG_CODES.join('|')})(?=/|$)`);
const SUPPORTED_LANG_SET = new Set<string>(SUPPORTED_LANG_CODES);

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly currentLang = signal('en');
  private initialized = false;
  private allowEnglishUrl = false;
  private restoringPrefix = false;

  readonly lang = this.currentLang.asReadonly();

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private router: Router,
  ) {
    if (!isPlatformBrowser(this.platformId)) return;

    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => this.onNavigationEnd(e.urlAfterRedirects));

    // If the initial NavigationEnd already happened before this service was constructed
    queueMicrotask(() => {
      if (!this.initialized) {
        this.onNavigationEnd(this.router.url);
      }
    });
  }

  /** Absolute app path with current language prefix (English = no prefix). */
  buildUrl(path: string): string {
    const clean = this.normalizePath(path);
    const lang = this.currentLang();
    if (lang === 'en') return clean;
    return clean === '/' ? `/${lang}` : `/${lang}${clean}`;
  }

  stripLangPrefix(url: string): string {
    const path = url.split('?')[0].split('#')[0];
    const stripped = path.replace(LANG_PREFIX_RE, '');
    return this.normalizePath(stripped || '/');
  }

  hasLangPrefix(url: string): boolean {
    return LANG_PREFIX_RE.test(url.split('?')[0]);
  }

  extractLang(url: string): string | null {
    const match = url.split('?')[0].match(LANG_PREFIX_RE);
    return match?.[1] ?? null;
  }

  isSupportedLang(lang: string): boolean {
    return lang === 'en' || SUPPORTED_LANG_SET.has(lang);
  }

  /** Sync language from the active route param (null/`en` → English). */
  setLangFromRoute(lang: string | null): void {
    const resolved = lang && this.isSupportedLang(lang) && lang !== 'en' ? lang : 'en';
    this.currentLang.set(resolved);

    if (!isPlatformBrowser(this.platformId)) return;

    try {
      localStorage.setItem('preferred_lang', resolved);
    } catch {
      /* private mode */
    }

    applyGoogleTranslateLang(resolved);
  }

  /** Change language via flag click: update URL prefix only, then translate. */
  switchLanguage(lang: string): void {
    if (!this.isSupportedLang(lang)) return;

    const page = this.stripLangPrefix(this.router.url);
    const target =
      lang === 'en' ? page : page === '/' ? `/${lang}` : `/${lang}${page}`;

    if (lang === 'en') {
      this.allowEnglishUrl = true;
    }

    this.currentLang.set(lang);

    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.setItem('preferred_lang', lang);
      } catch {
        /* private mode */
      }
    }

    if (this.router.url.split('?')[0] === target) {
      applyGoogleTranslateLang(lang);
      return;
    }

    void this.router.navigateByUrl(target).then(() => {
      applyGoogleTranslateLang(lang);
    });
  }

  /**
   * Intercept plain internal anchors so language prefix is preserved
   * (covers href="/about-us" links that would otherwise drop the prefix).
   */
  handleInternalLinkClick(event: MouseEvent): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.currentLang() === 'en') return;
    if (event.defaultPrevented) return;
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    const anchor = (event.target as HTMLElement | null)?.closest?.('a');
    if (!anchor) return;
    if (anchor.target && anchor.target !== '_self') return;
    if (anchor.hasAttribute('download')) return;

    const href = anchor.getAttribute('href');
    if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
      return;
    }

    let pathname: string;
    try {
      const url = new URL(href, window.location.origin);
      if (url.origin !== window.location.origin) return;
      pathname = url.pathname;
    } catch {
      return;
    }

    if (this.hasLangPrefix(pathname)) return;

    event.preventDefault();
    event.stopPropagation();
    void this.router.navigateByUrl(this.buildUrl(pathname));
  }

  private onNavigationEnd(url: string): void {
    if (this.restoringPrefix) return;

    const path = url.split('?')[0];
    const urlLang = this.extractLang(path);

    if (!this.initialized) {
      this.initialized = true;
      this.setLangFromRoute(urlLang);
      return;
    }

    if (urlLang) {
      this.allowEnglishUrl = false;
      if (urlLang !== this.currentLang()) {
        this.setLangFromRoute(urlLang);
      }
      return;
    }

    // English URL (no prefix)
    if (this.allowEnglishUrl || this.currentLang() === 'en') {
      this.allowEnglishUrl = false;
      if (this.currentLang() !== 'en') {
        this.setLangFromRoute(null);
      }
      return;
    }

    // In-app navigation dropped the prefix — restore it
    const prefixed = this.buildUrl(path);
    if (prefixed !== path) {
      this.restoringPrefix = true;
      void this.router.navigateByUrl(prefixed, { replaceUrl: true }).finally(() => {
        this.restoringPrefix = false;
      });
    }
  }

  private normalizePath(path: string): string {
    if (!path || path === '/') return '/';
    const withSlash = path.startsWith('/') ? path : `/${path}`;
    return withSlash.length > 1 && withSlash.endsWith('/')
      ? withSlash.slice(0, -1)
      : withSlash;
  }
}

/** Cookie-based Google Translate helpers (works with hidden widget + SSR hydration). */

import { loadGoogleTranslate } from './third-party-scripts.util';

/** Non-English language codes used in URL prefixes and the widget. */
export const SUPPORTED_LANG_CODES = ['de', 'it', 'fr', 'es', 'ru', 'pl', 'zh-CN'] as const;

let translateInitialized = false;
let pendingLang: string | null = null;

export function requestGoogleTranslateScript(onReady?: () => void): void {
  loadGoogleTranslate(() => {
    translateInitialized = true;
    onReady?.();
  });
}

export function isGoogleTranslateReady(): boolean {
  if (typeof document === 'undefined') return false;
  return translateInitialized || !!document.querySelector('.goog-te-combo');
}

function clearGoogleTransCookies(): void {
  document.cookie = 'googtrans=;path=/;max-age=0';
  document.cookie = `googtrans=;path=/;domain=${location.hostname};max-age=0`;
  // Google sometimes sets a domain-prefixed cookie
  const hostParts = location.hostname.split('.');
  if (hostParts.length > 2) {
    const root = hostParts.slice(-2).join('.');
    document.cookie = `googtrans=;path=/;domain=.${root};max-age=0`;
  }
}

function setGoogleTransCookie(lang: string): void {
  const value = `/en/${lang}`;
  document.cookie = `googtrans=${value};path=/`;
  document.cookie = `googtrans=${value};path=/;domain=${location.hostname}`;
}

function triggerTranslateCombo(lang: string): void {
  const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
  if (!select) return;

  const nextValue = lang === 'en' ? '' : lang;
  // Avoid re-dispatching when already on the requested language (prevents loops)
  if (select.value === nextValue) return;
  if (lang !== 'en' && select.value === lang) return;

  select.value = nextValue;
  select.dispatchEvent(new Event('change'));
}

/**
 * Apply Google Translate for `lang` without reloading the page.
 * Skips work when the googtrans cookie / combo already matches.
 */
export function applyGoogleTranslateLang(lang: string): void {
  if (typeof document === 'undefined') return;

  const normalized = lang || 'en';
  const cookieLang = getGoogleCookie();
  const alreadyActive =
    (normalized === 'en' && !cookieLang) || cookieLang === normalized;

  pendingLang = normalized;

  if (normalized === 'en') {
    if (!alreadyActive) {
      clearGoogleTransCookies();
    }
    // Only touch the widget if we need to restore English
    if (!alreadyActive) {
      requestGoogleTranslateScript(() => {
        if (pendingLang !== 'en') return;
        triggerTranslateCombo('en');
      });
    }
    return;
  }

  if (!alreadyActive) {
    setGoogleTransCookie(normalized);
  }

  // Always ensure the widget is loaded for non-English; cookie is read on first init.
  requestGoogleTranslateScript(() => {
    if (pendingLang !== normalized) return;
    if (alreadyActive && isGoogleTranslateReady()) {
      // Widget already reflecting this language — do not re-trigger
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
      if (select && select.value === normalized) return;
    }
    // Small delay so the combo exists after TranslateElement construction
    setTimeout(() => {
      if (pendingLang !== normalized) return;
      triggerTranslateCombo(normalized);
    }, 0);
  });
}

export function getSavedLang(): string {
  if (typeof localStorage === 'undefined') return 'en';
  return localStorage.getItem('preferred_lang') || 'en';
}

export function getGoogleCookie(): string | null {
  if (typeof document === 'undefined') return null;

  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
  if (!match) return null;

  const value = decodeURIComponent(match[1]);
  // value looks like "/en/de"
  const parts = value.split('/');
  return parts[2] || null;
}

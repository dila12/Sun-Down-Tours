/** Cookie-based Google Translate helpers (works with hidden widget + SSR hydration). */

export function requestGoogleTranslateScript(): void {
  if (typeof window === 'undefined') return;
  (window as any).loadGoogleTranslate?.();
}

export function applyGoogleTranslateLang(lang: string): void {
  if (typeof document === 'undefined') return;

  if (lang === 'en') {
    document.cookie = 'googtrans=;path=/;max-age=0';
    document.cookie = `googtrans=;path=/;domain=${location.hostname};max-age=0`;
  } else {
    const value = `/en/${lang}`;
    document.cookie = `googtrans=${value};path=/`;
    document.cookie = `googtrans=${value};path=/;domain=${location.hostname}`;
  }

  window.location.reload();
}

export function getSavedLang(): string {
  if (typeof localStorage === 'undefined') return 'en';
  return localStorage.getItem('preferred_lang') || 'en';
}

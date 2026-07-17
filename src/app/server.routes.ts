import { RenderMode, ServerRoute } from '@angular/ssr';
import { SUPPORTED_LANG_CODES } from './utils/google-translate.util';

/** Child paths under Layout (no leading slash). Empty string = language home (`/de`, `/it`, …). */
const APP_PAGE_PATHS = [
  '',
  'about-us',
  'our-services',
  'sri-lanka-private-tour',
  '7-day-sri-lanka-tour',
  '10-day-sri-lanka-tour',
  '5-day-sri-lanka-tour',
  'ella-day-tour',
  'galle-day-tour',
  'kandy-day-tour',
  'sigiriya-day-tour',
  'booking-success',
  'contact-us',
  'restaurants-in-sri-lanka',
  'destinations-sri-lanka',
  'customer-testimonials',
  'sri-lanka-travel-guides',
  '2-day-ella-kandy-private-tour-sri-lanka',
  '2-day-ella-yala-private-tour-sri-lanka',
  '6-day-sri-lanka-private-tour',
  '4-day-sri-lanka-tour',
  '8-day-sri-lanka-private-tour',
  'privacy-policy',
] as const;

function langHomeParams(): Array<{ lang: string }> {
  return SUPPORTED_LANG_CODES.map((lang) => ({ lang }));
}

function langChildParams(): Array<{ lang: string; '**': string }> {
  const pages = APP_PAGE_PATHS.filter((p) => p !== '');
  const params: Array<{ lang: string; '**': string }> = [];
  for (const lang of SUPPORTED_LANG_CODES) {
    for (const page of pages) {
      params.push({ lang, '**': page });
    }
  }
  return params;
}

export const serverRoutes: ServerRoute[] = [
  {
    path: ':lang',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return langHomeParams();
    },
  },
  {
    path: ':lang/**',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return langChildParams();
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];

import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { buildRoutes } from './routes.factory';
import {
  buildAlternates,
  buildPath,
  buildUrl,
  getIndexableLocalesForPage,
  INDEXABLE_LOCALES,
  LOCALES,
  PAGES,
} from './site-data.mjs';
import { buildEdgeRedirectMap } from './edge-redirects.mjs';
import { createLocaleSwitchTree } from './locale.service';

const expectedLocales = ['en', 'de', 'fr', 'it', 'es', 'pl', 'ru', 'nl'] as const;
const fullDestinationLocales = ['en', 'de', 'fr', 'es', 'pl', 'it', 'ru', 'nl'] as const;

describe('multilingual page registry', () => {
  it('preserves all eight supported and globally indexable locales', () => {
    expect(LOCALES).toEqual(expectedLocales);
    expect(INDEXABLE_LOCALES).toEqual(expectedLocales);
  });

  it('generates unique registered URLs for every page in every locale', () => {
    for (const locale of LOCALES) {
      const seen = new Set<string>();
      for (const page of PAGES) {
        const path = buildPath(page.id, locale);
        expect(path.startsWith(locale === 'en' ? '/' : `/${locale}/`) || (locale !== 'en' && path === `/${locale}`))
          .withContext(`${page.id}/${locale} has the correct prefix`)
          .toBeTrue();
        expect(seen.has(path)).withContext(`${locale} route ${path} is unique`).toBeFalse();
        seen.add(path);
        expect(buildUrl(page.id, locale)).toBe(`https://www.sundowntours.com${path}`);
      }
    }
  });

  it('routes Colombo to the same page ID in all eight locales', () => {
    const routeTree = buildRoutes()[0].children ?? [];
    const englishRoute = routeTree.find((route) => route.path === 'colombo-sri-lanka');
    expect(englishRoute?.data).toEqual(jasmine.objectContaining({ pageId: 'destColombo', locale: 'en' }));

    const polishGroup = routeTree.find((route) => route.path === 'pl');
    const polishRoute = polishGroup?.children?.find((route) => route.path === 'kolombo-sri-lanka');
    expect(polishRoute?.data).toEqual(jasmine.objectContaining({ pageId: 'destColombo', locale: 'pl' }));

    for (const locale of expectedLocales.filter((code) => code !== 'en' && code !== 'pl')) {
      const group = routeTree.find((route) => route.path === locale);
      const route = group?.children?.find((child) => child.path === PAGES.find((page) => page.id === 'destColombo')?.slugs[locale]);
      expect(route?.data).toEqual(jasmine.objectContaining({ pageId: 'destColombo', locale }));
    }
  });

  it('keeps original explicit destination indexLocales lists intact', () => {
    for (const pageId of ['destColombo', 'destNegombo', 'destBentota', 'destWeligama', 'destTrincomalee']) {
      expect(getIndexableLocalesForPage(PAGES.find((page) => page.id === pageId))).toEqual(fullDestinationLocales);
    }
    expect(getIndexableLocalesForPage(PAGES.find((page) => page.id === 'destHiriketiya'))).toEqual(['en']);
    expect(getIndexableLocalesForPage(PAGES.find((page) => page.id === 'guideLuxuryTours'))).toEqual(['en', 'de']);
  });

  it('builds reciprocal locale alternatives for representative page kinds', () => {
    for (const pageId of ['destColombo', 'tour7', 'guideTeaCountry', 'destGalle']) {
      const page = PAGES.find((entry) => entry.id === pageId)!;
      const locales = getIndexableLocalesForPage(page);
      const alternates = buildAlternates(pageId);
      expect(alternates.map((alternate) => alternate.href)).toContain(buildUrl(pageId, 'en'));
      expect(alternates.length).toBe(locales.length + 1);
      for (const locale of locales) {
        expect(alternates.some((alternate) => alternate.href === buildUrl(pageId, locale))).toBeTrue();
      }
    }
  });

  it('redirects the former Polish Colombo URL to its registered localized slug', () => {
    expect(buildEdgeRedirectMap().get('/pl/colombo-sri-lanka')).toBe('/pl/kolombo-sri-lanka');
    expect(buildEdgeRedirectMap().get('/pl/kolombo-sri-lanka')).toBeUndefined();
  });

  it('sends an incomplete locale URL to the same English page', () => {
    const redirects = buildEdgeRedirectMap();
    expect(redirects.get('/de/hiriketiya-sri-lanka')).toBe('/hiriketiya-sri-lanka');
    expect(redirects.get('/ru/hiriketiya-shri-lanka')).toBe('/hiriketiya-sri-lanka');
    expect(redirects.get('/de/colombo-sri-lanka')).toBeUndefined();
    expect(redirects.get('/index.html')).toBe('/');
  });
});

describe('language switch URL state', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
  });

  it('preserves query parameters and fragment when changing locales', () => {
    const router = TestBed.inject(Router);
    spyOnProperty(router, 'url', 'get').and.returnValue('/de/colombo-sri-lanka?campaign=summer&ref=mail#airport');

    const target = createLocaleSwitchTree(router, '/pl/kolombo-sri-lanka');

    expect(router.serializeUrl(target)).toBe('/pl/kolombo-sri-lanka?campaign=summer&ref=mail#airport');
  });
});
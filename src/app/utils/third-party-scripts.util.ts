const GA_MEASUREMENT_ID = 'G-MLGT0JLHNQ';
const GTM_CONTAINER_ID = 'GTM-MVG3L93Z';
/**
 * Real Google Ads conversion ID onlynever ship the placeholder AW-1234567890.
 * Leave empty until a production Ads account ID is configured.
 * Prefer firing Ads conversions from GTM when the AW ID is wired there.
 */
const GOOGLE_ADS_ID: string = '';
const CONSENT_KEY = 'google_consent';

type ConsentValue = 'granted' | 'denied';

type ConsentState = {
  analytics_storage: ConsentValue;
  ad_storage: ConsentValue;
  ad_user_data: ConsentValue;
  ad_personalization: ConsentValue;
};

const DENIED_CONSENT: ConsentState = {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
};

const GRANTED_CONSENT: ConsentState = {
  analytics_storage: 'granted',
  ad_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
};

let gaLoading = false;
let gaReady = false;
let speedInsightsInjected = false;
let consentDefaultsApplied = false;

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

function ensureGtag(): void {
  if (!isBrowser()) {
    return;
  }

  // Share the same dataLayer GTM bootstraps in index.html.
  window.dataLayer = window.dataLayer || [];

  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }
}

function getStoredConsent(): ConsentState | null {
  if (!isBrowser()) {
    return null;
  }
  try {
    const value = localStorage.getItem(CONSENT_KEY);

    if (!value) {
      return null;
    }

    const parsed = JSON.parse(value);

    const valid =
      (parsed.analytics_storage === 'granted' || parsed.analytics_storage === 'denied') &&
      (parsed.ad_storage === 'granted' || parsed.ad_storage === 'denied') &&
      (parsed.ad_user_data === 'granted' || parsed.ad_user_data === 'denied') &&
      (parsed.ad_personalization === 'granted' || parsed.ad_personalization === 'denied');

    return valid ? (parsed as ConsentState) : null;
  } catch {
    return null;
  }
}

function analyticsAllowed(consent: ConsentState | null): boolean {
  return consent?.analytics_storage === 'granted';
}

/**
 * Consent Mode v2: defaults are set in index.html before GTM.
 * This only restores a stored choice (or re-applies denied defaults if HTML
 * snippets were stripped in a non-production shell).
 */
export function initializeGoogleConsent(): void {
  if (!isBrowser()) {
    return;
  }
  ensureGtag();

  if (!consentDefaultsApplied) {
    // index.html already issued consent default; avoid a second default command
    // when the GTM bootstrap is present.
    const gtmPresent =
      !!document.querySelector(`script[src*="googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}"]`) ||
      !!document.querySelector(`iframe[src*="googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}"]`);

    if (!gtmPresent) {
      window.gtag?.('consent', 'default', {
        ...DENIED_CONSENT,
        wait_for_update: 500,
      });
      window.gtag?.('set', 'ads_data_redaction', true);
      window.gtag?.('set', 'url_passthrough', true);
    }
    consentDefaultsApplied = true;
  }

  const storedConsent = getStoredConsent();
  if (storedConsent) {
    window.gtag?.('consent', 'update', storedConsent);
  }
}

/**
 * GTM is installed in index.html (head + noscript) so Tag Assistant and SSR
 * HTML both expose the container. This guard only prevents a second injection.
 */
export function ensureGoogleTagManagerInstalled(): boolean {
  if (!isBrowser()) {
    return false;
  }

  const existing =
    document.querySelector(`script[src*="googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}"]`) ||
    document.getElementById('gtm-script');

  return !!existing;
}

export function initializeGoogleAnalytics(): void {
  if (!isBrowser() || gaLoading || gaReady) {
    return;
  }

  // Do not fetch 185KB gtag.js until analytics is actually allowed (PSI + first paint).
  if (!analyticsAllowed(getStoredConsent())) {
    return;
  }

  gaLoading = true;
  ensureGtag();
  const existingScript = document.querySelector(
    `script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`,
  );

  if (existingScript) {
    configureGoogleTags();
    gaReady = true;
    gaLoading = false;
    requestAnimationFrame(() => trackPageView());
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.onload = () => {
    window.gtag?.('js', new Date());
    const consent = getStoredConsent() ?? DENIED_CONSENT;
    window.gtag?.('consent', 'update', consent);
    configureGoogleTags();
    gaReady = true;
    gaLoading = false;
    if (analyticsAllowed(consent)) {
      trackPageView();
    }
  };
  script.onerror = () => {
    gaLoading = false;
  };
  document.head.appendChild(script);
}

function configureGoogleTags(): void {
  // send_page_view: false — SPA page views are sent explicitly via trackPageView().
  // Do not also enable a GA4 Configuration tag for G-MLGT0JLHNQ inside GTM.
  window.gtag?.('config', GA_MEASUREMENT_ID, {
    send_page_view: false,
  });
  if (GOOGLE_ADS_ID && !GOOGLE_ADS_ID.includes('1234567890')) {
    window.gtag?.('config', GOOGLE_ADS_ID);
  }
}

function sendGaEvent(eventName: string, params: Record<string, unknown> = {}): void {
  if (!isBrowser()) {
    return;
  }
  if (!analyticsAllowed(getStoredConsent())) {
    return;
  }
  ensureGtag();
  // Object form for GTM Custom Event triggers (Ads / GTM-only tags).
  window.dataLayer.push({ event: eventName, ...params });
  // Arguments form for the direct GA4 gtag.js config (G-MLGT0JLHNQ).
  window.gtag?.('event', eventName, params);
}

/** WhatsApp tapimport this event in Google Ads as Contact. */
export function trackWhatsAppClick(): void {
  sendGaEvent('whatsapp_click');
}

/** Contact form email sentimport in Google Ads as Submit lead form. */
export function trackContactFormSubmit(): void {
  sendGaEvent('contact_form_submit');
}

export type TourBookingSuccessParams = {
  orderNumber: string;
  value?: number;
  currency?: string;
  tourTitle?: string;
  travelers?: number;
};

/**
 * Fires `tour_booking_success` only after `/send-booking-email` succeeds.
 * Deduped per orderNumber for the browser session (refresh-safe).
 * Does not fire on Submit click, validation failure, or API error.
 */
export function trackTourBookingSuccess(params: TourBookingSuccessParams): void {
  if (!isBrowser() || !params.orderNumber) {
    return;
  }

  const dedupeKey = `tour_booking_success_${params.orderNumber}`;
  if (sessionStorage.getItem(dedupeKey)) {
    return;
  }
  sessionStorage.setItem(dedupeKey, 'true');

  const eventParams: Record<string, unknown> = {
    transaction_id: params.orderNumber,
  };
  if (params.currency) {
    eventParams['currency'] = params.currency;
  }
  if (typeof params.value === 'number' && params.value > 0) {
    eventParams['value'] = params.value;
  }
  if (params.tourTitle) {
    eventParams['tour_title'] = params.tourTitle;
  }
  if (typeof params.travelers === 'number' && params.travelers > 0) {
    eventParams['travelers'] = params.travelers;
  }

  sendGaEvent('tour_booking_success', eventParams);
}

/**
 * Booking thank-you page load. Event name matches the Google Ads
 * SUBMIT_LEAD_FORM conversion: `conversion_event_submit_lead_form`.
 * Separate from `tour_booking_success` (API success on the tour page).
 */
export function trackBookingConversion(
  orderNumber: string,
  value: number,
  currency: string = 'USD',
): void {
  if (!isBrowser() || !orderNumber) {
    return;
  }
  const conversionKey = `booking_conversion_${orderNumber}`;

  if (sessionStorage.getItem(conversionKey)) {
    return;
  }

  sessionStorage.setItem(conversionKey, 'true');
  const params: Record<string, unknown> = {
    transaction_id: orderNumber,
    currency,
  };
  if (value > 0) {
    params['value'] = value;
  }
  sendGaEvent('conversion_event_submit_lead_form', params);
}

let whatsappClicksBound = false;

/** One listener for every wa.me / WhatsApp link on the site. */
export function bindWhatsAppConversionClicks(): void {
  if (!isBrowser() || whatsappClicksBound) {
    return;
  }
  whatsappClicksBound = true;
  document.addEventListener(
    'click',
    (event) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }
      const link = target.closest('a');
      const href = link?.getAttribute('href') ?? '';
      if (/wa\.me|whatsapp\.com|api\.whatsapp/i.test(href)) {
        trackWhatsAppClick();
      }
    },
    true,
  );
}

export function hasConsentChoice(): boolean {
  return getStoredConsent() !== null;
}

export function acceptAnalyticsConsent(): void {
  if (!isBrowser()) {
    return;
  }

  ensureGtag();
  localStorage.setItem(CONSENT_KEY, JSON.stringify(GRANTED_CONSENT));
  window.gtag?.('consent', 'update', GRANTED_CONSENT);
  initializeGoogleAnalytics();
  initializeSpeedInsights();
}

export function rejectAnalyticsConsent(): void {
  if (!isBrowser()) {
    return;
  }

  ensureGtag();
  localStorage.setItem(CONSENT_KEY, JSON.stringify(DENIED_CONSENT));
  window.gtag?.('consent', 'update', DENIED_CONSENT);
}

/**
 * Vercel Speed Insightssamples Core Web Vitals on production only.
 * Loads after analytics consent; no-op in local development.
 */
export function initializeSpeedInsights(): void {
  if (!isBrowser() || speedInsightsInjected) {
    return;
  }
  if (!analyticsAllowed(getStoredConsent())) {
    return;
  }

  speedInsightsInjected = true;
  void import('@vercel/speed-insights')
    .then(({ injectSpeedInsights }) => {
      injectSpeedInsights();
    })
    .catch(() => {
      speedInsightsInjected = false;
    });
}

export function trackPageView(): void {
  if (!isBrowser()) {
    return;
  }
  if (!analyticsAllowed(getStoredConsent())) {
    return;
  }

  const pageData = {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname + window.location.search,
  };

  window.gtag?.('config', GA_MEASUREMENT_ID, {
    page_title: pageData.page_title,
    page_location: pageData.page_location,
    page_path: pageData.page_path,
  });
}

export { GTM_CONTAINER_ID, GA_MEASUREMENT_ID };

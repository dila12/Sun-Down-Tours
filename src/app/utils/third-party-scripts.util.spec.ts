import {
  trackTourBookingSuccess,
  trackBookingConversion,
} from './third-party-scripts.util';

const CONSENT_KEY = 'google_consent';

const GRANTED_CONSENT = {
  analytics_storage: 'granted',
  ad_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
};

const DENIED_CONSENT = {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
};

function dataLayerEventsNamed(name: string): Record<string, unknown>[] {
  return (window.dataLayer || []).filter(
    (entry) => entry && typeof entry === 'object' && !('length' in entry) && entry['event'] === name,
  ) as Record<string, unknown>[];
}

describe('trackTourBookingSuccess', () => {
  beforeEach(() => {
    window.dataLayer = [];
    sessionStorage.clear();
    localStorage.setItem(CONSENT_KEY, JSON.stringify(GRANTED_CONSENT));
  });

  afterEach(() => {
    sessionStorage.clear();
    localStorage.removeItem(CONSENT_KEY);
  });

  it('pushes tour_booking_success once after a successful booking id', () => {
    trackTourBookingSuccess({
      orderNumber: '#261115-000001',
      value: 788,
      currency: 'USD',
      tourTitle: '7 Day Sri Lanka Tour',
      travelers: 2,
    });

    const events = dataLayerEventsNamed('tour_booking_success');
    expect(events.length).toBe(1);
    expect(events[0]['transaction_id']).toBe('#261115-000001');
    expect(events[0]['value']).toBe(788);
    expect(events[0]['currency']).toBe('USD');
    expect(events[0]['tour_title']).toBe('7 Day Sri Lanka Tour');
    expect(events[0]['travelers']).toBe(2);
  });

  it('does not fire twice for the same orderNumber (refresh / reinit safe)', () => {
    trackTourBookingSuccess({ orderNumber: '#261115-000002', value: 100, currency: 'USD' });
    trackTourBookingSuccess({ orderNumber: '#261115-000002', value: 100, currency: 'USD' });

    expect(dataLayerEventsNamed('tour_booking_success').length).toBe(1);
  });

  it('does not fire without an orderNumber', () => {
    trackTourBookingSuccess({ orderNumber: '', value: 50, currency: 'USD' });
    expect(dataLayerEventsNamed('tour_booking_success').length).toBe(0);
  });

  it('does not fire when analytics consent is denied', () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(DENIED_CONSENT));
    trackTourBookingSuccess({ orderNumber: '#261115-000003', value: 50, currency: 'USD' });
    expect(dataLayerEventsNamed('tour_booking_success').length).toBe(0);
  });

  it('omits value when it is not positive (does not invent booking value)', () => {
    trackTourBookingSuccess({ orderNumber: '#261115-000004', value: 0, currency: 'USD' });
    const events = dataLayerEventsNamed('tour_booking_success');
    expect(events.length).toBe(1);
    expect(events[0]['value']).toBeUndefined();
  });
});

describe('trackBookingConversion', () => {
  beforeEach(() => {
    window.dataLayer = [];
    sessionStorage.clear();
    localStorage.setItem(CONSENT_KEY, JSON.stringify(GRANTED_CONSENT));
  });

  afterEach(() => {
    sessionStorage.clear();
    localStorage.removeItem(CONSENT_KEY);
  });

  it('keeps conversion_event_submit_lead_form separate from tour_booking_success', () => {
    trackBookingConversion('#261115-000010', 500, 'USD');
    expect(dataLayerEventsNamed('conversion_event_submit_lead_form').length).toBe(1);
    expect(dataLayerEventsNamed('tour_booking_success').length).toBe(0);
  });
});

import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter, Router } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TourBookingCardComponent } from './tour-booking-card';
import { LocaleService } from '../../i18n/locale.service';
import { environment } from '../../../../environment';

const CONSENT_KEY = 'google_consent';
const GRANTED_CONSENT = {
  analytics_storage: 'granted',
  ad_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
};

function tourBookingSuccessEvents(): Record<string, unknown>[] {
  return (window.dataLayer || []).filter(
    (entry) =>
      entry && typeof entry === 'object' && !('length' in entry) && entry['event'] === 'tour_booking_success',
  ) as Record<string, unknown>[];
}

describe('TourBookingCardComponent booking API success tracking', () => {
  let fixture: ComponentFixture<TourBookingCardComponent>;
  let component: TourBookingCardComponent;
  let httpMock: HttpTestingController;

  const toastrStub = {
    info: jasmine.createSpy('info'),
    success: jasmine.createSpy('success'),
    error: jasmine.createSpy('error'),
  };

  const i18nStub = {
    t: (key: string) => key,
    locale: () => 'en',
  };

  beforeEach(async () => {
    window.dataLayer = [];
    sessionStorage.clear();
    localStorage.setItem(CONSENT_KEY, JSON.stringify(GRANTED_CONSENT));

    await TestBed.configureTestingModule({
      imports: [TourBookingCardComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: PLATFORM_ID, useValue: 'browser' },
        { provide: ToastrService, useValue: toastrStub },
        { provide: LocaleService, useValue: i18nStub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TourBookingCardComponent);
    component = fixture.componentInstance;
    component.tour = { title: '7 Day Sri Lanka Tour' };
    component.filecode = '7-day-tour';
    component.image = '/assets/img/package-2.webp';
    component.pageId = 'tour7';
    component.autoLoadPrices = false;
    component.priceList = { '2': 788 };
    httpMock = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
    const pending = httpMock.match(() => true);
    for (const req of pending) {
      req.flush({
        warningDaysPerWeekMin: 4,
        warningDaysPerWeekMax: 4,
        blockedDates: [],
        multiDayTourTypes: [],
      });
    }
  });

  afterEach(() => {
    httpMock.verify();
    sessionStorage.clear();
    localStorage.removeItem(CONSENT_KEY);
  });

  it('pushes tour_booking_success only after the booking API succeeds', fakeAsync(() => {
    const router = TestBed.inject(Router);
    spyOn(router, 'navigate').and.resolveTo(true);

    component.orderNumber = '#261115-000100';
    component.travelers = 2;
    component.total = 788;
    component.firstName = 'Test';
    component.lastName = 'User';
    component.email = 'test@example.com';
    component.country = 'Netherlands';
    component.phoneNumber = '612345678';
    component.termsAccepted = true;
    component.isLoadingPrices = false;
    component.updateAmounts();

    component.completeBooking();
    expect(tourBookingSuccessEvents().length).toBe(0);

    const req = httpMock.expectOne(`${environment.backendUrl}/send-booking-email`);
    expect(req.request.method).toBe('POST');
    req.flush({ ok: true });

    const events = tourBookingSuccessEvents();
    expect(events.length).toBe(1);
    expect(events[0]['transaction_id']).toBe('#261115-000100');
    expect(events[0]['value']).toBe(788);
    expect(events[0]['currency']).toBe('USD');
    expect(events[0]['tour_title']).toBe('7 Day Sri Lanka Tour');
    expect(events[0]['travelers']).toBe(2);

    tick(1500);
    expect(router.navigate).toHaveBeenCalled();
  }));

  it('does not push tour_booking_success on API failure', () => {
    component.orderNumber = '#261115-000101';
    component.travelers = 2;
    component.total = 788;
    component.isLoadingPrices = false;
    component.updateAmounts();

    component.completeBooking();
    const req = httpMock.expectOne(`${environment.backendUrl}/send-booking-email`);
    req.flush({ error: 'fail' }, { status: 500, statusText: 'Server Error' });

    expect(tourBookingSuccessEvents().length).toBe(0);
    expect(toastrStub.error).toHaveBeenCalled();
  });

  it('does not push when submit is blocked before the API call', () => {
    component.isSubmitting = true;
    component.completeBooking();
    httpMock.expectNone(`${environment.backendUrl}/send-booking-email`);
    expect(tourBookingSuccessEvents().length).toBe(0);
  });
});

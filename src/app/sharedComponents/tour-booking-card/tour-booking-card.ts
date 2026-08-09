import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnChanges,
  OnInit,
  PLATFORM_ID,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../environment';
import countriesData from '../../../assets/data/countries.json';
import countryCode from '../../../assets/data/countryCode.json';
import { TranslatePipe } from '../../i18n/t.pipe';
import { LocaleService } from '../../i18n/locale.service';
import { formatTourPriceEur } from '../../utils/tour-prices.static';
import {
  SITE_EMAIL,
  SITE_PHONE_DISPLAY,
  SITE_WHATSAPP_URL,
} from '../../i18n/site-contact';
import {
  bookingsLeftDetailKey,
  bookingsLeftLeadKey,
  defaultBookingDateForTour,
  demandInfoForDate,
  formatShortCardDate,
  listTourDemandHints,
  resolveDemandTourKey,
  toIsoDate,
  type DemandStatus,
  type SpotsLeft,
  type TourDemandHint,
} from '../../utils/booking-demand.util';

declare let gtag: Function;

interface DialCountry {
  name: string;
  dial_code: string;
  code: string;
  flag: string;
}

interface BookingAvailabilityConfig {
  warningDaysPerWeekMin: number;
  warningDaysPerWeekMax: number;
  blockedDates: string[];
  multiDayTourTypes: string[];
}

type DateAvailabilityStatus = DemandStatus;

interface CalendarDayCell {
  empty: boolean;
  day: number;
  iso: string;
  disabled: boolean;
  selected: boolean;
  status: 'open' | 'demand' | 'lastSpot';
}

const DEFAULT_AVAILABILITY: BookingAvailabilityConfig = {
  warningDaysPerWeekMin: 4,
  warningDaysPerWeekMax: 4,
  blockedDates: [],
  multiDayTourTypes: [
    'Round Tour',
    'Rundreise',
    'Circuit',
    'Tour completo',
    'Circuito',
    'Wycieczka objazdowa',
    'Обзорный тур',
  ],
};

const DAY_TOUR_TYPE_LABELS = new Set([
  'day tour',
  'tagestour',
  "excursion d’une journée",
  "excursion d'une journée",
  'tour di un giorno',
  'excursión de un día',
  'wycieczka jednodniowa',
  'однодневный тур',
]);

@Component({
  selector: 'app-tour-booking-card',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './tour-booking-card.html',
  styleUrls: ['./tour-booking-card.css', '../../../styles/ngx-toastr.lazy.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TourBookingCardComponent implements OnInit, OnChanges {
  @Input({ required: true }) tour!: any;
  @Input({ required: true }) filecode!: string;
  @Input({ required: true }) image!: string;
  /** Same id listing cards use (e.g. tour2ek) so default date/warning match the card. */
  @Input() pageId?: string;
  @Input() priceList: Record<string, number> | null = null;
  @Input() autoLoadPrices = true;

  isLoadingPrices = true;
  isSubmitting = false;
  travelers = 2;
  amountPaid = 0;
  orderNumber = '';
  prices: Record<string, number> = {};
  subtotal = 0;
  total = 0;
  bookingDate: Date = new Date();
  travelDate?: Date;
  firstName = '';
  lastName = '';
  email = '';
  country = '';
  countries: string[] = countriesData.countries;
  countriesList = countryCode as DialCountry[];
  selectedCountry: DialCountry | undefined = this.countriesList.find((c) => c.code === 'LK');
  phoneNumber = '';
  termsAccepted = false;
  minTravelDate = '';
  phoneFieldFocused = false;
  dialPickerOpen = false;
  calendarOpen = false;
  /** First day of the month currently shown in the custom calendar. */
  calendarView = new Date();
  countrySearch = '';
  filteredDialCountries: DialCountry[] = this.countriesList;
  readonly maxOnlineTravelers = 6;
  readonly siteEmail = SITE_EMAIL;
  readonly sitePhone = SITE_PHONE_DISPLAY;
  readonly whatsappUrl = SITE_WHATSAPP_URL;
  readonly encodeURIComponent = encodeURIComponent;

  private availability: BookingAvailabilityConfig = { ...DEFAULT_AVAILABILITY };
  private blockedDateSet = new Set<string>();
  dateStatus: DateAvailabilityStatus = 'open';
  spotsLeft: 0 | SpotsLeft = 0;

  get eurLabel(): string {
    return formatTourPriceEur(this.total || 0);
  }

  /** 1 = day tour, 2 = two-day, 3+ = longer round tours */
  get tourLengthDays(): number {
    const code = String(this.filecode ?? '').toLowerCase();
    if (/^\d+-day-/.test(code)) {
      return parseInt(code, 10);
    }
    if (code.includes('day-tour')) {
      return 1;
    }
    const tourType = String(this.tour?.tourType ?? '').trim().toLowerCase();
    if (DAY_TOUR_TYPE_LABELS.has(tourType)) {
      return 1;
    }
    if (this.availability.multiDayTourTypes.some((t) => t.toLowerCase() === tourType)) {
      return 3;
    }
    return 0;
  }

  get isMultiDayTour(): boolean {
    return this.tourLengthDays >= 2;
  }

  /** True when selected date hits this tour’s demand dates (never blocks booking). */
  get showDemandWarning(): boolean {
    return (
      !this.isGroupBooking &&
      !!this.travelDate &&
      (this.dateStatus === 'demand' || this.dateStatus === 'lastSpot' || this.dateStatus === 'blocked')
    );
  }

  get warningTitleKey(): string {
    if (this.dateStatus === 'lastSpot') {
      return bookingsLeftLeadKey(this.spotsLeft);
    }
    if (this.dateStatus === 'blocked') {
      return 'common.booking.almostFullLead';
    }
    return 'common.booking.demandWarningLead';
  }

  get warningBodyKey(): string {
    if (this.dateStatus === 'lastSpot') {
      return bookingsLeftDetailKey(this.spotsLeft);
    }
    if (this.dateStatus === 'blocked') {
      return 'common.booking.almostFullDetail';
    }
    return 'common.booking.demandWarningDetail';
  }

  get isHotWarning(): boolean {
    return this.dateStatus === 'blocked' || this.dateStatus === 'lastSpot';
  }

  get travelDateIso(): string {
    if (!this.travelDate) {
      return '';
    }
    return toIsoDate(this.travelDate);
  }

  /** Clickable popular dates under the calendar (next ~2 months for this tour). */
  get demandDateHints(): TourDemandHint[] {
    if (this.isGroupBooking) {
      return [];
    }
    return listTourDemandHints(this.tourDemandKey());
  }

  demandHintLabel(hint: TourDemandHint): string {
    return formatShortCardDate(hint.date, this.i18n.locale());
  }

  selectDemandHint(hint: TourDemandHint): void {
    this.onTravelDateChange(hint.iso);
    this.closeCalendar();
  }

  get weekdayLabels(): string[] {
    const locale = this.i18n.locale();
    const fmt = new Intl.DateTimeFormat(locale, { weekday: 'narrow' });
    // 2024-01-01 was a Monday
    return Array.from({ length: 7 }, (_, i) => fmt.format(new Date(2024, 0, 1 + i)));
  }

  get calendarMonthLabel(): string {
    try {
      return new Intl.DateTimeFormat(this.i18n.locale(), {
        month: 'long',
        year: 'numeric',
      }).format(this.calendarView);
    } catch {
      return `${this.calendarView.getMonth() + 1}/${this.calendarView.getFullYear()}`;
    }
  }

  get calendarCells(): CalendarDayCell[] {
    const year = this.calendarView.getFullYear();
    const month = this.calendarView.getMonth();
    const first = new Date(year, month, 1);
    const startPad = (first.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const hintMap = new Map(
      this.demandDateHints.map((h) => [h.iso, h.status] as const),
    );
    const selected = this.travelDateIso;
    const minIso = this.minTravelDate || toIsoDate(new Date());
    const cells: CalendarDayCell[] = [];

    for (let i = 0; i < startPad; i++) {
      cells.push({
        empty: true,
        day: 0,
        iso: '',
        disabled: true,
        selected: false,
        status: 'open',
      });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const iso = toIsoDate(new Date(year, month, day));
      const status = hintMap.get(iso) || 'open';
      cells.push({
        empty: false,
        day,
        iso,
        disabled: iso < minIso,
        selected: iso === selected,
        status,
      });
    }

    return cells;
  }

  toggleCalendar(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    if (this.calendarOpen) {
      this.closeCalendar();
    } else {
      this.openCalendar();
    }
  }

  openCalendar(): void {
    this.closeDialPicker();
    const base = this.travelDate || new Date();
    this.calendarView = new Date(base.getFullYear(), base.getMonth(), 1);
    this.calendarOpen = true;
    this.cdr.markForCheck();
  }

  closeCalendar(): void {
    if (!this.calendarOpen) {
      return;
    }
    this.calendarOpen = false;
    this.cdr.markForCheck();
  }

  shiftCalendarMonth(delta: number): void {
    this.calendarView = new Date(
      this.calendarView.getFullYear(),
      this.calendarView.getMonth() + delta,
      1,
    );
    this.cdr.markForCheck();
  }

  selectCalendarDay(cell: CalendarDayCell): void {
    if (cell.empty || cell.disabled || !cell.iso) {
      return;
    }
    this.onTravelDateChange(cell.iso);
    this.closeCalendar();
  }

  trackByCalendarCell(index: number, cell: CalendarDayCell): string {
    return cell.iso || `e-${index}`;
  }

  @ViewChild('dialPickerRoot') dialPickerRoot?: ElementRef<HTMLElement>;
  @ViewChild('datePickerRoot') datePickerRoot?: ElementRef<HTMLElement>;
  @ViewChild('dialSearchInput') dialSearchInput?: ElementRef<HTMLInputElement>;

  private isBrowser: boolean;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private i18n: LocaleService,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) {
      return;
    }
    this.minTravelDate = toIsoDate(new Date());
    this.generateOrderNumber();
    this.loadAvailabilityConfig();
    if (this.priceList && Object.keys(this.priceList).length) {
      this.applyPrices(this.priceList);
    } else if (this.autoLoadPrices && this.filecode) {
      this.loadTourPrices(this.filecode);
    }
    this.applyDefaultTravelDate();
    this.refreshDateStatus();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['priceList'] && this.priceList && Object.keys(this.priceList).length) {
      this.applyPrices(this.priceList);
    }
    if (changes['tour'] || changes['filecode'] || changes['pageId']) {
      this.applyDefaultTravelDate();
      this.refreshDateStatus();
    }
  }

  /** Same key as listing cards (always pageId) so badge date matches booking warning. */
  private tourDemandKey(): string {
    return resolveDemandTourKey(
      this.pageId || this.tour?.pageId,
      this.filecode || this.tour?.filecode,
      this.tour?.title,
    );
  }

  /**
   * Prefill calendar with the card’s badge date (High demand / 1 left).
   * Never forces “today” — only a matching demand date, or leaves empty.
   */
  private applyDefaultTravelDate(): void {
    if (this.travelDate) {
      return;
    }
    const suggested = defaultBookingDateForTour(this.tourDemandKey());
    if (!suggested) {
      return;
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (suggested < today) {
      return;
    }
    this.travelDate = suggested;
  }

  private applyPrices(priceData: Record<string, number>): void {
    this.prices = priceData;
    this.updateAmounts();
    this.isLoadingPrices = false;
    this.cdr.markForCheck();
  }

  get fullPhone(): string {
    return this.selectedCountry
      ? `${this.selectedCountry.dial_code}${this.phoneNumber}`
      : this.phoneNumber;
  }

  get amountDue(): number {
    return this.total - this.amountPaid;
  }

  get pricePerPerson(): number {
    if (this.isGroupBooking || this.travelers < 1) {
      return 0;
    }
    if (this.subtotal > 0) {
      return this.subtotal / this.travelers;
    }
    return 0;
  }

  /** Online booking & pricing available for 1–6 travelers only */
  get isGroupBooking(): boolean {
    return this.travelers > this.maxOnlineTravelers;
  }

  get canBookOnline(): boolean {
    return !this.isGroupBooking && !this.isLoadingPrices && this.total > 0;
  }

  private loadAvailabilityConfig(): void {
    this.http.get<BookingAvailabilityConfig>('/assets/data/booking-availability.json').subscribe({
      next: (data) => {
        const min = typeof data?.warningDaysPerWeekMin === 'number' ? data.warningDaysPerWeekMin : 4;
        const max = typeof data?.warningDaysPerWeekMax === 'number' ? data.warningDaysPerWeekMax : 4;
        this.availability = {
          warningDaysPerWeekMin: Math.min(7, Math.max(1, min)),
          warningDaysPerWeekMax: Math.min(7, Math.max(min, max)),
          blockedDates: Array.isArray(data?.blockedDates) ? data.blockedDates : [],
          multiDayTourTypes:
            Array.isArray(data?.multiDayTourTypes) && data.multiDayTourTypes.length
              ? data.multiDayTourTypes
              : DEFAULT_AVAILABILITY.multiDayTourTypes,
        };
        this.blockedDateSet = new Set(
          this.availability.blockedDates.map((d) => String(d).slice(0, 10)),
        );
        this.refreshDateStatus();
        this.cdr.markForCheck();
      },
      error: () => {
        this.availability = { ...DEFAULT_AVAILABILITY };
        this.blockedDateSet = new Set();
        this.refreshDateStatus();
        this.cdr.markForCheck();
      },
    });
  }

  private refreshDateStatus(): void {
    if (!this.travelDate) {
      this.dateStatus = 'open';
      this.spotsLeft = 0;
      return;
    }
    const info = demandInfoForDate(
      this.travelDate,
      this.tourDemandKey(),
      this.blockedDateSet,
    );
    this.dateStatus = info.status;
    this.spotsLeft = info.spotsLeft;
  }

  loadTourPrices(fileName: string): void {
    this.isLoadingPrices = true;
    const defaultFile = `/assets/data/US${fileName}.json`;

    this.http
      .get(defaultFile)
      .pipe(
        catchError(() => this.http.get(defaultFile)),
      )
      .subscribe({
        next: (data: any) => {
          this.prices = data.price ?? {};
          if (this.tour) {
            this.tour.title = data.title ?? this.tour.title;
            this.tour.duration = data.duration ?? this.tour.duration;
            this.tour.tourType = data.tourType ?? this.tour.tourType;
            this.tour.overview = data.overview ?? this.tour.overview;
          }
          if (data.images?.[0]) {
            this.image = data.images[0];
          }
          this.updateAmounts();
          this.refreshDateStatus();
          this.isLoadingPrices = false;
          this.cdr.markForCheck();
        },
        error: () => {
          this.isLoadingPrices = false;
          this.cdr.markForCheck();
        },
      });
  }

  generateOrderNumber(): void {
    if (!this.isBrowser) {
      return;
    }

    const lastOrder = localStorage.getItem('lastOrderNumber');
    const newOrder = lastOrder ? parseInt(lastOrder, 10) + 1 : 1;
    localStorage.setItem('lastOrderNumber', newOrder.toString());

    const datePart = new Date().toISOString().slice(2, 10).replace(/-/g, '');
    this.orderNumber = `#${datePart}-${newOrder.toString().padStart(6, '0')}`;
  }

  onTravelersChange(value: number | string): void {
    const parsed = parseInt(String(value), 10);
    this.travelers = Number.isNaN(parsed) ? 1 : Math.min(20, Math.max(1, parsed));
    this.updateAmounts();
    this.cdr.markForCheck();
  }

  updateAmounts(): void {
    if (this.isGroupBooking) {
      this.subtotal = 0;
      this.total = 0;
      return;
    }
    const key = String(this.travelers);
    this.subtotal = this.prices?.[key] ?? 0;
    this.total = this.subtotal;
  }

  onTravelDateChange(dateString: string): void {
    if (dateString) {
      const [y, m, d] = dateString.split('-').map((n) => parseInt(n, 10));
      this.travelDate = new Date(y, m - 1, d);
    } else {
      this.travelDate = undefined;
    }
    this.refreshDateStatus();
    this.cdr.markForCheck();
  }

  trackByCountryCode(_: number, country: DialCountry): string {
    return country.code;
  }

  onPhoneFieldFocus(): void {
    this.phoneFieldFocused = true;
    this.cdr.markForCheck();
  }

  onPhoneFieldBlur(): void {
    this.phoneFieldFocused = false;
    this.cdr.markForCheck();
  }

  toggleDialPicker(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    if (this.dialPickerOpen) {
      this.closeDialPicker();
    } else {
      this.openDialPicker();
    }
  }

  openDialPicker(): void {
    this.closeCalendar();
    this.dialPickerOpen = true;
    this.countrySearch = '';
    this.filteredDialCountries = this.countriesList;
    this.phoneFieldFocused = true;
    this.cdr.detectChanges();
    this.dialSearchInput?.nativeElement.focus();
  }

  closeDialPicker(): void {
    if (!this.dialPickerOpen) return;
    this.dialPickerOpen = false;
    this.countrySearch = '';
    this.filteredDialCountries = this.countriesList;
    this.cdr.markForCheck();
  }

  onCountrySearchChange(): void {
    const q = this.countrySearch.trim().toLowerCase();
    if (!q) {
      this.filteredDialCountries = this.countriesList;
    } else {
      this.filteredDialCountries = this.countriesList.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.dial_code.toLowerCase().includes(q) ||
          c.code.toLowerCase().includes(q),
      );
    }
    this.cdr.markForCheck();
  }

  selectDialCountry(country: DialCountry): void {
    this.selectedCountry = country;
    this.closeDialPicker();
  }

  onDialSearchKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeDialPicker();
      return;
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      const first = this.filteredDialCountries[0];
      if (first) {
        this.selectDialCountry(first);
      }
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.isBrowser) {
      return;
    }
    const target = event.target as Node;
    if (this.dialPickerOpen) {
      const dialRoot = this.dialPickerRoot?.nativeElement;
      if (dialRoot && !dialRoot.contains(target)) {
        this.closeDialPicker();
      }
    }
    if (this.calendarOpen) {
      const dateRoot = this.datePickerRoot?.nativeElement;
      if (dateRoot && !dateRoot.contains(target)) {
        this.closeCalendar();
      }
    }
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent): void {
    if (!this.isBrowser || event.key !== 'Escape') {
      return;
    }
    if (this.dialPickerOpen) {
      event.preventDefault();
      this.closeDialPicker();
    }
    if (this.calendarOpen) {
      event.preventDefault();
      this.closeCalendar();
    }
  }

  completeBooking(): void {
    if (this.isSubmitting || this.isGroupBooking || !this.canBookOnline) {
      return;
    }

    const bookingDetails = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.fullPhone,
      country: this.country,
      travelers: this.travelers,
      tour: this.tour,
      orderNumber: this.orderNumber,
      total: this.total,
      bookingDate: this.bookingDate,
      travelDate: this.travelDate,
      paymentMethod: this.i18n.t('common.booking.payAtDestination'),
    };

    this.isSubmitting = true;
    this.toastr.info(
      this.i18n.t('common.booking.toastProcessing'),
      this.i18n.t('common.booking.toastPleaseWait'),
    );

    this.http
      .post(`${environment.backendUrl}/send-booking-email`, bookingDetails)
      .subscribe({
        next: () => {
          // Google Ads conversion fires only when a real conversion ID is configured
          // in third-party-scripts.util (placeholder IDs are intentionally not used).

          this.toastr.success(
            this.i18n.t('common.booking.toastSuccess'),
            this.i18n.t('common.booking.toastConfirmed'),
          );

          setTimeout(() => {
            this.router.navigate(['/booking-success'], {
              state: {
                booking: bookingDetails,
                orderNumber: this.orderNumber,
                total: this.total,
                subtotal: this.subtotal,
                travelers: this.travelers,
                tour: this.tour,
                amountPaid: this.amountPaid,
                amountDue: this.amountDue,
              },
            });
          }, 1500);
        },
        error: (err) => {
          console.error('Email error:', err);
          this.isSubmitting = false;
          this.toastr.error(
            this.i18n.t('common.booking.toastErrorMsg'),
            this.i18n.t('common.booking.toastFailed'),
          );
        },
      });
  }
}

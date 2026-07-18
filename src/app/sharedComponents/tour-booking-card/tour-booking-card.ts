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

declare let gtag: Function;

interface DialCountry {
  name: string;
  dial_code: string;
  code: string;
  flag: string;
}

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
  countrySearch = '';
  filteredDialCountries: DialCountry[] = this.countriesList;
  readonly maxOnlineTravelers = 6;

  @ViewChild('dialPickerRoot') dialPickerRoot?: ElementRef<HTMLElement>;
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
    this.minTravelDate = new Date().toISOString().slice(0, 10);
    this.generateOrderNumber();
    if (this.priceList && Object.keys(this.priceList).length) {
      this.applyPrices(this.priceList);
    } else if (this.autoLoadPrices && this.filecode) {
      this.loadTourPrices(this.filecode);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['priceList'] && this.priceList && Object.keys(this.priceList).length) {
      this.applyPrices(this.priceList);
    }
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
      this.travelDate = new Date(dateString);
    }
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
    if (!this.isBrowser || !this.dialPickerOpen) return;
    const root = this.dialPickerRoot?.nativeElement;
    if (root && !root.contains(event.target as Node)) {
      this.closeDialPicker();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent): void {
    if (!this.isBrowser || !this.dialPickerOpen) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeDialPicker();
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
          if (typeof gtag !== 'undefined') {
            gtag('event', 'conversion', {
              send_to: 'AW-1234567890/ABCDefGhijkLmNoP',
              value: this.total,
              currency: 'USD',
              transaction_id: this.orderNumber,
            });
          }

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

import {
  Component,
  Inject,
  Input,
  OnChanges,
  OnInit,
  PLATFORM_ID,
  SimpleChanges,
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

declare let gtag: Function;

@Component({
  selector: 'app-tour-booking-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tour-booking-card.html',
  styleUrls: ['./tour-booking-card.css', '../../../styles/ngx-toastr.lazy.scss'],
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
  countriesList = countryCode;
  selectedCountry = this.countriesList.find((c) => c.code === 'LK');
  phoneNumber = '';
  termsAccepted = false;
  minTravelDate = '';
  readonly maxOnlineTravelers = 6;

  private isBrowser: boolean;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
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
        },
        error: () => {
          this.isLoadingPrices = false;
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
    this.toastr.info('Processing your booking...', 'Please wait');

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
            'Your booking has been completed successfully!',
            'Booking Confirmed',
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
            'There was an error processing your booking. Please try again later.',
            'Booking Failed',
          );
        },
      });
  }
}

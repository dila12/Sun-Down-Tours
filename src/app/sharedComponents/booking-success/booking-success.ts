import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { trackBookingConversion } from '../../utils/third-party-scripts.util';

@Component({
  selector: 'app-booking-success',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './booking-success.html',
  styleUrl: './booking-success.css',
})
export class BookingSuccessComponent {
  booking: any;
  orderNumber = '';
  total = 0;
  subtotal = 0;
  travelers = 0;
  tour: any = {};
  bookingDate: Date = new Date();
  travelDate?: Date;
  amountPaid = 0;
  amountDue = 0;

  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,   private router: Router) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      const state = history.state;
      console.log('BookingSuccessComponent state:', state);
      if (
        !state?.booking ||
        !state?.orderNumber
      ) {
        this.router.navigate(['/sri-lanka-private-tour']);

        return;
      }
      this.booking = state?.booking;
      this.orderNumber = state?.orderNumber ?? '';
      this.total = state?.total ?? 0;
      this.subtotal = state?.subtotal ?? 0;
      this.travelers = state?.travelers ?? 0;
      this.tour = state?.tour ?? {};
      this.amountPaid = state?.amountPaid ?? 0;
      this.amountDue = state?.amountDue ?? 0;
      this.travelDate = state?.booking?.travelDate
        ? new Date(state.booking.travelDate)
        : undefined;

      trackBookingConversion(this.orderNumber,this.total,'USD');
    }
  }

  get travelerName(): string {
    const first = this.booking?.firstName ?? '';
    const last = this.booking?.lastName ?? '';
    const name = `${first} ${last}`.trim();
    return name || 'Traveler';
  }

  printInvoice(): void {
    if (!this.isBrowser) {
      return;
    }
    window.print();
  }
}

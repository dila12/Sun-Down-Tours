import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-booking-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-success.html',
  styleUrl: './booking-success.css'
})
export class BookingSuccessComponent {
  booking: any;
  orderNumber = '';
  total = 0;
  subtotal = 0;
  travelers = 0;
  tour: any;
  bookingDate: Date = new Date();
  amountPaid = 0;
  amountDue = 0;

  private isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      const state = history.state;
      this.booking = state.booking;
      this.orderNumber = state.orderNumber;
      this.total = state.total;
      this.subtotal = state.subtotal;
      this.travelers = state.travelers;
      this.tour = state.tour;
      this.amountPaid = state.amountPaid;
      this.amountDue = state.amountDue;
    }
  }

    printInvoice() {
    if (!this.isBrowser) return;
    const printContents = document.getElementById('invoiceContent')?.innerHTML;
    const originalContents = document.body.innerHTML;

    if (isPlatformBrowser(this.platformId)) {
      if (printContents) {
        const printWindow = window.open('', '', 'height=700,width=900');
        printWindow!.document.write(`
      <html>
        <head>
          <title>Booking Invoice</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 20px;
              color: #333;
            }
            .card {
              box-shadow: 0 4px 8px rgba(0,0,0,0.1);
              padding: 20px;
              border-radius: 10px;
            }
            .list-group-item {
              border: none;
              border-bottom: 1px solid #eee;
              padding: 10px 0;
            }
            .list-group-item:last-child {
              border-bottom: none;
            }
            .text-center { text-align: center; }
            .fw-bold { font-weight: bold; }
            .text-success { color: green; }
            .text-danger { color: red; }
            .text-primary { color: #007bff; }
          </style>
        </head>
        <body>
          ${printContents}
        </body>
      </html>
    `);
        printWindow!.document.close();
        printWindow!.print();
      }
    }
  }

}
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TourBookingCardComponent } from '../tour-booking-card/tour-booking-card';
import { TranslatePipe } from '../../i18n/t.pipe';

export interface Activity {
  type: string;
  title: title;
  description?: string;
  icon?: string;
  image?: string;
  extra?: string[];
}

export interface title {
  title?: string;
  icon?: string;
  color?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: Activity[];
}

export interface TourDetails {
  title: string;
  description: string;
  duration: string;
  persons: string;
  price: number;
  tourType?: string;
  overview?: string;
  itinerary?: ItineraryDay[];
  includes?: string[];
  excludes?: string[];
  filecode?: string;
}

@Component({
  selector: 'app-tour-details-component',
  standalone: true,
  imports: [CommonModule, TourBookingCardComponent, TranslatePipe],
  templateUrl: './tour-details-component.html',
  styleUrl: './tour-details-component.css',
})
export class TourDetailsComponent implements OnInit {
  @Input() tour!: TourDetails;
  @Input() filecode?: string;
  @Input() image?: string;
  @Input() bookingTour?: any;

  expandedDays: { [key: number]: boolean } = {};
  selectedImage: string | null = null;
  prices: Record<string, number> = {};
  isLoadingPrices = false;

  private isBrowser: boolean;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  get showBooking(): boolean {
    return !!(this.filecode && this.image && this.bookingTour);
  }

  get displayPrice(): number {
    return this.prices['2'] ?? this.tour?.price ?? 0;
  }

  ngOnInit(): void {
    if (this.filecode && this.isBrowser) {
      this.loadPrices(this.filecode);
    }
  }

  loadPrices(filecode: string): void {
    this.isLoadingPrices = true;
    const priceFile = `/assets/data/US${filecode}.json`;

    this.http.get(priceFile).subscribe({
      next: (data: any) => {
        this.prices = data.price ?? {};
        if (data.images?.[0] && this.image) {
          this.image = data.images[0];
        }
        this.isLoadingPrices = false;
      },
      error: () => {
        this.isLoadingPrices = false;
      },
    });
  }

  toggleDay(day: number): void {
    const isAlreadyOpen = this.expandedDays[day];
    this.expandedDays = {};
    if (!isAlreadyOpen) {
      this.expandedDays[day] = true;
    }
  }

  openImage(img: string): void {
    this.selectedImage = img;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}

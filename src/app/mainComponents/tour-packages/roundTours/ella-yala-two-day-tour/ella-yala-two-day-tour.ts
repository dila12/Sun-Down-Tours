import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CountryService } from '../../../../Services/country.service';
import {
  TourDetails,
  TourDetailsComponent,
} from '../../../../sharedComponents/tour-details-component/tour-details-component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TourContentService } from '../../../../i18n/tours/tour-content.service';
import { PackageItemComponent } from '../../../../sharedComponents/package-item-component/package-item-component';
import { TranslatePipe } from '../../../../i18n/t.pipe';
import { SeoService } from '../../../../../seo.service';

@Component({
  selector: 'app-ella-yala-two-day-tour',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TourDetailsComponent,
    PackageItemComponent,
    TranslatePipe,
  ],
  templateUrl: './ella-yala-two-day-tour.html',
  styleUrl: './ella-yala-two-day-tour.css',
})
export class EllaYalaTwoDayTour {
  images: string[] = [
    'assets/img/2daysTours/1.jpeg',
    'assets/img/2daysTours/2.jpeg',
    'assets/img/2daysTours/3.jpeg',
    'assets/img/2daysTours/4.jpg',
    'assets/img/2daysTours/5.jpg',
    'assets/img/2daysTours/6.jpeg',
  ];

  currentIndex = 0;
  intervalId: any;
  selectedTours: any[] = [];
  userCountry = 'US';
  price = 0;

  constructor(
    private router: Router,
    private http: HttpClient,
    private countryService: CountryService,
    private seo: SeoService,
    private tours: TourContentService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  get currentImage() {
    return this.images[this.currentIndex];
  }

  get nextImages() {
    return Array.from({ length: 4 }, (_, i) => {
      const index = (this.currentIndex + i + 1) % this.images.length;
      return { src: this.images[index], index };
    });
  }

  get tourForDetails(): TourDetails {
    const t = this.tours.detail('tour2ey')!;
    return {
      title: t.title,
      description: t.description,
      duration: t.duration,
      persons: t.persons,
      price: this.price,
      tourType: t.tourType,
      overview: t.overview,
      itinerary: t.itinerary as TourDetails['itinerary'],
      includes: t.includes,
      excludes: t.excludes,
    };
  }

  get filecode(): string {
    return (
      this.tours.detail('tour2ey')?.filecode ??
      this.tours.meta('tour2ey')?.filecode ??
      '2-day-ella-kandy-private-tour-sri-lanka'
    );
  }

  get bookingTour() {
    return this.tours.detail('tour2ey');
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToImage(index: number) {
    this.currentIndex = index;
  }

  goToImageFromThumb(index: number) {
    this.currentIndex = index;
  }

  async ngOnInit() {
    this.seo.updateCanonicalUrl('https://www.sundowntours.com/2-day-ella-yala-private-tour-sri-lanka');
    if (isPlatformBrowser(this.platformId)) {
      this.userCountry = await this.countryService.detectCountry();
      this.price = await this.loadPrice(this.filecode);
      this.selectedTours = await this.loadRelatedWithPrices('tour2ey');
      this.intervalId = setInterval(() => this.nextImage(), 3000);
    } else {
      this.userCountry = 'US';
      this.price = 0;
      this.selectedTours = this.tours.related('tour2ey', 3);
    }
  }

  private async loadRelatedWithPrices(pageId: string) {
    const cards = this.tours.related(pageId, 3);
    return Promise.all(
      cards.map(async (tour) => ({
        ...tour,
        price: await this.loadPrice(tour.filecode),
      })),
    );
  }

  loadPrice(filecode: string): Promise<number> {


    if (!isPlatformBrowser(this.platformId)) {
      return Promise.resolve(0);
    }

    //const countryFile = `assets/data/${this.userCountry}${filecode}.json`;
    const defaultFile = `assets/data/US${filecode}.json`;

    return new Promise((resolve) => {
      this.http.get(defaultFile).subscribe({
        next: (data: any) => resolve(data?.price?.['2'] ?? 0),
        error: () => {
          this.http.get(defaultFile).subscribe({
            next: (data: any) => resolve(data?.price?.['2'] ?? 0),
            error: () => resolve(0),
          });
        },
      });
    });
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}

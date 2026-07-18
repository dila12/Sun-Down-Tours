import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import {
  TourDetails,
  TourDetailsComponent,
} from '../../../../sharedComponents/tour-details-component/tour-details-component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { PackageItemComponent } from '../../../../sharedComponents/package-item-component/package-item-component';
import { TourContentService } from '../../../../i18n/tours/tour-content.service';
import { TranslatePipe } from '../../../../i18n/t.pipe';
import { HttpClient } from '@angular/common/http';
import { CountryService } from '../../../../Services/country.service';
import { SeoService } from '../../../../../seo.service';

@Component({
  selector: 'app-ten-days-tour-component',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TourDetailsComponent,
    PackageItemComponent,
    TranslatePipe,
  ],
  templateUrl: './ten-days-tour-component.html',
  styleUrl: './ten-days-tour-component.css',
})
export class TenDaysTourComponent implements OnInit , OnDestroy {
  images: string[] = [
    'assets/img/5daysTours/lzurk0uk82qqjh6soonh.jpg',
    'assets/img/5daysTours/u19dmfbuae46dhzpqctu.jpg',
    'assets/img/5daysTours/p5nnnq3wt124wwoa0rvo.jpg',
    'assets/img/5daysTours/fhlfhn3lx1onsizfpy76.jpg',
    'assets/img/5daysTours/dtebtjzozh7sfof4ci7c.jpg',
  ];

  currentIndex = 0;
  intervalId: any = null;
  selectedTours: any[] = [];
  userCountry = 'US';
  price = 0;

  constructor(
    private router: Router,
    private http: HttpClient,
    private countryService: CountryService,
    private seo: SeoService,
    private tours: TourContentService,
    @Inject(PLATFORM_ID) private platformId: Object
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
    const t = this.tours.detail('tour10')!;
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
      this.tours.detail('tour10')?.filecode ??
      this.tours.meta('tour10')?.filecode ??
      '10-day-sri-lanka-tour'
    );
  }

  get bookingTour() {
    return this.tours.detail('tour10');
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
    this.seo.updateCanonicalUrl('https://www.sundowntours.com/10-day-sri-lanka-tour');
    const filecode = this.filecode;
    if (isPlatformBrowser(this.platformId)) {
      this.userCountry = await this.countryService.detectCountry();
      this.price = await this.loadPrice(filecode);
      this.selectedTours = await this.loadRelatedWithPrices('tour10');
      this.intervalId = setInterval(() => this.nextImage(), 3000);
    } else {
      this.userCountry = 'US';
      this.price = 0;
      this.selectedTours = this.tours.related('tour10', 3);
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
            error: () => resolve(0)
          });
        }
      });

    });
  }

  ngOnDestroy() {
    const isBrowser = isPlatformBrowser(this.platformId);
    if (isBrowser && this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}

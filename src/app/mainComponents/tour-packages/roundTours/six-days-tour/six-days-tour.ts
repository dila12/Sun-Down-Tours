import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryService } from '../../../../Services/country.service';
import { TourDetails, TourDetailsComponent } from '../../../../sharedComponents/tour-details-component/tour-details-component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TourContentService } from '../../../../i18n/tours/tour-content.service';
import { PackageItemComponent } from '../../../../sharedComponents/package-item-component/package-item-component';
import { TranslatePipe } from '../../../../i18n/t.pipe';
import { SeoService } from '../../../../../seo.service';

@Component({
  selector: 'app-six-days-tour',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TourDetailsComponent,
    PackageItemComponent,
    TranslatePipe,
  ],
  templateUrl: './six-days-tour.html',
  styleUrl: './six-days-tour.css'
})
export class SixDaysTour {
images: string[] = [
    'assets/img/SixdaysTous/1.jpg',
    'assets/img/SixdaysTous/6.jpeg',
    'assets/img/SixdaysTous/3.jpg',
    'assets/img/SixdaysTous/4.jpg',
    'assets/img/SixdaysTous/5.jpg',
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
    const t = this.tours.detail('tour6')!;
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
      this.tours.detail('tour6')?.filecode ??
      this.tours.meta('tour6')?.filecode ??
      '6-day-sri-lanka-private-tour'
    );
  }

  get bookingTour() {
    return this.tours.detail('tour6');
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
    this.seo.updateCanonicalUrl('https://www.sundowntours.com/6-day-sri-lanka-private-tour');
    if (isPlatformBrowser(this.platformId)) {
      this.userCountry = await this.countryService.detectCountry();
      this.price = await this.loadPrice(this.filecode);
      this.selectedTours = await this.loadRelatedWithPrices('tour6');
      this.intervalId = setInterval(() => this.nextImage(), 3000);
    } else {
      this.userCountry = 'US';
      this.price = 0;
      this.selectedTours = this.tours.related('tour6', 3);
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
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}

import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  TourDetails,
  TourDetailsComponent,
} from '../../../../sharedComponents/tour-details-component/tour-details-component';
import { PackageItemComponent } from '../../../../sharedComponents/package-item-component/package-item-component';
import { HttpClient } from '@angular/common/http';
import { CountryService } from '../../../../Services/country.service';
import { SeoService } from '../../../../../seo.service';
import { TranslatePipe } from '../../../../i18n/t.pipe';
import { FaqSectionComponent } from '../../../../sharedComponents/faq-section/faq-section';
import { TourContentService } from '../../../../i18n/tours/tour-content.service';

@Component({
  selector: 'app-seven-days-tour-component',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TourDetailsComponent,
    PackageItemComponent,
    TranslatePipe,
    FaqSectionComponent,
  ],
  templateUrl: './seven-days-tour-component.html',
  styleUrls: ['./seven-days-tour-component.css'],
})
export class SevenDaysTourComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/img/5daysTours/1.jpg',
    'assets/img/5daysTours/18.jpg',
    'assets/img/5daysTours/28.png',
    'assets/img/5daysTours/24.jpg',
    'assets/img/5daysTours/34.jpg',
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
  ) { }

  get currentImage() {
    return this.images[this.currentIndex];
  }

  get tourForDetails(): TourDetails {
    const t = this.tours.detail('tour7')!;
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
      this.tours.detail('tour7')?.filecode ??
      this.tours.meta('tour7')?.filecode ??
      '7-day-sri-lanka-tour'
    );
  }

  get bookingTour() {
    return this.tours.detail('tour7');
  }

  get nextImages() {
    return Array.from({ length: 4 }, (_, i) => {
      const index = (this.currentIndex + i + 1) % this.images.length;
      return { src: this.images[index], index };
    });
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
    this.seo.updateCanonicalUrl('https://www.sundowntours.com/7-day-sri-lanka-tour');
    const filecode = this.filecode;
    if (isPlatformBrowser(this.platformId)) {
      this.userCountry = await this.countryService.detectCountry();
      this.price = await this.loadPrice(filecode);
      this.selectedTours = await this.loadRelatedWithPrices('tour7');
      this.intervalId = setInterval(() => this.nextImage(), 3000);
    } else {
      this.userCountry = 'US';
      this.price = 0;
      this.selectedTours = this.tours.related('tour7', 3);
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
    const defaultFile = `assets/data/US${filecode}.json`;

    return new Promise((resolve) => {
      this.http.get(defaultFile).subscribe({
        next: (data: any) => resolve(data?.price?.['2'] ?? 0),
        error: () => resolve(0),
      });
    });
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}

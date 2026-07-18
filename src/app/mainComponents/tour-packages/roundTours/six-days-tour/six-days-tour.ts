import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryService } from '../../../../Services/country.service';
import { TourDetails, TourDetailsComponent } from '../../../../sharedComponents/tour-details-component/tour-details-component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TourContentService } from '../../../../i18n/tours/tour-content.service';
import { TourGalleryComponent } from '../../../../sharedComponents/tour-gallery/tour-gallery';
import { PackageItemComponent } from '../../../../sharedComponents/package-item-component/package-item-component';
import { TranslatePipe } from '../../../../i18n/t.pipe';
import { SeoService } from '../../../../../seo.service';
import { loadTourPrice2p } from '../../../../utils/tour-price.util';

@Component({
  selector: 'app-six-days-tour',
  standalone: true,
  imports: [CommonModule,
    RouterModule,
    TourDetailsComponent,
    PackageItemComponent,
    TranslatePipe, TourGalleryComponent],
  templateUrl: './six-days-tour.html',
  styleUrl: './six-days-tour.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SixDaysTour {
  selectedTours: any[] = [];
  userCountry = 'US';
  price = 0;

  constructor(private router: Router,
    private http: HttpClient,
    private countryService: CountryService,
    private seo: SeoService,
    private tours: TourContentService,
    @Inject(PLATFORM_ID) private platformId: Object, private cdr: ChangeDetectorRef) {}


  currentImage = '';

  onGallerySrc(src: string): void {
    this.currentImage = src;
    this.cdr.markForCheck();
  }

  trackByTour(index: number, tour: { pageId?: string; filecode?: string; title?: string }): string | number {
    return tour.pageId ?? tour.filecode ?? tour.title ?? index;
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
      seoIntro: t.seoIntro,
      highlights: t.highlights,
      whoIsFor: t.whoIsFor,
      bestTimeNote: t.bestTimeNote,
      faq: t.faq,
      itinerary: t.itinerary as TourDetails['itinerary'],
      includes: t.includes,
      excludes: t.excludes,
      pageId: 'tour6',
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

  async ngOnInit() {
    this.seo.updateCanonicalUrl('https://www.sundowntours.com/6-day-sri-lanka-private-tour');
    if (isPlatformBrowser(this.platformId)) {
      this.userCountry = await this.countryService.detectCountry();
      this.price = await this.loadPrice(this.filecode);
      this.selectedTours = await this.loadRelatedWithPrices('tour6');
      this.cdr.markForCheck();
} else {
      this.userCountry = 'US';
      this.price = 0;
      this.selectedTours = this.tours.related('tour6', 3);
      this.cdr.markForCheck();
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
    return loadTourPrice2p(this.http, filecode);
  }

}

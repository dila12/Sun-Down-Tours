import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TourDetails, TourDetailsComponent } from '../../../../sharedComponents/tour-details-component/tour-details-component';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TourContentService } from '../../../../i18n/tours/tour-content.service';
import { CountryService } from '../../../../Services/country.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TourGalleryComponent } from '../../../../sharedComponents/tour-gallery/tour-gallery';
import { PackageItemComponent } from '../../../../sharedComponents/package-item-component/package-item-component';
import { TranslatePipe } from '../../../../i18n/t.pipe';
import { SeoService } from '../../../../../seo.service';
import { loadTourPrice2p } from '../../../../utils/tour-price.util';

@Component({
  selector: 'app-sigiriya-day-tour-component',
  standalone: true,
  imports: [CommonModule, RouterModule, TourDetailsComponent, PackageItemComponent, TranslatePipe, TourGalleryComponent],
  templateUrl: './sigiriya-day-tour-component.html',
  styleUrl: './sigiriya-day-tour-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigiriyaDayTourComponent implements OnInit {
  selectedTours: any[] = [];
  userCountry = 'US';
  price = 0;

  currentImage = '';

  onGallerySrc(src: string): void {
    this.currentImage = src;
    this.cdr.markForCheck();
  }

  trackByTour(index: number, tour: { pageId?: string; filecode?: string; title?: string }): string | number {
    return tour.pageId ?? tour.filecode ?? tour.title ?? index;
  }

  get tourForDetails(): TourDetails {
    const t = this.tours.detail('sigiriyaDay')!;
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
      pageId: 'sigiriyaDay',
    };
  }

  get filecode(): string {
    return (
      this.tours.detail('sigiriyaDay')?.filecode ??
      this.tours.meta('sigiriyaDay')?.filecode ??
      'sigiriya-day-tour'
    );
  }

  get bookingTour() {
    return this.tours.detail('sigiriyaDay');
  }


  constructor(private router: Router,
    private http: HttpClient,
    private countryService: CountryService,
    private seo: SeoService,
    private tours: TourContentService,
    @Inject(PLATFORM_ID) private platformId: Object, private cdr: ChangeDetectorRef) {}

  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.userCountry = await this.countryService.detectCountry();
      this.price = await this.loadPrice(this.filecode);
      this.selectedTours = await this.loadRelatedWithPrices('sigiriyaDay');
      this.cdr.markForCheck();
} else {
      this.userCountry = 'US';
      this.price = 0;
      this.selectedTours = this.tours.related('sigiriyaDay', 3);
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

import { Component, Inject, PLATFORM_ID, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PackageItemComponent } from '../../sharedComponents/package-item-component/package-item-component';
import { HttpClient } from '@angular/common/http';
import tourdetails from '../../../assets/data/tourdetails.json';
import { LocaleService } from '../../i18n/locale.service';
import { TranslatePipe } from '../../i18n/t.pipe';
import { FaqSectionComponent } from '../../sharedComponents/faq-section/faq-section';
import { TourContentService, type TourCardView } from '../../i18n/tours/tour-content.service';

@Component({
  selector: 'app-tour-packages',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterModule, PackageItemComponent, TranslatePipe, FaqSectionComponent],
  templateUrl: './tour-packages.html',
  styleUrl: './tour-packages.css'
})
export class TourPackages {
  readonly i18n = inject(LocaleService);
  private readonly tours = inject(TourContentService);

  dayTours: TourCardView[] = [];
  multiDayTours: TourCardView[] = [];

  activeTab: 'multi' | 'day' = 'multi';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  path(pageId: string): string {
    return this.i18n.path(pageId);
  }

  ngOnInit() {
    const multiPriceMap = new Map(
      tourdetails.multiDayTours.map((tour: any) => [
        tour.name,
        tour.price?.['2'] ?? 0
      ])
    );

    const dayPriceMap = new Map(
      tourdetails.dayTours.map((tour: any) => [
        tour.name,
        tour.price?.['2'] ?? 0
      ])
    );

    this.dayTours = this.tours.cards('day').map((tour) => ({
      ...tour,
      price: dayPriceMap.get(tour.filecode) ?? 0,
    }));

    this.multiDayTours = this.tours.cards('multi').map((tour) => ({
      ...tour,
      price: multiPriceMap.get(tour.filecode) ?? 0,
    }));
  }

  setTab(tab: 'multi' | 'day') {
    this.activeTab = tab;
  }
}

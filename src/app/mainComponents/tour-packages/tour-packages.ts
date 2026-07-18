import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID, inject } from '@angular/core';
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
  styleUrl: './tour-packages.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    const resolve = (entries: any[], filecode: string, label: string): number => {
      const match = entries.find(
        (t: any) => t.filecode === filecode || t.name === filecode,
      );
      const amount = Number(match?.price?.['2'] ?? match?.price?.[2] ?? 0);
      if (amount > 0) {
        return amount;
      }
      console.error(
        `[Sundown Tours] Missing ${label} price for "${filecode}" in assets/data/tourdetails.json. ` +
          `Also check assets/data/US${filecode}.json.`,
      );
      return 0;
    };

    this.dayTours = this.tours.cards('day').map((tour) => ({
      ...tour,
      price: resolve(tourdetails.dayTours, tour.filecode, 'day-tour'),
    }));

    this.multiDayTours = this.tours.cards('multi').map((tour) => ({
      ...tour,
      price: resolve(tourdetails.multiDayTours, tour.filecode, 'multi-day'),
    }));
  }

  setTab(tab: 'multi' | 'day') {
    this.activeTab = tab;
  }

  trackByTour(index: number, tour: TourCardView): string | number {
    return tour.pageId ?? tour.filecode ?? tour.id ?? index;
  }
}

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  AfterViewInit,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { PackageItemComponent } from '../../sharedComponents/package-item-component/package-item-component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { onImageError, toWebpSrc, buildSrcSet, defaultSizes, bestImageSrc, heroLcpSrc, HERO_LCP_BASE } from '../../utils/image.util';
import { HomeContactSectionComponent } from './sections/home-contact-section/home-contact-section';
import { HomeTeamSectionComponent } from './sections/home-team-section/home-team-section';
import { HomeElfsightWidgetComponent } from './sections/home-elfsight-widget/home-elfsight-widget';
import { HomePopularToursComponent } from './sections/home-popular-tours/home-popular-tours';
import { HomeSeoSectionComponent } from './sections/home-seo-section/home-seo-section';
import { SocialIconComponent } from '../../sharedComponents/social-icon/social-icon';
import { LocaleService } from '../../i18n/locale.service';
import { TranslatePipe } from '../../i18n/t.pipe';
import { FaqSectionComponent } from '../../sharedComponents/faq-section/faq-section';
import { TourContentService, type TourCardView } from '../../i18n/tours/tour-content.service';

interface TourSlide {
  src: string;
  alt: string;
  heading: string;
}

interface Destination {
  name: string;
  src: string;
  alt: string;
}

@Component({
  selector: 'app-home-page-component',
  standalone: true,
  imports: [
    CommonModule,
    PackageItemComponent,
    RouterModule,
    HomeContactSectionComponent,
    HomeTeamSectionComponent,
    HomeElfsightWidgetComponent,
    HomePopularToursComponent,
    HomeSeoSectionComponent,
    SocialIconComponent,
    TranslatePipe,
    FaqSectionComponent,
  ],
  templateUrl: './home-page-component.html',
  styleUrl: './home-page-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit, OnDestroy {
  readonly i18n = inject(LocaleService);
  private readonly tourContent = inject(TourContentService);

  path(pageId: string): string {
    return this.i18n.path(pageId);
  }

  dayTours: TourCardView[] = [];
  multiDayTours: TourCardView[] = [];
  displayCount = 6;
  visibleTours: TourCardView[] = [];

  activeTab: 'multi' | 'day' = 'multi';
  showAllTours = false;
  loadingMore = false;
  activeSlide = 0;
  private carouselTimer?: ReturnType<typeof setInterval>;

  readonly onImageError = onImageError;
  readonly buildSrcSet = buildSrcSet;
  readonly bestImageSrc = bestImageSrc;
  readonly defaultSizes = defaultSizes;
  readonly heroSizes = '100vw';
  readonly destSizes = '(max-width: 576px) 100vw, (max-width: 992px) 50vw, 400px';
  readonly heroLcpSrc = heroLcpSrc(640);
  readonly heroLcpSrcSet = buildSrcSet(HERO_LCP_BASE);
  readonly heroLcpBase = HERO_LCP_BASE;

  readonly heroSlide: TourSlide = {
    src: HERO_LCP_BASE,
    alt: 'home.hero.title',
    heading: 'home.hero.title',
  };

  readonly extraSlides: TourSlide[] = [
    {
      src: toWebpSrc('assets/img/5daysTours/32.jpg'),
      alt: 'home.hero.slide2',
      heading: 'home.hero.slide2',
    },
    {
      src: toWebpSrc('assets/img/5daysTours/28.png'),
      alt: 'home.hero.slide3',
      heading: 'home.hero.slide3',
    },
    {
      src: toWebpSrc('assets/img/5daysTours/41.jpg'),
      alt: 'home.hero.slide4',
      heading: 'home.hero.slide4',
    },
    {
      src: toWebpSrc('assets/img/mainpage/5.jpg'),
      alt: 'home.hero.slide5',
      heading: 'home.hero.slide5',
    },
  ];

  readonly slides: TourSlide[] = [this.heroSlide, ...this.extraSlides];

  readonly destinations: Destination[] = [
    { name: 'home.destinations.sigiriya', src: 'assets/img/destination-1-opt.webp', alt: 'home.destinations.sigiriyaAlt' },
    { name: 'home.destinations.ella', src: 'assets/img/destination-2-opt.webp', alt: 'home.destinations.ellaAlt' },
    { name: 'home.destinations.yala', src: 'assets/img/destination-3-opt.webp', alt: 'home.destinations.yalaAlt' },
    { name: 'home.destinations.kandy', src: toWebpSrc('assets/img/destination-4.jpg'), alt: 'home.destinations.kandyAlt' },
    { name: 'home.destinations.dambulla', src: 'assets/img/destination-5-opt.webp', alt: 'home.destinations.dambullaAlt' },
    { name: 'home.destinations.galle', src: toWebpSrc('assets/img/destination-6.jpg'), alt: 'home.destinations.galleAlt' },
  ];

  readonly aboutMainSrc = toWebpSrc('assets/img/5daysTours/6.jpg');
  readonly aboutGallery = [
    { src: toWebpSrc('assets/img/about-1.jpg'), alt: 'home.about.gallery1Alt' },
    { src: toWebpSrc('assets/img/about-2.jpg'), alt: 'home.about.gallery2Alt' },
  ];

  private cachedPriceData: any = null;
  private hasFullPriceData = false;

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  ngOnInit() {
    this.refreshLocalizedCards();
    this.loadHomePrices();
    this.startCarouselAutoplay();
  }

  /** Rebuild card lists from locale dictionaries (no English JSON text). */
  private refreshLocalizedCards() {
    this.multiDayTours = this.tourContent.cards('multi');
    this.dayTours = this.tourContent.cards('day');
    this.applyPrices();
    this.visibleTours = (
      this.activeTab === 'day' ? this.dayTours : this.multiDayTours
    ).slice(0, this.displayCount);
  }

  ngOnDestroy() {
    if (this.carouselTimer) {
      clearInterval(this.carouselTimer);
    }
  }

  prevSlide() {
    const total = this.slides.length;
    if (total <= 1) return;
    this.activeSlide = (this.activeSlide - 1 + total) % total;
    this.cdr.markForCheck();
  }

  nextSlide() {
    const total = this.slides.length;
    if (total <= 1) return;
    this.activeSlide = (this.activeSlide + 1) % total;
    this.cdr.markForCheck();
  }

  goToSlide(index: number) {
    this.activeSlide = index;
    this.cdr.markForCheck();
  }

  private startCarouselAutoplay() {
    if (!isPlatformBrowser(this.platformId) || this.slides.length <= 1) return;
    this.carouselTimer = setInterval(() => this.nextSlide(), 6000);
  }

  private applyPrices() {
    if (!this.cachedPriceData) {
      return;
    }

    const multiPriceMap = new Map(
      this.cachedPriceData.multiDayTours.map((tour: any) => [
        tour.filecode ?? tour.name,
        tour.price?.['2'] ?? 0,
      ]),
    );

    const dayPriceMap = new Map(
      this.cachedPriceData.dayTours.map((tour: any) => [
        tour.filecode ?? tour.name,
        tour.price?.['2'] ?? 0,
      ]),
    );

    this.multiDayTours = this.multiDayTours.map((tour) => ({
      ...tour,
      price: (multiPriceMap.get(tour.filecode) as number | undefined) ?? tour.price ?? 0,
    }));

    this.dayTours = this.dayTours.map((tour) => ({
      ...tour,
      price: (dayPriceMap.get(tour.filecode) as number | undefined) ?? tour.price ?? 0,
    }));
  }

  private async loadHomePrices() {
    try {
      const priceData = await firstValueFrom(
        this.http.get<any>('assets/data/home-tour-prices.json'),
      );
      this.cachedPriceData = priceData;
      this.hasFullPriceData = false;
      this.applyPrices();
      this.visibleTours = this.multiDayTours.slice(0, this.displayCount);
      this.cdr.markForCheck();
    } catch {
      this.cdr.markForCheck();
    }
  }

  async loadAllTours() {
    if (this.loadingMore) {
      return;
    }

    const current = this.activeTab === 'day' ? this.dayTours : this.multiDayTours;

    if (this.displayCount < current.length) {
      this.displayCount += 6;
      this.visibleTours = current.slice(0, this.displayCount);
      this.showAllTours = this.displayCount >= current.length;
      this.cdr.markForCheck();
      return;
    }

    this.loadingMore = true;
    this.cdr.markForCheck();

    if (!this.hasFullPriceData) {
      this.cachedPriceData = await firstValueFrom(
        this.http.get<any>('assets/data/tourdetails.json'),
      );
      this.hasFullPriceData = true;
      this.refreshLocalizedCards();
    }

    this.displayCount = current.length;
    this.visibleTours = current.slice(0, this.displayCount);
    this.loadingMore = false;
    this.showAllTours = true;
    this.cdr.markForCheck();
  }

  setTab(tab: 'multi' | 'day') {
    if (this.activeTab === tab) {
      return;
    }

    this.activeTab = tab;
    this.displayCount = 6;
    this.refreshLocalizedCards();
    this.showAllTours = false;
    this.cdr.markForCheck();
  }

  scrollToSection(sectionId: string) {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  trackById(index: number, tour: any) {
    return tour.id;
  }

  trackByIndex(index: number) {
    return index;
  }
}

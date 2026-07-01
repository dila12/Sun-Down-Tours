import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { PackageItemComponent } from '../../sharedComponents/package-item-component/package-item-component';
import { CommonModule, isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { onImageError, toWebpSrc, buildSrcSet, defaultSizes, heroLcpNgSrcSet, bestImageSrc, HERO_LCP_BASE } from '../../utils/image.util';
import { HomeContactSectionComponent } from './sections/home-contact-section/home-contact-section';
import { HomeTeamSectionComponent } from './sections/home-team-section/home-team-section';
import { HomeElfsightWidgetComponent } from './sections/home-elfsight-widget/home-elfsight-widget';
import { HomePopularToursComponent } from './sections/home-popular-tours/home-popular-tours';
import { HomeSeoSectionComponent } from './sections/home-seo-section/home-seo-section';
import { SocialIconComponent } from '../../sharedComponents/social-icon/social-icon';
import { forkJoin } from 'rxjs';

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
    NgOptimizedImage,
  ],
  templateUrl: './home-page-component.html',
  styleUrl: './home-page-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit, OnDestroy {
  dayTours: any[] = [];
  multiDayTours: any[] = [];
  displayCount = 6;
  visibleTours: any[] = [];
  private cachedTours: any = null;

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
  readonly heroLcpSrc = HERO_LCP_BASE;
  readonly heroLcpNgSrcSet = heroLcpNgSrcSet();

  readonly heroSlide: TourSlide = {
    src: HERO_LCP_BASE,
    alt: 'Sigiriya Rock tour Sri Lanka',
    heading: 'Sri Lanka Tours & Private Driver Services',
  };

  readonly extraSlides: TourSlide[] = [
    {
      src: toWebpSrc('assets/img/5daysTours/32.jpg'),
      alt: 'Sigiriya tour Sri Lanka',
      heading: 'Unforgettable Sri Lanka Tour Packages',
    },
    {
      src: toWebpSrc('assets/img/5daysTours/28.png'),
      alt: 'Sri Lanka wildlife safari tour',
      heading: 'Private Tours Across Beautiful Sri Lanka',
    },
    {
      src: toWebpSrc('assets/img/5daysTours/41.jpg'),
      alt: 'Ella Nine Arches Bridge Sri Lanka tour',
      heading: 'Discover Sigiriya, Ella & Sri Lanka Highlights',
    },
    {
      src: toWebpSrc('assets/img/mainpage/5.jpg'),
      alt: 'Sigiriya Lion Rock tour Sri Lanka',
      heading: 'Sri Lanka Wildlife Safaris & Adventure Tours',
    },
  ];

  readonly slides: TourSlide[] = [this.heroSlide, ...this.extraSlides];

  readonly destinations: Destination[] = [
    { name: 'Sigiriya', src: 'assets/img/destination-1-opt.webp', alt: 'Sigiriya Rock Fortress Sri Lanka' },
    { name: 'Ella', src: 'assets/img/destination-2-opt.webp', alt: 'Ella Scenic Train Journey Sri Lanka' },
    { name: 'Yala Safari', src: 'assets/img/destination-3-opt.webp', alt: 'Yala National Park Safari Sri Lanka' },
    { name: 'Kandy', src: toWebpSrc('assets/img/destination-4.jpg'), alt: 'Kandy cultural city Sri Lanka' },
    { name: 'Dambulla', src: 'assets/img/destination-5-opt.webp', alt: 'Dambulla cave temple Sri Lanka' },
    { name: 'Galle', src: toWebpSrc('assets/img/destination-6.jpg'), alt: 'Galle Fort Sri Lanka' },
  ];

  readonly aboutMainSrc = toWebpSrc('assets/img/5daysTours/6.jpg');
  readonly aboutGallery = [
    { src: toWebpSrc('assets/img/about-1.jpg'), alt: 'Private Sri Lanka Tour with Sun Down Tours' },
    { src: toWebpSrc('assets/img/about-2.jpg'), alt: 'Sri Lanka Tour Packages with Chauffeur Guide' },
  ];

  private cachedPriceData: any = null;
  private hasFullPriceData = false;

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  ngOnInit() {
    this.loadHomeTours();
    this.startCarouselAutoplay();
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
        tour.price?.['2'] ?? 0
      ])
    );

    const dayPriceMap = new Map(
      this.cachedPriceData.dayTours.map((tour: any) => [
        tour.filecode ?? tour.name,
        tour.price?.['2'] ?? 0
      ])
    );

    this.multiDayTours = this.multiDayTours.map((tour: any) => ({
      ...tour,
      price: multiPriceMap.get(tour.filecode ?? tour.name) ?? 0
    }));

    this.dayTours = this.dayTours.map((tour: any) => ({
      ...tour,
      price: dayPriceMap.get(tour.filecode ?? tour.name) ?? 0
    }));

  }

  private async loadHomeTours() {

    const { homeData, priceData } = await firstValueFrom(
      forkJoin({
        homeData: this.http.get<any>('assets/data/home-tours.json'),
        // Keep initial payload small for mobile; load full pricing on demand.
        priceData: this.http.get<any>('assets/data/home-tour-prices.json'),
      })
    );

    const multiPriceMap = new Map(
      priceData.multiDayTours.map((tour: any) => [
        tour.name,
        tour.price?.['2'] ?? 0,
      ])
    );

    const dayPriceMap = new Map(
      priceData.dayTours.map((tour: any) => [
        tour.name,
        tour.price?.['2'] ?? 0,
      ])
    );

    this.multiDayTours = homeData.multiDayTours;
    this.dayTours = homeData.dayTours;
    this.cachedPriceData = priceData;
    this.hasFullPriceData = false;
    this.applyPrices();
    this.visibleTours = this.multiDayTours.slice(0, this.displayCount);
    this.cdr.markForCheck();
  }

  async loadAllTours() {

    if (this.loadingMore) {
      return;
    }

    const current = this.activeTab === 'day' ? this.dayTours : this.multiDayTours;

    if (this.cachedTours) {
      if (this.displayCount < current.length) {
        this.displayCount += 6;
        this.visibleTours = current.slice(0, this.displayCount);
        this.showAllTours = this.displayCount >= current.length;
        this.cdr.markForCheck();
        return;
      }
    }

    this.loadingMore = true;
    this.cdr.markForCheck();

    if (!this.cachedTours) {
      this.cachedTours = await firstValueFrom(
        this.http.get<any>('assets/data/tours.json')
      );
    }

    if (!this.hasFullPriceData) {
      this.cachedPriceData = await firstValueFrom(
        this.http.get<any>('assets/data/tourdetails.json')
      );
      this.hasFullPriceData = true;
    }

    this.dayTours = [...this.cachedTours.dayTours];
    this.multiDayTours = [...this.cachedTours.multiDayTours];

    this.applyPrices();

    const active = this.activeTab === 'day' ? this.dayTours : this.multiDayTours;

    this.displayCount += 6;
    this.visibleTours =  active.slice(0, this.displayCount);
    this.loadingMore = false;
    this.showAllTours = this.displayCount >= active.length;
    this.cdr.markForCheck();
  }

  setTab(tab: 'multi' | 'day') {
    if (this.activeTab === tab) {
      return;
    }

    this.activeTab = tab;
    this.displayCount = 6;
    this.visibleTours = tab === 'day' ? this.dayTours.slice(0, this.displayCount) : this.multiDayTours.slice(0, this.displayCount);

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

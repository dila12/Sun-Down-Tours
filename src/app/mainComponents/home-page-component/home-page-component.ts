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
import { SITE_WHATSAPP_URL } from '../../i18n/site-contact';
import { onImageError, toWebpSrc, buildSrcSet, buildAvifSrcSet, buildCappedSrcSet, buildCappedAvifSrcSet, defaultSizes, bestImageSrc, heroLcpSrc, HERO_LCP_BASE } from '../../utils/image.util';
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
  pageId: string;
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
  private carouselDelay?: ReturnType<typeof setTimeout>;
  private carouselTimer?: ReturnType<typeof setInterval>;

  readonly onImageError = onImageError;
  readonly buildSrcSet = buildSrcSet;
  readonly buildCappedSrcSet = buildCappedSrcSet;
  readonly buildCappedAvifSrcSet = buildCappedAvifSrcSet;
  readonly bestImageSrc = bestImageSrc;
  readonly defaultSizes = defaultSizes;
  readonly heroSizes = '100vw';
  readonly destSizes = '(max-width: 576px) 100vw, (max-width: 992px) 50vw, 400px';
  readonly buildAvifSrcSet = buildAvifSrcSet;
  readonly heroLcpAvifSrcSet = buildCappedAvifSrcSet(HERO_LCP_BASE, 1280);
  readonly heroLcpSrc = heroLcpSrc(640);
  readonly heroLcpSrcSet = buildCappedSrcSet(HERO_LCP_BASE, 1280);
  readonly heroLcpBase = HERO_LCP_BASE;
  readonly whatsappUrl = SITE_WHATSAPP_URL;

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
    { name: 'home.destinations.sigiriya', src: 'assets/img/destination-1-opt.webp', alt: 'home.destinations.sigiriyaAlt', pageId: 'destSigiriya' },
    { name: 'home.destinations.ella', src: 'assets/img/destination-2-opt.webp', alt: 'home.destinations.ellaAlt', pageId: 'destElla' },
    { name: 'home.destinations.yala', src: 'assets/img/destination-3-opt.webp', alt: 'home.destinations.yalaAlt', pageId: 'destYala' },
    { name: 'home.destinations.kandy', src: toWebpSrc('assets/img/destination-4.jpg'), alt: 'home.destinations.kandyAlt', pageId: 'destKandy' },
    { name: 'home.destinations.dambulla', src: 'assets/img/destination-5-opt.webp', alt: 'home.destinations.dambullaAlt', pageId: 'destDambulla' },
    { name: 'home.destinations.galle', src: toWebpSrc('assets/img/destination-6.jpg'), alt: 'home.destinations.galleAlt', pageId: 'destGalle' },
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
    if (this.carouselDelay) {
      clearTimeout(this.carouselDelay);
    }
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
    // Delay first advance so autoplay cannot replace the LCP hero mid-load.
    this.carouselDelay = setTimeout(() => {
      this.carouselTimer = setInterval(() => this.nextSlide(), 8000);
    }, 15000);
  }

  private applyPrices() {
    if (!this.cachedPriceData) {
      return;
    }

    const multiPriceMap = this.buildPriceMap(this.cachedPriceData.multiDayTours);
    const dayPriceMap = this.buildPriceMap(this.cachedPriceData.dayTours);

    this.multiDayTours = this.multiDayTours.map((tour) => ({
      ...tour,
      price: this.resolveCardPrice(tour.filecode, multiPriceMap, tour.price),
    }));

    this.dayTours = this.dayTours.map((tour) => ({
      ...tour,
      price: this.resolveCardPrice(tour.filecode, dayPriceMap, tour.price),
    }));
  }

  private buildPriceMap(entries: any[] | undefined): Map<string, number> {
    const map = new Map<string, number>();
    for (const tour of entries ?? []) {
      const key = tour.filecode ?? tour.name;
      if (!key) continue;
      const amount = Number(tour.price?.['2'] ?? tour.price?.[2] ?? 0);
      if (amount > 0) {
        map.set(key, amount);
        if (tour.name && tour.name !== key) {
          map.set(tour.name, amount);
        }
      }
    }
    return map;
  }

  private resolveCardPrice(
    filecode: string,
    priceMap: Map<string, number>,
    existing?: number,
  ): number {
    const fromMap = priceMap.get(filecode);
    if (typeof fromMap === 'number' && fromMap > 0) {
      return fromMap;
    }
    if (typeof existing === 'number' && existing > 0) {
      return existing;
    }
    console.error(
      `[Sundown Tours] Missing price for tour card "${filecode}". ` +
        `Expected an entry in home-tour-prices.json / tourdetails.json or assets/data/US${filecode}.json.`,
    );
    return 0;
  }

  private async loadHomePrices() {
    try {
      const priceData = await firstValueFrom(
        this.http.get<any>('assets/data/home-tour-prices.json'),
      );
      this.cachedPriceData = priceData;
      this.hasFullPriceData = false;
      this.applyPrices();
      await this.fillMissingPricesFromUsFiles();
      this.visibleTours = this.multiDayTours.slice(0, this.displayCount);
      this.cdr.markForCheck();
    } catch (err) {
      console.error('[Sundown Tours] Failed to load assets/data/home-tour-prices.json', err);
      this.cdr.markForCheck();
    }
  }

  /** When a card still has $0, try the per-tour US price file before leaving it at zero. */
  private async fillMissingPricesFromUsFiles(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const fill = async (tours: TourCardView[]) =>
      Promise.all(
        tours.map(async (tour) => {
          if ((tour.price ?? 0) > 0 || !tour.filecode) {
            return tour;
          }
          const path = `assets/data/US${tour.filecode}.json`;
          try {
            const data = await firstValueFrom(this.http.get<any>(path));
            const amount = Number(data?.price?.['2'] ?? data?.price?.[2] ?? 0);
            if (amount > 0) {
              return { ...tour, price: amount };
            }
            console.error(
              `[Sundown Tours] Price file ${path} loaded but has no usable price["2"] value.`,
            );
          } catch {
            console.error(
              `[Sundown Tours] Price file missing or unreadable: ${path} (filecode=${tour.filecode}).`,
            );
          }
          return tour;
        }),
      );

    this.multiDayTours = await fill(this.multiDayTours);
    this.dayTours = await fill(this.dayTours);
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
      await this.fillMissingPricesFromUsFiles();
    }

    const updated = this.activeTab === 'day' ? this.dayTours : this.multiDayTours;
    this.displayCount = updated.length;
    this.visibleTours = updated.slice(0, this.displayCount);
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

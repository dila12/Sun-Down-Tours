import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  inject,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TourBookingCardComponent } from '../tour-booking-card/tour-booking-card';
import { SocialIconComponent } from '../social-icon/social-icon';
import { TranslatePipe } from '../../i18n/t.pipe';
import { LocaleService } from '../../i18n/locale.service';
import { getTourRelatedGraph, type TourRelatedGraph } from '../../i18n/tours/tour-related-graph';
import { TourContentService } from '../../i18n/tours/tour-content.service';
import type { RelatedLink } from '../../i18n/articles/types';
import { SITE_TRIPADVISOR_URL, SITE_WHATSAPP_URL } from '../../i18n/site-contact';
import {
  bestImageSrc,
  buildAvifSrcSet,
  buildCappedSrcSet,
  buildSrcSet,
  galleryLightboxSrc,
  galleryThumbSrc as thumbSrcForGallery,
  onImageError,
  toWebpSrc,
} from '../../utils/image.util';

export interface Activity {
  type: string;
  title: title;
  description?: string;
  icon?: string;
  image?: string;
  extra?: string[];
}

export interface title {
  title?: string;
  icon?: string;
  color?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: Activity[];
}

export interface TourFaqItem {
  q: string;
  a: string;
}

export interface TourDetails {
  title: string;
  description: string;
  duration: string;
  persons: string;
  price: number;
  tourType?: string;
  overview?: string;
  seoIntro?: string;
  highlights?: string[];
  whoIsFor?: string;
  bestTimeNote?: string;
  faq?: TourFaqItem[];
  itinerary?: ItineraryDay[];
  includes?: string[];
  excludes?: string[];
  filecode?: string;
  /** Stable page id used for topical related links (e.g. ellaDay, tour7). */
  pageId?: string;
}

export interface ItineraryGalleryItem {
  src: string;
  caption: string;
  dayTitle: string;
}

@Component({
  selector: 'app-tour-details-component',
  standalone: true,
  imports: [CommonModule, RouterModule, TourBookingCardComponent, SocialIconComponent, TranslatePipe],
  templateUrl: './tour-details-component.html',
  styleUrl: './tour-details-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TourDetailsComponent implements OnInit, OnDestroy {
  @Input() tour!: TourDetails;
  @Input() filecode?: string;
  @Input() image?: string;
  @Input() bookingTour?: any;

  @ViewChild('galleryDialog') galleryDialog?: ElementRef<HTMLElement>;
  @ViewChild('galleryCloseBtn') galleryCloseBtn?: ElementRef<HTMLButtonElement>;
  @ViewChild('galleryThumbStrip') galleryThumbStrip?: ElementRef<HTMLElement>;

  expandedDays: { [key: number]: boolean } = {};
  prices: Record<string, number> = {};
  isLoadingPrices = false;

  galleryOpen = false;
  galleryIndex = 0;
  zoom = 1;
  panX = 0;
  panY = 0;
  mobileBookingOpen = false;

  readonly onImageError = onImageError;
  readonly bestImageSrc = bestImageSrc;
  readonly buildSrcSet = buildSrcSet;
  readonly lightboxSizes = '100vw';
  readonly thumbSizes = '72px';
  readonly whatsappUrl = SITE_WHATSAPP_URL;
  readonly tripadvisorUrl = SITE_TRIPADVISOR_URL;

  private readonly i18n = inject(LocaleService);
  private readonly tourContent = inject(TourContentService);
  private readonly isBrowser: boolean;
  private previousBodyOverflow = '';
  private previouslyFocused: HTMLElement | null = null;
  private touchStartX = 0;
  private touchStartY = 0;
  private pinchStartDist = 0;
  private pinchStartZoom = 1;
  private dragging = false;
  private dragLastX = 0;
  private dragLastY = 0;
  private preloadLinks: HTMLLinkElement[] = [];

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private doc: Document,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  get showBooking(): boolean {
    return !!(this.filecode && this.image && this.bookingTour);
  }

  get displayPrice(): number {
    return this.prices['2'] ?? this.tour?.price ?? 0;
  }

  get whatsappTourUrl(): string {
    const title = this.tour?.title ?? 'this tour';
    return `${this.whatsappUrl}?text=${encodeURIComponent(`Hi, I would like to enquire about ${title}`)}`;
  }

  path(pageId: string): string {
    return this.i18n.path(pageId);
  }

  get relatedGraph(): TourRelatedGraph | null {
    const id = this.tour?.pageId;
    const raw = id ? getTourRelatedGraph(id) : null;
    if (!raw) {
      return null;
    }
    const lead = this.i18n.get('common.tourUi.exploreGraphLead');
    return {
      context: typeof lead === 'string' && lead.length ? lead : raw.context,
      destinations: raw.destinations.map((l) => this.localizeRelated(l)),
      guides: raw.guides.map((l) => this.localizeRelated(l)),
      restaurants: raw.restaurants.map((l) => this.localizeRelated(l)),
      tours: raw.tours.map((l) => this.localizeRelated(l)),
    };
  }

  private localizeRelated(link: RelatedLink): RelatedLink {
    if (link.pageId === 'restaurants') {
      const label = this.i18n.get('guidesHub.restaurantLink');
      return {
        pageId: link.pageId,
        label: typeof label === 'string' && label.length ? label : link.label,
      };
    }
    const seoTitle = this.i18n.get(`seo.${link.pageId}.title`);
    if (typeof seoTitle === 'string' && seoTitle.length) {
      return { pageId: link.pageId, label: seoTitle.split('|')[0].trim() };
    }
    const card = this.tourContent.card(link.pageId);
    if (card?.title) {
      return { pageId: link.pageId, label: card.title };
    }
    return link;
  }

  openMobileBooking(): void {
    if (!this.isBrowser) return;
    this.mobileBookingOpen = true;
    this.lockBodyScroll();
    this.doc.body.classList.add('mobile-booking-sheet-open');
    this.cdr.markForCheck();
  }

  closeMobileBooking(): void {
    if (!this.mobileBookingOpen) return;
    this.mobileBookingOpen = false;
    this.unlockBodyScroll();
    this.doc.body.classList.remove('mobile-booking-sheet-open');
    this.cdr.markForCheck();
  }

  onMobileBookingBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeMobileBooking();
    }
  }

  get galleryItems(): ItineraryGalleryItem[] {
    const items: ItineraryGalleryItem[] = [];
    for (const day of this.tour?.itinerary ?? []) {
      for (const activity of day.activities ?? []) {
        if (!activity.image) continue;
        items.push({
          src: toWebpSrc(activity.image),
          caption: activity.title?.title ?? '',
          dayTitle: day.title ?? '',
        });
      }
    }
    return items;
  }

  get galleryTotal(): number {
    return this.galleryItems.length;
  }

  get canNavigateGallery(): boolean {
    return this.galleryTotal > 1;
  }

  get galleryCounter(): string {
    if (!this.galleryTotal) return '';
    return `${this.galleryIndex + 1} / ${this.galleryTotal}`;
  }

  get currentGalleryItem(): ItineraryGalleryItem | null {
    return this.galleryItems[this.galleryIndex] ?? null;
  }

  get currentGallerySrc(): string {
    const item = this.currentGalleryItem;
    return item ? galleryLightboxSrc(item.src) : '';
  }

  get currentGallerySrcSet(): string {
    const item = this.currentGalleryItem;
    return item ? buildSrcSet(item.src) : '';
  }

  get currentGalleryAvifSrcSet(): string {
    const item = this.currentGalleryItem;
    return item ? buildAvifSrcSet(item.src) : '';
  }

  get galleryTransform(): string {
    return `translate3d(${this.panX}px, ${this.panY}px, 0) scale(${this.zoom})`;
  }

  ngOnInit(): void {
    if (this.filecode && this.isBrowser) {
      this.loadPrices(this.filecode);
    }
    if (this.showBooking && this.isBrowser) {
      this.doc.body.classList.add('has-mobile-book-bar');
    }
  }

  ngOnDestroy(): void {
    this.clearPreloads();
    this.closeMobileBooking();
    this.unlockBodyScroll();
    if (this.isBrowser) {
      this.doc.body.classList.remove('has-mobile-book-bar');
    }
  }

  loadPrices(filecode: string): void {
    this.isLoadingPrices = true;
    const priceFile = `/assets/data/US${filecode}.json`;

    this.http.get(priceFile).subscribe({
      next: (data: any) => {
        this.prices = data.price ?? {};
        if (data.images?.[0] && this.image) {
          this.image = toWebpSrc(String(data.images[0]));
        }
        this.isLoadingPrices = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error(
          `[Sundown Tours] Failed to load price file ${priceFile} (filecode=${filecode}).`,
          err,
        );
        this.isLoadingPrices = false;
        this.cdr.markForCheck();
      },
    });
  }

  activityImageSrc(path: string): string {
    return bestImageSrc(toWebpSrc(path), 320);
  }

  activityImageSrcSet(path: string): string {
    return buildSrcSet(toWebpSrc(path));
  }

  activityImageBase(path: string): string {
    return toWebpSrc(path);
  }

  galleryThumbSrc(path: string): string {
    return thumbSrcForGallery(path);
  }

  galleryThumbSrcSet(path: string): string {
    return buildCappedSrcSet(path, 320);
  }

  toggleDay(day: number): void {
    const isAlreadyOpen = this.expandedDays[day];
    this.expandedDays = {};
    if (!isAlreadyOpen) {
      this.expandedDays[day] = true;
    }
    this.cdr.markForCheck();
  }

  openImage(img: string): void {
    const target = toWebpSrc(img);
    const items = this.galleryItems;
    const index = items.findIndex((item) => item.src === target);
    if (index < 0) return;

    this.previouslyFocused =
      this.isBrowser && this.doc.activeElement instanceof HTMLElement
        ? this.doc.activeElement
        : null;
    this.galleryIndex = index;
    this.galleryOpen = true;
    this.resetZoom();
    this.lockBodyScroll();
    this.preloadNeighbors();
    this.cdr.detectChanges();
    this.galleryCloseBtn?.nativeElement.focus();
    this.scrollActiveThumbIntoView();
  }

  closeImage(): void {
    if (!this.galleryOpen) return;
    this.galleryOpen = false;
    this.resetZoom();
    this.clearPreloads();
    this.unlockBodyScroll();
    this.cdr.markForCheck();
    if (this.isBrowser) {
      this.previouslyFocused?.focus?.();
      this.previouslyFocused = null;
    }
  }

  goToGalleryImage(index: number): void {
    if (index < 0 || index >= this.galleryTotal) return;
    this.galleryIndex = index;
    this.resetZoom();
    this.preloadNeighbors();
    this.cdr.markForCheck();
    this.scrollActiveThumbIntoView();
  }

  prevGalleryImage(): void {
    if (!this.canNavigateGallery) return;
    const next = (this.galleryIndex - 1 + this.galleryTotal) % this.galleryTotal;
    this.goToGalleryImage(next);
  }

  nextGalleryImage(): void {
    if (!this.canNavigateGallery) return;
    const next = (this.galleryIndex + 1) % this.galleryTotal;
    this.goToGalleryImage(next);
  }

  toggleZoom(event?: Event): void {
    event?.stopPropagation();
    if (this.zoom > 1) {
      this.resetZoom();
    } else {
      this.zoom = 2.25;
      this.panX = 0;
      this.panY = 0;
    }
    this.cdr.markForCheck();
  }

  onGalleryWheel(event: WheelEvent): void {
    if (!this.galleryOpen) return;
    event.preventDefault();
    const delta = event.deltaY > 0 ? -0.2 : 0.2;
    this.zoom = Math.min(4, Math.max(1, this.zoom + delta));
    if (this.zoom === 1) {
      this.panX = 0;
      this.panY = 0;
    }
    this.cdr.markForCheck();
  }

  onGalleryBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeImage();
    }
  }

  onGalleryTouchStart(event: TouchEvent): void {
    if (event.touches.length === 1) {
      this.touchStartX = event.touches[0].clientX;
      this.touchStartY = event.touches[0].clientY;
      if (this.zoom > 1) {
        this.dragging = true;
        this.dragLastX = this.touchStartX;
        this.dragLastY = this.touchStartY;
      }
    } else if (event.touches.length === 2) {
      this.pinchStartDist = this.pinchDistance(event);
      this.pinchStartZoom = this.zoom;
    }
  }

  onGalleryTouchMove(event: TouchEvent): void {
    if (event.touches.length === 2) {
      event.preventDefault();
      const dist = this.pinchDistance(event);
      if (this.pinchStartDist > 0) {
        this.zoom = Math.min(4, Math.max(1, this.pinchStartZoom * (dist / this.pinchStartDist)));
        if (this.zoom === 1) {
          this.panX = 0;
          this.panY = 0;
        }
        this.cdr.markForCheck();
      }
      return;
    }

    if (this.dragging && event.touches.length === 1 && this.zoom > 1) {
      event.preventDefault();
      const x = event.touches[0].clientX;
      const y = event.touches[0].clientY;
      this.panX += x - this.dragLastX;
      this.panY += y - this.dragLastY;
      this.dragLastX = x;
      this.dragLastY = y;
      this.cdr.markForCheck();
    }
  }

  onGalleryTouchEnd(event: TouchEvent): void {
    if (this.dragging) {
      this.dragging = false;
      this.pinchStartDist = 0;
      return;
    }

    if (this.zoom > 1) {
      this.pinchStartDist = 0;
      return;
    }

    const touch = event.changedTouches[0];
    if (!touch) return;
    const dx = touch.clientX - this.touchStartX;
    const dy = touch.clientY - this.touchStartY;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) this.nextGalleryImage();
    else this.prevGalleryImage();
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent): void {
    if (!this.isBrowser) return;

    if (event.key === 'Escape' && this.mobileBookingOpen) {
      event.preventDefault();
      this.closeMobileBooking();
      return;
    }

    if (!this.galleryOpen) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeImage();
      return;
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.prevGalleryImage();
      return;
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.nextGalleryImage();
      return;
    }

    if (event.key === 'Tab') {
      this.trapFocus(event);
    }
  }

  trackByDay(_: number, day: ItineraryDay): number {
    return day.day;
  }

  trackByActivity(index: number, activity: Activity): string {
    return activity.title?.title ?? String(index);
  }

  trackByItem(index: number, item: string): string {
    return item || String(index);
  }

  trackByFaq(_: number, item: TourFaqItem): string {
    return item.q;
  }

  trackByRelated(_: number, link: { pageId: string }): string {
    return link.pageId;
  }

  trackByGalleryIndex(index: number): number {
    return index;
  }

  private resetZoom(): void {
    this.zoom = 1;
    this.panX = 0;
    this.panY = 0;
  }

  private pinchDistance(event: TouchEvent): number {
    const a = event.touches[0];
    const b = event.touches[1];
    return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
  }

  private lockBodyScroll(): void {
    if (!this.isBrowser) return;
    this.previousBodyOverflow = this.doc.body.style.overflow;
    this.doc.body.style.overflow = 'hidden';
  }

  private unlockBodyScroll(): void {
    if (!this.isBrowser) return;
    this.doc.body.style.overflow = this.previousBodyOverflow;
  }

  private scrollActiveThumbIntoView(): void {
    if (!this.isBrowser) return;
    const strip = this.galleryThumbStrip?.nativeElement;
    if (!strip) return;
    const active = strip.querySelector<HTMLElement>('.itin-lb__thumb.is-active');
    active?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }

  private preloadNeighbors(): void {
    if (!this.isBrowser || !this.canNavigateGallery) return;
    this.clearPreloads();

    const total = this.galleryTotal;
    const neighbors = [
      (this.galleryIndex - 1 + total) % total,
      (this.galleryIndex + 1) % total,
    ];

    for (const index of neighbors) {
      const item = this.galleryItems[index];
      if (!item) continue;
      const link = this.doc.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = galleryLightboxSrc(item.src);
      this.doc.head.appendChild(link);
      this.preloadLinks.push(link);
    }
  }

  private clearPreloads(): void {
    for (const link of this.preloadLinks) {
      link.remove();
    }
    this.preloadLinks = [];
  }

  private trapFocus(event: KeyboardEvent): void {
    const root = this.galleryDialog?.nativeElement;
    if (!root) return;

    const focusable = Array.from(
      root.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((el) => {
      const style = this.isBrowser ? this.doc.defaultView?.getComputedStyle(el) : null;
      return !el.hasAttribute('disabled') && style?.visibility !== 'hidden' && style?.display !== 'none';
    });

    if (!focusable.length) {
      event.preventDefault();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = this.doc.activeElement as HTMLElement | null;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }
}

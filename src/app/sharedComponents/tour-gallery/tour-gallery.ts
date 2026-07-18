import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  PLATFORM_ID,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  buildAvifSrcSet,
  buildCappedAvifSrcSet,
  buildCappedSrcSet,
  buildSrcSet,
  galleryLightboxSrc,
  galleryMainSrc,
  galleryThumbSrc,
  onImageError,
  toWebpSrc,
} from '../../utils/image.util';
import { getTourGalleryImages } from './tour-gallery-images.generated';

export interface GalleryThumb {
  base: string;
  src: string;
  srcset: string;
  avifSrcset: string;
  index: number;
}

@Component({
  selector: 'app-tour-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tour-gallery.html',
  styleUrl: './tour-gallery.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TourGalleryComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  /** Preferred: gallery id from tour-gallery.config / tour-galleries/{id}/ folder. */
  @Input() galleryId = '';
  /** Optional explicit override — if set, takes precedence over galleryId. */
  @Input() images: string[] | null = null;
  @Input() alt = 'Tour image';
  @Input() previewAlt = 'Tour preview';

  @Output() readonly currentSrcChange = new EventEmitter<string>();

  @ViewChild('galleryRoot') galleryRoot?: ElementRef<HTMLElement>;
  @ViewChild('thumbStrip') thumbStrip?: ElementRef<HTMLElement>;
  @ViewChild('lightboxStage') lightboxStage?: ElementRef<HTMLElement>;

  readonly onImageError = onImageError;
  /** Retina-aware sizes so desktop gets the full base, not a soft mid-size. */
  readonly mainSizes =
    '(max-width: 576px) 100vw, (max-width: 992px) 92vw, (max-width: 1400px) min(1100px, 70vw), 1200px';
  readonly thumbSizes = '(max-width: 576px) 22vw, 112px';
  readonly lightboxSizes = '100vw';

  currentIndex = 0;
  bases: string[] = [];
  lightboxOpen = false;
  zoom = 1;
  panX = 0;
  panY = 0;

  private readonly isBrowser: boolean;
  private touchStartX = 0;
  private touchStartY = 0;
  private pinchStartDist = 0;
  private pinchStartZoom = 1;
  private dragging = false;
  private dragLastX = 0;
  private dragLastY = 0;
  private previousBodyOverflow = '';

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    @Inject(DOCUMENT) private readonly doc: Document,
    private readonly cdr: ChangeDetectorRef,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.bases.length) {
      this.resolveBases();
      this.emitCurrent();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['images'] || changes['galleryId']) {
      this.resolveBases();
      this.currentIndex = 0;
      this.emitCurrent();
    }
  }

  ngAfterViewInit(): void {
    this.emitCurrent();
  }

  ngOnDestroy(): void {
    this.unlockBodyScroll();
  }

  get total(): number {
    return this.bases.length;
  }

  get counterLabel(): string {
    if (!this.total) return '';
    return `${this.currentIndex + 1}/${this.total}`;
  }

  get currentBase(): string {
    return this.bases[this.currentIndex] ?? '';
  }

  get currentSrc(): string {
    return this.currentBase ? galleryMainSrc(this.currentBase) : '';
  }

  get currentSrcSet(): string {
    return this.currentBase ? buildSrcSet(this.currentBase) : '';
  }

  get currentAvifSrcSet(): string {
    return this.currentBase ? buildAvifSrcSet(this.currentBase) : '';
  }

  get lightboxSrc(): string {
    return this.currentBase ? galleryLightboxSrc(this.currentBase) : '';
  }

  get lightboxSrcSet(): string {
    return this.currentBase ? buildSrcSet(this.currentBase) : '';
  }

  get lightboxAvifSrcSet(): string {
    return this.currentBase ? buildAvifSrcSet(this.currentBase) : '';
  }

  get thumbs(): GalleryThumb[] {
    return this.bases.map((base, index) => ({
      base,
      src: galleryThumbSrc(base),
      srcset: buildCappedSrcSet(base, 640),
      avifSrcset: buildCappedAvifSrcSet(base, 640),
      index,
    }));
  }

  get lightboxTransform(): string {
    return `translate3d(${this.panX}px, ${this.panY}px, 0) scale(${this.zoom})`;
  }

  get canNavigate(): boolean {
    return this.total > 1;
  }

  goToImage(index: number, opts?: { scrollThumb?: boolean }): void {
    if (index < 0 || index >= this.bases.length) return;
    this.currentIndex = index;
    this.resetZoom();
    this.emitCurrent();
    this.cdr.markForCheck();
    if (opts?.scrollThumb !== false) {
      this.scrollActiveThumbIntoView();
    }
  }

  prev(): void {
    if (!this.canNavigate) return;
    const next = (this.currentIndex - 1 + this.total) % this.total;
    this.goToImage(next);
  }

  next(): void {
    if (!this.canNavigate) return;
    const next = (this.currentIndex + 1) % this.total;
    this.goToImage(next);
  }

  openLightbox(): void {
    if (!this.currentBase) return;
    this.lightboxOpen = true;
    this.resetZoom();
    this.lockBodyScroll();
    this.cdr.markForCheck();
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
    this.resetZoom();
    this.unlockBodyScroll();
    this.cdr.markForCheck();
  }

  toggleZoom(event?: MouseEvent): void {
    if (event) {
      event.stopPropagation();
    }
    if (this.zoom > 1) {
      this.resetZoom();
    } else {
      this.zoom = 2.5;
      this.panX = 0;
      this.panY = 0;
    }
    this.cdr.markForCheck();
  }

  onLightboxWheel(event: WheelEvent): void {
    if (!this.lightboxOpen) return;
    event.preventDefault();
    const delta = event.deltaY > 0 ? -0.2 : 0.2;
    this.zoom = Math.min(4, Math.max(1, this.zoom + delta));
    if (this.zoom === 1) {
      this.panX = 0;
      this.panY = 0;
    }
    this.cdr.markForCheck();
  }

  onStageTouchStart(event: TouchEvent): void {
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

  onStageTouchMove(event: TouchEvent): void {
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

  onStageTouchEnd(event: TouchEvent): void {
    if (this.dragging) {
      this.dragging = false;
      this.pinchStartDist = 0;
      return;
    }

    if (this.zoom > 1) {
      this.pinchStartDist = 0;
      return;
    }

    this.handleSwipe(event);
  }

  onMainTouchEnd(event: TouchEvent): void {
    if (this.lightboxOpen) return;
    this.handleSwipe(event);
  }

  private handleSwipe(event: TouchEvent): void {
    const touch = event.changedTouches[0];
    if (!touch) return;
    const dx = touch.clientX - this.touchStartX;
    const dy = touch.clientY - this.touchStartY;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) this.next();
    else this.prev();
  }

  onLightboxBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeLightbox();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent): void {
    if (!this.isBrowser || !this.lightboxOpen) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeLightbox();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.prev();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.next();
    }
  }

  trackByIndex(index: number): number {
    return index;
  }

  trackByThumb(_: number, thumb: GalleryThumb): number {
    return thumb.index;
  }

  private resolveBases(): void {
    const explicit = this.images?.filter(Boolean) ?? [];
    const fromId = this.galleryId ? [...getTourGalleryImages(this.galleryId)] : [];
    const paths = explicit.length ? explicit : fromId;
    this.bases = paths.map((path) => toWebpSrc(path));
  }

  private emitCurrent(): void {
    this.currentSrcChange.emit(this.currentSrc || this.currentBase);
  }

  private resetZoom(): void {
    this.zoom = 1;
    this.panX = 0;
    this.panY = 0;
  }

  private pinchDistance(event: TouchEvent): number {
    const a = event.touches[0];
    const b = event.touches[1];
    const dx = a.clientX - b.clientX;
    const dy = a.clientY - b.clientY;
    return Math.hypot(dx, dy);
  }

  private scrollActiveThumbIntoView(): void {
    if (!this.isBrowser) return;
    const strip = this.thumbStrip?.nativeElement;
    if (!strip) return;
    const active = strip.querySelector<HTMLElement>('.tgallery__thumb.is-active');
    active?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
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
}

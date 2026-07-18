import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { buildTourImagePath, onImageError, buildSrcSet, defaultSizes, toWebpSrc, bestImageSrc } from '../../utils/image.util';
import { TranslatePipe } from '../../i18n/t.pipe';
import { LocaleService } from '../../i18n/locale.service';

const CARD_IMAGE_MAX_WIDTH = 400;

@Component({
  selector: 'app-package-item-component',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './package-item-component.html',
  styleUrl: './package-item-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PackageItemComponent {
  private readonly i18n = inject(LocaleService);

  @Input({ required: true })
  tour!: {
    pageId?: string;
    path?: string;
    routerLink?: string;
    title: string;
    days: string;
    persons: string;
    imageAlt?: string;
    price?: number;
    imageFolder?: string;
    imageName: string;
    imageExt?: string;
  };

  readonly onImageError = onImageError;
  readonly defaultSizes = defaultSizes;

  /** Locale-correct link — prefers pageId → path(), never bare English URLs. */
  get link(): string {
    if (this.tour.pageId) {
      return this.i18n.path(this.tour.pageId);
    }
    if (this.tour.path) {
      return this.tour.path;
    }
    // Legacy fallback (should not be used once all cards carry pageId).
    return this.tour.routerLink ?? '/';
  }

  get imagePath(): string {
    return toWebpSrc(buildTourImagePath(this.tour));
  }

  get imageSrc(): string {
    return bestImageSrc(this.imagePath, CARD_IMAGE_MAX_WIDTH);
  }

  get imageSrcSet(): string {
    return buildSrcSet(this.imagePath);
  }

  get alt(): string {
    return this.tour.imageAlt || this.tour.title;
  }

  trackByIndex(index: number): number {
    return index;
  }
}

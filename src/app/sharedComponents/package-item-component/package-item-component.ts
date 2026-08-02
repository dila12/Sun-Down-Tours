import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { buildTourImagePath, onImageError, buildSrcSet, defaultSizes, toWebpSrc, bestImageSrc } from '../../utils/image.util';
import { TranslatePipe } from '../../i18n/t.pipe';
import { LocaleService } from '../../i18n/locale.service';
import {
  bookingsLeftLeadKey,
  cardDemandBadge,
  cardSpotsLeft,
  formatShortCardDate,
  nextCardBadgeDate,
  resolveDemandTourKey,
  type CardDemandBadge,
} from '../../utils/booking-demand.util';

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

  private get tourKey(): string {
    return resolveDemandTourKey(
      this.tour.pageId,
      (this.tour as { filecode?: string }).filecode,
      this.tour.path || this.tour.routerLink || this.tour.title,
    );
  }

  get demandBadge(): CardDemandBadge {
    return cardDemandBadge(this.tourKey);
  }

  get demandBadgeDateLabel(): string {
    const badge = this.demandBadge;
    if (!badge) {
      return '';
    }
    const next = nextCardBadgeDate(badge, this.tourKey);
    if (!next) {
      return '';
    }
    return formatShortCardDate(next, this.i18n.locale());
  }

  get demandBadgeTitleKey(): string {
    if (this.demandBadge === 'lastSpot') {
      return bookingsLeftLeadKey(cardSpotsLeft(this.tourKey));
    }
    return 'common.booking.demandWarningLead';
  }

  trackByIndex(index: number): number {
    return index;
  }
}

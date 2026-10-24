import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocaleService } from '../../../../i18n/locale.service';
import { TranslatePipe } from '../../../../i18n/t.pipe';
import { TourContentService } from '../../../../i18n/tours/tour-content.service';
import {
  bestImageSrc,
  buildSrcSet,
  buildTourImagePath,
  onImageError,
  toWebpSrc,
} from '../../../../utils/image.util';

@Component({
  selector: 'app-home-popular-tours',
  standalone: true,
  imports: [RouterModule, TranslatePipe],
  templateUrl: './home-popular-tours.html',
  styleUrl: './home-popular-tours.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePopularToursComponent {
  private readonly i18n = inject(LocaleService);
  private readonly toursContent = inject(TourContentService);

  readonly onImageError = onImageError;
  readonly buildSrcSet = buildSrcSet;
  readonly bestImageSrc = bestImageSrc;

  private readonly popularTours = [
    { pageId: 'tour7', labelKey: 'home.popular.tour7' },
    { pageId: 'tour8', labelKey: 'home.popular.tour8' },
    { pageId: 'ellaDay', labelKey: 'home.popular.ellaDay' },
    { pageId: 'sigiriyaDay', labelKey: 'home.popular.sigiriyaDay' },
  ] as const;

  readonly tours = computed(() => {
    this.i18n.locale();
    return this.popularTours.flatMap((item) => {
      const card = this.toursContent.card(item.pageId);
      if (!card) {
        return [];
      }
      const image = toWebpSrc(buildTourImagePath(card));
      return [{ ...item, days: card.days, image, imageAlt: card.imageAlt }];
    });
  });

  path(pageId: string): string {
    return this.i18n.path(pageId);
  }
}

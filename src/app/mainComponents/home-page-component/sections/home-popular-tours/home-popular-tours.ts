import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocaleService } from '../../../../i18n/locale.service';
import { TranslatePipe } from '../../../../i18n/t.pipe';

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

  readonly popularTours = [
    { pageId: 'tour7', labelKey: 'home.popular.tour7' },
    { pageId: 'tour8', labelKey: 'home.popular.tour8' },
    { pageId: 'ellaDay', labelKey: 'home.popular.ellaDay' },
    { pageId: 'sigiriyaDay', labelKey: 'home.popular.sigiriyaDay' },
  ] as const;

  path(pageId: string): string {
    return this.i18n.path(pageId);
  }
}

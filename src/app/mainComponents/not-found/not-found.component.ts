import { ChangeDetectionStrategy, Component, RESPONSE_INIT, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LocaleService } from '../../i18n/locale.service';
import { TranslatePipe } from '../../i18n/t.pipe';
import { localeFromUrl } from '../../i18n/locales';
import { Router } from '@angular/router';

/**
 * True 404 page. Sets HTTP 404 via RESPONSE_INIT during SSR so crawlers
 * do not treat unknown URLs as soft-404 homepage duplicates.
 */
@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {
  private readonly i18n = inject(LocaleService);
  private readonly router = inject(Router);
  private readonly responseInit = inject(RESPONSE_INIT, { optional: true });

  constructor() {
    if (this.responseInit) {
      this.responseInit.status = 404;
    }
  }

  path(pageId: string): string {
    const locale = localeFromUrl(this.router.url);
    return this.i18n.path(pageId, locale);
  }
}

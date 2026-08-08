import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LocaleService } from '../../../../i18n/locale.service';
import { HOME_SEO } from './home-seo.content';

@Component({
  selector: 'app-home-seo-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home-seo-section.html',
  styleUrl: './home-seo-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSeoSectionComponent {
  private readonly i18n = inject(LocaleService);

  /** Locale-aware content model (reacts to the active locale signal). */
  readonly content = computed(() => HOME_SEO[this.i18n.locale()]);

  /** Locale-correct, language-prefixed internal link for a page id. */
  path(pageId: string): string {
    return this.i18n.path(pageId);
  }
}

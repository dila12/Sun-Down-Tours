import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { LocaleService } from '../../i18n/locale.service';

/**
 * Reusable, SSR-friendly FAQ section. Reads a localized FAQ array by key from
 * the active locale and renders it as accessible <details> disclosures. The
 * matching FAQPage JSON-LD is emitted separately by StructuredDataService.
 */
@Component({
  selector: 'app-faq-section',
  standalone: true,
  templateUrl: './faq-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqSectionComponent {
  private readonly i18n = inject(LocaleService);

  /** Translation key holding the FAQ array, e.g. `home.faq`. */
  readonly faqKey = input.required<string>();
  /** Translation key for the section title, e.g. `home.faqTitle`. */
  readonly titleKey = input<string>('common.faqTitle');

  readonly items = computed(() => this.i18n.faq(this.faqKey(), this.i18n.locale()));
  readonly title = computed(() => this.i18n.t(this.titleKey(), this.i18n.locale()));
}

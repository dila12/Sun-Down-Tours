import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocaleService } from '../../i18n/locale.service';
import { TranslatePipe } from '../../i18n/t.pipe';
import { FaqSectionComponent } from '../../sharedComponents/faq-section/faq-section';

@Component({
  selector: 'app-service-component',
  standalone: true,
  imports: [RouterModule, TranslatePipe, FaqSectionComponent],
  templateUrl: './service-component.html',
  styleUrl: './service-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceComponent {
  readonly i18n = inject(LocaleService);

  path(pageId: string): string {
    return this.i18n.path(pageId);
  }
}

import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocaleService } from '../../i18n/locale.service';
import { TranslatePipe } from '../../i18n/t.pipe';

@Component({
  selector: 'app-cancellation-policy',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './cancellation-policy.html',
  styleUrl: './cancellation-policy.css',
})
export class CancellationPolicyComponent {
  private readonly i18n = inject(LocaleService);

  path(pageId: string): string {
    return this.i18n.path(pageId);
  }
}

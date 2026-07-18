import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from '../../sharedComponents/contact-us-component/contact-us-component';
import { FaqSectionComponent } from '../../sharedComponents/faq-section/faq-section';
import { LocaleService } from '../../i18n/locale.service';
import { TranslatePipe } from '../../i18n/t.pipe';

@Component({
  selector: 'app-about-component',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactUsComponent, FaqSectionComponent, TranslatePipe],
  templateUrl: './about-component.html',
  styleUrls: ['./about-component.css', '../../../styles/fontawesome-brands.lazy.scss'],
})
export class AboutComponent {
  readonly i18n = inject(LocaleService);
  homecontact = true;

  path(pageId: string): string {
    return this.i18n.path(pageId);
  }
}

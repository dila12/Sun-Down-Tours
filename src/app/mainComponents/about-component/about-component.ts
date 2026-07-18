import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from '../../sharedComponents/contact-us-component/contact-us-component';
import { FaqSectionComponent } from '../../sharedComponents/faq-section/faq-section';
import { LocaleService } from '../../i18n/locale.service';
import { TranslatePipe } from '../../i18n/t.pipe';
import {
  SITE_ADDRESS_FULL,
  SITE_EMAIL,
  SITE_HOURS_NOTE,
  SITE_PHONE_DISPLAY,
  SITE_TRIPADVISOR_URL,
  SITE_WHATSAPP_URL,
} from '../../i18n/site-contact';

@Component({
  selector: 'app-about-component',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactUsComponent, FaqSectionComponent, TranslatePipe],
  templateUrl: './about-component.html',
  styleUrls: ['./about-component.css', '../../../styles/fontawesome-brands.lazy.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly i18n = inject(LocaleService);
  homecontact = true;

  readonly whatsappUrl = SITE_WHATSAPP_URL;
  readonly tripadvisorUrl = SITE_TRIPADVISOR_URL;
  readonly address = SITE_ADDRESS_FULL;
  readonly phoneDisplay = SITE_PHONE_DISPLAY;
  readonly email = SITE_EMAIL;
  readonly hoursNote = SITE_HOURS_NOTE;

  path(pageId: string): string {
    return this.i18n.path(pageId);
  }
}

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../i18n/t.pipe';
import { LocaleService } from '../../i18n/locale.service';
import { HomeElfsightWidgetComponent } from '../../mainComponents/home-page-component/sections/home-elfsight-widget/home-elfsight-widget';
import {
  SITE_TRIPADVISOR_URL,
  SITE_WHATSAPP_URL,
} from '../../i18n/site-contact';

interface ReviewTopic {
  titleKey: string;
  bodyKey: string;
  pageId: string;
  linkKey: string;
}

/**
 * Review Center — real guest feedback only via Elfsight + TripAdvisor.
 * No invented quotes, ratings, or review schema that is not visible on-page.
 */
@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe, HomeElfsightWidgetComponent],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Testimonial {
  readonly i18n = inject(LocaleService);
  readonly tripadvisorUrl = SITE_TRIPADVISOR_URL;
  readonly whatsappUrl = SITE_WHATSAPP_URL;

  readonly topics: ReviewTopic[] = [
    {
      titleKey: 'testimonials.topics.toursTitle',
      bodyKey: 'testimonials.topics.toursBody',
      pageId: 'tours',
      linkKey: 'testimonials.topics.toursLink',
    },
    {
      titleKey: 'testimonials.topics.safariTitle',
      bodyKey: 'testimonials.topics.safariBody',
      pageId: 'guideSafari',
      linkKey: 'testimonials.topics.safariLink',
    },
    {
      titleKey: 'testimonials.topics.familyTitle',
      bodyKey: 'testimonials.topics.familyBody',
      pageId: 'guideFamilyTours',
      linkKey: 'testimonials.topics.familyLink',
    },
    {
      titleKey: 'testimonials.topics.honeymoonTitle',
      bodyKey: 'testimonials.topics.honeymoonBody',
      pageId: 'guideHoneymoon',
      linkKey: 'testimonials.topics.honeymoonLink',
    },
    {
      titleKey: 'testimonials.topics.driverTitle',
      bodyKey: 'testimonials.topics.driverBody',
      pageId: 'guidePrivateDriver',
      linkKey: 'testimonials.topics.driverLink',
    },
    {
      titleKey: 'testimonials.topics.destinationsTitle',
      bodyKey: 'testimonials.topics.destinationsBody',
      pageId: 'destinations',
      linkKey: 'testimonials.topics.destinationsLink',
    },
  ];

  path(pageId: string): string {
    return this.i18n.path(pageId);
  }
}

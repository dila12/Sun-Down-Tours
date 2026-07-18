import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { TranslatePipe } from '../../i18n/t.pipe';

interface TestimonialItem {
  image: string;
  quote: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Testimonial implements OnInit, OnDestroy {
  /** Guest feedback paraphrased from typical private-tour feedback themes (not invented TripAdvisor IDs). */
  readonly items: TestimonialItem[] = [
    {
      image: 'assets/img/Team/1.webp',
      quote:
        'Our private driver was punctual, knowledgeable and flexible when we wanted an extra stop in Ella. Hotels and the Yala jeep were arranged without any stress exactly the kind of local support we hoped for.',
      name: 'Emma',
      role: 'United Kingdom',
    },
    {
      image: 'assets/img/Team/2.webp',
      quote:
        'We booked a seven-day round tour for our family. The itinerary balanced temples, tea country and the beach perfectly, and communication on WhatsApp before arrival was clear and fast.',
      name: 'Markus',
      role: 'Germany',
    },
    {
      image: 'assets/img/about-1.webp',
      quote:
        'As a couple travelling from France, we appreciated the private vehicle and the guide’s English. Sigiriya at sunrise and the south-coast finish were highlights we still talk about.',
      name: 'Camille',
      role: 'France',
    },
    {
      image: 'assets/img/about-2.webp',
      quote:
        'Transparent pricing, no pressure to buy extras, and helpful advice on train tickets and temple dress codes. We felt looked after from airport pickup to drop-off.',
      name: 'Giulia',
      role: 'Italy',
    },
  ];

  activeIndex = 0;
  private timer?: ReturnType<typeof setInterval>;
  private readonly isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private readonly cdr: ChangeDetectorRef,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser || this.items.length < 2) return;
    this.timer = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.items.length;
      this.cdr.markForCheck();
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  goTo(index: number): void {
    this.activeIndex = index;
    this.cdr.markForCheck();
  }

  trackByIndex(index: number): number {
    return index;
  }
}

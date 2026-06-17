import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { loadLegacyCarouselScripts } from '../../utils/script-loader';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Testimonial implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      await loadLegacyCarouselScripts();
    }
  }

  trackByIndex(index: number): number {
    return index;
  }
}

import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-scroll-to-to-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-to-component.html',
  styleUrl: './scroll-to-to-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollToToComponent {
  isShow = false;
  private readonly topPosToStartShowing = 800;
  private scrollRaf?: number;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
  ) {}

  @HostListener('window:scroll')
  checkScroll() {
    if (!isPlatformBrowser(this.platformId) || this.scrollRaf) {
      return;
    }

    this.scrollRaf = requestAnimationFrame(() => {
      this.scrollRaf = undefined;
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const show = scrollPosition > this.topPosToStartShowing;
      if (show !== this.isShow) {
        this.isShow = show;
        this.cdr.markForCheck();
      }
    });
  }

  gotoTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

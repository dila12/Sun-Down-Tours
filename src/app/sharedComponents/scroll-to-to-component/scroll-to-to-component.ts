import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-scroll-to-to-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-to-component.html',
  styleUrl: './scroll-to-to-component.css'
})
export class ScrollToToComponent {
  isShow: boolean = false;
  topPosToStartShowing = 800;

  constructor(
  @Inject(PLATFORM_ID) private platformId: Object
) {}

  @HostListener('window:scroll')
  checkScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.isShow = scrollPosition > this.topPosToStartShowing;
    }
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

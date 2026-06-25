import { Component, Inject, OnInit, PLATFORM_ID, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollToToComponent } from '../../sharedComponents/scroll-to-to-component/scroll-to-to-component';
import { onImageError } from '../../utils/image.util';
import { SocialIconComponent } from '../../sharedComponents/social-icon/social-icon';
import { applyGoogleTranslateLang, getSavedLang, requestGoogleTranslateScript } from '../../utils/google-translate.util';

@Component({
  selector: 'app-layout-component',
  standalone: true,
  imports: [CommonModule, ScrollToToComponent, RouterModule, SocialIconComponent],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  activeLang = 'en';
  navOpen = false;
  readonly onImageError = onImageError;
  readonly logoSrc = 'assets/img/logos/2-80w.webp';
  readonly logoSrcSet = 'assets/img/logos/2-80w.webp 80w, assets/img/logos/2-160w-opt.webp 160w, assets/img/logos/2-320w.webp 320w';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.activeLang = getSavedLang();
      // Keep initial mobile render light: load translate only when needed.
      if (this.activeLang !== 'en') {
        requestGoogleTranslateScript();
      }
    }
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
    this.cdr.markForCheck();
  }

  closeNav() {
    this.navOpen = false;
    this.cdr.markForCheck();
  }

  changeLang(lang: string) {
    if (this.activeLang === lang) {
      return;
    }

    this.activeLang = lang;
    localStorage.setItem('preferred_lang', lang);

    if (lang !== 'en') {
      requestGoogleTranslateScript();
    }

    applyGoogleTranslateLang(lang);
  }
}

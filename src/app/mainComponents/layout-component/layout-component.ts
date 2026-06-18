import { Component, Inject, OnInit, PLATFORM_ID, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollToToComponent } from '../../sharedComponents/scroll-to-to-component/scroll-to-to-component';
import { onImageError } from '../../utils/image.util';
import {
  applyGoogleTranslateLang,
  getSavedLang,
  requestGoogleTranslateScript,
} from '../../utils/google-translate.util';

@Component({
  selector: 'app-layout-component',
  standalone: true,
  imports: [CommonModule, ScrollToToComponent, RouterModule],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  activeLang = 'en';
  readonly onImageError = onImageError;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('preferred_lang');

      if (savedLang && savedLang !== 'en') {
        this.activeLang = savedLang;
        this.applyGoogleTranslate(savedLang);
      }
    }
  }

  changeLang(lang: string) {
    this.activeLang = lang;
    localStorage.setItem('preferred_lang', lang);
    if (lang === 'en') {
      this.resetGoogleTranslate();
      return;
    }

    this.applyGoogleTranslate(lang);
  }

  private applyGoogleTranslate(lang: string) {
    if (isPlatformBrowser(this.platformId)) {
      const interval = setInterval(() => {
        const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (select) {
          select.value = lang;
          select.dispatchEvent(new Event('change'));
          clearInterval(interval);
        }
      }, 300);
    }
  }

  private resetGoogleTranslate() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    document.cookie = 'googtrans=;path=/;domain=' + location.hostname;
    document.cookie = 'googtrans=;path=/';

    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}

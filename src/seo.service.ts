import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  updateCanonicalUrl(url: string) {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;

    if (link) {
      link.href = url;
    } else {
      link = document.createElement('link');
      link.rel = 'canonical';
      link.href = url;
      document.head.appendChild(link);
    }
  }
}

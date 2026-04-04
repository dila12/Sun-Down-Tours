import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  updateCanonicalUrl(url: string) {
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
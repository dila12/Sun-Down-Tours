import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Injectable({ providedIn: 'root' })
export class CountryService {

  private detectedCountry: string | null = null;
  private countryPromise: Promise<string> | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async detectCountry(): Promise<string> {

    if (!isPlatformBrowser(this.platformId)) {
      return 'US';
    }

    if (this.detectedCountry) {
      return this.detectedCountry;
    }

    if (this.countryPromise) {
      return this.countryPromise;
    }

    this.countryPromise = fetch('https://api.country.is/', {
      cache: 'force-cache'
    })
      .then(res => res.json())
      .then((data: any) => {
        const country = data?.country || 'US';
        this.detectedCountry = country;
        return country;
      })
      .catch(() => {
        this.detectedCountry = 'US';
        return 'US';
      });

    return this.countryPromise;
  }
}
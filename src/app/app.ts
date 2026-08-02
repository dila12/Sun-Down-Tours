import {
  Component,
  Inject,
  PLATFORM_ID,
  ChangeDetectionStrategy,
  OnInit,
  inject,
} from '@angular/core';

import { RouterModule, Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { filter, map, mergeMap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

import { scheduleDeferredAssets } from './utils/deferred-assets.util';
import { SeoService } from '../seo.service';
import { LocaleService } from './i18n/locale.service';
import { StructuredDataService } from './i18n/structured-data.service';
import { TranslatePipe } from './i18n/t.pipe';
import { localeFromUrl, type Locale } from './i18n/locales';

import {
  acceptAnalyticsConsent,
  hasConsentChoice,
  initializeGoogleAnalytics,
  initializeGoogleConsent,
  rejectAnalyticsConsent,
  trackPageView,
} from './utils/third-party-scripts.util';
import { injectSpeedInsights } from '@vercel/speed-insights';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [RouterModule, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  showConsentBanner = false;

  private readonly seo = inject(SeoService);
  private readonly i18n = inject(LocaleService);
  private readonly structuredData = inject(StructuredDataService);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.route),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route.data),
      )
      .subscribe((data) => {
        const locale = (data['locale'] as Locale) ?? localeFromUrl(this.router.url);

        if (data['notFound']) {
          this.i18n.setPageId('home');
          this.seo.updateNotFound(locale);
          this.structuredData.clear();
          if (isPlatformBrowser(this.platformId)) {
            trackPageView();
          }
          return;
        }

        const pageId = (data['pageId'] as string) ?? 'home';

        this.i18n.setPageId(pageId);
        this.seo.update(pageId, locale);
        this.structuredData.update(pageId, locale);

        if (isPlatformBrowser(this.platformId)) {
          trackPageView();
        }
      });
  }

  get privacyPath(): string {
    return this.i18n.path('privacy');
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    initializeGoogleConsent();
    this.showConsentBanner = !hasConsentChoice();
    initializeGoogleAnalytics();
    scheduleDeferredAssets();
    
    // Initialize Vercel Speed Insights
    injectSpeedInsights({
      framework: 'angular',
    });
  }

  acceptCookies(): void {
    acceptAnalyticsConsent();
    this.showConsentBanner = false;
  }

  rejectCookies(): void {
    rejectAnalyticsConsent();
    this.showConsentBanner = false;
  }
}

import {
  Component,
  Inject,
  PLATFORM_ID,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';

import {
  RouterModule,
  Router,
  NavigationEnd,
  ActivatedRoute
} from '@angular/router';

import { Title, Meta } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

import { scheduleDeferredAssets } from './utils/deferred-assets.util';

import {
  acceptAnalyticsConsent,
  hasConsentChoice,
  initializeGoogleConsent,
  rejectAnalyticsConsent,
  scheduleThirdPartyScripts,
  trackPageView
} from './utils/third-party-scripts.util';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  showConsentBanner = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.route),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }

          return route;
        }),
        mergeMap(route => route.data)
      )
      .subscribe(data => {

        if (data['title']) {
          this.titleService.setTitle(data['title']);
        }

        if (data['description']) {
          this.metaService.updateTag({
            name: 'description',
            content: data['description']
          });
        }

        if (data['keywords']) {
          this.metaService.updateTag({
            name: 'keywords',
            content: data['keywords']
          });
        }

        if (isPlatformBrowser(this.platformId)) {

          const canonicalUrl =
            `${window.location.origin}${this.router.url}`;

          let canonical = document.querySelector(
            "link[rel='canonical']"
          ) as HTMLLinkElement;

          if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
          }

          canonical.setAttribute('href', canonicalUrl);

          // Sends SPA page views only after GA has loaded
          trackPageView();
        }
      });
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    initializeGoogleConsent();
    this.showConsentBanner = !hasConsentChoice();
    scheduleThirdPartyScripts();
    scheduleDeferredAssets();
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
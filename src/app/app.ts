import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [RouterModule]
})
export class AppComponent {

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
          while (route.firstChild) route = route.firstChild;
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

        const url = this.router.url;
        if (isPlatformBrowser(this.platformId)) {
          const canonical = document.querySelector("link[rel='canonical']") || document.createElement('link');
          canonical.setAttribute('rel', 'canonical');
          canonical.setAttribute('href', 'https://yourdomain.com' + url);
          document.head.appendChild(canonical);
        }
      });
  }
}
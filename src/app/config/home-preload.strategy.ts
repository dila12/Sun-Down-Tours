import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

/** Preload the homepage chunk in parallel with bootstrap (no layout→home waterfall). */
@Injectable({ providedIn: 'root' })
export class HomePreloadStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
    if (route.path === '' && route.loadComponent) {
      return load();
    }
    return of(null);
  }
}

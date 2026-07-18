import { Pipe, PipeTransform, inject } from '@angular/core';
import { LocaleService } from './locale.service';

/**
 * Template translation pipe: `{{ 'home.hero.title' | t }}`.
 *
 * Impure so it re-evaluates when the active locale changes (a locale switch is
 * a navigation, which triggers change detection). Lookups are O(depth) object
 * traversals, so this stays cheap.
 */
@Pipe({ name: 't', standalone: true, pure: false })
export class TranslatePipe implements PipeTransform {
  private readonly i18n = inject(LocaleService);

  transform(key: string): string {
    return this.i18n.t(key);
  }
}

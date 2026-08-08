import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IMAGE_ASSET_VERSION } from '../../../utils/image.util';

/**
 * Static LCP hero <img>. Skips hydration so Angular does not tear down the
 * already-decoded image (that was the ~1s element-render delay).
 * `src` must match the preload in `src/index.html`.
 */
@Component({
  selector: 'app-hero-lcp-image',
  standalone: true,
  template: `
    <img
      class="w-100"
      [src]="src"
      [attr.srcset]="srcset"
      sizes="100vw"
      width="960"
      height="495"
      fetchpriority="high"
      decoding="sync"
      [alt]="alt"
    />
  `,
  host: {
    ngSkipHydration: 'true',
    style: 'display:block',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroLcpImageComponent {
  @Input({ required: true }) alt = '';

  readonly src = `/assets/img/mainpage/1-960w.avif?v=${IMAGE_ASSET_VERSION}`;
  readonly srcset =
    `/assets/img/mainpage/1-640w.avif?v=${IMAGE_ASSET_VERSION} 640w, ` +
    `/assets/img/mainpage/1-960w.avif?v=${IMAGE_ASSET_VERSION} 960w`;
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IMAGE_ASSET_VERSION } from '../../../utils/image.util';

/**
 * Static LCP hero <picture>. Skips hydration so Angular does not tear down the
 * already-decoded image (that was the ~1s element-render delay).
 * Desktop/mobile `src` must match the preloads in `src/index.html`.
 */
@Component({
  selector: 'app-hero-lcp-image',
  standalone: true,
  template: `
    <picture>
      <source
        type="image/avif"
        media="(max-width: 767px)"
        [attr.srcset]="mobileSrcset"
        sizes="100vw"
      />
      <source
        type="image/avif"
        media="(min-width: 768px)"
        [attr.srcset]="srcset"
        sizes="100vw"
      />
      <img
        class="w-100"
        [src]="src"
        sizes="100vw"
        width="960"
        height="420"
        fetchpriority="high"
        decoding="sync"
        [alt]="alt"
      />
    </picture>
  `,
  host: {
    ngSkipHydration: 'true',
    style: 'display:block;position:absolute;inset:0',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroLcpImageComponent {
  @Input({ required: true }) alt = '';

  /** Desktop fallback; mobile uses the 400w source (matches 412px phones). */
  readonly src = `/assets/img/mainpage/hero-slide-boards-960w.avif?v=${IMAGE_ASSET_VERSION}`;
  readonly srcset =
    `/assets/img/mainpage/hero-slide-boards-640w.avif?v=${IMAGE_ASSET_VERSION} 640w, ` +
    `/assets/img/mainpage/hero-slide-boards-960w.avif?v=${IMAGE_ASSET_VERSION} 960w, ` +
    `/assets/img/mainpage/hero-slide-boards-1280w.avif?v=${IMAGE_ASSET_VERSION} 1280w, ` +
    `/assets/img/mainpage/hero-slide-boards-1920w.avif?v=${IMAGE_ASSET_VERSION} 1920w`;
  readonly mobileSrcset =
    `/assets/img/mainpage/hero-slide-boards-mobile-320w.avif?v=${IMAGE_ASSET_VERSION} 320w, ` +
    `/assets/img/mainpage/hero-slide-boards-mobile-400w.avif?v=${IMAGE_ASSET_VERSION} 400w`;
}

import { IMAGE_VARIANTS } from './image-variants.generated';

export const PLACEHOLDER_IMAGE = 'assets/img/package-2.webp';

/** Prefer WebP; keep original extension as fallback candidate. */
export function toWebpSrc(path: string): string {
  return path.replace(/\.(jpe?g|png)$/i, '.webp');
}

function getVariantWidths(basePath: string): number[] {
  return [...(IMAGE_VARIANTS[basePath] ?? [])].sort((a, b) => a - b);
}

/**
 * Build srcset using only responsive variants that exist on disk.
 * Pass includeVariants=false for images without responsive variants.
 */
export function buildSrcSet(
  basePath: string,
  includeVariants = true,
): string {
  if (!includeVariants) {
    return '';
  }

  const widths = getVariantWidths(basePath);
  if (!widths.length) {
    return '';
  }

  const dot = basePath.lastIndexOf('.');
  const stem = basePath.slice(0, dot);
  const ext = basePath.slice(dot);

  return widths.map((w) => `${stem}-${w}w${ext} ${w}w`).join(', ');
}

/**
 * Width descriptors for NgOptimizedImage ngSrcset (e.g. "320w, 640w").
 * Pair with ngSrc set to the base image path (no -{width}w suffix).
 */
export function buildNgSrcSet(
  basePath: string,
  includeVariants = true,
): string {
  if (!includeVariants) {
    return '';
  }

  const widths = getVariantWidths(basePath);
  if (!widths.length) {
    return '';
  }

  return widths.map((w) => `${w}w`).join(', ');
}

/** Best default src — largest variant not exceeding maxWidth (avoids overserving on cards). */
export function bestImageSrc(basePath: string, maxWidth = 640): string {
  const widths = getVariantWidths(basePath);
  if (!widths.length) {
    return basePath;
  }

  const dot = basePath.lastIndexOf('.');
  const stem = basePath.slice(0, dot);
  const ext = basePath.slice(dot);
  const suitable = widths.filter((w) => w <= maxWidth);
  const target = suitable.length ? suitable[suitable.length - 1] : widths[0];
  return `${stem}-${target}w${ext}`;
}

/** Hero LCP fallback src (mobile-first). */
export function heroLcpSrc(maxWidth = 640): string {
  return bestImageSrc(HERO_LCP_BASE, maxWidth);
}

export const HERO_LCP_BASE = 'assets/img/mainpage/1.webp';

/** Width descriptors for NgOptimizedImage on the homepage hero (LCP). */
export function heroLcpNgSrcSet(): string {
  return buildNgSrcSet(HERO_LCP_BASE);
}

export function defaultSizes(fullWidth = false): string {
  return fullWidth
    ? '100vw'
    : '(max-width: 576px) 100vw, (max-width: 992px) 50vw, 400px';
}

export function buildTourImagePath(tour: {
  imageFolder?: string;
  imageName: string;
  imageExt?: string;
}): string {
  const ext = tour.imageExt ?? 'jpg';
  const folder = tour.imageFolder ? `${tour.imageFolder}/` : '';
  return `assets/img/${folder}${tour.imageName}.${ext}`;
}

export function onImageError(event: Event, customFallback?: string): void {
  const img = event.target as HTMLImageElement;
  if (!img?.src) return;

  const stage = img.getAttribute('data-img-fallback') ?? '';

  if (stage === '' && img.srcset) {
    img.removeAttribute('srcset');
    img.removeAttribute('sizes');
    const base = img.getAttribute('data-img-base');
    if (base) {
      img.setAttribute('data-img-fallback', 'base');
      img.src = base;
      return;
    }
  }

  if (stage === '' && customFallback) {
    img.setAttribute('data-img-fallback', 'custom');
    img.src = customFallback;
    return;
  }

  if (stage === '' && /\.webp($|\?)/i.test(img.src)) {
    img.setAttribute('data-img-fallback', 'jpg');
    img.src = img.src.replace(/\.webp($|\?)/i, '.jpg$1');
    return;
  }

  const fallback = customFallback ?? PLACEHOLDER_IMAGE;
  if (stage !== 'placeholder' && !img.src.includes('package-placeholder')) {
    img.setAttribute('data-img-fallback', 'placeholder');
    img.src = fallback === customFallback ? PLACEHOLDER_IMAGE : fallback;
  }
}

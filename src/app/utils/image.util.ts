export const PLACEHOLDER_IMAGE = 'assets/img/package-2.webp';

/** Prefer WebP; keep original extension as fallback candidate. */
export function toWebpSrc(path: string): string {
  return path.replace(/\.(jpe?g|png)$/i, '.webp');
}

/**
 * Build srcset for WebP images that follow the {name}-{width}w.webp naming convention.
 * Pass includeVariants=false for images without responsive variants (e.g. hero 1.webp).
 */
export function buildSrcSet(basePath: string, includeVariants = true): string {
  if (!includeVariants || !/\.webp$/i.test(basePath) || /-\d+w\.webp$/i.test(basePath)) {
    return '';
  }

  const dot = basePath.lastIndexOf('.');
  const stem = basePath.slice(0, dot);
  const ext = basePath.slice(dot);
  const widths = [320, 640, 960, 1280];

  return widths
    .map((w) => `${stem}-${w}w${ext} ${w}w`)
    .concat(`${basePath} 1920w`)
    .join(', ');
}

export function defaultSizes(fullWidth = false): string {
  return fullWidth
    ? '100vw'
    : '(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw';
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

import { IMAGE_VARIANTS } from './image-variants.generated';

export const PLACEHOLDER_IMAGE = 'assets/img/package-2.webp';

/**
 * Bump when regenerating optimized assets so browsers/CDN drop stale WebP/AVIF.
 * Appended as ?v= to image URLs (not routing — only asset query).
 */
export const IMAGE_ASSET_VERSION = '20260718f';

export type ImageFormat = 'webp' | 'avif';

/** Normalize any raster path to the WebP base used in IMAGE_VARIANTS keys. */
export function toWebpSrc(path: string): string {
  return path.replace(/\.(jpe?g|png|avif)$/i, '.webp');
}

/** AVIF counterpart for a jpg/png/webp asset path. */
export function toAvifSrc(path: string): string {
  return toWebpSrc(path).replace(/\.webp$/i, '.avif');
}

/** Append cache-busting query without breaking relative asset paths. */
export function withImageVersion(path: string): string {
  if (!path || path.startsWith('data:') || path.includes('?v=')) {
    return path;
  }
  const sep = path.includes('?') ? '&' : '?';
  return `${path}${sep}v=${IMAGE_ASSET_VERSION}`;
}

function getVariantWidths(basePath: string, format: ImageFormat = 'webp'): number[] {
  // AVIF must only use real AVIF manifest entries — never invent .avif paths
  // from WebP widths (missing AVIF files break <picture> in some browsers).
  if (format === 'avif') {
    return [...(IMAGE_VARIANTS[toAvifSrc(basePath)] ?? [])].sort((a, b) => a - b);
  }
  return [...(IMAGE_VARIANTS[toWebpSrc(basePath)] ?? [])].sort((a, b) => a - b);
}

function formatExtension(format: ImageFormat): string {
  return format === 'avif' ? '.avif' : '.webp';
}

function variantStem(basePath: string, format: ImageFormat): string {
  const normalized = format === 'avif' ? toAvifSrc(basePath) : toWebpSrc(basePath);
  const dot = normalized.lastIndexOf('.');
  return normalized.slice(0, dot);
}

/**
 * Build srcset using only responsive variants that exist on disk.
 * Always includes the full base file as the largest candidate when variants exist,
 * so desktop/retina can pick a sharp master instead of a soft mid-size crop.
 */
export function buildSrcSet(
  basePath: string,
  includeVariants = true,
  format: ImageFormat = 'webp',
): string {
  if (!includeVariants) {
    return '';
  }

  const widths = getVariantWidths(basePath, format);
  const stem = variantStem(basePath, format);
  const ext = formatExtension(format);
  const base = withImageVersion(`${stem}${ext}`);

  if (!widths.length) {
    return '';
  }

  const parts = widths.map((w) => `${withImageVersion(`${stem}-${w}w${ext}`)} ${w}w`);
  const largest = widths[widths.length - 1];
  // Offer the full-resolution base slightly above the largest variant for crisp 2x displays.
  parts.push(`${base} ${Math.max(largest + 160, 1600)}w`);
  return parts.join(', ');
}

/** AVIF srcset helper — same widths as WebP when both were generated together. */
export function buildAvifSrcSet(
  basePath: string,
  includeVariants = true,
): string {
  return buildSrcSet(basePath, includeVariants, 'avif');
}

/**
 * Width descriptors for NgOptimizedImage ngSrcset (e.g. "320w, 640w").
 * Pair with ngSrc set to the base image path (no -{width}w suffix).
 */
export function buildNgSrcSet(
  basePath: string,
  includeVariants = true,
  format: ImageFormat = 'webp',
): string {
  if (!includeVariants) {
    return '';
  }

  const widths = getVariantWidths(basePath, format);
  if (!widths.length) {
    return '';
  }

  return widths.map((w) => `${w}w`).join(', ');
}

/**
 * Best default src — prefer the largest variant ≤ maxWidth.
 * For tour heroes use maxWidth ≥ 1280 (or 1600) so desktop is not served a soft 640/960.
 */
export function bestImageSrc(
  basePath: string,
  maxWidth = 1280,
  format: ImageFormat = 'webp',
): string {
  const widths = getVariantWidths(basePath, format);
  const fallback = withImageVersion(
    format === 'avif' ? toAvifSrc(basePath) : toWebpSrc(basePath),
  );
  if (!widths.length) {
    return fallback;
  }

  const stem = variantStem(basePath, format);
  const ext = formatExtension(format);
  const suitable = widths.filter((w) => w <= maxWidth);
  const target = suitable.length ? suitable[suitable.length - 1] : widths[0];

  // If the requested display width exceeds every variant, use the full base file.
  if (maxWidth > widths[widths.length - 1]) {
    return fallback;
  }

  return withImageVersion(`${stem}-${target}w${ext}`);
}

/**
 * Srcset capped at maxVariantWidth — for thumbnails so browsers never download
 * full-resolution masters for 100–160px slots (Lighthouse-friendly).
 */
export function buildCappedSrcSet(
  basePath: string,
  maxVariantWidth: number,
  format: ImageFormat = 'webp',
): string {
  const widths = getVariantWidths(basePath, format).filter((w) => w <= maxVariantWidth);
  if (!widths.length) {
    return '';
  }

  const stem = variantStem(basePath, format);
  const ext = formatExtension(format);
  return widths
    .map((w) => `${withImageVersion(`${stem}-${w}w${ext}`)} ${w}w`)
    .join(', ');
}

export function buildCappedAvifSrcSet(basePath: string, maxVariantWidth: number): string {
  return buildCappedSrcSet(basePath, maxVariantWidth, 'avif');
}

/** Tour gallery main stage — sharp on desktop/retina. */
export function galleryMainSrc(basePath: string): string {
  return bestImageSrc(basePath, 1920);
}

/** Lightbox / zoom — always the full base encode (never a mid-size crop). */
export function galleryLightboxSrc(basePath: string, format: ImageFormat = 'webp'): string {
  return withImageVersion(format === 'avif' ? toAvifSrc(basePath) : toWebpSrc(basePath));
}

/** Thumbnail default src (≈160–320 CSS px). */
export function galleryThumbSrc(basePath: string): string {
  return bestImageSrc(basePath, 320);
}

/** Hero LCP fallback src (mobile-first). */
export function heroLcpSrc(maxWidth = 960): string {
  return bestImageSrc(HERO_LCP_BASE, maxWidth);
}

/** Hero LCP AVIF srcset when variants exist. */
export function heroLcpAvifSrcSet(): string {
  return buildAvifSrcSet(HERO_LCP_BASE);
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
      img.src = withImageVersion(base);
      return;
    }
  }

  if (stage === '' && customFallback) {
    img.setAttribute('data-img-fallback', 'custom');
    img.src = withImageVersion(customFallback);
    return;
  }

  if (stage === '' && /\.avif($|\?)/i.test(img.src)) {
    img.setAttribute('data-img-fallback', 'webp');
    img.src = img.src.replace(/\.avif($|\?)/i, '.webp$1');
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
    img.src = withImageVersion(fallback === customFallback ? PLACEHOLDER_IMAGE : fallback);
  }
}

import { isContentImagePending, sameDocumentPath, stripHash } from './page-loader.logic';

describe('page loader logic', () => {
  const added: HTMLElement[] = [];

  afterEach(() => {
    for (const node of added) {
      node.remove();
    }
    added.length = 0;
  });

  it('treats a hash change as the same page', () => {
    expect(stripHash('/tours#plan')).toBe('/tours');
    expect(sameDocumentPath('/sri-lanka-tours', '/sri-lanka-tours#day-2')).toBeTrue();
    expect(sameDocumentPath('/tours', '/about')).toBeFalse();
  });

  it('waits on a content photo that has not decoded', () => {
    const img = document.createElement('img');
    img.setAttribute('src', '/assets/img/package-2.webp');
    img.setAttribute('width', '400');
    img.loading = 'eager';
    Object.defineProperty(img, 'complete', { configurable: true, get: () => false });
    document.body.appendChild(img);
    added.push(img);

    expect(isContentImagePending(img, 800)).toBeTrue();
  });

  it('skips photos that are already decoded', () => {
    const img = document.createElement('img');
    img.setAttribute('src', '/assets/img/package-2.webp');
    img.setAttribute('width', '400');
    Object.defineProperty(img, 'complete', { configurable: true, get: () => true });
    Object.defineProperty(img, 'naturalWidth', { configurable: true, get: () => 400 });

    expect(isContentImagePending(img, 800)).toBeFalse();
  });

  it('skips icons and lazy images below the fold', () => {
    const icon = document.createElement('img');
    icon.setAttribute('src', 'https://flagcdn.com/w20/gb.png');
    icon.setAttribute('width', '20');
    Object.defineProperty(icon, 'complete', { configurable: true, get: () => false });
    expect(isContentImagePending(icon, 800)).toBeFalse();

    const lazy = document.createElement('img');
    lazy.setAttribute('src', '/assets/img/package-2.webp');
    lazy.setAttribute('width', '400');
    lazy.loading = 'lazy';
    Object.defineProperty(lazy, 'complete', { configurable: true, get: () => false });
    spyOn(lazy, 'getBoundingClientRect').and.returnValue(new DOMRect(0, 2400, 400, 260));
    expect(isContentImagePending(lazy, 800)).toBeFalse();
  });

  it('ignores images inside the loader itself', () => {
    const wrap = document.createElement('div');
    wrap.setAttribute('data-page-loader', '');
    const img = document.createElement('img');
    img.setAttribute('src', '/assets/img/package-2.webp');
    img.setAttribute('width', '400');
    Object.defineProperty(img, 'complete', { configurable: true, get: () => false });
    wrap.appendChild(img);
    document.body.appendChild(wrap);
    added.push(wrap);

    expect(isContentImagePending(img, 800)).toBeFalse();
  });
});

export function loadScript(src: string, id?: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (id && document.getElementById(id)) {
      resolve();
      return;
    }
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    if (id) s.id = id;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(s);
  });
}

export async function loadLegacyCarouselScripts(): Promise<void> {
  await loadScript('https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js', 'jquery-lib');
  await loadScript('assets/lib/owlcarousel/owl.carousel.min.js', 'owl-lib');
  await loadScript('assets/js/main.js', 'main-js');
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function trackPageView(): void {

    if (typeof window === 'undefined') {
        return;
    }

    const gtag = (window as any).gtag;

    if (!gtag) {
        return;
    }

    gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname
    });

}
import { Type } from '@angular/core';
import { PAGES } from './site-data.mjs';
import type { PageData } from './site-data.mjs';

export type ComponentLoader = () => Promise<Type<unknown>>;

/**
 * Maps each page id (from `site-data.mjs`) to its lazy-loaded standalone
 * component. One component per page, reused across every locale.
 */
export const PAGE_LOADERS: Record<string, ComponentLoader> = {
  home: () =>
    import('../mainComponents/home-page-component/home-page-component').then((m) => m.HomePageComponent),
  tours: () => import('../mainComponents/tour-packages/tour-packages').then((m) => m.TourPackages),
  services: () =>
    import('../mainComponents/service-component/service-component').then((m) => m.ServiceComponent),
  about: () => import('../mainComponents/about-component/about-component').then((m) => m.AboutComponent),
  contact: () =>
    import('../sharedComponents/contact-us-component/contact-us-component').then((m) => m.ContactUsComponent),

  tour7: () =>
    import('../mainComponents/tour-packages/roundTours/seven-days-tour-component/seven-days-tour-component').then(
      (m) => m.SevenDaysTourComponent,
    ),
  tour10: () =>
    import('../mainComponents/tour-packages/roundTours/ten-days-tour-component/ten-days-tour-component').then(
      (m) => m.TenDaysTourComponent,
    ),
  tour8: () =>
    import('../mainComponents/tour-packages/roundTours/eightdays-component/eightdays-component').then(
      (m) => m.EightdaysComponent,
    ),
  tour6: () =>
    import('../mainComponents/tour-packages/roundTours/six-days-tour/six-days-tour').then((m) => m.SixDaysTour),
  tour5: () =>
    import('../mainComponents/tour-packages/roundTours/five-days-tour-component/five-days-tour-component').then(
      (m) => m.FiveDaysTourComponent,
    ),
  tour4: () =>
    import('../mainComponents/tour-packages/roundTours/fourdays-tour-component/fourdays-tour-component').then(
      (m) => m.FourdaysTourComponent,
    ),
  tour2ek: () =>
    import('../mainComponents/tour-packages/roundTours/two-days-tour-plus/two-days-tour-plus').then(
      (m) => m.TwoDaysTourPlus,
    ),
  tour2ey: () =>
    import('../mainComponents/tour-packages/roundTours/ella-yala-two-day-tour/ella-yala-two-day-tour').then(
      (m) => m.EllaYalaTwoDayTour,
    ),

  ellaDay: () =>
    import('../mainComponents/tour-packages/dayTours/ella-day-tour-component/ella-day-tour-component').then(
      (m) => m.EllaDayTourComponent,
    ),
  galleDay: () =>
    import('../mainComponents/tour-packages/dayTours/galle-day-tour/galle-day-tour').then((m) => m.GalleDayTour),
  kandyDay: () =>
    import('../mainComponents/tour-packages/dayTours/kandy-day-tour-component/kandy-day-tour-component').then(
      (m) => m.KandyDayTourComponent,
    ),
  sigiriyaDay: () =>
    import('../mainComponents/tour-packages/dayTours/sigiriya-day-tour-component/sigiriya-day-tour-component').then(
      (m) => m.SigiriyaDayTourComponent,
    ),

  destinations: () =>
    import('../sharedComponents/destination-component/destination-component').then((m) => m.DestinationComponent),
  guides: () => import('../sharedComponents/travel-guides/travel-guides').then((m) => m.TravelGuides),
  restaurants: () =>
    import('../mainComponents/resturant-component/resturant-component').then((m) => m.ResturantComponent),
  testimonials: () => import('../sharedComponents/testimonial/testimonial').then((m) => m.Testimonial),

  privacy: () =>
    import('../sharedComponents/privacy-policy/privacy-policy-component/privacy-policy-component').then(
      (m) => m.PrivacyPolicyComponent,
    ),
  bookingSuccess: () =>
    import('../sharedComponents/booking-success/booking-success').then((m) => m.BookingSuccessComponent),
};

export interface RegistryPage extends PageData {
  load: ComponentLoader;
}

/** All pages with a resolved component loader. */
export const REGISTRY: RegistryPage[] = PAGES.filter((p) => PAGE_LOADERS[p.id]).map((p) => ({
  ...p,
  load: PAGE_LOADERS[p.id],
}));

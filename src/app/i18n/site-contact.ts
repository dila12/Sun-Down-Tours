/**
 * Single source of truth for public NAP / contact (GBP + schema + UI).
 * Do not invent alternate offices or credentials here.
 */
export const SITE_BRAND = 'Sundown Tours Sri Lanka';

export const SITE_PHONE_E164 = '+94706293585';
export const SITE_PHONE_DISPLAY = '+94 70 629 3585';
export const SITE_WHATSAPP = '94706293585';
export const SITE_WHATSAPP_URL = `https://wa.me/${SITE_WHATSAPP}`;

export const SITE_EMAIL = 'sundowntoursrilanka@gmail.com';

/** Headquarters — only office published on the website. */
export const SITE_ADDRESS_STREET = 'No 302, Mahawaskaduwa';
export const SITE_ADDRESS_LOCALITY = 'Waskaduwa';
export const SITE_ADDRESS_REGION = 'Kalutara North';
export const SITE_ADDRESS_COUNTRY = 'Sri Lanka';
export const SITE_ADDRESS_FULL =
  'No 302, Mahawaskaduwa, Waskaduwa, Kalutara North, Sri Lanka';

/** Office hours used in UI + LocalBusiness schema (WhatsApp messages welcome anytime). */
export const SITE_HOURS_OPENS = '08:00';
export const SITE_HOURS_CLOSES = '20:00';
export const SITE_HOURS_LABEL = 'Open 08:00–20:00 · 7 days a week';
export const SITE_HOURS_NOTE =
  'Office hours 08:00–20:00 (Sri Lanka time). WhatsApp messages are welcome any time we typically reply within a few hours.';

export const SITE_GEO = { latitude: 6.6331, longitude: 79.9533 };

export const SITE_TRIPADVISOR_URL =
  'https://www.tripadvisor.com/Attraction_Review-g304134-d34227309-Reviews-Sun_Down_Tours_Sri_Lanka-Hikkaduwa_Galle_District_Southern_Province.html';

export const SITE_FACEBOOK_URL =
  'https://www.facebook.com/profile.php?id=61563992655756';

export const SITE_INSTAGRAM_URL = 'https://www.instagram.com/sundowntourssr';

/** Google Maps search for headquarters (no fabricated place ID). */
export const SITE_MAPS_EMBED_URL =
  'https://maps.google.com/maps?q=No+302+Mahawaskaduwa+Waskaduwa+Kalutara+Sri+Lanka&z=15&output=embed';

export const SITE_MAPS_LINK_URL =
  'https://www.google.com/maps/search/?api=1&query=No+302+Mahawaskaduwa+Waskaduwa+Kalutara+Sri+Lanka';

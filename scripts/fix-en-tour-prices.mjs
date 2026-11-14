import { readFileSync, writeFileSync } from 'node:fs';
import { SEO_CTR_COPY, assertSeoCtrCopy } from './seo-ctr-copy.mjs';

const PRICE = {
  tour2ey: 275,
  tour2ek: 285,
  tour4: 650,
  tour5: 700,
  tour6: 750,
  tour7: 788,
  tour8: 995,
  tour10: 1100,
  ellaDay: 175,
  galleDay: 95,
  kandyDay: 125,
  sigiriyaDay: 133,
};

const enFixes = {
  tour2ey: `Ella hills plus a private Yala jeep safari weekend with chauffeur and 4-star hotel stay. From $${PRICE.tour2ey} per person. Free cancel up to 14 days. Get a free quote.`,
  tour2ek: `Short hill-country trip: Udawalawa, Ella highlights, then Kandy Temple of the Tooth with private driver. From $${PRICE.tour2ek} per person. Get a free quote today.`,
  tour4: `Kandy culture, Ella hills and Yala safari, then Galle or Bentota south coast. From $${PRICE.tour4} per person. Free cancel up to 14 days. Get a free quote.`,
  tour5: `Sigiriya, Kandy, Nuwara Eliya tea country, Ella and a south-coast finish with Madu River. 4-star hotels. From $${PRICE.tour5} per person. Get a free quote.`,
  tour6: `Sigiriya, Kandy, tea hills, Yala safari and south-west beach time with 4-star hotels. From $${PRICE.tour6} per person. Free cancel up to 14 days. Get a free quote.`,
  tour7: `Wilpattu safari, Sigiriya, Kandy, Ella and Mirissa beach with optional whale watching. 4-star hotels. From $${PRICE.tour7} per person. Get a free quote.`,
  tour8: `Pidurangala, Sigiriya, Kandy, tea country, Ella, Yala safari and Mirissa beach nights. From $${PRICE.tour8} per person. Free cancel up to 14 days. Get a free quote.`,
  tour10: `Full-island highlights: Wilpattu, Anuradhapura, Sigiriya, Kandy, Ella and Hikkaduwa beach days. From $${PRICE.tour10} per person. Get a free quote today.`,
  ellaDay: `Private Ella day tour: Nine Arch Bridge, Little Adams Peak and Ravana Falls with chauffeur. From $${PRICE.ellaDay} per person. Free quote. Payment later available.`,
  galleDay: `Private Galle day tour: Dutch Fort walls, lighthouse and south-coast stops with chauffeur. From $${PRICE.galleDay} per person. Get a free quote. Payment later.`,
  kandyDay: `Private Kandy day tour: Temple of the Tooth, viewpoint and city highlights with chauffeur. From $${PRICE.kandyDay} per person. Get a free quote. Plan with confidence.`,
  sigiriyaDay: `Private Sigiriya day: Lion Rock or Pidurangala, Dambulla caves and village life with chauffeur. From $${PRICE.sigiriyaDay} per person. Get a free quote. Since 1992.`,
};

for (const [id, desc] of Object.entries(enFixes)) {
  if (desc.length < 140 || desc.length > 155) {
    throw new Error(`${id} ${desc.length} ${desc}`);
  }
  SEO_CTR_COPY.en[id].description = desc;
}

assertSeoCtrCopy();

import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const filePath = join(dirname(fileURLToPath(import.meta.url)), 'seo-ctr-copy.mjs');
const raw = readFileSync(filePath, 'utf8');
const start = raw.indexOf('export const SEO_CTR_COPY = ');
const header = raw.slice(0, start + 'export const SEO_CTR_COPY = '.length);
const footer = raw.slice(raw.indexOf('\n/** Throws if any title'));
let body = '{\n';
for (const locale of Object.keys(SEO_CTR_COPY)) {
  body += `  ${locale}: {\n`;
  for (const [pageId, row] of Object.entries(SEO_CTR_COPY[locale])) {
    body += `    ${pageId}: {\n`;
    body += `      title: ${JSON.stringify(row.title)},\n`;
    body += `      description: ${JSON.stringify(row.description)},\n`;
    body += `      keywords: ${JSON.stringify(row.keywords)},\n`;
    body += `    },\n`;
  }
  body += `  },\n`;
}
body += '};';
writeFileSync(filePath, header + body + footer, 'utf8');
console.log('EN tour prices restored');
for (const id of Object.keys(enFixes)) {
  console.log(id, SEO_CTR_COPY.en[id].description.match(/\$\d+/)[0], SEO_CTR_COPY.en[id].description.length);
}

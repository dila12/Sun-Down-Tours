import { buildPath } from '../src/app/i18n/site-data.mjs';

const BASE = 'http://localhost:4000';
async function h1s(path) {
  const r = await fetch(BASE + path);
  const html = await r.text();
  const list = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
    m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
  );
  return { path, status: r.status, h1s: list, robots: (html.match(/name=["']robots["'][^>]+content=["']([^"']+)/i) || [])[1] };
}

for (const id of ['tour7', 'contact', 'restaurants', 'testimonials', 'home']) {
  for (const locale of ['en', 'nl']) {
    console.log(JSON.stringify(await h1s(buildPath(id, locale))));
  }
}

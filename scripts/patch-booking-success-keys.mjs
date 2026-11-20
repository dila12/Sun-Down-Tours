import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = join(process.cwd(), 'src/app/i18n/content');
const keys = {
  de: {
    hotelCategory: 'Hotelkategorie',
    guideOption: 'Guide',
    guideLanguage: 'Guide Sprache',
  },
  fr: {
    hotelCategory: 'Categorie d hotel',
    guideOption: 'Guide',
    guideLanguage: 'Langue du guide',
  },
  it: {
    hotelCategory: 'Categoria hotel',
    guideOption: 'Guida',
    guideLanguage: 'Lingua della guida',
  },
  es: {
    hotelCategory: 'Categoria de hotel',
    guideOption: 'Guia',
    guideLanguage: 'Idioma del guia',
  },
  pl: {
    hotelCategory: 'Kategoria hotelu',
    guideOption: 'Przewodnik',
    guideLanguage: 'Jezyk przewodnika',
  },
  ru: {
    hotelCategory: 'Категория отеля',
    guideOption: 'Гид',
    guideLanguage: 'Язык гида',
  },
  nl: {
    hotelCategory: 'Hotelcategorie',
    guideOption: 'Gids',
    guideLanguage: 'Taal van de gids',
  },
};

for (const [loc, k] of Object.entries(keys)) {
  const file = join(dir, `${loc}.ts`);
  let src = readFileSync(file, 'utf8');
  if (/bookingSuccess:[\s\S]*?hotelCategory:/.test(src)) {
    console.log('skip', loc);
    continue;
  }
  const next = src.replace(
    /(bookingSuccess:[\s\S]*?tourType:\s*'[^']*',)/,
    `$1\n    hotelCategory: '${k.hotelCategory}',\n    guideOption: '${k.guideOption}',\n    guideLanguage: '${k.guideLanguage}',`,
  );
  if (next === src) {
    console.log('NO MARKER', loc);
    continue;
  }
  writeFileSync(file, next);
  console.log('ok', loc);
}

/**
 * Add hotel / guide booking labels to non English locale dictionaries.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = join(process.cwd(), 'src/app/i18n/content');

const blocks = {
  de: `      hotelCategory: 'Hotelkategorie',
      hotel3Star: '3 Sterne Hotels',
      hotel4Star: '4 Sterne Hotels',
      guideOption: 'Guide Option',
      withGuide: 'Mit Guide',
      withoutGuide: 'Ohne Guide',
      withoutGuideHintPre: 'Spart',
      withoutGuideHintPost: 'pro Tag vom Paketpreis.',
      guideLanguage: 'Guide Sprache',
      guideLang: {
        english: 'Englisch',
        german: 'Deutsch',
        russian: 'Russisch',
        polish: 'Polnisch',
      },
      packagePrice: 'Paket',
      guideSaving: 'Ersparnis ohne Guide',`,
  fr: `      hotelCategory: 'Categorie d hotel',
      hotel3Star: 'Hotels 3 etoiles',
      hotel4Star: 'Hotels 4 etoiles',
      guideOption: 'Option guide',
      withGuide: 'Avec guide',
      withoutGuide: 'Sans guide',
      withoutGuideHintPre: 'Economise',
      withoutGuideHintPost: 'par jour sur le forfait.',
      guideLanguage: 'Langue du guide',
      guideLang: {
        english: 'Anglais',
        german: 'Allemand',
        russian: 'Russe',
        polish: 'Polonais',
      },
      packagePrice: 'Forfait',
      guideSaving: 'Economie sans guide',`,
  it: `      hotelCategory: 'Categoria hotel',
      hotel3Star: 'Hotel 3 stelle',
      hotel4Star: 'Hotel 4 stelle',
      guideOption: 'Opzione guida',
      withGuide: 'Con guida',
      withoutGuide: 'Senza guida',
      withoutGuideHintPre: 'Risparmi',
      withoutGuideHintPost: 'al giorno sul pacchetto.',
      guideLanguage: 'Lingua della guida',
      guideLang: {
        english: 'Inglese',
        german: 'Tedesco',
        russian: 'Russo',
        polish: 'Polacco',
      },
      packagePrice: 'Pacchetto',
      guideSaving: 'Risparmio senza guida',`,
  es: `      hotelCategory: 'Categoria de hotel',
      hotel3Star: 'Hoteles 3 estrellas',
      hotel4Star: 'Hoteles 4 estrellas',
      guideOption: 'Opcion de guia',
      withGuide: 'Con guia',
      withoutGuide: 'Sin guia',
      withoutGuideHintPre: 'Ahorra',
      withoutGuideHintPost: 'al dia del paquete.',
      guideLanguage: 'Idioma del guia',
      guideLang: {
        english: 'Ingles',
        german: 'Aleman',
        russian: 'Ruso',
        polish: 'Polaco',
      },
      packagePrice: 'Paquete',
      guideSaving: 'Ahorro sin guia',`,
  pl: `      hotelCategory: 'Kategoria hotelu',
      hotel3Star: 'Hotele 3 gwiazdkowe',
      hotel4Star: 'Hotele 4 gwiazdkowe',
      guideOption: 'Opcja przewodnika',
      withGuide: 'Z przewodnikiem',
      withoutGuide: 'Bez przewodnika',
      withoutGuideHintPre: 'Oszczedzasz',
      withoutGuideHintPost: 'dziennie od ceny pakietu.',
      guideLanguage: 'Jezyk przewodnika',
      guideLang: {
        english: 'Angielski',
        german: 'Niemiecki',
        russian: 'Rosyjski',
        polish: 'Polski',
      },
      packagePrice: 'Pakiet',
      guideSaving: 'Oszczednosc bez przewodnika',`,
  ru: `      hotelCategory: 'Категория отеля',
      hotel3Star: 'Отели 3 звезды',
      hotel4Star: 'Отели 4 звезды',
      guideOption: 'Вариант гида',
      withGuide: 'С гидом',
      withoutGuide: 'Без гида',
      withoutGuideHintPre: 'Экономия',
      withoutGuideHintPost: 'в день от стоимости пакета.',
      guideLanguage: 'Язык гида',
      guideLang: {
        english: 'Английский',
        german: 'Немецкий',
        russian: 'Русский',
        polish: 'Польский',
      },
      packagePrice: 'Пакет',
      guideSaving: 'Экономия без гида',`,
  nl: `      hotelCategory: 'Hotelcategorie',
      hotel3Star: '3 sterren hotels',
      hotel4Star: '4 sterren hotels',
      guideOption: 'Gids optie',
      withGuide: 'Met gids',
      withoutGuide: 'Zonder gids',
      withoutGuideHintPre: 'Bespaart',
      withoutGuideHintPost: 'per dag op de pakketprijs.',
      guideLanguage: 'Taal van de gids',
      guideLang: {
        english: 'Engels',
        german: 'Duits',
        russian: 'Russisch',
        polish: 'Pools',
      },
      packagePrice: 'Pakket',
      guideSaving: 'Besparing zonder gids',`,
};

for (const [loc, block] of Object.entries(blocks)) {
  const file = join(dir, `${loc}.ts`);
  let src = readFileSync(file, 'utf8');
  if (src.includes('hotelCategory:')) {
    console.log('skip', loc);
    continue;
  }
  if (!src.includes("total: '") && !src.includes('total: "')) {
    // try German Total etc
  }
  const markers = [
    /(total:\s*'[^']*',\s*\n\s*paymentMethod:)/,
    /(total:\s*'[^']*',\s*\n\s*paymentMethod:)/,
  ];
  let done = false;
  src = src.replace(/(total:\s*'[^']*',\s*\n)(\s*paymentMethod:)/, (m, a, b) => {
    done = true;
    return `${a}${block}\n${b}`;
  });
  if (!done) {
    // de uses Gesamt etc — look for paymentMethod after booking block
    src = src.replace(/(\n\s*paymentMethod:\s*')/, (m) => `\n${block}\n${m.trimStart()}`);
    done = src.includes('hotelCategory:');
  }
  if (!done) {
    console.log('NO MARKER', loc);
    continue;
  }
  writeFileSync(file, src);
  console.log('ok', loc);
}

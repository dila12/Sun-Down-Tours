import { readFile, writeFile } from 'node:fs/promises';
import { glob } from 'node:fs/promises';

const files = [
  'src/app/mainComponents/tour-packages/dayTours/ella-day-tour-component/ella-day-tour-component.ts',
  'src/app/mainComponents/tour-packages/dayTours/galle-day-tour/galle-day-tour.ts',
  'src/app/mainComponents/tour-packages/dayTours/kandy-day-tour-component/kandy-day-tour-component.ts',
  'src/app/mainComponents/tour-packages/dayTours/sigiriya-day-tour-component/sigiriya-day-tour-component.ts',
  'src/app/mainComponents/tour-packages/roundTours/eightdays-component/eightdays-component.ts',
  'src/app/mainComponents/tour-packages/roundTours/ella-yala-two-day-tour/ella-yala-two-day-tour.ts',
  'src/app/mainComponents/tour-packages/roundTours/five-days-tour-component/five-days-tour-component.ts',
  'src/app/mainComponents/tour-packages/roundTours/fourdays-tour-component/fourdays-tour-component.ts',
  'src/app/mainComponents/tour-packages/roundTours/seven-days-tour-component/seven-days-tour-component.ts',
  'src/app/mainComponents/tour-packages/roundTours/six-days-tour/six-days-tour.ts',
  'src/app/mainComponents/tour-packages/roundTours/ten-days-tour-component/ten-days-tour-component.ts',
  'src/app/mainComponents/tour-packages/roundTours/two-days-tour-plus/two-days-tour-plus.ts',
];

for (const file of files) {
  let src = await readFile(file, 'utf8');
  const next = src.replace(/^[ \t]*this\.seo\.updateCanonicalUrl\([^)]*\);\r?\n/gm, '');
  if (next !== src) {
    await writeFile(file, next);
    console.log('removed canonical', file);
  }
}

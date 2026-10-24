import { readFileSync, writeFileSync } from 'node:fs';
import { globSync } from 'node:fs';

const files = globSync('src/**/*.spec.ts');
let changed = 0;
for (const file of files) {
  let text = readFileSync(file, 'utf8');
  if (text.includes('provideRouter')) continue;
  if (!text.includes('TestBed.configureTestingModule')) continue;
  const next = text.replace(
    /import \{[^}]+\} from '@angular\/core\/testing';\r?\n/,
    (match) => `${match}import { provideRouter } from '@angular/router';\n`,
  );
  const patched = next.replace(
    /TestBed\.configureTestingModule\(\{\s*imports:\s*\[([^\]]+)\]\s*\}\)/,
    (_match, imports) =>
      `TestBed.configureTestingModule({\n      imports: [${imports.trim()}],\n      providers: [provideRouter([])],\n    })`,
  );
  if (patched === text) {
    console.log('UNCHANGED', file);
    continue;
  }
  writeFileSync(file, patched);
  changed += 1;
  console.log('patched', file);
}
console.log('changed', changed);

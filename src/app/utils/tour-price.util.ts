import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

/**
 * Loads the 2-person package price from `assets/data/US{filecode}.json`.
 * Logs clearly when the file is missing or has no usable price — never hides that.
 */
export async function loadTourPrice2p(
  http: HttpClient,
  filecode: string,
): Promise<number> {
  if (!filecode) {
    console.error('[Sundown Tours] loadTourPrice2p called without a filecode.');
    return 0;
  }

  const path = `assets/data/US${filecode}.json`;
  try {
    const data = await firstValueFrom(http.get<any>(path));
    const amount = Number(data?.price?.['2'] ?? data?.price?.[2] ?? 0);
    if (!(amount > 0)) {
      console.error(
        `[Sundown Tours] ${path} exists but price["2"] is missing or zero (filecode=${filecode}).`,
      );
      return 0;
    }
    return amount;
  } catch (err) {
    console.error(
      `[Sundown Tours] Failed to load price file ${path} (filecode=${filecode}).`,
      err,
    );
    return 0;
  }
}

import type { ArticleContent } from '../articles/types';
import { SIGIRIYA_DEST } from './sigiriya';
import { ELLA_DEST } from './ella';
import { YALA_DEST } from './yala';
import { KANDY_DEST } from './kandy';
import { DAMBULLA_DEST } from './dambulla';
import { GALLE_DEST } from './galle';

export { DEST_PAGE_IDS, DEST_HUB_CARDS, getDestHubCardMeta } from './catalog';
export type { DestHubCardMeta, DestPageId } from './catalog';

/**
 * Registry of full destination detail content (English base + locale overlays).
 * Keyed by page id from site-data / catalog.
 */
export const DESTINATION_CONTENT: Record<string, ArticleContent> = {
  destSigiriya: SIGIRIYA_DEST,
  destElla: ELLA_DEST,
  destYala: YALA_DEST,
  destKandy: KANDY_DEST,
  destDambulla: DAMBULLA_DEST,
  destGalle: GALLE_DEST,
};

/** Look up the full localized-content registry entry for a destination page id. */
export function getDestination(pageId: string): ArticleContent | undefined {
  return DESTINATION_CONTENT[pageId];
}

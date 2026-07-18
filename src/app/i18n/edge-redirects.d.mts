/** @returns {Map<string, string>} */
export function buildEdgeRedirectMap(): Map<string, string>;

/** @returns {string | null} */
export function resolveEdgeRedirect(
  pathname: string,
  map?: Map<string, string>,
): string | null;

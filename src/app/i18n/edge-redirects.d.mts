/** @returns {Map<string, string>} */
export function buildEdgeRedirectMap(): Map<string, string>;

/** @returns {string | null} */
export function resolveDormantLocaleRedirect(path: string): string | null;

/** @returns {string | null} */
export function resolveEdgeRedirect(
  pathname: string,
  map?: Map<string, string>,
): string | null;

export function buildDormantLocaleVercelRedirects(): {
  source: string;
  destination: string;
  permanent: boolean;
}[];

export function buildLocaleHomeTrailingSlashRedirects(): {
  source: string;
  destination: string;
  permanent: boolean;
}[];

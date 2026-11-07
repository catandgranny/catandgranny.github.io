/**
 * Central site configuration.
 *
 * Everything that depends on where the site is deployed lives here, so a
 * rename of the GitHub repository (or a move to a custom domain) is a one-line
 * change instead of a find-and-replace across the codebase.
 */

/** Sub-path the site is served from on GitHub Pages (no trailing slash).
 *  '/' for a user/organization page (catandgranny.github.io). */
export const BASE_PATH = '/';

/** Origin of the deployment. Keep in sync with `site` in astro.config.mjs. */
export const SITE_ORIGIN = 'https://catandgranny.github.io';

export const SITE = {
  name: 'Cat and Granny Online',
  /** Used inside <title> when the page title is not the brand itself. */
  tagline: 'Play Cat and Granny Free in Your Browser',
  description:
    'Play Cat and Granny online for free — a first-person cat game where you wreck Granny’s house, pin the mess on the new black cat and hide in a box before she spots you. No download, no login.',
  locale: 'en_US',
  twitter: '@catandgranny',
  /** Date of the game build the player currently streams. */
  gameUpdated: 'November 2026',
  /** Studio behind the game. */
  author: 'Mirra Games',
  authorUrl: 'https://playgama.com/developer/97',
  themeColor: '#140f1d',
  /** Descriptive tags reused by cards and structured data. */
  genres: ['Action', 'Simulation', 'Stealth', 'Cats'],
  /** Age rating shown on the official listing. */
  ageRating: 'E10+',
} as const;

/**
 * The game itself. It is served by Playgama — the publisher's distribution
 * platform — and not by this repository: the build is a ~43 MB Unity WebGL
 * bundle that streams straight from their CDN into the player iframe.
 *
 * Note the missing query string. Adding `?platform_id=…&game_id=…` makes the
 * in-page Playgama bridge wait for its parent player to hand it a session, so
 * the build parks on its logo forever when embedded anywhere else. The bare
 * URL boots straight into the tutorial.
 *
 * The deployment hash in the path changes whenever the studio ships an update;
 * if the player ever stops loading, copy the fresh URL from GAME_OFFICIAL_URL,
 * or point GAME_EMBED_URL at GAME_OFFICIAL_URL as a last resort.
 */
export const GAME_EMBED_URL =
  'https://cat-and-granny.games.playgama.net/cmu1e23mt00fmlh0h4qxqq7yr/__patch__/cmu3qthvu0jsyka0h6bakogjg/index.html';

/** Official listing, also used as the fallback player and the credit link. */
export const GAME_OFFICIAL_URL = 'https://playgama.com/game/cat-and-granny';

/** Studio page for the developer. */
export const GAME_DEVELOPER_URL = 'https://playgama.com/developer/97';

/**
 * Prefix a site-relative path with the deployment base path and normalise the
 * trailing slash so internal links never trigger a GitHub Pages redirect.
 *
 *   href('/about')  -> '/about/'      (root deployment)
 *   href('/about')  -> '/repo/about/' (project-page deployment)
 *   href('/play?x') -> '/play/?x'
 */
export function href(path = '/'): string {
  const [pathname, ...rest] = path.split(/(?=[?#])/);
  let p = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (!p.endsWith('/') && !/\.[a-z0-9]+$/i.test(p)) p = `${p}/`;
  const withBase = BASE_PATH === '/' ? p : p === '/' ? `${BASE_PATH}/` : `${BASE_PATH}${p}`;
  return rest.length ? `${withBase}${rest.join('')}` : withBase;
}

/** Same as `href()` but never appends a trailing slash (files, iframes). */
export function asset(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return BASE_PATH === '/' ? p : `${BASE_PATH}${p}`;
}

/** Absolute URL for canonical tags, Open Graph and structured data. */
export function absolute(path = '/'): string {
  return new URL(href(path), SITE_ORIGIN).toString();
}

/** Absolute URL for a static asset. */
export function absoluteAsset(path: string): string {
  return new URL(asset(path), SITE_ORIGIN).toString();
}

/** The game entry point used by the player iframe. */
export const GAME_SRC = GAME_EMBED_URL;

/**
 * UI strings for the site chrome (navigation, footer, game player).
 * Long-form page copy lives in src/data/pages.ts.
 *
 * The site ships in English only; the dictionary is still keyed by language so
 * adding a locale later is a matter of adding one entry to `languages` plus a
 * matching block below.
 */

export const languages = {
  en: 'English',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'nav.home': 'Play',
    'nav.howToPlay': 'How to Play',
    'nav.controls': 'Controls',
    'nav.tips': 'Tips & Tricks',
    'nav.unblocked': 'Unblocked',
    'nav.about': 'About',
    'nav.more': 'More',
    'nav.menu': 'Menu',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',
    'nav.mainNav': 'Main navigation',
    'nav.mobileNav': 'Mobile navigation',

    'cta.playNow': 'Play Now',
    'cta.playFree': 'Play Cat and Granny',
    'cta.browseGuides': 'Browse the guides',

    'game.frameTitle': 'Cat and Granny game',
    'game.posterAlt':
      'An orange cartoon cat knocking a vase off a shelf while Granny watches from the doorway',
    'game.play': 'Play Cat and Granny',
    'game.playHint':
      'The game streams in the page. Keyboard: W A S D to move, mouse to look, Space to jump.',
    'game.loading': 'Loading Cat and Granny…',
    'game.loadingNote':
      'First load pulls a ~43 MB 3D build from the studio’s CDN, so give it a few seconds on slow connections.',
    'game.fullscreen': 'Fullscreen',
    'game.exitFullscreen': 'Exit fullscreen',
    'game.failed': 'The game could not start. Reload the page, or open it on the official listing.',
    'game.openTab': 'Open in a new tab',
    'game.reload': 'Reload game',
    'game.hostedNote':
      'The game is streamed from the publisher’s player at Playgama. Cat and Granny is made by',

    'common.home': 'Home',
    'common.updated': 'Last updated',
    'common.readGuide': 'Read the full guide',
    'common.relatedPages': 'Keep reading',
    'common.onThisPage': 'On this page',
    'common.backToGame': 'Back to the game',
    'common.faqTitle': 'Frequently asked questions',

    'footer.about': 'About Cat and Granny Online',
    'footer.aboutText':
      'A free browser home for Cat and Granny, the first-person cat game about wrecking Granny’s house and framing the new black cat. No download, no account, no install.',
    'footer.game': 'Game',
    'footer.guides': 'Guides',
    'footer.site': 'Site',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.credit':
      'Cat and Granny is developed by Mirra Games and distributed through Playgama. This site is an unofficial fan page and is not affiliated with or endorsed by the studio.',
    'footer.official': 'Official listing:',
    'footer.builtWith': 'Built with Astro',

    'notFound.title': 'Page not found',
    'notFound.text':
      'That page does not exist — but Granny’s house is still one click away. Head back to the game.',
    'notFound.cta': 'Play Cat and Granny',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];

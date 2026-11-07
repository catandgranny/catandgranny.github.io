# Cat and Granny Online

<https://catandgranny.github.io/> — a static Astro site that plays Cat and Granny
in the browser, plus written guides to the controls, the blame mechanic and the
routes that keep a run alive.

## The game

Cat and Granny is developed by [Mirra Games](https://playgama.com/developer/97)
and distributed through [Playgama](https://playgama.com/game/cat-and-granny).

This repository **does not host the game build**. The player embeds the
publisher's own WebGL build in an iframe (see `GAME_EMBED_URL` in
`src/config/site.ts`), which keeps the site small and means studio patches are
picked up automatically. The trade-off: the player needs a live connection to the
publisher's CDN.

If the embed ever stops loading, the deployment hash inside `GAME_EMBED_URL`
has changed. Copy the current URL from the official listing page and update that
one constant.

This site is unofficial and not affiliated with or endorsed by the studio.

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve the built output
```

Node 22.23+ is required (`engines` in `package.json`).

## Structure

```
src/
  config/site.ts        brand, origin, game embed URLs, href() helpers
  i18n/                 UI strings + lang helpers (English only today)
  data/pages.ts         all long-form copy: home + guide/privacy/terms pages
  components/game/      click-to-load player
  components/layout/    header, footer
  components/ui/        steps, tables, feature grid, FAQ accordion
  layouts/              BaseLayout (head/SEO), PageLayout (article frame)
  pages/                index + [slug] dynamic route + 404
public/                 poster, OG image, icons, robots.txt, llms.txt, .nojekyll
```

Pages are generated from `src/data/pages.ts`: add an entry there and it appears
at `/<slug>/`, in the sitemap and in the nav if you also add it to `Header` and
`PAGE_SLUGS`.

## Deployment

GitHub Pages serves this repository from the `main` branch root with Jekyll
disabled by `public/.nojekyll` (which becomes `dist/.nojekyll`).

- `main` holds the **built site** (what GitHub Pages serves).
- `source` holds the Astro source.

To publish a change:

```bash
git checkout source
# edit, then
npm run build
# copy dist/ over the main branch and push
```

## Licence

Site code: AGPL-3.0 (see `LICENSE`). Game name, artwork and build belong to
Mirra Games; the poster illustration on this site is original.

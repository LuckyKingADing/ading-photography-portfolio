# ADING — Photography

An English-led, bilingual personal photography archive built with Astro and deployed through GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:4321/ading-photography-portfolio/`.

Before pushing changes:

```bash
npm run check
npm run build
```

## Add your photographs

The repository contains web-ready copies only. Add future work one series at a time:

1. Export public, edited photographs as AVIF or WebP. Use an approximately 2400px maximum long edge; do not add RAW or original full-resolution files.
2. Remove private EXIF metadata, especially GPS coordinates.
3. Create `public/images/series/<series-slug>/` and copy the web exports into it.
4. Edit `src/data/series.ts`. Update the title, date, location, summary, description, image path, alternative text, width, and height.
5. Add `featuredOrder` to any photograph that should appear in the mixed homepage selection. Lower numbers appear first.
6. Run `npm run check && npm run build`, then inspect the home and series pages on desktop and mobile.

Image order in the `images` array is the gallery order. Keep the edit deliberate; the site never randomizes a series.

## GitHub Pages

The repository is configured for:

`https://luckykingading.github.io/ading-photography-portfolio/`

The workflow in `.github/workflows/deploy.yml` builds and deploys every push to `main`. In repository settings, choose **Settings → Pages → Source → GitHub Actions**.

For a future custom domain, update `site` and remove `base` in `astro.config.mjs`, then add the domain in GitHub Pages settings.

## Project map

- `src/data/series.ts` — all series text and image metadata
- `src/data/site.ts` — site identity and metadata
- `src/pages/` — home, 404, and generated series routes
- `src/styles/global.css` — minimal black-and-white visual system
- `public/images/series/` — publishable web images only
- `docs/superpowers/specs/` — approved design specification

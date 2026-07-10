# ADING Photography Portfolio — Design Specification

## Objective

Build a public, English-first personal photography portfolio for `ADING — Photography`. The first release showcases portrait work as separate photographic series and can later grow to travel or street photography without redesigning the site.

The site has one job: let a visitor understand ADING's visual point of view and enter a complete photographic series with minimal friction.

## Public-content boundary

- The GitHub repository and GitHub Pages site are public.
- Only edited, web-sized photographs approved for public viewing belong in the repository.
- Original RAW files and full-resolution exports never belong in the repository.
- The initial build uses clearly marked abstract placeholder artwork because the final photographs will be added later.

## Release scope

The first release contains three page types:

1. **Home** — brand statement, featured series, and selected-series list.
2. **Series** — one static route per photographic series with metadata, introduction, and an ordered gallery.
3. **About** — short biography, working approach, email, and Instagram links.

It also includes a branded 404 page. Authentication, a CMS, an admin panel, analytics, a contact form, comments, downloads, and image sales are outside this release.

## Architecture

- **Framework:** Astro, statically generated.
- **Hosting:** GitHub Pages at `/ading-photography-portfolio/`.
- **Deployment:** GitHub Actions builds and deploys on pushes to `main`; manual dispatch remains available.
- **Content source:** a typed `src/data/series.ts` file. Each series defines its slug, title, year, location, summary, cover images, and ordered gallery images.
- **Assets:** series images live under `public/images/series/<slug>/`. Paths in the data file are relative to the public image root and are made base-path safe by one URL helper.
- **Rendering:** pages contain no runtime API calls and remain usable without client-side JavaScript. JavaScript only enhances the series gallery with a native-dialog lightbox.

This deliberately avoids a CMS: the number of series is small, and a typed data file is simpler to understand and maintain.

## Visual direction: Modern Atelier

The site resembles a contemporary photographic studio or exhibition wall rather than a template portfolio.

### Color tokens

- `Graphite` `#14181C` — primary text and dark surfaces
- `Cold Paper` `#E5E8EA` — homepage canvas
- `Aluminium` `#BEC4C8` — rules and secondary surfaces
- `Gallery White` `#F6F7F7` — reading and gallery surfaces
- `Steel Text` `#4A5055` — secondary text

There is no bright UI accent. The photographs are the only source of strong color.

### Typography

- **Antonio:** condensed display titles and series names
- **Manrope:** body copy and navigation
- **IBM Plex Mono:** dates, locations, frame numbers, and utility labels

Fonts are bundled with the site to avoid third-party font requests.

### Layout

Desktop uses an asymmetric editorial grid. Mobile collapses to one column without preserving decorative overlaps that would harm readability.

```text
+--------------------------------------------------------------+
| ADING / PHOTOGRAPHY                         WORK       ABOUT  |
|                                                              |
| PORTRAITS                                                    |
|      IN PAUSE                    +---------------------+      |
|           +-------------+        |                     |      |
|           | second frame|        |    featured frame   |      |
|           +-------------+        |                     |      |
|                                  +---------------------+      |
| CURRENT SERIES / 01                                        |
+--------------------------------------------------------------+
| SELECTED SERIES                                              |
| Series text                         intentional cover frame   |
| intentional cover frame                         Series text   |
+--------------------------------------------------------------+
```

### Signature element

The hero title crosses the featured photograph's boundary once. It creates a recognisable cover composition while the remainder of the site stays restrained. Hover and focus states reveal a subtle crop-line motion; the site does not use parallax or scroll-jacking.

## Page behavior

### Header

- Persistent at the top of each page, not sticky.
- Brand link returns home.
- `Work` points to the selected-series section.
- `About` opens the biography page.
- Current-page state is communicated through text weight and an accessible `aria-current` attribute.

### Home

- The first configured series becomes the featured series.
- The hero uses two frames from that series and exposes one clear `View series` action.
- All configured series appear below in alternating editorial rows.
- The list is curated, not masonry: each series is a story rather than an interchangeable image tile.

### Series page

- Opens with title, location, year, summary, and cover image.
- Gallery order comes directly from the series data and is never randomized.
- Mixed portrait and landscape ratios are preserved.
- Each image is a semantic button that opens a native `<dialog>` lightbox when JavaScript is available.
- The lightbox supports Escape, explicit close, previous/next buttons, keyboard arrow keys, image count, and descriptive alternative text.
- Without JavaScript, the complete inline gallery remains visible.

### About

- Introduces ADING as a photographer interested in portraiture, place, and quiet observation.
- Contains editable email and Instagram links in one clearly marked location.
- Avoids invented awards, clients, testimonials, and biographical claims.

## Empty and error states

- Placeholder art is visibly labelled so it cannot be mistaken for published photography.
- Invalid series routes produce the static 404 page.
- Broken JavaScript does not hide content or navigation.
- The image replacement guide requires alt text and dimensions for every image.

## Accessibility and interaction

- Semantic heading order and a skip link.
- Visible keyboard focus on every interactive element.
- Minimum 44px interaction target for navigation and lightbox controls.
- Body text contrast meets WCAG AA on all site surfaces.
- Meaningful image alt text is required in series data; decorative images use empty alt text only when duplicated nearby.
- Motion uses opacity and transform, lasts 150–300ms, and is disabled by `prefers-reduced-motion`.
- Lightbox focus stays inside the native dialog and returns to the triggering image on close.

## Performance

- Above-the-fold cover art loads eagerly; gallery images load lazily.
- Every image declares width and height to reserve layout space.
- The replacement guide recommends AVIF or WebP exports, an approximately 2400px maximum long edge, and removal of sensitive EXIF/GPS metadata.
- No third-party scripts, trackers, video backgrounds, or animation libraries.

## Verification

- Production build succeeds with the repository base path.
- All internal links work from the built output.
- Pages are checked at 375px, 768px, 1024px, and 1440px without horizontal overflow.
- Keyboard navigation reaches all links and gallery controls in logical order.
- Lightbox closes by button and Escape and moves by buttons and arrow keys.
- Reduced-motion mode removes nonessential transitions.
- GitHub Pages workflow syntax and deployment output are checked after the first push.


# Full-Viewport Home and Work Navigation

## Goal

Give the homepage introduction a complete first screen, move the selected work heading below the initial viewport, and make the global navigation terminology consistent.

## Approved Direction

- Use `WORK` as the single-word label for the selected portfolio section.
- Rename `Selected Photographs` to `Work`.
- Keep the collection count `05 selected` beside the Work heading.
- Change the global navigation to `Home / Work / Archive / About`.
- Preserve `ADING` as an additional homepage link.

## First-Screen Layout

The site header remains in normal document flow. The homepage introduction fills the remaining visible viewport height using a minimum height calculated from the header height. Its content is vertically centered within that area.

As a result:

- The initial viewport contains only the header and homepage introduction.
- The Work section border, heading, count, and photographs begin below the fold.
- Scrolling remains ordinary browser scrolling; no scroll snapping, forced animation, or JavaScript is added.
- Short viewports can grow naturally if the introduction content requires more room.

Desktop uses a 5.5rem header offset. The existing mobile breakpoint uses its 4.75rem header offset.

## Navigation

The header links use the following order and targets:

1. `Home` → homepage top
2. `Work` → homepage `#work`
3. `Archive` → homepage `#archive`
4. `About` → homepage `#about`

The same links and targets appear on the homepage and series pages.

At widths up to 720px, the navigation font size and gap become more compact so the four links do not overlap the `ADING` brand. Keyboard focus and hover states remain unchanged.

## Scope Boundaries

- Do not change the headline, Chinese introduction, gallery composition, archive rows, series pages, fonts, colors, or image loading behavior.
- Do not add a menu button or client-side JavaScript.
- Do not add scroll indicators or decorative animation.

## Verification

- At desktop and mobile viewport sizes, confirm the Work section starts at or below one viewport height from the page top.
- Confirm the initial viewport does not show the Work heading or `05 selected`.
- Confirm header order is `Home`, `Work`, `Archive`, `About` on homepage and series pages.
- At 320px width, confirm the brand and navigation do not overlap and the page has no navigation-caused horizontal overflow.
- Confirm all four links resolve to the intended homepage targets.
- Run Astro type checking, the production build, and a dependency audit.

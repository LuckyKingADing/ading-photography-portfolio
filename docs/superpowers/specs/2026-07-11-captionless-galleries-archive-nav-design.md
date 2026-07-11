# Captionless Galleries and Archive Navigation

## Goal

Let the photographs stand on their own and make the Archive directly reachable from the global navigation.

## Approved Scope

- Remove every per-photo caption from the homepage Selected Photographs collage.
- Remove every per-photo caption from each series gallery.
- Keep collection-level counts such as `05 selected` and `07 photos`.
- Add `Archive` to the global header between `Work` and `About`.
- Make the Archive link point to the homepage `#archive` section from every page.

## Chosen Approach

Delete the caption markup instead of hiding it with CSS. This leaves the image markup, links, alt text, original aspect ratios, and responsive grid behavior unchanged while removing obsolete presentation code.

Alternative approaches were rejected:

- CSS-only hiding would leave unused content and styles in the document.
- Hover captions would conflict with the requested image-only presentation and would not translate cleanly to touch devices.

## Interaction and Accessibility

- Homepage selected photographs remain links to their series pages.
- Image `alt` text and link `aria-label` values remain intact.
- The new Archive link uses the existing homepage anchor and retains the header's keyboard focus and hover behavior.
- No new JavaScript or animation is introduced.

## Verification

- Confirm no `figcaption` remains in homepage or series gallery output.
- Confirm header order is `Work`, `Archive`, `About`.
- Confirm the Archive link resolves correctly from the homepage and a series page.
- Run Astro type checking and the production build.
- Check desktop and mobile layouts for overflow and unchanged no-crop image ratios.

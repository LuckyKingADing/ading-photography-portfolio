# Sticky Global Navigation

## Goal

Keep the `ADING / Home / Work / Archive / About` header available while visitors browse long homepage and series galleries.

## Approved Direction

Use CSS `position: sticky` with an opaque black background. The header stays in normal document flow at the top of the page, then remains attached to the top edge while scrolling.

This is preferred over `position: fixed` because it preserves the existing full-viewport homepage calculation without adding a layout spacer. A translucent or blurred treatment is excluded to keep photographs and typography visually quiet.

## Header Behavior

- Apply `position: sticky`, `top: 0`, and a foreground stacking level to the existing global header.
- Use the existing solid black page background so photographs cannot reduce navigation legibility as they scroll beneath it.
- Keep the current header height, width, typography, navigation order, links, hover states, and mobile spacing.
- Apply the behavior on the homepage, series pages, and the not-found page through the shared header component.

## Anchor and Accessibility Behavior

- Increase the homepage section scroll offset to account for the sticky header.
- Desktop anchors reserve the 5.5rem header plus 2rem of breathing room.
- Mobile anchors reserve the 4.75rem header plus 1rem of breathing room.
- Raise the skip link above the sticky header so it remains visible when keyboard-focused.
- Do not add JavaScript, scroll listeners, animation, blur, or transparency.

## Scope Boundaries

- Do not change the full-viewport introduction height.
- Do not change gallery layouts, images, Archive content, About content, fonts, colors, or navigation wording.
- Do not add active-section highlighting or hide-on-scroll behavior.

## Verification

- Confirm the header remains at viewport top after scrolling on the homepage and series page.
- Confirm its computed background is opaque black and it sits above photographs.
- Confirm Work, Archive, and About anchor targets appear below the sticky header.
- Confirm the skip link appears above the header when focused.
- Confirm desktop and mobile header dimensions remain unchanged with no horizontal overflow.
- Run Astro type checking, the production build, and a dependency audit.

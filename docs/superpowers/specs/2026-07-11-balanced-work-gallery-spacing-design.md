# Balanced Work Gallery Spacing

## Goal

Make the homepage Work collage use the available desktop space more effectively while giving each photograph slightly more breathing room.

## Approved Changes

- Remove the `05 selected` collection count from the Work section heading.
- Keep the `Work` heading and its divider.
- Increase the desktop and tablet collage maximum width from 980px to 1120px.
- Increase the desktop and tablet internal gap from 16–20px to approximately 24–28px.
- Keep the existing mobile two-column layout and 12px gap at widths up to 720px.

## Layout Behavior

The collage remains a two-part composition: one lead photograph on the left and a two-by-two grid on the right. All five images keep their original aspect ratios, order, links, alt text, and loading behavior.

The wider outer frame reduces unused side space. The larger inner gap prevents the photographs from appearing crowded. No image is cropped, staggered, hidden, or moved outside the existing composition.

## Scope Boundaries

- Do not change the full-viewport homepage introduction.
- Do not change the series gallery, Archive, About, navigation, fonts, colors, or image assets.
- Do not add captions, animation, or JavaScript.

## Verification

- Confirm the Work heading has no count beside it.
- Confirm the desktop collage is 1120px wide when sufficient viewport space exists.
- Confirm desktop gaps resolve to approximately 28px and the composition remains aligned.
- Confirm the mobile collage remains two columns with a 12px gap.
- Confirm all images retain their natural aspect ratios and the page has no horizontal overflow.
- Run Astro type checking, the production build, and a dependency audit.

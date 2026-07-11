# Learnings

Corrections, insights, and knowledge gaps captured during development.

**Categories**: correction | insight | knowledge_gap | best_practice

---

## [LRN-20260711-001] best_practice

**Logged**: 2026-07-11T22:31:05+02:00
**Priority**: low
**Status**: resolved
**Area**: frontend

### Summary

Do not expect `getComputedStyle(...).getPropertyValue()` to resolve a CSS custom property containing `clamp()` into pixels before parsing it with `Number.parseFloat`.

### Details

The Masonry layout read `--masonry-offset: clamp(...)` and passed the returned token string to `Number.parseFloat`. Custom properties preserve their token stream, so the returned value began with `clamp(` and parsed as `NaN`; the opening offsets silently fell back to zero even though normal CSS declarations using the variable would have resolved correctly.

### Suggested Action

When JavaScript must consume a custom property numerically, store an explicitly parseable computed unit such as `64px`, provide breakpoint-specific values in CSS, or resolve the value through a real CSS property before reading it.

### Metadata

- Source: error
- Related Files: src/components/BaseLayout.astro, src/styles/global.css
- Tags: css-custom-properties, clamp, javascript, masonry

### Resolution

- **Resolved**: 2026-07-11T22:31:05+02:00
- **Notes**: Replaced the `clamp()` tokens with breakpoint-specific pixel offsets and verified the intended desktop stagger plus zero mobile offset in the browser.

---

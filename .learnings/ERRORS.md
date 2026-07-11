# Errors

Command failures and integration errors.

---

## [ERR-20260711-004] in_app_browser_viewport_reset

**Logged**: 2026-07-11T10:08:00+02:00
**Priority**: low
**Status**: resolved
**Area**: tests

### Summary

Resetting the temporary responsive viewport invalidated the mobile test tab, and the following attempt to expose a replacement tab timed out.

### Error

```text
Tab 11 is not part of browser session
Timed out waiting for the Browser webview to attach
```

### Context

- Desktop and 360px mobile visual checks had already completed successfully.
- Full-page and mobile screenshots were saved before resetting the viewport.
- The deployed page and all image requests remained healthy.

### Suggested Fix

After resetting a viewport override, re-list browser tabs before reusing or closing any saved tab handle. Treat a visibility attach timeout as a presentation-layer issue when independent live-page checks have already passed.

### Metadata

- Reproducible: unknown
- Related Files: src/styles/global.css
- See Also: ERR-20260710-002, ERR-20260710-003

### Resolution

- **Resolved**: 2026-07-11T10:08:00+02:00
- **Notes**: Kept the completed browser evidence and live HTTP checks as the delivery proof; no application defect was present.

---

## [ERR-20260711-003] zsh_path_loop_variable

**Logged**: 2026-07-11T10:03:36+02:00
**Priority**: low
**Status**: resolved
**Area**: tests

### Summary

Using `path` as a zsh loop variable overwrote the shell's tied `PATH` array and made subsequent commands unavailable.

### Error

```text
zsh: command not found: curl
zsh: command not found: git
```

### Context

- A live-site smoke-test loop used `for path in ...`.
- In zsh, lowercase `path` is a special array tied to the `PATH` environment variable.
- The deployed site itself was unaffected.

### Suggested Fix

Use a neutral loop variable such as `rel` or `url_path` in zsh scripts. Absolute command paths are also useful while recovering from a clobbered `PATH`.

### Metadata

- Reproducible: yes
- Related Files: .learnings/ERRORS.md

### Resolution

- **Resolved**: 2026-07-11T10:03:36+02:00
- **Notes**: Re-ran the smoke test with `rel`; the homepage, series page, and all seven image URLs returned HTTP 200.

---

## [ERR-20260711-002] macos_date_iso_flag

**Logged**: 2026-07-11T10:00:59+02:00
**Priority**: low
**Status**: resolved
**Area**: tests

### Summary

GNU-style `date --iso-8601=seconds` is unsupported by the macOS BSD `date` command.

### Error

```text
date: illegal option -- -
```

### Context

- The timestamp was needed while recording a resolved project learning.
- This workspace is running on macOS.

### Suggested Fix

Use the portable macOS form `date -Iseconds`.

### Metadata

- Reproducible: yes
- Related Files: .learnings/ERRORS.md

### Resolution

- **Resolved**: 2026-07-11T10:00:59+02:00
- **Notes**: Re-ran the command with `date -Iseconds` and obtained the expected timestamp.

---

## [ERR-20260711-001] photo_metadata_probe

**Logged**: 2026-07-11T09:58:00+02:00
**Priority**: low
**Status**: resolved
**Area**: tests

### Summary

The first photo metadata probe produced no useful output because the source-directory environment variable was not passed to the script.

### Error

```text
The probe completed without listing the expected image metadata.
ImageMagick also warned that `%[profiles]` was an unknown image property for these WebP files.
```

### Context

- The probe was intended to inspect orientation, camera details, capture dates, and GPS tags before publishing derived web copies.
- The source photographs were not modified.

### Suggested Fix

Pass required paths explicitly. Use ImageMagick for dimensions and `webpmux -info` for deterministic WebP feature and metadata checks.

### Metadata

- Reproducible: yes
- Related Files: public/images/series/shenzhen-melania-town/

### Resolution

- **Resolved**: 2026-07-11T09:59:00+02:00
- **Notes**: Rechecked the generated files with ImageMagick and `webpmux`; all seven are 1600×2400 and report `No features present`, confirming the published copies contain no EXIF, XMP, ICC, or animation chunks.

---

## [ERR-20260710-003] in_app_browser_multi_tab_timeout

**Logged**: 2026-07-10T23:37:39+02:00
**Priority**: low
**Status**: resolved
**Area**: tests

### Summary

A single browser automation call timed out while creating and closing several responsive-test tabs sequentially.

### Error

```text
Timed out waiting for the Browser webview to attach for this browser-use page.
```

### Context

- The call attempted 768px, 1024px, and landscape viewport checks in one long browser operation.
- The browser session remained healthy but closed the temporary tabs.
- Repeating each viewport as its own create-check-close operation succeeded.

### Suggested Fix

Use one browser tool call per fresh responsive-test tab instead of batching several tab lifecycles into one call.

### Metadata

- Reproducible: unknown
- Related Files: src/styles/global.css
- See Also: ERR-20260710-002

### Resolution

- **Resolved**: 2026-07-10T23:38:30+02:00
- **Notes**: All target breakpoints and mobile landscape passed when checked individually.

---

## [ERR-20260710-002] in_app_browser_validation

**Logged**: 2026-07-10T22:56:00+02:00
**Priority**: low
**Status**: resolved
**Area**: tests

### Summary

Two in-app browser validation operations were unsupported or unstable during responsive testing.

### Error

```text
The networkidle load state was unsupported, and one screenshot timed out after changing the viewport on an existing tab.
```

### Context

- The page itself remained healthy and emitted no console errors.
- A fresh tab inherited the requested viewport correctly.
- The supported `load` state plus fresh per-breakpoint tabs produced stable results.

### Suggested Fix

Use `load` for this browser runtime and open a fresh tab after applying a viewport override.

### Metadata

- Reproducible: unknown
- Related Files: src/styles/global.css

### Resolution

- **Resolved**: 2026-07-10T22:58:00+02:00
- **Notes**: Completed visual and overflow checks at all four target widths using fresh tabs; no application defect remained.

---

## [ERR-20260710-001] npm_install_and_check

**Logged**: 2026-07-10T22:50:00+02:00
**Priority**: medium
**Status**: resolved
**Area**: config

### Summary
The first combined install-and-check tool call returned before npm had finished linking local executables.

### Error

```text
sh: astro: command not found
```

### Context

- The combined `npm install && npm run check && npm run build` call produced no captured output.
- A follow-up check ran while the dependency installation was still finishing.
- `node_modules/.bin/astro` and `package-lock.json` appeared immediately afterward.

### Suggested Fix

Run installation as a separate command, verify `node_modules/.bin/astro`, and only then run checks and builds.

### Metadata

- Reproducible: unknown
- Related Files: package.json, package-lock.json

### Resolution

- **Resolved**: 2026-07-10T22:50:19+02:00
- **Notes**: Verified the Astro executable after installation, then reran type checking and production build successfully with zero diagnostics.

---

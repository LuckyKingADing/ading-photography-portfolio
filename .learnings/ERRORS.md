# Errors

Command failures and integration errors.

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

# UI Review Checklist

Use this checklist for every non-trivial UI change.

## System Integrity

- [ ] No raw colors are introduced outside the token system
- [ ] No ad hoc spacing, radius, or shadow values are introduced
- [ ] No screen-level theme hacks bypass the theme layer
- [ ] Shared primitives are reused where appropriate
- [ ] Shared patterns are reused where appropriate
- [ ] New variants are justified and documented

## Theme Safety

- [ ] The change works in light mode
- [ ] The change works in dark mode
- [ ] Interactive states remain visible in both themes
- [ ] Contrast remains acceptable in both themes
- [ ] No hardcoded light-only assumptions remain

## UX Quality

- [ ] The main user action is obvious
- [ ] The layout is easy to scan
- [ ] There is no unnecessary visual noise
- [ ] Labels and feedback are clear
- [ ] Progressive disclosure is used where it reduces complexity

## Flow Completeness

- [ ] Loading state exists
- [ ] Empty state exists where relevant
- [ ] Error state exists where relevant
- [ ] Success or completion feedback exists where relevant
- [ ] Validation states are clear

## Accessibility Baseline

- [ ] Semantic structure is present
- [ ] Inputs are labeled
- [ ] Focus is visible
- [ ] Keyboard usage is not blocked
- [ ] Errors are understandable

## Consolidation

- [ ] Any repeated local UI solution has been considered for promotion into the shared system
- [ ] Docs are updated if a primitive, pattern, or token changed

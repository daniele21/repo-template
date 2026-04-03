# Design System Rules

## Defaults

- use semantic tokens for color, typography, spacing, elevation, and focus behavior
- use shared components before creating one-off variants
- preserve light and dark theme parity through the theme layer, not per-screen overrides
- support loading, empty, error, and success states
- maintain semantic structure and accessible labels
- centralize starter tokens and primitives in `packages/ui`

## Avoid

- hardcoded style values with no design-system reason
- raw colors or spacing in application components
- screen-level theme hacks that bypass shared tokens
- inconsistent spacing and interaction patterns
- visual polish that obscures information density or clarity

## Starter Package

The template includes a minimal `packages/ui` package with:

- primitive tokens
- semantic light and dark themes
- a primitive button helper that resolves theme-safe semantic tokens
- a naming pattern for future shared components and patterns

## Reference Docs

Use the UX/UI guidance in:

- `docs/03-ux-ui/ux-principles.md`
- `docs/03-ux-ui/design-tokens.md`
- `docs/03-ux-ui/theming-light-dark.md`
- `docs/03-ux-ui/component-primitives.md`
- `docs/03-ux-ui/ui-patterns.md`
- `docs/03-ux-ui/ui-review-checklist.md`

## CI Gate

Run `pnpm run ui:check-system` to catch design-system drift in scanned UI layers.

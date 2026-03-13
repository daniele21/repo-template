# Design System Rules

## Defaults

- use shared tokens for color, typography, spacing, and motion
- use shared components before creating one-off variants
- support loading, empty, error, and success states
- maintain semantic structure and accessible labels
- centralize starter tokens and primitives in `packages/ui`

## Avoid

- hardcoded style values with no design-system reason
- inconsistent spacing and interaction patterns
- visual polish that obscures information density or clarity

## Starter Package

The template includes a minimal `packages/ui` package with:

- design tokens
- primitive button helper
- naming pattern for future shared components

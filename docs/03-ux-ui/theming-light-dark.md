# Theming: Light And Dark

The repository supports both light and dark mode through semantic tokens.

## Goal

Keep components theme-agnostic.

Components should ask for:

- background
- text
- border
- focus
- action
- status

They should not ask for:

- hardcoded hex colors
- dark-specific overrides
- light-specific exceptions

## Rules

- All semantic tokens must exist in both themes.
- Theme selection belongs to the theme layer or app shell.
- Components must not branch on theme unless there is a real behavioral difference.
- Visual parity matters more than exact color mirroring.
- Focus visibility and contrast must remain acceptable in both themes.

## Review Triggers

A UI change needs explicit theme review when it:

- introduces a new semantic token
- adds a new surface level
- changes action colors
- adds a new status pattern
- introduces charts, badges, alerts, tables, or overlays
- uses transparency or shadow to communicate hierarchy

## Done Criteria

A theme-aware change is complete only when:

- both themes resolve correctly
- no raw visual values bypass the system
- contrast remains acceptable
- interactive states are visible in both themes

# Design Tokens

This repository uses a layered token model.

## Token Layers

### 1. Primitive tokens

Raw scales such as:

- neutral palette
- brand palette
- spacing scale
- radius scale
- shadow scale
- typography families and sizes

Primitive tokens are implementation ingredients.
Application components should not consume them directly unless they are inside the token system.

### 2. Semantic tokens

Semantic tokens express intent, not raw style.

Examples:

- `bg.canvas`
- `bg.surface`
- `bg.surfaceRaised`
- `text.primary`
- `text.secondary`
- `border.subtle`
- `border.strong`
- `action.primary.bg`
- `action.primary.fg`
- `focus.ring`
- `status.success.bg`

Application components should consume semantic tokens.

### 3. Component tokens

Component tokens map semantic intent into stable component behavior.

Examples:

- `button.primary.bg`
- `button.primary.bgHover`
- `input.borderFocus`
- `card.bg`
- `table.rowHover`

Use component tokens when a primitive or semantic token alone does not capture a stable reusable component rule.

## Rules

- Do not use raw colors directly in app components.
- Do not hardcode spacing, radius, or shadow values outside the token system.
- Do not create local theme variants at screen level.
- Add semantic tokens when a visual meaning is reused.
- Add component tokens when a component behavior is stable and repeated.

## Theme Rule

All semantic tokens must resolve correctly in both:

- light theme
- dark theme

Theme switching must happen in the theme layer, not in the consuming component.

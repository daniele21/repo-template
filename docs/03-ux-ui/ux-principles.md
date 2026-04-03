# UX/UI Principles

This repository treats UX/UI as a system, not as local screen styling.

The goal is to produce interfaces that are:

- modern
- minimal
- intuitive
- modular
- centralized
- theme-safe
- easy to extend without visual drift

## Core Principles

### 1. Clarity over decoration

Every screen must make the current task obvious.

Prefer:

- clear hierarchy
- obvious labels
- predictable actions
- restrained visual emphasis

Avoid:

- decorative complexity
- unnecessary iconography
- competing highlights
- dense control clusters

### 2. One system, not many local styles

All visual decisions must flow through the shared UI system.

Prefer:

- semantic tokens
- shared primitives
- shared layout and interaction patterns

Avoid:

- raw colors
- ad hoc spacing
- screen-specific visual systems
- duplicated component variants

### 3. Simplicity is a product feature

A screen is not complete when everything fits.
A screen is complete when the user can act without hesitation.

Prefer:

- one obvious primary action
- progressive disclosure
- concise copy
- few strong signals

Avoid:

- too many actions at the same visual level
- overloaded forms
- crowded dashboards
- state ambiguity

### 4. Theme parity is mandatory

Dark mode and light mode are first-class themes.
Neither theme is an afterthought.

Rules:

- use semantic tokens, not raw colors
- keep theme logic out of screen-level styling
- every affected token must exist in both themes
- contrast and focus visibility must remain acceptable in both modes

### 5. Reuse before invention

Before adding a new component, variant, layout, or interaction, check whether an existing primitive or pattern can solve the problem.

Promote a local UI solution into the shared system when:

- it is reused
- it should be reused
- it encodes a product-wide interaction rule
- it reduces future duplication

### 6. Complete every flow state

Every meaningful screen or workflow must handle:

- loading
- empty
- error
- success
- validation and feedback

A polished happy path with weak failure handling is incomplete UX.

### 7. Accessibility is baseline quality

Minimum expectations:

- semantic structure
- clear labels
- keyboard reachability
- visible focus
- sufficient contrast
- understandable error messages

Accessibility is not an optional enhancement.

## Interaction Principles

- Use one primary action per section or step whenever possible.
- Use destructive actions sparingly and clearly.
- Use modals only when interruption is justified.
- Prefer inline guidance over hidden complexity.
- Prefer stable placement for repeated actions.
- Prefer readable defaults over high configurability in the first interaction layer.

## Visual Principles

- Prefer calm surfaces over heavy contrast everywhere.
- Use elevation sparingly.
- Use color for meaning, not decoration.
- Keep typography scale restrained and predictable.
- Keep spacing consistent and token-driven.

## Definition of Done For UI

A UI change is not done unless:

- semantic tokens are used
- theme parity is preserved
- shared primitives or patterns are reused where appropriate
- flow states are covered
- accessibility baseline is respected
- docs are updated if the shared system changed

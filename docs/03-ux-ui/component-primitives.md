# Component Primitives

This repository uses a small, stable set of UI primitives.

Primitives are the lowest reusable UI building blocks that application screens are allowed to compose directly.

They must be:

- theme-safe
- token-driven
- accessible by default
- visually restrained
- reusable across product areas

## Primitive Philosophy

A primitive should solve a repeated UI need without encoding business-specific logic.

A primitive is appropriate when:

- the same interaction or visual structure appears in multiple places
- the UI rule should remain consistent across screens
- centralization reduces style drift or accessibility risk

A primitive is not appropriate when:

- it only serves one screen-specific business flow
- it mixes layout, business behavior, and visual styling
- it is just a local shortcut that should stay in a feature module

## Primitive Inventory

### Action Primitives

#### Button

Use for explicit user actions.

Rules:

- keep variant set small
- always preserve clear primary vs secondary hierarchy
- support disabled and loading states
- destructive tone must be explicit, not overloaded into primary

Allowed variants:

- primary
- secondary
- destructive
- ghost only if justified and documented

#### IconButton

Use only for compact repeated actions with strong affordance.

Rules:

- must have accessible label
- do not use as the main CTA
- avoid using icon-only buttons for destructive actions unless context is obvious

### Form Primitives

#### Input

Single-line text input.

Rules:

- label is required unless a stronger accessible pattern exists
- validation and error state must be supported
- placeholder is not a label

#### Textarea

Use for longer text entry.
Same validation and labeling rules as Input.

#### Select

Use when the option set is constrained and stable.

Rules:

- do not use for very small binary choices when radio or switch is clearer
- support empty, disabled, and error states

#### Checkbox

Use for independent multi-selection.

#### RadioGroup

Use for mutually exclusive choices with few options.

#### Switch

Use for immediate on/off state changes, not for deferred form submission choices.

### Structural Primitives

#### Card

Use for grouping related content within a calm surface.

Rules:

- avoid decorative overuse
- do not nest many visual hierarchies inside a single card
- use consistent spacing and elevation

#### Divider

Use to separate sections when spacing alone is insufficient.

#### Stack / Inline / Cluster

Layout primitives for vertical, horizontal, and wrapped composition.

Rules:

- spacing must come from tokens
- do not invent ad hoc screen-level spacing scales

### Feedback Primitives

#### Badge

Use for compact status or categorical labeling.

Rules:

- do not use badges as the main way to communicate critical state
- colors must come from semantic status tokens

#### Alert

Use for important feedback requiring attention.

Variants:

- info
- success
- warning
- danger

Rules:

- must be visually distinct from generic card content
- should be concise and actionable

#### Toast

Use for short-lived confirmation or non-blocking feedback.

Rules:

- not for critical failures
- not as the only place where a user can recover from an error

#### Progress / Skeleton

Use to communicate work in progress.

Rules:

- prefer skeletons for layout-preserving loading
- prefer progress indicator when duration or completion matters

### Navigation And Disclosure Primitives

#### Tabs

Use for stable sibling views within the same context.

Rules:

- do not use tabs for long workflows
- keep tab count manageable

#### Modal

Use when interruption is justified.

Rules:

- do not use for large multi-step flows unless necessary
- closing behavior must be predictable
- avoid modal overuse for routine editing

#### Drawer

Use when the user should preserve page context while editing or inspecting details.

#### Accordion

Use for progressive disclosure of secondary information.

Rules:

- avoid hiding primary actions or critical information in accordions

### Data Display Primitives

#### Table

Use for dense structured data where comparison matters.

Rules:

- support empty state
- support loading state
- keep actions predictable
- do not overload every row with too many controls

#### List

Use for lighter-weight repeated content.

#### KeyValueList

Use for compact detail presentation.

## Primitive Design Rules

- All primitives must consume semantic tokens.
- No primitive should hardcode raw colors, spacing, radius, or shadows.
- All primitives must support dark and light mode through the theme layer.
- All primitives must define interactive states where relevant:
  - default
  - hover
  - focus
  - disabled
  - loading
  - error where applicable

## Primitive Promotion Rule

Promote a local component into a primitive when at least one of these is true:

- it already appears in multiple areas
- it encodes a repeated interaction rule
- it reduces future duplication
- it improves theme consistency or accessibility consistency

## Primitive Review Questions

- Is this really reusable?
- Is the primitive theme-safe?
- Does it encode only UI behavior, not business logic?
- Does it reduce duplication?
- Is its variant set still restrained?

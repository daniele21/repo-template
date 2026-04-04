# UI Patterns

This repository uses shared UI patterns to keep product screens consistent, simple, and easy to extend.

Patterns are composed from primitives.
They encode common screen structures, not isolated visual elements.

## Pattern Philosophy

Prefer a small number of strong patterns over many screen-specific layouts.

A pattern should:

- reduce cognitive load
- make actions predictable
- make information easy to scan
- standardize repeated structures

## Core Patterns

### 1. Page Header

Use for the top of a page or major panel.

Contains:

- title
- short supporting description when needed
- one primary action
- optional secondary actions

Rules:

- only one visually dominant CTA
- keep supporting text concise
- avoid crowding with many equal-weight actions

### 2. Section Block

Use to group a coherent piece of content or interaction.

Contains:

- optional section title
- optional short explanation
- main content area
- optional local actions

Rules:

- use spacing before adding dividers
- avoid excessive nesting of sections

### 3. Filter Bar

Use for list and table views with filtering or search.

Contains:

- search
- a small set of common filters
- optional sort control
- optional bulk actions only when relevant

Rules:

- keep the default filter set minimal
- advanced filters should be progressively disclosed
- avoid turning filtering into a dashboard of controls

### 4. Table View

Use when comparison across entities matters.

Contains:

- page header
- filter bar
- table
- row actions
- empty state
- loading state
- pagination or incremental loading

Rules:

- bulk actions only when meaningful
- primary row action should be predictable
- do not overload every row with many icons
- default to server-side pagination for admin tables, operational lists, and search results unless a stronger pattern is justified

### 5. Detail View

Use for a single entity or record.

Contains:

- page header
- key facts near the top
- section blocks for related details
- contextual actions

Rules:

- keep summary information visible first
- use tabs only when detail sections are truly distinct
- prefer progressive disclosure over long visual density walls

### 6. Settings Layout

Use for configuration-heavy areas.

Contains:

- page header
- grouped settings sections
- clear labels
- help text when needed
- change confirmation or save model

Rules:

- settings must be grouped by user mental model, not backend structure
- dangerous actions must be visually separated
- avoid mixing read-only operational data into editable forms unless it supports the task

### 7. Form Flow

Use for create/edit workflows.

Contains:

- section structure
- clear labels
- optional helper text
- inline validation
- primary submit action
- cancellation path

Rules:

- one clear submit action
- validation should be local and understandable
- do not use placeholders as instructions
- keep optional fields visually secondary

### 8. Wizard / Step Flow

Use only when the process is truly multi-step and benefits from sequencing.

Rules:

- each step must have a single purpose
- avoid step flows when one good form would be simpler
- show progress clearly
- let users understand what remains

### 9. Empty State

Use when a screen has no meaningful data yet.

Must include:

- what is empty
- why it matters
- the next recommended action

Rules:

- keep it actionable
- avoid passive or decorative empty states

### 10. Error State

Use when a task or screen cannot complete correctly.

Must include:

- what failed
- what the user can do next
- whether retry is possible

Rules:

- avoid generic failure language
- make recovery obvious

### 11. Success Feedback

Use after meaningful user actions.

Can be:

- inline confirmation
- toast
- stable success panel when persistence matters

Rules:

- success should not interrupt the next step unnecessarily
- success feedback should confirm outcome, not repeat the entire flow

### 12. Side Panel / Drawer

Use for inspect-and-edit workflows where keeping list context matters.

Rules:

- use when context preservation is valuable
- do not hide core navigation inside drawers
- keep panel scope narrow

## Collection Scaling Policy

Every repeated-item UI must declare one of these strategies:

- bounded
- paginated
- incremental
- virtualized

Do not render a potentially unbounded collection without an explicit strategy.

When generating any repeated-item UI, first decide whether the collection is bounded, paginated, incremental, or virtualized.
Never assume demo-size datasets in the final design.

### Bounded Collection

Use when the collection is naturally small and expected to remain small.

Examples:

- a few status cards
- a short checklist
- a compact settings group

Rules:

- full rendering is allowed when the collection is clearly bounded and normally stays under roughly 10 to 12 items
- do not use bounded rendering for collections that may materially grow with real usage

### Paginated Collection

Use by default for:

- admin tables
- operational lists
- search results
- entity indexes
- back-office views

Default rules:

- use server-side pagination when the data source supports it
- default to pagination when the collection is operational and can exceed roughly 20 to 25 items
- default page size: 25
- page size options: 10, 25, 50
- show total count or estimated count when available
- keep sorting and filtering compatible with pagination
- provide filter reset when the collection is filterable

### Incremental Collection

Use for browsing-oriented experiences where continuity matters more than exact table-style control.

Examples:

- activity feeds
- browsing results
- content streams

Rules:

- provide a clear loading transition
- do not hide the end of the list ambiguously
- prefer load more over infinite scroll when control and orientation matter

### Virtualized Collection

Use when many client-rendered items may exist at once and rendering cost matters.

Examples:

- long selectable lists
- dense client-side data panels
- large local result sets

Rules:

- virtualization is a rendering optimization, not a replacement for filtering, search, or information architecture
- use virtualization when client-side rendering cost or viewport density would otherwise degrade usability

### Required States For Collection Views

Every collection view must define:

- loading
- empty
- no-results
- error

When relevant, also define:

- total count or estimated count
- page controls or load-more controls
- sorting and filtering behavior
- filter reset

### Review Rule

A collection view is incomplete if it works only for demo-size data.

## Pattern Simplicity Rules

- one primary action per page or section where possible
- avoid more than two levels of visual emphasis
- keep dense admin screens organized through hierarchy, not decoration
- reduce choices at first glance
- reveal advanced actions only when they matter

## Pattern Promotion Rule

Promote a local layout into a shared pattern when:

- it appears across multiple screens
- it encodes a repeated interaction model
- it reduces ambiguity or implementation drift

## Pattern Review Questions

- Is the structure already represented by an existing pattern?
- Is the main action obvious?
- Is the screen easy to scan in 5 seconds?
- Are loading, empty, error, and success states defined?
- Does each repeated-item view declare a bounded, paginated, incremental, or virtualized strategy?
- Is progressive disclosure used where it improves simplicity?

---
name: ux-design-system-enforcer
description: Review UI changes for consistency with shared tokens, components, interaction patterns, and baseline accessibility requirements.
---

# UX Design System Enforcer

Use this skill for UI changes, new components, and workflow screens.

## Inputs

- UI diff
- relevant design system docs
- component usage context

## Workflow

1. Check whether shared components and tokens are used.
2. Check loading, empty, error, and success states.
3. Check baseline accessibility and semantics.
4. Flag one-off visual systems or inconsistent interactions.

## Output

- hardcoded style violations
- missing UX states
- accessibility gaps
- consolidation recommendations

## Review Questions

- Does the UI follow documented patterns?
- Is any styling duplicated or hardcoded unnecessarily?
- Can a user understand and operate the flow in non-happy paths?

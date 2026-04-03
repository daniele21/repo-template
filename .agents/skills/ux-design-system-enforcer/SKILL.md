---
name: ux-design-system-enforcer
description: Review UI changes for semantic token usage, theme parity, component reuse, interaction simplicity, accessibility, and consistency with the shared design system.
---

# UX Design System Enforcer

Use this skill for any UI change, new component, new screen, workflow redesign, theming change, or front-end refactor.

## Goal

Keep the UI system centralized, theme-safe, non-duplicated, modular, simple, modern, and easy to operate.

## Inputs

- UI diff
- affected screens or flows
- relevant UX/UI and design-system docs
- component and token usage context
- screenshots or visual references when available

## Workflow

1. Map which primitives, semantic tokens, patterns, and screens are affected.
2. Check whether raw colors, spacing, typography, shadows, border radii, or inline styling bypass the shared system.
3. Check whether existing primitives and shared patterns are reused before introducing new ones.
4. Check dark/light parity:
   - all affected semantic tokens exist in both themes
   - contrast and state visibility remain acceptable
   - no screen-specific theme hacks replace the theme system
5. Check UX simplicity:
   - clear information hierarchy
   - primary action is obvious
   - low visual noise
   - no unnecessary actions, variants, or layout density
6. Check flow completeness:
   - loading
   - empty
   - error
   - success
   - validation and feedback states
7. Check baseline accessibility and semantics.
8. Recommend consolidation when a local UI solution should become a shared primitive or shared pattern.

## Output

- design-system violations
- raw-style bypasses
- theme parity gaps
- duplicated or local-only UI patterns
- missing UX states
- accessibility gaps
- simplification recommendations
- shared primitive or pattern extraction candidates
- final review status:
  - approve
  - approve with follow-up
  - block pending consolidation

## Hard Rules

- Prefer semantic tokens over raw visual values.
- Prefer primitives and shared patterns over local one-off components.
- Prefer simple layouts over decorative complexity.
- Prefer explicit action hierarchy over action overload.
- Prefer theme-safe composition over conditional screen-level styling.
- Do not accept dark mode support that depends on scattered component-level overrides.
- Do not accept new variants or local visual systems without a reuse case or documented reason.

## Review Questions

- Is the UI using semantic tokens rather than raw visual values?
- Is dark/light mode handled by the theme system instead of local component hacks?
- Is any component or layout pattern duplicated unnecessarily?
- Does the screen remain minimal, intuitive, and easy to scan?
- Is the main user action obvious?
- Are non-happy-path states handled clearly?
- Should any local UI decision be promoted into a shared primitive or shared pattern?

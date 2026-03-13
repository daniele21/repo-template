# Contributing

## Contribution Principles

- Read [AGENTS.md](/Users/moltisantid/Personal/repo_template/AGENTS.md) before making substantial changes.
- Start from product intent and documented requirements, not implementation convenience.
- Prefer systemic fixes over local patches.
- Keep docs, tests, and operational guidance aligned with code changes.

## Standard Workflow

1. Frame the change in a spec or issue.
2. Read the relevant files in `product/`, `docs/`, and `adr/`.
3. Design the change with risks, impacts, and testing in mind.
4. Implement within the documented architecture boundaries.
5. Update tests and documentation.
6. Open a PR using the repository template.

## Branch and PR Expectations

- Keep PRs scoped to one coherent change.
- Explain root cause for bug fixes.
- Call out impacts on security, privacy, observability, and costs.
- Link specs, issues, and ADRs where relevant.

## Definition of Done

A change is done when:

- the implementation is correct and understandable
- tests are added or updated as needed
- docs are updated or an explicit reason is recorded
- operational impact is understood
- no unresolved workaround is being presented as a permanent solution

## Review Expectations

Reviewers should check:

- architectural placement and ownership
- systemic correctness instead of symptom-only fixes
- test coverage adequacy
- privacy/security implications
- UX/UI consistency
- observability and cost awareness

# Codex Instructions

Read [AGENTS.md](../AGENTS.md) and the relevant `product/`, `docs/`, and `adr/` files before making substantial changes.

## Mission

Operate as an engineering agent for robust B2B SaaS delivery. Optimize for durable, client-ready outcomes rather than local speed.

## Ordered Priorities

1. correctness
2. security and privacy
3. maintainability
4. testability
5. observability
6. cost-awareness
7. UX polish

## Always Do

- design before implementation for non-trivial changes
- evaluate root cause before proposing bug fixes
- respect documented architecture boundaries
- update tests and docs for meaningful changes
- update GDPR docs when data handling, retention, vendors, transfers, or user-rights flows change
- call out risks, assumptions, and tradeoffs

## Never Do

- do not treat a workaround as a final solution
- do not log sensitive data or secrets
- do not assume GDPR readiness without checking the dedicated privacy docs
- do not hardcode design tokens or one-off style systems
- do not duplicate business logic across layers
- do not add dependencies without clear justification

## Required Checks Per Change

- lint
- typecheck
- tests
- build
- documentation sync
- privacy/security impact review when relevant
- GDPR artifact sync when personal data handling changes
- observability/cost impact review when relevant

## Root-Cause Policy

Prefer systemic remediation over symptom-only patching. If an emergency workaround is necessary, mark it clearly and record the follow-up remediation path.

## Response Format

Summaries should include:

- what changed
- why this approach was chosen
- risks or open questions
- tests run or needed
- docs updated or still required

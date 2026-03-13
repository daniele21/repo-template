# AGENTS.md

## Mission

This repository is a template for robust, client-ready B2B SaaS products. Every change must prefer correctness, clarity, security, privacy, maintainability, observability, and cost-awareness over speed-by-default shortcuts.

The repository is expected to function as an operating system for delivery:

- product intent is explicit
- architectural boundaries are documented
- documentation is operational, not ornamental
- fixes target root causes, not just symptoms
- testing and observability are part of delivery, not afterthoughts

## Repo Navigation

Read in this order before making any substantial change:

1. [AGENTS.md](./AGENTS.md)
2. [.codex/instructions.md](./.codex/instructions.md)
3. Relevant files in [product/](./product)
4. Relevant files in [docs/](./docs)
5. Relevant ADRs in [adr/](./adr)

Use the repo sections like this:

- `apps/`: app entrypoints, route composition, page-level orchestration
- `packages/`: domain logic, shared libraries, typed contracts, UI primitives
- `services/`: workflows, integration orchestration, async or background processes
- `infra/`: deployment and platform concerns
- `product/`: source of truth for problem framing and requirements
- `docs/`: operational guidance and standards
- `tests/`: cross-cutting test support and broader test suites

## Working Rules

- Read the relevant context before proposing or making changes.
- Prefer the smallest change that fixes the actual problem at the right layer.
- Keep responsibilities explicit. Do not mix domain logic, UI rendering, persistence, and orchestration in one place.
- Treat privacy, security, testability, observability, and documentation as part of the implementation.
- Call out assumptions and unresolved risks instead of hiding them.

## Architecture Boundaries

Use this default split unless a project-specific architecture document supersedes it:

- `domain`: business rules, invariants, validation, pure transforms
- `data`: persistence access, external APIs, storage mappers
- `services`: orchestration, multi-step workflows, retries, idempotent operations
- `ui`: reusable components, interaction patterns, view-level primitives
- `app/pages`: route-level composition and request lifecycle handling
- `infra`: deploy/runtime/platform definitions

Rules:

- Do not duplicate business logic across apps, services, or UI layers.
- Do not place persistence logic directly inside page components.
- Do not create shared packages without a real reuse case.
- Keep contracts typed and naming explicit.

When the product is multi-tenant, also respect tenant boundaries defined in `docs/01-architecture/multi-tenancy.md` and any tenant-partitioning rules in `docs/05-data/`.

## Root Cause Before Remedy

Every bug, anomaly, or improvement request must be evaluated at the causal layer first.

- Do not default to local patches when the problem may originate in architecture, data shape, UX flow, requirements, or missing observability.
- Workarounds are allowed only when explicitly marked as temporary and paired with a structural remediation plan.
- For any non-trivial fix, ask:
  - what is the root cause
  - is the issue local or systemic
  - what protections prevent recurrence
  - what docs, tests, monitors, or ADRs must change

## Testing Policy

- New logic requires unit tests.
- Critical flows require integration tests.
- Bug fixes require regression coverage when feasible.
- Do not leave important behavior unverified.
- Run or describe the required checks: lint, typecheck, tests, build.

If a test cannot be added immediately, state why and record the gap.

## Documentation Policy

Update docs whenever behavior, architecture, requirements, operational procedures, or user-facing flows change.

At minimum, evaluate whether the change requires updates to:

- feature spec in `docs/specs/`
- pillar docs in `docs/`
- `CHANGELOG.md`
- ADR in `adr/`

Documentation must describe reality, not intent that was never implemented.

## Security and Privacy Policy

- Apply least privilege by default.
- Minimize collected, stored, and exposed data.
- Never log secrets or sensitive personal data.
- Identify auth/authz implications before adding new entrypoints or workflows.
- Record retention, deletion, export, and access-control impacts for sensitive flows.
- Check whether the change affects the GDPR docs in `docs/04-privacy-gdpr/`, especially data inventory, lawful basis, retention, subprocessors, transfers, and data-subject-rights handling.
- Escalate legal/compliance questions instead of implying certification.

## UX/UI Policy

- Use shared tokens, shared components, and documented patterns.
- Do not hardcode colors, spacing systems, or one-off UI behavior without clear justification.
- Cover loading, empty, error, and success states.
- Maintain baseline accessibility: semantics, labels, keyboard reachability, and contrast awareness.
- Favor concise, professional interfaces over decorative complexity.

## Observability and FinOps Policy

- Add or preserve structured logging where it matters.
- Define useful metrics and traces for critical workflows.
- Consider tenant-level usage and cost attribution when relevant.
- Call out external provider costs, storage growth, and expensive workflows.
- Prefer solutions that remain operationally visible and economically understandable.

## Change Delivery Format

When reporting work, provide:

- summary of what changed
- rationale for the chosen approach
- risks and open questions
- tests run or required
- docs updated or still needing update

For privacy-sensitive changes, also provide:

- personal or tenant data touched
- lawful basis or privacy rationale if relevant
- retention, deletion, export, or transfer implications
- subprocessors or vendor changes

When reviewing work, lead with findings and concrete references.

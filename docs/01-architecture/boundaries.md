# Architecture Boundaries

## Default Layering

- `domain`: pure rules, validation, invariants, transforms
- `data`: storage access, API clients, persistence mapping
- `services`: orchestration, retries, async workflows, idempotency handling
- `ui`: shared presentational components and interaction patterns
- `app/pages`: route handling, composition, request lifecycle
- `infra`: runtime, deployment, and environment configuration

## Boundary Rules

- UI must not own business rules that matter outside the view.
- Pages must not own direct persistence logic.
- Services should orchestrate; they should not become dumping grounds for every helper.
- Data access should map storage concerns into typed contracts before higher layers consume them.
- Shared code should have a clear owner and purpose.

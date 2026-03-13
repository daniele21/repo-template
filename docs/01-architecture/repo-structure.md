# Repo Structure

## Default Layout

- `apps/`: product entrypoints and route-level composition
- `packages/`: reusable modules, domain code, UI primitives, shared contracts
- `services/`: orchestration, jobs, integration workflows
- `infra/`: platform and deployment assets
- `product/`: product truth and non-functional requirements
- `docs/`: operational docs and standards
- `adr/`: architecture decisions
- `tests/`: test support and cross-cutting suites
- `scripts/`: automation

## Structure Rules

- Create packages when shared ownership or reuse is real.
- Keep domain rules close to typed contracts.
- Avoid dumping unrelated helpers into generic utility files.
- Prefer local reasoning and clear ownership over a low file count.

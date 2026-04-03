# B2B SaaS Repo Template

Opinionated template for building client-ready, multi-tenant B2B SaaS products with strong delivery discipline and Codex support.

## What This Template Provides

- A modular, monorepo-ready repo layout
- A zero-dependency runnable starter in `apps/api` with shared `contracts` and `domain` packages
- Product, architecture, security, privacy, UX, operations, and FinOps docs
- `AGENTS.md` as the main operating manual for humans and AI agents
- `/.codex/instructions.md` as the short execution constitution for Codex
- `/.codex/agents/` for delegable custom subagents with stable operational roles
- `/.agents/skills/` for repo-local workflow skills used for discovery, planning, review, and documentation sync
- A dedicated GDPR governance pack for privacy-sensitive B2B projects
- PR, issue, ADR, and feature spec templates
- Real CI and governance checks that can be extended per project

## Operating Model

Use this repo as an operating system, not just a code container.

1. Read [AGENTS.md](./AGENTS.md)
2. Read [.codex/instructions.md](./.codex/instructions.md)
3. Read relevant files in [product/](./product), [docs/](./docs), and [adr/](./adr)
4. Use subagents from `/.codex/agents/` when the task benefits from delegation, parallel work, or sandbox separation
5. Use workflow skills from `/.agents/skills/` for discovery, planning, review, and documentation workflows
6. Design before implementation
7. Implement with tests and documentation updates
8. Run the relevant specialist reviews and docs sync before considering the task complete

## Structure

```text
apps/       Application entrypoints and route-level containers
packages/   Shared libraries, contracts, domain modules, UI starter, and reusable components
services/   Service boundaries, background workflows, and integrations
infra/      Infrastructure, deployment, and platform configuration
product/    Product intent, scope, actors, and requirements
docs/       Pillar docs, runbooks, and templates
adr/        Architecture decision records
.agents/    Repo-local Codex skills discovered from the working tree
.codex/     Codex operating guidance, subagent config, and custom agent specs
.github/    CI workflows, issue templates, and PR template
tests/      Cross-cutting tests and test utilities
scripts/    Repository automation scripts
```

Key architecture references:

- [docs/01-architecture/repo-structure.md](./docs/01-architecture/repo-structure.md)
- [docs/01-architecture/boundaries.md](./docs/01-architecture/boundaries.md)
- [docs/01-architecture/multi-tenancy.md](./docs/01-architecture/multi-tenancy.md)
- [docs/01-architecture/golden-example.md](./docs/01-architecture/golden-example.md)

## Starter Commands

```bash
pnpm run dev
pnpm run dev:watch
pnpm run lint
pnpm run typecheck
pnpm run test
pnpm run build
pnpm run docs:check
pnpm run security:check
pnpm run verify
```

`pnpm run dev` starts the API server in the most stable local mode. `pnpm run dev:watch` adds autoreload for `apps/api/src` and `packages/`. By default the server tries port `3000` and automatically falls back to the next free port if `3000` is already busy. To force a specific port, run for example `PORT=3001 pnpm run dev`.

The starter is intentionally small and dependency-light. It demonstrates:

- `apps/api` as the runnable entrypoint
- `packages/contracts` for validation and defaults
- `packages/domain` for business logic
- `packages/ui` for starter tokens and primitive UI helpers
- `tests/` for unit and integration coverage
- privacy-by-default behavior in the tenant settings demo flow

## Recommended Workflow With Codex

Ask Codex to:

1. Read `AGENTS.md`, `/.codex/instructions.md`, and the relevant product/docs files
2. Spawn `repo_scout` when the task needs impact mapping, file discovery, or execution-path tracing
3. Stop for decision framing when foundational choices are still open, using the relevant skills under `/.agents/skills/`
4. Have `implementer` make the smallest correct change once direction is clear
5. Have `reviewer` apply the relevant review lenses such as architecture, root cause, security/privacy, tests, observability, and release readiness
6. Have `docs_syncer` update or propose updates to specs, ADRs, runbooks, and changelog when needed
7. Use `docs_researcher` or `browser_debugger` only when the task benefits from external-doc verification or UI reproduction
8. Apply remediations and keep docs aligned with implemented behavior

The workflow is expanded in [.codex/project-context.md](./.codex/project-context.md).
The repeatable implementation paths are listed in [.codex/golden-paths.md](./.codex/golden-paths.md).

## Demo Walkthrough

Use the tenant settings flow as the canonical end-to-end example for this template:

1. Spec: [docs/specs/tenant-settings-demo-spec.md](./docs/specs/tenant-settings-demo-spec.md)
2. Contract and defaults: [packages/contracts/src/tenant-settings-contract.ts](./packages/contracts/src/tenant-settings-contract.ts)
3. Domain rules: [packages/domain/src/tenant-settings-service.ts](./packages/domain/src/tenant-settings-service.ts)
4. App routing and request handling: [apps/api/src/app.ts](./apps/api/src/app.ts)
5. Runtime entrypoint: [apps/api/src/server.ts](./apps/api/src/server.ts)
6. Regression coverage: [tests/api-tenant-settings.test.ts](./tests/api-tenant-settings.test.ts) and [tests/tenant-settings-service.test.ts](./tests/tenant-settings-service.test.ts)

This path demonstrates the intended split between spec, contract validation, domain behavior, app composition, and tests while keeping privacy-preserving defaults explicit.

## GDPR Governance Pack

Use the privacy section in [docs/04-privacy-gdpr/](./docs/04-privacy-gdpr) to make data handling explicit from the start. The pack includes templates for:

- data inventory
- lawful basis mapping
- retention policy
- data subject rights handling
- subprocessors inventory
- transfer assessment
- DPIA triggers and template

## Starting a New Feature

1. Copy [docs/specs/spec-dev-template.md](./docs/specs/spec-dev-template.md)
2. Fill in the feature-specific spec
3. Have Codex read the spec plus the relevant product and docs files
4. Follow the relevant path in [.codex/golden-paths.md](./.codex/golden-paths.md)
5. Implement and review through the operating workflow

## Notes

- This template is stack-agnostic by design. Replace or extend the starter after choosing the project runtime.
- The included workflows run real repository checks and can be extended with framework-specific tooling later.


For a full step-by-step guide on starting a new project with this template, read:
- `docs/how-to-start-a-new-project.md`

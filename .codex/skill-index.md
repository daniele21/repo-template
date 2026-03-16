# Skill Index

This template includes discovery, planning, and review skills. Treat them as specialist collaborators inside the repo operating model, not as a replacement for reading project context first.

These skills are intentionally repo-local. They encode this template's operating model, documentation layout, and review expectations. Do not copy them directly into `~/.codex/skills` without first removing repo-specific assumptions.

Use [.codex/global-skill-strategy.md](./global-skill-strategy.md) to decide what should become a globally installed skill versus what should remain part of this repository contract.

## Discovery And Planning Skills

- `decision-framing-advisor`: identifies unresolved high-impact decisions, compares options, and recommends a path before implementation
- `solution-strategy-reviewer`: compares viable product and technical strategies and recommends the best fit
- `project-plan-orchestrator`: translates an approved strategy into slices, dependencies, and quality or compliance work
- `ai-act-reviewer`: checks whether AI governance or AI Act concerns must be tracked and documented
- `admin-cost-panel-planner`: defines the minimum admin-facing cost and usage visibility model when the product needs it

## Core Review Skills

- `root-cause-reviewer`: checks whether a proposed fix addresses the underlying cause
- `repo-architecture-reviewer`: checks modularity, ownership, and placement of logic
- `security-privacy-reviewer`: checks baseline security and privacy/GDPR implications
- `test-coverage-guardian`: checks whether tests and regression coverage are adequate
- `feature-docs-updater`: identifies and updates docs touched by a change
- `deploy-readiness-checker`: checks release, migration, monitoring, and rollback readiness
- `ux-design-system-enforcer`: checks UI consistency, shared patterns, and accessibility basics
- `finops-observability-reviewer`: checks telemetry, cost visibility, and expensive workflows

## Extended Privacy Skill

- `gdpr-privacy-reviewer`: checks GDPR-specific artifacts and flows such as lawful basis, retention, data subject rights, subprocessors, and transfers

## How To Use Skills

Use skills during discovery, before implementation, and after implementation when the change is non-trivial.

Suggested sequence:

1. discovery framing through `decision-framing-advisor` for new products, macro-features, or high-impact changes
2. strategy comparison through `solution-strategy-reviewer` when meaningful options exist
3. delivery planning through `project-plan-orchestrator` after the main direction is approved
4. design review by `repo-architecture-reviewer` for structural changes
5. implementation review by the relevant specialist skills
6. docs sync through `feature-docs-updater`
7. release check through `deploy-readiness-checker` before shipping

## Explicit Triggers

- `decision-framing-advisor`: use at the start of a new product, major feature, or major change request when key decisions are still open
- `solution-strategy-reviewer`: use when multiple realistic solution paths exist and tradeoffs must be made explicit
- `project-plan-orchestrator`: use after discovery or strategy freeze to define slices, dependencies, and done criteria
- `ai-act-reviewer`: use when AI, model-based automation, or AI-provider choices are introduced or modified
- `admin-cost-panel-planner`: use when cost visibility, provider attribution, tenant attribution, or admin monitoring needs must be designed
- `root-cause-reviewer`: use for non-trivial bug fixes, workarounds, incident remediations, and regressions
- `repo-architecture-reviewer`: use when code moves across layers, shared modules are introduced, or duplication appears
- `security-privacy-reviewer`: use when auth, sensitive data, logging, retention, or integrations change
- `gdpr-privacy-reviewer`: use when personal-data processing, subprocessors, transfers, user rights, or retention behavior change
- `test-coverage-guardian`: use when behavior changes, new workflows are added, or a regression is fixed
- `feature-docs-updater`: use after any feature change, user-visible behavior change, or architecture decision that affects docs
- `deploy-readiness-checker`: use before release candidates, migrations, infra changes, or env/config changes
- `ux-design-system-enforcer`: use for new UI, changed flows, or new shared components
- `finops-observability-reviewer`: use for external providers, batch jobs, AI workloads, storage growth, or expensive workflows

## Typical Mappings

- New project or major initiative: `decision-framing-advisor`, `solution-strategy-reviewer`, `project-plan-orchestrator`
- Bug fix: `root-cause-reviewer`, `test-coverage-guardian`
- Sensitive data flow: `security-privacy-reviewer`, `test-coverage-guardian`
- AI-enabled feature: `ai-act-reviewer`, `security-privacy-reviewer`, `finops-observability-reviewer`
- Usage-sensitive admin workflow: `admin-cost-panel-planner`, `finops-observability-reviewer`
- GDPR-sensitive feature: `gdpr-privacy-reviewer`, `security-privacy-reviewer`, `feature-docs-updater`
- UI feature: `ux-design-system-enforcer`, `feature-docs-updater`
- Costly integration: `finops-observability-reviewer`, `deploy-readiness-checker`
- Multi-tenant feature: `repo-architecture-reviewer`, `test-coverage-guardian`, `feature-docs-updater`
- Refactor: `repo-architecture-reviewer`, `test-coverage-guardian`

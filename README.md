# B2B SaaS Repo Template

Opinionated template for building client-ready, multi-tenant B2B SaaS products with strong delivery discipline and Codex support.

## What This Template Provides

- A modular, monorepo-ready repo layout
- Product, architecture, security, privacy, UX, operations, and FinOps docs
- `AGENTS.md` as the main operating manual for humans and AI agents
- `/.codex/instructions.md` as the short execution constitution for Codex
- Specialist Codex skills for review and documentation workflows
- A dedicated GDPR governance pack for privacy-sensitive B2B projects
- PR, issue, ADR, and feature spec templates
- Placeholder CI workflows for quality and governance checks

## Operating Model

Use this repo as an operating system, not just a code container.

1. Read [AGENTS.md](/Users/moltisantid/Personal/repo_template/AGENTS.md)
2. Read [/.codex/instructions.md](/Users/moltisantid/Personal/repo_template/.codex/instructions.md)
3. Read relevant files in [product/](/Users/moltisantid/Personal/repo_template/product), [docs/](/Users/moltisantid/Personal/repo_template/docs), and [adr/](/Users/moltisantid/Personal/repo_template/adr)
4. Design before implementation
5. Implement with tests and documentation updates
6. Run specialist reviews through the skills listed in [/.codex/skill-index.md](/Users/moltisantid/Personal/repo_template/.codex/skill-index.md)

## Structure

```text
apps/       Application entrypoints and route-level containers
packages/   Shared libraries, domain modules, and reusable components
services/   Service boundaries, background workflows, and integrations
infra/      Infrastructure, deployment, and platform configuration
product/    Product intent, scope, actors, and requirements
docs/       Pillar docs, runbooks, and templates
adr/        Architecture decision records
.codex/     Codex operating guidance and local skill specs
.github/    CI workflows, issue templates, and PR template
tests/      Cross-cutting tests and test utilities
scripts/    Repository automation scripts
```

## Recommended Workflow With Codex

Ask Codex to:

1. Read `AGENTS.md`, `/.codex/instructions.md`, and the relevant product/docs files
2. Propose an approach with risks, impacted layers, tests, and docs to update
3. Implement
4. Run the relevant review skills
5. Apply remediations and sync docs, changelog, and ADRs when needed

The workflow is expanded in [/.codex/project-context.md](/Users/moltisantid/Personal/repo_template/.codex/project-context.md).

## GDPR Governance Pack

Use the privacy section in [docs/04-privacy-gdpr/](/Users/moltisantid/Personal/repo_template/docs/04-privacy-gdpr) to make data handling explicit from the start. The pack includes templates for:

- data inventory
- lawful basis mapping
- retention policy
- data subject rights handling
- subprocessors inventory
- transfer assessment
- DPIA triggers and template

## Starting a New Feature

1. Copy [docs/specs/spec-dev-template.md](/Users/moltisantid/Personal/repo_template/docs/specs/spec-dev-template.md)
2. Fill in the feature-specific spec
3. Have Codex read the spec plus the relevant product and docs files
4. Implement and review through the operating workflow

## Notes

- This template is stack-agnostic by design. Add framework-specific tooling after choosing the runtime.
- The included workflows are placeholders and should be wired to the real build/test/security toolchain for each project.

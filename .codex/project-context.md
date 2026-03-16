# Project Context

Use this file to orient Codex before implementation work.

## Default Project Shape

- Multi-tenant B2B SaaS
- Modular monorepo-ready layout
- AGENTS-first governance model
- Strong emphasis on security, privacy, maintainability, testing, observability, and cost-awareness

## Standard Codex Workflow

1. Read `AGENTS.md`
2. Read `/.codex/instructions.md`
3. Read the relevant product docs
4. Read the relevant pillar docs and ADRs
   - if personal data is involved, read the relevant files in `docs/04-privacy-gdpr/`
   - if GDPR or AI Act topics are in scope, start from the internal baseline and source hierarchy:
     - `docs/legal/legal-source-register.md`
     - `docs/legal/legal-update-policy.md`
     - `docs/04-privacy-gdpr/`
     - `docs/10-ai-governance/`
   - if AI is involved, also consider filling:
     - `docs/10-ai-governance/ai-act-project-applicability-template.md`
     - `docs/legal/legal-compliance-summary.md`
   - if personal data is involved, also consider filling:
     - `docs/04-privacy-gdpr/gdpr-project-applicability-template.md`
     - `docs/legal/legal-compliance-summary.md`
   - if the change affects tenant boundaries, config, billing, or isolation, read `docs/01-architecture/multi-tenancy.md`
5. If this is a new product, major initiative, or macro-feature: do not skip discovery
   - ensure `product/project-brief.md`, `docs/00-discovery/00-project-brainstorm.md`, `docs/00-discovery/01-solution-strategy.md`, and `docs/00-discovery/02-delivery-plan.md` exist and are aligned before implementation
6. Propose design, risks, impacted layers, tests, and docs to update
7. Implement
8. Run the relevant review skills
9. Apply remediations and sync docs

Use [.codex/golden-paths.md](./golden-paths.md) when the task fits a standard path such as feature work, bug fixing, privacy-sensitive change, integration change, or release readiness.

## Typical Prompt Pattern

Use a prompt structure like:

1. Read:
   - `AGENTS.md`
   - `/.codex/instructions.md`
   - relevant files in `product/`
   - relevant files in `docs/`
2. Propose:
   - approach
   - risks and tradeoffs
   - impacted layers
   - test plan
   - docs to update
3. Implement
4. Review with the relevant skills
5. Update docs, changelog, and ADR if needed

## When To Escalate Review Depth

Use specialist review when the change affects:

- auth/authz or sensitive data
- lawful basis, retention, deletion, export, subprocessor, or transfer handling
- operational runbooks or deployments
- costly external providers or AI workloads
- architecture boundaries or shared contracts
- tenant boundaries, shared resources, or per-tenant behavior
- important UX paths

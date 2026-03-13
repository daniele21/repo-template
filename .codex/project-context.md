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
5. Propose design, risks, impacted layers, tests, and docs to update
6. Implement
7. Run the relevant review skills
8. Apply remediations and sync docs

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
- important UX paths

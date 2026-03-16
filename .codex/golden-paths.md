# Golden Paths

## Global Rule: Decision Discovery Before Design

Before design or implementation begins, check whether there are unresolved high-impact decisions.

If important decisions are still open, do not jump into implementation. First:

1. identify the decisions that must be made
2. explain why they matter
3. present viable options
4. show pros and cons
5. recommend one option
6. wait for direction when the decision is foundational

Only proceed directly to implementation when:

- the key decisions are already documented in the repository
- the remaining decisions are low-impact and safely reversible

## New Feature

1. Read `AGENTS.md`, `/.codex/instructions.md`, and the relevant product/docs files.
2. Run decision discovery before proposing implementation.
3. Copy `docs/specs/spec-dev-template.md` into a feature-specific spec.
4. Ask Codex for the approach, risks, impacted layers, tests, docs to update, and any foundational decisions that still need confirmation.
5. Implement in the correct layer: contracts, domain, app, then tests.
6. Run `feature-docs-updater` and any relevant specialist reviewers.
7. Update changelog and ADRs if the change is material.

### Step 1 - Decision Discovery

Before proposing implementation, identify which high-impact decisions must be confirmed.

Typical decision categories:

- user roles and target workflow
- product scope and non-scope
- architecture placement
- persistence approach
- contracts and API shape
- security and authorization model
- privacy / GDPR implications
- UX flow and interaction pattern
- observability and cost impact

For each unresolved decision:

- describe the decision
- explain why it matters
- present 2-3 viable options
- list pros and cons
- recommend one option

If foundational decisions are still open, stop after the decision analysis and wait for direction before implementation.

## Bug Fix

1. Start from the bug issue template.
2. Run `root-cause-reviewer` before choosing the fix shape.
3. If the fix requires a high-impact decision, stop after framing the options and recommended path.
4. Implement the smallest systemic remediation at the right layer.
5. Add regression coverage.
6. Update docs and run the relevant reviewers.

### Step 1 - Root Cause And Decision Discovery

Before applying a fix, determine whether the issue is local or systemic.

Check:

- what symptom is visible
- what may be causing it upstream
- whether the fix affects architecture, data model, UX, validation, observability, or process
- whether a temporary workaround is being considered

If the fix requires a high-impact decision, present:

- what must be decided
- available options
- pros and cons
- recommended path

Do not implement a local patch as if it were a final solution when the real issue is systemic.

## Privacy-Sensitive Change

1. Read the relevant files in `docs/04-privacy-gdpr/`.
2. Run sensitive-change decision discovery before implementation.
3. Make processor/controller role explicit in the spec.
4. Run `gdpr-privacy-reviewer` and `security-privacy-reviewer`.
5. Update GDPR artifacts, transfer notes, and incident implications if needed.

### Step 1 - Decision Discovery For Sensitive Changes

Before implementation, identify decisions related to:

- personal data involved
- lawful basis assumptions
- processor / subprocessor usage
- data residency and transfers
- retention and deletion
- security controls
- logging and auditability
- failure handling and operational risk

For each unresolved sensitive decision:

- state the decision
- show options
- explain pros and cons
- recommend the safest acceptable path

## Integration Change

1. Review architecture boundaries, sensitive decisions, and cost implications first.
2. If the integration shape is still open, present options before implementation.
3. Update contracts and failure-handling behavior before wiring the integration.
4. Run `repo-architecture-reviewer`, `finops-observability-reviewer`, and `deploy-readiness-checker`.

### Step 1 - Decision Discovery For Sensitive Changes

Before implementation, identify decisions related to:

- personal data involved
- lawful basis assumptions when relevant
- processor / subprocessor usage
- data residency and transfers
- retention and deletion
- security controls
- logging and auditability
- failure handling and operational risk

For each unresolved sensitive decision:

- state the decision
- show options
- explain pros and cons
- recommend the safest acceptable path

## Multi-Tenant Change

1. Read `docs/01-architecture/multi-tenancy.md` and the relevant data/privacy docs.
2. Make tenant isolation, shared-resource impact, and per-tenant config behavior explicit in the spec.
3. Keep tenant identifiers and authorization boundaries explicit in contracts and data access.
4. Run `repo-architecture-reviewer`, `test-coverage-guardian`, and the privacy reviewers if tenant data handling changes.
5. Update docs when tenant model, billing attribution, or audit separation changes.

## Release Readiness

1. Run `pnpm run verify`, `pnpm run docs:check`, and `pnpm run security:check`.
2. Review rollback, migration, and monitoring expectations.
3. Run `deploy-readiness-checker`.
4. Confirm changelog and operational docs are current.

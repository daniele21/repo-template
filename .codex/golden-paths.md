# Golden Paths

## New Feature

1. Read `AGENTS.md`, `/.codex/instructions.md`, and the relevant product/docs files.
2. Copy `docs/specs/spec-dev-template.md` into a feature-specific spec.
3. Ask Codex for the approach, risks, impacted layers, tests, and docs to update.
4. Implement in the correct layer: contracts, domain, app, then tests.
5. Run `feature-docs-updater` and any relevant specialist reviewers.
6. Update changelog and ADRs if the change is material.

## Bug Fix

1. Start from the bug issue template.
2. Run `root-cause-reviewer` before choosing the fix shape.
3. Implement the smallest systemic remediation at the right layer.
4. Add regression coverage.
5. Update docs and run the relevant reviewers.

## Privacy-Sensitive Change

1. Read the relevant files in `docs/04-privacy-gdpr/`.
2. Make processor/controller role explicit in the spec.
3. Run `gdpr-privacy-reviewer` and `security-privacy-reviewer`.
4. Update GDPR artifacts, transfer notes, and incident implications if needed.

## Integration Change

1. Review architecture boundaries and cost implications first.
2. Update contracts and failure-handling behavior before wiring the integration.
3. Run `repo-architecture-reviewer`, `finops-observability-reviewer`, and `deploy-readiness-checker`.

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

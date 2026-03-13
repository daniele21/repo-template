# Skill Index

This template includes eight core Codex skills plus an optional dedicated GDPR specialist. Treat them as specialist reviewers and updaters, not general-purpose replacement agents.

## Core Skills

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

Use skills after design or implementation when the change is non-trivial.

Suggested sequence:

1. design review by `repo-architecture-reviewer` for structural changes
2. implementation review by the relevant specialist skills
3. docs sync through `feature-docs-updater`
4. release check through `deploy-readiness-checker` before shipping

## Typical Mappings

- Bug fix: `root-cause-reviewer`, `test-coverage-guardian`
- Sensitive data flow: `security-privacy-reviewer`, `test-coverage-guardian`
- GDPR-sensitive feature: `gdpr-privacy-reviewer`, `security-privacy-reviewer`, `feature-docs-updater`
- UI feature: `ux-design-system-enforcer`, `feature-docs-updater`
- Costly integration: `finops-observability-reviewer`, `deploy-readiness-checker`
- Refactor: `repo-architecture-reviewer`, `test-coverage-guardian`

# Delivery Plan

## Purpose Of This Document

This document translates the approved strategy into an implementation plan.
It must define what will be built first, how quality and compliance will be enforced, and how progress will be validated.

## Project

- Name:
- Date:
- Status:
- Plan maturity: Draft / Proposed / Approved

## Inputs Used

- `product/project-brief.md`
- `docs/00-discovery/00-project-brainstorm.md`
- `docs/00-discovery/01-solution-strategy.md`
- 
- 

## Delivery Principles

- Follow the approved strategy
- No silent divergence from architecture decisions
- Every feature must include tests
- Every change must consider security, privacy, cost, and maintainability
- Bugs must be addressed with root-cause-first thinking
- Documentation must stay aligned with implementation
- Admin visibility for cost and operations must be designed intentionally

## Delivery Approach

- Vertical slices / Milestones / Iterative increments / Other

## Definition Of Ready

A slice is ready to be implemented only if:

- the functional goal is clear
- the impacted architecture area is known
- privacy and security implications are reviewed
- UX / UI expectations are clear enough
- acceptance criteria are defined
- testing expectations are defined

## Definition Of Done

A slice is done only if:

- implementation matches the approved plan
- tests exist and pass
- required docs are updated
- privacy and security impacts are addressed
- observability is added where needed
- admin cost visibility is added where relevant
- known tradeoffs are documented

## Delivery Slices

### Slice 1 - <Name>

- Objective:
- Scope:
- Main files / modules likely involved:
- Functional acceptance criteria:
- Technical acceptance criteria:
- Privacy / GDPR tasks:
- AI governance / AI Act tasks:
- Security tasks:
- UX / UI tasks:
- Observability / cost tasks:
- Tests required:
- Documentation updates required:
- Risks:
- Dependencies:
- Status: Planned / In progress / Done

### Slice 2 - <Name>

- Objective:
- Scope:
- Functional acceptance criteria:
- Technical acceptance criteria:
- Privacy / GDPR tasks:
- AI governance / AI Act tasks:
- Security tasks:
- UX / UI tasks:
- Observability / cost tasks:
- Tests required:
- Documentation updates required:
- Risks:
- Dependencies:
- Status: Planned / In progress / Done

## Cross-Cutting Workstreams

- Architecture integrity:
- Documentation alignment:
- Test infrastructure:
- Security baseline:
- Privacy / GDPR baseline:
- AI governance baseline:
- UX / UI system setup:
- Observability baseline:
- Admin cost panel baseline:

## Testing Plan

- Unit testing strategy:
- Integration testing strategy:
- Regression testing strategy:
- Build / lint / typecheck gates:
- Manual validation checkpoints:

## Documentation Plan

Update when relevant:

- project discovery docs
- feature specs
- architecture docs
- data model docs
- UX flows
- privacy / GDPR docs
- AI governance docs
- changelog
- ADRs

## Privacy / GDPR Plan

- Required deliverables:
- Review checkpoints:

## AI Governance / AI Act Plan

- Required deliverables:
- Review checkpoints:

## Security Plan

- Required controls:
- Security review checkpoints:

## UX / UI Plan

- Required design outputs:
- UX review checkpoints:

## Observability And Cost Monitoring Plan

- Operational telemetry required:
- Admin cost panel requirements:
- Alerts / thresholds:

## Root Cause Policy For Bugs And Changes

Every bug fix or change request must:

1. identify the symptom
2. investigate the likely root cause
3. assess whether the issue is local or systemic
4. avoid treating temporary workarounds as final solutions
5. evaluate impacts on architecture, privacy, security, UX, and cost
6. add regression coverage where relevant
7. update documentation if the change alters behavior or decisions

## Recommended Reviewers / Skills Per Slice

- decision-framing-advisor
- solution-strategy-reviewer
- project-plan-orchestrator
- repo-architecture-reviewer
- gdpr-privacy-reviewer
- ai-act-reviewer
- security-privacy-reviewer
- ux-design-system-enforcer
- finops-observability-reviewer
- test-coverage-guardian
- feature-docs-updater
- root-cause-reviewer
- deploy-readiness-checker

## Approval

- Plan approved: Yes / No
- Notes:

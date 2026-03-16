# How to Start a New Project with This Template

## Purpose

This document explains how to use this repository as the starting point for a new product or client project.

This template is designed to support a structured workflow:

1. define the project clearly
2. explore decisions before coding
3. freeze the strategy
4. create a delivery plan
5. implement in slices
6. review architecture, compliance, security, UX, and cost impacts continuously

Do not use this repository as a simple code scaffold.
Use it as an operating system for product discovery, design, delivery, and change management.

---

## Core Working Principle

Do not start implementation immediately from a raw idea.

Always move through these phases:

1. **Project brief**
2. **Brainstorming**
3. **Solution strategy**
4. **Delivery plan**
5. **Implementation**
6. **Review and documentation sync**

The goal is to avoid:
- coding before decisions are clear
- weak architectural choices
- missing compliance considerations
- patch-style fixes without root cause analysis
- undocumented product evolution

---

## Files You Must Use First

Before starting a new project, read:

- `AGENTS.md`
- `/.codex/instructions.md`
- `/.codex/golden-paths.md`
- `/.codex/project-context.md`
- `docs/legal/legal-source-register.md`
- `docs/legal/legal-update-policy.md`

Then work with these project artifacts:

- `product/project-brief.md`
- `docs/00-discovery/00-project-brainstorm.md`
- `docs/00-discovery/01-solution-strategy.md`
- `docs/00-discovery/02-delivery-plan.md`

If the project involves personal data, also use:

- `docs/04-privacy-gdpr/gdpr-reference-guide.md`
- `docs/04-privacy-gdpr/gdpr-control-matrix.md`
- `docs/04-privacy-gdpr/gdpr-project-applicability-template.md`

If the project involves AI, also use:

- `docs/10-ai-governance/ai-act-reference-guide.md`
- `docs/10-ai-governance/ai-act-control-matrix.md`
- `docs/10-ai-governance/ai-act-project-applicability-template.md`

---

## Phase 1 — Create the Project Brief

Start by filling:

- `product/project-brief.md`

This is the first source of truth for the project.

At minimum, define:
- business objective
- problem statement
- users
- roles
- core use cases
- high-level requirements
- constraints
- integrations
- AI usage, if any
- personal data profile
- admin and monitoring needs
- success metrics
- scope boundaries
- risks and assumptions

### Goal of this phase
Turn a vague request into a structured project definition.

### Do not do yet
- do not implement code
- do not choose architecture silently
- do not assume compliance or security posture without review

---

## Phase 2 — Run Interactive Brainstorming

Create or update:

- `docs/00-discovery/00-project-brainstorm.md`

This is the interactive decision workspace.

Use it to:
- identify unresolved high-impact decisions
- compare options
- record pros and cons
- track tradeoffs
- collect user confirmations
- keep open questions visible

### What the agent should do in this phase
The agent must:
1. identify what still needs to be decided
2. explain why each decision matters
3. present viable options
4. show pros, cons, risks, and tradeoffs
5. recommend one direction
6. wait for confirmation on foundational decisions

### Typical decisions to clarify
- product scope
- tenant model
- architecture style
- stack choice
- auth/authz model
- data model
- integration approach
- AI usage
- GDPR exposure
- AI Act exposure
- cost model
- admin monitoring expectations
- UX/UI direction

### Goal of this phase
Do not code yet.
Reach enough clarity to choose a strategy confidently.

---

## Phase 3 — Freeze the Solution Strategy

Create or update:

- `docs/00-discovery/01-solution-strategy.md`

This document freezes the chosen direction.

It should define:
- architecture style
- selected stack
- data model direction
- tenant model
- integration strategy
- security baseline
- GDPR approach
- AI governance / AI Act approach, if relevant
- UX/UI direction
- observability approach
- admin cost monitoring approach
- accepted tradeoffs
- rejected alternatives

Also create relevant ADRs in:
- `/adr`

### Goal of this phase
Transform brainstorming into an approved direction.

### Rule
Do not implement until the main strategy is clear enough and approved.

---

## Phase 4 — Create the Delivery Plan

Create or update:

- `docs/00-discovery/02-delivery-plan.md`

This plan translates strategy into execution.

It should define:
- delivery approach
- slices or milestones
- dependencies
- testing expectations
- documentation expectations
- security work
- privacy / GDPR work
- AI governance work, if relevant
- UX/UI work
- observability work
- admin cost panel work
- definition of ready
- definition of done

### Goal of this phase
Make implementation predictable and reviewable.

### Rule
Do not treat the delivery plan as a rough note.
It is part of the execution contract.

---

## Phase 5 — Run Project-Specific Compliance Reviews

If the project processes personal data:

Create or update:
- `docs/04-privacy-gdpr/gdpr-project-applicability-template.md`

Use it to determine:
- whether personal data is involved
- controller/processor roles
- lawful basis assumptions
- rights impact
- retention/deletion needs
- transfer risks
- DPIA plausibility
- missing privacy artifacts

If the project uses AI:

Create or update:
- `docs/10-ai-governance/ai-act-project-applicability-template.md`

Use it to determine:
- whether the feature is actually an AI system
- whether prohibited-practice red flags exist
- whether high-risk plausibility exists
- whether transparency duties may apply
- whether GPAI issues exist
- whether human oversight, literacy, logging, and evaluations are needed

Also summarize the result in:
- `docs/00-discovery/legal-compliance-summary.md`

### Important rule
Use repository legal baseline documents first.
Do not improvise legal interpretation from memory.

If a control is unclear or escalated:
- mark it explicitly
- do not claim compliance readiness
- do not silently ignore it

---

## Phase 6 — Implement in Slices

Only now begin implementation.

Follow:
- the approved strategy
- the delivery plan
- the architecture boundaries
- the legal/compliance review outputs

### Recommended implementation order
1. contracts
2. domain logic
3. infrastructure / services
4. app/backend flow
5. UI
6. tests
7. docs updates
8. specialist reviews

### Always include
- tests for every relevant feature
- unit tests for new logic
- integration tests where workflows matter
- documentation updates
- observability where needed
- cost/admin visibility where relevant

### Do not do
- do not bypass the plan casually
- do not add architecture shortcuts silently
- do not hardcode style if design system rules exist
- do not log sensitive data carelessly

---

## Phase 7 — Use Specialist Reviews

Before considering a slice complete, use the relevant skills and checklists.

Typical reviewers:
- `decision-framing-advisor`
- `solution-strategy-reviewer`
- `project-plan-orchestrator`
- `repo-architecture-reviewer`
- `gdpr-privacy-reviewer`
- `ai-act-reviewer`
- `security-baseline-reviewer`
- `ux-design-system-enforcer`
- `finops-observability-reviewer`
- `test-coverage-guardian`
- `feature-docs-updater`
- `deploy-readiness-checker`

Use the skill index:
- `/.codex/skill-index.md`

### Goal of this phase
Catch weak design, compliance gaps, missing tests, cost blind spots, and documentation drift before they accumulate.

---

## Standard Prompt Pattern for New Projects

Use a prompt like this when starting:

### Kickoff prompt
Read `AGENTS.md`, `/.codex/instructions.md`, and `product/project-brief.md`.

Enter discovery mode.

Do not implement anything.

Create or update `docs/00-discovery/00-project-brainstorm.md`.

Identify unresolved high-impact decisions.
For each one, show:
- what must be decided
- why it matters
- options
- pros
- cons
- recommendation

If relevant, also identify:
- GDPR implications
- AI Act implications
- security implications
- architecture implications
- cost/admin monitoring implications

Stop and wait for confirmation before implementation.

### Strategy prompt
Read:
- `product/project-brief.md`
- `docs/00-discovery/00-project-brainstorm.md`

Consolidate the recommended direction in:
- `docs/00-discovery/01-solution-strategy.md`

Create the minimum ADRs needed.
Do not implement yet.

### Planning prompt
Read:
- `docs/00-discovery/01-solution-strategy.md`

Create or update:
- `docs/00-discovery/02-delivery-plan.md`

Define slices, dependencies, tests, GDPR tasks, AI Act tasks, UX/UI work, security work, observability, and admin cost panel work.
Do not implement yet.

### Implementation prompt
Read:
- `docs/00-discovery/01-solution-strategy.md`
- `docs/00-discovery/02-delivery-plan.md`

Implement the next delivery slice.
Follow the approved strategy and plan.
Add tests and update documentation.
Run the relevant specialist reviews.

---

## How to Handle Change Requests

When the product already exists and the user asks for a change:

1. understand the requested change
2. assess impact on architecture, data, privacy, AI governance, security, UX, observability, and cost
3. present options if the change is high-impact
4. update strategy/plan if needed
5. implement safely
6. update tests and docs

Use:
- `docs/specs/feature-change-template.md`
- `/.codex/golden-paths.md` → `change-request`

Do not treat major changes as purely local code edits by default.

---

## How to Handle Bug Fixes

When a bug appears, do not patch the visible symptom without investigation.

Use:
- `docs/specs/bugfix-template.md`
- `/.codex/golden-paths.md` → `bug-fix`

The bug-fix flow must include:
1. visible symptom
2. likely root cause
3. local vs systemic assessment
4. fix options
5. recommended robust fix
6. regression protection
7. documentation update if behavior or decisions changed

### Rule
Temporary workarounds are allowed only if clearly marked as temporary and followed by a real remediation path.

---

## What “Good Use” of This Repo Looks Like

You are using this repo correctly when:
- the project brief is clear
- the brainstorming document shows real decision analysis
- the strategy document makes tradeoffs explicit
- the delivery plan breaks work into safe slices
- compliance is reviewed before coding, not after
- AI usage is classified before being implemented casually
- tests and docs evolve with the code
- bug fixes are root-cause-first
- changes are reviewed for architectural and compliance impact

You are using this repo poorly when:
- coding starts from a vague request
- architecture is chosen silently
- compliance is assumed instead of reviewed
- docs are filled only after implementation
- bug fixes are applied as patches without systemic analysis

---

## Minimum New Project Checklist

Before implementation starts, confirm all of the following:

- [ ] `product/project-brief.md` exists
- [ ] `docs/00-discovery/00-project-brainstorm.md` exists
- [ ] major decisions have been explored with pros and cons
- [ ] `docs/00-discovery/01-solution-strategy.md` exists
- [ ] `docs/00-discovery/02-delivery-plan.md` exists
- [ ] GDPR applicability review exists if personal data is involved
- [ ] AI Act applicability review exists if AI is involved
- [ ] legal compliance summary exists if relevant
- [ ] admin cost visibility has been considered
- [ ] implementation slices are defined
- [ ] tests and docs expectations are explicit

---

## Final Rule

This repository is not meant to accelerate coding only.

It is meant to accelerate:
- correct framing
- better decisions
- safer implementation
- stronger compliance awareness
- higher product robustness over time
---
status: authoritative-internal-baseline
jurisdiction: EU
last_reviewed: 2026-03-16
binding_status_note: "This matrix operationalizes AI Act scoping and governance checks for product and engineering review. It is an internal control tool, not legal advice."
---

# AI Act Control Matrix

## How To Use This Matrix

For each AI-related project, feature, provider choice, change request, or bug fix:

1. determine whether AI is actually in scope
2. identify applicable AI Act buckets
3. capture missing evidence
4. trigger escalation where needed
5. align AI Act controls with GDPR, security, and architecture reviews

Use the following applicability values:

- Yes
- No
- TBD
- Escalate

## Matrix

| Control Area | Control Question | When It Applies | Required Artifact / Evidence | Owner | Escalate? |
| --- | --- | --- | --- | --- | --- |
| AI scope | Is the feature actually an AI system under the AI Act? | Any proposed AI/ML/generative feature | AI system scope note | Product / AI Gov / Engineering | If unclear |
| AI role | What role does AI play in the workflow? | Any AI feature | Project brief / strategy note | Product | If unclear |
| Red flags | Could the use approach a prohibited practice? | Any manipulative, biometric, profiling, workplace/education, criminal-risk, or sensitive use | Prohibited-practice assessment | Legal / AI Gov | Always if plausible |
| AI literacy | Do relevant staff need AI literacy measures? | Any AI use in the organization | AI literacy note / training plan | Ops / AI Gov | If absent |
| Risk bucket | Could the feature be high-risk? | Sensitive domains or regulated contexts | High-risk plausibility note | Legal / AI Gov / Product | If plausible |
| Role allocation | Are we provider, deployer, importer, distributor, or mixed? | Any AI product/supply-chain scenario | Role allocation note | Product / Legal | If unclear |
| Human oversight | Is meaningful human oversight needed? | Any non-trivial AI workflow | Human oversight note | Product / Ops / AI Gov | If absent |
| Transparency | Could transparency duties apply? | AI interaction, synthetic content, deepfakes, emotion recognition, biometric categorization | Transparency assessment | Product / Legal / UX | If plausible |
| GPAI use | Are we using or building on a GPAI model? | Foundation-model or LLM-style use | Provider/model register | AI Gov / Engineering | If unclear |
| GPAI provider scope | Could we be a GPAI provider? | Model development / placing on market / major modification cases | GPAI scope assessment | Legal / AI Gov | Always if plausible |
| Logging | Are AI-relevant events logged sufficiently? | AI materially affects outputs or decisions | Logging / observability note | Engineering / Ops | If absent |
| Evaluation | Are there model or output evaluations appropriate to the use? | Non-trivial AI workflows | Evals note | AI Gov / Engineering | If absent |
| Output controls | Are guardrails or output controls needed? | Generative, assistive, or decision-support AI | Output-control note | Engineering / AI Gov | If absent |
| Vendor governance | Are provider terms, location, and governance understood? | External model / API use | Vendor register | Ops / Legal / AI Gov | If unclear |
| Data overlap | Does the AI feature use personal data? | Any AI feature touching user data | Cross-link to GDPR review | Product / Legal / Engineering | If yes |
| Rights impact | Could outputs affect rights, opportunities, eligibility, or similar significant outcomes? | Ranking, scoring, decision support, employment, access, benefits, risk evaluation | Rights-impact note | Product / Legal / AI Gov | Always if plausible |
| Documentation | Have AI governance documents been updated? | Any material AI change | Docs update | Engineering / Product | If missing |

## Minimum Required Artifacts For AI Features

At minimum, an AI-related project should usually maintain:

- AI system scope note
- AI role description
- provider or model register
- role allocation note
- transparency assessment where relevant
- human oversight note
- logging / evals / output-controls note
- AI literacy note
- cross-link to GDPR review if personal data is involved

## High-Risk Plausibility Triggers

Escalate quickly if the project touches:

- employment or worker management
- education or student evaluation
- migration / border / asylum contexts
- law enforcement
- creditworthiness, insurance, or access to essential services
- public-sector decisions
- biometric identification or categorization
- emotion recognition
- systems that influence rights or similarly significant opportunities

## Review Outcomes

### Green

No major AI Act ambiguity detected and required governance artifacts exist.

### Amber

Some scope or governance points are still unresolved but not yet blocking. Resolve them before production release if material.

### Red

At least one of the following is present:

- unclear AI-system applicability
- possible prohibited practice
- plausible high-risk classification
- unclear role allocation
- missing transparency assessment in a relevant case
- missing human oversight in a meaningful AI workflow

Do not claim AI Act readiness while red issues remain.

## Codex Review Rule

When a feature uses AI, Codex must:

- scan this matrix
- identify Yes / TBD / Escalate items
- flag unresolved prohibited, high-risk, or transparency questions
- recommend documentation and governance work
- avoid claiming full compliance if unresolved red items remain

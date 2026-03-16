---
status: authoritative-internal-baseline
jurisdiction: EU
last_reviewed: 2026-03-16
binding_status_note: "This matrix operationalizes GDPR requirements for product, engineering, architecture, and delivery reviews. It is an internal control tool, not legal advice."
---

# GDPR Control Matrix

## How To Use This Matrix

For each project, feature, change request, or bug fix affecting personal data:

1. identify the relevant controls
2. mark applicability
3. document the required artifact or evidence
4. flag escalation triggers
5. update project docs if the answer changes

Use the following applicability values:

- Yes
- No
- TBD
- Escalate

## Matrix

| Control Area | Control Question | When It Applies | Required Artifact / Evidence | Owner | Escalate? |
| --- | --- | --- | --- | --- | --- |
| Scope | Does the feature process personal data? | Any time user-linked or person-linked data may be present | Data inventory update | Product / Engineering | If unclear |
| Roles | Have controller / processor / subprocessor roles been identified? | Any external vendor, client-delivery, or multi-party setup | Role note + vendor register | Product / Legal / Engineering | If unclear |
| Lawful basis | Is the lawful basis documented for each relevant purpose? | Any personal-data processing | Lawful basis map | Product / Legal | If unclear |
| Purpose limitation | Is the purpose specific and explicit? | Any personal-data processing | Feature spec / strategy note | Product | If unclear |
| Minimization | Are only necessary data fields collected and retained? | Any personal-data processing | Data model review | Product / Engineering | If sensitive or excessive |
| Transparency | Does the user-facing flow require notices or disclosures? | Any externally facing processing | Privacy / UI note | Product / Legal / UX | If unclear |
| Rights | Do access / rectification / deletion / export / objection workflows need support? | Where user rights are relevant | Rights-handling note | Product / Ops | If omitted in relevant system |
| Retention | Is a retention or deletion rule defined? | Any stored personal data | Retention schedule | Product / Engineering / Legal | If unclear |
| Security | Are appropriate technical or organizational measures addressed? | Any personal-data processing | Security baseline / review | Engineering / Security | If high-risk |
| Privacy by design | Has privacy by design/default been considered during design? | Any personal-data processing | Architecture / privacy design note | Engineering / Product | If absent |
| Logging | Do logs, analytics, traces, or prompts contain personal data? | Any runtime telemetry or AI feature | Observability review | Engineering | If yes and uncontrolled |
| Processors | Are processors and subprocessors identified and governed? | External tools or vendors | Vendor register / contract note | Product / Legal / Ops | If unclear |
| Transfers | Are there transfers outside the EEA? | External hosting / vendor / service use | Transfer assessment | Legal / Ops / Engineering | If yes or unclear |
| SCCs / adequacy | Is there a valid transfer mechanism if needed? | Transfers outside EEA | Adequacy or SCC note | Legal | If unclear |
| DPIA trigger | Is the processing likely to result in high risk? | Sensitive / large-scale / monitoring / automated evaluation / novel tech | DPIA decision note | Legal / Product / Security | If plausible |
| Special category data | Does the feature involve special category or similarly sensitive contexts? | Health, biometrics, similar sensitive data | Sensitive-data review | Legal / Security / Product | Always |
| Children's data | Are children or minors involved? | Child-facing or mixed-audience contexts | Child-data assessment | Product / Legal | Always |
| Employee monitoring | Does the product monitor workers or workplace behavior? | HR, workplace analytics, monitoring tools | Employment / privacy assessment | Legal / Product | Always |
| Automated decisions | Does the system support decisions with legal or similarly significant effects? | Eligibility, ranking, hiring, benefits, access | Automated-decision review | Product / Legal / AI Gov | Always |
| Data breach readiness | Is there an operational path for breach assessment and escalation? | Any stored personal data | Incident / breach runbook | Ops / Security | If absent |
| Documentation | Have privacy artifacts been updated? | Any relevant change | Docs update | Engineering / Product | If missing |

## Minimum Required Artifacts Per Project

At minimum, a project that processes personal data should usually maintain:

- data inventory
- lawful basis map
- retention schedule
- processor or subprocessor register
- transfer assessment if relevant
- privacy design note
- rights-handling note where relevant
- DPIA decision note
- breach or incident path

## Review Outcomes

### Green

All required controls addressed, no unresolved escalations.

### Amber

Some controls are still TBD, but no major blocker yet. Resolve them before production release if they affect compliance materially.

### Red

At least one high-impact control is unclear or requires escalation. Do not claim compliance readiness.

## Codex Review Rule

When a feature or change touches personal data, Codex must:

- scan this matrix
- identify all Yes / TBD / Escalate controls
- list missing artifacts
- recommend the next compliance actions
- avoid claiming full compliance if unresolved red items remain

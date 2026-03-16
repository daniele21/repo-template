---
status: authoritative-internal-baseline
jurisdiction: EU
last_reviewed: 2026-03-16
primary_sources:
  - Regulation (EU) 2016/679 (GDPR), EUR-Lex official text
secondary_sources:
  - European Commission data protection pages
  - EDPB guidelines and recommendations
binding_status_note: "This document summarizes binding GDPR requirements and official guidance for operational use inside the repository. It is not legal advice."
when_to_escalate:
  - unclear lawful basis
  - special category data
  - children's data
  - employee monitoring
  - large-scale monitoring
  - automated decisions with legal or similarly significant effects
  - new international transfers
  - likely DPIA trigger
---

# GDPR Reference Guide

## 1. What The GDPR Is

The GDPR is the EU regulation on the protection of personal data. It is technology-neutral and applies regardless of whether processing is done through software, cloud systems, surveillance tools, or paper-based records organized under defined criteria.

The GDPR applies where:

- a controller or processor is established in the EU and processes personal data in the context of its activities
- or a controller or processor outside the EU offers goods or services to people in the EU
- or monitors the behavior of people in the EU

## 2. What Counts As Personal Data

Personal data is any information relating to an identified or identifiable natural person.

Operational rule for this repository:

Treat data as personal data if it can directly identify a person or can reasonably be linked back to one person, alone or in combination with other data.

Examples often relevant for products:

- names
- email addresses
- phone numbers
- employee IDs when linkable to a person
- location data
- online identifiers
- device-linked user identifiers
- account records
- support tickets tied to a user
- AI prompts or outputs containing personal data

## 3. Roles You Must Determine Early

### Controller

The controller decides why and how personal data is processed.

### Processor

The processor processes personal data on behalf of the controller and under the controller's instructions.

### Joint Controllers

More than one party may jointly determine purposes and means for a processing activity.

Repository rule:

Every project must clarify, at minimum:

- who is the controller
- whether any processor is involved
- whether any subprocessor is involved
- whether any joint-controller scenario is plausible

If this is unclear, escalate.

## 4. Core GDPR Principles

Every processing activity must be consistent with these principles:

- lawfulness, fairness, and transparency
- purpose limitation
- data minimization
- accuracy
- storage limitation
- integrity and confidentiality
- accountability

Repository rule:

Every product feature touching personal data must be reviewable against these principles.

## 5. Lawful Basis Must Be Explicit

A processing activity must have a lawful basis.

Repository rule:

For every meaningful purpose involving personal data, document:

- the purpose
- the lawful basis
- the data categories
- the retention approach
- the recipients or processors involved

Do not proceed with privacy-sensitive implementation when the lawful basis is still unclear.

## 6. Special Category And Sensitive Contexts

Extra care is required for:

- special category data
- criminal-offence-related data
- children's data
- workplace monitoring contexts
- sensitive inferences
- decision-support systems affecting rights or opportunities

Repository rule:

When a feature involves these categories or contexts, escalate to human review before implementation is considered complete.

## 7. Data Subject Rights

The GDPR gives people rights over their personal data, including:

- information
- access
- rectification
- erasure
- restriction
- portability
- objection
- rights related to automated decision-making and profiling

Repository rule:

Each relevant project must determine whether it needs:

- an access workflow
- a correction workflow
- a deletion workflow
- an export workflow
- a rights-request triage process
- logging of rights requests and responses

## 8. Privacy By Design And By Default

Privacy by design and by default must be built into the design of processing operations.

Operational expectations for this repository:

- collect the minimum necessary data
- use privacy-friendly defaults
- avoid exposing personal data unnecessarily
- avoid broad internal access by default
- avoid logging personal data unless truly needed
- design deletion and retention intentionally
- design exports and rights handling early
- design security and access control as part of architecture, not as a late patch

Repository rule:

Privacy by design is a design-phase requirement, not a post-build checklist.

## 9. Security Of Processing

Appropriate technical and organizational measures must protect personal data.

Repository baseline expectations:

- access control
- least privilege
- secret management
- environment separation
- logging discipline
- secure defaults
- incident-aware architecture
- sensible data retention
- vendor awareness
- review of exposed interfaces and integrations

## 10. Controller-Processor Governance

If processors are used, the relationship must be governed properly.

Repository expectations:

- identify processors and subprocessors
- ensure the processing relationship is documented
- define instructions, security expectations, subprocessor handling, deletion or return expectations, and assistance obligations
- keep a vendor or subprocessor list

## 11. Records, Accountability, And Evidence

GDPR compliance must be demonstrable.

Repository baseline artifacts typically include:

- data inventory
- lawful basis map
- retention schedule
- processor or subprocessor register
- rights-handling notes
- transfer assessment
- DPIA decision
- security or privacy design notes
- incident handling notes

## 12. DPIA

A DPIA must be considered for processing likely to result in a high risk to people's rights and freedoms.

Repository trigger examples:

- large-scale processing
- systematic monitoring
- sensitive data
- automated evaluation with significant effects
- new technology in sensitive contexts
- combinations of data that materially increase risk

Repository rule:

If high-risk processing is plausible, document the DPIA decision explicitly. Do not silently skip the question.

## 13. Personal Data Breaches

A personal data breach is not only a hack. It can also involve accidental loss, unauthorized disclosure, or availability issues affecting personal data.

Repository expectations:

- maintain an incident path
- log relevant facts
- preserve evidence
- support assessment of notification obligations
- avoid casual deletion of incident traces
- align operational runbooks with personal-data-breach handling

## 14. International Transfers

If personal data is transferred outside the EEA, transfer mechanisms and safeguards matter.

Repository expectations:

- identify vendor or data locations
- identify whether international transfers occur
- identify whether adequacy applies
- identify whether SCCs or other safeguards are needed
- record transfer assessments where relevant

## 15. Automated Decisions And Profiling

If a system supports or performs decisions affecting people significantly, extra care is required.

Repository rule:

Escalate if a feature:

- profiles individuals in a meaningful way
- evaluates people for access, ranking, employment, eligibility, or risk
- may produce legal or similarly significant effects
- combines AI or automation with personal-data-based decision support

## 16. What Codex Must Always Check For GDPR

When a feature touches personal data, Codex must check:

- what personal data is involved
- why it is needed
- who the controller or processor is
- what lawful basis is assumed
- whether minimization is respected
- whether retention or deletion is defined
- whether rights workflows are needed
- whether processors or subprocessors are involved
- whether transfers may occur
- whether a DPIA trigger may exist
- whether logs or analytics include personal data
- whether architecture reflects privacy by design

## 17. What This Guide Does Not Do

This guide does not:

- replace legal advice
- determine lawful basis automatically
- certify that a project is compliant
- remove the need for project-specific analysis

It provides a safe operational baseline for engineering and product decisions.

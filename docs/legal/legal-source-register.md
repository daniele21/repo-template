---
status: authoritative-internal-baseline
jurisdiction: EU
last_reviewed: 2026-03-16
owner: legal-compliance-maintainer
binding_status_note: "This register defines the legal source hierarchy for the repository. It is not legal advice."
---

# Legal Source Register

This register defines which sources are acceptable as the baseline for GDPR and AI Act interpretation inside this repository.

## Source Hierarchy

### Level 1 - Binding Law

Use these as the primary legal source of truth.

#### GDPR

- Regulation (EU) 2016/679 (GDPR), EUR-Lex official text

Use the regulation itself for:

- principles
- roles
- lawful bases
- data subject rights
- controller or processor obligations
- international transfers
- DPIA triggers
- security obligations
- breach obligations

#### AI Act

- Regulation (EU) 2024/1689 (AI Act), EUR-Lex official text

Use the regulation itself for:

- scope
- definition structure
- prohibited practices
- risk tiers
- provider or deployer obligations
- transparency duties
- GPAI obligations
- enforcement timeline

### Level 2 - Official EU Guidance

Use these to interpret and operationalize the law.

#### GDPR

- European Commission data protection pages
- European Data Protection Board (EDPB) guidelines, recommendations, and best practices

#### AI Act

- European Commission AI Act pages and official FAQs
- AI Office / AI Act Service Desk
- Official Commission guidelines on AI system definition, prohibited practices, GPAI scope, AI literacy, and transparency obligations where available

### Level 3 - Official Or Commission-Supported Non-Binding Instruments

Use these only as support tools, never as substitutes for the regulation.

#### AI Act

- General-Purpose AI Code of Practice
- future codes of practice for transparency or AI-generated content
- official implementation FAQs and support materials

### Level 4 - Internal Repository Interpretation

These repository documents translate legal rules into operational design, implementation, and review controls:

- `docs/04-privacy-gdpr/gdpr-reference-guide.md`
- `docs/04-privacy-gdpr/gdpr-control-matrix.md`
- `docs/10-ai-governance/ai-act-reference-guide.md`
- `docs/10-ai-governance/ai-act-control-matrix.md`

Internal documents must:

- cite the relevant primary or official source
- distinguish law from guidance
- state when human legal review is required
- never present uncertain interpretation as certain law

## Allowed Sources For Codex

Codex should use, in this order:

1. the internal repository legal baseline
2. the cited official source behind that baseline
3. live official EU sources only when the baseline is outdated, incomplete, or explicitly marked for review

Codex must avoid relying on:

- blogs
- vendor marketing pages
- unofficial summaries
- forum discussions
- legal commentary without primary-source traceability

## Binding Vs Non-Binding Rule

Always distinguish:

- binding law
- official guidance
- voluntary code or support tool
- internal operational interpretation

Never treat FAQs, codes of practice, or service-desk summaries as if they were legally binding provisions.

## Escalation Triggers

Codex must explicitly flag the need for human legal review when any of the following applies.

### GDPR Escalation Triggers

- unclear lawful basis
- special category data
- children's data
- large-scale monitoring
- employee monitoring
- automated decisions with legal or similarly significant effects
- new international transfers
- high-risk processing that may require DPIA
- unusual joint-controller arrangements
- cross-border processor chains with unclear accountability

### AI Act Escalation Triggers

- uncertainty whether the feature is an AI system
- possible prohibited practice
- possible high-risk use case
- biometric categorization, emotion recognition, or remote biometric identification
- employment, education, migration, credit, insurance, public-benefit, or essential-service contexts
- use of GPAI models in critical workflows
- system outputs affecting rights or similarly significant decisions
- unclear provider or deployer role allocation
- unclear transparency obligations
- unclear systemic-risk implications for GPAI models

## Repository Rule

When repository legal baseline documents exist and are marked as current:

- use them first
- do not improvise from memory
- do not re-interpret the law from scratch
- only go beyond them when an issue is marked as unresolved or outdated

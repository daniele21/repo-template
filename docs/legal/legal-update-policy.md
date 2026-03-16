---
status: authoritative-internal-baseline
jurisdiction: EU
last_reviewed: 2026-03-16
owner: legal-compliance-maintainer
binding_status_note: "This policy defines how the repository legal baseline is reviewed and updated. It is not legal advice."
---

# Legal Update Policy

This policy defines how the repository legal baseline must be reviewed and updated so that Codex and contributors rely on current, authoritative guidance.

## Review Frequency

### Regular Review

Review all legal baseline documents every 90 days.

Applies to:

- `docs/04-privacy-gdpr/gdpr-reference-guide.md`
- `docs/04-privacy-gdpr/gdpr-control-matrix.md`
- `docs/10-ai-governance/ai-act-reference-guide.md`
- `docs/10-ai-governance/ai-act-control-matrix.md`
- templates that operationalize GDPR or AI Act controls

### Event-Driven Review

Review immediately when one of the following happens:

- new binding EU legislation or amendment becomes applicable
- European Commission publishes new official guidelines or FAQs materially affecting interpretation
- EDPB publishes new or updated guidance affecting operational expectations
- AI Office / AI Act Service Desk publishes new official support materials materially affecting implementation
- a major enforcement development materially changes practical risk assumptions
- repository users discover a gap, inconsistency, or outdated requirement

## What Must Be Checked During Review

### For GDPR

Check for updates affecting:

- controller or processor roles
- lawful basis interpretation
- privacy by design
- DPIA triggers
- breach handling
- international transfers
- rights-handling workflows
- records-of-processing expectations
- EDPB operational guidance

### For AI Act

Check for updates affecting:

- applicability timeline
- AI system definition
- prohibited practices
- high-risk obligations
- transparency obligations
- GPAI obligations
- AI literacy expectations
- official codes of practice
- official implementation FAQs
- guidance on provider or deployer roles

## Review Output

Every legal review must update:

- `last_reviewed`
- source references if needed
- sections impacted by legal change
- notes on what changed
- any new escalation triggers
- any affected templates or control matrices

Add a short log entry to the relevant document:

- date
- reviewer
- source(s) checked
- summary of change
- whether the change is binding, guidance, or voluntary-support only

## Handling Drafts, Proposals, And Pending Guidance

Always separate:

- currently applicable law
- future applicability dates already fixed by law
- draft guidance
- proposed amendments not yet in force

Never merge proposed changes into the baseline as if they were already applicable.

If a proposal is important but not in force:

- mention it in a watchlist note
- mark it clearly as pending
- do not convert it into required controls

## Source Priority During Review

Use this order:

1. EUR-Lex official text
2. European Commission official pages
3. EDPB guidance
4. AI Office / AI Act Service Desk official materials
5. official Commission-supported codes of practice and support tools

Do not use third-party commentary as the basis for changing repository rules unless it merely points to an official source that is then reviewed directly.

## Codex Behavior Rule

Codex must:

- treat repository legal documents as the default legal baseline
- check the document date before relying on them
- flag a review if the document appears stale or if the request concerns a recently changed topic
- avoid ad hoc legal research unless the repository baseline is outdated or incomplete

## Watchlist Topics

### GDPR Watchlist

- international transfer mechanisms
- employee monitoring
- AI-enabled profiling and automated decisions
- emerging EDPB guidance on new technologies

### AI Act Watchlist

- transparency obligations under Article 50
- practical guidance for deployers
- GPAI scope and systemic risk guidance
- implementation support for high-risk systems
- interaction between AI Act and other EU digital rules

## Minimum Acceptance Rule

A legal baseline document is considered current enough for operational use only if:

- it has a review date within the last 90 days
- or it has an explicit note confirming that no relevant changes were identified after a fresh source check

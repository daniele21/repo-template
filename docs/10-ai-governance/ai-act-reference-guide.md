---
status: authoritative-internal-baseline
jurisdiction: EU
last_reviewed: 2026-03-16
primary_sources:
  - Regulation (EU) 2024/1689 (AI Act), EUR-Lex official text
secondary_sources:
  - European Commission AI Act pages and FAQs
  - AI Office / AI Act Service Desk
binding_status_note: "This document summarizes the AI Act and official implementation guidance for operational use inside the repository. It is not legal advice and does not certify compliance."
when_to_escalate:
  - unclear whether the feature is an AI system
  - possible prohibited practice
  - possible high-risk use case
  - biometric, emotion-recognition, or sensitive-person assessment use
  - employment, education, migration, credit, insurance, law-enforcement, or public-service contexts
  - uncertainty about provider/deployer role
  - GPAI obligations
  - uncertain transparency obligations
---

# AI Act Reference Guide

## 1. What The AI Act Is

The AI Act is the EU regulation establishing harmonized rules for artificial intelligence in the Union.

Repository rule:

Treat the AI Act as a product-governance and system-design regulation, not only as a legal afterthought.

## 2. Timeline You Must Know

Current baseline timeline:

- entered into force: August 1, 2024
- prohibited AI practices and AI literacy obligations apply from February 2, 2025
- GPAI obligations and governance apply from August 2, 2025
- most remaining obligations apply from August 2, 2026
- some high-risk AI systems embedded in regulated products have a longer transition to August 2, 2027

Repository rule:

Always distinguish:

- already applicable obligations
- future obligations with fixed dates
- proposals or draft guidance not yet in force

## 3. First Question: Is This Even An AI System?

Do not assume that every software feature is an AI system under the AI Act.

Repository rule:

When AI is proposed, the first scoping question is whether the feature actually falls within the AI Act notion of an AI system.

Use official definition guidance before applying downstream obligations. If unclear, escalate.

## 4. Main AI Act Buckets To Distinguish

Operationally, separate these categories:

- prohibited AI practices
- high-risk AI systems
- transparency-governed systems
- general-purpose AI models
- GPAI models with systemic risk

Repository rule:

Never jump straight from "uses AI" to "must comply with everything." Classify first.

## 5. Prohibited Practices - First Red Flag Check

The first practical screen is whether the proposed use could fall into prohibited practices.

Repository red-flag examples:

- manipulative or deceptive AI causing significant harm
- exploitative targeting of vulnerabilities
- social scoring
- certain predictive criminal-risk assessment based only on profiling or personality
- certain emotion recognition in workplace or education contexts
- prohibited biometric categorization uses
- prohibited remote biometric identification uses
- indiscriminate scraping of facial images for facial-recognition databases

If a project even approaches these areas, escalate immediately.

## 6. AI Literacy Is Already Applicable

AI literacy obligations already apply.

Repository expectation:

If the project uses AI, the organization should be able to show that relevant personnel understand:

- what the system does
- its limitations
- key risks
- safe usage expectations
- escalation triggers

## 7. High-Risk AI Systems

Some AI systems are classified as high-risk under the AI Act.

Repository rule:

Do not self-classify casually. Use the official structure and escalate if a high-risk category is plausible.

High-risk-related operational expectations may include:

- risk-management discipline
- data or data-governance controls
- documentation and traceability
- human oversight
- accuracy, robustness, and cybersecurity considerations
- quality-management expectations
- registration and conformity-related obligations in relevant cases
- deployer-side assessment and oversight duties in some contexts

If the use case sits near employment, education, law enforcement, migration, essential services, public-sector decisions, or other regulated contexts, assume high scrutiny.

## 8. Provider Vs Deployer Matters

The AI Act assigns obligations differently depending on the role.

Repository rule:

For every AI feature, determine whether we are acting as:

- provider
- deployer
- importer
- distributor
- or a combination in practice

If this is unclear, escalate.

## 9. Transparency Obligations

Some AI systems are subject to transparency duties even when they are not high-risk.

Operational examples to assess:

- users interacting with an AI system
- AI-generated or AI-manipulated content
- deepfakes or synthetic media
- emotion-recognition or biometric-categorization systems
- AI-generated public-interest information contexts

Repository rule:

If the system generates content, simulates human interaction, or manipulates media, explicitly assess transparency duties.

## 10. GPAI Models

If the product provides, modifies, or places a general-purpose AI model on the market, GPAI obligations may apply.

Repository rule:

Do not confuse:

- using an external GPAI-based service inside a product

with

- being a GPAI provider under the Act

If GPAI-provider obligations are plausible, escalate immediately.

## 11. GPAI Code Of Practice

The GPAI Code of Practice is a voluntary support instrument. It can help demonstrate compliance with GPAI obligations, but it is not itself the binding law.

Repository rule:

Use it as an implementation aid, not as a substitute for the regulation.

## 12. Human Oversight

Many AI use cases require careful human oversight, and high-risk systems have specific oversight expectations.

Operational questions:

- can a human understand the system's role?
- can a human detect obvious malfunction or misuse?
- can a human intervene meaningfully?
- is there a fallback path when the model behaves poorly?
- are users over-trusting the output?

## 13. Logging, Evaluation, And Output Controls

AI governance is not just documentation. Operational controls may include:

- logging relevant events
- evaluating model behavior
- prompt or output review
- guardrails and validation
- escalation paths for harmful or unreliable outputs
- traceability for important decisions

Repository rule:

If AI meaningfully affects product behavior, plan these controls intentionally.

## 14. AI Act Vs GDPR

AI Act and GDPR are not interchangeable.

Repository rule:

For AI features involving personal data:

- apply GDPR review
- apply AI Act review
- compare the outputs
- do not assume one replaces the other

Typical overlap areas:

- profiling
- automated decisions
- employee contexts
- sensitive data
- transparency
- logging
- human oversight

## 15. What Codex Must Always Check For AI Act

When a feature uses AI, Codex must check:

- whether the feature is actually an AI system
- what role AI plays in the workflow
- whether any prohibited-practice red flags exist
- whether a high-risk category may be implicated
- whether transparency duties may apply
- whether GPAI or provider issues may apply
- what human oversight is needed
- what logging, evaluation, or output controls are needed
- what internal documentation must be created or updated

## 16. What This Guide Does Not Do

This guide does not:

- certify legal classification
- certify high-risk status
- replace legal advice
- remove the need for project-specific review

It provides a safe operational baseline for engineering and product decisions.

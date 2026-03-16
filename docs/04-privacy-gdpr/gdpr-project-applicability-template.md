---
status: template
jurisdiction: EU
last_reviewed: 2026-03-16
owner: legal-compliance-maintainer
when_to_escalate: "Escalate for any 'TBD' or 'Yes' that matches an escalation trigger in docs/legal/legal-source-register.md."
binding_status_note: "This is an engineering governance artifact. It is not legal advice."
---

# GDPR Project Applicability (Template)

Use this document to make GDPR applicability explicit for a specific project, feature, or major initiative.

This template is intentionally binary: for each topic, record whether it applies (`Yes` / `No` / `TBD`) and whether human legal review is required.

## How To Use

1. Start from the repository baseline:
   - `docs/04-privacy-gdpr/gdpr-reference-guide.md`
   - `docs/04-privacy-gdpr/gdpr-control-matrix.md`
   - `docs/legal/legal-source-register.md`
2. Fill this document as part of discovery and before implementation for new products or macro-features.
3. If anything is `TBD`, treat it as a gate: clarify before implementation or explicitly accept the risk and escalate.

## Scope

- Project / initiative:
- Date:
- Owner:
- Reviewers:

## Applicability Checklist

| Topic | Applies (Yes/No/TBD) | Why / notes (short) | Escalate (Yes/No) | Links / evidence |
|---|---|---|---|---|
| Personal data processed at all |  |  |  |  |
| Roles: controller vs processor vs joint |  |  |  |  |
| Data subjects (customers, end-users, employees, minors) |  |  |  |  |
| Special category data (Art. 9) |  |  |  |  |
| Criminal-offence data (Art. 10) |  |  |  |  |
| Children’s data or age gating |  |  |  |  |
| Automated decision-making with legal/similar effects (Art. 22) |  |  |  |  |
| Lawful basis clarity for each purpose |  |  |  |  |
| Data minimization + purpose limitation validated |  |  |  |  |
| Retention schedule defined + deletion works |  |  |  |  |
| Data subject rights (access/export/delete/rectify/objection) |  |  |  |  |
| ROPA / processing record needed |  |  |  |  |
| Subprocessors / vendors involved |  |  |  |  |
| International transfers (EEA → third countries) |  |  |  |  |
| Security controls and access boundaries |  |  |  |  |
| Logging review (no secrets, minimize PII) |  |  |  |  |
| DPIA likely required |  |  |  |  |
| Breach readiness (detection, response, notification) |  |  |  |  |

## Escalation Notes

If you marked any item as `Escalate: Yes`, list the reason and what needs to be decided:

- 
- 

## Artifacts To Update When “Applies: Yes”

These should be updated or created as needed (not all are always required):

- `docs/04-privacy-gdpr/data-inventory.md`
- `docs/04-privacy-gdpr/lawful-basis-matrix.md`
- `docs/04-privacy-gdpr/retention-policy.md`
- `docs/04-privacy-gdpr/subprocessors.md`
- `docs/04-privacy-gdpr/transfer-assessment.md`
- `docs/04-privacy-gdpr/dpia-template.md`
- `docs/legal/legal-compliance-summary.md`


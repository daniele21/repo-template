---
status: template
jurisdiction: EU
last_reviewed: 2026-03-16
owner: legal-compliance-maintainer
when_to_escalate: "Escalate for any 'TBD' or 'Yes' that matches an escalation trigger in docs/legal/legal-source-register.md."
binding_status_note: "This is an engineering governance artifact. It is not legal advice."
---

# AI Act Project Applicability (Template)

Use this document to record whether AI governance and EU AI Act concerns are relevant for a specific project, feature, or major initiative.

The goal is not to “prove compliance” but to prevent silent assumptions: each high-impact AI Act topic must be explicitly marked (`Yes` / `No` / `TBD`) with escalation notes when needed.

## How To Use

1. Start from the repository baseline:
   - `docs/10-ai-governance/ai-act-reference-guide.md`
   - `docs/10-ai-governance/ai-act-control-matrix.md`
   - `docs/legal/legal-source-register.md`
2. Fill this document during discovery (before implementation) for any AI or automated decision-support feature.
3. If anything is `TBD`, treat it as a gate: clarify before implementation or escalate.

## Scope

- Project / initiative:
- Date:
- Owner:
- Reviewers:

## Applicability Checklist

| Topic | Applies (Yes/No/TBD) | Why / notes (short) | Escalate (Yes/No) | Links / evidence |
|---|---|---|---|---|
| AI used at all (including “assistive” features) |  |  |  |  |
| Likely qualifies as an “AI system” |  |  |  |  |
| Role clarity: provider vs deployer vs importer/distributor |  |  |  |  |
| Potential prohibited practice risk |  |  |  |  |
| Potential high-risk use case |  |  |  |  |
| Limited-risk transparency obligations (users informed, labeling, etc.) |  |  |  |  |
| GPAI / foundation model usage |  |  |  |  |
| System output affects rights or similarly significant outcomes |  |  |  |  |
| Human oversight required (and designed) |  |  |  |  |
| Data governance for training/evals and prompt logs |  |  |  |  |
| Model/provider register completed |  |  |  |  |
| Output controls, safety policies, and incident handling |  |  |  |  |
| Logging + monitoring + evals defined |  |  |  |  |
| Tenant attribution of AI usage/cost is required |  |  |  |  |

## Escalation Notes

If you marked any item as `Escalate: Yes`, list the reason and what needs to be decided:

- 
- 

## Artifacts To Update When “Applies: Yes”

- `docs/10-ai-governance/ai-act-applicability.md`
- `docs/10-ai-governance/ai-system-classification.md`
- `docs/10-ai-governance/model-provider-register.md`
- `docs/10-ai-governance/human-oversight-evals.md`
- `docs/legal/legal-compliance-summary.md`


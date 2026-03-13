# Privacy Baseline

## Defaults

- data minimization
- purpose limitation
- least necessary retention
- no sensitive personal data in logs
- explicit review of export, deletion, and access implications
- explicit review of lawful basis, subprocessors, and transfer implications
- privacy by default for new users, tenants, and features
- processor-accountability posture when building vendor software for enterprise clients
- protection goals considered during design: unlinkability, transparency, intervenability

## Required Companion Artifacts

When a project handles personal data, maintain these docs as applicable:

- `ropa-processor.md`
- `data-inventory.md`
- `lawful-basis-matrix.md`
- `retention-policy.md`
- `data-subject-rights.md`
- `end-of-contract-data-handling.md`
- `subprocessors.md`
- `transfer-assessment.md`
- `dpia-template.md`

## Notes

This template supports privacy-aware engineering. It does not by itself certify legal compliance.

For most B2B SaaS vendor scenarios, assume the product is acting primarily as a processor unless the project docs explicitly define controller-owned processing activities.

## Review Triggers

- new personal data collection
- new cross-border data transfers
- new processors or subprocessors
- changes affecting retention, deletion, or consent flows
- features with elevated risk that may trigger a DPIA
- changes to default visibility, sharing, or profiling behavior
- use of third-party code or trackers that may transmit personal data

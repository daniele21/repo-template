# Data Governance

## Required Topics

- data classification
- source of truth
- ownership by domain or team
- validation rules
- PII handling
- pseudonymization or anonymization strategy where relevant
- tenant partitioning and cross-tenant access rules
- retention and deletion behavior
- import/export contracts

## Working Rules

- Keep storage models and domain models explicit.
- Record when data crosses tenant or system boundaries.
- Validate external inputs before they become trusted state.
- Distinguish pseudonymized data from anonymized data. Pseudonymized data remains in scope for GDPR and requires access controls over re-identification keys.
- Make cross-tenant reads and writes exceptional, explicit, and auditable.

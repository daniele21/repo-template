# Multi-Tenancy

Define the tenancy model before implementing multi-customer behavior.

## Minimum Decisions

- tenant identifier format and ownership
- isolation model: logical shared, partially dedicated, or fully dedicated
- authorization boundary per tenant
- shared versus dedicated resources
- tenant-specific configuration strategy
- tenant-specific feature flags if any
- audit separation requirements
- billing and cost attribution requirements

## Working Rules

- Every tenant-aware contract must make tenant scope explicit.
- Cross-tenant access must be exceptional, reviewed, and logged.
- Shared resources must not imply shared authorization.
- Background jobs and integrations must preserve tenant attribution.
- Observability should support per-tenant debugging and, where relevant, cost analysis.

## Review Questions

- Can data from one tenant be read or mutated by another tenant path?
- Are tenant identifiers validated and propagated consistently?
- Are support, admin, and backoffice flows constrained enough to avoid accidental cross-tenant access?
- If a tenant is offboarded, can their data, config, and audit trail be handled cleanly?

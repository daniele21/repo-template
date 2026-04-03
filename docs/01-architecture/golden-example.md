# Golden Example

Use the tenant settings demo as the default example for how a feature should traverse this template.

## End-to-End Path

1. Product and scope: [tenant-settings-demo-spec.md](../specs/tenant-settings-demo-spec.md)
2. Shared contract and defaults: [packages/contracts/src/tenant-settings-contract.ts](../../packages/contracts/src/tenant-settings-contract.ts)
3. Domain behavior: [packages/domain/src/tenant-settings-service.ts](../../packages/domain/src/tenant-settings-service.ts)
4. App orchestration: [apps/api/src/app.ts](../../apps/api/src/app.ts)
5. Runtime entrypoint: [apps/api/src/server.ts](../../apps/api/src/server.ts)
6. Persistence adapter: [apps/api/src/repository/in-memory-tenant-settings-repository.ts](../../apps/api/src/repository/in-memory-tenant-settings-repository.ts)
7. Verification: [tests/api-tenant-settings.test.ts](../../tests/api-tenant-settings.test.ts) and [tests/tenant-settings-service.test.ts](../../tests/tenant-settings-service.test.ts)

## Why This Example Exists

- It shows a minimal but real feature instead of a placeholder.
- It keeps validation and defaults in `packages/contracts`.
- It keeps business rules in `packages/domain`.
- It keeps HTTP routing and request lifecycle code in `apps/api`.
- It keeps persistence behind a repository boundary.
- It makes privacy-preserving defaults explicit and testable.

## How To Reuse The Pattern

When adding a new feature, mirror this sequence:

1. Start from a spec in `docs/specs/`.
2. Define shared validation and defaults in `packages/contracts`.
3. Add domain logic in `packages/domain`.
4. Compose the feature into an app entrypoint under `apps/`.
5. Add regression tests at the domain and app boundary.
6. Update architecture, privacy, and changelog docs when the change is material.

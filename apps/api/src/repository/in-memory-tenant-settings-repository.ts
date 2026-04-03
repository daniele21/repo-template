import {
  defaultTenantSettings,
  type TenantSettings
} from "../../../../packages/contracts/src/tenant-settings-contract.ts";
import type { TenantSettingsRepository } from "../../../../packages/domain/src/tenant-settings-service.ts";

export function createInMemoryTenantSettingsRepository(): TenantSettingsRepository {
  const store = new Map<string, TenantSettings>();

  return {
    async get(tenantId) {
      return store.get(tenantId) ?? defaultTenantSettings();
    },
    async save(tenantId, settings) {
      store.set(tenantId, settings);
      return settings;
    }
  };
}

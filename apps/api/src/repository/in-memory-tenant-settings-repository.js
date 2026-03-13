import { defaultTenantSettings } from "../../../../packages/contracts/src/tenant-settings-contract.js";

export function createInMemoryTenantSettingsRepository() {
  const store = new Map();

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

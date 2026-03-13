import { defaultTenantSettings } from "../../contracts/src/tenant-settings-contract.js";

export function createTenantSettingsService({ repository }) {
  if (!repository?.get || !repository?.save) {
    throw new Error("A repository with get/save methods is required.");
  }

  return {
    async getTenantSettings(tenantId) {
      assertTenantId(tenantId);
      const current = await repository.get(tenantId);
      return {
        ...defaultTenantSettings(),
        ...current
      };
    },
    async updateTenantSettings(tenantId, patch) {
      assertTenantId(tenantId);
      const current = await repository.get(tenantId);
      const next = {
        ...defaultTenantSettings(),
        ...current,
        ...patch
      };

      // Privacy by default: shared visibility and audit exports stay disabled unless explicit.
      if (!("profileVisibility" in patch) && !current?.profileVisibility) {
        next.profileVisibility = "private";
      }

      if (!("auditExportEnabled" in patch) && typeof current?.auditExportEnabled !== "boolean") {
        next.auditExportEnabled = false;
      }

      return repository.save(tenantId, next);
    }
  };
}

function assertTenantId(tenantId) {
  if (typeof tenantId !== "string" || tenantId.trim() === "") {
    throw new Error("tenantId is required.");
  }
}

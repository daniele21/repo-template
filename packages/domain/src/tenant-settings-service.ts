import {
  defaultTenantSettings,
  type TenantSettings,
  type TenantSettingsPatch
} from "../../contracts/src/tenant-settings-contract.ts";

export interface TenantSettingsRepository {
  get(tenantId: string): Promise<Partial<TenantSettings> | undefined>;
  save(tenantId: string, settings: TenantSettings): Promise<TenantSettings>;
}

export interface TenantSettingsService {
  getTenantSettings(tenantId: string): Promise<TenantSettings>;
  updateTenantSettings(tenantId: string, patch: TenantSettingsPatch): Promise<TenantSettings>;
}

export function createTenantSettingsService({
  repository
}: {
  repository: TenantSettingsRepository;
}): TenantSettingsService {
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
      const next: TenantSettings = {
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

function assertTenantId(tenantId: string): void {
  if (typeof tenantId !== "string" || tenantId.trim() === "") {
    throw new Error("tenantId is required.");
  }
}

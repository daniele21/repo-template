export type ProfileVisibility = "private" | "organization";

export interface TenantSettings {
  brandingColor: string;
  profileVisibility: ProfileVisibility;
  auditExportEnabled: boolean;
}

export interface TenantSettingsPatch {
  brandingColor?: string;
  profileVisibility?: ProfileVisibility;
  auditExportEnabled?: boolean;
}

const VALID_VISIBILITIES = new Set<ProfileVisibility>(["private", "organization"]);

export function defaultTenantSettings(): TenantSettings {
  return {
    brandingColor: "#0F4C5C",
    profileVisibility: "private",
    auditExportEnabled: false
  };
}

export function validateTenantSettingsPatch(input: unknown): TenantSettingsPatch {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    throw new Error("Tenant settings payload must be an object.");
  }

  const patch: TenantSettingsPatch = {};

  if ("brandingColor" in input) {
    if (typeof input.brandingColor !== "string" || !/^#[0-9A-Fa-f]{6}$/.test(input.brandingColor)) {
      throw new Error("brandingColor must be a hex color string.");
    }
    patch.brandingColor = input.brandingColor;
  }

  if ("profileVisibility" in input) {
    if (typeof input.profileVisibility !== "string" || !VALID_VISIBILITIES.has(input.profileVisibility as ProfileVisibility)) {
      throw new Error("profileVisibility must be private or organization.");
    }
    patch.profileVisibility = input.profileVisibility as ProfileVisibility;
  }

  if ("auditExportEnabled" in input) {
    if (typeof input.auditExportEnabled !== "boolean") {
      throw new Error("auditExportEnabled must be a boolean.");
    }
    patch.auditExportEnabled = input.auditExportEnabled;
  }

  return patch;
}

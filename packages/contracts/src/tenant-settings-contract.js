const VALID_VISIBILITIES = new Set(["private", "organization"]);

export function defaultTenantSettings() {
  return {
    brandingColor: "#0F4C5C",
    profileVisibility: "private",
    auditExportEnabled: false
  };
}

export function validateTenantSettingsPatch(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    throw new Error("Tenant settings payload must be an object.");
  }

  const patch = {};

  if ("brandingColor" in input) {
    if (typeof input.brandingColor !== "string" || !/^#[0-9A-Fa-f]{6}$/.test(input.brandingColor)) {
      throw new Error("brandingColor must be a hex color string.");
    }
    patch.brandingColor = input.brandingColor;
  }

  if ("profileVisibility" in input) {
    if (!VALID_VISIBILITIES.has(input.profileVisibility)) {
      throw new Error("profileVisibility must be private or organization.");
    }
    patch.profileVisibility = input.profileVisibility;
  }

  if ("auditExportEnabled" in input) {
    if (typeof input.auditExportEnabled !== "boolean") {
      throw new Error("auditExportEnabled must be a boolean.");
    }
    patch.auditExportEnabled = input.auditExportEnabled;
  }

  return patch;
}

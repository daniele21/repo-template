import test from "node:test";
import assert from "node:assert/strict";
import { createTenantSettingsService } from "../packages/domain/src/tenant-settings-service.js";

test("tenant settings default to privacy-preserving values", async () => {
  const repository = createRepository();
  const service = createTenantSettingsService({ repository });

  const settings = await service.getTenantSettings("tenant-1");

  assert.deepEqual(settings, {
    brandingColor: "#0F4C5C",
    profileVisibility: "private",
    auditExportEnabled: false
  });
});

test("tenant settings update keeps explicit privacy settings", async () => {
  const repository = createRepository();
  const service = createTenantSettingsService({ repository });

  const settings = await service.updateTenantSettings("tenant-2", {
    brandingColor: "#135E96",
    profileVisibility: "organization",
    auditExportEnabled: true
  });

  assert.equal(settings.brandingColor, "#135E96");
  assert.equal(settings.profileVisibility, "organization");
  assert.equal(settings.auditExportEnabled, true);
});

function createRepository() {
  const store = new Map();

  return {
    async get(tenantId) {
      return store.get(tenantId);
    },
    async save(tenantId, settings) {
      store.set(tenantId, settings);
      return settings;
    }
  };
}

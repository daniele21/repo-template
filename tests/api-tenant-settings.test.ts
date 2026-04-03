import test from "node:test";
import assert from "node:assert/strict";
import { createApp } from "../apps/api/src/app.ts";
import { createInMemoryTenantSettingsRepository } from "../apps/api/src/repository/in-memory-tenant-settings-repository.ts";
import type { HttpRequestLike, JsonResponse } from "../apps/api/src/http.ts";

test("GET /tenants/:id/settings returns default tenant settings", async () => {
  const app = createApp(createInMemoryTenantSettingsRepository());
  const request = createRequest("GET", "http://localhost/tenants/acme/settings");

  const response = await app(request);

  assert.equal(response.statusCode, 200);
  const payload = JSON.parse(response.body);
  assert.equal(payload.data.profileVisibility, "private");
  assert.equal(payload.data.auditExportEnabled, false);
});

test("PUT /tenants/:id/settings validates and persists settings", async () => {
  const app = createApp(createInMemoryTenantSettingsRepository());
  const request = createRequest("PUT", "http://localhost/tenants/acme/settings", {
    brandingColor: "#4F6D7A",
    profileVisibility: "organization",
    auditExportEnabled: true
  });

  const response = await app(request);

  assert.equal(response.statusCode, 200);
  const payload = JSON.parse(response.body);
  assert.equal(payload.data.brandingColor, "#4F6D7A");
  assert.equal(payload.data.profileVisibility, "organization");
  assert.equal(payload.data.auditExportEnabled, true);
});

function createRequest(method: string, url: string, body?: unknown): HttpRequestLike {
  const payload = body ? [Buffer.from(JSON.stringify(body))] : [];

  return {
    method,
    url,
    async *[Symbol.asyncIterator]() {
      for (const chunk of payload) {
        yield chunk;
      }
    }
  };
}

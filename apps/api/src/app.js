import { createTenantSettingsService } from "../../../packages/domain/src/tenant-settings-service.js";
import { validateTenantSettingsPatch } from "../../../packages/contracts/src/tenant-settings-contract.js";
import { createJsonResponse, notFoundResponse, parseJsonBody } from "./http.js";

export function createApp(repository) {
  const service = createTenantSettingsService({ repository });

  return async function handleRequest(request) {
    const url = new URL(request.url, "http://localhost");
    const match = url.pathname.match(/^\/tenants\/([^/]+)\/settings$/);

    if (!match) {
      return notFoundResponse();
    }

    const tenantId = match[1];

    if (request.method === "GET") {
      const settings = await service.getTenantSettings(tenantId);
      return createJsonResponse(200, { data: settings });
    }

    if (request.method === "PUT") {
      const body = await parseJsonBody(request);
      const patch = validateTenantSettingsPatch(body);
      const settings = await service.updateTenantSettings(tenantId, patch);
      return createJsonResponse(200, { data: settings });
    }

    return createJsonResponse(405, { error: "Method not allowed" });
  };
}

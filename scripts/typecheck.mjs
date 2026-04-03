import { spawnSync } from "node:child_process";

const targets = [
  "apps/api/src/app.ts",
  "apps/api/src/http.ts",
  "apps/api/src/server.ts",
  "apps/api/src/repository/in-memory-tenant-settings-repository.ts",
  "packages/contracts/src/tenant-settings-contract.ts",
  "packages/domain/src/tenant-settings-service.ts",
  "packages/ui/src/index.ts",
  "packages/ui/src/theme-css.ts",
  "packages/ui/src/utils/escapeHtml.ts",
  "packages/ui/src/primitives/Button.ts",
  "packages/ui/src/primitives/Card.ts",
  "packages/ui/src/primitives/Input.ts",
  "packages/ui/src/patterns/PageHeader.ts",
  "packages/ui/src/patterns/EmptyState.ts",
  "packages/ui/src/tokens/index.ts",
  "packages/ui/src/tokens/primitives.ts",
  "packages/ui/src/tokens/semantic/light.ts",
  "packages/ui/src/tokens/semantic/dark.ts",
  "scripts/check-design-system.mjs",
  "tests/tenant-settings-service.test.ts",
  "tests/api-tenant-settings.test.ts",
  "tests/server-startup.test.ts",
  "tests/docs-check.test.ts",
  "tests/ui-theme-tokens.test.ts",
  "tests/check-design-system.test.ts"
];

const failures = [];

for (const target of targets) {
  const result = spawnSync(process.execPath, ["--experimental-transform-types", "--check", target], {
    cwd: process.cwd(),
    encoding: "utf8"
  });

  if (result.status !== 0) {
    failures.push(result.stderr.trim() || `Syntax check failed for ${target}`);
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n\n"));
  process.exit(1);
}

console.log(`Syntax and module entry checks passed for ${targets.length} files.`);

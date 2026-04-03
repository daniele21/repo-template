import { spawnSync } from "node:child_process";

const targets = [
  "apps/api/src/app.ts",
  "apps/api/src/http.ts",
  "apps/api/src/server.ts",
  "apps/api/src/repository/in-memory-tenant-settings-repository.ts",
  "packages/contracts/src/tenant-settings-contract.ts",
  "packages/domain/src/tenant-settings-service.ts",
  "packages/ui/src/button.ts",
  "packages/ui/src/index.ts",
  "packages/ui/src/tokens.ts",
  "tests/tenant-settings-service.test.ts",
  "tests/api-tenant-settings.test.ts",
  "tests/server-startup.test.ts",
  "tests/docs-check.test.ts"
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

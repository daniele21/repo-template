import { spawnSync } from "node:child_process";

const targets = [
  "apps/api/src/app.js",
  "apps/api/src/http.js",
  "apps/api/src/server.js",
  "apps/api/src/repository/in-memory-tenant-settings-repository.js",
  "packages/contracts/src/tenant-settings-contract.js",
  "packages/domain/src/tenant-settings-service.js",
  "packages/ui/src/button.js",
  "packages/ui/src/index.js",
  "packages/ui/src/tokens.js",
  "tests/tenant-settings-service.test.js",
  "tests/api-tenant-settings.test.js"
];

const failures = [];

for (const target of targets) {
  const result = spawnSync(process.execPath, ["--check", target], {
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

import { readFile } from "node:fs/promises";
import { join } from "node:path";

const files = [
  "README.md",
  "AGENTS.md",
  ".codex/instructions.md",
  ".codex/project-context.md",
  ".codex/review-checklists.md",
  ".codex/golden-paths.md",
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

for (const relativePath of files) {
  const content = await readFile(join(process.cwd(), relativePath), "utf8");
  const lines = content.split("\n");

  lines.forEach((line, index) => {
    if (/\s+$/.test(line)) {
      failures.push(`${relativePath}:${index + 1} has trailing whitespace`);
    }

    if (line.includes("\t")) {
      failures.push(`${relativePath}:${index + 1} contains a tab character`);
    }
  });
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Lint checks passed for ${files.length} files.`);

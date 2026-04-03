import { readFile } from "node:fs/promises";
import { join } from "node:path";

const files = [
  "README.md",
  "AGENTS.md",
  ".codex/instructions.md",
  ".codex/project-context.md",
  ".codex/review-checklists.md",
  ".codex/golden-paths.md",
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

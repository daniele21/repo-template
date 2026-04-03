import { readFile } from "node:fs/promises";
import { join } from "node:path";

const files = [
  "README.md",
  "AGENTS.md",
  ".codex/instructions.md",
  ".codex/project-context.md",
  ".codex/review-checklists.md",
  ".codex/golden-paths.md",
  ".codex/agents/ui-system-reviewer.toml",
  "apps/api/src/app.ts",
  "apps/api/src/http.ts",
  "apps/api/src/server.ts",
  "apps/api/src/repository/in-memory-tenant-settings-repository.ts",
  ".agents/skills/ux-design-system-enforcer/SKILL.md",
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
  "docs/03-ux-ui/ux-principles.md",
  "docs/03-ux-ui/design-tokens.md",
  "docs/03-ux-ui/theming-light-dark.md",
  "docs/03-ux-ui/component-primitives.md",
  "docs/03-ux-ui/ui-patterns.md",
  "docs/03-ux-ui/ui-review-checklist.md",
  "docs/06-ux-ui/design-system-rules.md",
  "CHANGELOG.md",
  "scripts/check-design-system.mjs",
  "tests/tenant-settings-service.test.ts",
  "tests/api-tenant-settings.test.ts",
  "tests/server-startup.test.ts",
  "tests/docs-check.test.ts",
  "tests/ui-theme-tokens.test.ts",
  "tests/check-design-system.test.ts"
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

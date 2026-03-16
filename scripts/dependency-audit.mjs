import { execFileSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const workspacePackageJsonPaths = execFileSync("git", ["ls-files"], {
  cwd: process.cwd(),
  encoding: "utf8"
})
  .split("\n")
  .map((value) => value.trim())
  .filter(Boolean)
  .filter((file) => file === "package.json" || file.endsWith("/package.json"));

function getDeclaredDependencies(packageJsonPath) {
  const raw = readFileSync(packageJsonPath, "utf8");
  const parsed = JSON.parse(raw);

  const deps = {
    ...parsed.dependencies,
    ...parsed.devDependencies,
    ...parsed.optionalDependencies,
    ...parsed.peerDependencies
  };

  return Object.keys(deps ?? {});
}

function main() {
  const repoRoot = process.cwd();

  const dependencyDeclarations = workspacePackageJsonPaths.flatMap((relativePath) => {
    const absolutePath = join(repoRoot, relativePath);

    if (!existsSync(absolutePath)) {
      return [];
    }

    const deps = getDeclaredDependencies(absolutePath);

    return deps.map((dep) => ({ dep, packageJson: relativePath }));
  });

  if (dependencyDeclarations.length === 0) {
    console.log("Dependency audit skipped: no third-party dependencies declared.");
    return;
  }

  if (!existsSync(join(repoRoot, "pnpm-lock.yaml"))) {
    console.error(
      [
        "Dependency audit required: third-party dependencies are declared but pnpm-lock.yaml is missing.",
        "Commit pnpm-lock.yaml and ensure CI runs pnpm audit (or an equivalent SCA/SAST gate).",
        `Declared deps: ${dependencyDeclarations.map((item) => `${item.dep} (${item.packageJson})`).join(", ")}`
      ].join("\n")
    );
    process.exit(1);
  }

  execFileSync("pnpm", ["audit", "--audit-level", "high"], {
    cwd: repoRoot,
    stdio: "inherit"
  });
}

main();

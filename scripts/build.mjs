import { cp, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";

const distRoot = join(process.cwd(), "dist");

await rm(distRoot, { recursive: true, force: true });
await mkdir(join(distRoot, "apps"), { recursive: true });
await mkdir(join(distRoot, "packages"), { recursive: true });

await cp(join(process.cwd(), "apps", "api"), join(distRoot, "apps", "api"), {
  recursive: true
});

await cp(join(process.cwd(), "packages", "contracts"), join(distRoot, "packages", "contracts"), {
  recursive: true
});

await cp(join(process.cwd(), "packages", "domain"), join(distRoot, "packages", "domain"), {
  recursive: true
});

await cp(join(process.cwd(), "packages", "ui"), join(distRoot, "packages", "ui"), {
  recursive: true
});

console.log("Build output written to dist/.");

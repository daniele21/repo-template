import { execFileSync } from "node:child_process";

function getChangedFiles() {
  const base = process.env.DOCS_CHECK_BASE;
  const head = process.env.DOCS_CHECK_HEAD ?? "HEAD";

  if (base) {
    return execFileSync("git", ["diff", "--name-only", `${base}...${head}`], {
      cwd: process.cwd(),
      encoding: "utf8"
    })
      .split("\n")
      .map((value) => value.trim())
      .filter(Boolean);
  }

  return execFileSync("git", ["ls-files"], {
    cwd: process.cwd(),
    encoding: "utf8"
  })
    .split("\n")
    .map((value) => value.trim())
    .filter(Boolean);
}

const changedFiles = getChangedFiles();
const codeTouched = changedFiles.some((file) => /^(apps|packages|services|infra)\//.test(file));
const docsTouched = changedFiles.some((file) => /^(docs\/|adr\/|CHANGELOG\.md$)/.test(file));

if (codeTouched && !docsTouched) {
  console.error("Code changes detected without docs, ADR, or changelog updates.");
  process.exit(1);
}

console.log("Docs check passed.");

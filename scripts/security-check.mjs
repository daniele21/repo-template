import { readFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";

const trackedFiles = execFileSync("git", ["ls-files"], {
  cwd: process.cwd(),
  encoding: "utf8"
})
  .split("\n")
  .map((value) => value.trim())
  .filter(Boolean);

const failures = [];
const secretPatterns = [
  /-----BEGIN (RSA|EC|OPENSSH|DSA) PRIVATE KEY-----/,
  /\bAKIA[0-9A-Z]{16}\b/,
  /\bghp_[A-Za-z0-9]{20,}\b/,
  /api[_-]?key\s*[:=]\s*["'][^"']{12,}["']/i,
  /secret\s*[:=]\s*["'][^"']{12,}["']/i
];
const piiLogPattern = /console\.(log|info|debug)\(([^)]*(email|phone|ssn|token|password|authorization|cookie)[^)]*)\)/i;

for (const file of trackedFiles) {
  if (file.startsWith(".git/")) {
    continue;
  }

  const content = await readFile(file, "utf8");

  if (secretPatterns.some((pattern) => pattern.test(content))) {
    failures.push(`${file} looks like it may contain a committed secret.`);
  }

  if (piiLogPattern.test(content)) {
    failures.push(`${file} appears to log sensitive or regulated values.`);
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Security checks passed.");

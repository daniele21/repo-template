import { execFileSync } from "node:child_process";

const CODE_PATH_PATTERN = /^(apps|packages|services|infra)\//;
const TENANT_PATH_PATTERN = /(tenant|multi-tenant)/i;
const PRIVACY_SECURITY_PATH_PATTERN =
  /(auth|privacy|security|gdpr|personal-data|data-governance|retention|deletion|export|transfer|subprocessor|vendor|logging|audit)/i;

const DOC_RULES = [
  {
    id: "code-change",
    description: "code changes require docs, ADR, or changelog updates",
    matchesCode: (file) => CODE_PATH_PATTERN.test(file),
    matchesDocs: (file) => /^(docs\/|adr\/|CHANGELOG\.md$)/.test(file)
  },
  {
    id: "architecture-change",
    description: "service and infra changes require architecture docs, ADRs, or changelog updates",
    matchesCode: (file) => /^(services|infra)\//.test(file),
    matchesDocs: (file) => /^(docs\/01-architecture\/|adr\/|CHANGELOG\.md$)/.test(file)
  },
  {
    id: "feature-shape-change",
    description: "app and shared-code changes require a spec, architecture doc, ADR, or changelog update",
    matchesCode: (file) => /^(apps|packages)\//.test(file),
    matchesDocs: (file) =>
      /^(docs\/specs\/|docs\/01-architecture\/|docs\/03-security\/|docs\/04-privacy-gdpr\/|adr\/|CHANGELOG\.md$)/.test(
        file
      )
  },
  {
    id: "multi-tenant-change",
    description: "tenant-related changes require multi-tenancy, privacy, spec, ADR, or changelog updates",
    matchesCode: (file) => CODE_PATH_PATTERN.test(file) && TENANT_PATH_PATTERN.test(file),
    matchesDocs: (file) =>
      /^(docs\/01-architecture\/multi-tenancy\.md|docs\/04-privacy-gdpr\/|docs\/specs\/|adr\/|CHANGELOG\.md$)/.test(
        file
      )
  },
  {
    id: "privacy-security-change",
    description: "privacy, security, or data-governance related changes require aligned privacy/security docs",
    matchesCode: (file) => CODE_PATH_PATTERN.test(file) && PRIVACY_SECURITY_PATH_PATTERN.test(file),
    matchesDocs: (file) =>
      /^(docs\/03-security\/|docs\/04-privacy-gdpr\/|docs\/05-data\/|docs\/specs\/|adr\/|CHANGELOG\.md$)/.test(file)
  }
];

export function getChangedFiles({ base = process.env.DOCS_CHECK_BASE, head = process.env.DOCS_CHECK_HEAD ?? "HEAD" } = {}) {
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

export function evaluateDocsPolicy(changedFiles) {
  const failures = [];

  for (const rule of DOC_RULES) {
    const touchedCodeFiles = changedFiles.filter((file) => rule.matchesCode(file));

    if (touchedCodeFiles.length === 0) {
      continue;
    }

    const hasRequiredDocs = changedFiles.some((file) => rule.matchesDocs(file));

    if (!hasRequiredDocs) {
      failures.push(
        `${rule.id}: ${rule.description}. Changed files: ${touchedCodeFiles.join(", ")}`
      );
    }
  }

  return failures;
}

function main() {
  const changedFiles = getChangedFiles();
  const failures = evaluateDocsPolicy(changedFiles);

  if (failures.length > 0) {
    console.error(failures.join("\n"));
    process.exit(1);
  }

  console.log("Docs check passed.");
}

if (process.argv[1] && new URL(`file://${process.argv[1]}`).href === import.meta.url) {
  main();
}

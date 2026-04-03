import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

const INCLUDED_DIRS = ["apps", "services", "packages"];

const EXCLUDED_PATH_PARTS = [
  `${path.sep}node_modules${path.sep}`,
  `${path.sep}dist${path.sep}`,
  `${path.sep}build${path.sep}`,
  `${path.sep}.next${path.sep}`,
  `${path.sep}coverage${path.sep}`,
  `${path.sep}packages${path.sep}ui${path.sep}src${path.sep}tokens${path.sep}`,
  `${path.sep}packages${path.sep}ui${path.sep}src${path.sep}theme-css.ts`,
  `${path.sep}packages${path.sep}contracts${path.sep}`,
  `${path.sep}packages${path.sep}domain${path.sep}`,
  `${path.sep}apps${path.sep}api${path.sep}`
];

const INCLUDED_EXTENSIONS = new Set([".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs"]);

const RAW_HEX = /#[0-9a-fA-F]{3,8}\b/g;
const RAW_RGB = /\brgba?\s*\(/g;
const RAW_HSL = /\bhsla?\s*\(/g;
const INLINE_STYLE_JSX = /\bstyle\s*=\s*\{\{/g;
const INLINE_STYLE_HTML = /\bstyle\s*=\s*["'`]/g;
const CSS_VAR_DECL = /--[a-zA-Z0-9-_]+\s*:/g;

function shouldSkip(filePath) {
  return EXCLUDED_PATH_PARTS.some((part) => filePath.includes(part));
}

function addViolations(filePath, label, matches, violations, root) {
  for (const match of matches) {
    violations.push({
      file: path.relative(root, filePath),
      rule: label,
      value: match
    });
  }
}

function checkFile(filePath, violations, root) {
  const content = fs.readFileSync(filePath, "utf8");

  addViolations(filePath, "raw-hex-color", content.match(RAW_HEX) ?? [], violations, root);
  addViolations(filePath, "raw-rgb-color", content.match(RAW_RGB) ?? [], violations, root);
  addViolations(filePath, "raw-hsl-color", content.match(RAW_HSL) ?? [], violations, root);
  addViolations(filePath, "inline-style-jsx", content.match(INLINE_STYLE_JSX) ?? [], violations, root);
  addViolations(filePath, "inline-style-html", content.match(INLINE_STYLE_HTML) ?? [], violations, root);
  addViolations(
    filePath,
    "local-css-variable-declaration",
    content.match(CSS_VAR_DECL) ?? [],
    violations,
    root
  );
}

function walk(dirPath, violations, root) {
  if (!fs.existsSync(dirPath)) {
    return;
  }

  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);

    if (shouldSkip(fullPath)) {
      continue;
    }

    if (entry.isDirectory()) {
      walk(fullPath, violations, root);
      continue;
    }

    if (!INCLUDED_EXTENSIONS.has(path.extname(entry.name))) {
      continue;
    }

    checkFile(fullPath, violations, root);
  }
}

export function evaluateDesignSystemPolicy({ root = ROOT } = {}) {
  const violations = [];

  for (const dir of INCLUDED_DIRS) {
    walk(path.join(root, dir), violations, root);
  }

  return violations;
}

function main() {
  const violations = evaluateDesignSystemPolicy();

  if (violations.length > 0) {
    console.error("\nDesign system policy check failed.\n");
    console.error(
      "Do not introduce raw colors, inline styles, or local CSS variable declarations outside the token system or approved UI infrastructure.\n"
    );

    for (const violation of violations) {
      console.error(`- ${violation.file} | ${violation.rule} | ${violation.value}`);
    }

    console.error("\nAllowed raw token location: packages/ui/src/tokens/\n");
    process.exit(1);
  }

  console.log("Design system policy check passed.");
}

if (process.argv[1] && new URL(`file://${process.argv[1]}`).href === import.meta.url) {
  main();
}

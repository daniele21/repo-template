import test from "node:test";
import assert from "node:assert/strict";
import { mkdir, mkdtemp, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { evaluateDesignSystemPolicy } from "../scripts/check-design-system.mjs";

test("flags raw visual values in scanned UI layers", async () => {
  const root = await mkdtemp(join(tmpdir(), "design-system-check-"));
  await mkdir(join(root, "apps", "web", "src"), { recursive: true });
  await writeFile(
    join(root, "apps", "web", "src", "page.tsx"),
    "export const page = '<div style=\"color:#FF0000\">Hello</div>';\n",
    "utf8"
  );

  const violations = evaluateDesignSystemPolicy({ root });

  assert.equal(violations.length, 2);
  assert.equal(violations[0]?.file, "apps/web/src/page.tsx");
  assert.match(violations.map((item) => item.rule).join(","), /raw-hex-color/);
  assert.match(violations.map((item) => item.rule).join(","), /inline-style-html/);
});

test("ignores allowed token files and excluded non-UI layers", async () => {
  const root = await mkdtemp(join(tmpdir(), "design-system-check-"));
  await mkdir(join(root, "packages", "ui", "src", "tokens"), { recursive: true });
  await mkdir(join(root, "packages", "domain", "src"), { recursive: true });
  await writeFile(
    join(root, "packages", "ui", "src", "tokens", "primitives.ts"),
    "export const red = '#FF0000';\n",
    "utf8"
  );
  await writeFile(
    join(root, "packages", "domain", "src", "value.ts"),
    "export const brandingColor = '#0F4C5C';\n",
    "utf8"
  );

  const violations = evaluateDesignSystemPolicy({ root });

  assert.deepEqual(violations, []);
});

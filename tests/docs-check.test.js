import test from "node:test";
import assert from "node:assert/strict";
import { evaluateDocsPolicy } from "../scripts/docs-check.mjs";

test("passes when code changes include a matching spec update", () => {
  const failures = evaluateDocsPolicy([
    "apps/api/src/app.js",
    "packages/domain/src/tenant-settings-service.js",
    "docs/specs/tenant-settings-demo-spec.md"
  ]);

  assert.deepEqual(failures, []);
});

test("fails when code changes have no docs companion updates", () => {
  const failures = evaluateDocsPolicy(["apps/api/src/app.js"]);

  assert.equal(failures.length, 2);
  assert.match(failures[0], /code-change/);
  assert.match(failures[1], /feature-shape-change/);
});

test("fails tenant changes that skip multi-tenant or privacy docs", () => {
  const failures = evaluateDocsPolicy([
    "packages/domain/src/tenant-settings-service.js",
    "docs/01-architecture/boundaries.md"
  ]);

  assert.equal(failures.length, 1);
  assert.match(failures[0], /multi-tenant-change/);
});

test("passes privacy-sensitive changes when privacy docs are updated", () => {
  const failures = evaluateDocsPolicy([
    "apps/api/src/repository/in-memory-tenant-settings-repository.js",
    "docs/04-privacy-gdpr/privacy-baseline.md"
  ]);

  assert.deepEqual(failures, []);
});

import test from "node:test";
import assert from "node:assert/strict";
import {
  createStartupErrorMessage,
  getPortCandidates
} from "../apps/api/src/server.js";

test("getPortCandidates falls back across a small port range when PORT is not explicit", () => {
  assert.deepEqual(getPortCandidates({ requestedPort: 3000, hasExplicitPort: false }).slice(0, 3), [
    3000,
    3001,
    3002
  ]);
});

test("getPortCandidates respects explicit PORT configuration", () => {
  assert.deepEqual(getPortCandidates({ requestedPort: 4100, hasExplicitPort: true }), [4100]);
});

test("createStartupErrorMessage explains how to recover from an explicit port conflict", () => {
  const message = createStartupErrorMessage({
    error: { code: "EADDRINUSE" },
    requestedPort: 3000,
    hasExplicitPort: true
  });

  assert.match(message, /PORT=3001 pnpm run dev/);
});

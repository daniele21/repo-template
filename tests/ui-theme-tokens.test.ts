import test from "node:test";
import assert from "node:assert/strict";
import { getThemeTokens, renderButton } from "../packages/ui/src/index.ts";

test("getThemeTokens returns both light and dark semantic themes", () => {
  const light = getThemeTokens("light");
  const dark = getThemeTokens("dark");

  assert.equal(light.bg.canvas, "#F8FAFC");
  assert.equal(dark.bg.canvas, "#0F172A");
  assert.ok(light.action.primary.bg);
  assert.ok(dark.action.primary.bg);
});

test("renderButton resolves semantic tokens for the selected theme", () => {
  const darkSecondaryButton = renderButton({
    label: "Open settings",
    tone: "secondary",
    themeMode: "dark"
  });

  assert.match(darkSecondaryButton, /background:#1E293B/);
  assert.match(darkSecondaryButton, /color:#F8FAFC/);
  assert.match(darkSecondaryButton, /border:1px solid #334155/);
});

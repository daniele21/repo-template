import test from "node:test";
import assert from "node:assert/strict";
import { getThemeTokens, renderButton, renderThemeStyleTag } from "../packages/ui/src/index.ts";

test("getThemeTokens returns both light and dark semantic themes", () => {
  const light = getThemeTokens("light");
  const dark = getThemeTokens("dark");

  assert.equal(light.bg.canvas, "#F8FAFC");
  assert.equal(dark.bg.canvas, "#0F172A");
  assert.ok(light.action.primary.bg);
  assert.ok(dark.action.primary.bg);
});

test("renderButton emits class-based markup for the selected theme", () => {
  const darkSecondaryButton = renderButton({
    label: "Open settings",
    tone: "secondary",
    themeMode: "dark"
  });

  assert.match(darkSecondaryButton, /class="ui-button ui-button--secondary"/);
  assert.match(darkSecondaryButton, /data-ui-theme="dark"/);
  assert.match(darkSecondaryButton, /type="button"/);
});

test("renderThemeStyleTag emits both light and dark theme selectors", () => {
  const styleTag = renderThemeStyleTag();

  assert.match(styleTag, /\[data-ui-theme="light"\]/);
  assert.match(styleTag, /\[data-ui-theme="dark"\]/);
  assert.match(styleTag, /--ui-action-primary-bg:/);
});

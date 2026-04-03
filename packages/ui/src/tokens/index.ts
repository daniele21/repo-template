import { primitives } from "./primitives.ts";
import { lightThemeTokens } from "./semantic/light.ts";
import { darkThemeTokens } from "./semantic/dark.ts";

export type ThemeMode = "light" | "dark";

export const themes = {
  light: lightThemeTokens,
  dark: darkThemeTokens
} as const;

export type SemanticThemeTokens = (typeof themes)["light"];

export const tokens = {
  primitives,
  themes
} as const;

export function getThemeTokens(mode: ThemeMode = "light"): SemanticThemeTokens {
  return themes[mode];
}

import { primitives } from "./tokens/primitives.ts";
import { getThemeTokens, type ThemeMode } from "./tokens/index.ts";

export type ButtonTone = "primary" | "secondary";

export interface RenderButtonInput {
  label: string;
  tone?: ButtonTone;
  themeMode?: ThemeMode;
}

export function renderButton({
  label,
  tone = "primary",
  themeMode = "light"
}: RenderButtonInput): string {
  const theme = getThemeTokens(themeMode);

  const tones = {
    primary: {
      background: theme.action.primary.bg,
      color: theme.action.primary.fg,
      border: theme.action.primary.bg
    },
    secondary: {
      background: theme.action.secondary.bg,
      color: theme.action.secondary.fg,
      border: theme.action.secondary.border
    }
  } as const;

  const style = tones[tone] ?? tones.primary;

  return `
    <button
      style="
        background:${style.background};
        color:${style.color};
        border:1px solid ${style.border};
        border-radius:${primitives.radius.md};
        padding:${primitives.spacing.sm} ${primitives.spacing.lg};
        font-family:${primitives.font.body};
        cursor:pointer;
      "
    >${label}</button>
  `.trim();
}

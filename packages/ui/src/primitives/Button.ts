import type { ThemeMode } from "../tokens/index.ts";
import { escapeHtml } from "../utils/escapeHtml.ts";

export type ButtonTone = "primary" | "secondary";

export interface RenderButtonInput {
  label: string;
  tone?: ButtonTone;
  themeMode?: ThemeMode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function renderButton({
  label,
  tone = "primary",
  themeMode = "light",
  disabled = false,
  type = "button"
}: RenderButtonInput): string {
  const safeLabel = escapeHtml(label);
  const disabledAttribute = disabled ? " disabled" : "";

  return `
<button
  class="ui-button ui-button--${tone}"
  data-ui-theme="${themeMode}"
  type="${type}"${disabledAttribute}
>
  ${safeLabel}
</button>
  `.trim();
}

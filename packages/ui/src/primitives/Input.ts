import type { ThemeMode } from "../tokens/index.ts";
import { escapeHtml } from "../utils/escapeHtml.ts";

export interface RenderInputInput {
  id: string;
  label: string;
  value?: string;
  placeholder?: string;
  hint?: string;
  error?: string;
  type?: "text" | "email" | "password" | "search" | "url";
  themeMode?: ThemeMode;
}

export function renderInput({
  id,
  label,
  value = "",
  placeholder = "",
  hint,
  error,
  type = "text",
  themeMode = "light"
}: RenderInputInput): string {
  const safeId = escapeHtml(id);
  const describedByIds = [hint ? `${safeId}-hint` : "", error ? `${safeId}-error` : ""].filter(Boolean);
  const describedByAttribute =
    describedByIds.length > 0 ? ` aria-describedby="${describedByIds.join(" ")}"` : "";
  const errorAttribute = error ? ' aria-invalid="true"' : "";

  const hintMarkup = hint
    ? `<p class="ui-field__hint" id="${safeId}-hint">${escapeHtml(hint)}</p>`
    : "";
  const errorMarkup = error
    ? `<p class="ui-field__error" id="${safeId}-error">${escapeHtml(error)}</p>`
    : "";

  return `
<div class="ui-field" data-ui-theme="${themeMode}">
  <label class="ui-field__label" for="${safeId}">${escapeHtml(label)}</label>
  <input
    class="ui-input"
    id="${safeId}"
    name="${safeId}"
    type="${type}"
    value="${escapeHtml(value)}"
    placeholder="${escapeHtml(placeholder)}"${describedByAttribute}${errorAttribute}
  />
  ${hintMarkup}
  ${errorMarkup}
</div>
  `.trim();
}

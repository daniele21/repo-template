import type { ThemeMode } from "../tokens/index.ts";
import { escapeHtml } from "../utils/escapeHtml.ts";

export interface RenderEmptyStateInput {
  title: string;
  description: string;
  action?: string;
  themeMode?: ThemeMode;
}

export function renderEmptyState({
  title,
  description,
  action = "",
  themeMode = "light"
}: RenderEmptyStateInput): string {
  const actionMarkup = action ? `<div class="ui-empty-state__action">${action}</div>` : "";

  return `
<section class="ui-empty-state" data-ui-theme="${themeMode}">
  <h2 class="ui-empty-state__title">${escapeHtml(title)}</h2>
  <p class="ui-empty-state__description">${escapeHtml(description)}</p>
  ${actionMarkup}
</section>
  `.trim();
}

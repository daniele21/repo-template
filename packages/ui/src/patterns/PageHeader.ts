import type { ThemeMode } from "../tokens/index.ts";
import { escapeHtml } from "../utils/escapeHtml.ts";

export interface RenderPageHeaderInput {
  title: string;
  description?: string;
  actions?: string;
  themeMode?: ThemeMode;
}

export function renderPageHeader({
  title,
  description,
  actions = "",
  themeMode = "light"
}: RenderPageHeaderInput): string {
  const descriptionMarkup = description
    ? `<p class="ui-page-header__description">${escapeHtml(description)}</p>`
    : "";
  const actionsMarkup = actions ? `<div class="ui-page-header__actions">${actions}</div>` : "";

  return `
<header class="ui-page-header" data-ui-theme="${themeMode}">
  <div class="ui-page-header__content">
    <h1 class="ui-page-header__title">${escapeHtml(title)}</h1>
    ${descriptionMarkup}
  </div>
  ${actionsMarkup}
</header>
  `.trim();
}

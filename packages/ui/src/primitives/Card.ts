import type { ThemeMode } from "../tokens/index.ts";
import { escapeHtml } from "../utils/escapeHtml.ts";

export interface RenderCardInput {
  title?: string;
  description?: string;
  content: string;
  themeMode?: ThemeMode;
}

export function renderCard({
  title,
  description,
  content,
  themeMode = "light"
}: RenderCardInput): string {
  const titleMarkup = title ? `<h2 class="ui-card__title">${escapeHtml(title)}</h2>` : "";
  const descriptionMarkup = description
    ? `<p class="ui-card__description">${escapeHtml(description)}</p>`
    : "";

  return `
<section class="ui-card" data-ui-theme="${themeMode}">
  ${titleMarkup}
  ${descriptionMarkup}
  ${content}
</section>
  `.trim();
}

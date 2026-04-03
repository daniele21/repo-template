import { themes } from "./tokens/index.ts";
import { primitives } from "./tokens/primitives.ts";

export function renderThemeStyleTag(): string {
  const light = themes.light;
  const dark = themes.dark;

  return `
<style>
[data-ui-theme="light"] {
  --ui-bg-canvas: ${light.bg.canvas};
  --ui-bg-surface: ${light.bg.surface};
  --ui-bg-surface-raised: ${light.bg.surfaceRaised};
  --ui-bg-surface-muted: ${light.bg.surfaceMuted};
  --ui-text-primary: ${light.text.primary};
  --ui-text-secondary: ${light.text.secondary};
  --ui-text-inverse: ${light.text.inverse};
  --ui-border-subtle: ${light.border.subtle};
  --ui-border-strong: ${light.border.strong};
  --ui-action-primary-bg: ${light.action.primary.bg};
  --ui-action-primary-bg-hover: ${light.action.primary.bgHover};
  --ui-action-primary-fg: ${light.action.primary.fg};
  --ui-action-secondary-bg: ${light.action.secondary.bg};
  --ui-action-secondary-bg-hover: ${light.action.secondary.bgHover};
  --ui-action-secondary-fg: ${light.action.secondary.fg};
  --ui-action-secondary-border: ${light.action.secondary.border};
  --ui-status-success-bg: ${light.status.success.bg};
  --ui-status-success-fg: ${light.status.success.fg};
  --ui-status-success-border: ${light.status.success.border};
  --ui-status-danger-bg: ${light.status.danger.bg};
  --ui-status-danger-fg: ${light.status.danger.fg};
  --ui-status-danger-border: ${light.status.danger.border};
  --ui-focus-ring: ${light.focus.ring};
}

[data-ui-theme="dark"] {
  --ui-bg-canvas: ${dark.bg.canvas};
  --ui-bg-surface: ${dark.bg.surface};
  --ui-bg-surface-raised: ${dark.bg.surfaceRaised};
  --ui-bg-surface-muted: ${dark.bg.surfaceMuted};
  --ui-text-primary: ${dark.text.primary};
  --ui-text-secondary: ${dark.text.secondary};
  --ui-text-inverse: ${dark.text.inverse};
  --ui-border-subtle: ${dark.border.subtle};
  --ui-border-strong: ${dark.border.strong};
  --ui-action-primary-bg: ${dark.action.primary.bg};
  --ui-action-primary-bg-hover: ${dark.action.primary.bgHover};
  --ui-action-primary-fg: ${dark.action.primary.fg};
  --ui-action-secondary-bg: ${dark.action.secondary.bg};
  --ui-action-secondary-bg-hover: ${dark.action.secondary.bgHover};
  --ui-action-secondary-fg: ${dark.action.secondary.fg};
  --ui-action-secondary-border: ${dark.action.secondary.border};
  --ui-status-success-bg: ${dark.status.success.bg};
  --ui-status-success-fg: ${dark.status.success.fg};
  --ui-status-success-border: ${dark.status.success.border};
  --ui-status-danger-bg: ${dark.status.danger.bg};
  --ui-status-danger-fg: ${dark.status.danger.fg};
  --ui-status-danger-border: ${dark.status.danger.border};
  --ui-focus-ring: ${dark.focus.ring};
}

[data-ui-theme] {
  color: var(--ui-text-primary);
  font-family: ${primitives.font.body};
}

.ui-card,
.ui-empty-state,
.ui-page-header,
.ui-field,
.ui-button {
  box-sizing: border-box;
}

.ui-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${primitives.spacing.sm};
  min-height: 40px;
  padding: ${primitives.spacing.sm} ${primitives.spacing.lg};
  border-radius: ${primitives.radius.md};
  border: 1px solid transparent;
  font: inherit;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 120ms ease, border-color 120ms ease, color 120ms ease;
}

.ui-button:focus-visible,
.ui-input:focus-visible {
  outline: 2px solid var(--ui-focus-ring);
  outline-offset: 2px;
}

.ui-button--primary {
  background: var(--ui-action-primary-bg);
  color: var(--ui-action-primary-fg);
  border-color: var(--ui-action-primary-bg);
}

.ui-button--primary:hover {
  background: var(--ui-action-primary-bg-hover);
  border-color: var(--ui-action-primary-bg-hover);
}

.ui-button--secondary {
  background: var(--ui-action-secondary-bg);
  color: var(--ui-action-secondary-fg);
  border-color: var(--ui-action-secondary-border);
}

.ui-button--secondary:hover {
  background: var(--ui-action-secondary-bg-hover);
}

.ui-button[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

.ui-card {
  background: var(--ui-bg-surface);
  color: var(--ui-text-primary);
  border: 1px solid var(--ui-border-subtle);
  border-radius: ${primitives.radius.lg};
  box-shadow: ${primitives.shadow.sm};
  padding: ${primitives.spacing.xl};
}

.ui-card__title {
  margin: 0 0 ${primitives.spacing.sm};
  font-size: 1rem;
  font-weight: 600;
}

.ui-card__description {
  margin: 0;
  color: var(--ui-text-secondary);
}

.ui-field {
  display: grid;
  gap: ${primitives.spacing.sm};
}

.ui-field__label {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--ui-text-primary);
}

.ui-field__hint {
  margin: 0;
  font-size: 0.875rem;
  color: var(--ui-text-secondary);
}

.ui-field__error {
  margin: 0;
  font-size: 0.875rem;
  color: var(--ui-status-danger-fg);
}

.ui-input {
  width: 100%;
  min-height: 40px;
  padding: ${primitives.spacing.sm} ${primitives.spacing.md};
  border-radius: ${primitives.radius.md};
  border: 1px solid var(--ui-border-strong);
  background: var(--ui-bg-surface);
  color: var(--ui-text-primary);
  font: inherit;
}

.ui-input::placeholder {
  color: var(--ui-text-secondary);
}

.ui-input[aria-invalid="true"] {
  border-color: var(--ui-status-danger-border);
}

.ui-page-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${primitives.spacing.lg};
  padding-bottom: ${primitives.spacing.lg};
  border-bottom: 1px solid var(--ui-border-subtle);
}

.ui-page-header__content {
  display: grid;
  gap: ${primitives.spacing.sm};
}

.ui-page-header__title {
  margin: 0;
  font-size: 1.5rem;
  line-height: 1.2;
}

.ui-page-header__description {
  margin: 0;
  max-width: 70ch;
  color: var(--ui-text-secondary);
}

.ui-page-header__actions {
  display: inline-flex;
  align-items: center;
  gap: ${primitives.spacing.sm};
  flex-wrap: wrap;
}

.ui-empty-state {
  display: grid;
  gap: ${primitives.spacing.md};
  justify-items: start;
  padding: ${primitives.spacing["2xl"]};
  border: 1px dashed var(--ui-border-strong);
  border-radius: ${primitives.radius.lg};
  background: var(--ui-bg-surface-muted);
}

.ui-empty-state__title {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--ui-text-primary);
}

.ui-empty-state__description {
  margin: 0;
  max-width: 60ch;
  color: var(--ui-text-secondary);
}

.ui-empty-state__action {
  margin-top: ${primitives.spacing.sm};
}
</style>
  `.trim();
}

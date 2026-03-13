import { tokens } from "./tokens.js";

export function renderButton({ label, tone = "primary" }) {
  const tones = {
    primary: {
      background: tokens.color.accent,
      color: "#FFFFFF"
    },
    secondary: {
      background: "#FFFFFF",
      color: tokens.color.ink
    }
  };

  const style = tones[tone] ?? tones.primary;

  return `
    <button
      style="
        background:${style.background};
        color:${style.color};
        border:1px solid ${tokens.color.border};
        border-radius:${tokens.radius.md};
        padding:${tokens.spacing.sm} ${tokens.spacing.md};
        font-family:${tokens.font.body};
        cursor:pointer;
      "
    >${label}</button>
  `.trim();
}

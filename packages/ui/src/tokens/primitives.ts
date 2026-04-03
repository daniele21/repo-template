export const primitives = {
  color: {
    neutral: {
      0: "#FFFFFF",
      50: "#F8FAFC",
      100: "#F1F5F9",
      200: "#E2E8F0",
      300: "#CBD5E1",
      400: "#94A3B8",
      500: "#64748B",
      600: "#475569",
      700: "#334155",
      800: "#1E293B",
      900: "#0F172A"
    },
    brand: {
      50: "#EFF6FF",
      100: "#DBEAFE",
      500: "#3B82F6",
      600: "#2563EB",
      700: "#1D4ED8"
    },
    success: {
      50: "#ECFDF5",
      100: "#D1FAE5",
      600: "#059669",
      700: "#047857"
    },
    warning: {
      50: "#FFFBEB",
      100: "#FEF3C7",
      600: "#D97706",
      700: "#B45309"
    },
    danger: {
      50: "#FEF2F2",
      100: "#FEE2E2",
      600: "#DC2626",
      700: "#B91C1C"
    }
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "32px"
  },
  radius: {
    sm: "6px",
    md: "10px",
    lg: "14px",
    pill: "999px"
  },
  shadow: {
    sm: "0 1px 2px rgba(15, 23, 42, 0.08)",
    md: "0 8px 24px rgba(15, 23, 42, 0.10)"
  },
  font: {
    body: "\"IBM Plex Sans\", ui-sans-serif, system-ui, sans-serif",
    mono: "\"IBM Plex Mono\", ui-monospace, monospace"
  }
} as const;

export type PrimitiveTokens = typeof primitives;

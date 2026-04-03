import { primitives } from "../primitives.ts";

export const darkThemeTokens = {
  bg: {
    canvas: primitives.color.neutral[900],
    surface: primitives.color.neutral[800],
    surfaceRaised: "#162033",
    surfaceMuted: "#111827"
  },
  text: {
    primary: primitives.color.neutral[50],
    secondary: primitives.color.neutral[300],
    inverse: primitives.color.neutral[900]
  },
  border: {
    subtle: "#243041",
    strong: "#334155"
  },
  action: {
    primary: {
      bg: primitives.color.brand[500],
      bgHover: primitives.color.brand[600],
      fg: primitives.color.neutral[0]
    },
    secondary: {
      bg: primitives.color.neutral[800],
      bgHover: "#243041",
      fg: primitives.color.neutral[50],
      border: "#334155"
    }
  },
  status: {
    success: {
      bg: "#052E24",
      fg: "#A7F3D0",
      border: "#065F46"
    },
    warning: {
      bg: "#3B2500",
      fg: "#FDE68A",
      border: "#92400E"
    },
    danger: {
      bg: "#3A1010",
      fg: "#FECACA",
      border: "#991B1B"
    }
  },
  focus: {
    ring: "#60A5FA"
  }
} as const;

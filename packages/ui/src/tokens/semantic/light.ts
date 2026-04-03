import { primitives } from "../primitives.ts";

export const lightThemeTokens = {
  bg: {
    canvas: primitives.color.neutral[50],
    surface: primitives.color.neutral[0],
    surfaceRaised: primitives.color.neutral[0],
    surfaceMuted: primitives.color.neutral[100]
  },
  text: {
    primary: primitives.color.neutral[900],
    secondary: primitives.color.neutral[600],
    inverse: primitives.color.neutral[0]
  },
  border: {
    subtle: primitives.color.neutral[200],
    strong: primitives.color.neutral[300]
  },
  action: {
    primary: {
      bg: primitives.color.brand[600],
      bgHover: primitives.color.brand[700],
      fg: primitives.color.neutral[0]
    },
    secondary: {
      bg: primitives.color.neutral[0],
      bgHover: primitives.color.neutral[100],
      fg: primitives.color.neutral[900],
      border: primitives.color.neutral[300]
    }
  },
  status: {
    success: {
      bg: primitives.color.success[50],
      fg: primitives.color.success[700],
      border: primitives.color.success[100]
    },
    warning: {
      bg: primitives.color.warning[50],
      fg: primitives.color.warning[700],
      border: primitives.color.warning[100]
    },
    danger: {
      bg: primitives.color.danger[50],
      fg: primitives.color.danger[700],
      border: primitives.color.danger[100]
    }
  },
  focus: {
    ring: primitives.color.brand[500]
  }
} as const;

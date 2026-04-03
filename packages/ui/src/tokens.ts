export interface DesignTokens {
  color: {
    canvas: string;
    ink: string;
    accent: string;
    accentStrong: string;
    border: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  radius: {
    sm: string;
    md: string;
  };
  font: {
    body: string;
    mono: string;
  };
}

export const tokens: DesignTokens = {
  color: {
    canvas: "#F4F7F5",
    ink: "#1F2933",
    accent: "#0F4C5C",
    accentStrong: "#135E96",
    border: "#D9E2EC"
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px"
  },
  radius: {
    sm: "6px",
    md: "10px"
  },
  font: {
    body: "\"IBM Plex Sans\", ui-sans-serif, system-ui, sans-serif",
    mono: "\"IBM Plex Mono\", ui-monospace, monospace"
  }
};

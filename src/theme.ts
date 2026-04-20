
export const colors = {
  primary:        "#F2B01E",
  background:     "#FAF8F5",
  surface:        "#FFFFFF",
  textPrimary:    "#2D2DDD",
  textSecondary:  "#6B7280",

  tile2:  "#EEE4DA",
  tile4:  "#EDE0C8",
  tile8:  "#F2B179",
  tile16: "#F59663",
  tile32: "#F67C5F",

  success: "#4CAF50",
  error:   "#E53935",
  info:    "#2196F3",
  warning: "#FFB300",
} as const;

export type ColorKey = keyof typeof colors;

// Accessibility: Font Scaling Base Definitions
export interface FontScaleConfig {
  minScale: number;
  maxScale: number;
  defaultScale: number;
  step: number;
}

export const DEFAULT_FONT_SCALE_CONFIG: FontScaleConfig = {
  minScale: 0.8,
  maxScale: 2.0,
  defaultScale: 1.0,
  step: 0.1
};

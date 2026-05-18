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

let currentScale: number = DEFAULT_FONT_SCALE_CONFIG.defaultScale;

export function getFontScale(): number {
  return currentScale;
}

export function setFontScale(newScale: number): void {
  currentScale = Math.max(DEFAULT_FONT_SCALE_CONFIG.minScale, Math.min(DEFAULT_FONT_SCALE_CONFIG.maxScale, newScale));
}

export function clampScale(scale: number, config: FontScaleConfig = DEFAULT_FONT_SCALE_CONFIG): number {
  return Math.min(Math.max(scale, config.minScale), config.maxScale);
}

export function resetFontScale(): void {
  currentScale = DEFAULT_FONT_SCALE_CONFIG.defaultScale;
}

export function calculateDynamicRem(basePx: number, scaleFactor: number): string {
  const scaledPx = basePx * scaleFactor;
  return (scaledPx / 16).toFixed(3) + 'rem';
}

export function scaleElementTree(root: HTMLElement, scale: number): void {
  root.style.fontSize = (scale * 100).toFixed(0) + '%';
  root.setAttribute('data-font-scale', scale.toString());
}

export function saveFontPreference(scale: number): void {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('user_font_scale', scale.toString());
    }
  } catch (err) {
    console.warn('Failed to save font scale preference to localStorage', err);
  }
}


// Persistent Font Scaling Controller
export function initFontScaleListener(): void {
  const saved = localStorage.getItem('adaptive_font_scale');
  if (saved) {
    document.documentElement.style.fontSize = `${saved}%`;
  }
}

export function setAndPersistScale(percent: number): void {
  const bounded = Math.max(80, Math.min(220, percent));
  document.documentElement.style.fontSize = `${bounded}%`;
  localStorage.setItem('adaptive_font_scale', bounded.toString());
}

// Accessibility Display Presets & Contrast Profiles
export interface ThemePreset {
  id: string;
  label: string;
  backgroundColor: string;
  textColor: string;
  linkColor: string;
  fontSizeMultiplier: number;
  lineHeight: number;
  letterSpacingEm: number;
}

export const ACCESSIBILITY_PRESETS: Record<string, ThemePreset> = {
  highContrastDark: {
    id: 'highContrastDark',
    label: 'High Contrast (Dark)',
    backgroundColor: '#000000',
    textColor: '#FFFF00',
    linkColor: '#00FFFF',
    fontSizeMultiplier: 1.15,
    lineHeight: 1.8,
    letterSpacingEm: 0.05
  },
  highContrastLight: {
    id: 'highContrastLight',
    label: 'High Contrast (Light)',
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
    linkColor: '#0000EE',
    fontSizeMultiplier: 1.15,
    lineHeight: 1.8,
    letterSpacingEm: 0.05
  },
  dyslexiaFriendly: {
    id: 'dyslexiaFriendly',
    label: 'Dyslexia Enhanced Layout',
    backgroundColor: '#F7F3E9',
    textColor: '#2C3E50',
    linkColor: '#2980B9',
    fontSizeMultiplier: 1.25,
    lineHeight: 2.0,
    letterSpacingEm: 0.12
  },
  calmFocus: {
    id: 'calmFocus',
    label: 'Calm Reduced Stimulation',
    backgroundColor: '#EAEAEA',
    textColor: '#333333',
    linkColor: '#555555',
    fontSizeMultiplier: 1.1,
    lineHeight: 1.6,
    letterSpacingEm: 0.02
  }
};

export function applyThemePreset(presetId: string): boolean {
  const preset = ACCESSIBILITY_PRESETS[presetId];
  if (!preset) return false;

  const root = document.documentElement;
  root.style.setProperty('--bg-primary', preset.backgroundColor);
  root.style.setProperty('--text-primary', preset.textColor);
  root.style.setProperty('--link-primary', preset.linkColor);
  root.style.setProperty('--font-scale', preset.fontSizeMultiplier.toString());
  root.style.setProperty('--line-height', preset.lineHeight.toString());
  root.style.setProperty('--letter-spacing', `${preset.letterSpacingEm}em`);
  
  localStorage.setItem('user-a11y-preset', presetId);
  return true;
}

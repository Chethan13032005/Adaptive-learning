// Accessibility: High Contrast Themes
export interface ContrastTheme {
  id: string;
  name: string;
  background: string;
  foreground: string;
  accent: string;
  border: string;
}

export const CONTRAST_THEMES: Record<string, ContrastTheme> = {
  highContrastDark: {
    id: 'hc-dark',
    name: 'High Contrast Dark',
    background: '#000000',
    foreground: '#FFFFFF',
    accent: '#FFFF00',
    border: '#FFFFFF'
  },
  highContrastLight: {
    id: 'hc-light',
    name: 'High Contrast Light',
    background: '#FFFFFF',
    foreground: '#000000',
    accent: '#0000EE',
    border: '#000000'
  },
  monochrome: {
    id: 'mono',
    name: 'Monochrome Grayscale',
    background: '#121212',
    foreground: '#E0E0E0',
    accent: '#FFFFFF',
    border: '#757575'
  }
};

export function getAvailableThemes(): ContrastTheme[] {
  return Object.values(CONTRAST_THEMES);
}

export function applyHighContrastDark(target: HTMLElement = document.documentElement): void {
  const theme = CONTRAST_THEMES.highContrastDark;
  target.style.setProperty('--bg-primary', theme.background);
  target.style.setProperty('--text-primary', theme.foreground);
  target.style.setProperty('--accent-color', theme.accent);
  target.classList.add('theme-hc-dark');
  target.classList.remove('theme-hc-light', 'theme-mono');
}

export function applyHighContrastLight(target: HTMLElement = document.documentElement): void {
  const theme = CONTRAST_THEMES.highContrastLight;
  target.style.setProperty('--bg-primary', theme.background);
  target.style.setProperty('--text-primary', theme.foreground);
  target.style.setProperty('--accent-color', theme.accent);
  target.classList.add('theme-hc-light');
  target.classList.remove('theme-hc-dark', 'theme-mono');
}

export function applyMonochrome(target: HTMLElement = document.documentElement): void {
  const theme = CONTRAST_THEMES.monochrome;
  target.style.setProperty('--bg-primary', theme.background);
  target.style.setProperty('--text-primary', theme.foreground);
  target.style.setProperty('--accent-color', theme.accent);
  target.classList.add('theme-mono');
  target.classList.remove('theme-hc-dark', 'theme-hc-light');
}

export function getLuminance(hexColor: string): number {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16) / 255;
  const g = parseInt(hex.substr(2, 2), 16) / 255;
  const b = parseInt(hex.substr(4, 2), 16) / 255;
  const a = [r, g, b].map(v => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export function validateContrastRatio(c1: string, c2: string): { ratio: number; meetsAA: boolean; meetsAAA: boolean } {
  const l1 = getLuminance(c1);
  const l2 = getLuminance(c2);
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  return {
    ratio: parseFloat(ratio.toFixed(2)),
    meetsAA: ratio >= 4.5,
    meetsAAA: ratio >= 7.0
  };
}

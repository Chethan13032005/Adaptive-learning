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

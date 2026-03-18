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

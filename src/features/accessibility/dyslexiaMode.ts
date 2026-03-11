// Accessibility: Dyslexia Friendly Mode Utilities
export interface DyslexiaConfig {
  fontFamily: string;
  letterSpacing: string;
  wordSpacing: string;
  lineHeight: string;
}

export const OPENDYSLEXIC_CONFIG: DyslexiaConfig = {
  fontFamily: '"OpenDyslexic", "Comic Sans MS", sans-serif',
  letterSpacing: '0.12em',
  wordSpacing: '0.16em',
  lineHeight: '1.8'
};

export function enableDyslexiaFont(target: HTMLElement = document.body): void {
  target.classList.add('dyslexia-mode-active');
  target.style.fontFamily = OPENDYSLEXIC_CONFIG.fontFamily;
  target.style.letterSpacing = OPENDYSLEXIC_CONFIG.letterSpacing;
  target.style.wordSpacing = OPENDYSLEXIC_CONFIG.wordSpacing;
}

export function disableDyslexiaFont(target: HTMLElement = document.body): void {
  target.classList.remove('dyslexia-mode-active');
  target.style.fontFamily = '';
  target.style.letterSpacing = '';
  target.style.wordSpacing = '';
}

export function isDyslexiaFontActive(target: HTMLElement = document.body): boolean {
  return target.classList.contains('dyslexia-mode-active');
}

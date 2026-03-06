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

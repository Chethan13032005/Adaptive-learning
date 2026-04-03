// Accessibility: Reduced Motion Support
export interface MotionPreferences {
  disableTransitions: boolean;
  disableParallax: boolean;
  reducedFramerates: boolean;
}

export const DEFAULT_MOTION_PREFS: MotionPreferences = {
  disableTransitions: true,
  disableParallax: true,
  reducedFramerates: false
};

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function disableCSSAnimations(target: HTMLElement = document.documentElement): void {
  target.classList.add('reduce-motion');
  const style = target.style;
  style.setProperty('--animation-duration', '0.001s');
  style.setProperty('--transition-duration', '0.001s');
}

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

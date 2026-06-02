// Tiered Hint Generator for Interactive Quizzes
export interface HintTiers {
  tier1: string; // Subtle clue
  tier2: string; // Conceptual framework
  tier3: string; // Direct formulation step
}

export const HINT_REGISTRY: Record<string, HintTiers> = {
  'm-calc-001': {
    tier1: 'Recall the logarithmic identity ln(a*b) = ln(a) + ln(b) before differentiating.',
    tier2: 'Apply the chain rule d/dx[ln(u)] = (1/u) * u'.',
    tier3: 'Here u = 3x^2, so u' = 6x. The ratio is 6x / 3x^2.'
  },
  'm-alg-002': {
    tier1: 'Express both sides of the equation with base 2.',
    tier2: '2^6 equals 64. Equate the exponents.',
    tier3: 'Set 2x = 6 and divide by 2.'
  }
};

export function getTierOneHint(questionId: string): string {
  return HINT_REGISTRY[questionId]?.tier1 || 'Think carefully about the foundational definitions of the topic.';
}

export function getTierTwoHint(questionId: string): string {
  return HINT_REGISTRY[questionId]?.tier2 || 'Consider which governing rule or law applies to this setup.';
}

export function getTierThreeHint(questionId: string): string {
  return HINT_REGISTRY[questionId]?.tier3 || 'Check the formula reference table for exact mathematical steps.';
}

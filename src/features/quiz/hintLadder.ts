// Adaptive Multi-Tier Hint Generation System
export interface HintStep {
  level: number;
  penaltyRatio: number;
  hintText: string;
}

export class HintLadderGenerator {
  public static generateLadder(questionSubject: string, keyConcept: string, correctAnswer: string): HintStep[] {
    return [
      {
        level: 1,
        penaltyRatio: 0.10,
        hintText: `Focus on fundamental concepts related to ${questionSubject}. Think about how ${keyConcept} functions.`
      },
      {
        level: 2,
        penaltyRatio: 0.25,
        hintText: `Recall that ${keyConcept} excludes unrelated outliers. Check terms closely associated with the target domain.`
      },
      {
        level: 3,
        penaltyRatio: 0.50,
        hintText: `The correct answer starts with the letter '${correctAnswer.charAt(0)}' and contains approximately ${correctAnswer.length} characters.`
      }
    ];
  }

  public static calculateAwardedScore(basePoints: number, hintsUsed: number): number {
    if (hintsUsed <= 0) return basePoints;
    if (hintsUsed === 1) return Math.round(basePoints * 0.90);
    if (hintsUsed === 2) return Math.round(basePoints * 0.75);
    return Math.round(basePoints * 0.50);
  }
}

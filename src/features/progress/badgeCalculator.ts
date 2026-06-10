// Progress Badge and Level Calculation Engine
export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  unlockedAt?: string;
}

export const BADGE_DEFINITIONS: Record<string, Badge> = {
  streak_bronze: { id: 'streak_bronze', name: 'Consistent Scholar', icon: '🥉', description: 'Maintained a 3-day study streak.' },
  streak_silver: { id: 'streak_silver', name: 'Dedicated Learner', icon: '🥈', description: 'Maintained a 7-day study streak.' },
  streak_gold: { id: 'streak_gold', name: 'Master of Habit', icon: '🥇', description: 'Maintained a 30-day study streak.' },
  accuracy_sharpshooter: { id: 'accuracy_sharpshooter', name: 'Sharpshooter', icon: '🎯', description: 'Scored 90%+ in 5 consecutive quizzes.' },
  speed_lightning: { id: 'speed_lightning', name: 'Quick Thinker', icon: '⚡', description: 'Answered 10 questions under 15s each.' }
};

export function calculateStreakBadge(currentStreakDays: number): Badge | null {
  if (currentStreakDays >= 30) return BADGE_DEFINITIONS.streak_gold;
  if (currentStreakDays >= 7) return BADGE_DEFINITIONS.streak_silver;
  if (currentStreakDays >= 3) return BADGE_DEFINITIONS.streak_bronze;
  return null;
}

export function calculateAccuracyBadge(recentScores: number[]): Badge | null {
  if (recentScores.length < 5) return null;
  const last5 = recentScores.slice(-5);
  const average = last5.reduce((sum, s) => sum + s, 0) / 5;
  return average >= 90 ? BADGE_DEFINITIONS.accuracy_sharpshooter : null;
}

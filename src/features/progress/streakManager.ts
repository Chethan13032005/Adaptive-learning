// Study Session Streak & Weekly Milestone Calculator
export interface StreakStatus {
  currentStreakDays: number;
  longestStreakDays: number;
  lastActiveDate: string;
  isStreakActiveToday: boolean;
  earnedBadges: string[];
}

export class StreakManager {
  private storageKey = 'adaptive_user_streak';

  public recordActivity(): StreakStatus {
    const today = new Date().toISOString().split('T')[0];
    const status = this.getStreakStatus();

    if (status.lastActiveDate === today) {
      status.isStreakActiveToday = true;
      return status;
    }

    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (status.lastActiveDate === yesterday) {
      status.currentStreakDays += 1;
    } else {
      status.currentStreakDays = 1;
    }

    if (status.currentStreakDays > status.longestStreakDays) {
      status.longestStreakDays = status.currentStreakDays;
    }

    status.lastActiveDate = today;
    status.isStreakActiveToday = true;
    localStorage.setItem(this.storageKey, JSON.stringify(status));
    return status;
  }

  public getStreakStatus(): StreakStatus {
    const raw = localStorage.getItem(this.storageKey);
    if (!raw) {
      return {
        currentStreakDays: 0,
        longestStreakDays: 0,
        lastActiveDate: '',
        isStreakActiveToday: false,
        earnedBadges: []
      };
    }
    return JSON.parse(raw);
  }
}

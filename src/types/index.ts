export interface UserPreferences {
    preferredLearningStyle: 'visual' | 'auditory' | 'kinesthetic';
    preferredContentFormat: 'text' | 'video' | 'interactive';
    difficultyLevel: 'easy' | 'medium' | 'hard';
}

export interface EmotionData {
    emotion: string;
    intensity: number;
    timestamp: Date;
}

export interface EngagementMetrics {
    timeSpent: number; // in seconds
    interactionCount: number;
    engagementLevel: 'low' | 'medium' | 'high';
}
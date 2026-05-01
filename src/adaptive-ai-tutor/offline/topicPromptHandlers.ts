// Topic Prompt Handlers for Offline Mode
export interface ParsedPrompt {
  raw: string;
  intent: 'question' | 'explanation' | 'formula' | 'quiz' | 'study_tip';
  keywords: string[];
}

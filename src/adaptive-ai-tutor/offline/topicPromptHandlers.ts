// Topic Prompt Handlers for Offline Mode
export interface ParsedPrompt {
  raw: string;
  intent: 'question' | 'explanation' | 'formula' | 'quiz' | 'study_tip';
  keywords: string[];
}

export function parsePromptIntent(prompt: string): ParsedPrompt['intent'] {
  const p = prompt.toLowerCase();
  if (p.includes('formula') || p.includes('equation')) return 'formula';
  if (p.includes('quiz') || p.includes('test me') || p.includes('practice')) return 'quiz';
  if (p.includes('study') || p.includes('memorize') || p.includes('schedule')) return 'study_tip';
  if (p.includes('explain') || p.includes('why') || p.includes('how')) return 'explanation';
  return 'question';
}

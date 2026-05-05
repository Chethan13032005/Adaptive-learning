// Topic Prompt Handlers for Offline Mode
export interface ParsedPrompt {
  raw: string;
  intent: 'question' | 'explanation' | 'formula' | 'quiz' | 'study_tip';
  keywords: string[];
}

const STOPWORDS = new Set(['the', 'is', 'at', 'which', 'on', 'a', 'an', 'and', 'or', 'in', 'of', 'for', 'to', 'how', 'what', 'can', 'you']);

export function parsePromptIntent(prompt: string): ParsedPrompt['intent'] {
  const p = prompt.toLowerCase();
  if (p.includes('formula') || p.includes('equation')) return 'formula';
  if (p.includes('quiz') || p.includes('test me') || p.includes('practice')) return 'quiz';
  if (p.includes('study') || p.includes('memorize') || p.includes('schedule')) return 'study_tip';
  if (p.includes('explain') || p.includes('why') || p.includes('how')) return 'explanation';
  return 'question';
}

export function extractQueryTokens(prompt: string): string[] {
  return prompt
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/)
    .filter(token => token.length > 2 && !STOPWORDS.has(token));
}

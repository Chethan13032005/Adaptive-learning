// Topic Prompt Handlers for Offline Mode
import { STEM_TEMPLATES, HUMANITIES_TEMPLATES, FallbackTemplate } from './fallbackTemplates';

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

export function calculateTokenMatchScore(tokens: string[], candidateList: string[]): number {
  if (tokens.length === 0 || candidateList.length === 0) return 0;
  let matches = 0;
  const candidateLower = candidateList.map(c => c.toLowerCase());
  for (const t of tokens) {
    if (candidateLower.some(c => c.includes(t) || t.includes(c))) {
      matches += 1;
    }
  }
  return matches / tokens.length;
}

export function matchCachedTopic(prompt: string): FallbackTemplate | null {
  const tokens = extractQueryTokens(prompt);
  const allTemplates: FallbackTemplate[] = [...Object.values(STEM_TEMPLATES), ...Object.values(HUMANITIES_TEMPLATES)];
  let bestTemplate: FallbackTemplate | null = null;
  let maxScore = 0;
  for (const tmpl of allTemplates) {
    const score = calculateTokenMatchScore(tokens, [tmpl.topic, ...tmpl.keyConcepts]);
    if (score > maxScore && score > 0.15) {
      maxScore = score;
      bestTemplate = tmpl;
    }
  }
  return bestTemplate;
}

export function generateOfflineResponse(prompt: string): { reply: string; source: string; isOfflineFallback: boolean } {
  const template = matchCachedTopic(prompt);
  if (!template) {
    return {
      reply: 'You are currently in offline mode. For full generative AI reasoning, please reconnect to the network. Try asking about Calculus, Physics, Chemistry, Biology, History, or Algorithms.',
      source: 'offline_generic',
      isOfflineFallback: true
    };
  }
  const reply = `[Offline AI Tutor - ${template.topic}]
${template.summary}

Key Concepts:
- ${template.keyConcepts.join('\n- ')}`;
  return {
    reply,
    source: template.topic,
    isOfflineFallback: true
  };
}

// Offline Learning Memory & Prompt Response Cache
export interface CachedInteraction {
  topicId: string;
  questionHash: string;
  responseBody: string;
  confidenceScore: number;
  timestamp: number;
}

export class OfflineTutorCache {
  private cachePrefix = 'adaptive_tutor_';

  public saveResponse(topicId: string, query: string, response: string): void {
    const key = this.generateHash(query);
    const item: CachedInteraction = {
      topicId,
      questionHash: key,
      responseBody: response,
      confidenceScore: 0.95,
      timestamp: Date.now()
    };
    try {
      localStorage.setItem(`${this.cachePrefix}${topicId}_${key}`, JSON.stringify(item));
    } catch (e) {
      console.warn('Storage quota exceeded');
    }
  }

  public findCachedResponse(topicId: string, query: string): CachedInteraction | null {
    const key = this.generateHash(query);
    const raw = localStorage.getItem(`${this.cachePrefix}${topicId}_${key}`);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as CachedInteraction;
    } catch {
      return null;
    }
  }

  private generateHash(str: string): string {
    let hash = 0;
    const clean = str.toLowerCase().trim();
    for (let i = 0; i < clean.length; i++) {
      hash = (hash << 5) - hash + clean.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash).toString(36);
  }
}

import fetch from 'node-fetch';
import { HfInference } from '@huggingface/inference';

export type UserPreferences = { mode: 'audio' | 'visual' | 'structured' };

class MultiModalTeachingAgent {
    hf: HfInference;

    constructor() {
        // HuggingFace Inference API (no key needed for some endpoints, but you can use a free key for higher limits)
        this.hf = new HfInference(process.env.HF_API_KEY || "");
    }

    async fetchLessons(topic: string) {
        // Example: Fetch summary from Wikipedia API (open, no key needed)
        const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(topic)}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('Lesson fetch failed');
        const data = await res.json();
        return data.extract;
    }

    async adaptContent(content: string, userPreferences: UserPreferences) {
        if (userPreferences.mode === 'audio') {
            // Use HuggingFace TTS (free tier)
            const audio = await this.hf.textToSpeech({
                model: 'facebook/fastspeech2-en-ljspeech',
                inputs: content
            });
            return { type: 'audio', data: audio.audio };
        }
        if (userPreferences.mode === 'visual') {
            // Return content as markdown with a simple image (placeholder)
            return { type: 'visual', data: `![Visual Aid](https://placehold.co/400x200?text=${encodeURIComponent(content.slice(0,20))})\n\n${content}` };
        }
        // Structured text (for autism)
        return { type: 'structured', data: `**Structured Lesson:**\n\n${content}` };
    }

    configurePrompts() {
        // Placeholder for prompt configuration logic
        return "Prompts configured!";
    }
}

export default MultiModalTeachingAgent;
export class PeerAgent {
    name: string;
    constructor(name: string = "Buddy") {
        this.name = name;
    }
    async askQuestion(topic: string) {
        return `Hey! Can you explain "${topic}" to me?`;
    }
    async solvePuzzle(puzzle: string) {
        return `Let's solve this together: ${puzzle}`;
    }
}
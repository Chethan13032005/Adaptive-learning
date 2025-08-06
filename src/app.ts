import express from 'express';
import { setRoutes } from './routes';
import { MainController } from './controllers';
import MultiModalTeachingAgent, { UserPreferences } from './features/multimodal-teaching';
import { analyzeEngagement } from './features/emotion-engagement-sensing';
import { PeerAgent } from './features/gamified-peer-agent';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up routes
setRoutes(app);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

async function main() {
    const agent = new MultiModalTeachingAgent();
    const peer = new PeerAgent();

    // Demo: fetch and adapt a lesson
    const topic = "Fractions";
    const lesson = await agent.fetchLessons(topic);

    // Simulate user preference
    const userPref: UserPreferences = { mode: 'visual' };
    const adapted = await agent.adaptContent(lesson, userPref);

    // Simulate engagement
    const engagement = analyzeEngagement(10, 'positive');

    // Peer agent interaction
    const buddyQ = await peer.askQuestion(topic);

    console.log("Lesson:", lesson);
    console.log("Adapted:", adapted);
    console.log("Engagement:", engagement);
    console.log("Buddy says:", buddyQ);
}

main().catch(console.error);
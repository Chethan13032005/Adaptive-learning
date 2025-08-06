# Adaptive Neurodiverse AI Tutor

## Overview
The Adaptive Neurodiverse AI Tutor is an innovative educational tool designed to provide personalized learning experiences for neurodiverse learners. By leveraging advanced AI techniques, this tutor adapts its teaching methods to suit individual preferences and needs, ensuring an engaging and effective learning journey.

## Features

- Multi-modal teaching agent (audio, visual, structured)
- Emotion & engagement sensing (basic demo)
- Gamified peer agent (AI buddy)

## Usage

1. Install dependencies:  
   `npm install`
2. Run the demo:  
   `npm start`

## API Keys

- For HuggingFace TTS, you can use the free tier or set `HF_API_KEY` in your environment.

## Project Structure
```
adaptive-ai-tutor
├── src
│   ├── app.ts
│   ├── features
│   │   ├── multimodal-teaching
│   │   │   └── index.ts
│   │   ├── emotion-engagement-sensing
│   │   │   └── index.ts
│   │   └── gamified-peer-agent
│   │       └── index.ts
│   ├── controllers
│   │   └── index.ts
│   ├── routes
│   │   └── index.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/adaptive-ai-tutor.git
   ```
2. Navigate to the project directory:
   ```
   cd adaptive-ai-tutor
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Compile the TypeScript files:
   ```
   npm run build
   ```
5. Start the application:
   ```
   npm start
   ```

## Usage Guidelines
- Access the API endpoints defined in the routes to interact with the AI tutor.
- Customize user preferences to tailor the learning experience.
- Monitor engagement metrics to assess the effectiveness of the tutoring sessions.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
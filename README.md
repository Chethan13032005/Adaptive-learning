
# Adaptive Neurodiverse AI Tutor

An adaptive learning prototype designed to explore multimodal teaching, personalized lesson presentation, learner engagement signals, and gamified peer interactions for neurodiverse learners.

## Overview

Adaptive Neurodiverse AI Tutor explores how learning content can be adapted to different learner preferences through audio, visual, and structured-text presentation.

The prototype combines external educational content retrieval, optional Hugging Face inference, lightweight engagement classification, and a conversational peer-learning agent.

## Key Features

- **Multimodal Learning:** Supports audio, visual, and structured-text lesson presentation.
- **Educational Content Retrieval:** Fetches topic summaries through the Wikipedia REST API.
- **AI Integration:** Integrates Hugging Face inference for text-to-speech generation.
- **Engagement Classification:** Uses response time and sentiment inputs to classify learner engagement.
- **Peer Learning Agent:** Provides question-based interactions and collaborative puzzle prompts.
- **Extensible Architecture:** Separates teaching, engagement analysis, and peer interaction into feature modules.

## Tech Stack

| Category | Technologies |
|---|---|
| Language | TypeScript |
| Runtime | Node.js |
| Server | Express.js (imported in source) |
| AI Integration | Hugging Face Inference |
| HTTP Client | node-fetch |
| Educational Content | Wikipedia REST API |
| Development Tools | ts-node, TypeScript |

## Project Structure

```text
Adaptive-learning/
│
├── src/
│   ├── app.ts
│   │
│   └── features/
│       ├── multimodal-teaching/
│       │   └── index.ts
│       │
│       ├── emotion-engagement-sensing/
│       │   └── index.ts
│       │
│       └── gamified-peer-agent/
│           └── index.ts
│
├── package.json
├── package-lock.json
├── tsconfig.json
├── README.md
└── assets/
    └── preview.png
```

## Implementation Details

### 1. Multimodal Teaching Agent

The teaching module retrieves educational summaries using the Wikipedia REST API and adapts the returned content according to learner preferences.

Supported modes:

- Audio: Text-to-speech through Hugging Face inference.
- Visual: Markdown-formatted content with a visual-aid placeholder.
- Structured: Structured-text lesson presentation.

### 2. Engagement Analysis

The engagement module evaluates response time and sentiment inputs.

It classifies engagement into three categories:

- Engaged
- Frustrated
- Distracted

The current implementation uses rule-based classification rather than camera-based emotion recognition.

### 3. Gamified Peer Agent

The peer agent provides simple interactive learning prompts, including:

- Topic-based questions.
- Collaborative puzzle prompts.
- Conversational peer-learning interactions.

## Getting Started

### Prerequisites

- Node.js
- npm

### Clone the Repository

```bash
git clone https://github.com/Chethan13032005/Adaptive-learning.git

cd Adaptive-learning
```

### Install Dependencies

```bash
npm install
```

### Environment Configuration

The teaching module optionally reads the following environment variable:

```env
HF_API_KEY=your_huggingface_api_key
```

Some Hugging Face inference endpoints may require authentication.

### Available Commands

```bash
# Run the configured TypeScript application entry point
npm start

# Compile TypeScript
npm run build
```

Note: The current repository has unresolved startup dependencies and imports that need to be addressed before these commands can be considered a verified working setup. See the repository audit below.

## System Architecture

<img width="600" height="400" alt="mermaid-diagram" src="https://github.com/user-attachments/assets/6d82872c-43f4-4d31-bd0d-8a1cf09321c0" />

## Illustrative Project Preview

<img width="800" height="600" alt="image" src="https://github.com/user-attachments/assets/ef254659-ba14-44c5-8224-918f596d050d" />


## Future Development

Potential engineering improvements include:

- Persistent learner profiles and learning history.
- Performance-driven adaptive difficulty.
- Expanded multimodal learning experiences.
- More robust engagement analysis.
- Interactive quizzes and measurable mastery tracking.
- Automated testing and deployment.

---

**Project:** Adaptive Neurodiverse AI Tutor

**Repository:** https://github.com/Chethan13032005/Adaptive-learning

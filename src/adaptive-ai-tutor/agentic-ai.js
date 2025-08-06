// Personalized welcome (Home page)
function agenticWelcome(userName = "Learner") {
  return `👋 Welcome back, ${userName}! Ready for another great learning session?`;
}

// Suggest next feature (Features page)
function agenticSuggestFeature(featuresTried = []) {
  const allFeatures = [
    { name: "Multi-Modal Teaching", file: "feature-multimodal.html" },
    { name: "Emotion & Engagement Sensing", file: "feature-engagement.html" },
    { name: "Gamified Peer Agent", file: "feature-peer.html" },
    { name: "Progress Dashboard", file: "feature-progress.html" },
    { name: "Accessibility", file: "feature-accessibility.html" }
  ];
  const next = allFeatures.find(f => !featuresTried.includes(f.name));
  if (next) {
    return `✨ Try exploring <a href="${next.file}">${next.name}</a> next!`;
  }
  return "🎉 You've explored all features! Try revisiting your favorite.";
}

// Adaptive suggestion (Progress Dashboard)
function agenticProgressSuggestion(topicCount) {
  if (topicCount < 4) {
    return "🤖 Keep going! Try to complete more topics to unlock new achievements.";
  } else if (topicCount < 7) {
    return "🎉 Great progress! Would you like to try a new science topic next?";
  } else {
    return "🏆 Amazing! You're a learning superstar. Ready for a challenge?";
  }
}

// Engagement encouragement (Engagement Sensing)
function agenticEngagement(status, time) {
  if (status === "negative" || time > 30) {
    return "😞 Not feeling it? Let's slow down and try a different approach!";
  } else if (time < 5) {
    return "😐 Quick answer! Want to take a short break or try a quick game?";
  } else {
    return "😊 Great job! Keep going!";
  }
}

// Feedback response (Feedback page)
function agenticFeedbackThanks(name = "") {
  return `🙏 Thank you${name ? ', ' + name : ''} for your feedback! Your thoughts help us improve.`;
}
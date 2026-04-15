// Offline Local AI Fallback Knowledge Templates
export interface FallbackTemplate {
  topic: string;
  category: 'STEM' | 'Humanities' | 'Language' | 'General';
  summary: string;
  keyConcepts: string[];
  sampleQuestions: string[];
}

export const STEM_TEMPLATES: Record<string, FallbackTemplate> = {
  mathematics: {
    topic: 'Mathematics - Calculus & Algebra',
    category: 'STEM',
    summary: 'Core mathematical principles spanning differential calculus, integrals, linear algebra, and quadratic systems.',
    keyConcepts: ['Derivative as instantaneous rate of change', 'Fundamental Theorem of Calculus', 'Eigenvalues & eigenvectors', 'Matrix transformations'],
    sampleQuestions: ['How do I find the derivative of x*sin(x)?', 'What is the geometric interpretation of a determinant?']
  },
  physics: {
    topic: 'Classical Mechanics & Electromagnetism',
    category: 'STEM',
    summary: 'Newtonian mechanics, conservation of energy and momentum, electric fields, and Maxwell equations.',
    keyConcepts: ['Conservation of linear momentum', 'Work-energy theorem', 'Gauss law for electricity', 'Faraday induction'],
    sampleQuestions: ['Explain Lenz law with an induced current example.', 'What is escape velocity formula derivation?']
  },
  chemistry: {
    topic: 'Organic & Inorganic Chemistry',
    category: 'STEM',
    summary: 'Atomic structures, periodic periodic trends, chemical equilibrium, and organic reaction mechanisms.',
    keyConcepts: ['Electronegativity trends', 'Le Chatelier principle', 'SN1 vs SN2 nucleophilic substitution', 'Gibbs free energy spontaneity'],
    sampleQuestions: ['Why are tertiary carbocations more stable?', 'How does temperature affect exothermic equilibrium?']
  },
  biology: {
    topic: 'Cellular Biology & Genetics',
    category: 'STEM',
    summary: 'Cellular respiration, DNA replication, transcription, translation, and Mendelian inheritance patterns.',
    keyConcepts: ['ATP synthase in mitochondria', 'Central dogma of molecular biology', 'Meiosis vs mitosis', 'Polygenic traits'],
    sampleQuestions: ['What occurs during the electron transport chain?', 'How does CRISPR-Cas9 locate target DNA sequences?']
  },
  computerScience: {
    topic: 'Computer Science & Algorithms',
    category: 'STEM',
    summary: 'Asymptotic notation, sorting algorithms, graphs, dynamic programming, and memory allocation.',
    keyConcepts: ['Big-O complexity', 'Dijkstra shortest path', 'Dynamic programming memoization', 'Binary search trees'],
    sampleQuestions: ['Explain the time complexity difference between QuickSort and MergeSort.', 'How does garbage collection work in V8?']
  }
};

export const HUMANITIES_TEMPLATES: Record<string, FallbackTemplate> = {
  history: {
    topic: 'World History & Modern Civilizations',
    category: 'Humanities',
    summary: 'Major global turning points including the Industrial Revolution, world wars, and post-colonial self-determination.',
    keyConcepts: ['Causes of World War I', 'Impact of the steam engine on labor', 'Decolonization movements', 'Cold War geopolitics'],
    sampleQuestions: ['What were the key socio-economic drivers of the Industrial Revolution?', 'How did the Treaty of Versailles influence 20th century Europe?']
  }
};

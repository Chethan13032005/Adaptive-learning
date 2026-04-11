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
  }
};

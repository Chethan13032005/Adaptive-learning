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
  },
  englishLit: {
    topic: 'English Literature & Rhetoric',
    category: 'Language',
    summary: 'Literary devices, critical analysis, narrative structures, and syntactic techniques in prose and poetry.',
    keyConcepts: ['Metaphor vs Metonymy', 'Dramatic irony', 'Stream of consciousness narrative', 'Rhetorical appeals: Ethos, Pathos, Logos'],
    sampleQuestions: ['How does Shakespeare use dramatic irony in Macbeth?', 'What distinguishes a thesis statement from a topic sentence?']
  },
  economics: {
    topic: 'Microeconomics & Macroeconomics',
    category: 'Humanities',
    summary: 'Supply and demand equilibrium, fiscal and monetary policies, inflation, and market structures.',
    keyConcepts: ['Elasticity of demand', 'Monopolistic competition vs oligopoly', 'GDP calculation methods', 'Central bank interest rate transmission'],
    sampleQuestions: ['How does quantitative easing stimulate the economy?', 'What causes deadweight loss in price-ceiling situations?']
  },
  geography: {
    topic: 'Physical Geography & Geomorphology',
    category: 'Humanities',
    summary: 'Plate tectonics, atmospheric circulation, climate zones, and river basin landforms.',
    keyConcepts: ['Subduction zones and seismic activity', 'Hadley cells and trade winds', 'Koppen climate classification', 'Glacial vs fluvial erosion'],
    sampleQuestions: ['How do tectonic plate boundaries create volcanic island arcs?', 'Explain the rain shadow effect with orographic precipitation.']
  },
  environmentalScience: {
    topic: 'Environmental Science & Sustainability',
    category: 'STEM',
    summary: 'Biogeochemical cycles, ecosystem trophic cascades, renewable energy transitions, and biodiversity conservation.',
    keyConcepts: ['Carbon and nitrogen cycles', 'Ocean acidification from CO2 absorption', 'Keystone species ecological role', 'Photovoltaic and wind capacity factors'],
    sampleQuestions: ['How does eutrophication cause hypoxic dead zones?', 'What is the difference between point and non-point source pollution?']
  },
  logicReasoning: {
    topic: 'Formal Logic & Deductive Reasoning',
    category: 'General',
    summary: 'Propositional calculus, logical fallacies, categorical syllogisms, and truth tables.',
    keyConcepts: ['Modus Ponens and Modus Tollens', 'Ad hominem & straw man fallacies', 'Necessary vs sufficient conditions', 'Venn diagrams for valid deduction'],
    sampleQuestions: ['Construct a truth table for (P -> Q) ^ ~Q.', 'Identify the formal fallacy in affirming the consequent.']
  }
};

export const STUDY_TEMPLATES = {
  activeRecall: {
    method: 'Feynman Technique & Spaced Repetition',
    instructions: '1. Choose a concept. 2. Explain it in plain terms as if to a 10-year old. 3. Identify gaps in your explanation. 4. Review source notes to simplify.'
  },
  pomodoro: {
    method: 'Adaptive Interval Training',
    instructions: 'Focus for 25 minutes, followed by a 5-minute break. After 4 intervals, take a 20-minute restorative break.'
  }
};

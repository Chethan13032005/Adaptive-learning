// Structured Quiz Question Banks
export interface QuizQuestion {
  id: string;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export const MATH_QUESTIONS: QuizQuestion[] = [
  {
    id: 'm-calc-001',
    topic: 'Calculus',
    difficulty: 'medium',
    question: 'What is the derivative of f(x) = ln(3x^2)?',
    options: ['2/x', '6x', '1/(3x^2)', '3/x'],
    correctAnswerIndex: 0,
    explanation: 'By the chain rule: d/dx[ln(u)] = u'/u. Here u = 3x^2, u' = 6x, so (6x)/(3x^2) = 2/x.'
  },
  {
    id: 'm-alg-002',
    topic: 'Algebra',
    difficulty: 'easy',
    question: 'Solve for x: 2^(2x) = 64.',
    options: ['x = 2', 'x = 3', 'x = 4', 'x = 6'],
    correctAnswerIndex: 1,
    explanation: '64 is 2^6. Thus 2x = 6, yielding x = 3.'
  }
];

export const PHYSICS_QUESTIONS: QuizQuestion[] = [
  {
    id: 'p-mech-001',
    topic: 'Mechanics',
    difficulty: 'hard',
    question: 'A mass m attached to a spring of spring constant k oscillates. What is its angular frequency omega?',
    options: ['sqrt(m/k)', 'sqrt(k/m)', '2*pi*sqrt(k/m)', 'k/m'],
    correctAnswerIndex: 1,
    explanation: 'The natural angular frequency of a simple harmonic oscillator is omega = sqrt(k/m).'
  }
];

export const CHEMISTRY_QUESTIONS: QuizQuestion[] = [
  {
    id: 'c-org-001',
    topic: 'Organic Chemistry',
    difficulty: 'medium',
    question: 'Which reagent converts primary alcohols selectively to aldehydes without over-oxidation?',
    options: ['KMnO4', 'PCC (Pyridinium chlorochromate)', 'LiAlH4', 'H2SO4'],
    correctAnswerIndex: 1,
    explanation: 'PCC in dichloromethane gently oxidizes primary alcohols to aldehydes without continuing to carboxylic acids.'
  }
];

export const CS_QUESTIONS: QuizQuestion[] = [
  {
    id: 'cs-algo-001',
    topic: 'Algorithms',
    difficulty: 'easy',
    question: 'What is the worst-case time complexity of binary search over a sorted array of size n?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
    correctAnswerIndex: 1,
    explanation: 'Binary search halves the search space each step, requiring at most log2(n) comparisons.'
  }
];

// Pre-packaged STEM Offline Learning Modules
export interface StemQuestion {
  id: string;
  discipline: 'Physics' | 'Biology' | 'Chemistry';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const STEM_QUESTION_BANK: StemQuestion[] = [
  {
    id: 'bio-001',
    discipline: 'Biology',
    question: 'Which organelle is responsible for generating adenosine triphosphate (ATP) in eukaryotic cells?',
    options: ['Ribosome', 'Mitochondria', 'Golgi Apparatus', 'Endoplasmic Reticulum'],
    correctIndex: 1,
    explanation: 'Mitochondria produce cellular energy through oxidative phosphorylation.'
  },
  {
    id: 'phys-001',
    discipline: 'Physics',
    question: 'What is the rate of change of momentum of an object proportional to according to Newton second law?',
    options: ['Velocity', 'Applied Force', 'Displacement', 'Inertial Mass'],
    correctIndex: 1,
    explanation: 'Newton second law states F = dp/dt.'
  }
];

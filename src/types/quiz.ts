export interface Question {
  id: number;
  question: string;
  options: [string, string, string, string]; // [A, B, C, D]
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
  category: 'Jaringan' | 'Coding' | 'Logika & AI' | 'Manajemen Belajar';
}

export interface QuizGameState {
  score: number;
  answeredCount: number;
  correctCount: number;
  wrongCount: number;
  playedQuestionIds: number[];
  currentQuestion: Question | null;
  selectedOption: number | null;
  isAnswerSubmitted: boolean;
  isSpinning: boolean;
  soundEnabled: boolean;
  isGameOver: boolean;
}

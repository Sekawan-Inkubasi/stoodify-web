import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Gamepad2,
  Volume2,
  VolumeX
} from 'lucide-react';
import { SpinWheel } from './SpinWheel';
import { QuestionModal } from './QuestionModal';
import { QUESTION_BANK } from '../../data/questionBank';
import type { Question } from '../../types/quiz';
import logoStoodify from '../../assets/logo_stoodify.png';

interface SpinTheWheelQuizProps {
  onBackToHome: () => void;
}

export const SpinTheWheelQuiz: React.FC<SpinTheWheelQuizProps> = ({ onBackToHome }) => {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);

  const [isSpinning, setIsSpinning] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Triggered when wheel stops at target number
  const handleNumberSelected = (selectedNum: number) => {
    const q = QUESTION_BANK.find((item) => item.id === selectedNum);
    if (q) {
      setCurrentQuestionNumber(selectedNum);
      setCurrentQuestion(q);
    }
  };

  // Triggered from QuestionModal on "Selesai"
  const handleFinishQuestion = () => {
    setCurrentQuestion(null);
    setCurrentQuestionNumber(null);
  };

  return (
    <div className="min-h-screen bg-[#F8FBFE] bg-grid-subtle text-[#0F172A] flex flex-col justify-between selection:bg-[#0062FF] selection:text-white">
      
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 py-3.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          
          {/* Back to Home Button & Brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="sm:hidden">Beranda</span>
              <span className="hidden sm:inline">Kembali ke Beranda</span>
            </button>

            <div className="hidden md:flex items-center gap-2 pl-3 border-l border-slate-200">
              <img src={logoStoodify} alt="Stoodify" className="w-5 h-5 object-contain" />
              <span className="text-xs font-bold tracking-tight text-[#0F172A]">
                SPIN THE WHEEL QUIZ
              </span>
            </div>
          </div>

          {/* Sound Toggle Button in Header */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-[#0062FF] text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
            title={soundEnabled ? 'Matikan Suara' : 'Nyalakan Suara'}
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#0062FF]" />
                <span className="hidden sm:inline">Suara: ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden sm:inline">Suara: MUTE</span>
              </>
            )}
          </button>

        </div>
      </header>

      {/* Main Wheel Playground */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        
        {/* Title & Exhibition Context */}
        <div className="text-center max-w-xl mx-auto mb-2 space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-bold text-[#0062FF]">
            <Gamepad2 className="w-3.5 h-3.5" />
            Edisi Soal Kejuruan SMK Telkom Sidoarjo (1–100)
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight">
            Spin the Wheel Quiz
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Putar roda keberuntungan untuk menentukan nomor pertanyaanmu, jawab dengan tepat, dan buktikan kemampuanmu!
          </p>
        </div>

        {/* Interactive Canvas Wheel Component */}
        <SpinWheel
          onNumberSelected={handleNumberSelected}
          isSpinning={isSpinning}
          setIsSpinning={setIsSpinning}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
        />

      </main>

      {/* Question Modal (When Wheel Lands on a Number) */}
      {currentQuestion && currentQuestionNumber !== null && (
        <QuestionModal
          question={currentQuestion}
          questionNumber={currentQuestionNumber}
          onFinish={handleFinishQuestion}
        />
      )}

      {/* Minimal Footer */}
      <footer className="py-4 text-center text-xs text-slate-400 border-t border-slate-200/60 bg-white">
        Stoodify Quiz · Stand Pameran Inkubasi SMK Telkom Sidoarjo
      </footer>

    </div>
  );
};

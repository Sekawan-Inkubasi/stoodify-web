import React, { useState, useRef } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Check,
  X
} from 'lucide-react';
import type { Question } from '../../types/quiz';
import { sounds } from '../../utils/soundEffects';

interface QuestionModalProps {
  question: Question;
  questionNumber: number;
  onFinish: () => void;
}

export const QuestionModal: React.FC<QuestionModalProps> = ({
  question,
  questionNumber,
  onFinish,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const confettiCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const isCorrect = selectedOption === question.correctIndex;

  const handleSelectOption = (idx: number) => {
    if (isSubmitted) return;

    setSelectedOption(idx);
    setIsSubmitted(true);

    const correct = idx === question.correctIndex;
    if (correct) {
      sounds.playSuccess();
      launchConfetti();
    } else {
      sounds.playWrong();
    }
  };

  const launchConfetti = () => {
    const canvas = confettiCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      size: number;
      rot: number;
      vRot: number;
    }> = [];

    const colors = ['#0062FF', '#00D2FF', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

    for (let i = 0; i < 65; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 12,
        vy: (Math.random() - 0.7) * 12,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        rot: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 10,
      });
    }

    const startTime = performance.now();

    const render = (time: number) => {
      const elapsed = time - startTime;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.25;
        p.rot += p.vRot;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      if (elapsed < 1600) {
        requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    requestAnimationFrame(render);
  };

  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md select-none animate-in fade-in duration-200">
      
      {/* Confetti canvas overlay */}
      <canvas
        ref={confettiCanvasRef}
        className="absolute inset-0 pointer-events-none z-50 w-full h-full"
      />

      {/* Main Card Modal */}
      <div 
        className={`relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col transition-all duration-300 ${
          isSubmitted && !isCorrect ? 'animate-quiz-shake border-rose-300 ring-2 ring-rose-200' : ''
        }`}
      >
        
        {/* Modal Header: Question # and Category */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#0062FF] text-white font-black tracking-wider text-[11px]">
              SOAL #{questionNumber}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-200/80 text-slate-700 font-semibold text-[10px]">
              {question.category}
            </span>
          </div>

          <button
            onClick={onFinish}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors cursor-pointer"
            title="Tutup"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body: Question text & 4 Options */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Question Text */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] leading-relaxed">
              {question.question}
            </h3>
          </div>

          {/* 4 Options Grid (A, B, C, D) */}
          <div className="grid grid-cols-1 gap-3">
            {question.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isOptionCorrect = idx === question.correctIndex;

              let btnStyle = 'border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50/50 text-slate-800';
              let badgeStyle = 'bg-slate-100 text-slate-600 border-slate-200';

              if (isSubmitted) {
                if (isOptionCorrect) {
                  btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-400/40 font-semibold';
                  badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
                } else if (isSelected && !isOptionCorrect) {
                  btnStyle = 'border-rose-500 bg-rose-50 text-rose-950 ring-2 ring-rose-400/40 font-semibold';
                  badgeStyle = 'bg-rose-600 text-white border-rose-600';
                } else {
                  btnStyle = 'border-slate-200 bg-slate-50 text-slate-400 opacity-60';
                  badgeStyle = 'bg-slate-200 text-slate-400 border-slate-200';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isSubmitted}
                  className={`w-full p-4 rounded-2xl border-2 text-left transition-all duration-150 flex items-center justify-between group ${btnStyle} ${
                    !isSubmitted ? 'cursor-pointer hover:scale-[1.01]' : 'cursor-default'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs border ${badgeStyle} shrink-0`}>
                      {optionLabels[idx]}
                    </span>
                    <span className="text-sm sm:text-base font-medium">
                      {opt}
                    </span>
                  </div>

                  {isSubmitted && isOptionCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-2 animate-quiz-pop" />
                  )}
                  {isSubmitted && isSelected && !isOptionCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 ml-2 animate-quiz-pop" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback Banner */}
          {isSubmitted && (
            <div className={`p-4 rounded-2xl border transition-all duration-300 ${
              isCorrect
                ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                : 'bg-rose-50 border-rose-200 text-rose-950'
            }`}>
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 animate-quiz-pop">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                ) : (
                  <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 animate-quiz-pop">
                    <XCircle className="w-6 h-6" />
                  </div>
                )}

                <div className="flex-1">
                  <h4 className="text-sm font-bold">
                    {isCorrect ? 'Jawaban kamu benar!' : 'Oops! Jawaban kamu belum tepat.'}
                  </h4>
                  
                  {question.explanation && (
                    <p className="text-xs text-slate-700 mt-1.5 leading-relaxed">
                      <strong>Penjelasan:</strong> {question.explanation}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer: Selesai Button */}
        {isSubmitted && (
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end">
            <button
              onClick={onFinish}
              className="px-8 py-3 rounded-xl bg-[#0062FF] hover:bg-[#0052D9] text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
            >
              <Check className="w-4 h-4" />
              <span>Selesai</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

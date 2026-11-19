import React from 'react';
import { Trophy, RotateCcw, Home } from 'lucide-react';

interface GameOverModalProps {
  score: number;
  correctCount: number;
  wrongCount: number;
  totalAnswered: number;
  onPlayAgain: () => void;
  onBackToHome: () => void;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({
  score,
  correctCount,
  wrongCount,
  totalAnswered,
  onPlayAgain,
  onBackToHome,
}) => {
  const percentage = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  // Personalized appreciation message
  const getAppreciation = () => {
    if (percentage >= 85) {
      return {
        title: 'Luar Biasa! Master Edukasi IT!',
        desc: 'Pemahamanmu seputar Jaringan, Coding, AI, dan Manajemen Belajar sangat tajam! Calon lulusan unggulan SMK Telkom.',
        color: 'text-emerald-600',
        badge: 'Top Tier Scholar',
      };
    }
    if (percentage >= 60) {
      return {
        title: 'Hebat! Terus Tingkatkan!',
        desc: 'Hasil belajar yang sangat baik! Dengan bantuan fitur Stoodify, penguasaan materimu akan semakin konsisten dan matang.',
        color: 'text-[#0062FF]',
        badge: 'Active Learner',
      };
    }
    return {
      title: 'Tetap Semangat Belajar!',
      desc: 'Setiap kesalahan adalah langkah awal pemahaman baru. Gunakan Stoodify untuk mengatur jadwal dan mengulang materi tanpa panik!',
      color: 'text-amber-600',
      badge: 'Rising Student',
    };
  };

  const appreciation = getAppreciation();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md select-none animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-center p-6 sm:p-8 space-y-6">
        
        {/* Top Trophy Icon */}
        <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-50 border border-amber-200 p-4 shadow-md flex items-center justify-center text-amber-500 animate-bounce">
          <Trophy className="w-10 h-10" />
        </div>

        {/* Title & Badge */}
        <div>
          <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200 mb-2">
            {appreciation.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
            {appreciation.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            {appreciation.desc}
          </p>
        </div>

        {/* 4 Stat Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] font-bold text-slate-500 uppercase">Skor</span>
            <p className="text-xl font-black text-[#0062FF] mt-0.5">{score}</p>
          </div>

          <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200">
            <span className="text-[10px] font-bold text-emerald-600 uppercase">Benar</span>
            <p className="text-xl font-black text-emerald-700 mt-0.5">{correctCount}</p>
          </div>

          <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200">
            <span className="text-[10px] font-bold text-rose-600 uppercase">Salah</span>
            <p className="text-xl font-black text-rose-700 mt-0.5">{wrongCount}</p>
          </div>

          <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-200">
            <span className="text-[10px] font-bold text-indigo-600 uppercase">Akurasi</span>
            <p className="text-xl font-black text-indigo-700 mt-0.5">{percentage}%</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={onPlayAgain}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0062FF] hover:bg-[#0052D9] text-white font-bold text-sm shadow-btn-primary transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span>PLAY AGAIN</span>
          </button>

          <button
            onClick={onBackToHome}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>KEMBALI KE BERANDA</span>
          </button>
        </div>

      </div>
    </div>
  );
};

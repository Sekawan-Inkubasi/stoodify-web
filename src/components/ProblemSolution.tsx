import React from 'react';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal-init">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Kondisi tugas berubah-ubah. <br />
            Belajar butuh kepastian prioritas.
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] mt-3 leading-relaxed">
            Bukan karena malas: siswa sering panik karena tidak tahu harus mulai dari tugas mana, materi apa yang akan diujikan, dan bagaimana membagi waktu secara sehat.
          </p>
        </div>

        {/* 2-Column Comparison: Sebelum vs Sesudah Stoodify */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Sisi Masalah: Pola Lama */}
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/80 space-y-5 sm:space-y-6 reveal-init reveal-delay-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">Sebelum Pakai Stoodify</h3>
                <p className="text-[11px] sm:text-xs text-[#64748B]">Kebiasaan belajar yang bikin lelah mental</p>
              </div>
            </div>

            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-[#475569]">
              <li className="flex items-start gap-2.5 sm:gap-3">
                <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✕</span>
                <span><strong>Sistem Kebut Semalam (SKS):</strong> Belajar panik beberapa jam sebelum ujian, materi cepat hilang dari ingatan.</span>
              </li>
              <li className="flex items-start gap-2.5 sm:gap-3">
                <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✕</span>
                <span><strong>Catatan tugas berceceran:</strong> Sebagian di grup WhatsApp, sebagian di buku tulis, sering terlewat tenggat waktu LKPD.</span>
              </li>
              <li className="flex items-start gap-2.5 sm:gap-3">
                <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✕</span>
                <span><strong>Distraksi smartphone:</strong> Berniat belajar 1 jam, malah bergulir media sosial tanpa ada tugas yang terselesaikan.</span>
              </li>
            </ul>
          </div>

          {/* Sisi Solusi: Bersama Stoodify */}
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-blue-50/50 border border-blue-200 shadow-sm space-y-5 sm:space-y-6 relative overflow-hidden reveal-init reveal-delay-200">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0062FF] text-white flex items-center justify-center shrink-0 shadow-sm">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">Bersama Stoodify</h3>
                <p className="text-[11px] sm:text-xs text-[#0062FF] font-medium">Alur belajar terstruktur dan terukur</p>
              </div>
            </div>

            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-[#475569]">
              <li className="flex items-start gap-2.5 sm:gap-3">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0062FF] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span><strong>Prioritas Dihitung Otomatis:</strong> AI mengurutkan tugas berdasarkan tingkat kesulitan dan sisa waktu pengumpulan.</span>
              </li>
              <li className="flex items-start gap-2.5 sm:gap-3">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0062FF] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span><strong>Prediksi Materi Terarah:</strong> Mengetahui materi esensial mata pelajaran sebelum guru memulai sesi di kelas.</span>
              </li>
              <li className="flex items-start gap-2.5 sm:gap-3">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0062FF] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span><strong>Zen Focus (Pomodoro):</strong> Interval 25 menit produktif dengan pengingat rileks untuk menjaga stamina otak.</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="#cara-kerja"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0062FF] hover:text-[#0052D9] transition-colors"
              >
                Lihat bagaimana alur kerja Stoodify membantu belajarmu
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

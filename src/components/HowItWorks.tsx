import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Input Jadwal & Tugas',
      description: 'Masukkan jadwal mata pelajaran mingguan dan tugas sekolahmu secara berkala. Stoodify otomatis memetakan beban belajarmu.',
      highlight: 'Sederhana & Cepat'
    },
    {
      number: '02',
      title: 'AI Menghitung Prioritas',
      description: 'Algoritma Stoodify menganalisis tenggat waktu, tingkat kesulitan tugas, dan memprediksi materi pertemuan berikutnya.',
      highlight: 'Urutan Otomatis'
    },
    {
      number: '03',
      title: 'Fokus Belajar & Tuntas',
      description: 'Nyalakan Zen Focus Mode (Pomodoro), ikuti rekomendasi porsi belajar harian, dan selesaikan tugas tanpa panik.',
      highlight: 'Hasil Maksimal'
    }
  ];

  return (
    <section id="cara-kerja" className="py-20 md:py-28 bg-white border-b border-slate-200/80 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header (Inspired by Satria App) */}
        <div className="mb-14">
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-[#64748B] block mb-2">
            ALUR KERJA STOODIFY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Alur yang mudah diikuti.
          </h2>
          <p className="text-sm sm:text-base text-[#475569] mt-2 max-w-xl">
            Tiga tahapan sederhana dari awal semester hingga masa ujian agar ritme belajarmu selalu terkendali.
          </p>
        </div>

        {/* 3 Steps Minimalist Process Grid with Hairline Borders */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border-t border-[#CBD5E1] pt-5 sm:pt-6 flex flex-col justify-between group"
            >
              <div>
                <span className="text-xs font-bold text-[#0062FF] font-mono tracking-wider block mb-2">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-[#0F172A] tracking-tight mb-2 group-hover:text-[#0062FF] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-[1.85]">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{step.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Quick Link to Simulator */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-50 border border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-[#0F172A]">Ingin merasakan alur ini langsung?</h4>
            <p className="text-xs text-[#64748B] mt-0.5">Kamu bisa mencoba mencentang tugas dan menyalakan timer fokus di simulator di atas.</p>
          </div>
          <a
            href="#demo"
            className="px-5 py-2.5 rounded-xl bg-[#0062FF] text-white text-xs font-bold shadow-sm hover:bg-[#0052D9] transition-colors flex items-center gap-1.5 shrink-0"
          >
            Buka Simulator Sekarang
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

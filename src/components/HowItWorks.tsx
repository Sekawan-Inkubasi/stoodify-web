import React from 'react';
import { Download, CheckCircle2 } from 'lucide-react';

const DIRECT_APK_DOWNLOAD_URL = 'https://github.com/Sekawan-Inkubasi/stoodify-apk/releases/download/latest/stoodify-latest.apk';

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
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-14 reveal-init">
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-[#64748B] block mb-2">
            ALUR KERJA STOODIFY
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Alur yang mudah diikuti.
          </h2>
          <p className="text-xs sm:text-base text-[#475569] mt-2 max-w-xl">
            Tiga tahapan sederhana dari awal semester hingga masa ujian agar ritme belajarmu selalu terkendali.
          </p>
        </div>

        {/* 3 Steps Minimalist Process Grid with Hairline Borders */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`border-t border-[#CBD5E1] pt-4 sm:pt-6 flex flex-col justify-between group reveal-init ${
                idx === 0 ? 'reveal-delay-100' : idx === 1 ? 'reveal-delay-200' : 'reveal-delay-300'
              }`}
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

        {/* Conversion Banner to Download APK */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-blue-50/80 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-5 reveal-init reveal-delay-200 shadow-xs">
          <div className="text-center sm:text-left">
            <span className="text-[10px] font-bold text-[#0062FF] uppercase tracking-wider block mb-1">
              Mulai Langkah Nyata
            </span>
            <h4 className="text-base sm:text-lg font-bold text-[#0F172A]">
              Ingin ritme belajarmu tertata dan bebas panik?
            </h4>
            <p className="text-xs sm:text-sm text-[#475569] mt-0.5 max-w-lg">
              Pasang aplikasi Stoodify di smartphone kamu sekarang (~9.9 MB). Ringan, bebas iklan, dan dapat diakses offline.
            </p>
          </div>
          <a
            href={DIRECT_APK_DOWNLOAD_URL}
            download="stoodify-latest.apk"
            className="px-6 py-3 rounded-xl bg-[#0062FF] text-white text-sm font-bold shadow-btn-primary hover:bg-[#0052D9] transition-all flex items-center gap-2 shrink-0 group cursor-pointer"
          >
            <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            <span>Unduh APK Sekarang</span>
          </a>
        </div>

      </div>
    </section>
  );
};

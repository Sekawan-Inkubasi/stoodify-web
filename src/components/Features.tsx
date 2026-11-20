import React from 'react';
import { CalendarDays, Zap, Clock, BookOpen, ArrowRight, Download, Sparkles } from 'lucide-react';
import logoStoodify from '../assets/logo_stoodify.png';

const DIRECT_APK_DOWNLOAD_URL = 'https://github.com/Sekawan-Inkubasi/stoodify-apk/releases/download/v2.1.0/stoodify-v2.1.0.apk';

export const Features: React.FC = () => {
  const featureList = [
    {
      icon: CalendarDays,
      title: 'Manajemen Jadwal Terintegrasi',
      description: 'Menyimpan jadwal mata pelajaran Senin–Jumat, lengkap dengan penanda jam masuk, ruang kelas, dan nama guru pengampu.',
    },
    {
      icon: Zap,
      title: 'AI Task Priority Matrix',
      description: 'Klasifikasi otomatis tugas LKPD dari yang mendesak hingga santai berdasarkan tenggat waktu dan bobot kesulitan materi.',
    },
    {
      icon: Clock,
      title: 'Zen Focus & Anti SKS (Pomodoro)',
      description: 'Blok waktu fokus 25 menit bebas notifikasi media sosial, membantu siswa mencicil tugas secara konsisten tanpa panik semalam.',
    },
    {
      icon: BookOpen,
      title: 'Prediksi Materi Esok Hari',
      description: 'Rangkuman poin-poin krusial sebelum materi diajarkan di kelas, membuat siswa siap dan lebih percaya diri saat guru menerangkan.',
    },
  ];

  return (
    <section id="fitur" className="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-20 bg-white scroll-mt-24 sm:scroll-mt-28 relative overflow-hidden">
      
      {/* Subtle Ambient Background Accents */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-0"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ======================================================== */}
        {/* EDITORIAL SPLIT SHOWCASE (SMK Telkom Sidoarjo Style)     */}
        {/* Skala proporsional & Oval Capsule diselaraskan laptop    */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* ------------------------------------------------------ */}
          {/* KOLOM KIRI: Oval Capsule Visual (Desktop & Laptop)     */}
          {/* ------------------------------------------------------ */}
          <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
            <div className="relative flex items-center justify-center py-3">
              
              {/* Geometric Pill Bar - Far Left */}
              <div 
                aria-hidden="true" 
                className="absolute -left-8 sm:-left-10 top-6 w-2.5 sm:w-3 h-28 sm:h-36 bg-[#0062FF] rounded-full shadow-xs"
              />
              
              {/* Geometric Pill Bar - Lower Left */}
              <div 
                aria-hidden="true" 
                className="absolute -left-5 sm:-left-6 bottom-8 w-2 sm:w-2.5 h-14 sm:h-20 bg-[#0062FF] rounded-full"
              />

              {/* Geometric Accent Circle Dots */}
              <div 
                aria-hidden="true" 
                className="absolute -left-2.5 sm:-left-3 top-2 w-3 sm:w-3.5 h-3 sm:h-3.5 bg-[#0062FF] rounded-full"
              />
              <div 
                aria-hidden="true" 
                className="absolute -right-2.5 sm:-right-3 top-10 w-3 sm:w-3.5 h-3 sm:h-3.5 bg-[#0062FF] rounded-full"
              />
              <div 
                aria-hidden="true" 
                className="absolute -right-4 sm:-right-5 bottom-12 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-[#0062FF] rounded-full"
              />

              {/* The Iconic Oval Capsule Frame (Kembali Oval 'rounded-full' & Skala Proporsional) */}
              <div className="relative w-[210px] sm:w-[230px] md:w-[245px] lg:w-[255px] aspect-[1/1.45] rounded-full overflow-hidden bg-gradient-to-b from-[#0062FF] via-[#0055F6] to-[#003EA8] shadow-[0_16px_40px_rgba(0,98,255,0.18)] ring-6 sm:ring-8 ring-white flex flex-col items-center justify-center p-5 select-none">
                
                {/* Background Subtle Gradient Wave */}
                <div 
                  aria-hidden="true" 
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none"
                />

                {/* Ambient Soft Radial Glow behind Logo */}
                <div 
                  aria-hidden="true" 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/20 rounded-full blur-xl pointer-events-none"
                />

                {/* Stoodify Brand Logo Card & Brand Typography */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-2.5 sm:space-y-3">
                  
                  {/* Elevated App Icon Tile (Skala Kompak & Elegan) */}
                  <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-white shadow-xl p-3.5 sm:p-4 flex items-center justify-center transform hover:scale-105 transition-transform duration-300 ring-3 ring-white/30">
                    <img
                      src={logoStoodify}
                      alt="Logo Stoodify"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Brand Typography */}
                  <div className="space-y-0.5">
                    <span className="block text-white font-extrabold text-sm sm:text-base tracking-wider uppercase">
                      STOODIFY
                    </span>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 text-blue-100 text-[9px] sm:text-[10px] font-semibold backdrop-blur-xs">
                      Smart Study Assistant
                    </span>
                  </div>

                </div>

              </div>

              {/* Floating Badge Label at Bottom Right of Oval */}
              <div className="absolute -bottom-1 -right-3 sm:-right-4 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl px-3 py-1.5 shadow-sm flex items-center gap-1.5 select-none z-20">
                <div className="w-5 h-5 rounded-md bg-blue-50 text-[#0062FF] flex items-center justify-center shrink-0">
                  <Sparkles className="w-3 h-3" />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-[#171923] leading-none">Sekawan Sija</p>
                  <p className="text-[8px] text-[#777B8C] mt-0.5 leading-none">SMK Telkom Sidoarjo</p>
                </div>
              </div>

            </div>
          </div>

          {/* ------------------------------------------------------ */}
          {/* KOLOM KANAN: Daftar Fitur Editorial Terstruktur         */}
          {/* ------------------------------------------------------ */}
          <div className="lg:col-span-7">
            
            {/* Guide line with indicator dots (Telkom Sidoarjo Reference) */}
            <div className="relative pl-4 sm:pl-6 border-l-2 border-[#0062FF]/85 space-y-4 sm:space-y-5">
              
              {/* Top Accent Dot on line */}
              <div 
                aria-hidden="true"
                className="absolute -top-1.5 -left-[6px] w-2.5 h-2.5 rounded-full bg-[#0062FF] ring-3 ring-white"
              />

              {/* Header Title & Subtitle */}
              <div className="space-y-1.5 sm:space-y-2">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-[#0062FF] uppercase block">
                  SISTEM INFORMASI BELAJAR MANDIRI
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-[32px] font-extrabold text-[#171923] tracking-tight leading-snug">
                  Solusi Cerdas Menata Waktu dan Beban Belajar Siswa
                </h2>
                <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed">
                  Program ekosistem belajar yang berfokus pada keteraturan jadwal harian, eliminasi kebiasaan sistem kebut semalam, serta persiapan materi sebelum guru mengajar di kelas.
                </p>
              </div>

              {/* Mobile Compact Brand Pill (Menggantikan kapsul raksasa pada layar ponsel) */}
              <div className="lg:hidden flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-blue-50/90 via-white to-blue-50/50 border border-blue-200/70 shadow-2xs my-2.5">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-white shadow-2xs p-1 flex items-center justify-center shrink-0 border border-blue-100 ring-2 ring-[#0062FF]/10">
                    <img src={logoStoodify} alt="Logo Stoodify" className="w-full h-full object-contain" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-black text-[#171923] tracking-wider uppercase">STOODIFY</span>
                      <span className="text-[9px] font-bold text-[#0062FF] bg-blue-100/80 px-2 py-0.2 rounded-full">Karya Siswa</span>
                    </div>
                    <p className="text-[10px] text-[#777B8C] truncate mt-0.5">SMK Telkom Sidoarjo · Asisten Belajar Mandiri</p>
                  </div>
                </div>
              </div>

              {/* 4 Feature Points with Clean Icons (Like SIJA reference) */}
              <div className="space-y-3 sm:space-y-4 pt-1">
                {featureList.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0062FF] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#0062FF] group-hover:text-white transition-colors duration-200">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-xs sm:text-sm font-bold text-[#171923] tracking-tight group-hover:text-[#0062FF] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#777B8C] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Context & CTA Button */}
              <div className="pt-2 space-y-3">
                <p className="text-[11px] sm:text-xs text-[#777B8C] leading-relaxed italic border-t border-slate-100 pt-2.5">
                  Dengan rutinitas belajar yang terstruktur, siswa dapat mengembangkan disiplin belajar harian, mencegah stres deadline, dan meraih pemahaman materi yang lebih mendalam.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  <a
                    href={DIRECT_APK_DOWNLOAD_URL}
                    download="stoodify-v2.1.0.apk"
                    className="px-5 py-2.5 rounded-full bg-[#0062FF] hover:bg-[#0052D9] text-white text-xs sm:text-sm font-bold shadow-[0_6px_20px_rgba(0,98,255,0.22)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
                    <span>Unduh APK Android (~9.9 MB)</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="#cara-kerja"
                    className="px-4 py-2.5 rounded-full bg-slate-50 hover:bg-slate-100 text-[#171923] text-xs sm:text-sm font-semibold border border-slate-200/80 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Pelajari Alur Kerja</span>
                  </a>
                </div>
              </div>

              {/* Bottom Accent Dot on line */}
              <div 
                aria-hidden="true"
                className="absolute -bottom-1.5 -left-[6px] w-2.5 h-2.5 rounded-full bg-[#0062FF] ring-3 ring-white"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

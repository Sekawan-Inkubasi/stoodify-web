import React from 'react';
import { Download, ArrowRight, Sparkles, Star } from 'lucide-react';
import berandaHomeImg from '../assets/screens/beranda-home.jpeg';

const DIRECT_APK_DOWNLOAD_URL = 'https://github.com/Sekawan-Inkubasi/stoodify-apk/releases/download/v2.1.0/stoodify-v2.1.0.apk';

export const Hero: React.FC = () => {
  const marqueePills = [
    'Atur Prioritas Tugas',
    'Anti SKS (Sistem Kebut Semalam)',
    'Zen Focus Mode (Pomodoro)',
    'Jadwal Otomatis',
    'Akses Mandiri & Cepat',
    'AI Asisten Kurikulum Merdeka',
  ];

  return (
    <div className="relative w-full bg-[#F8FBFE] overflow-hidden pt-20 sm:pt-28 lg:pt-36 pb-8 sm:pb-16">
      
      {/* ======================================================== */}
      {/* 1. AMBIENT RADIAL GRADIENTS (Soft Blue SaaS Glows)      */}
      {/* ======================================================== */}
      <div 
        aria-hidden="true"
        className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full bg-[#0062FF]/5 blur-[100px] pointer-events-none" 
      />
      <div 
        aria-hidden="true"
        className="absolute top-10 -right-20 w-[420px] h-[420px] rounded-full bg-[#00D2FF]/5 blur-[100px] pointer-events-none" 
      />
      <div 
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[580px] h-[260px] rounded-full bg-gradient-to-t from-[#0062FF]/10 via-[#00D2FF]/5 to-transparent blur-[80px] pointer-events-none" 
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ======================================================== */}
        {/* 2-COLUMN HERO LAYOUT: KIRI TEKS, KANAN FOTO HP          */}
        {/* Mobile: Proporsional & Compact Above-the-Fold            */}
        {/* Desktop: Side-by-Side (Kiri Teks, Kanan HP)             */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-8 items-center">
          
          {/* Kolom Kiri: Teks & Call To Action */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-3.5 sm:space-y-6">
            
            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[52px] font-extrabold tracking-tight text-[#171923] leading-[1.2] sm:leading-[1.16]">
              Belajar Efektif <br className="hidden sm:inline" />
              Bareng{' '}
              <span className="relative inline-flex items-center align-baseline">
                {/* Highlighted STOODIFY Pill */}
                <span className="inline-block px-3 py-0.5 sm:px-4 sm:py-1 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#0062FF] via-[#0052D9] to-[#2F80ED] text-white shadow-md shadow-[#0062FF]/25 text-xl sm:text-3xl lg:text-[42px] font-black tracking-wide mx-0.5 sm:mx-1 align-middle select-none">
                  STOODIFY
                </span>
                
                {/* Subtle SaaS cursor tag */}
                <span className="hidden sm:inline-flex items-center gap-1 absolute -top-3.5 -right-12 sm:-right-14 bg-[#0062FF] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm animate-float-cursor pointer-events-none select-none">
                  <svg className="w-2.5 h-2.5 fill-white rotate-[-45deg]" viewBox="0 0 24 24">
                    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
                  </svg>
                  Siswa
                </span>
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-xs sm:text-base lg:text-lg text-[#777B8C] max-w-sm sm:max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Platform pembelajaran interaktif yang membantu siswa belajar, mengerjakan tugas, dan mengasah kemampuan melalui pengalaman yang lebih menyenangkan.
            </p>

            {/* CTA Button */}
            <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
              <a
                href={DIRECT_APK_DOWNLOAD_URL}
                download="stoodify-v2.1.0.apk"
                className="w-full sm:w-auto max-w-xs sm:max-w-none px-5 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-semibold text-white bg-[#0062FF] hover:bg-[#0052D9] rounded-full shadow-[0_6px_20px_rgba(0,98,255,0.28)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:-translate-y-0.5" />
                <span>Unduh APK Android (~9.9 MB)</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/80 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* Kolom Kanan: Foto / Visual Mockup Smartphone (Diperkecil & Digeser ke Kiri) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-center relative mt-6 sm:mt-8 lg:mt-0 lg:-translate-x-6 xl:-translate-x-10">
            
            {/* Gentle Ambient Glow behind phone */}
            <div 
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[280px] lg:w-[300px] h-[220px] sm:h-[280px] lg:h-[300px] bg-gradient-to-tr from-[#0062FF]/15 via-[#00D2FF]/10 to-blue-200/10 rounded-full blur-2xl sm:blur-3xl pointer-events-none -z-0" 
            />

            {/* Smartphone Mockup Container with gentle vertical floating */}
            <div className="relative z-10 flex items-center justify-center animate-float-phone">
              
              {/* LEFT FLOATING CARD (Learning Experience) */}
              <div className="hidden sm:flex flex-col absolute top-10 -left-14 sm:-left-18 lg:-left-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-[0_10px_30px_rgba(15,23,42,0.06)] border border-slate-100/90 w-[160px] sm:w-[165px] z-30 animate-float-card-1 select-none text-left">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-5 h-5 rounded-lg bg-blue-50 text-[#0062FF] flex items-center justify-center">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <span className="text-[9px] font-semibold text-[#777B8C] uppercase tracking-wider">
                    Pengalaman Belajar
                  </span>
                </div>
                <h4 className="text-[11px] font-bold text-[#171923]">Prioritas Otomatis</h4>
                <p className="text-[9.5px] text-[#777B8C] leading-tight mt-0.5">
                  Tata ritme belajar harian tanpa sistem kebut semalam.
                </p>
                <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[9px]">
                  <span className="font-semibold text-[#0062FF] bg-blue-50 px-2 py-0.5 rounded-full text-[8.5px]">
                    Zen Focus
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-[9px]">
                    <Star className="w-2.5 h-2.5 fill-current" />
                    <span>4.9</span>
                  </div>
                </div>
              </div>

              {/* CENTERPIECE SMARTPHONE MOCKUP (Scaled down to ~235px on laptop) */}
              <div className="relative w-[180px] sm:w-[210px] md:w-[225px] lg:w-[235px] xl:w-[245px] aspect-[9/20] bg-slate-900 rounded-[28px] sm:rounded-[34px] lg:rounded-[36px] p-[4px] sm:p-[5px] shadow-[0_20px_50px_-10px_rgba(0,98,255,0.18)] ring-1 ring-slate-800/80 z-20 flex flex-col overflow-hidden">
                
                {/* Inner Edge-to-Edge Screen */}
                <div className="relative flex-1 w-full rounded-[24px] sm:rounded-[29px] lg:rounded-[31px] overflow-hidden bg-[#F8FBFE] shadow-inner flex flex-col">
                  
                  {/* Subtle camera punch-hole cutout */}
                  <div className="absolute top-2 sm:top-2.5 left-1/2 -translate-x-1/2 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-black rounded-full z-30 flex items-center justify-center shadow-xs">
                    <div className="w-1 h-1 rounded-full bg-slate-900 ring-1 ring-slate-800/60" />
                  </div>

                  {/* Screen Content: Authentic Stoodify Beranda UI Photo */}
                  <img
                    src={berandaHomeImg}
                    alt="Tampilan Beranda Aplikasi Stoodify"
                    className="w-full h-full object-cover object-top select-none"
                    loading="eager"
                  />

                  {/* Subtle Glass Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
                </div>

                {/* Minimal Hardware Home Indicator Bar */}
                <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-0.5 bg-slate-400/80 rounded-full z-30" />
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ======================================================== */}
      {/* 3. MARQUEE PILL STRIP DI BAWAH HERO                     */}
      {/* ======================================================== */}
      <div className="w-full bg-transparent py-5 sm:py-8 overflow-hidden relative z-10 mask-fade-x mt-8 sm:mt-14">
        <div className="animate-ticker select-none flex items-center">
          {[...marqueePills, ...marqueePills, ...marqueePills, ...marqueePills].map((pill, idx) => (
            <span
              key={idx}
              className="inline-block mx-2 sm:mx-3 border border-slate-200/80 bg-white/80 backdrop-blur-xs rounded-full px-3.5 sm:px-5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-medium text-[#777B8C] shadow-2xs whitespace-nowrap hover:border-[#0062FF]/40 hover:text-[#0062FF] transition-colors"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

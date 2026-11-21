import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import berandaHomeImg from '../assets/screens/beranda-home.jpeg';

const DIRECT_APK_DOWNLOAD_URL = 'https://github.com/Sekawan-Inkubasi/stoodify-apk/releases/download/latest/stoodify-latest.apk';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full bg-[#F8FBFE] overflow-hidden pt-20 sm:pt-28 lg:pt-36 pb-12 sm:pb-20">

      {/* Ambient Radial Gradients */}
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

        {/* 2-Column Hero: Left Text & CTA, Right Phone Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-8 items-center">

          {/* Kolom Kiri: Teks & Call To Action */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-4 sm:space-y-6">

            {/* Main Headline - Clean Intentional Editorial Typography */}
            <h1 className="text-2xl sm:text-4xl lg:text-[52px] font-extrabold tracking-tight text-[#171923] leading-[1.2] sm:leading-[1.15]">
              Belajar Efektif <br className="hidden sm:inline" />
              Bareng <span className="text-[#0062FF]">Stoodify</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-xs sm:text-base lg:text-lg text-[#777B8C] max-w-sm sm:max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Platform pembelajaran interaktif yang membantu siswa belajar, mengerjakan tugas, dan mengasah kemampuan melalui pengalaman yang lebih menyenangkan.
            </p>

            {/* CTA Button */}
            <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
              <a
                href={DIRECT_APK_DOWNLOAD_URL}
                download="stoodify-latest.apk"
                className="w-full sm:w-auto max-w-xs sm:max-w-none px-5 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-semibold text-white bg-[#0062FF] hover:bg-[#0052D9] rounded-full shadow-[0_6px_20px_rgba(0,98,255,0.28)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:-translate-y-0.5" />
                <span>Unduh APK Android (~19 MB)</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/80 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* Kolom Kanan: Foto / Visual Mockup Smartphone (Grounded & Clean) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-center relative mt-6 sm:mt-8 lg:mt-0 lg:-translate-x-6 xl:-translate-x-10">

            {/* Gentle Ambient Glow behind phone */}
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[280px] lg:w-[300px] h-[220px] sm:h-[280px] lg:h-[300px] bg-gradient-to-tr from-[#0062FF]/15 via-[#00D2FF]/10 to-blue-200/10 rounded-full blur-2xl sm:blur-3xl pointer-events-none -z-0"
            />

            {/* Smartphone Mockup Container - Grounded and Stable */}
            <div className="relative z-10 flex items-center justify-center">

              {/* CENTERPIECE SMARTPHONE MOCKUP */}
              <div className="relative w-[180px] sm:w-[210px] md:w-[225px] lg:w-[235px] xl:w-[245px] aspect-[9/20] bg-slate-900 rounded-[28px] sm:rounded-[34px] lg:rounded-[36px] p-[4px] sm:p-[5px] shadow-[0_20px_50px_-10px_rgba(0,98,255,0.18)] ring-1 ring-slate-800/80 z-20 flex flex-col overflow-hidden">

                {/* Inner Edge-to-Edge Screen */}
                <div className="relative flex-1 w-full rounded-[24px] sm:rounded-[29px] lg:rounded-[31px] overflow-hidden bg-[#F8FBFE] shadow-inner flex flex-col">

                  {/* Camera punch-hole cutout */}
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

                  {/* Glass Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
                </div>

                {/* Hardware Home Indicator Bar */}
                <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-0.5 bg-slate-400/80 rounded-full z-30" />
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

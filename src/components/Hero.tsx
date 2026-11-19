import React from 'react';
import { Download, Sparkles, ShieldCheck, Zap, ArrowRight, Smartphone } from 'lucide-react';
import { DeviceSimulator } from './DeviceSimulator';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-grid-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Persuasive Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Inkubasi Exhibition Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/70 shadow-sm text-xs font-semibold text-[#0062FF]">
              <span className="w-2 h-2 rounded-full bg-[#0062FF] animate-pulse"></span>
              Pameran Karya Inkubasi Siswa · SMK Telkom Sidoarjo
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.14]">
              Belajar Efektif <br className="hidden sm:inline" />
              <span className="text-[#0062FF] relative inline-block">
                Tanpa Panik
                <svg
                  className="absolute left-0 -bottom-2 w-full h-2.5 text-[#0062FF]/20"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="6" fill="none" />
                </svg>
              </span>{' '}
              Bareng Stoodify.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#475569] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Asisten belajar pintar berbasis AI yang menyusun jadwal sekolah terintegrasi, memprioritaskan tugas mendesak, dan memprediksi materi yang akan datang—semuanya dalam satu genggaman.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#demo"
                className="w-full sm:w-auto px-6 py-3.5 text-base font-semibold text-white bg-[#0062FF] hover:bg-[#0052D9] rounded-xl shadow-btn-primary transition-all flex items-center justify-center gap-2.5 group"
              >
                <Smartphone className="w-5 h-5 transition-transform group-hover:scale-110" />
                Coba Simulator Langsung
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://github.com/Sekawan-Inkubasi/stoodify-apk/releases"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 text-base font-semibold text-[#0F172A] bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5 text-[#0062FF]" />
                Unduh APK Android (~9.9 MB)
              </a>
            </div>

            {/* Micro Highlights / Trust Signals */}
            <div className="pt-4 border-t border-slate-200/70 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0062FF] flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A]">0 Detik Buka</h4>
                  <p className="text-[10px] text-[#64748B]">Offline Native Shell</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A]">Bebas Iklan</h4>
                  <p className="text-[10px] text-[#64748B]">Fokus Edukasi Siswa</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A]">AI Edukatif</h4>
                  <p className="text-[10px] text-[#64748B]">Bimbing Konsep Belajar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Device Frame */}
          <div id="demo" className="lg:col-span-5 flex justify-center scroll-mt-24">
            <DeviceSimulator />
          </div>

        </div>
      </div>
    </section>
  );
};

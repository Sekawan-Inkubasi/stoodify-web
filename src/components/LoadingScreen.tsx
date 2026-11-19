import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Timer, 
  Flame, 
  Calendar, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Pin
} from 'lucide-react';
import logoStoodify from '../assets/logo_stoodify.png';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Progressive loading steps text
  const getStatusText = (val: number) => {
    if (val < 28) return 'Menyinkronkan jadwal mingguan SMK Telkom Sidoarjo...';
    if (val < 58) return 'Menganalisis tingkat urgensi LKPD & urutan prioritas tugas...';
    if (val < 86) return 'Menyiapkan modul Zen Focus & asisten belajar pintar...';
    return 'Meja belajar siap. Selamat datang di Stoodify!';
  };

  const handleDismiss = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsDismissed(true);
      if (onComplete) onComplete();
    }, 700);
  };

  // Keyboard shortcut: Space, Enter, or Escape to skip immediately
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter' || e.key === 'Escape') {
        handleDismiss();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Organic progress bar increment (~1.8 seconds total)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.floor(Math.random() * 11) + 7;
        return Math.min(prev + step, 100);
      });
    }, 110);

    return () => clearInterval(interval);
  }, []);

  // Automatic fade out when reaching 100%
  useEffect(() => {
    if (progress === 100) {
      const fadeTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 350);

      const dismissTimer = setTimeout(() => {
        setIsDismissed(true);
        if (onComplete) onComplete();
      }, 1050);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(dismissTimer);
      };
    }
  }, [progress, onComplete]);

  // Lock body scroll while intro is visible
  useEffect(() => {
    if (!isDismissed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <div
      className={`fixed inset-0 z-50 w-screen h-screen min-h-screen bg-[#FAFBFD] bg-grid-subtle flex flex-col justify-between p-6 sm:p-10 md:p-12 select-none overflow-hidden transition-all duration-700 ${
        isFadingOut ? 'intro-exit' : 'opacity-100'
      }`}
    >
      {/* Background Huge Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="text-[19vw] font-black text-slate-900/[0.022] tracking-tighter uppercase leading-none">
          STOODIFY
        </span>
      </div>

      {/* Top Bar: Clean Brand Mark & Skip Button */}
      <header className="relative z-20 w-full max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/90 shadow-sm p-1 flex items-center justify-center">
            <img src={logoStoodify} alt="Stoodify" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#0F172A] tracking-tight">STOODIFY WEB</span>
            <span className="text-[10px] text-[#64748B]">Pameran Karya Inkubasi · SMK Telkom Sidoarjo</span>
          </div>
        </div>

        <button
          onClick={handleDismiss}
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-blue-50 border border-slate-200/90 text-xs font-semibold text-slate-700 hover:text-[#0062FF] shadow-xs transition-all cursor-pointer"
        >
          <span>Lewati Intro</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </header>

      {/* Centerpiece: Screen-Filling Brand Typography & Floating Student Universe */}
      <main className="relative z-10 my-auto w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center py-6 animate-content-reveal">
        
        {/* Floating Creative Study Elements (Student Universe) */}
        
        {/* Card 1 (Top Left): Realistic Sticky Note LKPD */}
        <div className="hidden md:flex flex-col absolute -top-14 lg:-top-16 left-2 lg:left-10 bg-[#FFFBEB] border border-amber-200/90 shadow-xl rounded-2xl p-4 text-left w-64 lg:w-72 animate-float-1 transition-transform hover:scale-105 z-20">
          <div className="flex items-center justify-between mb-2">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-900 uppercase tracking-wide">
              <Pin className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              LKPD Besok
            </span>
            <span className="text-[10px] font-bold bg-rose-100 text-rose-700 px-2 py-0.5 rounded-md">
              SG · Sangat Tinggi
            </span>
          </div>
          <h4 className="text-sm font-bold text-slate-900 leading-snug">
            Hardening Linux Server
          </h4>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-amber-200/50 text-[11px] text-slate-600">
            <span>Keamanan Jaringan</span>
            <span className="font-semibold text-rose-600">23:59 WIB</span>
          </div>
        </div>

        {/* Card 2 (Top Right): Live Zen Focus Widget */}
        <div className="hidden md:flex flex-col absolute -top-12 lg:-top-14 right-2 lg:right-10 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl rounded-2xl p-4 text-left w-60 lg:w-68 animate-float-2 transition-transform hover:scale-105 z-20">
          <div className="flex items-center justify-between mb-1.5">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0062FF] uppercase tracking-wide">
              <Timer className="w-3.5 h-3.5 text-[#0062FF]" />
              Zen Focus Mode
            </span>
            <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Aktif
            </span>
          </div>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="text-2xl font-black font-mono text-[#0F172A] tracking-tight">25:00</span>
            <span className="text-xs text-slate-500">fokus tanpa notifikasi</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full mt-2.5 overflow-hidden">
            <div className="bg-[#0062FF] h-full rounded-full w-4/5"></div>
          </div>
        </div>

        {/* Card 3 (Bottom Left): AI Subject Predictor */}
        <div className="hidden lg:flex flex-col absolute -bottom-12 lg:-bottom-16 left-4 lg:left-14 bg-white/95 backdrop-blur-md border border-indigo-100 shadow-xl rounded-2xl p-4 text-left w-68 lg:w-76 animate-float-3 transition-transform hover:scale-105 z-20">
          <div className="flex items-center justify-between mb-1.5 text-indigo-600">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[11px] font-bold uppercase tracking-wider">AI Prediktif Materi</span>
            </div>
            <span className="text-[10px] font-bold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-md">
              92% Akurat
            </span>
          </div>
          <p className="text-xs font-semibold text-slate-800 leading-relaxed">
            Probabilitas tinggi materi OSPF & VLAN keluar di ujian semester
          </p>
          <div className="mt-2 text-[10px] text-slate-400 font-medium">
            Analisis silabus kejuruan SMK Telkom
          </div>
        </div>

        {/* Card 4 (Bottom Right): Streak & Telkom Sidoarjo Student Card */}
        <div className="hidden lg:flex flex-col absolute -bottom-14 lg:-bottom-18 right-4 lg:right-14 bg-[#0F172A] text-white border border-slate-800 shadow-2xl rounded-2xl p-4 text-left w-64 lg:w-72 animate-float-4 transition-transform hover:scale-105 z-20">
          <div className="flex items-center justify-between text-slate-400 text-[10px] font-mono uppercase tracking-wider mb-2">
            <span>SMK Telkom Sidoarjo</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5 fill-current" />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-tight">5 Hari Belajar Aktif</p>
              <p className="text-[10px] text-slate-400 mt-0.5">0 tugas terlambat · Bebas panik</p>
            </div>
          </div>
        </div>

        {/* Accent Chip (Mid Left) */}
        <div className="hidden xl:flex absolute top-1/2 -translate-y-1/2 -left-6 bg-white/95 backdrop-blur-sm border border-emerald-200/80 shadow-md px-3.5 py-2 rounded-xl text-left items-center gap-2 text-xs font-bold text-emerald-700 animate-float-2 z-10">
          <Zap className="w-4 h-4 text-emerald-600 fill-emerald-100" />
          <span>0 Detik Buka · 100% Offline Shell</span>
        </div>

        {/* Accent Chip (Mid Right) */}
        <div className="hidden xl:flex absolute top-1/2 -translate-y-1/2 -right-6 bg-white/95 backdrop-blur-sm border border-blue-200/80 shadow-md px-3.5 py-2 rounded-xl text-left items-center gap-2 text-xs font-bold text-[#0062FF] animate-float-4 z-10">
          <Calendar className="w-4 h-4" />
          <span>07:30 WIB · Keamanan Jaringan</span>
        </div>

        {/* Center Logo & Massive Fullscreen Brand Typography */}
        <div className="space-y-5 sm:space-y-6">
          
          {/* Logo with Soft Dynamic Shadow */}
          <div className="relative inline-block">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto rounded-[28px] sm:rounded-[34px] bg-white border border-slate-200/90 p-4 shadow-[0_20px_50px_rgba(0,98,255,0.16)] flex items-center justify-center transition-transform hover:scale-105">
              <img src={logoStoodify} alt="Stoodify" className="w-full h-full object-contain" />
            </div>
            <div className="absolute -inset-3 bg-[#0062FF]/12 rounded-[40px] blur-2xl -z-10 pointer-events-none"></div>
          </div>

          {/* GIGANTIC Full-Screen Title: Solid Black stoodify without {ify} */}
          <h1 className="text-7xl sm:text-9xl md:text-[130px] lg:text-[160px] xl:text-[180px] font-black tracking-tighter text-[#0F172A] leading-none select-none">
            stoodify
          </h1>

          {/* Clear Human Tagline */}
          <div className="space-y-2">
            <p className="text-base sm:text-xl md:text-2xl font-extrabold text-[#0F172A] tracking-tight">
              Belajar Efektif Tanpa Panik Bareng Stoodify
            </p>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-xl mx-auto font-medium">
              Jadwal Sekolah Terintegrasi · Rekomendasi Prioritas AI · Pomodoro Zen Focus
            </p>
          </div>

        </div>

      </main>

      {/* Bottom Area: Wide, Grounded Industrial Progress Section */}
      <footer className="relative z-20 w-full max-w-2xl mx-auto space-y-3">
        {/* Dynamic status line and percentage */}
        <div className="flex items-center justify-between text-xs font-mono text-[#334155]">
          <span className="flex items-center gap-2 truncate">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0062FF] animate-pulse shrink-0"></span>
            <span className="truncate font-medium">{getStatusText(progress)}</span>
          </span>
          <span className="font-bold text-[#0062FF] pl-2 shrink-0 text-sm">{progress}%</span>
        </div>

        {/* Wide Full Progress Track */}
        <div className="w-full h-3 bg-slate-200/90 rounded-full overflow-hidden p-0.5 border border-slate-300/40 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#0062FF] via-[#2F80ED] to-[#00D2FF] rounded-full transition-all duration-150 ease-out shadow-[0_0_14px_rgba(0,98,255,0.45)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Keyboard shortcut hint */}
        <p className="text-[11px] text-center text-slate-400">
          Tekan <kbd className="px-2 py-0.5 bg-white border border-slate-200 rounded-md text-[10px] font-mono font-semibold text-slate-700 shadow-xs">Spasi</kbd> atau klik <span className="underline decoration-slate-300 font-semibold cursor-pointer hover:text-[#0062FF]" onClick={handleDismiss}>Lewati</span> untuk langsung masuk
        </p>
      </footer>
    </div>
  );
};

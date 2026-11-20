import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Smartphone, Gamepad2 } from 'lucide-react';
import logoStoodify from '../assets/logo_stoodify.png';

interface NavbarProps {
  onOpenGame?: () => void;
  isAppLoading?: boolean;
}

const DIRECT_APK_DOWNLOAD_URL = 'https://github.com/Sekawan-Inkubasi/stoodify-apk/releases/download/v2.1.0/stoodify-v2.1.0.apk';

export const Navbar: React.FC<NavbarProps> = ({ onOpenGame, isAppLoading = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // While initial loading screen is active, hide entire navbar so it never leaks onto the loading screen
  if (isAppLoading) {
    return null;
  }

  const navLinks = [
    { label: 'Fitur', href: '#fitur' },
    { label: 'Cara Kerja', href: '#cara-kerja' },
  ];

  const handleGameClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenGame) {
      onOpenGame();
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Main Navigation */}
      <header
        className={`w-full transition-all duration-300 z-40 ${
          scrolled ? 'opacity-0 pointer-events-none -translate-y-4' : 'opacity-100 relative'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-3">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white shadow-sm border border-slate-200/80 p-1 flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
              <img src={logoStoodify} alt="Stoodify Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#0F172A] flex items-center gap-1.5 leading-none">
                STOODIFY
                <span className="text-[9px] sm:text-[10px] uppercase font-semibold bg-blue-50 text-[#0062FF] px-1.5 sm:px-2 py-0.5 rounded-full border border-blue-200/60">
                  Demo
                </span>
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#64748B] mt-0.5 sm:mt-1 font-normal leading-none truncate">
                Belajar Efektif Tanpa Panik
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#475569] hover:text-[#0062FF] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}

            {/* Teka-Teki (Spin the Wheel Quiz) Feature Button */}
            <button
              onClick={handleGameClick}
              className="text-sm font-semibold text-[#0062FF] hover:text-[#0052D9] flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50/80 hover:bg-blue-100/80 border border-blue-200/70 transition-all cursor-pointer whitespace-nowrap shrink-0 group"
            >
              <Gamepad2 className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Teka-Teki</span>
              <span className="text-[9px] uppercase font-bold tracking-wider bg-[#0062FF] text-white px-1.5 py-0.5 rounded-full leading-none">
                Quiz
              </span>
            </button>
          </nav>

          {/* Right Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="#demo"
              className="px-4 py-2 text-sm font-semibold text-[#0062FF] hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <Smartphone className="w-4 h-4" />
              <span>Coba Simulator</span>
            </a>
            <a
              href={DIRECT_APK_DOWNLOAD_URL}
              download="stoodify-v2.1.0.apk"
              className="px-4 py-2 text-sm font-semibold text-white bg-[#0062FF] hover:bg-[#0052D9] rounded-lg shadow-btn-primary transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              <span>Unduh APK</span>
            </a>
          </div>

          {/* Mobile Right Controls: Teka-Teki Pill + Hamburger */}
          <div className="flex md:hidden items-center gap-2 shrink-0">
            <button
              onClick={handleGameClick}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-bold text-[#0062FF] active:scale-95 transition-all"
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>Teka-Teki</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Dynamic Floating Pill Island on Scroll */}
      <nav
        className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[94%] max-w-2xl ${
          scrolled ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md rounded-full px-3.5 sm:px-6 py-2 shadow-nav border border-slate-200/90 flex items-center justify-between gap-2">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <img src={logoStoodify} alt="Logo" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
            <span className="font-bold text-xs sm:text-sm text-[#0F172A] tracking-tight">STOODIFY</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden sm:flex items-center gap-5 text-xs font-medium text-[#475569] whitespace-nowrap">
            <a href="#fitur" className="hover:text-[#0062FF] transition-colors">Fitur</a>
            <a href="#cara-kerja" className="hover:text-[#0062FF] transition-colors">Cara Kerja</a>
            <button
              onClick={handleGameClick}
              className="hover:text-[#0052D9] text-[#0062FF] font-semibold flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>Teka-Teki</span>
              <span className="text-[9px] uppercase font-bold bg-[#0062FF] text-white px-1.5 py-0.5 rounded-full leading-none">
                Quiz
              </span>
            </button>
          </div>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <a
              href="#demo"
              className="text-xs font-semibold px-3 py-1.5 text-[#0062FF] bg-blue-50/80 hover:bg-blue-100/80 rounded-full transition-colors flex items-center gap-1 whitespace-nowrap"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Simulator</span>
            </a>
            <a
              href={DIRECT_APK_DOWNLOAD_URL}
              download="stoodify-v2.1.0.apk"
              className="text-xs font-semibold px-3.5 py-1.5 text-white bg-[#0062FF] hover:bg-[#0052D9] rounded-full shadow-sm transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh APK</span>
            </a>
          </div>

          {/* Mobile Floating Pill Controls (Compact) */}
          <div className="flex sm:hidden items-center gap-1.5 shrink-0">
            <button
              onClick={handleGameClick}
              className="px-2.5 py-1 rounded-full bg-blue-50 text-[#0062FF] text-[10px] font-bold flex items-center gap-1 border border-blue-200/60"
            >
              <Gamepad2 className="w-3 h-3" />
              <span>Quiz</span>
            </button>
            <a
              href={DIRECT_APK_DOWNLOAD_URL}
              download="stoodify-v2.1.0.apk"
              className="px-2.5 py-1 rounded-full bg-[#0062FF] text-white text-[10px] font-bold flex items-center gap-1 shadow-xs"
            >
              <Download className="w-3 h-3" />
              <span>Unduh</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Menu (Accessible, Touch-Friendly, Never Clipped) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex flex-col justify-end animate-in fade-in duration-200">
          {/* Backdrop Tap to Close */}
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />

          <div className="bg-white rounded-t-3xl p-5 pb-8 shadow-2xl space-y-4 animate-in slide-in-from-bottom duration-200 max-h-[85dvh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <img src={logoStoodify} alt="Logo" className="w-8 h-8 object-contain" />
                <div>
                  <span className="font-bold text-sm text-[#0F172A] block leading-none">STOODIFY</span>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">Menu Navigasi</span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#0062FF] transition-colors"
                >
                  {link.label}
                </a>
              ))}

              {/* Teka-Teki in Mobile Drawer */}
              <button
                onClick={handleGameClick}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-bold text-[#0062FF] bg-blue-50/80 hover:bg-blue-100/80 border border-blue-200/60 flex items-center justify-between cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Gamepad2 className="w-4 h-4 text-[#0062FF]" />
                  <span>Spin the Wheel Quiz</span>
                </span>
                <span className="text-[10px] font-extrabold uppercase bg-[#0062FF] text-white px-2 py-0.5 rounded-full">
                  Game 1-100
                </span>
              </button>
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-2.5">
              <a
                href="#demo"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 flex items-center justify-center gap-2 active:bg-slate-50"
              >
                <Smartphone className="w-4 h-4 text-[#0062FF]" />
                <span>Coba Simulator HP</span>
              </a>
              <a
                href={DIRECT_APK_DOWNLOAD_URL}
                download="stoodify-v2.1.0.apk"
                className="w-full py-3.5 rounded-xl bg-[#0062FF] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-btn-primary active:bg-[#0052D9]"
              >
                <Download className="w-4 h-4" />
                <span>Unduh APK Android (~9.9 MB)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
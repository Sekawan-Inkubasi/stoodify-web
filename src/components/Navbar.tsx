import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Sparkles, Smartphone } from 'lucide-react';
import logoStoodify from '../assets/logo_stoodify.png';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Fitur Unggulan', href: '#fitur' },
    { label: 'Cara Kerja', href: '#cara-kerja' },
    { label: 'Demo Interaktif', href: '#demo' },
    { label: 'Unduh Aplikasi', href: '#unduh' },
  ];

  return (
    <>
      {/* Top Main Navigation */}
      <header className={`w-full transition-all duration-300 z-40 ${scrolled ? 'opacity-0 pointer-events-none -translate-y-4' : 'opacity-100 relative'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-200/80 p-1 flex items-center justify-center transition-transform group-hover:scale-105">
              <img src={logoStoodify} alt="Stoodify Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#0F172A] flex items-center gap-1.5">
                STOODIFY
                <span className="text-[10px] uppercase font-semibold bg-blue-50 text-[#0062FF] px-2 py-0.5 rounded-full border border-blue-200/60">
                  Demo
                </span>
              </span>
              <span className="text-[11px] text-[#64748B] -mt-0.5 font-normal">
                Belajar Efektif Tanpa Panik
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#475569] hover:text-[#0062FF] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#demo"
              className="px-4 py-2 text-sm font-semibold text-[#0062FF] hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Smartphone className="w-4 h-4" />
              Coba Simulator
            </a>
            <a
              href="https://github.com/Sekawan-Inkubasi/stoodify-apk/releases"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-sm font-semibold text-white bg-[#0062FF] hover:bg-[#0052D9] rounded-lg shadow-btn-primary transition-all flex items-center gap-1.5"
            >
              <Download className="w-4 h-4" />
              Unduh APK
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Dynamic Floating Pill Island on Scroll (inspired by Satria App) */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[92%] max-w-2xl ${
          scrolled ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md rounded-full px-4 sm:px-6 py-2.5 shadow-nav border border-slate-200/90 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <img src={logoStoodify} alt="Logo" className="w-7 h-7 object-contain" />
            <span className="font-bold text-sm text-[#0F172A] tracking-tight">STOODIFY</span>
          </a>

          <div className="hidden sm:flex items-center gap-6 text-xs font-medium text-[#475569]">
            <a href="#fitur" className="hover:text-[#0062FF] transition-colors">Fitur</a>
            <a href="#cara-kerja" className="hover:text-[#0062FF] transition-colors">Cara Kerja</a>
            <a href="#demo" className="hover:text-[#0062FF] transition-colors">Simulator</a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#demo"
              className="text-xs font-semibold px-3 py-1.5 text-[#0062FF] bg-blue-50/80 hover:bg-blue-100/80 rounded-full transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Coba</span> Demo
            </a>
            <a
              href="https://github.com/Sekawan-Inkubasi/stoodify-apk/releases"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold px-3.5 py-1.5 text-white bg-[#0062FF] hover:bg-[#0052D9] rounded-full shadow-sm transition-all flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Unduh APK
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex flex-col justify-end">
          <div className="bg-white rounded-t-3xl p-6 shadow-2xl space-y-4 animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <img src={logoStoodify} alt="Logo" className="w-8 h-8 object-contain" />
                <span className="font-bold text-[#0F172A]">Menu Stoodify</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-slate-500 hover:text-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0062FF]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="#demo"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center text-sm font-semibold text-[#0062FF] bg-blue-50 rounded-xl"
              >
                Coba Simulator HP
              </a>
              <a
                href="https://github.com/Sekawan-Inkubasi/stoodify-apk/releases"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 text-center text-sm font-semibold text-white bg-[#0062FF] rounded-xl shadow-btn-primary flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Unduh APK Android (v1.1.0)
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

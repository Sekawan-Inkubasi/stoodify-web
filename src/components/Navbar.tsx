import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Smartphone, Gamepad2 } from 'lucide-react';
import logoStoodify from '../assets/logo_stoodify.png';

interface NavbarProps {
  onOpenGame?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGame }) => {
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-200/80 p-1 flex items-center justify-center transition-transform group-hover:scale-105">
              <img src={logoStoodify} alt="Stoodify Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#0F172A] flex items-center gap-1.5 leading-none">
                STOODIFY
                <span className="text-[10px] uppercase font-semibold bg-blue-50 text-[#0062FF] px-2 py-0.5 rounded-full border border-blue-200/60">
                  Demo
                </span>
              </span>
              <span className="text-[11px] text-[#64748B] mt-1 font-normal leading-none whitespace-nowrap">
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

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="#demo"
              className="px-4 py-2 text-sm font-semibold text-[#0062FF] hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <Smartphone className="w-4 h-4" />
              <span>Coba Simulator</span>
            </a>
            <a
              href="https://github.com/Sekawan-Inkubasi/stoodify-apk/releases"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-sm font-semibold text-white bg-[#0062FF] hover:bg-[#0052D9] rounded-lg shadow-btn-primary transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              <span>Unduh APK</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Dynamic Floating Pill Island on Scroll */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[94%] max-w-3xl ${
          scrolled ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md rounded-full px-5 py-2.5 shadow-nav border border-slate-200/90 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <img src={logoStoodify} alt="Logo" className="w-7 h-7 object-contain" />
            <span className="font-bold text-sm text-[#0F172A] tracking-tight">STOODIFY</span>
          </a>

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

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="#demo"
              className="text-xs font-semibold px-3 py-1.5 text-[#0062FF] bg-blue-50/80 hover:bg-blue-100/80 rounded-full transition-colors flex items-center gap-1 whitespace-nowrap"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Coba</span> Simulator
            </a>
            <a
              href="https://github.com/Sekawan-Inkubasi/stoodify-apk/releases"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold px-3.5 py-1.5 text-white bg-[#0062FF] hover:bg-[#0052D9] rounded-full shadow-sm transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh APK</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex flex-col justify-end animate-in fade-in">
          <div className="bg-white rounded-t-3xl p-6 shadow-2xl space-y-4 animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <img src={logoStoodify} alt="Logo" className="w-8 h-8 object-contain" />
                <span className="font-bold text-[#0F172A]">Menu Stoodify</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#0062FF] transition-colors"
                >
                  {link.label}
                </a>
              ))}

              {/* Teka-Teki in Mobile Drawer */}
              <button
                onClick={handleGameClick}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold text-[#0062FF] bg-blue-50 flex items-center justify-between cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Gamepad2 className="w-4 h-4" />
                  Spin the Wheel Quiz
                </span>
                <span className="text-[10px] font-bold bg-[#0062FF] text-white px-2 py-0.5 rounded-full">
                  Mainkan
                </span>
              </button>
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-2">
              <a
                href="#demo"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 flex items-center justify-center gap-2"
              >
                <Smartphone className="w-4 h-4 text-[#0062FF]" />
                Coba Simulator HP
              </a>
              <a
                href="https://github.com/Sekawan-Inkubasi/stoodify-apk/releases"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-[#0062FF] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-btn-primary"
              >
                <Download className="w-4 h-4" />
                Unduh APK Android (~9.9 MB)
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
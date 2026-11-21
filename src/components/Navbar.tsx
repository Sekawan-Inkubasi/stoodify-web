import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import logoStoodify from '../assets/logo_stoodify.png';

interface NavbarProps {
  onOpenGame?: () => void;
  isAppLoading?: boolean;
}

const DIRECT_APK_DOWNLOAD_URL = 'https://github.com/Sekawan-Inkubasi/stoodify-apk/releases/download/latest/stoodify-latest.apk';

export const Navbar: React.FC<NavbarProps> = ({ onOpenGame, isAppLoading = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
    { label: 'FAQ', href: '#faq' },
    { label: 'Unduh', href: '#unduh' },
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
      {/* ======================================================== */}
      {/* FLOATING PILL NAVBAR (Matching Nicepay Modern SaaS Style) */}
      {/* ======================================================== */}
      <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-3 sm:px-4 pointer-events-none">
        <div
          className={`pointer-events-auto max-w-4xl mx-auto rounded-full px-3.5 sm:px-6 py-2 sm:py-3 flex items-center justify-between gap-3 sm:gap-4 transition-all duration-300 ${scrolled
              ? 'bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_12px_36px_rgba(15,23,42,0.08)]'
              : 'bg-white/85 backdrop-blur-md border border-slate-200/70 shadow-[0_8px_30px_rgba(0,0,0,0.04)]'
            }`}
        >
          {/* Brand Logo - Left */}
          <a href="#" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
            <img
              src={logoStoodify}
              alt="Stoodify Logo"
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-xs sm:text-base font-extrabold tracking-wider text-[#171923] uppercase">
              STOODIFY
            </span>
          </a>

          {/* Centered Navigation Menu - Desktop */}
          <nav className="hidden md:flex items-center gap-7 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs sm:text-sm font-medium text-[#777B8C] hover:text-[#0062FF] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={handleGameClick}
              className="text-xs sm:text-sm font-medium text-[#777B8C] hover:text-[#0062FF] transition-colors cursor-pointer"
            >
              Teka-Teki
            </button>
          </nav>

          {/* Download APK Pill Button - Right (Desktop) */}
          <div className="hidden md:flex items-center shrink-0">
            <a
              href={DIRECT_APK_DOWNLOAD_URL}
              download="stoodify-latest.apk"
              className="px-5 py-2 text-xs font-semibold text-white bg-[#0062FF] hover:bg-[#0052D9] rounded-full shadow-sm hover:shadow-[0_4px_16px_rgba(0,98,255,0.35)] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh APK</span>
            </a>
          </div>

          {/* Mobile Right Controls: Compact APK button & Menu Toggle */}
          <div className="flex md:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href={DIRECT_APK_DOWNLOAD_URL}
              download="stoodify-latest.apk"
              className="px-2.5 py-1 text-[11px] font-semibold text-white bg-[#0062FF] hover:bg-[#0052D9] rounded-full shadow-xs flex items-center gap-1"
            >
              <Download className="w-3 h-3" />
              <span>APK</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full bg-slate-100/90 text-[#171923] hover:bg-slate-200 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* ======================================================== */}
      {/* MOBILE TOP DROPDOWN / OVERLAY MENU                       */}
      {/* ======================================================== */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex flex-col justify-start animate-fade-in">

          {/* Top-down Drawer Panel */}
          <div className="bg-white rounded-b-3xl p-5 pt-4 pb-6 shadow-2xl space-y-4 animate-slide-down border-b border-slate-200/90">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <img src={logoStoodify} alt="Logo" className="w-7 h-7 object-contain" />
                <span className="font-extrabold text-sm text-[#171923] tracking-wider">STOODIFY</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-[#171923] hover:bg-slate-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={handleGameClick}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-[#171923] hover:bg-slate-50 transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>Teka-Teki (Quiz)</span>
              </button>
            </div>

            <div className="pt-2">
              <a
                href={DIRECT_APK_DOWNLOAD_URL}
                download="stoodify-latest.apk"
                className="w-full py-3.5 rounded-full bg-[#0062FF] hover:bg-[#0052D9] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-btn-primary transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Unduh APK Android (~19 MB)</span>
              </a>
            </div>
          </div>

          {/* Backdrop Click Area to Close */}
          <div className="flex-1 w-full" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </>
  );
};

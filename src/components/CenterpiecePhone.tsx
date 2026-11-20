import React from 'react';
import berandaScreen from '../assets/screens/01-beranda-home.svg';

export const CenterpiecePhone: React.FC = () => {
  return (
    <div className="relative mx-auto flex items-center justify-center select-none pointer-events-none">
      
      {/* Outer Glow Halo */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/25 via-sky-400/20 to-indigo-500/20 rounded-[58px] blur-2xl transform -rotate-1 pointer-events-none"></div>

      {/* Modern Smartphone Mockup Body (Matching Pinterest Sleek Titanium Bezel) */}
      <div className="relative w-[min(300px,82vw)] sm:w-[320px] md:w-[340px] aspect-[390/800] bg-slate-950 rounded-[48px] p-2.5 shadow-2xl border-[7px] border-slate-900 ring-1 ring-white/20 transform md:-rotate-1 hover:rotate-0 transition-transform duration-500">
        
        {/* Subtle Screen Bezel Reflection / Metallic Rim */}
        <div className="absolute inset-0 rounded-[42px] border border-white/10 pointer-events-none"></div>

        {/* Dynamic Island / Top Speaker Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-end px-2.5 shadow-sm">
          <div className="w-2.5 h-2.5 bg-slate-900 rounded-full ring-1 ring-slate-800"></div>
        </div>

        {/* Inner Phone Screen with Authentic Stoodify Beranda UI */}
        <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-[#F8FBFE] shadow-inner flex flex-col">
          <img
            src={berandaScreen}
            alt="Tampilan Antarmuka Aplikasi Stoodify"
            className="w-full h-full object-cover object-top select-none"
            loading="eager"
          />
          {/* Subtle Glass Glare Reflex Across Screen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none"></div>
        </div>

        {/* Bottom Hardware Home Indicator Bar */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-28 h-1 bg-slate-400/80 rounded-full z-30"></div>
      </div>
    </div>
  );
};

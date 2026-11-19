import React from 'react';
import { Download, QrCode, Smartphone, ExternalLink, ShieldCheck, HardDrive, CheckCircle2 } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import logoStoodify from '../assets/logo_stoodify.png';

export const DownloadSection: React.FC = () => {
  const webDemoUrl = 'https://stoodify.vercel.app';
  const githubReleasesUrl = 'https://github.com/Sekawan-Inkubasi/stoodify-apk/releases';

  return (
    <section id="unduh" className="py-20 md:py-28 bg-[#F8FBFE] scroll-mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Big Download & QR Card Container */}
        <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-[36px] p-8 sm:p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
          
          {/* Subtle Background Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0062FF]/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Download Info */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20 text-xs font-semibold text-blue-300">
                <Smartphone className="w-3.5 h-3.5" />
                Rilis Resmi APK Android · v1.1.0
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Siap Belajar Lebih Tenang? <br />
                <span className="text-[#008CFF]">Pasang Stoodify Sekarang.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                Stoodify tersedia dalam format APK mandiri berukuran sangat ringan (~9.9 MB). Berjalan 100% offline tanpa kuota internet setelah terpasang di HP kamu.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={githubReleasesUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 text-base font-bold text-white bg-[#0062FF] hover:bg-[#0052D9] rounded-xl shadow-btn-primary transition-all flex items-center justify-center gap-2.5 group"
                >
                  <Download className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                  Unduh APK Android (GitHub)
                </a>

                <a
                  href={webDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4 text-blue-300" />
                  Buka Web Live Demo
                </a>
              </div>

              {/* Technical Badges */}
              <div className="pt-6 border-t border-slate-700/60 grid grid-cols-3 gap-3 text-left">
                <div className="flex items-center gap-2 text-slate-300 text-xs">
                  <HardDrive className="w-4 h-4 text-[#008CFF] shrink-0" />
                  <span>Hanya ~9.9 MB</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bebas Pelacak</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Android 8.0+</span>
                </div>
              </div>
            </div>

            {/* Right Column: Booth Standee QR Code Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl border border-slate-100 flex flex-col items-center text-center max-w-xs w-full relative">
                
                {/* Floating Stoodify Logo Pin */}
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-md p-1.5 flex items-center justify-center -mt-12 mb-3">
                  <img src={logoStoodify} alt="Stoodify" className="w-full h-full object-contain" />
                </div>

                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0062FF] uppercase tracking-wider mb-2">
                  <QrCode className="w-3.5 h-3.5" />
                  Pindai QR Pameran
                </div>

                <h4 className="text-base font-bold text-[#0F172A] mb-1">
                  Coba Langsung di Ponselmu
                </h4>
                <p className="text-xs text-slate-500 mb-5 leading-normal">
                  Arahkan kamera ponsel ke QR code di bawah untuk membuka demo website interaktif ini.
                </p>

                {/* Actual SVG QR Code */}
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/90 shadow-inner">
                  <QRCodeSVG
                    value={webDemoUrl}
                    size={170}
                    level="H"
                    includeMargin={false}
                    fgColor="#0F172A"
                  />
                </div>

                <div className="mt-4 text-center">
                  <span className="text-[11px] font-mono text-slate-400">
                    stoodify.vercel.app
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

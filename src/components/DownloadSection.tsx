import React, { useState } from 'react';
import { Download, QrCode, Smartphone, ShieldCheck, HardDrive, CheckCircle2 } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import logoStoodify from '../assets/logo_stoodify.png';

export const DownloadSection: React.FC = () => {
  const [showMobileQr, setShowMobileQr] = useState(false);
  const directApkUrl = 'https://github.com/Sekawan-Inkubasi/stoodify-apk/releases/download/latest/stoodify-latest.apk';

  return (
    <section id="unduh" className="py-14 sm:py-20 md:py-28 bg-[#F8FBFE] scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Big Download & QR Card Container */}
        <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-3xl sm:rounded-[36px] p-6 sm:p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
          
          {/* Subtle Background Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0062FF]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Download Info */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-blue-300 tracking-wide uppercase">
                <Smartphone className="w-3.5 h-3.5 text-blue-400" />
                Rilis Resmi APK Android · Versi Terbaru
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Siap Belajar Lebih Tenang? <br />
                <span className="text-[#00D2FF]">Pasang Stoodify Sekarang.</span>
              </h2>

              <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Stoodify tersedia dalam format APK mandiri berukuran sangat ringan (~9.9 MB). Berjalan mandiri tanpa kuota internet setelah terpasang di HP kamu.
              </p>

              {/* Action Button (Fokus & Nyaman Ditekan) */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2">
                <a
                  href={directApkUrl}
                  download="stoodify-latest.apk"
                  className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-[#0062FF] hover:bg-[#0052D9] rounded-2xl sm:rounded-xl shadow-[0_6px_20px_rgba(0,98,255,0.35)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
                >
                  <Download className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                  <span>Unduh APK Langsung</span>
                </a>

                <a
                  href="#fitur"
                  className="hidden sm:inline-flex w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl transition-all items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Bebas Iklan & Pelacak</span>
                </a>
              </div>

              {/* Technical Specifications (Clean Horizontal Items) */}
              <div className="pt-4 sm:pt-6 border-t border-slate-700/60 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-slate-300 text-xs">
                <div className="flex items-center gap-1.5">
                  <HardDrive className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                  <span className="text-[11px] sm:text-xs">Hanya ~9.9 MB</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-[11px] sm:text-xs">Bebas Iklan & Pelacak</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="text-[11px] sm:text-xs">Android 8.0+</span>
                </div>
              </div>

              {/* Opsi Tampilkan QR Code di Mobile (Untuk Berbagi ke Teman) */}
              <div className="lg:hidden pt-1">
                <button
                  type="button"
                  onClick={() => setShowMobileQr(!showMobileQr)}
                  className="inline-flex items-center gap-1.5 text-xs text-blue-300 hover:text-white transition-colors cursor-pointer py-1"
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>{showMobileQr ? 'Tutup QR Code' : 'Bagikan QR Code ke Teman'}</span>
                </button>

                {showMobileQr && (
                  <div className="mt-3 p-4 bg-white rounded-2xl text-slate-900 flex flex-col items-center text-center animate-in fade-in duration-200">
                    <p className="text-xs font-bold text-[#0F172A] mb-2.5">Pindai Kamera dari HP Teman</p>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <QRCodeSVG
                        value={directApkUrl}
                        size={150}
                        level="H"
                        includeMargin={false}
                        fgColor="#0F172A"
                      />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 mt-2">
                      stoodify-latest.apk (~9.9 MB)
                    </span>
                  </div>
                )}
              </div>

            </div>

            {/* Right Column: Booth Standee QR Code Card (Hanya Tampil di Layar PC/Laptop) */}
            <div className="hidden lg:flex lg:col-span-5 justify-center">
              <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl border border-slate-100 flex flex-col items-center text-center max-w-xs w-full relative">
                
                {/* Floating Stoodify Logo Pin */}
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-md p-1.5 flex items-center justify-center -mt-12 mb-3">
                  <img src={logoStoodify} alt="Stoodify" className="w-full h-full object-contain" />
                </div>

                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0062FF] uppercase tracking-wider mb-2">
                  <QrCode className="w-3.5 h-3.5" />
                  Pindai QR Unduh APK
                </div>

                <h4 className="text-base font-bold text-[#0F172A] mb-1">
                  Pasang Langsung di HP Kamu
                </h4>
                <p className="text-xs text-slate-500 mb-5 leading-normal">
                  Arahkan kamera ponsel ke QR code di bawah untuk langsung mengunduh file instalasi APK Stoodify.
                </p>

                {/* Actual SVG QR Code pointing directly to APK download */}
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/90 shadow-inner">
                  <QRCodeSVG
                    value={directApkUrl}
                    size={170}
                    level="H"
                    includeMargin={false}
                    fgColor="#0F172A"
                  />
                </div>

                <div className="mt-4 text-center">
                  <span className="text-[11px] font-mono text-slate-500 font-semibold">
                    stoodify-latest.apk (~9.9 MB)
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

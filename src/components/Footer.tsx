import React from 'react';
import { ExternalLink, Sparkles, Code2 } from 'lucide-react';
import logoStoodify from '../assets/logo_stoodify.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12 text-sm text-[#64748B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoStoodify} alt="Stoodify" className="w-9 h-9 object-contain" />
              <span className="text-xl font-bold tracking-tight text-[#0F172A]">STOODIFY</span>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-sm">
              Asisten belajar pintar dan manajemen jadwal sekolah berbasis AI. Membantu siswa belajar efektif, menghindari SKS, dan menyelesaikan tugas tepat waktu tanpa panik.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#0062FF] font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proyek Karya Siswa · SMK Telkom Sidoarjo</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">Navigasi Halaman</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#fitur" className="hover:text-[#0062FF] transition-colors">Fitur Unggulan</a></li>
              <li><a href="#cara-kerja" className="hover:text-[#0062FF] transition-colors">Alur Cara Kerja</a></li>
              <li><a href="#unduh" className="hover:text-[#0062FF] transition-colors">Unduh APK Android</a></li>
            </ul>
          </div>

          {/* Repositories & Open Source */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">Kode Sumber & Organisasi</h4>
            <div className="space-y-2.5">
              <a
                href="https://github.com/Sekawan-Inkubasi/stoodify-web"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/40 transition-colors text-xs text-[#0F172A] font-medium group"
              >
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-slate-700" />
                  <span>stoodify-web (Web Resmi)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0062FF]" />
              </a>

              <a
                href="https://github.com/Sekawan-Inkubasi/stoodify-apk"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/40 transition-colors text-xs text-[#0F172A] font-medium group"
              >
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-slate-700" />
                  <span>stoodify-apk (Rilis Android)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0062FF]" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Stoodify. Dikembangkan oleh Tim Sekawan Inkubasi.</p>
          <p>Didesain untuk Siswa SMA/SMK di Indonesia</p>
        </div>

      </div>
    </footer>
  );
};

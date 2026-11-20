import React from 'react';
import { Award } from 'lucide-react';
import logoStoodify from '../assets/logo_stoodify.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200/80 pt-14 pb-12 text-sm text-[#64748B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 pb-10 border-b border-slate-100">
          
          {/* Brand & Purpose */}
          <div className="max-w-md space-y-3.5">
            <div className="flex items-center gap-3">
              <img src={logoStoodify} alt="Stoodify" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#0F172A]">STOODIFY</span>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Asisten belajar pintar dan manajemen jadwal sekolah berbasis AI. Membantu siswa belajar efektif, menghindari SKS, dan menyelesaikan tugas tepat waktu tanpa panik.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#0062FF] font-medium pt-0.5">
              <Award className="w-4 h-4" />
              <span>Proyek Karya Siswa · SMK Telkom Sidoarjo</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">Navigasi Halaman</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#fitur" className="hover:text-[#0062FF] transition-colors">Fitur Unggulan</a></li>
              <li><a href="#cara-kerja" className="hover:text-[#0062FF] transition-colors">Alur Cara Kerja</a></li>
              <li><a href="#unduh" className="hover:text-[#0062FF] transition-colors">Unduh APK Android</a></li>
            </ul>
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

import React from 'react';
import { 
  Home, 
  CheckSquare, 
  Timer, 
  Sparkles, 
  Flame, 
  Play, 
  Calendar, 
  Plus, 
  Wifi, 
  Battery, 
  Clock,
  CheckCircle2,
  Circle
} from 'lucide-react';

export const DualPhoneMockup: React.FC = () => {
  return (
    <div className="relative w-full flex items-center justify-center py-4 select-none pointer-events-none">
      
      {/* Background Soft Glow */}
      <div className="absolute w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Mockup Container (Dual Phones - Static Visual Showcase) */}
      <div className="relative flex items-center justify-center">

        {/* ======================================================== */}
        {/* PHONE 1: LEFT PHONE (Angled / Serong Kiri - Daftar Tugas, visible on md+) */}
        {/* ======================================================== */}
        <div className="hidden md:flex flex-col w-[250px] lg:w-[270px] h-[520px] lg:h-[550px] bg-white rounded-[38px] border-[7px] border-slate-900 shadow-xl overflow-hidden transform -rotate-6 translate-x-8 translate-y-3 z-0">
          
          {/* Top Notch Bar */}
          <div className="w-full h-8 px-4 pt-2 flex items-center justify-between text-[10px] font-semibold text-slate-800 bg-white z-20">
            <span>09:41</span>
            <div className="w-16 h-3.5 bg-slate-900 rounded-full"></div>
            <div className="flex items-center gap-1 text-slate-700">
              <Wifi className="w-3 h-3" />
              <Battery className="w-3 h-3" />
            </div>
          </div>

          {/* Screen Content: Daftar Tugas */}
          <div className="flex-1 bg-[#F8FBFE] p-3 overflow-hidden space-y-2.5 text-left">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-[#0F172A]">Daftar Tugas</h4>
                <p className="text-[9px] text-slate-400">8 tugas aktif dijadwalkan</p>
              </div>
              <span className="text-[9px] font-bold text-[#0062FF] bg-blue-50 px-2 py-0.5 rounded">
                Semester Ganjil
              </span>
            </div>

            {/* Filter Pills */}
            <div className="flex gap-1 text-[10px] font-semibold">
              <span className="bg-[#0062FF] text-white px-2 py-0.5 rounded-md">Semua (8)</span>
              <span className="bg-white border border-slate-200 text-slate-600 px-2 py-0.5 rounded-md">Prioritas (4)</span>
              <span className="bg-white border border-slate-200 text-slate-600 px-2 py-0.5 rounded-md">Tuntas (3)</span>
            </div>

            {/* Task Items (Authentic from Mobile App) */}
            <div className="space-y-1.5 pt-1">
              {/* Task 1 */}
              <div className="p-2.5 rounded-xl border border-slate-100 shadow-xs bg-white">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 text-[#0062FF]">
                    <Circle className="w-3.5 h-3.5 text-slate-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-semibold leading-tight text-slate-800">
                      Praktikum hardening linux instruksi LKPD
                    </p>
                    <div className="flex items-center justify-between mt-1 text-[8px]">
                      <span className="text-slate-500">Keamanan Jaringan</span>
                      <span className="bg-rose-50 text-rose-600 font-bold px-1.5 py-0.2 rounded">
                        SG - sangat-tinggi
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Task 2 */}
              <div className="p-2.5 rounded-xl border border-slate-100 shadow-xs bg-white">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 text-[#0062FF]">
                    <Circle className="w-3.5 h-3.5 text-slate-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-semibold leading-tight text-slate-800">
                      Deploy aplikasi node js dan CRUD di cloudflare
                    </p>
                    <div className="flex items-center justify-between mt-1 text-[8px]">
                      <span className="text-slate-500">Backend Web</span>
                      <span className="bg-amber-50 text-amber-600 font-bold px-1.5 py-0.2 rounded">
                        75 - tinggi
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Task 3 (Completed Example) */}
              <div className="p-2.5 rounded-xl border border-slate-200/80 bg-slate-50/60 opacity-75">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 text-[#0062FF]">
                    <CheckCircle2 className="w-3.5 h-3.5 fill-[#0062FF] text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-semibold leading-tight line-through text-slate-400">
                      Peta konsep materi kecerdasan buatan
                    </p>
                    <div className="flex items-center justify-between mt-1 text-[8px]">
                      <span className="text-slate-400">AI Dasar</span>
                      <span className="bg-slate-200/70 text-slate-500 font-medium px-1.5 py-0.2 rounded">
                        Selesai
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Nav Bar (Left phone) */}
          <div className="h-10 bg-white border-t border-slate-100 px-4 flex items-center justify-between text-slate-400">
            <Home className="w-3.5 h-3.5" />
            <Calendar className="w-3.5 h-3.5" />
            <CheckSquare className="w-3.5 h-3.5 text-[#0062FF]" />
            <Sparkles className="w-3.5 h-3.5" />
          </div>
        </div>


        {/* ======================================================== */}
        {/* PHONE 2: RIGHT PHONE (Front Facing - Beranda Utama Stoodify) */}
        {/* ======================================================== */}
        <div className="relative w-[min(280px,88vw)] sm:w-[310px] md:w-[330px] h-[550px] sm:h-[580px] md:h-[620px] bg-white rounded-[44px] border-[8px] border-slate-900 shadow-2xl overflow-hidden flex flex-col z-10">
          
          {/* Top Notch / Dynamic Island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-full z-30 flex items-center justify-end px-3">
            <div className="w-2.5 h-2.5 bg-slate-800 rounded-full ring-1 ring-slate-700/50"></div>
          </div>

          {/* Status Bar */}
          <div className="w-full h-11 px-6 pt-3 flex items-center justify-between text-[11px] font-semibold text-slate-800 z-20">
            <span>09:41</span>
            <div className="flex items-center gap-1.5 text-slate-700">
              <Wifi className="w-3.5 h-3.5" />
              <Battery className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Screen Content: Beranda */}
          <div className="flex-1 bg-[#F8FBFE] px-4 pt-1 pb-3 overflow-y-auto no-scrollbar space-y-3 text-left">
            
            {/* Profile Header Card */}
            <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-[9px] font-medium text-slate-400 block uppercase tracking-wider">SMK Telkom Sidoarjo</span>
                <h4 className="text-xs font-bold text-[#0F172A]">Halo, Muhammad 👋</h4>
              </div>
              <div className="flex items-center gap-1 px-2 py-0.5 bg-amber-50 rounded-full border border-amber-200/60 text-amber-600 text-[10px] font-bold">
                <Flame className="w-3 h-3 fill-amber-500" />
                <span>5 Hari Streak</span>
              </div>
            </div>

            {/* Blue Hero Banner Card */}
            <div className="bg-gradient-to-r from-[#0062FF] to-[#004BC7] rounded-2xl p-3.5 text-white shadow-xs relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-[9px] font-medium text-blue-100 uppercase tracking-widest">Kondisi Belajar Hari Ini</span>
                <h5 className="text-sm font-bold mt-0.5">3 Tugas Butuh Perhatian</h5>
                <p className="text-[10px] text-blue-100/90 mt-0.5 leading-relaxed">
                  Estimasi 90 menit untuk menuntaskan prioritas tertinggi.
                </p>
                <div className="mt-2.5 inline-flex items-center gap-1 px-3 py-1 bg-white text-[#0062FF] rounded-lg text-[10px] font-semibold shadow-xs">
                  <Play className="w-2.5 h-2.5 fill-current" />
                  <span>Mulai Zen Focus</span>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-6 w-24 h-24 bg-white/10 rounded-full pointer-events-none"></div>
            </div>

            {/* 4 Quick Action Badges */}
            <div className="grid grid-cols-4 gap-1.5 text-center">
              <div className="bg-white p-2 rounded-xl border border-slate-100 shadow-xs flex flex-col items-center">
                <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#0062FF] flex items-center justify-center mb-1">
                  <Plus className="w-3.5 h-3.5" />
                </div>
                <span className="text-[8px] font-semibold text-slate-700">Tugas</span>
              </div>

              <div className="bg-white p-2 rounded-xl border border-slate-100 shadow-xs flex flex-col items-center">
                <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1">
                  <Timer className="w-3.5 h-3.5" />
                </div>
                <span className="text-[8px] font-semibold text-slate-700">Fokus</span>
              </div>

              <div className="bg-white p-2 rounded-xl border border-slate-100 shadow-xs flex flex-col items-center">
                <div className="w-6 h-6 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span className="text-[8px] font-semibold text-slate-700">Prediksi</span>
              </div>

              <div className="bg-white p-2 rounded-xl border border-slate-100 shadow-xs flex flex-col items-center">
                <div className="w-6 h-6 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-1">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <span className="text-[8px] font-semibold text-slate-700">Jadwal</span>
              </div>
            </div>

            {/* Agenda Hari Ini */}
            <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#0F172A] flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#0062FF]" />
                  Agenda Sekolah Hari Ini
                </span>
                <span className="text-[9px] text-slate-400">Senin</span>
              </div>
              
              <div className="p-2 rounded-lg bg-slate-50 text-[10px] space-y-0.5">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-slate-800">Keamanan Jaringan</p>
                  <span className="font-bold text-[#0062FF] bg-blue-50 px-1.5 py-0.2 rounded text-[9px]">07:30</span>
                </div>
                <p className="text-[9px] text-slate-400">Lab Komputer 02 · Pak Arif</p>
              </div>

              <div className="p-2 rounded-lg bg-slate-50 text-[10px] space-y-0.5">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-slate-800">Backend Dev & API</p>
                  <span className="font-bold text-slate-600 bg-slate-200/60 px-1.5 py-0.2 rounded text-[9px]">10:15</span>
                </div>
                <p className="text-[9px] text-slate-400">Ruang Teori 12 · Bu Nisa</p>
              </div>
            </div>

          </div>

          {/* Bottom Smartphone Navigation Bar */}
          <div className="w-full bg-white border-t border-slate-100 px-4 py-2 flex items-center justify-around z-20">
            <div className="flex flex-col items-center gap-0.5 text-[#0062FF]">
              <Home className="w-3.5 h-3.5" />
              <span className="text-[8px] font-medium">Beranda</span>
            </div>

            <div className="flex flex-col items-center gap-0.5 text-slate-400">
              <CheckSquare className="w-3.5 h-3.5" />
              <span className="text-[8px] font-medium">Tugas</span>
            </div>

            <div className="flex flex-col items-center gap-0.5 text-slate-400">
              <Timer className="w-3.5 h-3.5" />
              <span className="text-[8px] font-medium">Fokus</span>
            </div>

            <div className="flex flex-col items-center gap-0.5 text-slate-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[8px] font-medium">Asisten</span>
            </div>
          </div>

          {/* Bottom Hardware Indicator */}
          <div className="w-full h-3 bg-white flex items-center justify-center pb-1">
            <div className="w-20 h-1 bg-slate-300 rounded-full"></div>
          </div>

        </div>

      </div>

    </div>
  );
};

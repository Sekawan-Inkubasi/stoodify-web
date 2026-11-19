import React from 'react';
import { 
  Sparkles, 
  CalendarDays, 
  Timer, 
  SlidersHorizontal, 
  MessageSquare,
  ArrowUpRight 
} from 'lucide-react';

export const Features: React.FC = () => {
  const featureList = [
    {
      id: '01',
      title: 'Prediksi Materi Belajar',
      category: 'AI Predictive Engine',
      description: 'Menganalisis perkembangan kelas untuk memproyeksikan topik bahasan di pertemuan berikutnya, sehingga siswa selalu selangkah lebih siap sebelum pelajaran dimulai.',
      icon: Sparkles,
      tag: 'Cerdas & Adaptif',
      color: 'bg-blue-50 text-[#0062FF] border-blue-200/60'
    },
    {
      id: '02',
      title: 'Jadwal Sekolah Terintegrasi',
      category: 'Schedule Management',
      description: 'Hubungkan jadwal mata pelajaran Senin-Jumat dengan daftar LKPD dan tugas harian. Tidak ada lagi tugas penting yang tertukar ruang atau terlambat dikumpulkan.',
      icon: CalendarDays,
      tag: 'Terkoneksi Otomatis',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200/60'
    },
    {
      id: '03',
      title: 'Zen Focus Mode (Pomodoro)',
      category: 'Focus & Productivity',
      description: 'Ritme belajar berbasis sains 25 menit fokus penuh dan 5 menit istirahat. Mengunci fokus siswa agar terbebas dari notifikasi medsos yang mengganggu konsentrasi.',
      icon: Timer,
      tag: 'Bebas Burnout',
      color: 'bg-amber-50 text-amber-600 border-amber-200/60'
    },
    {
      id: '04',
      title: 'Rekomendasi Jadwal AI',
      category: 'Smart Task Sorter',
      description: 'Mengalkulasi tingkat kesulitan dan sisa waktu pengerjaan tugas, lalu menyusun rekomendasi urutan belajar yang paling realistis untuk diselesaikan malam ini.',
      icon: SlidersHorizontal,
      tag: 'Beban Belajar Seimbang',
      color: 'bg-purple-50 text-purple-600 border-purple-200/60'
    },
    {
      id: '05',
      title: 'Stoodify AI Assistant',
      category: 'Interactive Tutor',
      description: 'Asisten pendamping belajar 24/7 untuk bertanya rumus, meminta rangkuman konsep, atau konsultasi langkah penyelesaian tugas tanpa rasa malu atau canggung.',
      icon: MessageSquare,
      tag: 'Tutor Pribadi Siswa',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200/60'
    }
  ];

  return (
    <section id="fitur" className="py-20 md:py-28 bg-[#F8FBFE] scroll-mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold text-[#0062FF] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
              5 Pilar Fitur Stoodify
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mt-3">
              Dirancang khusus untuk cara belajar siswa masa kini.
            </h2>
          </div>
          <p className="text-sm text-[#64748B] max-w-sm leading-relaxed">
            Setiap fitur dibangun dengan satu tujuan: meringankan beban mental siswa agar belajar kembali menyenangkan dan berbuah prestasi nyata.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((item, idx) => {
            const Icon = item.icon;
            const isWide = idx === 0 || idx === 3; // layout rhythm
            return (
              <div
                key={item.id}
                className={`bg-white rounded-3xl p-7 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group ${
                  isWide ? 'lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${item.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-[#0062FF] transition-colors">
                      {item.id}
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#0F172A] tracking-tight mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#0062FF] bg-blue-50/80 px-2.5 py-1 rounded-lg">
                    {item.tag}
                  </span>
                  <a
                    href="#demo"
                    className="text-xs font-semibold text-slate-400 group-hover:text-[#0062FF] transition-colors flex items-center gap-1"
                  >
                    Coba di Demo
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

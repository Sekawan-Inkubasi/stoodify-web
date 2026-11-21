import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'Apa itu Stoodify?',
    answer: 'Stoodify adalah aplikasi asisten belajar pintar berbasis kecerdasan buatan (AI) yang dirancang khusus untuk siswa SMA/SMK sederajat di Indonesia. Aplikasi ini membantu mengintegrasikan jadwal sekolah, memprioritaskan deadline tugas, memberikan rekomendasi materi esok hari, serta menjaga fokus belajar lewat metode Zen Pomodoro.'
  },
  {
    question: 'Apakah aplikasi Stoodify gratis digunakan?',
    answer: 'Ya, Stoodify dapat digunakan secara gratis untuk fitur-fitur utama manajemen akademik siswa, termasuk pencatatan jadwal pelajaran sekolah tanpa batas, pelacakan tenggat tugas harian, dan timer fokus belajar mandiri tanpa gangguan iklan yang mengganggu.'
  },
  {
    question: 'Bagaimana cara Stoodify membantu menghindari SKS (Sistem Kebut Semalam)?',
    answer: 'Stoodify secara otomatis memecah persiapan ujian dan tugas besar menjadi sesi belajar kecil harian yang disesuaikan dengan kalender sekolah. Siswa mendapatkan pengingat cerdas dan slot belajar optimal sehingga materi dapat dikuasai bertahap tanpa rasa panik.'
  },
  {
    question: 'Di mana saya bisa mengunduh aplikasi Stoodify?',
    answer: 'Aplikasi Android Stoodify dapat diunduh langsung melalui tombol unduh di situs web ini (stoodify.vercel.app) atau melalui rilis resmi GitHub Tim Sekawan Inkubasi. File instalasi APK mandiri berukuran sangat ringkas (~19 MB) dan kompatibel dengan smartphone Android.'
  },
  {
    question: 'Apakah Stoodify mendukung Kurikulum Merdeka?',
    answer: 'Tentu saja. Stoodify dirancang selaras dengan capaian pembelajaran Kurikulum Merdeka Fase E (Kelas 10) dan Fase F (Kelas 11 & 12 SMA/SMK), membantu siswa memahami topik materi esensial sebelum diajarkan di ruang kelas.'
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-[#F8FBFE] py-16 sm:py-24 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-[#0062FF] text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tanya Jawab</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A]">
            Pertanyaan Seputar <span className="text-[#0062FF]">Stoodify</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            Semua hal yang perlu kamu ketahui tentang aplikasi asisten belajar pintar Stoodify.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-200 hover:border-[#0062FF]/40 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#0F172A]">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#0062FF] text-white rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-slate-100 animate-fadeIn">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

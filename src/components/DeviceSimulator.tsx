import React, { useState, useEffect } from 'react';
import { 
  Home, 
  CheckSquare, 
  Timer, 
  Sparkles, 
  Clock, 
  Flame, 
  CheckCircle2, 
  Circle, 
  Play, 
  Pause, 
  RotateCcw,
  BookOpen,
  Send,
  Battery,
  Wifi
} from 'lucide-react';

interface TaskItem {
  id: number;
  title: string;
  subject: string;
  priority: 'Sangat Tinggi' | 'Tinggi' | 'Sedang';
  deadline: string;
  completed: boolean;
}

export const DeviceSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'tasks' | 'pomodoro' | 'ai'>('home');
  
  // Interactive Task state
  const [tasks, setTasks] = useState<TaskItem[]>([
    {
      id: 1,
      title: 'Praktikum Hardening Linux & Server LKPD',
      subject: 'Keamanan Jaringan',
      priority: 'Sangat Tinggi',
      deadline: 'Besok, 07:00',
      completed: false
    },
    {
      id: 2,
      title: 'Deploy Cloudflare Worker & REST API',
      subject: 'Backend Golang',
      priority: 'Tinggi',
      deadline: '2 Hari lagi',
      completed: false
    },
    {
      id: 3,
      title: 'Membuat Alur User Journey Stoodify',
      subject: 'UI/UX Design',
      priority: 'Sedang',
      deadline: 'Jumat, 23:59',
      completed: true
    },
    {
      id: 4,
      title: 'Latihan Soal Limit Fungsi Aljabar',
      subject: 'Matematika Fase F',
      priority: 'Sedang',
      deadline: 'Sabtu, 12:00',
      completed: false
    }
  ]);

  const [taskFilter, setTaskFilter] = useState<'all' | 'priority' | 'done'>('all');

  // Interactive Pomodoro Timer state
  const [pomodoroSeconds, setPomodoroSeconds] = useState(25 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isTimerRunning && pomodoroSeconds > 0) {
      interval = setInterval(() => {
        setPomodoroSeconds((prev) => prev - 1);
      }, 1000);
    } else if (pomodoroSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, pomodoroSeconds]);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Interactive AI Assistant state
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    {
      sender: 'ai',
      text: 'Halo Muhammad! Aku Stoodify AI. Mau aku bantu rapikan jadwal tugas atau jelaskan materi yang belum dipahami?'
    }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendPrompt = (prompt: string) => {
    if (!prompt.trim()) return;
    const newMsgs = [...chatMessages, { sender: 'user' as const, text: prompt }];
    setChatMessages(newMsgs);
    setInputText('');

    setTimeout(() => {
      let reply = 'Berdasarkan silabus belajarmu, materi ini memerlukan waktu sekitar 45 menit fokus. Aku sudah jadwalkan di sesi belajarmu malam ini!';
      if (prompt.toLowerCase().includes('prediksi') || prompt.toLowerCase().includes('materi')) {
        reply = '🔍 Prediksi Materi Minggu Depan: Untuk Keamanan Jaringan, kemungkinan besar topik evaluasi adalah Firewall iptables dan SSH hardening.';
      } else if (prompt.toLowerCase().includes('pomodoro') || prompt.toLowerCase().includes('fokus')) {
        reply = '⏱️ Rekomendasi: Gunakan 2 sesi Zen Focus (2x25 menit) untuk menyelesaikan tugas Hardening Linux terlebih dahulu.';
      }
      setChatMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
    }, 600);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const filteredTasks = tasks.filter(t => {
    if (taskFilter === 'priority') return t.priority === 'Sangat Tinggi' || t.priority === 'Tinggi';
    if (taskFilter === 'done') return t.completed;
    return true;
  });

  return (
    <div className="relative mx-auto flex flex-col items-center">
      {/* Visual Badge above phone */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full border border-blue-200/80 shadow-sm text-xs text-[#0062FF] font-semibold mb-3">
        <Sparkles className="w-3.5 h-3.5" />
        Live Interactive Demo · Coba Langsung di Sini
      </div>

      {/* Smartphone Chassis */}
      <div className="w-[310px] sm:w-[340px] h-[640px] sm:h-[680px] bg-white rounded-[44px] border-[9px] border-slate-900 shadow-phone overflow-hidden flex flex-col relative">
        
        {/* Notch / Dynamic Island */}
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

        {/* Screen Content Container */}
        <div className="flex-1 overflow-y-auto no-scrollbar px-4 pt-1 pb-4 bg-[#F8FBFE]">

          {/* TAB 1: HOME VIEW */}
          {activeTab === 'home' && (
            <div className="space-y-3.5 animate-in fade-in duration-200">
              {/* Profile Card */}
              <div className="bg-white rounded-2xl p-3.5 border border-slate-100 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-medium text-slate-400 block uppercase tracking-wider">Siswa SMK Telkom</span>
                  <h4 className="text-sm font-bold text-[#0F172A]">Halo, Muhammad 👋</h4>
                </div>
                <div className="flex items-center gap-1 px-2.5 py-1 bg-amber-50 rounded-full border border-amber-200/60 text-amber-600 text-xs font-bold">
                  <Flame className="w-3.5 h-3.5 fill-amber-500" />
                  <span>5 Hari Streak</span>
                </div>
              </div>

              {/* Status Banner */}
              <div className="bg-gradient-to-r from-[#0062FF] to-[#004BC7] rounded-2xl p-4 text-white shadow-sm relative overflow-hidden">
                <div className="relative z-10">
                  <span className="text-[10px] font-medium text-blue-100 uppercase tracking-widest">Kondisi Belajar Hari Ini</span>
                  <h5 className="text-base font-bold mt-0.5">3 Tugas Butuh Perhatian</h5>
                  <p className="text-xs text-blue-100/90 mt-1 leading-relaxed">
                    Estimasi 90 menit untuk menuntaskan prioritas tertinggi.
                  </p>
                  <button
                    onClick={() => setActiveTab('pomodoro')}
                    className="mt-3 px-3 py-1.5 bg-white text-[#0062FF] rounded-lg text-xs font-semibold hover:bg-blue-50 transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    Mulai Zen Focus
                  </button>
                </div>
                <div className="absolute -right-4 -bottom-6 w-28 h-28 bg-white/10 rounded-full pointer-events-none"></div>
              </div>

              {/* Quick Actions Grid */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setActiveTab('pomodoro')}
                  className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:border-blue-300 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0062FF] flex items-center justify-center mb-1">
                    <Timer className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-800">Pomodoro</span>
                  <span className="text-[9px] text-slate-400">25 Menit</span>
                </button>

                <button
                  onClick={() => setActiveTab('tasks')}
                  className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:border-blue-300 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1">
                    <CheckSquare className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-800">Daftar Tugas</span>
                  <span className="text-[9px] text-slate-400">4 Menunggu</span>
                </button>

                <button
                  onClick={() => setActiveTab('ai')}
                  className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:border-blue-300 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-1">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-800">Tanya AI</span>
                  <span className="text-[9px] text-slate-400">Siap Jawab</span>
                </button>
              </div>

              {/* Agenda Sekolah Singkat */}
              <div className="bg-white rounded-2xl p-3.5 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#0062FF]" />
                    Agenda Sekolah Hari Ini
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">Senin</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 text-xs">
                    <div>
                      <p className="font-semibold text-slate-800">Keamanan Jaringan</p>
                      <p className="text-[10px] text-slate-500">Lab Komputer 02 · Pak Arif</p>
                    </div>
                    <span className="text-[10px] font-bold text-[#0062FF] bg-blue-50 px-2 py-0.5 rounded">07:30</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 text-xs">
                    <div>
                      <p className="font-semibold text-slate-800">Backend Dev & API</p>
                      <p className="text-[10px] text-slate-500">Ruang Teori 12 · Bu Nisa</p>
                    </div>
                    <span className="text-[10px] font-bold text-slate-600 bg-slate-200/60 px-2 py-0.5 rounded">10:15</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TASKS VIEW */}
          {activeTab === 'tasks' && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A]">Daftar Tugas Belajar</h4>
                  <p className="text-[10px] text-slate-500">Klik lingkaran untuk menyelesaikan</p>
                </div>
                <span className="text-[10px] font-bold bg-blue-50 text-[#0062FF] px-2 py-0.5 rounded-full">
                  {tasks.filter(t => !t.completed).length} Aktif
                </span>
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-1.5 bg-slate-100/90 p-1 rounded-xl text-[11px] font-semibold text-slate-600">
                <button
                  onClick={() => setTaskFilter('all')}
                  className={`flex-1 py-1 rounded-lg transition-colors ${taskFilter === 'all' ? 'bg-white text-[#0062FF] shadow-sm' : 'hover:text-slate-900'}`}
                >
                  Semua
                </button>
                <button
                  onClick={() => setTaskFilter('priority')}
                  className={`flex-1 py-1 rounded-lg transition-colors ${taskFilter === 'priority' ? 'bg-white text-[#0062FF] shadow-sm' : 'hover:text-slate-900'}`}
                >
                  Prioritas
                </button>
                <button
                  onClick={() => setTaskFilter('done')}
                  className={`flex-1 py-1 rounded-lg transition-colors ${taskFilter === 'done' ? 'bg-white text-[#0062FF] shadow-sm' : 'hover:text-slate-900'}`}
                >
                  Selesai
                </button>
              </div>

              {/* Task Cards List */}
              <div className="space-y-2">
                {filteredTasks.map((t) => (
                  <div
                    key={t.id}
                    onClick={() => toggleTask(t.id)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 ${
                      t.completed
                        ? 'bg-slate-50/80 border-slate-200 opacity-60'
                        : 'bg-white border-slate-100 shadow-sm hover:border-blue-200'
                    }`}
                  >
                    <button className="mt-0.5 text-[#0062FF]">
                      {t.completed ? (
                        <CheckCircle2 className="w-4 h-4 fill-[#0062FF] text-white" />
                      ) : (
                        <Circle className="w-4 h-4 text-slate-300 hover:text-[#0062FF]" />
                      )}
                    </button>
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-semibold leading-tight ${t.completed ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                        {t.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1.5 text-[10px]">
                        <span className="text-slate-500 font-medium">{t.subject}</span>
                        <span className="text-slate-300">•</span>
                        <span className={`font-semibold ${
                          t.priority === 'Sangat Tinggi' ? 'text-rose-600' :
                          t.priority === 'Tinggi' ? 'text-amber-600' : 'text-slate-500'
                        }`}>
                          {t.priority}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: ZEN FOCUS (POMODORO) */}
          {activeTab === 'pomodoro' && (
            <div className="space-y-4 text-center py-2 animate-in fade-in duration-200">
              <div>
                <span className="text-[10px] font-semibold text-[#0062FF] uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-full">
                  Zen Focus Mode
                </span>
                <h4 className="text-base font-bold text-[#0F172A] mt-1">Sesi Belajar Terfokus</h4>
                <p className="text-[11px] text-slate-500">25 menit fokus penuh tanpa distraksi</p>
              </div>

              {/* Big Circular Timer Display */}
              <div className="w-44 h-44 mx-auto rounded-full bg-white border-4 border-blue-100 shadow-md flex flex-col items-center justify-center relative">
                <div className="text-3xl font-extrabold tracking-tight text-[#0F172A] font-mono">
                  {formatTimer(pomodoroSeconds)}
                </div>
                <span className="text-[10px] font-medium text-[#0062FF] mt-1">
                  {isTimerRunning ? '🔥 Sedang Berjalan' : 'Siap Mulai'}
                </span>
              </div>

              {/* Timer Controls */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="px-5 py-2.5 rounded-full bg-[#0062FF] text-white text-xs font-bold shadow-btn-primary hover:bg-[#0052D9] transition-all flex items-center gap-1.5"
                >
                  {isTimerRunning ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  {isTimerRunning ? 'Jeda' : 'Mulai Fokus'}
                </button>
                <button
                  onClick={() => {
                    setIsTimerRunning(false);
                    setPomodoroSeconds(25 * 60);
                  }}
                  className="p-2.5 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                  title="Reset Timer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-100 text-left text-xs">
                <p className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#0062FF]" />
                  Tugas Aktif Sesi Ini:
                </p>
                <p className="text-[11px] text-slate-600 mt-0.5">Praktikum Hardening Linux & LKPD</p>
              </div>
            </div>
          )}

          {/* TAB 4: STOODIFY AI ASSISTANT */}
          {activeTab === 'ai' && (
            <div className="h-full flex flex-col justify-between space-y-2 animate-in fade-in duration-200">
              <div className="space-y-2">
                <div className="text-center pb-1 border-b border-slate-100">
                  <h4 className="text-xs font-bold text-[#0F172A] flex items-center justify-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#0062FF]" />
                    Stoodify AI Assistant
                  </h4>
                  <p className="text-[9px] text-slate-400">Pembimbing materi & penjadwalan</p>
                </div>

                {/* Chat Log */}
                <div className="space-y-2 max-h-[300px] overflow-y-auto no-scrollbar pr-1">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-3 py-2 text-[11px] leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-[#0062FF] text-white rounded-br-none'
                            : 'bg-white text-slate-800 border border-slate-100 shadow-sm rounded-bl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Prompt Chips */}
              <div className="space-y-1.5 pt-2">
                <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">Coba Pertanyaan Cepat:</p>
                <div className="flex flex-wrap gap-1">
                  {[
                    '🔍 Prediksi materi minggu depan?',
                    '⏱️ Rekomendasi urutan tugas?',
                    '💡 Tips belajar ujian tanpa panik'
                  ].map((chip) => (
                    <button
                      key={chip}
                      onClick={() => handleSendPrompt(chip)}
                      className="text-[10px] font-medium bg-blue-50 text-[#0062FF] hover:bg-blue-100 px-2 py-1 rounded-md transition-colors text-left"
                    >
                      {chip}
                    </button>
                  ))}
                </div>

                {/* Input box */}
                <div className="flex items-center gap-1.5 pt-1">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendPrompt(inputText)}
                    placeholder="Ketik pertanyaan materi..."
                    className="flex-1 bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:border-[#0062FF]"
                  />
                  <button
                    onClick={() => handleSendPrompt(inputText)}
                    className="p-1.5 bg-[#0062FF] text-white rounded-lg hover:bg-[#0052D9]"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Smartphone Navigation Bar */}
        <div className="w-full bg-white border-t border-slate-100 px-3 py-2 flex items-center justify-around z-20">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-0.5 transition-colors ${activeTab === 'home' ? 'text-[#0062FF]' : 'text-slate-400 hover:text-slate-600'}`}
          >
            <Home className="w-4 h-4" />
            <span className="text-[9px] font-medium">Beranda</span>
          </button>

          <button
            onClick={() => setActiveTab('tasks')}
            className={`flex flex-col items-center gap-0.5 transition-colors ${activeTab === 'tasks' ? 'text-[#0062FF]' : 'text-slate-400 hover:text-slate-600'}`}
          >
            <CheckSquare className="w-4 h-4" />
            <span className="text-[9px] font-medium">Tugas</span>
          </button>

          <button
            onClick={() => setActiveTab('pomodoro')}
            className={`flex flex-col items-center gap-0.5 transition-colors ${activeTab === 'pomodoro' ? 'text-[#0062FF]' : 'text-slate-400 hover:text-slate-600'}`}
          >
            <Timer className="w-4 h-4" />
            <span className="text-[9px] font-medium">Fokus</span>
          </button>

          <button
            onClick={() => setActiveTab('ai')}
            className={`flex flex-col items-center gap-0.5 transition-colors ${activeTab === 'ai' ? 'text-[#0062FF]' : 'text-slate-400 hover:text-slate-600'}`}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-[9px] font-medium">Asisten</span>
          </button>
        </div>

        {/* Bottom Hardware Pill Indicator */}
        <div className="w-full h-4 bg-white flex items-center justify-center pb-1">
          <div className="w-24 h-1 bg-slate-300 rounded-full"></div>
        </div>

      </div>
    </div>
  );
};

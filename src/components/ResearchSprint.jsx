import React, { useState, useEffect } from 'react';
import { Play, Pause, Mic, BookOpen, FileText } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function ResearchSprint({ topic, notes, onNotesChange, onFinishSprint }) {
  const [totalSeconds, setTotalSeconds] = useState(15 * 60);
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let timer = null;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            soundEngine.playChime();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const setDuration = (minutes) => {
    soundEngine.playClick();
    const secs = minutes * 60;
    setTotalSeconds(secs);
    setTimeLeft(secs);
    setIsActive(true);
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const progressPercent = Math.max(0, Math.min(100, ((totalSeconds - timeLeft) / totalSeconds) * 100));

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      
      {/* Top Timer Card */}
      <div className="minimal-card p-5 sm:p-8 border border-white/10 relative overflow-hidden">
        <div 
          className="absolute bottom-0 left-0 h-1 bg-white transition-all duration-1000 opacity-60"
          style={{ width: `${progressPercent}%` }}
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 relative z-10">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-400">15 Dakikalık Araştırma Deposu</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold font-heading text-white break-words">{topic.title}</h3>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2.5">
            <div className="flex items-center gap-3">
              <div className="text-3xl sm:text-5xl font-mono font-bold text-white tracking-tight">
                {formatTime(timeLeft)}
              </div>
              <button
                onClick={() => {
                  soundEngine.playClick();
                  setIsActive(!isActive);
                }}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors"
              >
                {isActive ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />}
              </button>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono">
              <span className="text-slate-500 mr-1 hidden xs:inline">Süre:</span>
              {[5, 10, 15, 20].map(m => (
                <button
                  key={m}
                  onClick={() => setDuration(m)}
                  className={`px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg border transition-colors ${
                    totalSeconds === m * 60
                      ? 'bg-white text-slate-950 border-white font-bold'
                      : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
                  }`}
                >
                  {m}dk
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Guiding Prompts */}
        <div className="lg:col-span-4 space-y-4">
          <div className="minimal-card p-5 sm:p-6 space-y-4 h-full">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <FileText className="w-4 h-4 shrink-0" />
              Not Alırken Odaklanacağın 3 Soru:
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              {topic.researchPrompts.map((p, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                  <span className="text-slate-400 font-mono font-bold shrink-0">0{idx + 1}.</span>
                  <span className="leading-relaxed break-words">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Research Scratchpad Notebook */}
        <div className="lg:col-span-8 space-y-4">
          <div className="minimal-card p-5 sm:p-6 space-y-3 sm:space-y-4 flex flex-col h-[320px] sm:h-[440px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-white shrink-0" />
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">
                  Araştırma Not Defteri
                </h4>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">Otomatik Kayıt</span>
            </div>

            <textarea
              value={notes}
              onChange={(e) => onNotesChange(e.target.value)}
              placeholder={`Örnek Not Şablonu:\n- Tanımı:\n- Nedeni & Mekanizması:\n- Gerçek Hayat Örneği:\n- 2 Dakikada Nasıl Anlatırım:`}
              className="w-full flex-1 minimal-input text-xs sm:text-sm p-3.5 sm:p-4 rounded-xl font-mono resize-none leading-relaxed"
            />
          </div>

          <button
            onClick={() => {
              soundEngine.playClick();
              onFinishSprint();
            }}
            className="w-full py-3.5 sm:py-4 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <Mic className="w-4 h-4 shrink-0" />
            <span>Araştırmayı Tamamladım, 2 Dakikalık Sunuma Geç 🎤</span>
          </button>
        </div>

      </div>
    </div>
  );
}

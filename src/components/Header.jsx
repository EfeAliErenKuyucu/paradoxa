import React from 'react';
import { Flame, BookMarked, Volume2, VolumeX, Brain, PlusCircle, Mic } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function Header({ streak, onOpenCodex, onOpenWarmup, onOpenCustomTopic, ambientPlaying, toggleAmbient }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#050507]/90 backdrop-blur-xl border-b border-white/10 px-3 sm:px-6 lg:px-12 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer shrink-0" onClick={() => window.location.reload()}>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-colors">
            <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-extrabold text-base sm:text-xl tracking-tight text-white">
                PARADOXA
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase px-1.5 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10 hidden xs:inline-block">
                Zihin Arenası
              </span>
            </div>
            <p className="text-[10px] text-slate-400 hidden lg:block">15 Dk Araştır • 2 Dk Diksiyonla Anlat • AI Bağımlılığını Yen</p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          
          {/* Custom Topic Button */}
          <button
            onClick={() => {
              soundEngine.playClick();
              onOpenCustomTopic();
            }}
            className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 font-medium transition-colors"
            title="Kendi Konunu Ekle"
          >
            <PlusCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="hidden md:inline">Konu Ekle</span>
          </button>

          {/* Diction Warmup Button */}
          <button
            onClick={() => {
              soundEngine.playClick();
              onOpenWarmup();
            }}
            className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 font-medium transition-colors"
            title="Diksiyon & Nefes Egzersizi"
          >
            <Mic className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="hidden md:inline">Egzersiz</span>
          </button>

          {/* Ambient Sound Toggle */}
          <button
            onClick={() => {
              soundEngine.playClick();
              toggleAmbient();
            }}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
              ambientPlaying
                ? 'bg-white/10 text-white border-white/30'
                : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
            }`}
            title="Odak Sesi"
          >
            {ambientPlaying ? <Volume2 className="w-3.5 h-3.5 text-sky-400 shrink-0" /> : <VolumeX className="w-3.5 h-3.5 shrink-0" />}
            <span className="hidden lg:inline">{ambientPlaying ? 'Odak Sesi Açık' : 'Odak Sesi'}</span>
          </button>

          {/* Streak Counter */}
          <div className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium shrink-0">
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
            <span>{streak}G</span>
          </div>

          {/* Knowledge Codex Button */}
          <button
            onClick={() => {
              soundEngine.playClick();
              onOpenCodex();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-slate-950 hover:bg-slate-200 text-xs font-semibold shadow-sm transition-colors shrink-0"
          >
            <BookMarked className="w-3.5 h-3.5 shrink-0" />
            <span>Kodex</span>
          </button>
        </div>
      </div>
    </header>
  );
}

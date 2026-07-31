import React, { useState } from 'react';
import { X, Mic, Volume2, Sparkles, Wind } from 'lucide-react';
import { DICTION_WARMUPS } from '../data/topics';
import { soundEngine } from '../utils/audio';

export default function WarmupModal({ isOpen, onClose }) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!isOpen) return null;

  const current = DICTION_WARMUPS[activeIdx];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-soft-fade">
      <div className="minimal-card w-full max-w-xl rounded-3xl border border-white/10 overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Mic className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold font-heading text-white">Diksiyon & Nefes Isınması</h3>
              <p className="text-[11px] text-slate-400 font-mono">Sunum öncesi ses organlarını hazırla</p>
            </div>
          </div>
          <button
            onClick={() => {
              soundEngine.playClick();
              onClose();
            }}
            className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Egzersiz Tabs */}
        <div className="flex items-center gap-2 p-4 bg-white/[0.02] border-b border-white/5 overflow-x-auto scrollbar-none">
          {DICTION_WARMUPS.map((w, idx) => (
            <button
              key={idx}
              onClick={() => {
                soundEngine.playClick();
                setActiveIdx(idx);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap border transition-all ${
                activeIdx === idx
                  ? 'bg-white text-slate-950 border-white font-bold'
                  : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
              }`}
            >
              {w.type}: {idx + 1}
            </button>
          ))}
        </div>

        {/* Egzersiz Card */}
        <div className="p-8 space-y-6 text-center">
          <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
            {current.type} Egzersizi
          </span>

          <h3 className="text-2xl font-bold font-heading text-white">
            {current.title}
          </h3>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-base text-slate-200 leading-relaxed font-sans font-medium">
            "{current.description}"
          </div>

          <div className="pt-2 flex justify-between items-center text-xs text-slate-500 font-mono">
            <button
              disabled={activeIdx === 0}
              onClick={() => setActiveIdx(prev => prev - 1)}
              className="hover:text-white disabled:opacity-30"
            >
              ← Önceki Egzersiz
            </button>

            <span>{activeIdx + 1} / {DICTION_WARMUPS.length}</span>

            <button
              disabled={activeIdx === DICTION_WARMUPS.length - 1}
              onClick={() => setActiveIdx(prev => prev + 1)}
              className="hover:text-white disabled:opacity-30"
            >
              Sonraki Egzersiz →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

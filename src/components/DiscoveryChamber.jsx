import React, { useState } from 'react';
import { TOPIC_CATEGORIES, getRandomTopic } from '../data/topics';
import { Sparkles, Dices, ArrowRight, HelpCircle, Volume2, PlusCircle, HelpCircle as MysteryIcon } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function DiscoveryChamber({ currentTopic, onSelectTopic, onStartSprint, onOpenWarmup, onOpenCustomTopic }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSpinning, setIsSpinning] = useState(false);

  const handleRandomize = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    soundEngine.playSpinTick();

    let step = 0;
    const interval = setInterval(() => {
      step++;
      const temp = getRandomTopic(selectedCategory);
      onSelectTopic(temp);
      soundEngine.playSpinTick();

      if (step >= 4) {
        clearInterval(interval);
        const finalTopic = getRandomTopic(selectedCategory);
        onSelectTopic(finalTopic);
        setIsSpinning(false);
        soundEngine.playReveal();
      }
    }, 80);
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      
      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
        {TOPIC_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              soundEngine.playClick();
              setSelectedCategory(cat.id);
            }}
            className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors border ${
              selectedCategory === cat.id
                ? 'bg-white text-slate-950 border-white font-semibold'
                : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/20 hover:text-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Main Concept Discovery Card */}
      <div className="minimal-card p-6 sm:p-12 space-y-8 relative overflow-hidden">
        
        {currentTopic ? (
          <div className="space-y-8 relative z-10 animate-soft-fade">
            
            {/* Header Badges */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-widest text-slate-300 bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                  {TOPIC_CATEGORIES.find(c => c.id === currentTopic.category)?.label || currentTopic.category}
                </span>
                <span className="text-xs text-slate-400 font-mono bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                  Zorluk: {currentTopic.difficulty}
                </span>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                Köken: {currentTopic.origin}
              </span>
            </div>

            {/* Title & Pronunciation */}
            <div className="space-y-2">
              <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
                {currentTopic.title}
              </h2>
              {currentTopic.pronunciation && (
                <p className="text-sm font-mono text-slate-400 flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-slate-400" />
                  <span>[{currentTopic.pronunciation}]</span>
                </p>
              )}
            </div>

            {/* 3 Guiding Prompts */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-slate-400" />
                15 Dakikalık Araştırmada Cevaplayacağın 3 Kilit Soru:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentTopic.researchPrompts.map((prompt, idx) => (
                  <div key={idx} className="flex flex-col gap-2 bg-white/[0.02] p-5 rounded-xl border border-white/5">
                    <span className="font-mono text-xs text-slate-400 font-bold">0{idx + 1}. SORU</span>
                    <p className="text-sm text-slate-200 font-normal leading-normal">{prompt}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary Action Controls */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={handleRandomize}
                disabled={isSpinning}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Dices className={`w-5 h-5 ${isSpinning ? 'animate-spin' : ''}`} />
                <span>Rastgele Başka Konu</span>
              </button>

              <button
                onClick={onOpenCustomTopic}
                className="w-full sm:w-auto px-5 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <PlusCircle className="w-5 h-5 text-cyan-400" />
                <span>Kendi Konunu Ekle</span>
              </button>

              <button
                onClick={() => {
                  soundEngine.playClick();
                  onStartSprint();
                }}
                className="w-full sm:flex-1 px-8 py-4 rounded-xl bg-white hover:bg-slate-200 text-slate-950 text-base font-bold flex items-center justify-center gap-3 transition-colors"
              >
                <Sparkles className="w-5 h-5 text-slate-950" />
                <span>15 Dakikalık Araştırmaya Başla</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        ) : (
          /* Initial Mystery Cover State */
          <div className="text-center py-16 space-y-6 relative z-10 animate-soft-fade">
            <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-white">
              <MysteryIcon className="w-10 h-10 text-white" />
            </div>

            <div className="space-y-2 max-w-lg mx-auto">
              <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                Günün Gizemli Konusunu Keşfet
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                Butona basın, rastgele az bilinen bir kavram açılsın. 15 dakika boyunca kendi imkanlarınızla araştırın ve 2 dakikada diksiyonla anlatın!
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <button
                onClick={handleRandomize}
                disabled={isSpinning}
                className="w-full sm:flex-1 py-4 px-8 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-bold text-base flex items-center justify-center gap-3 transition-colors active:scale-98"
              >
                <Dices className={`w-5 h-5 ${isSpinning ? 'animate-spin' : ''}`} />
                <span>Gizemli Konuyu Aç 🎲</span>
              </button>

              <button
                onClick={onOpenCustomTopic}
                className="w-full sm:w-auto py-4 px-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <PlusCircle className="w-4 h-4 text-cyan-400" />
                <span>Kendi Konunu Ekle</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

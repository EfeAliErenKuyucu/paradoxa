import React, { useState } from 'react';
import { X, PlusCircle, Sparkles } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function CustomTopicModal({ isOpen, onClose, onCreateCustomTopic }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [prompt1, setPrompt1] = useState('');
  const [prompt2, setPrompt2] = useState('');
  const [prompt3, setPrompt3] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    soundEngine.playClick();
    const newTopic = {
      id: 'custom-' + Date.now(),
      title: title.trim(),
      category: 'nadir',
      pronunciation: title.trim().toLowerCase(),
      origin: 'Kişisel Özel Konu',
      shortDescription: description.trim() || 'Kendi belirlediğin özel araştırma konusu.',
      researchPrompts: [
        prompt1.trim() || 'Bu konunun temel tanımı ve özü nedir?',
        prompt2.trim() || 'Neden ve nasıl gerçekleşir / ne işe yarar?',
        prompt3.trim() || 'Gerçek hayattan bir örnek veya analoji verin.'
      ],
      difficulty: 'Özel',
      dictionTip: 'Sözcüğü net ve vurgulu telaffuz edin.'
    };

    onCreateCustomTopic(newTopic);
    setTitle('');
    setDescription('');
    setPrompt1('');
    setPrompt2('');
    setPrompt3('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-soft-fade">
      <div className="minimal-card w-full max-w-lg rounded-3xl border border-white/10 overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <PlusCircle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold font-heading text-white">Kendi Özel Konunu Ekle</h3>
              <p className="text-[11px] text-slate-400 font-mono">İstediğin kelimeyi veya konuyu araştır</p>
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

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          <div>
            <label className="block text-slate-400 font-mono mb-1">Konu / Kelime Başlığı (*)</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Örn: Yapay Zeka Etiği, Schrödinger'in Kedisi, Sfenks Muamması..."
              className="w-full minimal-input p-3 rounded-xl text-sm"
            />
          </div>

          <div>
            <label className="block text-slate-400 font-mono mb-1">Kısa Açıklama / Özeti</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Konunun ne hakkında olduğu hakkında kısa ön bilgi..."
              className="w-full minimal-input p-3 rounded-xl font-sans h-20 resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-slate-400 font-mono">Araştırılacak 3 Soru (Opsiyonel):</label>
            <input
              type="text"
              value={prompt1}
              onChange={(e) => setPrompt1(e.target.value)}
              placeholder="Soru 1 (Örn: Bu kavram ilk ne zaman ortaya çıktı?)"
              className="w-full minimal-input p-2.5 rounded-lg"
            />
            <input
              type="text"
              value={prompt2}
              onChange={(e) => setPrompt2(e.target.value)}
              placeholder="Soru 2 (Örn: İnsan zihnine etkisi nedir?)"
              className="w-full minimal-input p-2.5 rounded-lg"
            />
            <input
              type="text"
              value={prompt3}
              onChange={(e) => setPrompt3(e.target.value)}
              placeholder="Soru 3 (Örn: Günlük hayatta nerede karşımıza çıkar?)"
              className="w-full minimal-input p-2.5 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors mt-2 shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Konuyu Oluştur ve 15 Dk Araştırmaya Başla</span>
          </button>
        </form>

      </div>
    </div>
  );
}

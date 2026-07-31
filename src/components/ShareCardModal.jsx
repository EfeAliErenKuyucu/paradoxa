import React, { useRef, useState } from 'react';
import { X, Download, Share2, Copy, Check, Brain, Flame } from 'lucide-react';
import html2canvas from 'html2canvas';
import { soundEngine } from '../utils/audio';

export default function ShareCardModal({ isOpen, onClose, codexItem, streakCount }) {
  const cardRef = useRef(null);
  const [isExporting, setIsExporting] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen || !codexItem) return null;

  const { topic, speechAnalytics } = codexItem;

  const handleDownloadCard = async () => {
    if (!cardRef.current) return;
    soundEngine.playClick();
    setIsExporting(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        backgroundColor: '#050507',
        useCORS: true
      });
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `paradoxa-${topic.title.toLowerCase().replace(/\s+/g, '-')}.png`;
      link.click();
    } catch (e) {
      console.error('Export card failed', e);
    } finally {
      setIsExporting(false);
    }
  };

  const copyTextPreview = () => {
    soundEngine.playClick();
    const text = `🧠 Bugüne özel 15 dakikalık zihin geliştirme araştırmam:\n\n✨ Konu: "${topic.title}" (${topic.shortDescription})\n\n🎤 2 dakikada diksiyonla anlattım!\n🔥 Seri: ${streakCount} Gün!\n\nPARADOXA ile beynini eğit!`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-soft-fade">
      <div className="minimal-card w-full max-w-sm rounded-3xl border border-white/10 overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-300 font-mono text-xs uppercase tracking-wider">
            <Share2 className="w-3.5 h-3.5" />
            <span>Sosyal Medya Kartı</span>
          </div>
          <button
            onClick={() => {
              soundEngine.playClick();
              onClose();
            }}
            className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white flex items-center justify-center"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Printable Card */}
        <div className="p-6 flex justify-center bg-black/50">
          <div
            ref={cardRef}
            className="w-[280px] rounded-2xl p-5 bg-[#0A0A0E] border border-white/15 space-y-4 text-left"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-white" />
                <span className="font-heading font-extrabold text-base text-white">PARADOXA</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
                <Flame className="w-3 h-3 fill-amber-500" />
                <span>{streakCount} Gün</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                {topic.category}
              </span>
              <h3 className="text-xl font-extrabold font-heading text-white leading-tight">
                {topic.title}
              </h3>
              <p className="text-xs text-slate-300 line-clamp-3 font-normal leading-relaxed">
                {topic.shortDescription}
              </p>
            </div>

            {speechAnalytics && (
              <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 flex items-center justify-around text-center font-mono">
                <div>
                  <div className="text-[9px] text-slate-400">Hız</div>
                  <div className="text-xs font-bold text-white">{speechAnalytics.wpm} WPM</div>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div>
                  <div className="text-[9px] text-slate-400">Netlik</div>
                  <div className="text-xs font-bold text-white">%{speechAnalytics.clarityScore}</div>
                </div>
              </div>
            )}

            <div className="pt-1 text-center text-[9px] text-slate-500 font-mono border-t border-white/10">
              PARADOXA • 15 Dk Araştır • 2 Dk Diksiyonla Anlat
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="p-4 border-t border-white/10 space-y-2">
          <button
            onClick={handleDownloadCard}
            disabled={isExporting}
            className="w-full py-3 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isExporting ? 'Hazırlanıyor...' : 'Görsel Kartı İndir (.PNG)'}</span>
          </button>

          <button
            onClick={copyTextPreview}
            className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-medium text-xs flex items-center justify-center gap-2 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Kopyalandı!' : 'Instagram Metnini Kopyala'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { X, Search, BookMarked, Calendar, Share2 } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function CodexModal({ isOpen, onClose, codexList, onOpenShare }) {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filtered = codexList.filter(item => 
    item.topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.topic.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.notes && item.notes.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg animate-soft-fade">
      <div className="minimal-card w-full max-w-2xl rounded-3xl border border-white/10 overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
              <BookMarked className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold font-heading text-white">Kişisel Bilgi Kodex'i</h3>
              <p className="text-[11px] text-slate-400 font-mono">{codexList.length} kavram kaydedildi</p>
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

        {/* Search */}
        <div className="px-5 py-3 bg-white/[0.02] border-b border-white/5">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Kodex içinde ara..."
              className="w-full minimal-input text-xs text-white pl-9 pr-3 py-2 rounded-lg"
            />
          </div>
        </div>

        {/* List */}
        <div className="p-5 overflow-y-auto flex-1 space-y-3">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <div
                key={item.id + item.date}
                className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 rounded-xl p-4 space-y-2 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                      {item.topic.category}
                    </span>
                    <h4 className="text-base font-bold font-heading text-white mt-1">
                      {item.topic.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">{item.topic.shortDescription}</p>
                  </div>

                  <button
                    onClick={() => {
                      soundEngine.playClick();
                      onOpenShare(item);
                    }}
                    className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors shrink-0"
                  >
                    <Share2 className="w-3 h-3" />
                    <span>Kart</span>
                  </button>
                </div>

                {item.notes && (
                  <div className="bg-black/40 p-2.5 rounded-lg border border-white/5 text-xs text-slate-300 font-mono line-clamp-2">
                    {item.notes}
                  </div>
                )}

                <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono pt-1 border-t border-white/5">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    <span>{new Date(item.date).toLocaleDateString('tr-TR')}</span>
                  </div>

                  {item.speechAnalytics && (
                    <div className="flex items-center gap-2 text-slate-400">
                      <span>{item.speechAnalytics.wpm} WPM</span>
                      <span>•</span>
                      <span>Skor: %{item.speechAnalytics.clarityScore}</span>
                    </div>
                  )}
                </div>

              </div>
            ))
          ) : (
            <div className="text-center py-12 space-y-2">
              <BookMarked className="w-8 h-8 text-slate-600 mx-auto" />
              <p className="text-xs text-slate-500">Henüz kaydedilmiş konu yok.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DiscoveryChamber from './components/DiscoveryChamber';
import ResearchSprint from './components/ResearchSprint';
import PresentationArena from './components/PresentationArena';
import CodexModal from './components/CodexModal';
import ShareCardModal from './components/ShareCardModal';
import WarmupModal from './components/WarmupModal';
import CustomTopicModal from './components/CustomTopicModal';
import { TOPICS, getRandomTopic } from './data/topics';
import { soundEngine } from './utils/audio';
import { getSavedCodex, saveTopicToCodex, getStreakInfo } from './utils/storage';
import confetti from 'canvas-confetti';
import { ArrowLeft } from 'lucide-react';

export default function App() {
  const [stage, setStage] = useState('discovery');
  const [currentTopic, setCurrentTopic] = useState(null);
  const [notes, setNotes] = useState('');
  
  // Codex & Streak State
  const [codexList, setCodexList] = useState([]);
  const [streak, setStreak] = useState(0);
  
  // Modals
  const [isCodexOpen, setIsCodexOpen] = useState(false);
  const [isWarmupOpen, setIsWarmupOpen] = useState(false);
  const [isCustomTopicOpen, setIsCustomTopicOpen] = useState(false);
  const [shareItem, setShareItem] = useState(null);

  // Sound Ambient State
  const [ambientPlaying, setAmbientPlaying] = useState(false);

  useEffect(() => {
    const list = getSavedCodex();
    setCodexList(list);
    const streakData = getStreakInfo();
    setStreak(streakData.count);
  }, []);

  const toggleAmbient = () => {
    if (ambientPlaying) {
      soundEngine.stopAmbient();
      setAmbientPlaying(false);
    } else {
      soundEngine.startAmbient('binaural');
      setAmbientPlaying(true);
    }
  };

  const handleStartSprint = () => {
    setNotes('');
    setStage('sprint');
  };

  const handleFinishSprint = () => {
    setStage('presentation');
  };

  const handleFinishPresentation = (speechAnalytics) => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });

    const updatedCodex = saveTopicToCodex({
      topic: currentTopic,
      notes,
      speechAnalytics
    });
    setCodexList(updatedCodex);
    
    const updatedStreak = getStreakInfo();
    setStreak(updatedStreak.count);

    const latestItem = updatedCodex[0];
    if (latestItem) {
      setShareItem(latestItem);
    }
  };

  const handleResetToDiscovery = () => {
    soundEngine.playClick();
    setCurrentTopic(null);
    setNotes('');
    setStage('discovery');
  };

  const handleCreateCustomTopic = (newTopic) => {
    setCurrentTopic(newTopic);
    setNotes('');
    setStage('sprint');
  };

  return (
    <div className="min-h-screen bg-[#050507] text-slate-100 flex flex-col font-sans selection:bg-white selection:text-slate-950">
      
      {/* Top Navbar */}
      <Header
        streak={streak}
        onOpenCodex={() => setIsCodexOpen(true)}
        onOpenWarmup={() => setIsWarmupOpen(true)}
        onOpenCustomTopic={() => setIsCustomTopicOpen(true)}
        ambientPlaying={ambientPlaying}
        toggleAmbient={toggleAmbient}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 lg:px-12 py-8 flex flex-col justify-center">
        
        {/* Navigation Breadcrumb */}
        {stage !== 'discovery' && (
          <div className="max-w-6xl mx-auto w-full mb-6 flex items-center justify-between">
            <button
              onClick={handleResetToDiscovery}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 flex items-center gap-2 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-white" />
              <span>Ana Sayfaya Dön & Yeni Konu Seç</span>
            </button>

            <div className="text-xs text-slate-400 font-mono">
              Aşama: {stage === 'sprint' ? '15 Dk Araştırma' : '2 Dk Diksiyon Sunumu'}
            </div>
          </div>
        )}

        {/* Views */}
        {stage === 'discovery' && (
          <DiscoveryChamber
            currentTopic={currentTopic}
            onSelectTopic={(t) => setCurrentTopic(t)}
            onStartSprint={handleStartSprint}
            onOpenWarmup={() => setIsWarmupOpen(true)}
            onOpenCustomTopic={() => setIsCustomTopicOpen(true)}
          />
        )}

        {stage === 'sprint' && currentTopic && (
          <ResearchSprint
            topic={currentTopic}
            notes={notes}
            onNotesChange={(val) => setNotes(val)}
            onFinishSprint={handleFinishSprint}
          />
        )}

        {stage === 'presentation' && currentTopic && (
          <PresentationArena
            topic={currentTopic}
            notes={notes}
            onFinishPresentation={handleFinishPresentation}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/5 py-6 px-4 text-center text-xs text-slate-500 space-y-1 font-mono">
        <p className="text-slate-400 font-medium">PARADOXA • Beyin Geliştirici & AI Bağımlılığını Yenici Zihin Platformu</p>
        <p>15 Dakika Araştır • 2 Dakika Diksiyonla Anlat • GitHub Pages Hazır</p>
      </footer>

      {/* Modals */}
      <CodexModal
        isOpen={isCodexOpen}
        onClose={() => setIsCodexOpen(false)}
        codexList={codexList}
        onOpenShare={(item) => setShareItem(item)}
      />

      <ShareCardModal
        isOpen={!!shareItem}
        onClose={() => setShareItem(null)}
        codexItem={shareItem}
        streakCount={streak}
      />

      <WarmupModal
        isOpen={isWarmupOpen}
        onClose={() => setIsWarmupOpen(false)}
      />

      <CustomTopicModal
        isOpen={isCustomTopicOpen}
        onClose={() => setIsCustomTopicOpen(false)}
        onCreateCustomTopic={handleCreateCustomTopic}
      />

    </div>
  );
}

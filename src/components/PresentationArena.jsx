import React, { useState, useEffect } from 'react';
import { SpeechAnalyzer, analyzeSpeech } from '../utils/speech';
import { Mic, MicOff, CheckCircle2, Brain, Award, Sparkles, Eye, FileText } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function PresentationArena({ topic, notes, onFinishPresentation }) {
  const [timeLeft, setTimeLeft] = useState(120);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [speechAnalyzer, setSpeechAnalyzer] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [analytics, setAnalytics] = useState(null);
  const [showTeleprompter, setShowTeleprompter] = useState(false);

  useEffect(() => {
    const analyzer = new SpeechAnalyzer(
      (newTranscript) => {
        setTranscript(newTranscript);
      },
      (listeningState) => {
        setIsRecording(listeningState);
      }
    );
    setSpeechAnalyzer(analyzer);

    return () => {
      if (analyzer) analyzer.stop();
    };
  }, []);

  useEffect(() => {
    let timer = null;
    if (isTimerRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleFinishPresentation();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, timeLeft]);

  useEffect(() => {
    const elapsedTime = 120 - timeLeft;
    const stats = analyzeSpeech(transcript, Math.max(elapsedTime, 5));
    setAnalytics(stats);
  }, [transcript, timeLeft]);

  const toggleRecording = () => {
    soundEngine.playClick();
    if (!speechAnalyzer) return;

    if (isRecording) {
      speechAnalyzer.stop();
      setIsTimerRunning(false);
    } else {
      speechAnalyzer.start();
      setIsTimerRunning(true);
    }
  };

  const handleFinishPresentation = () => {
    soundEngine.playChime();
    if (speechAnalyzer) speechAnalyzer.stop();
    setIsTimerRunning(false);
    const elapsedTime = 120 - timeLeft;
    const finalStats = analyzeSpeech(transcript, Math.max(elapsedTime, 5));
    setAnalytics(finalStats);
    setIsFinished(true);
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const circleProgress = ((120 - timeLeft) / 120) * 283;

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      
      {/* Header Banner */}
      <div className="minimal-card p-6 sm:p-8 text-center space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
          Aşama 2: 2 Dakikalık Diksiyon & Anlatım Arenası
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
          "{topic.title}" Kavramını Anlat
        </h2>
        <p className="text-sm text-slate-400 max-w-2xl mx-auto">
          Mikrofonu açın ve 2 dakika içinde kendi cümlelerinizle net ve akıcı bir diksiyonla ifade edin.
        </p>
      </div>

      {!isFinished ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Timer & Controls */}
          <div className="lg:col-span-4 minimal-card p-6 flex flex-col items-center justify-center text-center space-y-6">
            
            <div className="relative w-44 h-44 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  className="text-white/5 stroke-current"
                  strokeWidth="5"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  className="text-white stroke-current transition-all duration-1000"
                  strokeWidth="5"
                  strokeDasharray="283"
                  strokeDashoffset={283 - circleProgress}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>

              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-4xl font-mono font-bold text-white">
                  {formatTime(timeLeft)}
                </span>
                <span className="text-xs text-slate-500 font-mono uppercase">Kalan Süre</span>
              </div>
            </div>

            <button
              onClick={toggleRecording}
              className={`w-full py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                isRecording
                  ? 'bg-rose-500 hover:bg-rose-600 text-white shadow-lg'
                  : 'bg-white hover:bg-slate-200 text-slate-950 shadow-sm'
              }`}
            >
              {isRecording ? (
                <>
                  <MicOff className="w-5 h-5" />
                  <span>Kaydı Durdur</span>
                </>
              ) : (
                <>
                  <Mic className="w-5 h-5" />
                  <span>Sesli Anlatıma Başla</span>
                </>
              )}
            </button>

            {/* Teleprompter Toggle */}
            {notes && (
              <button
                onClick={() => setShowTeleprompter(!showTeleprompter)}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 flex items-center justify-center gap-2 transition-colors"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>{showTeleprompter ? 'Transkripte Dön' : 'Notlarımı Teleprompter Yap'}</span>
              </button>
            )}

            <button
              onClick={handleFinishPresentation}
              className="text-xs text-slate-400 hover:text-slate-200 underline font-medium"
            >
              Sunumu Bitir ve Analizi Gör →
            </button>
          </div>

          {/* Right Column: Speech-to-Text or Teleprompter View */}
          <div className="lg:col-span-8 space-y-4">
            
            <div className="minimal-card p-6 flex flex-col h-[320px]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  {showTeleprompter ? <FileText className="w-4 h-4 text-cyan-400" /> : <Sparkles className="w-4 h-4 text-slate-400" />}
                  {showTeleprompter ? 'Teleprompter Notların' : 'Canlı Ses Transkripti'}
                </span>
                {isRecording && (
                  <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Mikrofon Aktif
                  </span>
                )}
              </div>

              <div className="flex-1 minimal-input p-5 rounded-xl overflow-y-auto text-sm text-slate-200 leading-relaxed font-sans">
                {showTeleprompter ? (
                  <div className="text-base text-slate-200 font-mono whitespace-pre-wrap leading-relaxed">
                    {notes || "Henüz not eklenmedi."}
                  </div>
                ) : (
                  transcript ? (
                    transcript
                  ) : (
                    <span className="text-slate-500 italic">
                      "Anlatıma başladığınızda söyledikleriniz canlı metne dönüştürülecek..."
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Quick Speech Metrics */}
            {analytics && (
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                  <div className="text-xl font-bold font-mono text-white">{analytics.wordCount}</div>
                  <div className="text-xs text-slate-400 uppercase font-mono mt-1">Kelime</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                  <div className="text-xl font-bold font-mono text-white">{analytics.wpm}</div>
                  <div className="text-xs text-slate-400 uppercase font-mono mt-1">WPM (Hız)</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                  <div className={`text-xl font-bold font-mono ${analytics.fillerCount > 3 ? 'text-amber-400' : 'text-emerald-400'}`}>
                    {analytics.fillerCount}
                  </div>
                  <div className="text-xs text-slate-400 uppercase font-mono mt-1">Dolgu Kelime</div>
                </div>
              </div>
            )}

          </div>

        </div>
      ) : (
        /* Evaluation Results */
        <div className="minimal-card p-8 sm:p-10 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-white">Sunum & Diksiyon Raporu</h3>
                <p className="text-xs text-slate-400">Performans analizi tamamlandı</p>
              </div>
            </div>

            <div className="text-right">
              <div className="text-4xl font-extrabold font-mono text-white">
                {analytics ? analytics.clarityScore : 85} <span className="text-sm font-normal text-slate-500">/ 100</span>
              </div>
              <div className="text-xs font-mono text-slate-400 uppercase">Netlik Skoru</div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-sm leading-relaxed flex items-start gap-3">
            <Brain className="w-5 h-5 text-white shrink-0 mt-0.5" />
            <span>{analytics?.feedback}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="text-xs text-slate-400">Kelime Sayısı</div>
              <div className="text-2xl font-bold text-white mt-1">{analytics?.wordCount || 0}</div>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="text-xs text-slate-400">Konuşma Hızı</div>
              <div className="text-2xl font-bold text-white mt-1">{analytics?.wpm || 0} WPM</div>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="text-xs text-slate-400">Dolgu Kelimeler</div>
              <div className="text-2xl font-bold text-amber-400 mt-1">{analytics?.fillerCount || 0}</div>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="text-xs text-slate-400">Netlik Skoru</div>
              <div className="text-2xl font-bold text-emerald-400 mt-1">%{analytics?.clarityScore || 90}</div>
            </div>
          </div>

          {analytics?.fillerList && analytics.fillerList.length > 0 && (
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs">
              <strong>Tespit Edilen Dolgu Kelimeler:</strong> {analytics.fillerList.join(', ')}
            </div>
          )}

          <button
            onClick={() => {
              soundEngine.playClick();
              onFinishPresentation(analytics);
            }}
            className="w-full py-4 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg"
          >
            <CheckCircle2 className="w-5 h-5 text-slate-950" />
            <span>Kodex Kütüphanesine Kaydet ve Seri Kazan 🔥</span>
          </button>

        </div>
      )}
    </div>
  );
}

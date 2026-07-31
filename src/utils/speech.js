// Web Speech API Wrapper & Speech/Diction Analytics

export class SpeechAnalyzer {
  constructor(onTranscriptChange, onStatusChange) {
    this.recognition = null;
    this.isListening = false;
    this.transcript = '';
    this.onTranscriptChange = onTranscriptChange;
    this.onStatusChange = onStatusChange;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = 'tr-TR'; // Default to Turkish, can switch to en-US

      this.recognition.onstart = () => {
        this.isListening = true;
        if (this.onStatusChange) this.onStatusChange(true);
      };

      this.recognition.onend = () => {
        this.isListening = false;
        if (this.onStatusChange) this.onStatusChange(false);
      };

      this.recognition.onresult = (event) => {
        let currentTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript + ' ';
        }
        this.transcript = currentTranscript.trim();
        if (this.onTranscriptChange) {
          this.onTranscriptChange(this.transcript);
        }
      };

      this.recognition.onerror = (event) => {
        console.warn('Speech recognition error:', event.error);
      };
    }
  }

  setLanguage(lang = 'tr-TR') {
    if (this.recognition) {
      this.recognition.lang = lang;
    }
  }

  start() {
    if (this.recognition && !this.isListening) {
      try {
        this.transcript = '';
        this.recognition.start();
      } catch (e) {
        console.error(e);
      }
    }
  }

  stop() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (e) {
        console.error(e);
      }
    }
  }
}

// Analyze transcript for Diction & Speech Quality
export function analyzeSpeech(transcriptText, durationSeconds) {
  if (!transcriptText || transcriptText.trim().length === 0) {
    return {
      wordCount: 0,
      wpm: 0,
      fillerCount: 0,
      fillerList: [],
      clarityScore: 0,
      feedback: 'Henüz konuşma kaydı algılanmadı. Mikrofonu açıp anlatmaya başlayın!'
    };
  }

  const words = transcriptText.trim().split(/\s+/);
  const wordCount = words.length;
  const minutes = Math.max(durationSeconds / 60, 0.1);
  const wpm = Math.round(wordCount / minutes);

  // Common Turkish & English filler words (Dolgu Kelimeler)
  const FILLER_WORDS = ['şey', 'yani', 'ee', 'eee', 'filan', 'falan', 'işte', 'hımm', 'gibi', 'galiba', 'atıyorum', 'yaniii', 'um', 'uh', 'like', 'you know'];
  const fillerList = [];
  let fillerCount = 0;

  words.forEach(w => {
    const cleanWord = w.toLowerCase().replace(/[^a-zğüşıöç]/g, '');
    if (FILLER_WORDS.includes(cleanWord)) {
      fillerCount++;
      if (!fillerList.includes(cleanWord)) {
        fillerList.push(cleanWord);
      }
    }
  });

  // Calculate Diction/Clarity Score (0 to 100)
  // Ideal speaking speed for presentation is 110 - 160 WPM
  let wpmScore = 100;
  if (wpm < 80) wpmScore = 70; // Too slow
  else if (wpm > 180) wpmScore = 65; // Too fast

  const fillerRatio = wordCount > 0 ? (fillerCount / wordCount) : 0;
  const fillerPenalty = Math.min(Math.round(fillerRatio * 200), 40);

  const clarityScore = Math.max(Math.min(Math.round(wpmScore - fillerPenalty), 100), 20);

  let feedback = '';
  if (clarityScore >= 85) {
    feedback = 'Mükemmel hitabet! Akıcı tempo, düşük dolgu kelime kullanımı ve net artikülasyon.';
  } else if (clarityScore >= 70) {
    feedback = 'Çok iyi sunum! Tempo dengeli. Biraz daha duraksamaları (es vermeyi) bilinçli yapabilirsiniz.';
  } else {
    feedback = 'İyi deneme! Konuşurken "şey/yani/ee" gibi dolgu kelimeleri azaltmaya ve kelimeleri tane tane söylemeye odaklanın.';
  }

  return {
    wordCount,
    wpm,
    fillerCount,
    fillerList,
    clarityScore,
    feedback
  };
}

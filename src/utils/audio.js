// Web Audio API Sound Synthesizer for UI sound effects & Ambient focus noise

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.ambientNode = null;
    this.isPlayingAmbient = false;
    this.ambientType = 'binaural'; // 'binaural', 'brown', 'rain'
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playClick() {
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {
      console.warn('Audio play error', e);
    }
  }

  playSpinTick() {
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800 + Math.random() * 200, this.ctx.currentTime);
      
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.03);
    } catch (e) {
      console.warn(e);
    }
  }

  playReveal() {
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.15);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.3);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.2, now + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(now + 0.4);
    } catch (e) {
      console.warn(e);
    }
  }

  playChime() {
    try {
      this.init();
      const now = this.ctx.currentTime;
      const freqs = [523.25, 659.25, 783.99, 1046.50]; // C Major chord arpeggio
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.15, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.8);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.8);
      });
    } catch (e) {
      console.warn(e);
    }
  }

  // Focus Ambient Noise Generator
  startAmbient(type = 'binaural') {
    this.init();
    this.stopAmbient();
    this.ambientType = type;
    this.isPlayingAmbient = true;

    const now = this.ctx.currentTime;
    if (type === 'binaural') {
      // 432Hz Alpha Focus Tone
      const oscL = this.ctx.createOscillator();
      const oscR = this.ctx.createOscillator();
      const merger = this.ctx.createChannelMerger(2);
      const gain = this.ctx.createGain();

      oscL.frequency.value = 216; // Left channel 216Hz
      oscR.frequency.value = 226; // Right channel 226Hz (10Hz Alpha beat)

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.08, now + 1);

      oscL.connect(merger, 0, 0);
      oscR.connect(merger, 0, 1);
      merger.connect(gain);
      gain.connect(this.ctx.destination);

      oscL.start();
      oscR.start();
      this.ambientNode = { stop: () => { oscL.stop(); oscR.stop(); }, gain };
    } else if (type === 'brown') {
      // Deep Brown Noise
      const bufferSize = this.ctx.sampleRate * 2;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        data[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = data[i];
        data[i] *= 3.5; // boost
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.06, now + 1);

      noise.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start();
      this.ambientNode = { stop: () => noise.stop(), gain };
    }
  }

  stopAmbient() {
    if (this.ambientNode) {
      try {
        const now = this.ctx ? this.ctx.currentTime : 0;
        if (this.ambientNode.gain) {
          this.ambientNode.gain.gain.linearRampToValueAtTime(0.001, now + 0.5);
          setTimeout(() => {
            if (this.ambientNode) this.ambientNode.stop();
            this.ambientNode = null;
          }, 500);
        } else {
          this.ambientNode.stop();
          this.ambientNode = null;
        }
      } catch (e) {
        this.ambientNode = null;
      }
    }
    this.isPlayingAmbient = false;
  }
}

export const soundEngine = new SoundEngine();

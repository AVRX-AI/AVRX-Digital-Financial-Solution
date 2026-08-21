/**
 * AVRX High-Tech Cinematic Sound Engine
 * Custom Web Audio API synthesizer for the Welcome to AVRX & Launch Sequence
 * Zero external audio files required - 100% synthesized in-browser with zero latency.
 */

class LaunchSoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  private initContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx || this.ctx.state === 'closed') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  /**
   * 1. Welcome Ambient Boot Chime
   * Soft, warm, cinematic major chord arpeggio with shimmer decay
   */
  public playWelcomeChime() {
    if (this.isMuted) return;
    try {
      const ctx = this.initContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      // Notes: C#4, G#4, C5, F5, G#5 (Futuristic Atmospheric Chord)
      const notes = [277.18, 415.3, 523.25, 698.46, 830.61];

      // Master Compressor to prevent clipping
      const compressor = ctx.createDynamicsCompressor();
      compressor.threshold.setValueAtTime(-24, now);
      compressor.knee.setValueAtTime(30, now);
      compressor.ratio.setValueAtTime(12, now);
      compressor.attack.setValueAtTime(0.003, now);
      compressor.release.setValueAtTime(0.25, now);
      compressor.connect(ctx.destination);

      // Deep Ambient Sub Drone
      const subOsc = ctx.createOscillator();
      const subGain = ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(69.3, now); // C#2
      subGain.gain.setValueAtTime(0.001, now);
      subGain.gain.linearRampToValueAtTime(0.18, now + 0.3);
      subGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);
      subOsc.connect(subGain);
      subGain.connect(compressor);
      subOsc.start(now);
      subOsc.stop(now + 2.5);

      // Shimmer Arpeggio notes
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        const startTime = now + idx * 0.12;
        const duration = 2.0;

        // Dual detuned oscillators for lush stereo space
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(freq * 1.003, startTime); // slight detune

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1800, startTime);
        filter.frequency.exponentialRampToValueAtTime(600, startTime + duration);

        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.linearRampToValueAtTime(0.12, startTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

        osc.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(compressor);

        osc.start(startTime);
        osc2.start(startTime);
        osc.stop(startTime + duration);
        osc2.stop(startTime + duration);
      });
    } catch {
      // Audio autoplay policy catch
    }
  }

  /**
   * 2. Cyber Hover Sound
   * High-tech tactile UI chirp
   */
  public playHoverChirp() {
    if (this.isMuted) return;
    try {
      const ctx = this.initContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1400, now);
      osc.frequency.exponentialRampToValueAtTime(2200, now + 0.06);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch {
      // Ignore
    }
  }

  /**
   * 3. Countdown Beeps (3, 2, 1)
   * High-tech resonant pulse with escalating pitch and harmonic richness
   */
  public playCountdownPulse(step: 3 | 2 | 1) {
    if (this.isMuted) return;
    try {
      const ctx = this.initContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const freqMap = {
        3: { root: 440, harmonic: 880, sub: 110, duration: 0.35, label: 'Stage 3' },
        2: { root: 587.33, harmonic: 1174.66, sub: 146.83, duration: 0.35, label: 'Stage 2' },
        1: { root: 880, harmonic: 1760, sub: 220, duration: 0.45, label: 'Stage 1' },
      };

      const config = freqMap[step];

      // Primary tone
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const subOsc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(config.root, now);
      osc1.frequency.exponentialRampToValueAtTime(config.root * 0.98, now + config.duration);

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(config.harmonic, now);

      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(config.sub, now);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(config.root * 1.5, now);
      filter.Q.setValueAtTime(3.5, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.25, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + config.duration);

      osc1.connect(filter);
      osc2.connect(filter);
      subOsc.connect(gain);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now);
      subOsc.start(now);

      osc1.stop(now + config.duration);
      osc2.stop(now + config.duration);
      subOsc.stop(now + config.duration);
    } catch {
      // Ignore
    }
  }

  /**
   * 4. Multi-Layered Rocket Liftoff & Hyper-Drive Warp Sound
   * Deep sub-bass boom + fiery thruster exhaust roar + cyber energy riser + celestial victory chord
   */
  public playRocketLiftoff() {
    if (this.isMuted) return;
    try {
      const ctx = this.initContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const duration = 2.8;

      // Master Compressor
      const masterComp = ctx.createDynamicsCompressor();
      masterComp.threshold.setValueAtTime(-18, now);
      masterComp.knee.setValueAtTime(20, now);
      masterComp.ratio.setValueAtTime(8, now);
      masterComp.attack.setValueAtTime(0.005, now);
      masterComp.release.setValueAtTime(0.2, now);
      masterComp.connect(ctx.destination);

      // LAYER A: Sub-bass Sonic Blast & Engine Rumble
      const subOsc = ctx.createOscillator();
      const subGain = ctx.createGain();
      subOsc.type = 'sawtooth';
      subOsc.frequency.setValueAtTime(50, now);
      subOsc.frequency.exponentialRampToValueAtTime(160, now + 1.2);
      subOsc.frequency.exponentialRampToValueAtTime(70, now + duration);

      const subFilter = ctx.createBiquadFilter();
      subFilter.type = 'lowpass';
      subFilter.frequency.setValueAtTime(250, now);
      subFilter.frequency.exponentialRampToValueAtTime(500, now + 1.2);

      subGain.gain.setValueAtTime(0.3, now);
      subGain.gain.linearRampToValueAtTime(0.38, now + 0.4);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      subOsc.connect(subFilter);
      subFilter.connect(subGain);
      subGain.connect(masterComp);

      subOsc.start(now);
      subOsc.stop(now + duration);

      // LAYER B: Stereo Noise Generator (Rocket Exhaust Roar)
      const bufferSize = ctx.sampleRate * 3;
      const noiseBuffer = ctx.createBuffer(2, bufferSize, ctx.sampleRate);
      for (let channel = 0; channel < 2; channel++) {
        const data = noiseBuffer.getChannelData(channel);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }
      }

      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = noiseBuffer;

      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(320, now);
      noiseFilter.frequency.exponentialRampToValueAtTime(2200, now + 1.4);
      noiseFilter.frequency.exponentialRampToValueAtTime(400, now + duration);
      noiseFilter.Q.setValueAtTime(2.2, now);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.01, now);
      noiseGain.gain.linearRampToValueAtTime(0.28, now + 0.2);
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      noiseSource.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(masterComp);

      noiseSource.start(now);
      noiseSource.stop(now + duration);

      // LAYER C: Sci-Fi Warp Energy Riser (Laser / Hyperdrive Sweep)
      const warpOsc = ctx.createOscillator();
      const warpGain = ctx.createGain();
      warpOsc.type = 'sine';
      warpOsc.frequency.setValueAtTime(220, now);
      warpOsc.frequency.exponentialRampToValueAtTime(3200, now + 1.8);

      warpGain.gain.setValueAtTime(0.01, now);
      warpGain.gain.linearRampToValueAtTime(0.18, now + 0.6);
      warpGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.0);

      warpOsc.connect(warpGain);
      warpGain.connect(masterComp);

      warpOsc.start(now);
      warpOsc.stop(now + 2.0);

      // LAYER D: Celestial Orbital Chord Fanfare (Entry to Orbit!)
      const fanfareNotes = [523.25, 659.25, 783.99, 1046.5, 1318.5]; // C Major 9th
      fanfareNotes.forEach((freq, idx) => {
        const chordOsc = ctx.createOscillator();
        const chordGain = ctx.createGain();
        const noteStart = now + 1.1 + idx * 0.08;

        chordOsc.type = 'sine';
        chordOsc.frequency.setValueAtTime(freq, noteStart);

        chordGain.gain.setValueAtTime(0.001, noteStart);
        chordGain.gain.linearRampToValueAtTime(0.14, noteStart + 0.08);
        chordGain.gain.exponentialRampToValueAtTime(0.0001, noteStart + 1.6);

        chordOsc.connect(chordGain);
        chordGain.connect(masterComp);

        chordOsc.start(noteStart);
        chordOsc.stop(noteStart + 1.6);
      });
    } catch {
      // Ignore
    }
  }

  /**
   * 5. Spoken AI Mission Voice (Optional Robotic Mission Audio)
   * Crisp synthesized speech for countdown if supported
   */
  public speakMissionBrief(text: string) {
    if (this.isMuted || typeof window === 'undefined' || !window.speechSynthesis) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.05;
      utterance.pitch = 1.15;
      utterance.volume = 0.85;
      window.speechSynthesis.speak(utterance);
    } catch {
      // Speech synthesis error or not allowed
    }
  }

  /**
   * 6. UI Click / Tick Sound
   */
  public playClickTick() {
    if (this.isMuted) return;
    try {
      const ctx = this.initContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1800, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.04);

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // Ignore
    }
  }

  /**
   * 7. Sci-Fi Teleport / AI Completion Zap Sound
   */
  public playTeleportZap() {
    if (this.isMuted) return;
    try {
      const ctx = this.initContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(2400, now + 0.15);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.3);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.15, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.32);
    } catch {
      // Ignore
    }
  }

  /**
   * 8. Success Chime
   */
  public playSuccessChime() {
    if (this.isMuted) return;
    try {
      const ctx = this.initContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const freqs = [523.25, 659.25, 783.99, 1046.5]; // C E G C
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const start = now + idx * 0.06;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.001, start);
        gain.gain.linearRampToValueAtTime(0.12, start + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.4);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(start);
        osc.stop(start + 0.42);
      });
    } catch {
      // Ignore
    }
  }

  /**
   * 9. Laser Launch Sound
   */
  public playLaserLaunch() {
    this.playTeleportZap();
  }

  /**
   * 10. Success Bell
   */
  public playSuccessBell() {
    this.playSuccessChime();
  }

  /**
   * 11. Error Buzz
   */
  public playErrorBuzz() {
    if (this.isMuted) return;
    try {
      const ctx = this.initContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.setValueAtTime(110, now + 0.1);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.28);
    } catch {
      // Ignore
    }
  }
}

export const launchSoundEngine = new LaunchSoundEngine();

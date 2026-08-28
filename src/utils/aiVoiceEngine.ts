// Speech Synthesis & Recognition Helper for AVRX AI Assistant

export interface VoiceEngineCallbacks {
  onTranscript?: (transcript: string, isFinal: boolean) => void;
  onListeningStart?: () => void;
  onListeningEnd?: () => void;
  onSpeakingStart?: () => void;
  onSpeakingEnd?: () => void;
  onError?: (error: string) => void;
}

class AIVoiceEngine {
  private recognition: any = null;
  private synthesis: SpeechSynthesis | null = null;
  private isListening = false;
  private isSpeaking = false;
  private callbacks: VoiceEngineCallbacks = {};
  private activeUtterance: SpeechSynthesisUtterance | null = null;

  constructor() {
    if (typeof window !== "undefined") {
      // Speech Synthesis
      if ("speechSynthesis" in window) {
        this.synthesis = window.speechSynthesis;
      }

      // Speech Recognition (Webkit & Standard)
      const SpeechRecognition = 
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (SpeechRecognition) {
        try {
          this.recognition = new SpeechRecognition();
          this.recognition.continuous = false;
          this.recognition.interimResults = true;
          this.recognition.lang = "hi-IN"; // Default to Hindi-India, falls back gracefully

          this.recognition.onstart = () => {
            this.isListening = true;
            this.callbacks.onListeningStart?.();
          };

          this.recognition.onresult = (event: any) => {
            let interim = "";
            let final = "";

            for (let i = event.resultIndex; i < event.results.length; ++i) {
              const transcript = event.results[i][0].transcript;
              if (event.results[i].isFinal) {
                final += transcript;
              } else {
                interim += transcript;
              }
            }

            const activeText = final || interim;
            if (activeText) {
              this.callbacks.onTranscript?.(activeText, !!final);
            }
          };

          this.recognition.onerror = (event: any) => {
            this.isListening = false;
            this.callbacks.onError?.(event.error || "Speech recognition error");
            this.callbacks.onListeningEnd?.();
          };

          this.recognition.onend = () => {
            this.isListening = false;
            this.callbacks.onListeningEnd?.();
          };
        } catch (e) {
          console.warn("Speech recognition initialization error:", e);
        }
      }
    }
  }

  public setCallbacks(cbs: VoiceEngineCallbacks) {
    this.callbacks = cbs;
  }

  public isVoiceSupported(): boolean {
    return !!(this.recognition || this.synthesis);
  }

  public isRecognitionSupported(): boolean {
    return !!this.recognition;
  }

  public startListening(lang: string = "hi-IN") {
    if (!this.recognition) {
      this.callbacks.onError?.("Voice input is not supported in this browser. Please use text typing.");
      return;
    }

    if (this.isSpeaking) {
      this.stopSpeaking();
    }

    try {
      this.recognition.lang = lang;
      this.recognition.start();
    } catch (err: any) {
      if (err.name !== "InvalidStateError") {
        console.warn("Speech recognition start failed:", err);
      }
    }
  }

  public stopListening() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (e) {}
    }
    this.isListening = false;
  }

  public speak(text: string, lang: string = "hi-IN"): Promise<void> {
    return new Promise((resolve) => {
      if (!this.synthesis) {
        resolve();
        return;
      }

      this.stopSpeaking();

      // Clean markdown tags & URLs for clear speech output
      const cleanText = text
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // markdown links
        .replace(/[*_#`~]/g, "") // markdown symbols
        .replace(/https?:\/\/\S+/g, "") // bare urls
        .replace(/[•●]/g, ",")
        .slice(0, 400); // speak first 400 chars for snappy dialogue

      const utterance = new SpeechSynthesisUtterance(cleanText);
      this.activeUtterance = utterance;
      utterance.lang = lang;
      utterance.rate = 1.0;
      utterance.pitch = 1.05;

      // Select natural Hindi or Indian English voice if available
      const voices = this.synthesis.getVoices();
      const indianVoice = voices.find(v => 
        v.lang.includes("hi") || 
        v.lang.includes("IN") || 
        v.name.includes("India") || 
        v.name.includes("Hindi")
      );
      if (indianVoice) {
        utterance.voice = indianVoice;
      }

      utterance.onstart = () => {
        this.isSpeaking = true;
        this.callbacks.onSpeakingStart?.();
      };

      utterance.onend = () => {
        this.isSpeaking = false;
        this.callbacks.onSpeakingEnd?.();
        resolve();
      };

      utterance.onerror = () => {
        this.isSpeaking = false;
        this.callbacks.onSpeakingEnd?.();
        resolve();
      };

      try {
        this.synthesis.speak(utterance);
      } catch (e) {
        this.isSpeaking = false;
        resolve();
      }
    });
  }

  public stopSpeaking() {
    if (this.synthesis) {
      try {
        this.synthesis.cancel();
      } catch (e) {}
    }
    this.isSpeaking = false;
  }

  public stopAll() {
    this.stopListening();
    this.stopSpeaking();
  }
}

export const aiVoiceEngine = new AIVoiceEngine();

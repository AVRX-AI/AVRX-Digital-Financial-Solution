import React, { useState, useMemo } from 'react';
import { 
  Key, 
  Copy, 
  Check, 
  RefreshCw, 
  ShieldCheck, 
  ShieldAlert, 
  Sliders, 
  Lock, 
  Sparkles,
  Info
} from 'lucide-react';

export const PasswordGeneratorTool: React.FC = () => {
  const [length, setLength] = useState<number>(16);
  const [includeUpper, setIncludeUpper] = useState<boolean>(true);
  const [includeLower, setIncludeLower] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [excludeAmbiguous, setExcludeAmbiguous] = useState<boolean>(false);
  const [mode, setMode] = useState<'password' | 'passphrase'>('password');
  const [passphraseWords, setPassphraseWords] = useState<number>(4);
  const [copied, setCopied] = useState<boolean>(false);
  const [refreshTrigger, setRefreshTrigger] = useState<number>(0);

  // Curated list of friendly dictionary words for memorable passphrases
  const wordList = [
    'avrx', 'crypto', 'shield', 'quantum', 'matrix', 'cyber', 'secure', 'titan',
    'beacon', 'orbit', 'solar', 'vector', 'horizon', 'vertex', 'zenith', 'pulse',
    'nebula', 'phantom', 'hyper', 'nexus', 'prism', 'falcon', 'aurora', 'dynamo',
    'echo', 'flux', 'galaxy', 'harbor', 'impact', 'kinetic', 'lunar', 'magnet',
    'nova', 'oasis', 'pixel', 'radar', 'shadow', 'summit', 'thunder', 'vortex'
  ];

  // Cryptographically secure generation
  const generatedPassword = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    refreshTrigger; // dependency to regenerate

    if (mode === 'passphrase') {
      const selectedWords: string[] = [];
      const array = new Uint32Array(passphraseWords);
      if (typeof window !== 'undefined' && window.crypto) {
        window.crypto.getRandomValues(array);
        for (let i = 0; i < passphraseWords; i++) {
          const word = wordList[array[i] % wordList.length];
          // capitalize first letter
          selectedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
        }
      } else {
        for (let i = 0; i < passphraseWords; i++) {
          const word = wordList[Math.floor(Math.random() * wordList.length)];
          selectedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
        }
      }
      return selectedWords.join('-');
    }

    let upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    let numberChars = '0123456789';
    let symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (excludeAmbiguous) {
      upperChars = upperChars.replace(/[OI]/g, '');
      lowerChars = lowerChars.replace(/[olI]/g, '');
      numberChars = numberChars.replace(/[01]/g, '');
      symbolChars = symbolChars.replace(/[|`'"]/g, '');
    }

    let charPool = '';
    if (includeUpper) charPool += upperChars;
    if (includeLower) charPool += lowerChars;
    if (includeNumbers) charPool += numberChars;
    if (includeSymbols) charPool += symbolChars;

    if (!charPool) {
      return 'Please select at least one character type';
    }

    let result = '';
    const array = new Uint32Array(length);
    if (typeof window !== 'undefined' && window.crypto) {
      window.crypto.getRandomValues(array);
      for (let i = 0; i < length; i++) {
        result += charPool[array[i] % charPool.length];
      }
    } else {
      for (let i = 0; i < length; i++) {
        result += charPool[Math.floor(Math.random() * charPool.length)];
      }
    }

    return result;
  }, [
    length,
    includeUpper,
    includeLower,
    includeNumbers,
    includeSymbols,
    excludeAmbiguous,
    mode,
    passphraseWords,
    refreshTrigger
  ]);

  // Measure entropy & crack time
  const strengthMetrics = useMemo(() => {
    if (mode === 'passphrase') {
      const entropy = Math.round(passphraseWords * Math.log2(wordList.length));
      return {
        entropy,
        label: passphraseWords >= 5 ? 'Very Strong' : passphraseWords >= 4 ? 'Strong' : 'Moderate',
        color: passphraseWords >= 5 ? 'emerald' : passphraseWords >= 4 ? 'cyan' : 'amber',
        percent: Math.min(100, (passphraseWords / 6) * 100),
        crackTime: passphraseWords >= 5 ? 'Billions of Years' : passphraseWords >= 4 ? 'Centuries' : ' چند Months'
      };
    }

    let poolSize = 0;
    if (includeUpper) poolSize += 26;
    if (includeLower) poolSize += 26;
    if (includeNumbers) poolSize += 10;
    if (includeSymbols) poolSize += 28;

    if (poolSize === 0) {
      return { entropy: 0, label: 'None', color: 'slate', percent: 0, crackTime: 'Instant' };
    }

    const entropy = Math.round(length * Math.log2(poolSize));
    let label = 'Weak';
    let color = 'rose';
    let crackTime = 'A few seconds';

    if (entropy >= 80) {
      label = 'Military Grade';
      color = 'emerald';
      crackTime = 'Trillions of Years';
    } else if (entropy >= 60) {
      label = 'Very Strong';
      color = 'emerald';
      crackTime = 'Thousands of Years';
    } else if (entropy >= 45) {
      label = 'Strong';
      color = 'cyan';
      crackTime = 'Several Years';
    } else if (entropy >= 32) {
      label = 'Moderate';
      color = 'amber';
      crackTime = 'A few Days / Weeks';
    }

    return {
      entropy,
      label,
      color,
      percent: Math.min(100, (entropy / 90) * 100),
      crackTime
    };
  }, [mode, passphraseWords, length, includeUpper, includeLower, includeNumbers, includeSymbols]);

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(generatedPassword);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleRegenerate = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      {/* 1. Main Display Box */}
      <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-inner">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5" />
            <span>Generated Password</span>
          </span>

          <div className="flex items-center gap-2">
            <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
              strengthMetrics.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' :
              strengthMetrics.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' :
              strengthMetrics.color === 'amber' ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' :
              'bg-rose-500/10 text-rose-400 border-rose-500/30'
            }`}>
              {strengthMetrics.label} ({strengthMetrics.entropy} bits)
            </span>
          </div>
        </div>

        {/* Password Output Field */}
        <div className="relative">
          <div className="w-full bg-slate-900 border border-slate-700/80 rounded-2xl p-4 sm:p-5 pr-28 text-base sm:text-xl md:text-2xl font-mono text-cyan-300 break-all select-all tracking-wide shadow-inner min-h-[64px] flex items-center">
            {generatedPassword}
          </div>

          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
            <button
              onClick={handleRegenerate}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition"
              title="Regenerate"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={handleCopy}
              className="px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-cyan-500/20 transition"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-slate-950" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-950" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Strength Progress Bar & Crack Time estimate */}
        <div className="space-y-2">
          <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div
              className={`h-full transition-all duration-300 rounded-full ${
                strengthMetrics.color === 'emerald' ? 'bg-gradient-to-r from-emerald-500 to-cyan-400' :
                strengthMetrics.color === 'cyan' ? 'bg-cyan-500' :
                strengthMetrics.color === 'amber' ? 'bg-amber-400' : 'bg-rose-500'
              }`}
              style={{ width: `${strengthMetrics.percent}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Est. Brute-Force Crack Time: <strong className="text-white">{strengthMetrics.crackTime}</strong></span>
            </span>
            <span>Entropy: <strong className="text-cyan-300">{strengthMetrics.entropy} bits</strong></span>
          </div>
        </div>

      </div>

      {/* 2. Controls & Configuration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Mode & Length Controls */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 className="font-bold text-white text-sm flex items-center gap-2">
              <Sliders className="w-4 h-4 text-cyan-400" />
              <span>Configuration</span>
            </h3>
            
            {/* Mode Toggle */}
            <div className="flex items-center bg-slate-950 p-0.5 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setMode('password')}
                className={`px-3 py-1 rounded-lg font-medium transition ${
                  mode === 'password' ? 'bg-cyan-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                Random
              </button>
              <button
                onClick={() => setMode('passphrase')}
                className={`px-3 py-1 rounded-lg font-medium transition ${
                  mode === 'passphrase' ? 'bg-cyan-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                Passphrase
              </button>
            </div>
          </div>

          {mode === 'password' ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-300 uppercase">
                  Password Length: <span className="text-cyan-400 text-sm font-mono font-bold">{length}</span> chars
                </label>
                <span className="text-[11px] text-slate-500 font-mono">6 - 64</span>
              </div>

              <input
                type="range"
                min={6}
                max={64}
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />

              <div className="flex justify-between text-[11px] font-mono text-slate-500">
                <span>8 chars</span>
                <span>16 chars (Rec)</span>
                <span>24 chars</span>
                <span>32+ chars</span>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-300 uppercase">
                  Number of Words: <span className="text-cyan-400 text-sm font-mono font-bold">{passphraseWords}</span>
                </label>
                <span className="text-[11px] text-slate-500 font-mono">3 - 8 Words</span>
              </div>

              <input
                type="range"
                min={3}
                max={8}
                value={passphraseWords}
                onChange={(e) => setPassphraseWords(Number(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />

              <p className="text-xs text-slate-400 leading-relaxed">
                Passphrases combine memorable dictionary words separated by hyphens (e.g. <em>Quantum-Horizon-Shield-Matrix</em>), making them easy to type while remaining virtually impossible to crack.
              </p>
            </div>
          )}
        </div>

        {/* Character Set Checkboxes */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h3 className="font-bold text-white text-sm pb-3 border-b border-slate-800 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Character Options</span>
          </h3>

          <div className="space-y-3 text-sm">
            <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 cursor-pointer hover:border-slate-700 transition">
              <span className="text-slate-300 font-medium">Uppercase Letters (A-Z)</span>
              <input
                type="checkbox"
                checked={includeUpper}
                onChange={(e) => setIncludeUpper(e.target.checked)}
                className="w-4 h-4 accent-cyan-400 rounded cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 cursor-pointer hover:border-slate-700 transition">
              <span className="text-slate-300 font-medium">Lowercase Letters (a-z)</span>
              <input
                type="checkbox"
                checked={includeLower}
                onChange={(e) => setIncludeLower(e.target.checked)}
                className="w-4 h-4 accent-cyan-400 rounded cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 cursor-pointer hover:border-slate-700 transition">
              <span className="text-slate-300 font-medium">Numbers (0-9)</span>
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                className="w-4 h-4 accent-cyan-400 rounded cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 cursor-pointer hover:border-slate-700 transition">
              <span className="text-slate-300 font-medium">Special Symbols (!@#$%^&*)</span>
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                className="w-4 h-4 accent-cyan-400 rounded cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 cursor-pointer hover:border-slate-700 transition">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-300 font-medium">Exclude Ambiguous (0, O, 1, l, I)</span>
              </div>
              <input
                type="checkbox"
                checked={excludeAmbiguous}
                onChange={(e) => setExcludeAmbiguous(e.target.checked)}
                className="w-4 h-4 accent-cyan-400 rounded cursor-pointer"
              />
            </label>
          </div>
        </div>

      </div>

      {/* 3. Security Recommendations Banner */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3 text-xs sm:text-sm text-slate-300">
        <div className="flex items-center gap-2 font-bold text-white">
          <Info className="w-4 h-4 text-cyan-400" />
          <span>AVRX Cyber Security Guidelines:</span>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc list-inside text-slate-400 text-xs leading-relaxed">
          <li>Never reuse the same password across multiple online accounts.</li>
          <li>Use a dedicated password manager (e.g. Bitwarden, 1Password, Apple Keychain).</li>
          <li>Always enable Two-Factor Authentication (2FA) with an authenticator app.</li>
          <li>16+ character passwords protect against advanced supercomputer hash cracking.</li>
        </ul>
      </div>

    </div>
  );
};

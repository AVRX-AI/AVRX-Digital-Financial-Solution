import React, { useState } from 'react';
import { ProjectItem } from '../../types/projectTypes';
import { 
  ChevronLeft, 
  ChevronRight, 
  Smartphone, 
  Wifi, 
  Battery, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  CreditCard, 
  TrendingUp, 
  Sparkles,
  Layers,
  Send,
  Eye,
  Plus,
  Zap,
  Activity,
  User,
  Sliders,
  DollarSign
} from 'lucide-react';

interface AppInteractivePreviewProps {
  project: ProjectItem;
  onOpenContact?: (projectName: string) => void;
}

export const AppInteractivePreview: React.FC<AppInteractivePreviewProps> = ({ 
  project,
  onOpenContact 
}) => {
  const screens = project.appScreens || [];
  const [activeScreenIndex, setActiveScreenIndex] = useState<number>(0);
  const [otpCode, setOtpCode] = useState<string>('8492');
  const [transferAmount, setTransferAmount] = useState<string>('5000');
  const [transferSuccess, setTransferSuccess] = useState<boolean>(false);
  const [walletBalance, setWalletBalance] = useState<number>(148250);
  const [is3DExpanded, setIs3DExpanded] = useState<boolean>(false);

  const currentScreen = screens[activeScreenIndex] || screens[0];

  const handleNextScreen = () => {
    setActiveScreenIndex((prev) => (prev + 1) % screens.length);
  };

  const handlePrevScreen = () => {
    setActiveScreenIndex((prev) => (prev - 1 + screens.length) % screens.length);
  };

  if (!screens.length) {
    return (
      <div className="p-12 text-center text-slate-400">
        <Sparkles className="w-8 h-8 text-cyan-400 mx-auto mb-2 animate-spin" />
        <p>Mobile interactive app simulator initializing...</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[680px] bg-[#02050e] text-slate-100 p-4 sm:p-8 flex flex-col items-center justify-between relative overflow-hidden">
      
      {/* Background Soft Glows & 3D Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-cyan-500/10 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-blue-600/10 blur-[80px] pointer-events-none" />

      {/* Top Controls & Screen Switcher Strip */}
      <div className="w-full max-w-2xl flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-black uppercase border border-cyan-500/30">
            {project.client} Native App
          </span>
          <span className="text-xs text-slate-400 font-mono">
            Screen {activeScreenIndex + 1} of {screens.length}
          </span>
        </div>

        {/* Screen Switcher Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
          {screens.map((screen, idx) => (
            <button
              key={screen.id}
              onClick={() => setActiveScreenIndex(idx)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                activeScreenIndex === idx
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black shadow-sm'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {screen.title}
            </button>
          ))}
        </div>
      </div>

      {/* Main 3D Perspective Phone Stage */}
      <div className="relative flex items-center justify-center py-4 my-auto">
        
        {/* Left Faded 3D Perspective Screen */}
        <div className="hidden lg:block absolute -left-48 w-64 h-[500px] rounded-[36px] bg-slate-950/70 border border-slate-800 p-3 scale-90 -rotate-12 opacity-35 blur-[1px] pointer-events-none transition-transform">
          <div className="w-full h-full rounded-[28px] bg-gradient-to-b from-slate-900 to-slate-950 p-4 flex flex-col justify-between">
            <div className="text-xs font-bold text-cyan-400">Transaction History</div>
            <div className="space-y-2">
              <div className="h-10 bg-slate-800/80 rounded-xl" />
              <div className="h-10 bg-slate-800/80 rounded-xl" />
              <div className="h-10 bg-slate-800/80 rounded-xl" />
            </div>
            <div className="h-8 bg-cyan-500/20 rounded-xl" />
          </div>
        </div>

        {/* Right Faded 3D Perspective Screen */}
        <div className="hidden lg:block absolute -right-48 w-64 h-[500px] rounded-[36px] bg-slate-950/70 border border-slate-800 p-3 scale-90 rotate-12 opacity-35 blur-[1px] pointer-events-none transition-transform">
          <div className="w-full h-full rounded-[28px] bg-gradient-to-b from-slate-900 to-slate-950 p-4 flex flex-col justify-between">
            <div className="text-xs font-bold text-cyan-400">Security & Biometrics</div>
            <div className="space-y-2">
              <div className="h-16 bg-slate-800/80 rounded-xl" />
              <div className="h-10 bg-slate-800/80 rounded-xl" />
            </div>
            <div className="h-8 bg-cyan-500/20 rounded-xl" />
          </div>
        </div>

        {/* Central Realistic Smartphone Chassis */}
        <div className="w-[310px] sm:w-[340px] h-[640px] rounded-[48px] bg-[#000000] border-4 border-slate-700/80 p-3 shadow-[0_25px_70px_rgba(0,0,0,0.95)] relative z-20 flex flex-col justify-between overflow-hidden">
          
          {/* Glass reflection streak */}
          <div className="absolute top-0 right-0 w-36 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none z-30" />

          {/* Inner Phone Screen */}
          <div className="w-full h-full rounded-[38px] bg-[#060b17] flex flex-col justify-between overflow-hidden relative border border-slate-800/60 select-none">
            
            {/* Top Status Bar & Dynamic Island */}
            <div className="pt-2 px-5 pb-1 flex items-center justify-between text-[11px] text-slate-300 relative z-30">
              <span className="font-semibold text-xs">9:41</span>
              {/* Dynamic Island Pill */}
              <div className="w-20 h-4 rounded-full bg-black border border-slate-800 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-cyan-500/50" />
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <Wifi className="w-3 h-3" />
                <Battery className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>

            {/* SCREEN CONTENT (DYNAMIC BASED ON ACTIVE SCREEN) */}
            <div className="p-4 flex-1 flex flex-col justify-between overflow-y-auto space-y-4">
              
              {/* 1. DASHBOARD SCREEN */}
              {currentScreen.id === 'screen-dashboard' && (
                <div className="space-y-4">
                  
                  {/* Top user profile bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 font-black text-xs">
                        AV
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400">Good morning</div>
                        <div className="text-xs font-black text-white">Aditya Verma</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                      KYC Verified ✓
                    </span>
                  </div>

                  {/* Virtual Card Widget */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 text-white shadow-lg space-y-4 relative overflow-hidden">
                    <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-wider">
                      <span>Apex Titanium Platinum</span>
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] opacity-80">Total Available Balance</div>
                      <div className="text-xl font-black font-mono">₹ {walletBalance.toLocaleString()}</div>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span>•••• •••• •••• 9081</span>
                      <span>EXP 08/29</span>
                    </div>
                  </div>

                  {/* Quick Action Grid */}
                  <div className="grid grid-cols-4 gap-2 text-center">
                    {[
                      { label: 'Send', icon: Send },
                      { label: 'Receive', icon: Plus },
                      { label: 'Bills', icon: Zap },
                      { label: 'Invest', icon: TrendingUp }
                    ].map((btn, idx) => {
                      const Icon = btn.icon;
                      return (
                        <button key={idx} className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center gap-1 hover:border-cyan-500 transition">
                          <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-[9px] font-bold text-slate-300">{btn.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Recent Transactions */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-[11px] font-bold text-slate-400">
                      <span>Recent Activity</span>
                      <span className="text-cyan-400 text-[10px] cursor-pointer">See All</span>
                    </div>
                    {[
                      { name: 'Apple Services Sub', time: 'Today, 2:15 PM', amt: '-₹999', isCredit: false },
                      { name: 'Consulting Payout', time: 'Yesterday', amt: '+₹45,000', isCredit: true }
                    ].map((tx, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-white">{tx.name}</div>
                          <div className="text-[9px] text-slate-500">{tx.time}</div>
                        </div>
                        <div className={`text-xs font-mono font-bold ${tx.isCredit ? 'text-emerald-400' : 'text-slate-300'}`}>
                          {tx.amt}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              )}

              {/* 2. KYC OTP SCREEN */}
              {currentScreen.id === 'screen-kyc' && (
                <div className="space-y-5 text-center my-auto">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white">Instant e-KYC Verification</h4>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Enter the 4-digit code sent to registered mobile (+91 98•••• 4120)
                    </p>
                  </div>

                  <div className="flex justify-center gap-2">
                    {['8', '4', '9', '2'].map((digit, idx) => (
                      <div key={idx} className="w-10 h-12 rounded-xl bg-slate-900 border border-cyan-500/60 flex items-center justify-center text-base font-black text-cyan-400 font-mono shadow-sm">
                        {digit}
                      </div>
                    ))}
                  </div>

                  <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 text-[10px] font-bold flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Aadhaar & PAN Auto-Verified</span>
                  </div>

                  <button
                    onClick={() => setActiveScreenIndex(0)}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black text-xs hover:brightness-110 shadow-sm"
                  >
                    Proceed to Dashboard
                  </button>
                </div>
              )}

              {/* 3. WALLET / TRANSFER SCREEN */}
              {currentScreen.id === 'screen-wallet' && (
                <div className="space-y-4">
                  <div className="text-center space-y-1">
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Quick Wire Transfer</div>
                    <h4 className="text-sm font-black text-white">Send Funds Instantly</h4>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <label className="text-[10px] text-slate-400 font-bold block">Enter Transfer Amount (₹)</label>
                    <input
                      type="number"
                      value={transferAmount}
                      onChange={(e) => setTransferAmount(e.target.value)}
                      className="w-full p-2 rounded-lg bg-slate-950 border border-slate-800 text-sm font-mono text-cyan-400 font-bold focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <button
                    onClick={() => {
                      setTransferSuccess(true);
                      setWalletBalance(prev => prev - Number(transferAmount));
                      setTimeout(() => setTransferSuccess(false), 3000);
                    }}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black text-xs hover:brightness-110 shadow-sm transition"
                  >
                    {transferSuccess ? 'Transfer Successful ✓ (IMPS)' : `Send ₹${transferAmount} Now`}
                  </button>
                </div>
              )}

              {/* FALLBACK FOR OTHER SCREENS */}
              {!['screen-dashboard', 'screen-kyc', 'screen-wallet'].includes(currentScreen.id) && (
                <div className="space-y-4 text-center my-auto">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white">{currentScreen.title}</h4>
                    <p className="text-[11px] text-slate-400 mt-1">{currentScreen.description}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-left space-y-1.5">
                    {currentScreen.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[10px] text-slate-300">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Home Indicator Bar */}
            <div className="pb-2 pt-1 flex justify-center">
              <div className="w-28 h-1 rounded-full bg-slate-600" />
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Screen Navigation Controls */}
      <div className="w-full max-w-sm flex items-center justify-between gap-3 mt-4 relative z-10">
        <button
          onClick={handlePrevScreen}
          className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1.5 transition"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Prev Screen</span>
        </button>

        <button
          onClick={() => onOpenContact ? onOpenContact(project.title) : null}
          className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-black text-xs hover:brightness-110 shadow-sm transition"
        >
          Request Custom App
        </button>

        <button
          onClick={handleNextScreen}
          className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1.5 transition"
        >
          <span>Next Screen</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};

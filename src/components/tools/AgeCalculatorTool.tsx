import React, { useState, useMemo, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Gift, 
  Sparkles, 
  Compass, 
  ArrowRight, 
  Cake, 
  RefreshCw,
  Heart,
  Timer
} from 'lucide-react';

export const AgeCalculatorTool: React.FC = () => {
  const [birthDate, setBirthDate] = useState<string>('1998-08-15');
  const [targetDate, setTargetDate] = useState<string>(() => {
    return new Date().toISOString().split('T')[0];
  });
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  // Real-time ticking seconds clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const ageData = useMemo(() => {
    if (!birthDate) return null;

    const bDate = new Date(birthDate + 'T00:00:00');
    const tDate = targetDate ? new Date(targetDate + 'T00:00:00') : new Date();

    if (isNaN(bDate.getTime()) || isNaN(tDate.getTime()) || bDate > tDate) {
      return null;
    }

    // Exact years, months, days calculation
    let years = tDate.getFullYear() - bDate.getFullYear();
    let months = tDate.getMonth() - bDate.getMonth();
    let days = tDate.getDate() - bDate.getDate();

    if (days < 0) {
      months -= 1;
      // Get days in previous month
      const prevMonth = new Date(tDate.getFullYear(), tDate.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    // Total units lived
    const diffMs = tDate.getTime() - bDate.getTime();
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const remainingDaysInWeek = totalDays % 7;
    const totalHours = totalDays * 24;
    const totalMinutes = totalHours * 60;
    const totalSeconds = totalMinutes * 60;

    // Next Birthday calculation
    const currentYear = tDate.getFullYear();
    let nextBday = new Date(currentYear, bDate.getMonth(), bDate.getDate());
    if (nextBday < tDate) {
      nextBday = new Date(currentYear + 1, bDate.getMonth(), bDate.getDate());
    }

    const bdayDiffMs = nextBday.getTime() - tDate.getTime();
    const daysUntilNextBday = Math.ceil(bdayDiffMs / (1000 * 60 * 60 * 24));
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const nextBdayDayOfWeek = dayNames[nextBday.getDay()];

    // Western Zodiac Sign calculation
    const month = bDate.getMonth() + 1;
    const day = bDate.getDate();
    let zodiac = 'Aries';
    let zodiacElement = 'Fire';
    let zodiacSymbol = '♈';

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      zodiac = 'Aries'; zodiacElement = 'Fire'; zodiacSymbol = '♈';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      zodiac = 'Taurus'; zodiacElement = 'Earth'; zodiacSymbol = '♉';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      zodiac = 'Gemini'; zodiacElement = 'Air'; zodiacSymbol = '♊';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      zodiac = 'Cancer'; zodiacElement = 'Water'; zodiacSymbol = '♋';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      zodiac = 'Leo'; zodiacElement = 'Fire'; zodiacSymbol = '♌';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      zodiac = 'Virgo'; zodiacElement = 'Earth'; zodiacSymbol = '♍';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      zodiac = 'Libra'; zodiacElement = 'Air'; zodiacSymbol = '♎';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      zodiac = 'Scorpio'; zodiacElement = 'Water'; zodiacSymbol = '♏';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      zodiac = 'Sagittarius'; zodiacElement = 'Fire'; zodiacSymbol = '♐';
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      zodiac = 'Capricorn'; zodiacElement = 'Earth'; zodiacSymbol = '♑';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      zodiac = 'Aquarius'; zodiacElement = 'Air'; zodiacSymbol = '♒';
    } else {
      zodiac = 'Pisces'; zodiacElement = 'Water'; zodiacSymbol = '♓';
    }

    return {
      years,
      months,
      days,
      totalDays,
      totalWeeks,
      remainingDaysInWeek,
      totalHours,
      totalMinutes,
      totalSeconds,
      daysUntilNextBday,
      nextBdayDayOfWeek,
      nextBdayFormatted: nextBday.toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' }),
      zodiac,
      zodiacElement,
      zodiacSymbol
    };
  }, [birthDate, targetDate]);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      {/* 1. Date Input Section */}
      <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-inner">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>Date of Birth</span>
            </label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700/80 rounded-2xl p-4 text-base font-semibold text-white focus:outline-none focus:border-cyan-400 transition"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Calculate Age As Of</span>
              </label>
              <button
                type="button"
                onClick={() => setTargetDate(new Date().toISOString().split('T')[0])}
                className="text-[11px] text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                Today
              </button>
            </div>
            <input
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700/80 rounded-2xl p-4 text-base font-semibold text-white focus:outline-none focus:border-cyan-400 transition"
            />
          </div>

        </div>
      </div>

      {/* 2. Results Dashboard */}
      {ageData ? (
        <div className="space-y-6 animate-in fade-in duration-300">
          
          {/* Main Big Age Banner */}
          <div className="bg-gradient-to-r from-blue-950/60 via-slate-900 to-cyan-950/60 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-2xl relative overflow-hidden">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono">
              Exact Biological Age
            </span>
            
            <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="text-3xl sm:text-5xl font-black text-white">{ageData.years}</div>
                <div className="text-xs text-slate-400 font-medium mt-1 uppercase">Years</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="text-3xl sm:text-5xl font-black text-cyan-300">{ageData.months}</div>
                <div className="text-xs text-slate-400 font-medium mt-1 uppercase">Months</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="text-3xl sm:text-5xl font-black text-emerald-300">{ageData.days}</div>
                <div className="text-xs text-slate-400 font-medium mt-1 uppercase">Days</div>
              </div>
            </div>

            <p className="text-sm text-slate-300 font-medium">
              You are <strong className="text-white">{ageData.years} years, {ageData.months} months, and {ageData.days} days</strong> old.
            </p>
          </div>

          {/* Next Birthday & Zodiac Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Next Birthday Card */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 font-bold text-white text-sm">
                  <Gift className="w-4 h-4 text-rose-400" />
                  <span>Next Birthday Countdown</span>
                </div>
                <span className="text-xs font-mono font-bold text-rose-400">
                  {ageData.nextBdayDayOfWeek}
                </span>
              </div>

              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-3xl font-black text-white">
                    {ageData.daysUntilNextBday} <span className="text-sm font-normal text-slate-400">days left</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Turning {ageData.years + 1} on {ageData.nextBdayFormatted}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  <Cake className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Zodiac Sign Card */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 font-bold text-white text-sm">
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>Zodiac &amp; Astrological Sign</span>
                </div>
                <span className="text-xs font-mono font-bold text-amber-400">
                  {ageData.zodiacElement} Element
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-black text-white flex items-center gap-2">
                    <span className="text-3xl text-amber-400">{ageData.zodiacSymbol}</span>
                    <span>{ageData.zodiac}</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Element: <strong className="text-slate-200">{ageData.zodiacElement}</strong>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Sparkles className="w-6 h-6" />
                </div>
              </div>
            </div>

          </div>

          {/* Alternative Units Lived Table */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h3 className="font-bold text-white text-sm pb-3 border-b border-slate-800 flex items-center gap-2">
              <Timer className="w-4 h-4 text-cyan-400" />
              <span>Total Lifetime Units Lived</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-lg sm:text-xl font-bold text-white">{ageData.totalDays.toLocaleString()}</div>
                <div className="text-[11px] text-slate-400 uppercase mt-0.5">Total Days</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-lg sm:text-xl font-bold text-cyan-300">{ageData.totalWeeks.toLocaleString()} wks</div>
                <div className="text-[11px] text-slate-400 uppercase mt-0.5">Total Weeks</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-lg sm:text-xl font-bold text-emerald-300">{ageData.totalHours.toLocaleString()}</div>
                <div className="text-[11px] text-slate-400 uppercase mt-0.5">Total Hours</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-lg sm:text-xl font-bold text-purple-300">{ageData.totalMinutes.toLocaleString()}</div>
                <div className="text-[11px] text-slate-400 uppercase mt-0.5">Total Minutes</div>
              </div>
            </div>
          </div>

        </div>
      ) : (
        <div className="p-8 text-center text-slate-400 bg-slate-900/40 rounded-2xl border border-slate-800">
          Please select a valid date of birth.
        </div>
      )}

    </div>
  );
};

import React from 'react';
import { motion } from 'motion/react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 bg-[#050811] flex flex-col items-center justify-center text-white select-none">
      <div className="relative flex items-center justify-center">
        {/* Outer glowing orbital rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-cyan-500/30 border-t-cyan-400 border-r-blue-500 shadow-[0_0_30px_rgba(0,240,255,0.2)]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-purple-500/30 border-b-purple-400 border-l-cyan-400"
        />

        {/* Center AVRX Brand Core */}
        <div className="absolute text-center">
          <span className="text-xl sm:text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
            AVRX
          </span>
        </div>
      </div>

      <motion.p
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="mt-6 text-sm font-medium tracking-wider text-cyan-300/80"
      >
        Initializing AVRX AI Platform...
      </motion.p>
    </div>
  );
};

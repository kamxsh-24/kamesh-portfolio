import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Reveal after stroke animation completes
    const timer = setTimeout(() => {
      setVisible(false);
      if (onComplete) onComplete();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          {/* Subtle Ambient Gold Radial Glow */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-[#D4AF37]/10 blur-[120px] pointer-events-none" />

          <div className="relative flex flex-col items-center">
            {/* SVG Monogram with Stroke Drawing Animation */}
            <div className="relative w-32 h-32 md:w-36 md:h-36 flex items-center justify-center">
              {/* Outer Golden Crest / Octagon / Circle */}
              <svg className="w-full h-full" viewBox="0 0 120 120">
                <defs>
                  <linearGradient id="preloaderGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#B8860B" />
                    <stop offset="50%" stopColor="#F5D77A" />
                    <stop offset="100%" stopColor="#D4AF37" />
                  </linearGradient>
                </defs>

                {/* Outer Ring */}
                <motion.circle
                  cx="60"
                  cy="60"
                  r="52"
                  fill="none"
                  stroke="url(#preloaderGold)"
                  strokeWidth="1.5"
                  strokeDasharray="327"
                  initial={{ strokeDashoffset: 327, rotate: -90 }}
                  animate={{ strokeDashoffset: 0, rotate: 270 }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />

                {/* Inner Accent Ring */}
                <motion.circle
                  cx="60"
                  cy="60"
                  r="45"
                  fill="none"
                  stroke="#F5D77A"
                  strokeWidth="0.8"
                  strokeDasharray="4,4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.6, scale: 1 }}
                  transition={{ delay: 0.4, duration: 1 }}
                />

                {/* K Monogram Stroke Drawing */}
                {/* Vertical stem of K */}
                <motion.path
                  d="M 46 36 L 46 84"
                  fill="none"
                  stroke="url(#preloaderGold)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, delay: 0.3, ease: "easeInOut" }}
                />

                {/* Upper arm of K */}
                <motion.path
                  d="M 46 62 L 74 36"
                  fill="none"
                  stroke="url(#preloaderGold)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
                />

                {/* Lower leg of K */}
                <motion.path
                  d="M 58 51 L 76 84"
                  fill="none"
                  stroke="url(#preloaderGold)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: "easeInOut" }}
                />
              </svg>
            </div>

            {/* Elegant Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mt-6 flex flex-col items-center gap-1.5"
            >
              <span className="font-serif text-2xl tracking-[0.25em] text-[#FFF1B8] font-medium">
                KAMESH J
              </span>
              <span className="text-[10px] tracking-[0.35em] uppercase text-gold-400/80 font-mono">
                Full Stack &middot; QA Automation
              </span>
            </motion.div>

            {/* Shimmer loading bar */}
            <motion.div
              className="w-40 h-[2px] bg-[#222] mt-6 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#B8860B] via-[#F5D77A] to-[#D4AF37]"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

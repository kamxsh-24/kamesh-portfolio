import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-50 pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-[#B8860B] via-[#F5D77A] to-[#D4AF37] origin-left shadow-[0_0_12px_rgba(212,175,55,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
}

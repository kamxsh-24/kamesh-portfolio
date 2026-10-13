import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * ProfilePhoto Component
 * Displays a rectangular portrait photo with no border, no circle, no ring and no frame (0-6px corner radius).
 * - Masked with a bottom fade into the background (mask-image: linear-gradient(to top, transparent 0%, black 30%))
 * - Radial golden glow behind head and shoulders with 6-8s breathing animation (scale & opacity)
 * - Fade & slide-in from right entrance animation
 * - Subtle desktop mouse parallax (disabled on touch devices & reduced motion)
 * - Resilient onError fallback: dark rectangle with gold "K" monogram
 */
export default function ProfilePhoto({
  variant = 'hero', // 'hero' | 'about'
  className = '',
}) {
  const [imgSrc, setImgSrc] = useState('/profile.png');
  const [hasError, setHasError] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [canParallax, setCanParallax] = useState(false);

  const isHero = variant === 'hero';

  // Desktop-only subtle parallax (disabled on touch & prefers-reduced-motion)
  useEffect(() => {
    if (!isHero) return;
    if (typeof window === 'undefined') return;

    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) return;

    setCanParallax(true);

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = ((e.clientX / innerWidth) - 0.5) * 14; // max +/- 7px
      const y = ((e.clientY / innerHeight) - 0.5) * 14; // max +/- 7px
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHero]);

  // Fallback cascade: /profile.png -> /public/profile.png -> /profile.jpg -> monogram fallback
  const handleError = () => {
    if (imgSrc === '/profile.png') {
      setImgSrc('/public/profile.png');
    } else if (imgSrc === '/public/profile.png') {
      setImgSrc('/profile.jpg');
    } else {
      setHasError(true);
    }
  };

  // Bottom fade CSS mask
  const maskStyle = {
    maskImage: 'linear-gradient(to top, transparent 0%, black 30%)',
    WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 30%)',
  };

  return (
    <motion.div
      initial={isHero ? { opacity: 0, x: 40 } : { opacity: 0, y: 15 }}
      animate={isHero ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative select-none ${className}`}
      style={
        canParallax
          ? {
              transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
              transition: 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
            }
          : undefined
      }
    >
      {/* Golden glow behind head and shoulders with slow 6-8s breathing animation */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.85, 1, 0.85],
        }}
        transition={{
          duration: 7, // 7s loop
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        {/* Layer 1: Large primary radial golden glow (rgba(212,175,55,0.55) fading to transparent at ~70%) */}
        <div
          className={`absolute rounded-full pointer-events-none ${
            isHero
              ? 'w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] -top-6 blur-[60px]'
              : 'w-[140px] h-[140px] -top-2 blur-[35px]'
          }`}
          style={{
            background:
              'radial-gradient(circle, rgba(212, 175, 55, 0.55) 0%, rgba(212, 175, 55, 0.25) 40%, transparent 70%)',
          }}
        />

        {/* Layer 2: Smaller, lighter second layer for depth */}
        <div
          className={`absolute rounded-full pointer-events-none ${
            isHero
              ? 'w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] lg:w-[240px] lg:h-[240px] top-2 blur-[45px]'
              : 'w-[80px] h-[80px] top-1 blur-[25px]'
          }`}
          style={{
            background:
              'radial-gradient(circle, rgba(255, 241, 184, 0.65) 0%, rgba(245, 215, 122, 0.35) 35%, transparent 65%)',
          }}
        />
      </motion.div>

      {/* Portrait Photo Container */}
      <div
        className={`relative z-10 flex items-end justify-center ${
          isHero
            ? 'w-[220px] sm:w-[260px] md:w-[300px] lg:w-[380px] xl:w-[420px]'
            : 'w-24 sm:w-28'
        }`}
      >
        {!hasError ? (
          <img
            src={imgSrc}
            alt="Kamesh J"
            loading="eager"
            onError={handleError}
            style={maskStyle}
            className={`w-full h-auto object-contain rounded-[6px] select-none block pointer-events-none ${
              isHero
                ? 'max-h-[380px] sm:max-h-[440px] md:max-h-[480px] lg:max-h-[540px] xl:max-h-[580px]'
                : 'max-h-[160px]'
            }`}
          />
        ) : (
          /* Graceful Fallback: Dark rectangle with gold "K" monogram */
          <div
            style={maskStyle}
            className={`w-full aspect-[3/4] rounded-[6px] bg-gradient-to-br from-[#1E1C15] via-[#12110D] to-[#080808] flex flex-col items-center justify-center select-none ${
              isHero ? 'max-h-[480px] py-16' : 'max-h-[160px] py-4'
            }`}
          >
            <span
              className={`font-serif font-bold text-gold-metallic select-none ${
                isHero ? 'text-5xl sm:text-6xl' : 'text-2xl'
              }`}
            >
              K
            </span>
            <span
              className={`font-mono tracking-widest uppercase text-gold-400/80 mt-2 ${
                isHero ? 'text-[11px]' : 'text-[9px]'
              }`}
            >
              Kamesh J
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}


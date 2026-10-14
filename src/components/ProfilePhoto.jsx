import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * ProfilePhoto Component
 * Displays a transparent-background cutout of Kamesh J with:
 * - Fully transparent container (no borders, no cards, no outlines, no box-shadows, no rounded borders)
 * - <picture> loading WebP with PNG fallback (900x1004, object-fit: contain, object-position: bottom center)
 * - Soft gold rim light on silhouette (filter: drop-shadow(0 0 24px rgba(212,175,55,0.35)))
 * - Dual-layer radial golden glow behind head and shoulders with slow 6-8s breathing animation
 * - Smooth bottom fade mask (linear-gradient(to top, transparent 0%, black 25%))
 * - Desktop subtle parallax (disabled on touch & prefers-reduced-motion)
 * - Resilient onError fallback (dark rectangle with gold "K" monogram)
 */
export default function ProfilePhoto({
  variant = 'hero', // 'hero' | 'about'
  className = '',
}) {
  const [hasError, setHasError] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [canParallax, setCanParallax] = useState(false);

  const isHero = variant === 'hero';

  // Desktop-only subtle parallax (disabled on touch devices & prefers-reduced-motion)
  useEffect(() => {
    if (!isHero) return;
    if (typeof window === 'undefined') return;

    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) return;

    setCanParallax(true);

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = ((e.clientX / innerWidth) - 0.5) * 14; // subtle +/- 7px
      const y = ((e.clientY / innerHeight) - 0.5) * 14; // subtle +/- 7px
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHero]);

  // Bottom fade CSS mask: jacket smoothly fades into black background
  const maskStyle = {
    maskImage: 'linear-gradient(to top, transparent 0%, black 25%)',
    WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 25%)',
  };

  return (
    <motion.div
      initial={isHero ? { opacity: 0, x: 40 } : { opacity: 0, y: 15 }}
      animate={isHero ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative select-none bg-transparent ${className}`}
      style={
        canParallax
          ? {
              transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
              transition: 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
            }
          : undefined
      }
    >
      {/* Golden glow behind the cutout (z-index below photo) with slow 6-8s breathing animation */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.85, 1, 0.85],
        }}
        transition={{
          duration: 7, // 7s loop (within 6-8s)
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        aria-hidden="true"
      >
        {/* Layer 1: Large radial golden glow centered behind head and shoulders
            from rgba(212,175,55,0.55) to transparent at about 70%, blurred 40-80px */}
        <div
          className={`absolute rounded-full pointer-events-none ${
            isHero
              ? 'w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] -top-2 lg:top-4 blur-[60px]'
              : 'w-[140px] h-[140px] -top-2 blur-[32px]'
          }`}
          style={{
            background:
              'radial-gradient(circle, rgba(212, 175, 55, 0.55) 0%, rgba(212, 175, 55, 0.25) 42%, transparent 70%)',
          }}
        />

        {/* Layer 2: Second, smaller, lighter halo layer directly behind the head
            (#F5D77A at about 30-35% opacity) */}
        <div
          className={`absolute rounded-full pointer-events-none ${
            isHero
              ? 'w-[170px] h-[170px] sm:w-[210px] sm:h-[210px] lg:w-[250px] lg:h-[250px] top-6 lg:top-12 blur-[42px]'
              : 'w-[80px] h-[80px] top-1 blur-[20px]'
          }`}
          style={{
            background:
              'radial-gradient(circle, rgba(245, 215, 122, 0.35) 0%, rgba(245, 215, 122, 0.15) 38%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Photo Cutout Container (Fully transparent, no border, no outline, no box-shadow, no rectangle) */}
      <div
        className={`relative z-10 flex items-end justify-center bg-transparent ${
          isHero
            ? 'w-[240px] sm:w-[290px] md:w-[330px] lg:w-[400px] xl:w-[460px]'
            : 'w-24 sm:w-28'
        }`}
      >
        {!hasError ? (
          <picture className="w-full h-auto flex items-end justify-center bg-transparent">
            {/* WebP source with PNG fallback */}
            <source srcSet="/profile.webp" type="image/webp" />
            <img
              src="/profile.png"
              alt="Kamesh J"
              width="900"
              height="1004"
              loading="eager"
              fetchPriority="high"
              onError={() => setHasError(true)}
              style={{
                ...maskStyle,
                filter: 'drop-shadow(0 0 24px rgba(212,175,55,0.35))',
                objectPosition: 'bottom center',
              }}
              className={`w-full h-auto object-contain select-none block pointer-events-none bg-transparent ${
                isHero
                  ? 'max-h-[380px] sm:max-h-[440px] md:max-h-[490px] lg:max-h-[550px] xl:max-h-[600px]'
                  : 'max-h-[160px]'
              }`}
            />
          </picture>
        ) : (
          /* Graceful Fallback: Dark rectangle with gold "K" monogram if files missing */
          <div
            style={maskStyle}
            className={`w-full aspect-[900/1004] rounded-[6px] bg-gradient-to-br from-[#1E1C15] via-[#12110D] to-[#080808] flex flex-col items-center justify-center select-none ${
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

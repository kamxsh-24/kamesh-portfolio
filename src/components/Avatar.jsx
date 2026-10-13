import React, { useState } from 'react';
import { Camera, User } from 'lucide-react';

/**
 * Avatar Component
 * NOTE: Replace /public/profile.jpg with your photo (square, at least 600x600).
 * If the image is not found or fails to load, this component gracefully falls back
 * to a premium dark circle with a gold "K" monogram and camera/user icon.
 */
export default function Avatar({
  size = "md", // "sm" | "md" | "lg"
  className = "",
  showGlow = true
}) {
  const [imageError, setImageError] = useState(false);

  // Size mapping
  const sizeMap = {
    sm: "w-24 h-24 sm:w-28 sm:h-28",
    md: "w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44",
    lg: "w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64"
  };

  const ringPadding = {
    sm: "p-1",
    md: "p-1.5",
    lg: "p-2"
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Soft Ambient Golden Glow */}
      {showGlow && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gold-600/30 via-gold-400/20 to-transparent blur-xl scale-110 pointer-events-none" />
      )}

      {/* Floating Wrapper */}
      <div className="relative animate-float-subtle">
        {/* Rotating & Shimmering Gold Gradient Ring */}
        <div className="absolute -inset-[3px] rounded-full bg-gradient-to-r from-[#B8860B] via-[#FFF1B8] to-[#D4AF37] opacity-90 animate-spin-slow blur-[1px]" />
        
        {/* Inner Border Ring */}
        <div className={`relative rounded-full bg-[#0D0D0E] ${ringPadding[size] || ringPadding.md} shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.25)]`}>
          <div
            className={`relative rounded-full overflow-hidden bg-gradient-to-br from-[#1A1813] to-[#0A0A0A] border border-gold-500/30 flex items-center justify-center ${sizeMap[size] || sizeMap.md}`}
          >
            {!imageError ? (
              <img
                src="/profile.jpg"
                alt="Kamesh J"
                loading="lazy"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover select-none"
              />
            ) : (
              /* Premium Fallback Placeholder */
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1E1C15] via-[#12110D] to-[#080808] relative group">
                <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gold-metallic select-none">
                  K
                </span>
                <div className="absolute bottom-2 sm:bottom-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-dark-950/80 border border-gold-500/30 text-gold-400">
                  <Camera className="w-3 h-3 text-gold-400" />
                  <span className="text-[9px] font-mono tracking-wider uppercase text-gold-300">Photo</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


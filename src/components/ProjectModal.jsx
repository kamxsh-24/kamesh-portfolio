import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#000000]/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl my-8 z-10 glass-card rounded-2xl p-6 sm:p-8 border border-gold-500/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(212,175,55,0.15)] text-left"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-dark-800/80 text-[#A3A3A3] hover:text-[#FFF1B8] hover:bg-gold-500/20 border border-gold-500/20 transition-all"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="pr-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-gold-500/10 border border-gold-500/30 text-gold-300 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping" />
                {project.category} &bull; {project.badge}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFF1B8] tracking-wide">
                {project.title}
              </h3>
              <p className="text-sm font-mono text-gold-400/90 mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Description */}
            <div className="mt-6 pt-5 border-t border-gold-500/15">
              <p className="text-[#D1D5DB] text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Deliverables & Engineering Details */}
            {project.keyFeatures && (
              <div className="mt-6">
                <h4 className="text-xs uppercase font-mono tracking-widest text-gold-400 font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                  Key Implementations &amp; Workflows
                </h4>
                <ul className="space-y-2.5">
                  {project.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CCCCCC]">
                      <span className="text-gold-400 mt-0.5">✦</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Chips */}
            <div className="mt-6 pt-5 border-t border-gold-500/15">
              <h4 className="text-xs uppercase font-mono tracking-widest text-gold-400 font-semibold mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-gold-400" />
                Technologies &amp; Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-dark-900 border border-gold-500/20 text-[#E5E5E5] hover:border-gold-400 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal CTAs */}
            <div className="mt-8 pt-5 border-t border-gold-500/20 flex flex-wrap items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#B8860B] via-[#F5D77A] to-[#D4AF37] text-dark-950 shadow-gold-sm hover:shadow-gold-glow transition-all hover:scale-[1.02]"
                >
                  <ExternalLink className="w-4 h-4" />
                  Launch Live System
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-dark-850 hover:bg-dark-800 border border-gold-500/30 text-[#FFF1B8] transition-all hover:border-gold-400"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repository
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

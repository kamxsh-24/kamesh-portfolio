import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award, CheckCircle } from 'lucide-react';

export default function CertificateLightbox({ cert, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (cert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cert, onClose]);

  return (
    <AnimatePresence>
      {cert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#000000]/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl my-4 z-10 glass-card rounded-2xl p-4 sm:p-6 border border-gold-500/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.2)] text-left"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-dark-800/80 text-[#A3A3A3] hover:text-[#FFF1B8] hover:bg-gold-500/20 border border-gold-500/20 transition-all z-20"
              aria-label="Close certificate lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Certificate Visual Preview */}
            <div className="relative rounded-xl overflow-hidden border border-gold-500/20 bg-dark-950 flex items-center justify-center shadow-inner">
              <img
                src={cert.previewImage}
                alt={`${cert.title} Certificate`}
                className="w-full h-auto max-h-[65vh] object-contain"
                loading="eager"
              />
            </div>

            {/* Details Footer */}
            <div className="mt-5 pt-4 border-t border-gold-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-gold-400" />
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#FFF1B8]">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">
                  Issued by <span className="text-gold-300 font-medium">{cert.issuer}</span> &bull; {cert.date}
                </p>
              </div>

              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-[#B8860B] via-[#F5D77A] to-[#D4AF37] text-dark-950 shadow-gold-sm hover:shadow-gold-glow transition-all"
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  Verify on Official Portal
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

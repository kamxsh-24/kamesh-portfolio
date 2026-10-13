import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Eye } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import CertificateLightbox from '../components/CertificateLightbox';

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#080808]/50">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-gold-500/10 border border-gold-500/25 text-gold-300 mb-3">
            <Award className="w-3.5 h-3.5 text-gold-400" />
            <span>CREDENTIALS &amp; RIGOR</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFF1B8] tracking-tight">
            Certifications
          </h2>
          <p className="text-xs sm:text-sm text-[#A3A3A3] mt-3 font-mono">
            Click certificates to open high-resolution previews &amp; credential records
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* Certifications Grid (Clean 3-item layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => setActiveCert(cert)}
              className="group cursor-pointer glass-card rounded-2xl p-6 border border-gold-500/20 hover:border-gold-400/50 shadow-gold-card flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
            >
              {/* Gold Top Light */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-gold-500/10 blur-[40px] pointer-events-none group-hover:scale-125 transition-transform" />

              <div>
                {/* Badge Icon */}
                <div className="w-12 h-12 rounded-xl bg-dark-900 border border-gold-500/30 flex items-center justify-center mb-5 group-hover:border-gold-300 group-hover:scale-105 transition-all">
                  <Award className="w-6 h-6 text-gold-400" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#FFF1B8] group-hover:text-gold-200 transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs font-mono font-medium text-gold-400 mt-1">
                  {cert.issuer}
                </p>

                {/* Date */}
                <p className="text-[11px] font-mono text-[#888888] mt-1 mb-4">
                  {cert.date}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.slice(0, 3).map((sk, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-dark-950 border border-gold-500/15 text-[#CCCCCC]"
                    >
                      {sk}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono text-gold-400/80">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-gold-500/15 flex items-center justify-between text-xs font-mono text-gold-300">
                <span className="flex items-center gap-1.5 group-hover:text-[#FFF1B8] transition-colors">
                  <Eye className="w-3.5 h-3.5 text-gold-400" />
                  View Preview
                </span>

                {cert.verifyUrl && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(cert.verifyUrl, '_blank');
                    }}
                    className="text-[11px] text-[#38BDF8] hover:underline flex items-center gap-1"
                  >
                    Verify <ExternalLink className="w-3 h-3" />
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Preview */}
      <CertificateLightbox
        cert={activeCert}
        onClose={() => setActiveCert(null)}
      />
    </section>
  );
}

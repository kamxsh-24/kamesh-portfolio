import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Calendar, MapPin, CheckCircle2, Eye, Trophy } from 'lucide-react';
import { experienceData, certificationsData } from '../data/portfolioData';
import CertificateLightbox from '../components/CertificateLightbox';

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState(null);

  const openCertificate = (certKey) => {
    const cert = certificationsData.find(c => c.id === certKey);
    if (cert) setSelectedCert(cert);
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#080808]/40">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-gold-500/10 border border-gold-500/25 text-gold-300 mb-3">
            <Briefcase className="w-3.5 h-3.5 text-gold-400" />
            <span>TRACK RECORD &amp; HONORS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFF1B8] tracking-tight">
            Experience &amp; Achievements
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-gold-500/25 shadow-gold-card relative flex flex-col justify-between"
            >
              <div>
                {/* Type Badge & Date */}
                <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-gold-500/15 border border-gold-400/30 text-gold-300 flex items-center gap-1.5">
                    {exp.type.includes('Hackathon') ? (
                      <Trophy className="w-3.5 h-3.5 text-gold-400" />
                    ) : (
                      <Briefcase className="w-3.5 h-3.5 text-gold-400" />
                    )}
                    {exp.type}
                  </span>
                  <span className="text-xs font-mono text-[#A3A3A3] flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-gold-500/80" />
                    {exp.period}
                  </span>
                </div>

                {/* Role & Company */}
                <h3 className="font-serif text-2xl font-bold text-[#FFF1B8]">
                  {exp.role}
                </h3>
                <h4 className="text-sm font-semibold text-gold-400 font-mono mt-0.5">
                  {exp.company}
                </h4>

                {/* Badge Note */}
                <p className="text-[11px] font-mono text-gold-500/80 mt-2 bg-dark-900/60 p-2 rounded-lg border border-gold-500/15">
                  ✦ {exp.badge}
                </p>

                {/* Description */}
                <p className="text-[#CCCCCC] text-sm leading-relaxed mt-4">
                  {exp.description}
                </p>

                {/* Bullet points */}
                <div className="mt-5 space-y-2">
                  {exp.keyPoints.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A3A3A3]">
                      <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificate Lightbox Trigger (if available) */}
              {exp.certificateKey && (
                <div className="mt-6 pt-5 border-t border-gold-500/15">
                  <button
                    onClick={() => openCertificate(exp.certificateKey)}
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-gold-300 hover:text-[#FFF1B8] transition-colors"
                  >
                    <Eye className="w-4 h-4 text-gold-400" />
                    <span>View Official Cognifyz Certificate Preview</span>
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateLightbox
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}

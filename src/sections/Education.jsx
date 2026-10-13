import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-gold-500/10 border border-gold-500/25 text-gold-300 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-gold-400" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFF1B8] tracking-tight">
            Education
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-gold-500/30 ml-4 sm:ml-32 md:ml-40 space-y-12">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Timeline Gold Node Dot */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-dark-950 border-2 border-gold-400 flex items-center justify-center shadow-gold-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#B8860B] to-[#F5D77A] animate-pulse" />
              </div>

              {/* Timestamp label on left for larger displays */}
              <div className="hidden sm:block absolute -left-36 top-2 text-right w-24">
                <span className="text-xs font-mono font-bold text-gold-300 block">
                  {edu.period}
                </span>
                <span className="text-[10px] font-mono text-[#8C8C8C]">
                  {edu.status}
                </span>
              </div>

              {/* Education Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-7 border border-gold-500/20 hover:border-gold-500/40 shadow-gold-card transition-all">
                <div className="sm:hidden mb-2">
                  <span className="text-xs font-mono font-bold text-gold-300">
                    {edu.period} ({edu.status})
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FFF1B8]">
                    {edu.degree}
                  </h3>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-bold bg-gold-500/15 border border-gold-400/35 text-gold-300 w-fit">
                    <Award className="w-3.5 h-3.5" />
                    {edu.score}
                  </span>
                </div>

                <h4 className="text-sm font-semibold text-gold-400/90 font-mono mb-2">
                  {edu.institution}
                </h4>

                <p className="text-xs font-mono text-[#888888] flex items-center gap-1.5 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-gold-500/70" />
                  {edu.location}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 pt-3 border-t border-gold-500/15">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#CCCCCC]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

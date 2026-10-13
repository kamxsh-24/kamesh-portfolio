import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, MapPin, GraduationCap, Briefcase, CheckCircle2, Sparkles, Award } from 'lucide-react';
import { aboutContent } from '../data/portfolioData';
import { useRole } from '../context/RoleContext';
import ProfilePhoto from '../components/ProfilePhoto';

export default function About() {
  const { role, isFullStack, isQA, isSDE } = useRole();
  const currentAbout = aboutContent[role] || aboutContent.fullstack;

  const modeBadge = isFullStack ? 'MERN Focus' : isQA ? 'QA Focus' : 'SDE Focus';

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-600/5 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-gold-500/10 border border-gold-500/25 text-gold-300 mb-3">
            <User className="w-3.5 h-3.5 text-gold-400" />
            <span>EXECUTIVE SUMMARY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFF1B8] tracking-tight">
            About Me
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Bio Card (Role-Reactive) */}
          <motion.div
            layout
            className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-gold-500/25 shadow-gold-card relative overflow-hidden"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-gold-500/10 blur-[60px] pointer-events-none" />

            <div className="flex items-center justify-between gap-4 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-dark-900 border border-gold-500/30 text-gold-300">
                {currentAbout.badge}
              </span>
              <span className="text-xs font-mono text-gold-500/70">
                Mode: {modeBadge}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
              {/* Photo in About section */}
              <div className="shrink-0">
                <ProfilePhoto variant="about" />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={role}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                  >
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#FFF1B8] mb-3">
                      {currentAbout.heading}
                    </h3>
                    <p className="text-[#CCCCCC] text-sm sm:text-base leading-relaxed font-sans">
                      {currentAbout.bio}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Role Highlights */}
            <div className="space-y-3 pt-4 border-t border-gold-500/15">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-semibold block mb-2">
                Key Competencies
              </span>
              {currentAbout.highlightPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#B3B3B3]">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Facts Card */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 border border-gold-500/25 shadow-gold-card">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FFF1B8] mb-5 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold-400" />
              Quick Facts &amp; Status
            </h3>

            <div className="space-y-4">
              {aboutContent.quickFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-dark-900/70 border border-gold-500/15 flex flex-col"
                >
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gold-500/75">
                    {fact.label}
                  </span>
                  <span className="text-sm font-semibold text-[#E5E5E5] mt-0.5">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Career Objective Tag */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-gold-900/30 to-dark-900 border border-gold-500/30 flex items-center gap-3">
              <Award className="w-6 h-6 text-gold-300 shrink-0" />
              <p className="text-xs text-[#E5E5E5] leading-relaxed">
                Dedicated to writing clean, maintainable code, solving complex computational problems, and building automated test suites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Github, ExternalLink, Terminal, Sparkles } from 'lucide-react';
import { codingProfiles } from '../data/portfolioData';

export default function CodingProfiles() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-gold-500/10 border border-gold-500/25 text-gold-300 mb-3">
            <Terminal className="w-3.5 h-3.5 text-gold-400" />
            <span>ALGORITHMIC &amp; CODE PROFILES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FFF1B8] tracking-tight">
            Developer Handles
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {codingProfiles.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group glass-card rounded-2xl p-6 sm:p-7 border border-gold-500/20 hover:border-gold-400/50 shadow-gold-card flex items-start justify-between gap-5 transition-all relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-gold-500/30 group-hover:scale-105 transition-transform"
                  style={{ backgroundColor: 'rgba(17, 17, 17, 0.9)' }}
                >
                  {item.platform === 'LeetCode' ? (
                    <Code className="w-6 h-6 text-[#FFA116]" />
                  ) : (
                    <Github className="w-6 h-6 text-[#FFF1B8]" />
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-xl font-bold text-[#FFF1B8] group-hover:text-gold-200 transition-colors">
                      {item.platform}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-gold-500/15 text-gold-300 border border-gold-400/30">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-gold-400/90 mt-0.5">
                    @{item.username}
                  </p>
                  <p className="text-xs text-[#A3A3A3] mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-2 rounded-full bg-dark-900 border border-gold-500/20 group-hover:border-gold-400 text-gold-300 group-hover:text-white transition-all shrink-0">
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

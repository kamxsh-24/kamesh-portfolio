import React from 'react';
import { ArrowUp, Github, Linkedin, Code, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-gold-500/20 pt-16 pb-12 overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gold-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-gold-500/15">
          {/* Brand Monogram & Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E1C16] to-[#0A0A0A] border border-gold-500/40 flex items-center justify-center shadow-gold-sm">
                <span className="font-serif text-xl font-bold text-gold-metallic">K</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-[#FFF1B8]">
                KAMESH J
              </span>
            </div>
            <p className="text-xs text-[#8C8C8C] mt-2 max-w-sm font-sans">
              Full Stack (MERN) Developer &amp; QA Automation Engineer crafting resilient digital architectures and automated test suites.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-full bg-dark-900 border border-gold-500/20 hover:border-gold-400 flex items-center justify-center text-[#A3A3A3] hover:text-[#FFF1B8] hover:shadow-gold-sm transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-full bg-dark-900 border border-gold-500/20 hover:border-gold-400 flex items-center justify-center text-[#A3A3A3] hover:text-[#FFF1B8] hover:shadow-gold-sm transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              className="w-10 h-10 rounded-full bg-dark-900 border border-gold-500/20 hover:border-gold-400 flex items-center justify-center text-[#A3A3A3] hover:text-[#FFA116] hover:shadow-gold-sm transition-all"
            >
              <Code className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="w-10 h-10 rounded-full bg-dark-900 border border-gold-500/20 hover:border-gold-400 flex items-center justify-center text-[#A3A3A3] hover:text-[#FFF1B8] hover:shadow-gold-sm transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-dark-900 text-xs text-gold-300 hover:text-[#FFF1B8] hover:border-gold-400 transition-all shadow-gold-sm"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#737373] gap-4">
          <p className="flex items-center gap-1.5">
            &copy; 2026 Kamesh J. Designed &amp; Built with passion.
          </p>
          <p className="font-mono text-[11px] text-gold-500/60">
            Coimbatore, India &bull; Ready for High-Impact Roles
          </p>
        </div>
      </div>
    </footer>
  );
}

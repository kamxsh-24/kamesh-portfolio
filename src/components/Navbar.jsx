import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, Sparkles } from 'lucide-react';
import { useRole } from '../context/RoleContext';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { resume, role, toggleRole, roleTitle, modePillText } = useRole();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Determine active section based on scroll position
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'py-2.5 sm:py-3' : 'py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Main Navigation"
            className={`flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
              scrolled
                ? 'bg-[#0B0B0C]/85 backdrop-blur-xl border border-gold-500/20 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_15px_rgba(212,175,55,0.1)]'
                : 'bg-[#111111]/40 backdrop-blur-md border border-gold-500/10'
            }`}
          >
            {/* Logo / Monogram & Role Subtitle */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('home');
              }}
              className="flex items-center gap-3 group min-w-0 sm:min-w-[210px]"
              aria-label="Kamesh J Homepage"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E1C16] to-[#0A0A0A] border border-gold-500/40 flex items-center justify-center shadow-gold-sm group-hover:border-gold-300 transition-colors shrink-0">
                <span className="font-serif text-xl font-bold text-gold-metallic">K</span>
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="font-serif text-lg tracking-wider font-semibold text-[#FFF1B8] leading-[1.3]">
                  KAMESH J
                </span>
                <div className="h-4 relative overflow-hidden mt-1">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={role}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.25 }}
                      className="text-[9px] uppercase tracking-wider text-gold-400/90 font-mono font-medium block leading-[1.3] whitespace-nowrap"
                    >
                      {roleTitle}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors duration-200 rounded-full ${
                      isActive ? 'text-[#FFF1B8]' : 'text-[#A3A3A3] hover:text-[#E5E5E5]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_8px_#D4AF37]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right CTAs: Role Toggle + Resume Link */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Quick Role Badge/Toggle across 3 modes */}
              <button
                onClick={toggleRole}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono border border-gold-500/20 bg-dark-900/60 text-gold-300 hover:border-gold-400/40 hover:bg-gold-500/10 transition-colors"
                title="Click to cycle role focus (Full Stack -> QA -> SDE)"
              >
                <Sparkles className="w-3 h-3 text-gold-400 animate-pulse" />
                <span className="font-semibold">{modePillText}</span>
              </button>

              {/* Dynamic Resume Button */}
              <a
                href={resume.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold overflow-hidden border border-gold-400/50 bg-gradient-to-r from-[#B8860B] via-[#F5D77A] to-[#D4AF37] text-dark-950 shadow-gold-sm hover:shadow-gold-glow transition-all duration-300 hover:scale-[1.03]"
                aria-label={`Download ${resume.title}`}
              >
                <FileDown className="w-3.5 h-3.5 text-dark-950 group-hover:-translate-y-0.5 transition-transform" />
                <span>Resume</span>
              </a>
            </div>

            {/* Mobile Actions Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={resume.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-dark-950"
              >
                CV
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gold-400 hover:text-[#FFF1B8] focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 pt-24 px-6 bg-[#070707]/95 backdrop-blur-2xl flex flex-col justify-between pb-10 sm:hidden"
          >
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-mono tracking-widest text-gold-500/70 uppercase mb-2">
                Navigation
              </p>
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`text-left py-2.5 px-4 rounded-xl text-lg font-serif tracking-wide transition-all ${
                      isActive
                        ? 'bg-gold-500/10 text-[#FFF1B8] border-l-2 border-gold-400 font-semibold'
                        : 'text-[#A3A3A3] hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-gold-500/20">
              <button
                onClick={toggleRole}
                className="w-full py-3 rounded-xl border border-gold-500/30 bg-[#141414] text-xs font-mono text-gold-300 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-gold-400" />
                Active Perspective: <span className="text-[#FFF1B8] font-bold">{roleTitle}</span>
              </button>

              <a
                href={resume.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#B8860B] via-[#F5D77A] to-[#D4AF37] text-dark-950 font-bold text-sm flex items-center justify-center gap-2 shadow-gold-sm"
              >
                <FileDown className="w-4 h-4" />
                {resume.buttonLabel || `Download ${resume.title}`}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

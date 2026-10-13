import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, FileDown, Mail, Github, Linkedin, Code, Sparkles } from 'lucide-react';
import { personalInfo, certificationsData, projectsData } from '../data/portfolioData';
import { useRole } from '../context/RoleContext';
import RoleSwitcher from '../components/RoleSwitcher';
import Avatar from '../components/Avatar';

export default function Hero() {
  const { resume, role, isFullStack, isQA, isSDE } = useRole();
  const [roleIndex, setRoleIndex] = useState(0);

  // Dynamic rotating roles according to perspective
  const currentRotatingList = personalInfo.rotatingRoles[role] || personalInfo.rotatingRoles.fullstack;

  useEffect(() => {
    setRoleIndex(0);
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % currentRotatingList.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [role, currentRotatingList.length]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // Derive stats dynamically and honestly
  const computedStats = [
    { label: "End-to-End Workflows Automated", value: "7+" },
    { label: "Full-Stack Applications", value: `${Math.floor(projectsData.length / 2)}` },
    { label: "Certifications", value: `${certificationsData.length}` },
    { label: "B.Tech Current CGPA", value: "7.3" }
  ];

  const currentTagline = personalInfo.taglines[role] || personalInfo.tagline;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Decorative Gold Ambient Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[450px] bg-gradient-to-b from-gold-500/10 via-gold-600/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gold-400/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-24 right-10 w-80 h-80 bg-gold-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Availability Badge (No green dot; updated copy) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-dark-900/80 border border-gold-500/30 shadow-gold-sm mb-6"
        >
          <span className="text-xs font-mono text-gold-200 tracking-wider">
            {personalInfo.availability}
          </span>
        </motion.div>

        {/* Profile Avatar (Placeholder fallback with slow golden rotating ring) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mb-6"
        >
          {/* Replace /public/profile.jpg with your photo (square, at least 600x600) */}
          <Avatar size="md" />
        </motion.div>

        {/* Hero Name: Full descender visibility for 'J' without clipping */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight select-none leading-[1.25] overflow-visible"
        >
          <span className="inline-block text-gold-metallic pb-[0.15em] pr-[0.1em]">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Rotating Role Badge */}
        <div className="h-10 sm:h-12 mt-2 sm:mt-3 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${role}-${roleIndex}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 text-sm sm:text-lg md:text-xl font-mono text-gold-300 font-medium tracking-wide"
            >
              <Sparkles className="w-4 h-4 text-gold-400 shrink-0" />
              <span>{currentRotatingList[roleIndex]}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-[#C7C7C7] font-sans font-light leading-relaxed px-4"
        >
          {currentTagline}
        </motion.p>

        {/* Interactive Feature: Role Switcher (3 Domains) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 flex flex-col items-center"
        >
          <span className="text-[11px] font-mono tracking-widest text-gold-500/75 uppercase mb-2">
            Switch Perspective
          </span>
          <RoleSwitcher />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5"
        >
          {/* View Projects CTA */}
          <button
            onClick={() => scrollTo('projects')}
            className="group relative inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wide overflow-hidden bg-gradient-to-r from-[#B8860B] via-[#F5D77A] to-[#D4AF37] text-dark-950 shadow-gold-glow hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Download Resume (Dynamic Role-based) */}
          <a
            href={resume.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-dark-900/90 hover:bg-dark-850 border border-gold-500/35 text-[#FFF1B8] shadow-gold-sm hover:border-gold-300 hover:shadow-gold-glow hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            aria-label={`Download ${resume.title}`}
          >
            <FileDown className="w-4 h-4 text-gold-400 group-hover:-translate-y-0.5 transition-transform" />
            <span>{resume.buttonLabel || `Download Resume (${isFullStack ? 'MERN' : isQA ? 'QA' : 'SDE'})`}</span>
          </a>

          {/* Contact Me CTA */}
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-medium bg-transparent hover:bg-gold-500/10 border border-gold-500/20 text-[#D4D4D4] hover:text-[#FFF1B8] hover:border-gold-500/50 transition-all duration-300"
          >
            <Mail className="w-4 h-4 text-gold-400" />
            <span>Contact Me</span>
          </button>
        </motion.div>

        {/* Social Icons Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-full bg-dark-900/80 border border-gold-500/20 text-[#A3A3A3] hover:text-[#FFF1B8] hover:border-gold-400 hover:shadow-gold-sm transition-all duration-300"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-full bg-dark-900/80 border border-gold-500/20 text-[#A3A3A3] hover:text-[#FFF1B8] hover:border-gold-400 hover:shadow-gold-sm transition-all duration-300"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className="p-3 rounded-full bg-dark-900/80 border border-gold-500/20 text-[#A3A3A3] hover:text-[#FFA116] hover:border-gold-400 hover:shadow-gold-sm transition-all duration-300"
          >
            <Code className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Send Email"
            className="p-3 rounded-full bg-dark-900/80 border border-gold-500/20 text-[#A3A3A3] hover:text-[#FFF1B8] hover:border-gold-400 hover:shadow-gold-sm transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Honest, Dynamically Derived Metrics Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {computedStats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-xl p-4 flex flex-col items-center justify-center border border-gold-500/20"
            >
              <span className="font-serif text-2xl sm:text-3xl font-bold text-gold-metallic">
                {stat.value}
              </span>
              <span className="text-[11px] text-[#A3A3A3] text-center font-sans mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { RoleProvider } from './context/RoleContext';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import GoldCanvas from './components/GoldCanvas';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import CodingProfiles from './sections/CodingProfiles';
import Contact from './sections/Contact';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    // Only initialize smooth scroll if prefers-reduced-motion is false
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <RoleProvider>
      {/* Animated Preloader Curtain */}
      <Preloader onComplete={() => setLoaded(true)} />

      {/* Luxury Custom Cursor (disabled on touch devices) */}
      <CustomCursor />

      {/* Top Gold Scroll Progress Bar */}
      <ScrollProgress />

      {/* 60fps Gold Dust Canvas Ambient Effect */}
      <GoldCanvas />

      {/* Global Background Layer */}
      <div className="relative min-h-screen bg-[#070707] text-[#E5E5E5] font-sans selection:bg-[#D4AF37]/30 selection:text-[#FFF1B8] overflow-x-hidden">
        {/* Floating Blurred Navbar */}
        <Navbar />

        {/* Main Sections */}
        <main id="main-content" className="relative z-10 flex flex-col">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <CodingProfiles />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </RoleProvider>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Layers, ShieldCheck, Code2, ArrowUpRight, Terminal } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { useRole } from '../context/RoleContext';
import ProjectModal from '../components/ProjectModal';

export default function Projects() {
  const { role, isFullStack, isQA, isSDE } = useRole();
  const [selectedProject, setSelectedProject] = useState(null);

  // Dynamic project sorting according to current active role
  // SDE: 1) PMSS MERN, 2) Lapwise MERN, 3) PMSS QA, 4) Lapwise QA
  // QA: 1) PMSS QA, 2) Lapwise QA, 3) PMSS MERN, 4) Lapwise MERN
  // Full Stack: 1) PMSS MERN, 2) Lapwise MERN, 3) PMSS QA, 4) Lapwise QA
  const sortedProjects = [...projectsData].sort((a, b) => {
    if (isSDE) {
      return a.featuredOrder.sde - b.featuredOrder.sde;
    }
    if (isQA) {
      return a.featuredOrder.qa - b.featuredOrder.qa;
    }
    return a.featuredOrder.fullstack - b.featuredOrder.fullstack;
  });

  const perspectiveLabel = isSDE
    ? 'Software Development & Architecture'
    : isQA
    ? 'QA & Playwright Automation'
    : 'Full Stack Development (MERN)';

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background light */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gold-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-gold-500/10 border border-gold-500/25 text-gold-300 mb-3">
            <Layers className="w-3.5 h-3.5 text-gold-400" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFF1B8] tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xs sm:text-sm text-[#A3A3A3] mt-3 font-mono">
            Ordered dynamically for: <span className="text-gold-300 font-semibold">{perspectiveLabel}</span>
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* LeetCode Special Highlight Card in SDE Mode */}
        {isSDE && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl glass-card border border-gold-500/35 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_0_25px_rgba(212,175,55,0.1)]"
          >
            <div className="flex items-center gap-3.5 text-center sm:text-left">
              <div className="w-11 h-11 rounded-xl bg-dark-900 border border-gold-500/30 flex items-center justify-center shrink-0">
                <Terminal className="w-5 h-5 text-[#FFA116]" />
              </div>
              <div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <h4 className="font-serif text-base sm:text-lg font-bold text-[#FFF1B8]">
                    LeetCode Problem Solving Profile
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#FFA116]/15 text-[#FFA116] border border-[#FFA116]/30">
                    DSA Practice
                  </span>
                </div>
                <p className="text-xs text-[#A3A3A3] mt-0.5 font-sans">
                  Solving Data Structures, Algorithms, Arrays, and Strings in Java and JavaScript.
                </p>
              </div>
            </div>

            <a
              href="https://leetcode.com/u/kamesh_55/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-dark-850 hover:bg-dark-800 border border-gold-500/30 text-[#FFF1B8] hover:border-gold-400 hover:shadow-gold-sm transition-all shrink-0"
            >
              <span>View @kamesh_55</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FFA116]" />
            </a>
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {sortedProjects.map((project, idx) => {
              const isQACard = project.roleTag === 'qa';
              const displaySummary = isSDE && project.id === 'pmss-fullstack' && project.sdeDescription
                ? project.sdeDescription
                : project.summary;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative glass-card rounded-2xl p-6 sm:p-8 border border-gold-500/20 hover:border-gold-400/50 shadow-gold-card transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Ambient Glow */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gold-500/10 blur-[50px] pointer-events-none group-hover:scale-150 transition-transform duration-500" />

                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                            isQACard
                              ? 'bg-purple-950/40 border-purple-500/40 text-purple-200'
                              : 'bg-gold-950/40 border-gold-500/40 text-gold-200'
                          }`}
                        >
                          {isQACard ? (
                            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                          ) : (
                            <Code2 className="w-3.5 h-3.5 text-gold-400" />
                          )}
                          {project.category}
                        </span>

                        <span className="text-[11px] font-mono text-gold-400/80 hidden sm:inline-block">
                          &bull; {project.badge}
                        </span>
                      </div>

                      {/* Highlight pill */}
                      <span className="text-[10px] font-mono tracking-wider uppercase text-gold-500/70 border-b border-gold-500/30 pb-0.5">
                        {project.highlight}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFF1B8] group-hover:text-gold-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-gold-400/90 mt-1 mb-4">
                      {project.subtitle}
                    </p>

                    {/* Short Description */}
                    <p className="text-[#C7C7C7] text-sm leading-relaxed mb-6 font-sans">
                      {displaySummary}
                    </p>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-dark-900 border border-gold-500/15 text-[#D4D4D4] group-hover:border-gold-500/30 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions: Live, Github, and Detail View */}
                  <div className="pt-5 border-t border-gold-500/15 flex items-center justify-between gap-3 flex-wrap">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-gold-300 hover:text-[#FFF1B8] transition-colors"
                    >
                      <Eye className="w-4 h-4 text-gold-400" />
                      <span>Deep Dive &amp; Details</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-dark-950 shadow-gold-sm hover:scale-[1.03] transition-all"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-dark-900 border border-gold-500/25 text-[#FFF1B8] hover:border-gold-400 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

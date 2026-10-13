import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Layout, Server, Database, Code2, Wrench, Sparkles, Cpu } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';
import { useRole } from '../context/RoleContext';

const iconMap = {
  ShieldCheck,
  Layout,
  Server,
  Database,
  Code2,
  Wrench,
  Cpu,
};

export default function Skills() {
  const { role, isFullStack, isQA, isSDE } = useRole();

  // Dynamic category ordering based on active role
  // SDE: Programming -> Core Concepts -> Backend -> Frontend -> Databases -> Tools -> Testing
  // Full Stack: Frontend -> Backend -> Databases -> Programming -> Tools -> Testing -> Core Concepts
  // QA: Testing -> Tools -> Programming -> Backend -> Databases -> Frontend -> Core Concepts
  const sdeOrder = ['programming', 'core', 'backend', 'frontend', 'databases', 'tools', 'testing'];
  const fullstackOrder = ['frontend', 'backend', 'databases', 'programming', 'tools', 'testing', 'core'];
  const qaOrder = ['testing', 'tools', 'programming', 'backend', 'databases', 'frontend', 'core'];

  const targetOrder = isSDE ? sdeOrder : isQA ? qaOrder : fullstackOrder;

  const sortedCategories = [...skillsCategories].sort((a, b) => {
    const indexA = targetOrder.indexOf(a.id);
    const indexB = targetOrder.indexOf(b.id);
    return (indexA === -1 ? 99 : indexA) - (indexB === -1 ? 99 : indexB);
  });

  const roleLabel = isSDE
    ? 'Software Development & Core CS'
    : isQA
    ? 'QA & Playwright Automation'
    : 'Full Stack Development (MERN)';

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#080808]/50">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-gold-500/10 border border-gold-500/25 text-gold-300 mb-3">
            <Cpu className="w-3.5 h-3.5 text-gold-400" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFF1B8] tracking-tight">
            Skills &amp; Expertise
          </h2>
          <p className="text-xs sm:text-sm text-[#A3A3A3] mt-3 font-mono">
            Highlighted for: <span className="text-gold-300 font-semibold">{roleLabel}</span>
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* Category Cards Grid with Framer Motion layout transition */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCategories.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Code2;
            const isPriority = idx < 2; // Top 2 categories in this perspective

            return (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group relative glass-card rounded-2xl p-6 border transition-all duration-300 ${
                  isPriority
                    ? 'border-gold-500/45 shadow-[0_10px_30px_rgba(212,175,55,0.12)] bg-gradient-to-b from-dark-850 to-dark-950'
                    : 'border-gold-500/15 hover:border-gold-500/35'
                }`}
              >
                {/* Header of Category */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-dark-900 border border-gold-500/30 flex items-center justify-center text-gold-300 group-hover:border-gold-400 group-hover:scale-105 transition-all">
                      <IconComponent className="w-5 h-5 text-gold-400" />
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#FFF1B8]">
                      {cat.category}
                    </h3>
                  </div>

                  {isPriority && (
                    <span className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-200 border border-gold-400/30">
                      <Sparkles className="w-2.5 h-2.5 text-gold-300" />
                      Priority
                    </span>
                  )}
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group/chip relative px-3 py-1.5 rounded-lg bg-dark-900/90 border border-gold-500/15 hover:border-gold-400/50 hover:bg-dark-800 transition-all duration-200 flex flex-col"
                    >
                      <span className="text-xs font-medium text-[#E5E5E5] group-hover/chip:text-[#FFF1B8] transition-colors">
                        {skill.name}
                      </span>
                      {skill.tag && (
                        <span className="text-[9px] font-mono text-gold-400/70 mt-0.5">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

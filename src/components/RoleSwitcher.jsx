import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ShieldCheck, Terminal } from 'lucide-react';
import { useRole } from '../context/RoleContext';

export default function RoleSwitcher({ className = "" }) {
  const { role, setRole } = useRole();

  const options = [
    {
      id: 'fullstack',
      label: 'Full Stack Developer',
      shortLabel: 'Full Stack',
      icon: Code2
    },
    {
      id: 'qa',
      label: 'QA Automation Engineer',
      shortLabel: 'QA Automation',
      icon: ShieldCheck
    },
    {
      id: 'sde',
      label: 'Software Developer',
      shortLabel: 'Software Dev',
      icon: Terminal
    }
  ];

  return (
    <div
      className={`inline-flex items-center p-1 sm:p-1.5 rounded-full bg-[#111111]/90 border border-gold-500/25 shadow-gold-sm backdrop-blur-md max-w-full overflow-x-auto ${className}`}
      role="radiogroup"
      aria-label="Select professional portfolio perspective"
    >
      {options.map((opt) => {
        const isActive = role === opt.id;
        const Icon = opt.icon;

        return (
          <button
            key={opt.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => setRole(opt.id)}
            className={`relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs md:text-sm font-medium rounded-full transition-colors duration-300 z-10 whitespace-nowrap ${
              isActive ? 'text-[#0A0A0A] font-semibold' : 'text-[#A3A3A3] hover:text-[#FFF1B8]'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeRolePill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#B8860B] via-[#F5D77A] to-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1 sm:gap-1.5">
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-dark-950' : 'text-gold-400'}`} />
              <span className="hidden sm:inline">{opt.label}</span>
              <span className="sm:hidden">{opt.shortLabel}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

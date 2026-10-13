import React, { createContext, useContext, useState, useMemo } from 'react';
import { personalInfo } from '../data/portfolioData';

const RoleContext = createContext(null);

export const RoleProvider = ({ children }) => {
  // 'fullstack' (default) | 'qa' | 'sde'
  const [role, setRole] = useState('fullstack');

  const resume = useMemo(() => {
    if (role === 'qa') return personalInfo.resumes.qa;
    if (role === 'sde') return personalInfo.resumes.sde;
    return personalInfo.resumes.fullstack;
  }, [role]);

  const isFullStack = role === 'fullstack';
  const isQA = role === 'qa';
  const isSDE = role === 'sde';

  const toggleRole = () => {
    setRole((prev) => {
      if (prev === 'fullstack') return 'qa';
      if (prev === 'qa') return 'sde';
      return 'fullstack';
    });
  };

  const roleLabels = {
    fullstack: 'FULL STACK DEVELOPER',
    qa: 'QA AUTOMATION ENGINEER',
    sde: 'SOFTWARE DEVELOPER'
  };

  const modePillLabels = {
    fullstack: 'Mode: Full Stack',
    qa: 'Mode: QA',
    sde: 'Mode: SDE'
  };

  const value = {
    role,
    setRole,
    toggleRole,
    isFullStack,
    isQA,
    isSDE,
    resume,
    roleTitle: roleLabels[role] || roleLabels.fullstack,
    modePillText: modePillLabels[role] || modePillLabels.fullstack
  };

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};

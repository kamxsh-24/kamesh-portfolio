import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, FileDown, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { useRole } from '../context/RoleContext';

export default function Contact() {
  const { resume } = useRole();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '' // spam protection
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [notice, setNotice] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please provide a subject line';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please include a message or inquiry';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Honeypot check: If filled, bot detected; silently exit
    if (formData.honeypot) {
      setStatus('success');
      return;
    }

    setStatus('submitting');
    setNotice('');

    const formspreeUrl = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    // If Formspree endpoint is configured and not default dummy placeholder
    if (formspreeUrl && !formspreeUrl.includes('your_form_id')) {
      try {
        const response = await fetch(formspreeUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _to: 'kameshj001@gmail.com'
          })
        });

        if (!response.ok) {
          throw new Error('Formspree returned an error response');
        }

        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });

        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#D4AF37', '#F5D77A', '#FFF1B8', '#B8860B']
        });

        setTimeout(() => setStatus('idle'), 7000);
      } catch (err) {
        console.error('Form submission failed:', err);
        setStatus('error');
      }
    } else {
      // Fallback: If Formspree endpoint is missing, open mailto link with prefilled details
      const mailtoUrl = `mailto:kameshj001@gmail.com?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.open(mailtoUrl, '_blank');

      setStatus('success');
      setNotice('Formspree endpoint not configured; opened draft in your email client for kameshj001@gmail.com.');
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });

      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#F5D77A', '#FFF1B8']
      });

      setTimeout(() => {
        setStatus('idle');
        setNotice('');
      }, 8000);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#070707]">
      {/* Background radial gold glow */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-gold-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-gold-500/10 border border-gold-500/25 text-gold-300 mb-3">
            <Mail className="w-3.5 h-3.5 text-gold-400" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFF1B8] tracking-tight">
            Get In Touch
          </h2>
          <p className="text-xs sm:text-sm text-[#A3A3A3] mt-3 font-mono">
            Directly delivered to <span className="text-gold-300 font-semibold">kameshj001@gmail.com</span>
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Cards & Resumes */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-gold-500/25 shadow-gold-card">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FFF1B8] mb-5">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-dark-900/80 border border-gold-500/15 hover:border-gold-400/50 hover:bg-dark-850 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-dark-950 border border-gold-500/25 flex items-center justify-center text-gold-400 group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gold-500/80 block">
                      Direct Email
                    </span>
                    <span className="text-sm font-semibold text-[#E5E5E5] group-hover:text-[#FFF1B8] transition-colors truncate block">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-dark-900/80 border border-gold-500/15 hover:border-gold-400/50 hover:bg-dark-850 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-dark-950 border border-gold-500/25 flex items-center justify-center text-gold-400 group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gold-500/80 block">
                      Phone / WhatsApp
                    </span>
                    <span className="text-sm font-semibold text-[#E5E5E5] group-hover:text-[#FFF1B8] transition-colors">
                      {personalInfo.phone}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-dark-900/80 border border-gold-500/15">
                  <div className="w-10 h-10 rounded-lg bg-dark-950 border border-gold-500/25 flex items-center justify-center text-gold-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gold-500/80 block">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-[#E5E5E5]">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Downloads Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-gold-500/25 shadow-gold-card">
              <h4 className="font-serif text-lg sm:text-xl font-bold text-[#FFF1B8] mb-2 flex items-center gap-2">
                <FileDown className="w-5 h-5 text-gold-400" />
                Tailored Resumes
              </h4>
              <p className="text-xs text-[#A3A3A3] mb-4">
                Download verified resume PDFs tailored for Full Stack, QA, or SDE tracks.
              </p>

              <div className="flex flex-col gap-2.5">
                <a
                  href={personalInfo.resumes.fullstack.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-dark-900 border border-gold-500/30 hover:border-gold-300 text-center text-xs font-semibold text-[#FFF1B8] hover:bg-gold-500/10 transition-all flex items-center justify-center gap-2 shadow-gold-sm"
                >
                  <FileDown className="w-4 h-4 text-gold-400" />
                  Download MERN Resume
                </a>

                <a
                  href={personalInfo.resumes.qa.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-dark-900 border border-gold-500/30 hover:border-gold-300 text-center text-xs font-semibold text-[#FFF1B8] hover:bg-gold-500/10 transition-all flex items-center justify-center gap-2 shadow-gold-sm"
                >
                  <FileDown className="w-4 h-4 text-gold-400" />
                  Download QA Resume
                </a>

                <a
                  href={personalInfo.resumes.sde.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-dark-900 border border-gold-500/30 hover:border-gold-300 text-center text-xs font-semibold text-[#FFF1B8] hover:bg-gold-500/10 transition-all flex items-center justify-center gap-2 shadow-gold-sm"
                >
                  <FileDown className="w-4 h-4 text-gold-400" />
                  Download SDE Resume
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-gold-500/25 shadow-gold-card relative">
            <h3 className="font-serif text-2xl font-bold text-[#FFF1B8] mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-[#A3A3A3] mb-6">
              Have an open position or project inquiry? Drop a note below and I'll respond promptly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Hidden Honeypot Field for Spam Protection */}
              <input
                type="text"
                name="_gotcha"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />

              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-gold-400 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: null });
                  }}
                  placeholder="e.g. John Doe"
                  className={`w-full px-4 py-3 rounded-xl bg-dark-900/90 border text-sm text-[#E5E5E5] placeholder-[#555555] focus:outline-none transition-all ${
                    errors.name
                      ? 'border-red-500/80 focus:border-red-400'
                      : 'border-gold-500/25 focus:border-gold-400 focus:shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                  }`}
                />
                {errors.name && (
                  <p className="text-[11px] text-red-400 font-mono mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-gold-400 mb-1.5">
                  Email Address *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: null });
                  }}
                  placeholder="e.g. recruiter@company.com"
                  className={`w-full px-4 py-3 rounded-xl bg-dark-900/90 border text-sm text-[#E5E5E5] placeholder-[#555555] focus:outline-none transition-all ${
                    errors.email
                      ? 'border-red-500/80 focus:border-red-400'
                      : 'border-gold-500/25 focus:border-gold-400 focus:shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-red-400 font-mono mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-gold-400 mb-1.5">
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: null });
                  }}
                  placeholder="e.g. SDE / Full Stack / QA Opportunity"
                  className={`w-full px-4 py-3 rounded-xl bg-dark-900/90 border text-sm text-[#E5E5E5] placeholder-[#555555] focus:outline-none transition-all ${
                    errors.subject
                      ? 'border-red-500/80 focus:border-red-400'
                      : 'border-gold-500/25 focus:border-gold-400 focus:shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                  }`}
                />
                {errors.subject && (
                  <p className="text-[11px] text-red-400 font-mono mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-gold-400 mb-1.5">
                  Message / Opportunity Details *
                </label>
                <textarea
                  id="contact-message"
                  rows="4"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: null });
                  }}
                  placeholder="Share details regarding roles, projects, or timelines (min 10 characters)..."
                  className={`w-full px-4 py-3 rounded-xl bg-dark-900/90 border text-sm text-[#E5E5E5] placeholder-[#555555] focus:outline-none transition-all resize-none ${
                    errors.message
                      ? 'border-red-500/80 focus:border-red-400'
                      : 'border-gold-500/25 focus:border-gold-400 focus:shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-red-400 font-mono mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full relative group py-3.5 px-6 rounded-xl text-sm font-bold tracking-wide bg-gradient-to-r from-[#B8860B] via-[#F5D77A] to-[#D4AF37] text-dark-950 shadow-gold-glow hover:shadow-gold-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-dark-950 border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>

              {/* Success / Error Feedback */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex flex-col gap-1"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Thank you! Your message has been sent. I'll reply soon.</span>
                    </div>
                    {notice && (
                      <span className="text-[11px] text-emerald-400/80 ml-6">{notice}</span>
                    )}
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs font-mono flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>Unable to send right now. Please retry or email directly at kameshj001@gmail.com</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="self-start text-[11px] underline text-gold-300 ml-6 hover:text-white"
                    >
                      Retry sending
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

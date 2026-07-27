import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PageType, ModalType } from '../types';

interface FooterSectionProps {
  onNavigate: (page: PageType) => void;
  onOpenModal: (modal: ModalType) => void;
  selectedPlan?: string;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onNavigate,
  onOpenModal,
  selectedPlan = 'Website Redesign',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(selectedPlan);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <footer id="contact" className="relative w-full bg-[var(--bg-primary)] pt-28 md:pt-40 pb-12 border-t border-[var(--border-color)] overflow-hidden select-none transition-colors duration-300">
      <div className="w-full max-w-[1800px] mx-auto px-8 md:px-12 global-mobile-container relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-[40px] lg:gap-12 items-start mb-24 md:mb-32">
          
          {/* Left Headline */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="lg:col-span-6"
          >
            <h2 className="font-headline font-bold text-[var(--text-primary)] text-[clamp(2.8rem,5vw,4.5rem)] leading-[0.9] tracking-[-0.03em] mb-6">
              Let's build the future of your business.
            </h2>
            <p className="text-[var(--text-muted)] text-[15px] leading-relaxed max-w-md">
              Offline market leadership deserves an online flagship. Request an interactive concept or schedule an executive consultation.
            </p>
          </motion.div>

          {/* Right side: Minimal Form in surface card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="form-card lg:col-span-6 w-full bg-[var(--surface-card)] border border-[var(--border-color)] rounded-[24px] p-6 md:p-10 shadow-2xl"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-12 h-12 rounded-full bg-[var(--cta-bg)] text-[var(--cta-text)] flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  ✓
                </div>
                <h3 className="font-headline font-bold text-[var(--text-primary)] text-2xl mb-2">
                  Inquiry Received
                </h3>
                <p className="text-[var(--text-muted)] text-sm max-w-xs mx-auto">
                  Our director will review your details and send an interactive concept proposal within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs text-[var(--text-muted)] underline hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="footer-name" className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    id="footer-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3.5 text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--text-primary)] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="footer-email" className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    id="footer-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3.5 text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--text-primary)] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="footer-project-type" className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2">
                    Project Type
                  </label>
                  <select
                    id="footer-project-type"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3.5 text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--text-primary)] transition-colors cursor-pointer"
                  >
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="AI Integration">AI Integration</option>
                    <option value="Retainer">Retainer</option>
                    <option value="Full Transformation">Full Transformation</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--cta-bg)] text-[var(--cta-text)] font-semibold text-[15px] py-4 rounded-full hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer shadow-xl mt-4"
                >
                  Submit Inquiry →
                </button>
              </form>
            )}
          </motion.div>

        </div>

        {/* Floating Footer Links & Copyright */}
        <div className="relative z-20 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-[var(--border-color)] pt-8 mb-16">
          <div className="flex flex-wrap items-center gap-6 text-[13px] text-[var(--text-muted)]">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('process')}
              className="hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            >
              How we work
            </button>
            <a href="#pricing" className="hover:text-[var(--text-primary)] transition-colors cursor-pointer">
              Pricing
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            >
              Instagram
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            >
              X
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
            <span>09:45 AM EST / Serving all over USA.</span>
            <span className="hidden sm:inline text-[var(--border-color)]">•</span>
            <span>© 2026 GETGOLIVE. ALL RIGHTS RESERVED.</span>
          </div>
        </div>

      </div>

      {/* The Giant GOGETLIVE wordmark centered at bottom (Perfectly Centered & Scaled Vector) */}
      <div className="giant-wordmark-container absolute bottom-0 inset-x-0 w-full h-[18vh] sm:h-[24vh] md:h-[30vh] overflow-hidden pointer-events-none flex items-end justify-center z-0 opacity-40 px-2 sm:px-6">
        <svg
          viewBox="0 0 1000 150"
          className="w-full h-auto max-w-full block select-none pointer-events-none mx-auto"
          preserveAspectRatio="xMidYBottom meet"
        >
          <defs>
            <linearGradient id="wordmark-grad-footer" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--wordmark-start)" stopOpacity="0.9" />
              <stop offset="50%" stopColor="var(--wordmark-mid)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--wordmark-end)" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <text
            x="500"
            y="125"
            textAnchor="middle"
            style={{
              fontSize: '145px',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              fill: 'url(#wordmark-grad-footer)',
              fontFamily: "'Inter Tight', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
            }}
          >
            GETGOLIVE
          </text>
        </svg>
      </div>
    </footer>
  );
};

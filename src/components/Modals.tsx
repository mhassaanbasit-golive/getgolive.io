import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ModalType, PageType, CaseStudy, ServiceDetail } from '../types';

interface ModalsProps {
  activeModal: ModalType;
  onClose: () => void;
  onNavigate: (page: PageType) => void;
  selectedCaseStudy: CaseStudy | null;
  selectedService: ServiceDetail | null;
  selectedPlanName?: string;
}

export const Modals: React.FC<ModalsProps> = ({
  activeModal,
  onClose,
  onNavigate,
  selectedCaseStudy,
  selectedService,
  selectedPlanName,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [conceptSubmitted, setConceptSubmitted] = useState(false);

  if (!activeModal) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-[4px] cursor-pointer"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`relative z-10 w-full ${
            activeModal === 'menu' ? 'max-w-lg p-6 md:p-8' : 'max-w-2xl p-8 md:p-10'
          } bg-[var(--surface-card)] border border-[var(--border-color)] rounded-[24px] text-[var(--text-primary)] shadow-2xl overflow-y-auto max-h-[85vh]`}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[var(--bg-primary)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors flex items-center justify-center text-sm font-mono cursor-pointer"
            aria-label="Close modal"
          >
            ✕
          </button>

          {/* 1. MENU MODAL */}
          {activeModal === 'menu' && (
            <div className="py-2">
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest block mb-5">
                NAVIGATION MENU
              </span>
              <div className="space-y-3.5">
                <button
                  onClick={() => {
                    onNavigate('home');
                    onClose();
                  }}
                  className="block text-2xl md:text-3xl font-headline font-bold text-[var(--text-primary)] hover:opacity-80 transition-opacity cursor-pointer text-left w-full"
                >
                  01 / Home Page
                </button>
                <button
                  onClick={() => {
                    onNavigate('process');
                    onClose();
                  }}
                  className="block text-2xl md:text-3xl font-headline font-bold text-[var(--text-primary)] hover:opacity-80 transition-opacity cursor-pointer text-left w-full"
                >
                  02 / How We Work (Process)
                </button>
                <button
                  onClick={() => {
                    onNavigate('home');
                    onClose();
                    setTimeout(() => {
                      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="block text-2xl md:text-3xl font-headline font-bold text-[var(--text-primary)] hover:opacity-80 transition-opacity cursor-pointer text-left w-full"
                >
                  03 / Pricing & Retainer
                </button>
                <button
                  onClick={() => {
                    onClose();
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="block text-2xl md:text-3xl font-headline font-bold text-[var(--text-primary)] hover:opacity-80 transition-opacity cursor-pointer text-left w-full"
                >
                  04 / Contact & Consultation
                </button>
              </div>
            </div>
          )}

          {/* 2. FREE CONCEPT REQUEST MODAL */}
          {activeModal === 'concept' && (
            <div>
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest block mb-2">
                INTERACTIVE PROOF
              </span>
              <h3 className="font-headline font-bold text-[var(--text-primary)] text-3xl mb-4">
                Get a Free Custom Concept
              </h3>
              <p className="text-[var(--text-muted)] text-sm mb-6 leading-relaxed">
                Provide your current website or company name. Our director will construct a live, interactive 1-page front-end prototype within 72 hours.
              </p>

              {conceptSubmitted ? (
                <div className="text-center py-8 bg-[var(--bg-primary)] rounded-2xl border border-[var(--border-color)]">
                  <div className="w-10 h-10 rounded-full bg-[var(--cta-bg)] text-[var(--cta-text)] font-bold flex items-center justify-center mx-auto mb-3">
                    ✓
                  </div>
                  <h4 className="font-headline font-bold text-[var(--text-primary)] text-xl mb-1">
                    Concept Request Registered
                  </h4>
                  <p className="text-xs text-[var(--text-muted)]">
                    We are analyzing your business domain and preparing your prototype link.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setConceptSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="concept-company" className="block text-xs font-mono text-[var(--text-muted)] uppercase mb-1">Company / Website URL</label>
                    <input
                      id="concept-company"
                      type="text"
                      required
                      placeholder="e.g. bellview-realty.com"
                      className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--text-primary)] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="concept-email" className="block text-xs font-mono text-[var(--text-muted)] uppercase mb-1">Your Executive Email</label>
                    <input
                      id="concept-email"
                      type="email"
                      required
                      placeholder="executive@company.com"
                      className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--text-primary)] transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[var(--cta-bg)] text-[var(--cta-text)] font-semibold text-sm py-3.5 rounded-full hover:opacity-90 transition-all cursor-pointer mt-2"
                  >
                    Build My Free Concept →
                  </button>
                </form>
              )}
            </div>
          )}

          {/* 3. CONTACT / GET IN TOUCH MODAL */}
          {activeModal === 'contact' && (
            <div>
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest block mb-2">
                EXECUTIVE INQUIRY
              </span>
              <h3 className="font-headline font-bold text-[var(--text-primary)] text-3xl mb-2">
                Get In Touch
              </h3>
              {selectedPlanName && (
                <span className="inline-block bg-[var(--cta-bg)] text-[var(--cta-text)] text-xs font-mono font-bold px-3 py-1 rounded-full mb-4">
                  Selected Plan: {selectedPlanName}
                </span>
              )}

              {formSubmitted ? (
                <div className="text-center py-8 bg-[var(--bg-primary)] rounded-2xl border border-[var(--border-color)]">
                  <div className="w-10 h-10 rounded-full bg-[var(--cta-bg)] text-[var(--cta-text)] font-bold flex items-center justify-center mx-auto mb-3">
                    ✓
                  </div>
                  <h4 className="font-headline font-bold text-[var(--text-primary)] text-xl mb-1">
                    Thank You
                  </h4>
                  <p className="text-xs text-[var(--text-muted)]">
                    We will be in touch shortly to coordinate your consultation.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="modal-name" className="block text-xs font-mono text-[var(--text-muted)] uppercase mb-1">Full Name</label>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--text-primary)] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-email" className="block text-xs font-mono text-[var(--text-muted)] uppercase mb-1">Email Address</label>
                    <input
                      id="modal-email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--text-primary)] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-notes" className="block text-xs font-mono text-[var(--text-muted)] uppercase mb-1">Notes / Scope (Optional)</label>
                    <textarea
                      id="modal-notes"
                      rows={3}
                      placeholder="Tell us briefly about your current offline presence..."
                      className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--text-primary)] transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[var(--cta-bg)] text-[var(--cta-text)] font-semibold text-sm py-3.5 rounded-full hover:opacity-90 transition-all cursor-pointer mt-2"
                  >
                    Send Direct Inquiry →
                  </button>
                </form>
              )}
            </div>
          )}

          {/* 4. CASE STUDY DETAIL MODAL */}
          {activeModal === 'case-study' && selectedCaseStudy && (
            <div>
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest block mb-2">
                CASE STUDY / {selectedCaseStudy.category}
              </span>
              <h3 className="font-headline font-bold text-[var(--text-primary)] text-3xl mb-1">
                {selectedCaseStudy.title}
              </h3>
              <p className="text-[var(--text-muted)] text-sm mb-6">
                {selectedCaseStudy.subtitle} ({selectedCaseStudy.year})
              </p>

              <div className="w-full aspect-video rounded-xl overflow-hidden mb-6 border border-[var(--border-color)]">
                <img
                  src={selectedCaseStudy.heroImage}
                  alt={selectedCaseStudy.title}
                  className="w-full h-full object-cover filter grayscale contrast-125"
                />
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 mb-6 bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border-color)]">
                {selectedCaseStudy.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <span className="font-headline font-bold text-[var(--text-primary)] text-xl block">{m.value}</span>
                    <span className="text-[11px] font-mono text-[var(--text-muted)]">{m.label}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                <div>
                  <span className="text-[var(--text-primary)] font-semibold block mb-1">The Challenge:</span>
                  <p>{selectedCaseStudy.challenge}</p>
                </div>
                <div>
                  <span className="text-[var(--text-primary)] font-semibold block mb-1">The Transformation:</span>
                  <p>{selectedCaseStudy.solution}</p>
                </div>
                <div>
                  <span className="text-[var(--text-primary)] font-semibold block mb-1">The Result:</span>
                  <p>{selectedCaseStudy.result}</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full bg-[var(--cta-bg)] text-[var(--cta-text)] font-semibold text-sm py-3 rounded-full hover:opacity-90 transition-all cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          )}

          {/* 5. SERVICE DETAIL MODAL */}
          {activeModal === 'service' && selectedService && (
            <div>
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest block mb-2">
                CORE CAPABILITY
              </span>
              <h3 className="font-headline font-bold text-[var(--text-primary)] text-3xl mb-2">
                {selectedService.title}
              </h3>
              <p className="text-[var(--text-primary)] font-medium text-sm mb-6">
                {selectedService.tagline}
              </p>

              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
                {selectedService.description}
              </p>

              <div className="bg-[var(--bg-primary)] p-5 rounded-xl border border-[var(--border-color)] mb-6">
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase block mb-3">Key Deliverables</span>
                <div className="space-y-2">
                  {selectedService.deliverables.map((d, idx) => (
                    <div key={idx} className="text-xs text-[var(--text-primary)] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-primary)]" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="w-full bg-[var(--cta-bg)] text-[var(--cta-text)] font-semibold text-sm py-3 rounded-full hover:opacity-90 transition-all cursor-pointer"
              >
                Inquire for {selectedService.title} →
              </button>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

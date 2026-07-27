import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data';
import { ServiceDetail, ModalType } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceDetail) => void;
  onOpenModal: (modal: ModalType) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services-section" className="relative w-full bg-[var(--bg-primary)] text-[var(--text-primary)] py-28 md:py-40 border-t border-[var(--border-color)] transition-colors duration-300">
      <div className="w-full max-w-[1800px] mx-auto px-8 md:px-12 global-mobile-container">
        
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="lg:w-2/3"
          >
            <h2 className="font-headline font-bold text-[var(--text-primary)] text-[clamp(3.2rem,7vw,6rem)] leading-[0.9] tracking-[-0.03em]">
              Our process & your growth.
            </h2>
          </motion.div>

          {/* Tech Icons: A horizontal row of 4 extremely minimal 1px thin-line SVGs */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="flex items-center gap-6"
          >
            {/* 1. Layout Symbol SVG */}
            <div className="w-10 h-10 flex items-center justify-center text-[var(--text-primary)]" title="Layout Architecture">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
            </div>

            {/* 2. Funnel Symbol SVG */}
            <div className="w-10 h-10 flex items-center justify-center text-[var(--text-primary)]" title="Conversion Funnel">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
            </div>

            {/* 3. Chat Bubble Symbol SVG */}
            <div className="w-10 h-10 flex items-center justify-center text-[var(--text-primary)]" title="AI Intelligence">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>

            {/* 4. Lightning Bolt Symbol SVG */}
            <div className="w-10 h-10 flex items-center justify-center text-[var(--text-primary)]" title="SEO & Performance">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* 2x2 Grid of Minimal Cards */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-[32px] md:gap-8">
          {SERVICES.map((service, idx) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.9, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ willChange: 'transform, opacity' }}
                onClick={() => onSelectService(service)}
                className="bg-[var(--surface-card)] rounded-[24px] p-8 md:p-10 shadow-lg border border-[var(--border-color)] hover:border-[var(--text-muted)] transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <h3 className="font-headline font-normal text-[#FFFFFF] text-[clamp(1.5rem,4vw,2.5rem)] leading-[0.95] tracking-[-0.02em] mb-3">
                    {service.title}
                  </h3>
                  <p className="font-sans font-normal text-[#8A8A8A] text-[14px] leading-[1.6]">
                    {service.tagline}
                  </p>
                </div>

                {/* Bottom Right Arrow */}
                <div className="flex justify-end pt-8">
                  <div className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-primary)] group-hover:bg-[var(--cta-bg)] group-hover:text-[var(--cta-text)] group-hover:border-[var(--cta-bg)] transition-all duration-300">
                    <span className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

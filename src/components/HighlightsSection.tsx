import React from 'react';
import { motion } from 'motion/react';
import { CASE_STUDIES } from '../data';
import { CaseStudy } from '../types';

interface HighlightsSectionProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export const HighlightsSection: React.FC<HighlightsSectionProps> = ({ onSelectCaseStudy }) => {
  return (
    <section className="relative w-full bg-[var(--bg-primary)] text-[var(--text-primary)] py-28 md:py-40 border-t border-[var(--border-color)] transition-colors duration-300">
      <div className="w-full max-w-[1800px] mx-auto px-8 md:px-12 global-mobile-container">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="md:w-1/2"
          >
            <h2 className="font-headline font-bold text-[var(--text-primary)] text-[clamp(3.2rem,7vw,6rem)] leading-[0.9] tracking-[-0.03em]">
              Recent transformations.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="md:w-1/3 md:text-right"
          >
            <p className="text-[var(--text-muted)] text-[16px] leading-[1.6]">
              Projects where outdated real estate portfolios became modern lead systems.
            </p>
          </motion.div>
        </div>

        {/* Card Layout: 2 massive horizontal cards with 40px gap on mobile */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-[40px] md:gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: 'transform, opacity' }}
              onClick={() => onSelectCaseStudy(study)}
              className="bg-[var(--surface-card)] rounded-[24px] p-6 border border-[var(--border-color)] hover:border-[var(--text-muted)] transition-all duration-300 shadow-lg cursor-pointer group flex flex-col justify-between"
            >
              {/* Screenshot / Image Placeholder (Upper 60%) */}
              <div className="w-full aspect-[16/10] bg-[var(--bg-primary)] rounded-2xl overflow-hidden mb-6 relative border border-[var(--border-color)]">
                <img
                  src={study.heroImage}
                  alt={study.title}
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-card)] via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Footer Row */}
              <div className="flex items-end justify-between pt-2">
                <div>
                  <h3 className="font-headline font-normal text-[#FFFFFF] text-[clamp(1.5rem,4vw,2.5rem)] leading-[0.95] tracking-[-0.02em] mb-1 group-hover:opacity-80 transition-opacity">
                    {study.title}
                  </h3>
                  <p className="font-sans font-normal text-[#8A8A8A] text-[14px] leading-[1.6]">
                    {study.subtitle}
                  </p>
                </div>

                {/* 1px thin-line monochrome ↗ arrow icon in circle */}
                <div className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-primary)] group-hover:bg-[var(--cta-bg)] group-hover:text-[var(--cta-text)] group-hover:border-[var(--cta-bg)] transition-all duration-300">
                  <span className="text-base">↗</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

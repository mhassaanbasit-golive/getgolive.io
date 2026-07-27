import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process-section" className="relative w-full bg-[var(--bg-primary)] text-[var(--text-primary)] py-28 md:py-40 border-t border-[var(--border-color)] transition-colors duration-300">
      <div className="w-full max-w-[1800px] mx-auto px-8 md:px-12 global-mobile-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-headline font-bold text-[var(--text-primary)] text-[clamp(2.8rem,6.5vw,5.5rem)] leading-[0.9] tracking-[-0.03em]">
            How we transform outdated sites.
          </h2>
        </motion.div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[var(--surface-card)] rounded-[24px] p-8 md:p-10 border border-[var(--border-color)] hover:border-[var(--text-muted)] transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <h3 className="font-headline font-normal text-[#FFFFFF] text-[clamp(1.5rem,4vw,2.5rem)] leading-[0.95] tracking-[-0.02em] mb-3">
                  {step.title}
                </h3>
                <p className="font-sans font-normal text-[#8A8A8A] text-[14px] leading-[1.6]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

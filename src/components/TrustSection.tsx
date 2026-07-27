import React from 'react';
import { motion } from 'motion/react';

export const TrustSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[var(--bg-primary)] text-[var(--text-primary)] py-28 md:py-36 border-t border-[var(--border-color)] transition-colors duration-300">
      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-12 global-mobile-container">
        
        {/* Main Headline: Center-aligned text */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-headline font-bold text-[var(--text-primary)] text-[clamp(3.2rem,6vw,5rem)] leading-[0.9] tracking-[-0.03em]">
            A partner you can trust.
          </h2>
        </motion.div>

        {/* Card Layout: Two side-by-side rounded cards with 40px gap on mobile */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-[40px] lg:gap-8 items-stretch">
          
          {/* Left Card: 20+ Companies transformed */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="lg:col-span-4 bg-[var(--surface-card)] rounded-[24px] p-8 md:p-10 border border-[var(--border-color)] flex flex-col justify-center items-start min-h-[220px] md:min-h-[260px]"
          >
            <span className="font-headline font-extrabold text-[var(--text-primary)] text-[3rem] leading-none mb-3 block">
              20+
            </span>
            <span className="text-[var(--text-muted)] text-[14px]">
              Companies transformed.
            </span>
          </motion.div>

          {/* Right Card: Huge editorial quote */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="lg:col-span-8 bg-[var(--surface-card)] rounded-[24px] p-8 md:p-12 border border-[var(--border-color)] flex flex-col justify-between min-h-[220px] md:min-h-[260px]"
          >
            <p className="font-headline font-medium text-[var(--text-primary)] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-8">
              "Not just designers. True partners. Actually care about our bottom line."
            </p>

            <div className="flex items-center gap-4">
              {/* Circular avatar placeholder */}
              <div className="w-11 h-11 rounded-full bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-primary)] text-xs font-mono font-bold uppercase">
                JD
              </div>
              <div>
                <span className="block font-semibold text-[var(--text-primary)] text-[15px]">
                  Jane Doe
                </span>
                <span className="block text-[var(--text-muted)] text-[13px]">
                  CEO, Bellview Realty
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

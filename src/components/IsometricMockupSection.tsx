import React from 'react';
import { motion } from 'motion/react';
import { ModalType } from '../types';

interface IsometricMockupSectionProps {
  onOpenModal: (modal: ModalType) => void;
}

export const IsometricMockupSection: React.FC<IsometricMockupSectionProps> = ({ onOpenModal }) => {
  return (
    <section id="mockup" className="relative w-full bg-[var(--bg-primary)] text-[var(--text-primary)] py-20 md:py-40 px-8 md:px-12 global-mobile-container overflow-hidden border-t border-[var(--border-color)] transition-colors duration-300">
      <div className="max-w-[1800px] mx-auto relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-12">
        
        {/* Sleek, Dark Grey Editorial Canvas Container */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="w-full lg:w-[58%]"
        >
          <div className="w-full mx-auto rounded-[24px] bg-[var(--surface-card)] border border-[var(--border-color)] overflow-hidden shadow-2xl group">
            <div className="relative aspect-[4/3] md:aspect-[16/10] bg-[var(--bg-primary)] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                alt="Editorial Architectural Canvas"
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-1000 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-card)] via-transparent to-transparent opacity-80" />
            </div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="w-full lg:w-[38%] flex flex-col items-start"
        >
          <h2 className="font-headline font-bold text-[var(--text-primary)] text-[clamp(2rem,4vw,4.5rem)] leading-[0.95] tracking-[-0.03em] mb-6">
            See a concept before you commit.
          </h2>
          <p className="text-[var(--text-muted)] text-[15px] leading-[1.6] mb-8 max-w-md">
            We build a working preview of your new site with your custom brand colors. You inspect it before you pay.
          </p>
          <button
            onClick={() => onOpenModal('concept')}
            className="bg-[var(--cta-bg)] text-[var(--cta-text)] font-semibold text-[16px] px-8 py-3.5 rounded-full hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-xl flex items-center gap-2"
          >
            <span>Request a concept</span>
            <span>→</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

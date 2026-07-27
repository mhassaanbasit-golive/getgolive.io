import React from 'react';
import { motion } from 'motion/react';
import { ModalType } from '../types';
import { ProcessSection } from './ProcessSection';
import { FaqSection } from './FaqSection';

interface ProcessPageProps {
  onOpenModal: (modal: ModalType) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenModal }) => {
  return (
    <div className="w-full min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] pt-36 pb-12 transition-colors duration-300">
      {/* Hero Header */}
      <div className="w-full max-w-[1800px] mx-auto px-8 md:px-12 global-mobile-container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="max-w-4xl"
        >
          <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest block mb-4">
            PAGE 02 / HOW WE WORK
          </span>
          <h1 className="font-headline font-bold text-[var(--text-primary)] text-[clamp(2.8rem,7vw,6rem)] leading-[0.9] tracking-[-0.03em] mb-6">
            How we transform outdated websites.
          </h1>
          <p className="text-[var(--text-muted)] text-[16px] md:text-[18px] leading-[1.6] max-w-2xl">
            A simple, transparent 3-step process designed to give real estate firms across the USA an online flagship in 7 days.
          </p>
        </motion.div>
      </div>

      {/* Process Section */}
      <ProcessSection />

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
};


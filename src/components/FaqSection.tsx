import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FAQS } from '../data';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  // Split FAQs into 2 columns for desktop
  const col1 = FAQS.slice(0, 4);
  const col2 = FAQS.slice(4);

  return (
    <section id="faq" className="relative w-full bg-[var(--bg-primary)] text-[var(--text-primary)] py-28 md:py-40 border-t border-[var(--border-color)] transition-colors duration-300">
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
            Frequently asked questions.
          </h2>
        </motion.div>

        {/* 2-Column Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Column 1 */}
          <div className="space-y-4">
            {col1.map((faq, idx) => {
              const globalIdx = idx;
              const isOpen = openIdx === globalIdx;
              return (
                <div
                  key={globalIdx}
                  className="bg-[var(--surface-card)] border border-[var(--border-color)] rounded-[20px] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(globalIdx)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 cursor-pointer hover:opacity-85 transition-opacity"
                  >
                    <span className="font-headline font-semibold text-[17px] text-[var(--text-primary)] leading-snug">
                      {faq.question}
                    </span>
                    <span className="text-[var(--text-primary)] text-xl font-mono shrink-0 ml-2">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-[var(--text-muted)] text-[14px] leading-relaxed border-t border-[var(--border-color)] pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            {col2.map((faq, idx) => {
              const globalIdx = idx + 4;
              const isOpen = openIdx === globalIdx;
              return (
                <div
                  key={globalIdx}
                  className="bg-[var(--surface-card)] border border-[var(--border-color)] rounded-[20px] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(globalIdx)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 cursor-pointer hover:opacity-85 transition-opacity"
                  >
                    <span className="font-headline font-semibold text-[17px] text-[var(--text-primary)] leading-snug">
                      {faq.question}
                    </span>
                    <span className="text-[var(--text-primary)] text-xl font-mono shrink-0 ml-2">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-[var(--text-muted)] text-[14px] leading-relaxed border-t border-[var(--border-color)] pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { PRICING_PLANS } from '../data';
import { ModalType } from '../types';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
  onOpenModal: (modal: ModalType) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan, onOpenModal }) => {
  return (
    <section id="pricing" className="relative w-full bg-[var(--bg-primary)] text-[var(--text-primary)] py-28 md:py-40 border-t border-[var(--border-color)] overflow-hidden transition-colors duration-300">
      {/* Grayscale vignette (soft radial glow) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(150,150,150,0.08)_0%,_transparent_60%)] pointer-events-none" />

      <div className="w-full max-w-[1800px] mx-auto px-8 md:px-12 global-mobile-container relative z-10">
        
        {/* Left-aligned Headline */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="mb-16 md:mb-20"
        >
          <h2 className="font-headline font-bold text-[var(--text-primary)] text-[clamp(3.2rem,7vw,6rem)] leading-[0.9] tracking-[-0.03em]">
            Choose your plan.
          </h2>
        </motion.div>

        {/* Card Grid: 3 cards with 40px gap on mobile */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-[40px] md:gap-8">
          {PRICING_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className={`pricing-card bg-[var(--surface-card)] rounded-[24px] p-8 md:p-10 border ${
                plan.popular ? 'border-[var(--text-primary)]' : 'border-[var(--border-color)]'
              } relative flex flex-col justify-between hover:border-[var(--text-muted)] transition-all duration-300 shadow-xl`}
            >
              <div>
                {/* Header Row with Title and optional Popular tag */}
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-headline font-bold text-[var(--text-primary)] text-[24px]">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <span className="bg-[var(--cta-bg)] text-[var(--cta-text)] text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-3.5 mb-10 border-t border-[var(--border-color)] pt-6">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <span className="text-[var(--text-primary)] font-bold text-xs mt-1">―</span>
                      <p className="text-[var(--text-muted)] text-[14px] leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button: NO PRICES */}
              <button
                onClick={() => {
                  onSelectPlan(plan.name);
                  onOpenModal('contact');
                }}
                className={`w-full py-4 rounded-full text-[15px] font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-[var(--cta-bg)] text-[var(--cta-text)] hover:opacity-90 shadow-lg'
                    : 'bg-[var(--bg-primary)] text-[var(--text-primary)] hover:bg-[var(--surface-card)] border border-[var(--border-color)]'
                }`}
              >
                <span>Request quote</span>
                <span>→</span>
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

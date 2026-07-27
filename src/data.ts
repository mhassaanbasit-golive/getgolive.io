import { CaseStudy, ServiceDetail, PricingPlan } from './types';

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'bellview',
    title: 'Bellview Realty',
    subtitle: 'Commercial & Luxury Real Estate',
    category: 'Real Estate Portfolio',
    client: 'Bellview Realty Group',
    year: '2026',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    metrics: [
      { label: 'Inquiry Rate Increase', value: '+340%' },
      { label: 'Avg Deal Size', value: '$2.8M' },
      { label: 'Page Load Speed', value: '0.4s' }
    ],
    challenge: 'Bellview operated with a 10-year-old static portal that failed to capture commercial buyers and presented property portfolios passively.',
    solution: 'Engineered an ultra-minimalist, high-contrast digital showcase with automated AI qualification for investor inquiries.',
    result: 'Transformed Bellview into a modern lead system within 7 days, generating $14M in qualified pipeline.',
    websiteUrl: 'https://bellview-realty.example.com'
  },
  {
    id: 'vanguard',
    title: 'Vanguard Estates',
    subtitle: 'Residential & Multi-Family Real Estate',
    category: 'Real Estate Portfolio',
    client: 'Vanguard Real Estate',
    year: '2026',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop',
    metrics: [
      { label: 'Buyer Lead Conversion', value: '+215%' },
      { label: 'Response Turnaround', value: '< 1 min' },
      { label: 'Inbound Growth', value: '4.2x' }
    ],
    challenge: 'Vanguard depended entirely on manual phone inquiries and outdated PDF spec sheets for multi-million dollar listings.',
    solution: 'Designed a high-conversion digital flagship paired with an AI listing assistant that answers buyer questions 24/7.',
    result: 'Reduced sales cycle length by 65% while tripling inbound digital buyer leads without increasing headcount.',
    websiteUrl: 'https://vanguard-estates.example.com'
  }
];

export const SERVICES: ServiceDetail[] = [
  {
    id: 'custom-design',
    title: 'Custom Design',
    tagline: 'Modern UI using your existing brand colors.',
    description: 'Bespoke spatial and typographic redesign adapting strictly to your company logo and custom color palette.',
    deliverables: [
      'Tailored brand color integration',
      'High-contrast typography hierarchy',
      'Mobile-first responsive fluid layouts',
      'Apple-style glassmorphism details'
    ]
  },
  {
    id: 'ai-concierge',
    title: 'AI Concierge',
    tagline: 'Trained on your listings & market data.',
    description: 'Deploy a 24/7 custom AI assistant trained directly on your property inventory, pricing context, and business history.',
    deliverables: [
      'Custom fine-tuned Gemini AI agent',
      '24/7 buyer question answering',
      'Instant property spec qualification',
      'Seamless lead intake integration'
    ]
  },
  {
    id: '7-day-build',
    title: '7-Day Build',
    tagline: 'Fast delivery for premium packages.',
    description: 'Accelerated 7-day deployment timeline guaranteeing zero downtime during the transition from your legacy portal.',
    deliverables: [
      'Guaranteed 7-day turnaround',
      'Full staging inspection before DNS swap',
      '6 Months Free Hosting included',
      'Zero downtime migration'
    ]
  },
  {
    id: 'lead-gen-forms',
    title: 'Lead Gen Forms',
    tagline: 'Capture buyers and sellers effortlessly.',
    description: 'Frictionless high-converting inquiry forms like "What\'s My Home Worth?" and custom buyer lead intake flows.',
    deliverables: [
      'Instant seller valuation form',
      'MLS-linked property inquiry triggers',
      'Direct executive email notifications',
      'High-intent buyer qualification'
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'standard',
    name: 'Standard',
    price: '',
    billing: '',
    features: [
      '5 Custom Pages',
      'AI trained on your business',
      'Mobile responsive',
      '6 Months Free Hosting',
      'Property Cards linked to MLS'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '',
    billing: '',
    popular: true,
    features: [
      '10 Custom Pages',
      'Your exact brand colors applied',
      'AI trained on specific listings & pricing',
      'Apple-style animations',
      '"What\'s My Home Worth?" Lead Form',
      '6 Months Free Hosting',
      'Fully delivered in 7 Days'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '',
    billing: '',
    features: [
      'Unlimited Custom Pages',
      'Deep AI Training (Business context)',
      'Custom Property Search Filters',
      'Priority Setup & Support',
      '6 Months Free Hosting',
      'Fully delivered in 7 Days'
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Assets & Discovery.',
    description: 'We take your old site, current listings, and business history.'
  },
  {
    stepNumber: '02',
    title: 'Build & AI Training.',
    description: 'We design 10 premium pages using your custom colors and train your AI assistant.'
  },
  {
    stepNumber: '03',
    title: 'Handoff & Hosting.',
    description: 'You get 6 months of free hosting. We transfer your domain. Your new site goes live.'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Do you use our existing brand colors?',
    answer: 'Yes. We adapt to your logo and custom color palette.'
  },
  {
    question: 'What does the AI assistant do?',
    answer: 'It answers buyer questions 24/7 using data we train on your specific listings.'
  },
  {
    question: 'How do I update my listings later?',
    answer: 'Email us new listings. We train the AI and update the property cards for a simple one-off fee.'
  },
  {
    question: 'What happens after the 6 months of free hosting?',
    answer: 'You can continue hosting with us for a low yearly fee, or migrate to a provider of your choice.'
  },
  {
    question: 'How fast will my new site be delivered?',
    answer: 'Standard: 7-10 days. Premium/Enterprise: Guaranteed 7 days.'
  },
  {
    question: 'Do you lock me into a monthly retainer?',
    answer: 'No. We do a one-time build and charge simple one-off fees for future updates.'
  },
  {
    question: 'Will I lose my old website?',
    answer: 'No. We build your new site separately and only swap the DNS when you approve it.'
  }
];


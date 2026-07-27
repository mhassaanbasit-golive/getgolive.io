export type PageType = 'home' | 'process';

export type ModalType = 'menu' | 'concept' | 'contact' | 'case-study' | 'service' | null;

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  year: string;
  heroImage: string;
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  result: string;
  websiteUrl: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  billing: string;
  popular?: boolean;
  features: string[];
}

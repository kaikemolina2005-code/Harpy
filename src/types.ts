export interface SolutionNode {
  id: number;
  icon: string;
  title: string;
  cat: string;
  desc: string;
  energy: number;
  status: 'CORE' | 'ACTIVE' | 'GROWTH' | 'COMPLETE';
  relatedIds: number[];
}

export interface MetricCard {
  id: string;
  label: string;
  val: string;
  change: string;
  isUp: boolean;
}

export interface Testimonial {
  id: number;
  stars: number;
  text: string;
  result: string;
  colorType: 'green' | 'orange' | 'red';
  author: string;
  role: string;
  avatarText: string;
}

export interface FAQItem {
  id: number;
  q: string;
  a: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tag: string;
  price: string;
  period: string;
  benefits: string[];
}

import {
  Palette,
  Code,
  Megaphone,
  Smartphone,
  TrendingUp,
  Shield,
} from 'lucide-react';

export const homeContent = {
  services: [
    {
      icon: Palette,
      title: 'Brand Strategy & Design',
      description: 'Create a memorable brand identity that resonates with your audience.',
      features: [
        'Brand Identity Design',
        'Logo & Visual Systems',
        'Brand Guidelines',
        'Marketing Collateral',
      ],
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Build fast, scalable, and secure web applications tailored to your needs.',
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'CMS Development',
        'API Integration',
      ],
    },
    {
      icon: Smartphone,
      title: 'UI/UX Design',
      description: 'Design intuitive interfaces that delight users and drive engagement.',
      features: [
        'User Research & Testing',
        'Wireframing & Prototyping',
        'Interface Design',
        'Design Systems',
      ],
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Reach your target audience with data-driven marketing strategies.',
      features: [
        'SEO Optimization',
        'Content Marketing',
        'Social Media Strategy',
        'PPC Campaigns',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Growth Strategy',
      description: 'Scale your business with proven growth tactics and analytics.',
      features: [
        'Market Analysis',
        'Conversion Optimization',
        'Analytics & Reporting',
        'A/B Testing',
      ],
    },
    {
      icon: Shield,
      title: 'Maintenance & Support',
      description: 'Keep your digital assets running smoothly with ongoing support.',
      features: [
        'Technical Support',
        'Security Updates',
        'Performance Monitoring',
        'Content Updates',
      ],
    },
  ],

  projects: [
    {
      title: 'TechFlow Platform',
      description: 'A modern SaaS platform for project management and team collaboration.',
      image: '/assets/generated/portfolio-01.dim_800x600.png',
      imageAlt: 'TechFlow Platform interface showcasing project management dashboard',
      tags: ['Web App', 'UI/UX', 'Development'],
    },
    {
      title: 'EcoMarket Rebrand',
      description: 'Complete brand refresh for a sustainable e-commerce marketplace.',
      image: '/assets/generated/portfolio-02.dim_800x600.png',
      imageAlt: 'EcoMarket brand identity and e-commerce website design',
      tags: ['Branding', 'E-commerce', 'Marketing'],
    },
    {
      title: 'FinanceHub App',
      description: 'Mobile-first financial management app with real-time analytics.',
      image: '/assets/generated/portfolio-03.dim_800x600.png',
      imageAlt: 'FinanceHub mobile application interface with financial analytics',
      tags: ['Mobile', 'FinTech', 'UI/UX'],
    },
  ],

  testimonials: [
    {
      quote:
        'Working with Renev was a game-changer for our business. They transformed our outdated website into a modern, high-converting platform that our customers love.',
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc',
      avatar: '/assets/generated/avatar-01.dim_256x256.png',
      avatarAlt: 'Portrait of Sarah Johnson, CEO of TechStart Inc',
    },
    {
      quote:
        'The team at Renev brought our vision to life with incredible attention to detail. Their strategic approach and creative solutions exceeded our expectations.',
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'GrowthLabs',
      avatar: '/assets/generated/avatar-02.dim_256x256.png',
      avatarAlt: 'Portrait of Michael Chen, Marketing Director at GrowthLabs',
    },
    {
      quote:
        'Professional, responsive, and results-driven. Renev helped us increase our online conversions by 150% in just three months. Highly recommended!',
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'EcoMarket',
      avatar: '/assets/generated/avatar-03.dim_256x256.png',
      avatarAlt: 'Portrait of Emily Rodriguez, Founder of EcoMarket',
    },
  ],

  stats: [
    { value: '250+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Team Members' },
    { value: '8+', label: 'Years Experience' },
  ],
};

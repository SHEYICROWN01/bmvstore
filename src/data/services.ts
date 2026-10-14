import { ServiceItem, ProductReview } from '../types';

export const services: ServiceItem[] = [
  {
    id: 'solar-install',
    title: 'Solar Installation',
    subtitle: 'Residential & Commercial',
    description:
      'Turnkey engineering design, roof structural mounting, electrical wiring, and commissioning by certified BMV solar engineers with 100% safety compliance.',
    icon: 'sun',
    popularFor: 'Homes, duplexes, schools, petrol stations, cold rooms'
  },
  {
    id: 'cctv-install',
    title: 'CCTV Installation',
    subtitle: 'Homes, Offices & Businesses',
    description:
      'High-definition IP surveillance deployment, NVR setup, conduit cabling, remote mobile streaming configuration, and staff training.',
    icon: 'shield',
    popularFor: 'Gated estates, shopping malls, corporate headquarters'
  },
  {
    id: 'repair-maint',
    title: 'Repair & Maintenance',
    subtitle: 'Inverters, Batteries, CCTV',
    description:
      'Component-level inverter diagnostics, battery capacity testing, solar panel chemical washing, and preventative health audits.',
    icon: 'wrench',
    popularFor: 'Routine system checkups, inverter error resolution'
  },
  {
    id: 'system-consult',
    title: 'System Consultation',
    subtitle: 'Get expert advice',
    description:
      'Comprehensive energy audits, peak load calculations, roof orientation analysis, and customized sizing proposals with exact ROI projections.',
    icon: 'clipboard-check',
    popularFor: 'New building developments, energy cost reduction'
  }
];

export const customerTestimonials: ProductReview[] = [
  {
    id: 'test-1',
    author: 'Adebayo O.',
    location: 'Lagos (Victoria Island)',
    rating: 5,
    date: '2 weeks ago',
    comment:
      'Excellent service and quality products. My 5kW Deye solar system installed by BMV has been working perfectly. Zero noise, uninterrupted AC and fridge power, and my monthly fuel expense dropped by 90%!',
    verified: true
  },
  {
    id: 'test-2',
    author: 'Fatima S.',
    location: 'Abuja (Maitama)',
    rating: 5,
    date: '1 month ago',
    comment:
      'Professional installation and great customer support. Highly recommended! The technicians arrived on schedule with proper safety harnesses and completed the panels and lithium battery setup in one day.',
    verified: true
  },
  {
    id: 'test-3',
    author: 'Emeka T.',
    location: 'Port Harcourt (GRA)',
    rating: 5,
    date: '3 weeks ago',
    comment:
      'I love my CCTV system from BMV. Crystal clear 4MP night vision and very easy to monitor from my mobile phone when traveling abroad. Truly dependable security.',
    verified: true
  }
];

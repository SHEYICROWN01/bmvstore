import React from 'react';
import { Sun, Shield, Wrench, Headphones, Truck, ShieldCheck, HelpCircle } from 'lucide-react';

const desktopBenefits = [
  {
    icon: ShieldCheck,
    title: '100% Genuine Products',
    subtitle: 'From Trusted Brands',
    color: 'bg-red-50 text-[#F20D25]'
  },
  {
    icon: Wrench,
    title: 'Professional Installation',
    subtitle: 'By Certified Experts',
    color: 'bg-blue-50 text-[#082B5B]'
  },
  {
    icon: Headphones,
    title: 'Warranty & Support',
    subtitle: 'Your Peace of Mind',
    color: 'bg-red-50 text-[#F20D25]'
  },
  {
    icon: Truck,
    title: 'Fast & Reliable Delivery',
    subtitle: 'Nationwide in Nigeria',
    color: 'bg-blue-50 text-[#082B5B]'
  },
  {
    icon: HelpCircle,
    title: 'Expert Consultation',
    subtitle: 'Free Advice & Assessment',
    color: 'bg-red-50 text-[#F20D25]'
  }
];

// 4 Mobile Benefit items matching Reference Image 3 (Screen 1)
const mobileBenefits = [
  { icon: Sun, label: 'Clean\nEnergy' },
  { icon: Shield, label: 'Reliable\nSecurity' },
  { icon: Wrench, label: 'Expert\nInstallation' },
  { icon: Headphones, label: 'After-Sales\nSupport' }
];

export const TrustBenefitsStrip: React.FC = () => {
  return (
    <div className="bg-white border-b border-[#E1E7EF] py-3.5 sm:py-6 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile View: 4-Column Icon Grid (Matching Reference Image 3 Screen 1) */}
        <div className="grid grid-cols-4 gap-2 sm:hidden text-center">
          {mobileBenefits.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-2 rounded-xl bg-blue-50/60 border border-blue-100/70"
              >
                <div className="w-8 h-8 rounded-full bg-white text-[#082B5B] flex items-center justify-center shadow-xs mb-1.5">
                  <IconComp className="w-4 h-4 text-[#082B5B]" />
                </div>
                <span className="text-[10px] font-bold text-[#082B5B] leading-tight whitespace-pre-line">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Desktop View: 5 Columns */}
        <div className="hidden sm:grid grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {desktopBenefits.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3.5 p-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div
                  className={`w-11 h-11 rounded-full ${item.color} flex items-center justify-center shrink-0 shadow-xs`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-[13px] font-bold text-[#082B5B] truncate">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 truncate mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

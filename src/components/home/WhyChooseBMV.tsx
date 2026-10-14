import React from 'react';
import { ShieldCheck, Wrench, CircleDollarSign, Truck, Headphones } from 'lucide-react';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Top Quality Products',
    description: 'From trusted global brands with full manufacturer warranties.'
  },
  {
    icon: Wrench,
    title: 'Certified Technicians',
    description: 'Precision mounting, neat cabling, and electrical safety testing.'
  },
  {
    icon: CircleDollarSign,
    title: 'Affordable Prices',
    description: 'Direct wholesale pricing and flexible packages for every budget.'
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'Fast, secure insured logistics to all 36 Nigerian states.'
  },
  {
    icon: Headphones,
    title: 'After-Sales Support',
    description: 'Dedicated technical hotline, preventive checkups, and quick repairs.'
  }
];

export const WhyChooseBMV: React.FC = () => {
  return (
    <section className="py-14 bg-[#F8FAFC] border-y border-[#E1E7EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title */}
        <div className="max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082B5B] tracking-tight">
            Why Choose BMV?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            We are committed to providing reliable solar and security solutions with excellent service.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {pillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-slate-200/80 hover:border-[#082B5B]/30 hover:shadow-md transition-all flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 text-[#082B5B] group-hover:bg-[#082B5B] group-hover:text-white flex items-center justify-center transition-colors mb-3.5 shadow-xs">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-[#082B5B] group-hover:text-[#F20D25] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

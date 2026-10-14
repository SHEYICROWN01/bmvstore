import React from 'react';
import { brands } from '../../data/brands';

export const BrandPartners: React.FC = () => {
  return (
    <section className="py-10 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Our Official Technology Partners & Brands
          </span>
        </div>

        {/* Brand Logos Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="h-14 px-3 rounded-lg border border-slate-100 hover:border-slate-300 bg-slate-50/50 hover:bg-white flex flex-col items-center justify-center transition-all group"
            >
              <span className="text-xs sm:text-sm font-black tracking-tight text-slate-700 group-hover:text-[#082B5B] transition-colors">
                {brand.name}
              </span>
              <span className="text-[9px] text-slate-400 font-medium truncate max-w-full">
                {brand.specialty.split(' ')[0]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

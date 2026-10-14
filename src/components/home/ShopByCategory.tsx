import React from 'react';
import { ArrowRight } from 'lucide-react';
import { categories } from '../../data/categories';
import { useShop } from '../../context/ShopContext';

export const ShopByCategory: React.FC = () => {
  const { navigateToCategory, setSelectedCategoryFilter, setCurrentPage } = useShop();

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-5 sm:mb-8 pb-2 sm:pb-3 border-b border-slate-100">
          <div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#082B5B] tracking-tight">
              Shop by Category
            </h2>
            <p className="hidden sm:block text-xs sm:text-sm text-slate-500 mt-1">
              Explore our complete range of clean energy and intelligent surveillance systems
            </p>
          </div>

          <button
            onClick={() => {
              setSelectedCategoryFilter('all');
              setCurrentPage('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1 text-xs sm:text-sm font-bold text-[#082B5B] hover:text-[#F20D25] transition-colors group cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Category Grid: 3 cols on mobile (Reference Image 3 Screen 1), 5 cols on desktop */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-4 lg:gap-5">
          {categories.slice(0, 9).map((category) => (
            <div
              key={category.id}
              onClick={() => navigateToCategory(category.slug)}
              className="group bg-[#F8FAFC] hover:bg-white border border-[#E2E8F0] hover:border-[#082B5B]/30 rounded-xl p-2 sm:p-3.5 flex flex-col items-center text-center transition-all duration-200 hover:shadow-md cursor-pointer"
            >
              {/* Image Box */}
              <div className="w-full aspect-square rounded-lg bg-white p-1.5 sm:p-2 mb-1.5 sm:mb-2.5 overflow-hidden flex items-center justify-center border border-slate-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                  loading="lazy"
                />
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-[11px] sm:text-sm font-bold text-[#082B5B] group-hover:text-[#F20D25] transition-colors line-clamp-1 leading-tight">
                {category.name}
              </h3>
              <p className="hidden sm:block text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                {category.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

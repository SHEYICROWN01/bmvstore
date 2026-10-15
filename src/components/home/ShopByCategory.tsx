import React from 'react';
import { ArrowRight } from 'lucide-react';
import { categories } from '../../data/categories';
import { useShop } from '../../context/ShopContext';
import { SafeImage } from '../common/SafeImage';

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

        {/* Small Circular Categories Grid: 4 cols on mobile, 5 on tablet, 10 on desktop */}
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-x-2 gap-y-3.5 sm:gap-x-4 sm:gap-y-5 lg:gap-4 items-start justify-items-center">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => navigateToCategory(category.slug)}
              className="group flex flex-col items-center text-center cursor-pointer p-0.5 transition-transform duration-200 active:scale-95 w-full max-w-[85px] sm:max-w-[105px]"
            >
              {/* Circular Avatar / Image Container */}
              <div className="w-14 h-14 min-[375px]:w-16 min-[375px]:h-16 sm:w-20 sm:h-20 rounded-full bg-slate-50 border-2 border-slate-200 group-hover:border-[#F20D25] group-hover:bg-red-50/20 p-2 sm:p-2.5 overflow-hidden flex items-center justify-center transition-all duration-200 shadow-xs group-hover:shadow-md group-hover:scale-105 shrink-0">
                <SafeImage
                  src={category.image}
                  alt={category.name}
                  productCategory={category.slug}
                  className="w-full h-full object-contain rounded-full transition-transform duration-200"
                  loading="lazy"
                />
              </div>

              {/* Category Name */}
              <span className="text-[10px] min-[375px]:text-[11px] sm:text-xs font-semibold text-[#082B5B] group-hover:text-[#F20D25] transition-colors leading-tight text-center mt-1.5 line-clamp-2 w-full break-words">
                {category.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

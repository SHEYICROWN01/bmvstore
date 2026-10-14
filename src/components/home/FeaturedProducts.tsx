import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { products } from '../../data/products';
import { ProductCard } from '../products/ProductCard';
import { useShop } from '../../context/ShopContext';

type TabCategory = 'all' | 'solar-panels' | 'inverters' | 'batteries' | 'cctv-cameras' | 'accessories' | 'security-systems';

const filterTabs: { id: TabCategory; label: string }[] = [
  { id: 'all', label: 'All Products' },
  { id: 'solar-panels', label: 'Solar Panels' },
  { id: 'inverters', label: 'Inverters' },
  { id: 'batteries', label: 'Batteries' },
  { id: 'cctv-cameras', label: 'CCTV Cameras' },
  { id: 'accessories', label: 'Accessories' },
  { id: 'security-systems', label: 'Security Systems' }
];

export const FeaturedProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabCategory>('all');
  const { setCurrentPage, setSelectedCategoryFilter } = useShop();

  const filteredProducts = activeTab === 'all'
    ? products
    : products.filter((p) => p.category === activeTab);

  return (
    <section className="py-12 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082B5B] tracking-tight">
              Featured Products
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Top rated solar equipment and high-definition surveillance systems
            </p>
          </div>

          <button
            onClick={() => {
              setSelectedCategoryFilter('all');
              setCurrentPage('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hidden sm:flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#082B5B] hover:text-[#F20D25] transition-colors group cursor-pointer"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Filter Tabs Bar (horizontal scrollable on mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs sm:text-[13px] font-bold rounded-full whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#F20D25] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-[#082B5B] hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid: 5 cols on 2xl, 4 cols on lg, 3 cols on md, 2 cols on sm & mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-3.5 sm:gap-5">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 text-center sm:hidden">
          <button
            onClick={() => {
              setSelectedCategoryFilter('all');
              setCurrentPage('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full py-3 bg-white border border-slate-300 text-xs font-bold text-[#082B5B] rounded-lg shadow-xs"
          >
            View All Products in Catalog →
          </button>
        </div>

      </div>
    </section>
  );
};

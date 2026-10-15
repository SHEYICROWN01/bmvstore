import React, { useState, useRef, useEffect } from 'react';
import { Menu, ChevronDown, FileText, ChevronRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { categories } from '../../data/categories';
import { SafeImage } from '../common/SafeImage';

export const Navbar: React.FC = () => {
  const {
    currentPage,
    setCurrentPage,
    navigateToCategory,
    setQuoteModalOpen,
    setSelectedCategoryFilter
  } = useShop();

  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCategoriesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-[#082B5B] text-white border-b border-blue-900/60 hidden lg:block relative z-30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-13">
          
          {/* Left: "All Categories" Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              className="h-13 px-6 bg-[#F20D25] hover:bg-[#D6091E] flex items-center gap-3 font-bold text-sm tracking-wide transition-colors cursor-pointer select-none"
            >
              <Menu className="w-4 h-4" />
              <span>All Categories</span>
              <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${categoriesOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {categoriesOpen && (
              <div className="absolute top-full left-0 w-72 bg-white text-slate-800 rounded-b-xl shadow-2xl border border-slate-100 py-2 divide-y divide-slate-100 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      navigateToCategory(cat.slug);
                      setCategoriesOpen(false);
                    }}
                    className="w-full text-left px-4 py-2.5 hover:bg-blue-50/70 hover:text-[#082B5B] flex items-center justify-between text-xs font-semibold transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <SafeImage src={cat.image} alt={cat.name} productCategory={cat.slug} className="w-6 h-6 object-cover rounded shadow-xs" />
                      <span>{cat.name}</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#F20D25] group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-1 xl:space-x-2 text-[13.5px] font-medium text-slate-100">
            <button
              onClick={() => {
                setCurrentPage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-3 py-2 rounded-md transition-colors relative cursor-pointer ${
                currentPage === 'home'
                  ? 'text-white font-bold'
                  : 'hover:text-blue-200 hover:bg-blue-900/40'
              }`}
            >
              Home
              {currentPage === 'home' && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#F20D25] rounded-full" />
              )}
            </button>

            <button
              onClick={() => {
                setSelectedCategoryFilter('all');
                setCurrentPage('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-3 py-2 rounded-md transition-colors flex items-center gap-1 cursor-pointer ${
                currentPage === 'shop'
                  ? 'text-white font-bold'
                  : 'hover:text-blue-200 hover:bg-blue-900/40'
              }`}
            >
              <span>Shop</span>
              <ChevronDown className="w-3.5 h-3.5 text-blue-300" />
            </button>

            <button
              onClick={() => {
                navigateToCategory('solar-panels');
              }}
              className="px-3 py-2 rounded-md hover:text-blue-200 hover:bg-blue-900/40 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Solar Solutions</span>
              <ChevronDown className="w-3.5 h-3.5 text-blue-300" />
            </button>

            <button
              onClick={() => {
                navigateToCategory('cctv-cameras');
              }}
              className="px-3 py-2 rounded-md hover:text-blue-200 hover:bg-blue-900/40 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>CCTV & Security</span>
              <ChevronDown className="w-3.5 h-3.5 text-blue-300" />
            </button>

            <button
              onClick={() => {
                setCurrentPage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-3 py-2 rounded-md transition-colors flex items-center gap-1 cursor-pointer ${
                currentPage === 'services'
                  ? 'text-white font-bold'
                  : 'hover:text-blue-200 hover:bg-blue-900/40'
              }`}
            >
              <span>Installation & Services</span>
              <ChevronDown className="w-3.5 h-3.5 text-blue-300" />
            </button>

            <button
              onClick={() => {
                setSelectedCategoryFilter('all');
                setCurrentPage('shop');
              }}
              className="px-3 py-2 rounded-md hover:text-blue-200 hover:bg-blue-900/40 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Brands</span>
              <ChevronDown className="w-3.5 h-3.5 text-blue-300" />
            </button>

            <button
              onClick={() => {
                setCurrentPage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
                currentPage === 'about'
                  ? 'text-white font-bold'
                  : 'hover:text-blue-200 hover:bg-blue-900/40'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
                currentPage === 'contact'
                  ? 'text-white font-bold'
                  : 'hover:text-blue-200 hover:bg-blue-900/40'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Right Action: Red "Get a Quote" */}
          <button
            onClick={() => setQuoteModalOpen(true)}
            className="h-9 px-4.5 bg-[#F20D25] hover:bg-[#D6091E] text-white text-xs font-bold rounded flex items-center gap-2 transition-transform active:scale-95 shadow-sm cursor-pointer shrink-0"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Get a Quote</span>
          </button>

        </div>
      </div>
    </nav>
  );
};

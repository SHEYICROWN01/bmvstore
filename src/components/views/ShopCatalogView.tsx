import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, ArrowUpDown, ChevronRight, X } from 'lucide-react';
import { products } from '../../data/products';
import { categories } from '../../data/categories';
import { brands } from '../../data/brands';
import { ProductCard } from '../products/ProductCard';
import { useShop } from '../../context/ShopContext';

export const ShopCatalogView: React.FC = () => {
  const {
    selectedCategoryFilter,
    setSelectedCategoryFilter,
    searchQuery,
    setSearchQuery,
    setCurrentPage
  } = useShop();

  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sidebarOpenMobile, setSidebarOpenMobile] = useState(false);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (selectedCategoryFilter !== 'all') {
          if (selectedCategoryFilter === 'solar-panels' && p.category !== 'solar-panels') return false;
          if (selectedCategoryFilter === 'inverters' && p.category !== 'inverters') return false;
          if (selectedCategoryFilter === 'batteries' && p.category !== 'batteries') return false;
          if (selectedCategoryFilter === 'cctv-cameras' && p.category !== 'cctv-cameras') return false;
          if (selectedCategoryFilter === 'accessories' && p.category !== 'accessories') return false;
          if (selectedCategoryFilter === 'security-systems' && p.category !== 'security-systems') return false;
          if (selectedCategoryFilter === 'solar-kits' && p.category !== 'security-systems') return false;
        }

        // Brand filter
        if (selectedBrand !== 'all') {
          if (!p.brand.toLowerCase().includes(selectedBrand.toLowerCase())) return false;
        }

        // Search text
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = p.name.toLowerCase().includes(q);
          const matchBrand = p.brand.toLowerCase().includes(q);
          const matchCategory = p.categoryLabel.toLowerCase().includes(q);
          if (!matchName && !matchBrand && !matchCategory) return false;
        }

        // In Stock
        if (inStockOnly && !p.inStock) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // 'featured' retains natural order
      });
  }, [selectedCategoryFilter, selectedBrand, searchQuery, inStockOnly, sortBy]);

  return (
    <div className="bg-[#FAFBFD] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <button
            onClick={() => setCurrentPage('home')}
            className="hover:text-[#082B5B] transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#082B5B] font-bold">Shop Catalog</span>
          {selectedCategoryFilter !== 'all' && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="capitalize font-bold text-[#F20D25]">{selectedCategoryFilter.replace('-', ' ')}</span>
            </>
          )}
        </nav>

        {/* Page Title & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#082B5B] tracking-tight">
              Solar & Security Catalogue
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Showing {filteredProducts.length} verified products available for immediate delivery in Nigeria
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile Filter Trigger */}
            <button
              onClick={() => setSidebarOpenMobile(true)}
              className="lg:hidden h-10 px-4 bg-white border border-slate-300 rounded-lg text-xs font-bold text-[#082B5B] flex items-center gap-2 shadow-xs"
            >
              <Filter className="w-4 h-4 text-[#F20D25]" />
              <span>Filters</span>
            </button>

            {/* Sorter */}
            <div className="flex items-center gap-2 bg-white border border-slate-300 rounded-lg px-3 h-10 text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent font-semibold text-slate-700 focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Catalog Layout: Desktop Sidebar + Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-6 shadow-xs">
              
              {/* Active search filter badge */}
              {searchQuery && (
                <div className="p-3 bg-red-50 rounded-xl flex items-center justify-between text-xs text-[#F20D25]">
                  <span>Search: "{searchQuery}"</span>
                  <button onClick={() => setSearchQuery('')} className="font-bold">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Categories */}
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Categories
                </h3>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedCategoryFilter('all')}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer flex justify-between ${
                      selectedCategoryFilter === 'all'
                        ? 'bg-[#082B5B] text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span>All Categories</span>
                    <span>({products.length})</span>
                  </button>
                  {categories.slice(0, 6).map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCategoryFilter(c.slug)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer flex justify-between ${
                        selectedCategoryFilter === c.slug
                          ? 'bg-[#082B5B] text-white'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <span>{c.name}</span>
                      <span className="font-mono text-slate-400">({c.itemCount})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Brands Filter */}
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Manufacturers
                </h3>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedBrand('all')}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      selectedBrand === 'all'
                        ? 'bg-red-50 text-[#F20D25]'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    All Brands
                  </button>
                  {brands.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBrand(b.name)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                        selectedBrand === b.name
                          ? 'bg-red-50 text-[#F20D25]'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {b.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* In Stock Toggle */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700">In Stock Items Only</span>
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="rounded text-[#082B5B] focus:ring-0 cursor-pointer w-4 h-4"
                />
              </div>

              {/* Reset Filters */}
              {(selectedCategoryFilter !== 'all' || selectedBrand !== 'all' || inStockOnly || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategoryFilter('all');
                    setSelectedBrand('all');
                    setInStockOnly(false);
                    setSearchQuery('');
                  }}
                  className="w-full py-2 border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 rounded-lg cursor-pointer"
                >
                  Reset All Filters
                </button>
              )}

            </div>
          </aside>

          {/* Product Cards Grid */}
          <main className="lg:col-span-9">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-5">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
                <p className="text-lg font-bold text-[#082B5B]">No products match your criteria</p>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try clearing some filters or searching for terms like "Inverter", "Solar Panel", or "CCTV".
                </p>
                <button
                  onClick={() => {
                    setSelectedCategoryFilter('all');
                    setSelectedBrand('all');
                    setInStockOnly(false);
                    setSearchQuery('');
                  }}
                  className="px-6 py-2.5 bg-[#F20D25] text-white text-xs font-bold rounded-lg cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </main>

        </div>

      </div>
    </div>
  );
};

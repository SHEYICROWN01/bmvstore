import React, { useState, useRef, useEffect } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { BmvLogo } from '../common/BmvLogo';
import { products } from '../../data/products';

export const Header: React.FC = () => {
  const {
    setCurrentPage,
    cartCount,
    cartSubtotal,
    wishlistCount,
    setCartDrawerOpen,
    searchQuery,
    setSearchQuery,
    navigateToProduct,
    setMobileMenuOpen,
    setSelectedCategoryFilter
  } = useShop();

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);

  // Filter products for live preview dropdown
  const filteredPreview = searchQuery.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchFocused(false);
      setMobileSearchOpen(false);
      setCurrentPage('shop');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const formatNaira = (amount: number) => {
    return '₦' + amount.toLocaleString('en-NG');
  };

  return (
    <header className="bg-white border-b border-[#E1E7EF] sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5">
        
        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
          
          {/* Mobile Menu Button + Brand Logo */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-slate-700 hover:text-[#082B5B] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div onClick={() => setCurrentPage('home')}>
              <BmvLogo size="sm" className="sm:hidden" />
              <BmvLogo size="md" className="hidden sm:flex" />
            </div>
          </div>

          {/* Desktop Search Bar */}
          <div ref={searchContainerRef} className="hidden md:flex flex-1 max-w-2xl relative">
            <form onSubmit={handleSearchSubmit} className="w-full flex items-center">
              <div className="relative w-full flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  placeholder="Search for solar panels, inverters, batteries, CCTV cameras..."
                  className="w-full h-11 pl-4 pr-12 text-sm text-[#17243A] bg-white border border-[#CBD5E1] rounded-l-full focus:outline-none focus:border-[#082B5B] focus:ring-1 focus:ring-[#082B5B] transition-all placeholder:text-slate-400"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="h-11 px-6 bg-[#F20D25] hover:bg-[#D6091E] text-white rounded-r-full font-medium flex items-center justify-center transition-colors shadow-sm shrink-0 cursor-pointer"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            {/* Live Autocomplete Dropdown */}
            {isSearchFocused && searchQuery.trim() && (
              <div className="absolute top-12 left-0 right-0 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 overflow-hidden divide-y divide-slate-100">
                {filteredPreview.length > 0 ? (
                  <>
                    <div className="p-2 text-xs font-semibold text-slate-400 uppercase tracking-wider bg-slate-50">
                      Matching Products ({filteredPreview.length})
                    </div>
                    {filteredPreview.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          navigateToProduct(item.id);
                          setIsSearchFocused(false);
                        }}
                        className="flex items-center gap-3 p-3 hover:bg-blue-50/50 cursor-pointer transition-colors"
                      >
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="w-12 h-12 object-contain bg-slate-50 rounded-lg p-1 border border-slate-100"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-slate-500 font-medium">{item.brand}</p>
                          <p className="text-sm font-semibold text-[#082B5B] truncate">{item.name}</p>
                          <p className="text-xs font-bold text-[#F20D25]">{formatNaira(item.price)}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                      </div>
                    ))}
                    <div
                      onClick={() => {
                        setIsSearchFocused(false);
                        setCurrentPage('shop');
                      }}
                      className="p-3 text-center text-xs font-bold text-[#082B5B] hover:bg-slate-50 cursor-pointer"
                    >
                      View all results in Shop catalog →
                    </div>
                  </>
                ) : (
                  <div className="p-6 text-center text-sm text-slate-500">
                    No products found for "{searchQuery}". Try searching for <span className="font-semibold text-[#082B5B]">Inverter</span>, <span className="font-semibold text-[#082B5B]">Battery</span>, or <span className="font-semibold text-[#082B5B]">CCTV</span>.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Action Icons (Desktop & Mobile - matches Reference Image 3: Search, User, Cart) */}
          <div className="flex items-center gap-1.5 sm:gap-3 lg:gap-6 shrink-0">
            
            {/* Mobile Search Toggle Button */}
            <button
              onClick={() => {
                setMobileSearchOpen(!mobileSearchOpen);
                if (!mobileSearchOpen) {
                  setTimeout(() => mobileSearchInputRef.current?.focus(), 100);
                }
              }}
              className="md:hidden w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
              aria-label="Toggle search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Account / User */}
            <button
              onClick={() => setCurrentPage('contact')}
              className="flex items-center gap-2 cursor-pointer group py-1"
              aria-label="Account"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 group-hover:bg-blue-50 flex items-center justify-center text-slate-700 group-hover:text-[#082B5B] transition-colors">
                <User className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="hidden xl:flex flex-col text-left">
                <span className="text-[11px] text-slate-500 leading-tight">Account</span>
                <span className="text-xs font-bold text-[#17243A] group-hover:text-[#082B5B]">Login / Register</span>
              </div>
            </button>

            {/* Wishlist (Desktop) */}
            <button
              onClick={() => {
                setSelectedCategoryFilter('all');
                setCurrentPage('shop');
              }}
              className="hidden sm:flex items-center gap-2 cursor-pointer group py-1 relative"
              aria-label="Wishlist"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 group-hover:bg-rose-50 flex items-center justify-center text-slate-700 group-hover:text-[#F20D25] transition-colors relative">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-[#F20D25] text-white text-[10px] sm:text-[11px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">
                    {wishlistCount}
                  </span>
                )}
              </div>
              <div className="hidden xl:flex flex-col text-left">
                <span className="text-[11px] text-slate-500 leading-tight">Wishlist</span>
                <span className="text-xs font-bold text-[#17243A] group-hover:text-[#082B5B]">
                  {wishlistCount} {wishlistCount === 1 ? 'item' : 'items'}
                </span>
              </div>
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="flex items-center gap-2 cursor-pointer group py-1"
              aria-label="Cart"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-50 group-hover:bg-red-100 flex items-center justify-center text-[#F20D25] transition-colors relative">
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-[#F20D25] text-white text-[10px] sm:text-[11px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">
                  {cartCount}
                </span>
              </div>
              <div className="hidden xl:flex flex-col text-left">
                <span className="text-[11px] text-slate-500 leading-tight">Cart</span>
                <span className="text-xs font-bold text-[#082B5B] group-hover:text-[#F20D25] tabular-nums">
                  {formatNaira(cartSubtotal)}
                </span>
              </div>
            </button>
          </div>

        </div>

        {/* Mobile Search Bar (Reference Image 3: Screen 2 layout with pill input and red search button) */}
        <div className={`mt-2.5 md:hidden transition-all duration-200 ${mobileSearchOpen ? 'block' : 'hidden'}`}>
          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            <input
              ref={mobileSearchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for solar panels, inverters..."
              className="w-full h-10 pl-4 pr-11 text-xs text-[#17243A] bg-slate-50 border border-slate-300 rounded-full focus:outline-none focus:border-[#082B5B] focus:bg-white shadow-inner"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-10 text-slate-400 p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              type="submit"
              className="absolute right-1 w-8 h-8 rounded-full bg-[#F20D25] text-white flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
              aria-label="Search mobile"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

      </div>
    </header>
  );
};

import React from 'react';
import { X, ChevronRight, Phone, Mail, MessageCircle, FileText, Home, ShoppingCart, Shield, Sun, Wrench, Info, User } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { BmvLogo } from '../common/BmvLogo';
import { categories } from '../../data/categories';

export const MobileNavDrawer: React.FC = () => {
  const {
    mobileMenuOpen,
    setMobileMenuOpen,
    currentPage,
    setCurrentPage,
    navigateToCategory,
    setQuoteModalOpen,
    setSelectedCategoryFilter
  } = useShop();

  if (!mobileMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-4/5 max-w-xs bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
        {/* Top Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <BmvLogo size="sm" />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-200"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Account / Profile Access */}
        <div className="px-4 py-2.5 bg-slate-50/80 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-[#082B5B]">
              <User className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#17243A]">Account</p>
              <p className="text-[10px] text-slate-500">Sign in / Register</p>
            </div>
          </div>
          <button
            onClick={() => {
              setCurrentPage('contact');
              setMobileMenuOpen(false);
            }}
            className="text-xs font-bold text-[#082B5B] hover:text-[#F20D25] px-2.5 py-1 rounded bg-white border border-slate-200 hover:border-[#082B5B] transition-colors"
          >
            Login
          </button>
        </div>

        {/* Primary CTA Buttons */}
        <div className="p-4 bg-blue-50/50 border-b border-slate-100 space-y-2">
          <button
            onClick={() => {
              setQuoteModalOpen(true);
              setMobileMenuOpen(false);
            }}
            className="w-full py-2.5 bg-[#F20D25] hover:bg-[#D6091E] text-white font-bold text-xs rounded-lg flex items-center justify-center gap-2 shadow-sm"
          >
            <FileText className="w-4 h-4" />
            <span>Get a Free Quote</span>
          </button>
          <a
            href="https://wa.me/2348101234567"
            target="_blank"
            rel="noreferrer"
            className="w-full py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs rounded-lg flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="py-2 px-3 space-y-1 divide-y divide-slate-100">
          <div className="space-y-1 pb-2">
            <button
              onClick={() => {
                setCurrentPage('home');
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-bold ${
                currentPage === 'home' ? 'bg-[#082B5B] text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <Home className="w-4 h-4 text-[#F20D25]" />
                <span>Home</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setSelectedCategoryFilter('all');
                setCurrentPage('shop');
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-bold ${
                currentPage === 'shop' ? 'bg-[#082B5B] text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-4 h-4 text-[#F20D25]" />
                <span>Shop All Products</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                navigateToCategory('solar-panels');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-100"
            >
              <div className="flex items-center gap-3">
                <Sun className="w-4 h-4 text-[#F20D25]" />
                <span>Solar Solutions</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                navigateToCategory('cctv-cameras');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-100"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-[#F20D25]" />
                <span>CCTV & Security</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setCurrentPage('services');
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-bold ${
                currentPage === 'services' ? 'bg-[#082B5B] text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <Wrench className="w-4 h-4 text-[#F20D25]" />
                <span>Installation & Services</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setCurrentPage('about');
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-bold ${
                currentPage === 'about' ? 'bg-[#082B5B] text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <Info className="w-4 h-4 text-[#F20D25]" />
                <span>About Us</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Categories List */}
          <div className="pt-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2">Popular Categories</span>
            <div className="mt-1 space-y-0.5">
              {categories.slice(0, 6).map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    navigateToCategory(c.slug);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 px-2.5 rounded text-xs text-slate-600 hover:text-[#082B5B] hover:bg-blue-50 flex items-center justify-between"
                >
                  <span>{c.name}</span>
                  <span className="text-[10px] text-slate-400 font-mono">({c.itemCount})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Contact info footer */}
        <div className="mt-auto p-4 border-t border-slate-100 bg-slate-50 text-xs text-slate-500 space-y-2">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#F20D25]" />
            <a href="tel:+2348101234567" className="font-mono text-slate-700 font-semibold">+234 810 123 4567</a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#F20D25]" />
            <span className="truncate">support@bmvng.com</span>
          </div>
          <p className="text-[11px] text-slate-400 pt-1">123 Solar Street, Ikeja, Lagos, Nigeria</p>
        </div>
      </div>
    </div>
  );
};

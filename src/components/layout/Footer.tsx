import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { BmvLogo } from '../common/BmvLogo';
import { useShop } from '../../context/ShopContext';

export const Footer: React.FC = () => {
  const { setCurrentPage, navigateToCategory, setSelectedCategoryFilter } = useShop();

  return (
    <footer className="bg-[#041C3D] text-white border-t border-blue-950/70 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-blue-900/40">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <div onClick={() => setCurrentPage('home')} className="cursor-pointer inline-block">
              <BmvLogo variant="dark" size="md" />
            </div>
            <p className="text-sm text-blue-200/80 leading-relaxed">
              Your trusted partner for solar energy and security solutions. We provide quality products,
              professional installation and reliable support for homes and businesses across Nigeria.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-blue-900/40 hover:bg-[#F20D25] flex items-center justify-center text-blue-200 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-blue-900/40 hover:bg-[#F20D25] flex items-center justify-center text-blue-200 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-blue-900/40 hover:bg-[#F20D25] flex items-center justify-center text-blue-200 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-blue-900/40 hover:bg-[#F20D25] flex items-center justify-center text-blue-200 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-bold text-white tracking-wide mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-blue-200/80">
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setSelectedCategoryFilter('all');
                    setCurrentPage('shop');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Shop Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigateToCategory('solar-panels');
                  }}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Solar Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigateToCategory('cctv-cameras');
                  }}
                  className="hover:text-white hover:underline transition-colors"
                >
                  CCTV & Security
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Installation & Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white hover:underline transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Support */}
          <div>
            <h3 className="text-base font-bold text-white tracking-wide mb-4">Customer Support</h3>
            <ul className="space-y-2.5 text-sm text-blue-200/80">
              <li>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  FAQs & Help Center
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('services')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Shipping & Delivery Information
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('about')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Manufacturer Warranty
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Return & Refund Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Contact Support Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white tracking-wide mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-blue-200/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F20D25] shrink-0 mt-0.5" />
                <span>123 Solar Street, Ikeja, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#F20D25] shrink-0" />
                <a href="tel:+2348101234567" className="hover:text-white font-mono font-semibold">
                  +234 810 123 4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F20D25] shrink-0" />
                <a href="mailto:support@bmvng.com" className="hover:text-white">
                  support@bmvng.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>Mon - Sat: 8:00AM - 6:00PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-blue-300/70">
          <p>© 2026 BMV. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => setCurrentPage('about')} className="hover:text-white">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => setCurrentPage('about')} className="hover:text-white">Terms & Conditions</button>
            <span>•</span>
            <button onClick={() => setCurrentPage('shop')} className="hover:text-white">Sitemap</button>
          </div>
          <p className="text-blue-400 font-medium">Powered by Clean Energy for a Better Tomorrow.</p>
        </div>

      </div>
    </footer>
  );
};

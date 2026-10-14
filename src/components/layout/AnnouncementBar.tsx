import React from 'react';
import { Phone, Mail, Clock, Facebook, Instagram, Youtube, Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#041C3D] text-white text-[12px] border-b border-blue-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left message */}
        <div className="flex items-center gap-2 font-medium text-blue-100/90 text-center md:text-left">
          <Sparkles className="w-3.5 h-3.5 text-[#F20D25] shrink-0" />
          <span>Reliable Solar & Security Solutions for Homes, Businesses & a Brighter Tomorrow.</span>
        </div>

        {/* Right contacts and social links */}
        <div className="flex items-center gap-4 text-slate-300 flex-wrap justify-center">
          <a
            href="tel:+2348101234567"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-[#F20D25]" />
            <span className="font-mono tabular-nums">+234 810 123 4567</span>
          </a>

          <span className="text-slate-600 hidden sm:inline">|</span>

          <a
            href="mailto:support@bmvng.com"
            className="flex items-center gap-1.5 hover:text-white transition-colors hidden sm:flex"
          >
            <Mail className="w-3 h-3 text-[#F20D25]" />
            <span>support@bmvng.com</span>
          </a>

          <span className="text-slate-600 hidden lg:inline">|</span>

          <div className="hidden lg:flex items-center gap-1.5 text-blue-200/80">
            <Clock className="w-3 h-3 text-blue-400" />
            <span>Mon - Sat: 8:00AM - 6:00PM</span>
          </div>

          <div className="flex items-center gap-2.5 ml-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

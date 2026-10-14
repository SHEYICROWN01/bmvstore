import React, { useState, useEffect } from 'react';
import { Flame, Clock } from 'lucide-react';
import { products } from '../../data/products';
import { ProductCard } from '../products/ProductCard';

export const HotDealsSection: React.FC = () => {
  // Real countdown timer
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 18, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 2, minutes: 45, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format2 = (n: number) => n.toString().padStart(2, '0');

  // Select 2 hot deal products for mobile (or 4 on desktop)
  const hotDeals = products.filter(
    (p) => p.id === 'lithium-battery-200ah' || p.id === 'hikvision-4mp-cctv' || p.id === 'solar-flood-light-200w' || p.id === 'ja-solar-550w-panel'
  );

  return (
    <section className="py-6 sm:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header with Countdown Badge (Reference Image 3 Screen 2) */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-red-100 text-[#F20D25] flex items-center justify-center">
              <Flame className="w-4 h-4 fill-current" />
            </div>
            <h2 className="text-lg sm:text-2xl font-black text-[#082B5B] tracking-tight">
              Hot Deals
            </h2>
          </div>

          {/* Red Countdown Pill (Matching Reference Image 3 Screen 2) */}
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F20D25] text-white text-[11px] font-mono font-bold rounded-full shadow-xs">
            <span className="text-[10px] font-sans font-semibold text-red-100 hidden xs:inline">Ends in</span>
            <Clock className="w-3 h-3 text-red-200" />
            <span>
              {format2(timeLeft.hours)} : {format2(timeLeft.minutes)} : {format2(timeLeft.seconds)}
            </span>
          </div>
        </div>

        {/* 2-Column Grid on Mobile (Matching Reference Image 3 Screen 2) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {hotDeals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};

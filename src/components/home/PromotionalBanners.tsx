import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import bannerSolarImg from '../../assets/images/banner_solar_power_savings_1791986627047.jpg';
import bannerCctvImg from '../../assets/images/banner_cctv_security_system_1791986627522.jpg';
import { SafeImage } from '../common/SafeImage';

export const PromotionalBanners: React.FC = () => {
  const { navigateToCategory, setSelectedCategoryFilter, setCurrentPage } = useShop();

  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Banner 1: Complete Solar Solutions (Deep Navy Theme) */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#082B5B] via-[#041C3D] to-[#0B3A78] text-white p-6 sm:p-8 flex flex-col justify-between min-h-[320px] shadow-lg group">
            
            {/* Background image preview with soft gradient overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 sm:opacity-40 group-hover:opacity-50 transition-opacity pointer-events-none">
              <SafeImage
                src={bannerSolarImg}
                alt="Solar Solutions"
                fallbackType="banner"
                className="w-full h-full object-cover object-left"
              />
            </div>

            <div className="relative z-10 max-w-md space-y-3">
              <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur-xs text-white text-[11px] font-bold tracking-wider uppercase rounded-full">
                Clean Energy Transition
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                Complete Solar Solutions<br />
                <span className="text-blue-200">For a Brighter Future</span>
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed">
                Reduce your electricity bills and enjoy uninterrupted power with our certified hybrid and off-grid solar systems.
              </p>

              {/* Feature check marks */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-blue-200 font-medium">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F20D25]" /> Quality Products
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F20D25]" /> Professional Installation
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F20D25]" /> Long-Term Support
                </span>
              </div>
            </div>

            <div className="relative z-10 pt-6">
              <button
                onClick={() => {
                  setSelectedCategoryFilter('solar-panels');
                  setCurrentPage('shop');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="h-11 px-6 bg-[#F20D25] hover:bg-[#D6091E] text-white font-bold text-xs sm:text-sm rounded-lg inline-flex items-center gap-2 shadow-md hover:shadow-red-900/40 transition-all active:scale-95 cursor-pointer"
              >
                <span>Explore Solar Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Banner 2: Advanced CCTV Security (Red Theme) */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#F20D25] via-[#D6091E] to-[#990412] text-white p-6 sm:p-8 flex flex-col justify-between min-h-[320px] shadow-lg group">
            
            {/* Background image preview with soft gradient overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 sm:opacity-35 group-hover:opacity-45 transition-opacity pointer-events-none">
              <SafeImage
                src={bannerCctvImg}
                alt="CCTV Security"
                fallbackType="cctv"
                className="w-full h-full object-cover object-left"
              />
            </div>

            <div className="relative z-10 max-w-md space-y-3">
              <span className="inline-block px-3 py-1 bg-black/20 backdrop-blur-xs text-white text-[11px] font-bold tracking-wider uppercase rounded-full">
                Surveillance & Safety
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                Advanced CCTV<br />
                <span className="text-red-100">Security Systems</span>
              </h3>
              <p className="text-xs sm:text-sm text-red-100/90 leading-relaxed">
                Protect your home and business with high-definition CCTV cameras, night-vision infrared sensors, and 24/7 mobile recording.
              </p>

              {/* Feature check marks */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-white/90 font-medium">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" /> 4MP & 4K Ultra HD
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" /> Remote Mobile Stream
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" /> 2-Year Warranty
                </span>
              </div>
            </div>

            <div className="relative z-10 pt-6">
              <button
                onClick={() => {
                  setSelectedCategoryFilter('cctv-cameras');
                  setCurrentPage('shop');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="h-11 px-6 bg-white hover:bg-slate-100 text-[#082B5B] font-bold text-xs sm:text-sm rounded-lg inline-flex items-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <span>Shop CCTV Systems</span>
                <ArrowRight className="w-4 h-4 text-[#F20D25]" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

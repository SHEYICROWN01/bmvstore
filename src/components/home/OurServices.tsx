import React from 'react';
import { Sun, Video, Wrench, FileQuestion, ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import technicianPortrait from '../../assets/images/bmv_solar_consultant_1791986574898.jpg';
import { SafeImage } from '../common/SafeImage';

const serviceCards = [
  {
    id: 'solar',
    title: 'Solar Installation',
    subtitle: 'Residential & Commercial',
    icon: Sun,
    action: 'services'
  },
  {
    id: 'cctv',
    title: 'CCTV Installation',
    subtitle: 'Homes, Offices & Businesses',
    icon: Video,
    action: 'services'
  },
  {
    id: 'repair',
    title: 'Repair & Maintenance',
    subtitle: 'Inverters, Batteries, CCTV',
    icon: Wrench,
    action: 'services'
  },
  {
    id: 'consult',
    title: 'System Consultation',
    subtitle: 'Get expert advice',
    icon: FileQuestion,
    action: 'consultation'
  }
];

export const OurServices: React.FC = () => {
  const { setCurrentPage, setConsultationModalOpen, setQuoteModalOpen } = useShop();

  return (
    <section className="py-8 sm:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-5 sm:mb-8 pb-2 sm:pb-3 border-b border-slate-100">
          <div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#082B5B] tracking-tight">
              Our Services
            </h2>
            <p className="hidden sm:block text-xs sm:text-sm text-slate-500 mt-1">
              End-to-end solar engineering, CCTV surveillance deployment, and preventative care
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentPage('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1 text-xs sm:text-sm font-bold text-[#082B5B] hover:text-[#F20D25] transition-colors group cursor-pointer"
          >
            <span>View All</span>
            <span className="hidden sm:inline">Services</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 2-Column Section Layout: Left 4 service cards in 2x2 Grid, Right prominent Consultation Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          
          {/* Left: 4 Service Cards (Full width 2x2 grid on Mobile, 7 cols on Desktop) */}
          <div className="w-full lg:col-span-7 grid grid-cols-2 gap-2.5 sm:gap-4">
            {serviceCards.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  onClick={() => {
                    if (service.action === 'consultation') {
                      setConsultationModalOpen(true);
                    } else {
                      setCurrentPage('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="group bg-white rounded-xl border border-[#E1E7EF] hover:border-[#082B5B]/30 hover:shadow-md p-3 sm:p-5 flex flex-col justify-between transition-all duration-200 cursor-pointer relative"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-red-50 text-[#F20D25] group-hover:bg-[#F20D25] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                      <IconComp className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F20D25] group-hover:translate-x-1 transition-transform mt-1" />
                  </div>

                  <div className="mt-3">
                    <h3 className="text-xs sm:text-base font-bold text-[#082B5B] group-hover:text-[#F20D25] transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-500 mt-1 line-clamp-2">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Custom Solar Solution Banner (Hidden on Mobile view, Visible on Desktop) */}
          <div className="hidden lg:flex lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#F20D25] via-[#D6091E] to-[#B30415] text-white p-5 sm:p-7 flex-col justify-between shadow-lg relative overflow-hidden group min-h-[280px]">
            
            {/* Background Technician Image */}
            <div className="absolute right-0 bottom-0 top-0 w-2/5 sm:w-1/2 opacity-35 sm:opacity-45 pointer-events-none overflow-hidden">
              <SafeImage
                src={technicianPortrait}
                alt="BMV Solar Consultant"
                fallbackType="technician"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="relative z-10 max-w-[240px] sm:max-w-xs space-y-2 sm:space-y-3">
              <span className="inline-block px-2 py-0.5 bg-black/20 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded">
                Personalized Engineering
              </span>
              <h3 className="text-xl sm:text-3xl font-black leading-tight">
                Need a Custom<br />Solar Solution?
              </h3>
              <p className="text-[11px] sm:text-sm text-red-100 leading-snug sm:leading-relaxed">
                Tell us your power needs and our team will recommend the best solution for you.
              </p>
            </div>

            <div className="relative z-10 pt-4 sm:pt-6">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="h-10 sm:h-11 px-5 sm:px-6 bg-white hover:bg-slate-100 text-[#082B5B] font-extrabold text-xs sm:text-sm rounded-lg inline-flex items-center gap-1.5 shadow-md transition-transform active:scale-95 cursor-pointer"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F20D25]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

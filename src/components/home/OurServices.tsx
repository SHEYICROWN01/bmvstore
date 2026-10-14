import React from 'react';
import { Sun, Video, Wrench, FileQuestion, ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import technicianPortrait from '../../assets/images/bmv_solar_consultant_1791986574898.jpg';

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
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-100">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082B5B] tracking-tight">
              Our Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              End-to-end solar engineering, CCTV surveillance deployment, and preventative care
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentPage('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#082B5B] hover:text-[#F20D25] transition-colors group cursor-pointer"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 2-Column Section Layout: Left 4 service cards, Right prominent Consultation Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: 4 Service Cards (2x2 Grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  className="group bg-white rounded-xl border border-[#E1E7EF] hover:border-[#082B5B]/30 hover:shadow-lg p-5 flex flex-col justify-between transition-all duration-200 cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-[#F20D25] group-hover:bg-[#F20D25] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-[#082B5B] group-hover:text-[#F20D25] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center text-xs font-bold text-[#F20D25] group-hover:translate-x-1 transition-transform">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Custom Solar Solution Banner with BMV Technician (Reference Image 1 & 4) */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#F20D25] to-[#B30415] text-white p-6 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            
            {/* Background Technician Image */}
            <div className="absolute right-0 bottom-0 top-0 w-2/5 sm:w-1/2 opacity-30 sm:opacity-45 pointer-events-none overflow-hidden">
              <img
                src={technicianPortrait}
                alt="BMV Solar Consultant"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="relative z-10 max-w-xs space-y-3">
              <span className="inline-block px-2.5 py-0.5 bg-black/20 text-white text-[10px] font-bold uppercase tracking-wider rounded">
                Personalized Engineering
              </span>
              <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                Need a Custom<br />Solar Solution?
              </h3>
              <p className="text-xs sm:text-sm text-red-100 leading-relaxed">
                Tell us your power needs and our certified solar engineers will recommend the exact inverter, battery, and panel setup for your home or business.
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="h-11 px-6 bg-white hover:bg-slate-100 text-[#082B5B] font-extrabold text-xs sm:text-sm rounded-lg inline-flex items-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#F20D25]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

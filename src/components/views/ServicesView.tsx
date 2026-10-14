import React from 'react';
import { Sun, Video, Wrench, FileQuestion, CheckCircle2, ArrowRight } from 'lucide-react';
import { services } from '../../data/services';
import { useShop } from '../../context/ShopContext';
import technicianHero from '../../assets/images/hero_solar_technician_1791986576183.jpg';

export const ServicesView: React.FC = () => {
  const { setQuoteModalOpen, setConsultationModalOpen, setCurrentPage } = useShop();

  return (
    <div className="bg-[#FAFBFD] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Hero Header */}
        <div className="relative rounded-3xl overflow-hidden bg-[#041C3D] text-white p-8 sm:p-12 shadow-xl">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 pointer-events-none">
            <img src={technicianHero} alt="BMV Solar Engineers" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 max-w-xl space-y-4">
            <span className="text-xs font-bold text-[#F20D25] uppercase tracking-widest">
              Professional Engineering & Support
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Certified Solar & Security Installation Services
            </h1>
            <p className="text-sm text-blue-200/90 leading-relaxed">
              BMV provides turnkey engineering solutions. From energy audits to roof mounting,
              inverter commissioning, and surveillance deployment, our certified teams guarantee safety,
              clean aesthetics, and 100% power reliability.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="h-11 px-6 bg-[#F20D25] hover:bg-[#D6091E] text-white font-bold text-xs rounded-lg shadow-md cursor-pointer"
              >
                Schedule Installation
              </button>
              <button
                onClick={() => setConsultationModalOpen(true)}
                className="h-11 px-6 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-lg border border-white/20 cursor-pointer"
              >
                Request Free Energy Audit
              </button>
            </div>
          </div>
        </div>

        {/* 4 Detailed Service Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs hover:shadow-lg transition-all space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#F20D25] flex items-center justify-center shadow-xs">
                {service.icon === 'sun' && <Sun className="w-6 h-6" />}
                {service.icon === 'shield' && <Video className="w-6 h-6" />}
                {service.icon === 'wrench' && <Wrench className="w-6 h-6" />}
                {service.icon === 'clipboard-check' && <FileQuestion className="w-6 h-6" />}
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#082B5B]">{service.title}</h3>
                <span className="text-xs font-semibold text-[#F20D25]">{service.subtitle}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {service.description}
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Common applications:</span>
                <span className="font-semibold text-slate-800 text-right">{service.popularFor}</span>
              </div>

              <button
                onClick={() => setQuoteModalOpen(true)}
                className="w-full py-2.5 bg-blue-50 hover:bg-[#082B5B] text-[#082B5B] hover:text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Book This Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

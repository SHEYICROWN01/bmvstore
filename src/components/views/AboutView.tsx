import React from 'react';
import { ShieldCheck, Award, Users, CheckCircle2 } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import heroHome from '../../assets/images/hero_modern_solar_home_1791986574405.jpg';

export const AboutView: React.FC = () => {
  const { setQuoteModalOpen, setCurrentPage } = useShop();

  return (
    <div className="bg-[#FAFBFD] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* About Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold text-[#F20D25] uppercase tracking-widest">
            About BMV Solar & Security
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082B5B] tracking-tight">
            Empowering Nigerian Homes & Businesses with Clean Energy and Uncompromised Security
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            BMV was founded on a singular conviction: access to continuous electrical power and dependable security surveillance shouldn't be a luxury in Nigeria. We engineer robust, tropicalized solar energy and CCTV systems that eliminate generator fuel dependency and safeguard investments.
          </p>
        </div>

        {/* Feature Image Banner */}
        <div className="rounded-3xl overflow-hidden aspect-[21/9] max-h-[420px] shadow-lg relative">
          <img src={heroHome} alt="BMV Solar installation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 text-white">
            <p className="text-base sm:text-lg font-bold">
              Over 1,200+ residential and commercial power installations executed with 99.4% client satisfaction.
            </p>
          </div>
        </div>

        {/* 3 Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#082B5B] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#082B5B]">Genuine Engineering</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We partner directly with tier-1 international brands (Deye, JA Solar, Growatt, Hikvision) ensuring every component is 100% genuine with factory warranties.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#F20D25] flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#082B5B]">Certified Technical Crews</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our technicians undergo extensive electrical safety training, roof structural assessments, and solar cabling standards to ensure fire-safe installations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#082B5B] flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#082B5B]">Rapid After-Sales Care</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Solar is an ongoing relationship. Our dedicated technical hotline and preventive maintenance services ensure your system operates at peak capacity year after year.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#082B5B] text-white p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black">Ready to switch to clean, uninterrupted solar energy?</h3>
            <p className="text-xs sm:text-sm text-blue-200 mt-1">
              Speak with our senior engineers today for a tailored energy audit.
            </p>
          </div>
          <button
            onClick={() => setQuoteModalOpen(true)}
            className="h-11 px-6 bg-[#F20D25] hover:bg-[#D6091E] text-white font-bold text-xs rounded-lg whitespace-nowrap cursor-pointer"
          >
            Get a Free Quote
          </button>
        </div>

      </div>
    </div>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Award, Wrench, Sun, Video, CheckCircle2, Leaf } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

import heroSolarHome from '../../assets/images/hero_modern_solar_home_1791986574405.jpg';
import heroCctv from '../../assets/images/hero_cctv_security_1791986574296.jpg';
import heroTechnician from '../../assets/images/hero_solar_technician_1791986576183.jpg';
import { SafeImage } from '../common/SafeImage';

interface HeroSlide {
  id: number;
  image: string;
  kicker: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix?: string;
  description: string;
  primaryCtaText: string;
  primaryCtaAction: 'shop' | 'security' | 'services';
  secondaryCtaText: string;
  secondaryCtaAction: 'quote' | 'consultation';
  trustBadges: string[];
}

const slides: HeroSlide[] = [
  {
    id: 1,
    image: heroSolarHome,
    kicker: 'CLEAN ENERGY. STRONGER SECURITY.',
    titlePrefix: 'Power Your Home.\nSecure Your World\nwith ',
    titleHighlight: 'BMV',
    description:
      'Quality solar products, CCTV systems, professional installation and reliable support — all in one place.',
    primaryCtaText: 'Shop Now',
    primaryCtaAction: 'shop',
    secondaryCtaText: 'Get a Free Quote',
    secondaryCtaAction: 'quote',
    trustBadges: ['Top Brands', 'Expert Installation', 'Warranty Support']
  },
  {
    id: 2,
    image: heroCctv,
    kicker: '24/7 SURVEILLANCE & SMART PROTECTION',
    titlePrefix: 'Protect What Matters.\nIntelligent Security\nby ',
    titleHighlight: 'BMV',
    description:
      'Commercial-grade 4MP & 4K CCTV systems, crystal-clear infrared night vision, and instant mobile alerts on iOS and Android.',
    primaryCtaText: 'Shop Security Systems',
    primaryCtaAction: 'security',
    secondaryCtaText: 'Book Site Survey',
    secondaryCtaAction: 'quote',
    trustBadges: ['IP67 Weatherproof', 'Live Phone Stream', '2-Year Warranty']
  },
  {
    id: 3,
    image: heroTechnician,
    kicker: 'CERTIFIED ENGINEERS & STANDARDS',
    titlePrefix: 'Professional Solar\nInstallation &\nAfter-Sales ',
    titleHighlight: 'Care',
    description:
      'Our certified technicians design, mount, wire, and commission clean solar solutions tailored to your household or business power budget.',
    primaryCtaText: 'View Installation Services',
    primaryCtaAction: 'services',
    secondaryCtaText: 'Request Consultation',
    secondaryCtaAction: 'consultation',
    trustBadges: ['Certified Engineers', 'Clean Wiring', 'Zero Downtime']
  }
];

export const HeroCarousel: React.FC = () => {
  const { setCurrentPage, setQuoteModalOpen, setConsultationModalOpen, setSelectedCategoryFilter } = useShop();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartXRef.current = null;
  };

  const currentSlide = slides[currentSlideIndex];

  const handlePrimaryClick = (action: 'shop' | 'security' | 'services') => {
    if (action === 'security') {
      setSelectedCategoryFilter('cctv-cameras');
      setCurrentPage('shop');
    } else if (action === 'services') {
      setCurrentPage('services');
    } else {
      setSelectedCategoryFilter('all');
      setCurrentPage('shop');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSecondaryClick = (action: 'quote' | 'consultation') => {
    if (action === 'consultation') {
      setConsultationModalOpen(true);
    } else {
      setQuoteModalOpen(true);
    }
  };

  return (
    <section
      className="relative w-full bg-[#041C3D] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images with smooth fade */}
      <div className="relative min-h-[380px] xs:min-h-[400px] sm:min-h-[480px] md:min-h-[520px] lg:h-[580px] w-full flex items-center overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 overflow-hidden transition-opacity duration-1000 ease-in-out ${
              idx === currentSlideIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <SafeImage
              src={slide.image}
              alt="BMV Solar & Security"
              fallbackType="banner"
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-7000 ease-out"
            />
            {/* Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#041C3D]/95 via-[#041C3D]/80 to-[#041C3D]/50 sm:to-transparent sm:w-4/5 lg:w-3/5" />
            <div className="absolute inset-0 bg-[#041C3D]/30" />
          </div>
        ))}

        {/* Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-12 sm:py-12 md:py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Headline & CTAs */}
            <div className="lg:col-span-7 xl:col-span-8 text-white space-y-3 sm:space-y-4 md:space-y-5 max-w-2xl">
              
              {/* Kicker Tagline */}
              <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-blue-200">
                <span className="w-2 h-2 rounded-full bg-[#F20D25] shrink-0" />
                <span className="truncate">{currentSlide.kicker}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.16] sm:leading-[1.12] text-white whitespace-pre-line text-balance">
                {currentSlide.titlePrefix}
                <span className="text-[#F20D25]">{currentSlide.titleHighlight}</span>
                {currentSlide.titleSuffix || ''}
              </h1>

              {/* Subtext */}
              <p className="text-xs sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed max-w-xl">
                {currentSlide.description}
              </p>

              {/* CTA Action Buttons: side-by-side on mobile and desktop without overflow */}
              <div className="pt-1.5 sm:pt-2 flex flex-wrap items-center gap-2 sm:gap-3.5">
                <button
                  onClick={() => handlePrimaryClick(currentSlide.primaryCtaAction)}
                  className="h-10 sm:h-12 px-4 sm:px-6 bg-[#F20D25] hover:bg-[#D6091E] text-white font-bold text-xs sm:text-sm rounded-lg flex items-center justify-center gap-1.5 shadow-lg transition-all active:scale-95 cursor-pointer shrink-0"
                >
                  <span>{currentSlide.primaryCtaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>

                <button
                  onClick={() => handleSecondaryClick(currentSlide.secondaryCtaAction)}
                  className="h-10 sm:h-12 px-3.5 sm:px-5 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-xs sm:text-sm rounded-lg backdrop-blur-xs transition-all active:scale-95 cursor-pointer shrink-0"
                >
                  <span>{currentSlide.secondaryCtaText}</span>
                </button>
              </div>

              {/* Trust badges strip (hidden on smallest mobile, handled in dedicated mobile strip below hero) */}
              <div className="hidden sm:flex pt-3 flex-wrap items-center gap-4 text-xs text-blue-100/90 font-medium border-t border-white/15">
                {currentSlide.trustBadges.map((badge, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F20D25]" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right: Floating Value Cards (Desktop Only) */}
            <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col gap-3 justify-center">
              
              <div
                onClick={() => {
                  setSelectedCategoryFilter('solar-panels');
                  setCurrentPage('shop');
                }}
                className="bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-xl border border-white/20 flex items-center gap-3.5 hover:bg-white hover:translate-x-1 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 text-[#F20D25] flex items-center justify-center shrink-0 group-hover:bg-[#F20D25] group-hover:text-white transition-colors">
                  <Sun className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-[#082B5B] group-hover:text-[#F20D25] transition-colors truncate">
                    Solar Energy Solutions
                  </h4>
                  <p className="text-[11px] text-slate-500 truncate">For Homes & Businesses</p>
                </div>
              </div>

              <div
                onClick={() => {
                  setSelectedCategoryFilter('cctv-cameras');
                  setCurrentPage('shop');
                }}
                className="bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-xl border border-white/20 flex items-center gap-3.5 hover:bg-white hover:translate-x-1 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#082B5B] flex items-center justify-center shrink-0 group-hover:bg-[#082B5B] group-hover:text-white transition-colors">
                  <Video className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-[#082B5B] group-hover:text-[#F20D25] transition-colors truncate">
                    CCTV & Security Systems
                  </h4>
                  <p className="text-[11px] text-slate-500 truncate">Keep What Matters Safe</p>
                </div>
              </div>

              <div
                onClick={() => setCurrentPage('services')}
                className="bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-xl border border-white/20 flex items-center gap-3.5 hover:bg-white hover:translate-x-1 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 text-[#F20D25] flex items-center justify-center shrink-0 group-hover:bg-[#F20D25] group-hover:text-white transition-colors">
                  <Wrench className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-[#082B5B] group-hover:text-[#F20D25] transition-colors truncate">
                    Professional Installation
                  </h4>
                  <p className="text-[11px] text-slate-500 truncate">By Certified Technicians</p>
                </div>
              </div>

              <div
                onClick={() => setCurrentPage('services')}
                className="bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-xl border border-white/20 flex items-center gap-3.5 hover:bg-white hover:translate-x-1 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#082B5B] flex items-center justify-center shrink-0 group-hover:bg-[#082B5B] group-hover:text-white transition-colors">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-[#082B5B] group-hover:text-[#F20D25] transition-colors truncate">
                    Repair & Maintenance
                  </h4>
                  <p className="text-[11px] text-slate-500 truncate">Fast & Reliable Support</p>
                </div>
              </div>

              <div
                onClick={() => setQuoteModalOpen(true)}
                className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-3.5 rounded-xl shadow-xl flex items-center gap-3.5 hover:brightness-105 hover:translate-x-1 transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0 text-white">
                  <Leaf className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold truncate">Save on Electricity Bills</h4>
                  <p className="text-[11px] text-emerald-100 truncate">Switch to Solar Today!</p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Carousel Arrow Controls - HIDDEN ON MOBILE (so they NEVER obstruct text or buttons!) */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/20 hover:bg-[#F20D25] text-white items-center justify-center backdrop-blur-sm transition-all active:scale-90 cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/20 hover:bg-[#F20D25] text-white items-center justify-center backdrop-blur-sm transition-all active:scale-90 cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 sm:gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlideIndex(i)}
              className={`h-1.5 sm:h-2 rounded-full transition-all cursor-pointer ${
                i === currentSlideIndex ? 'w-5 sm:w-6 bg-[#F20D25]' : 'w-1.5 sm:w-2 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

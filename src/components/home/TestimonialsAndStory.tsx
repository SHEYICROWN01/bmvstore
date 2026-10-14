import React, { useState } from 'react';
import { Play, Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { customerTestimonials } from '../../data/services';
import { useShop } from '../../context/ShopContext';
import storyThumbnail from '../../assets/images/solar_home_sunny_story_1791986627795.jpg';

export const TestimonialsAndStory: React.FC = () => {
  const { setStoryModalOpen } = useShop();
  const [activeIndex, setActiveIndex] = useState(0);

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + customerTestimonials.length) % customerTestimonials.length);
  };

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % customerTestimonials.length);
  };

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Watch Our Story Video Banner */}
          <div
            onClick={() => setStoryModalOpen(true)}
            className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[300px] shadow-lg group cursor-pointer"
          >
            <img
              src={storyThumbnail}
              alt="BMV Solar Installations across Nigeria"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#F20D25] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#D6091E] transition-all">
                <Play className="w-7 h-7 fill-white ml-1" />
              </div>
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[11px] font-bold text-red-300 uppercase tracking-wider">
                Video Showcase
              </span>
              <h3 className="text-xl font-black">
                Watch Our Story
              </h3>
              <p className="text-xs text-slate-200">
                See how BMV is powering homes and businesses across Nigeria.
              </p>
            </div>
          </div>

          {/* Right Column: Customer Testimonials */}
          <div className="lg:col-span-7 flex flex-col justify-between p-2 sm:p-4">
            
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082B5B] tracking-tight">
                    Trusted by Many
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    What our customers say about our solar and security products.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevReview}
                    className="w-8 h-8 rounded-full border border-slate-300 hover:border-[#082B5B] hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextReview}
                    className="w-8 h-8 rounded-full border border-slate-300 hover:border-[#082B5B] hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Testimonial Cards Grid (desktop shows multiple, mobile cycles) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {customerTestimonials.slice(0, 2).map((test) => (
                  <div
                    key={test.id}
                    className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5 flex flex-col justify-between hover:shadow-md transition-shadow relative"
                  >
                    <Quote className="w-6 h-6 text-[#F20D25]/20 mb-2" />
                    
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                      "{test.comment}"
                    </p>

                    <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full bg-[#082B5B] text-white text-xs font-bold flex items-center justify-center">
                          {test.author.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-[#082B5B]">{test.author}</h4>
                          <p className="text-[11px] text-slate-400">{test.location}</p>
                        </div>
                      </div>

                      <div className="flex items-center text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Satisfaction guarantee note */}
            <div className="mt-6 p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center justify-between text-xs text-[#082B5B]">
              <span className="font-semibold">Over 1,200+ Solar & CCTV Installations Completed Across Nigeria</span>
              <span className="font-bold text-[#F20D25] hidden sm:inline">99.4% Client Satisfaction</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { X, Play, CheckCircle2 } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import storyBanner from '../../assets/images/solar_home_sunny_story_1791986627795.jpg';
import { SafeImage } from '../common/SafeImage';

export const StoryVideoModal: React.FC = () => {
  const { storyModalOpen, setStoryModalOpen, setQuoteModalOpen } = useShop();

  if (!storyModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
        onClick={() => setStoryModalOpen(false)}
      />

      <div className="relative bg-[#041C3D] text-white rounded-2xl shadow-2xl max-w-3xl w-full p-6 sm:p-8 z-10 my-8 overflow-hidden border border-blue-900/50">
        <button
          onClick={() => setStoryModalOpen(false)}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F20D25] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#F20D25]" />
            <span>Documentary Spotlight</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            How BMV is Transforming Power & Security in Nigeria
          </h2>

          {/* Video Mockup Frame */}
          <div className="relative rounded-xl overflow-hidden aspect-video bg-black/80 border border-white/10 flex items-center justify-center group">
            <SafeImage
              src={storyBanner}
              alt="BMV Nigerian Solar Installations"
              fallbackType="banner"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[#F20D25] text-white flex items-center justify-center shadow-2xl mb-3">
                <Play className="w-7 h-7 fill-white ml-1" />
              </div>
              <p className="text-sm font-bold max-w-md">
                "From Fuel Generators to Continuous Solar Power: Client Case Studies in Lagos, Abuja & Port Harcourt"
              </p>
              <span className="text-[11px] text-blue-200 mt-1">Runtime: 4 mins 30 secs</span>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-blue-100">
            <div className="p-3 bg-white/5 rounded-lg border border-white/10 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F20D25] shrink-0" />
              <span>1,200+ Homes Powered</span>
            </div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F20D25] shrink-0" />
              <span>850+ CCTV Networks</span>
            </div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F20D25] shrink-0" />
              <span>90% Fuel Cost Savings</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row justify-end gap-3">
            <button
              onClick={() => {
                setStoryModalOpen(false);
                setQuoteModalOpen(true);
              }}
              className="px-6 py-2.5 bg-[#F20D25] hover:bg-[#D6091E] text-white text-xs font-bold rounded-lg cursor-pointer"
            >
              Get a Free Solar Assessment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

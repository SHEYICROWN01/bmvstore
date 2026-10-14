import React from 'react';

interface BmvLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const BmvLogo: React.FC<BmvLogoProps> = ({ className = '', variant = 'light', size = 'md' }) => {
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-2 select-none group cursor-pointer ${className}`}>
      {/* Brand Icon: Solar Panels & Shield Arc */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 54 44"
          className={size === 'sm' ? 'h-8 w-auto' : size === 'lg' ? 'h-12 w-auto' : 'h-10 w-auto'}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Solar Rising Sun Rays */}
          <path
            d="M 8 32 C 16 10, 38 10, 46 32"
            stroke="#F20D25"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <line x1="27" y1="4" x2="27" y2="10" stroke="#F20D25" strokeWidth="2.4" strokeLinecap="round" />
          <line x1="16" y1="7" x2="19" y2="12" stroke="#F20D25" strokeWidth="2.4" strokeLinecap="round" />
          <line x1="38" y1="7" x2="35" y2="12" stroke="#F20D25" strokeWidth="2.4" strokeLinecap="round" />

          {/* Grid pattern of solar panel cells */}
          <path
            d="M 12 36 L 42 36 L 40 42 L 14 42 Z"
            fill={isDark ? '#38BDF8' : '#082B5B'}
          />
          <line x1="20" y1="36" x2="21" y2="42" stroke={isDark ? '#041C3D' : '#FFFFFF'} strokeWidth="1.2" />
          <line x1="27" y1="36" x2="27" y2="42" stroke={isDark ? '#041C3D' : '#FFFFFF'} strokeWidth="1.2" />
          <line x1="34" y1="36" x2="33" y2="42" stroke={isDark ? '#041C3D' : '#FFFFFF'} strokeWidth="1.2" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col shrink-0">
        <div className="flex items-baseline tracking-tighter font-black leading-none">
          <span className={`text-xl sm:text-2xl font-black ${isDark ? 'text-white' : 'text-[#082B5B]'}`}>
            BM
          </span>
          <span className="text-xl sm:text-2xl font-black text-[#F20D25]">
            V
          </span>
        </div>
        <span
          className={`text-[7px] sm:text-[8px] font-extrabold tracking-[0.14em] uppercase leading-tight mt-0.5 whitespace-nowrap ${
            isDark ? 'text-blue-200' : 'text-[#082B5B]/85'
          }`}
        >
          SOLAR • SECURITY • SOLUTIONS
        </span>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Sun, Shield, Zap, BatteryCharging, Wrench, Camera } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackType?: 'inverter' | 'panel' | 'battery' | 'cctv' | 'kit' | 'accessory' | 'technician' | 'banner' | 'generic';
  productCategory?: string;
  brandText?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = 'Product image',
  className = '',
  fallbackType,
  productCategory,
  brandText,
  loading = 'lazy',
  ...rest
}) => {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);
  const [hasError, setHasError] = useState(false);
  const [fallbackAttempt, setFallbackAttempt] = useState(0);

  // Sync when src prop changes
  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
    setFallbackAttempt(0);
  }, [src]);

  const handleImageError = () => {
    if (!currentSrc) {
      setHasError(true);
      return;
    }

    // Step 1: If an asset URL like /assets/filename-hash.jpg failed,
    // try checking if there is a matching public /images/filename.jpg
    if (fallbackAttempt === 0 && typeof currentSrc === 'string') {
      const match = currentSrc.match(/([^/]+)_[0-9]+(-[A-Za-z0-9_]+)?\.(jpg|png|webp)/);
      if (match) {
        // Try fallback to public image root
        const baseName = match[1];
        // Match known files in public/images
        const publicFallback = `/images/${match[0].replace(/-[A-Za-z0-9_]+\./, '.')}`;
        setFallbackAttempt(1);
        setCurrentSrc(publicFallback);
        return;
      }
    }

    // Step 2: Try public root if it had relative or hash path
    if (fallbackAttempt === 1 && typeof currentSrc === 'string' && !currentSrc.startsWith('/images/')) {
      const filename = currentSrc.split('/').pop()?.split('?')[0];
      if (filename) {
        setFallbackAttempt(2);
        setCurrentSrc(`/images/${filename}`);
        return;
      }
    }

    // Final fallback: show pristine SVG illustration placeholder
    setHasError(true);
  };

  // Determine category type for SVG illustration
  const determineType = (): SafeImageProps['fallbackType'] => {
    if (fallbackType) return fallbackType;
    const cat = (productCategory || '').toLowerCase();
    const str = `${alt} ${cat} ${brandText || ''} ${currentSrc || ''}`.toLowerCase();
    
    if (str.includes('inverter') || str.includes('deye') || str.includes('growatt')) return 'inverter';
    if (str.includes('panel') || str.includes('ja solar') || str.includes('mono')) return 'panel';
    if (str.includes('battery') || str.includes('lithium') || str.includes('ah') || str.includes('kwh')) return 'battery';
    if (str.includes('cctv') || str.includes('camera') || str.includes('hikvision') || str.includes('dahua') || str.includes('security')) return 'cctv';
    if (str.includes('kit') || str.includes('power backup')) return 'kit';
    if (str.includes('cable') || str.includes('accessories') || str.includes('wire') || str.includes('breaker')) return 'accessory';
    if (str.includes('technician') || str.includes('consultant') || str.includes('engineer')) return 'technician';
    if (str.includes('banner') || str.includes('hero') || str.includes('story')) return 'banner';
    return 'generic';
  };

  if (hasError || !currentSrc) {
    const type = determineType();

    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center relative select-none overflow-hidden ${className}`}
        style={{
          background: 'radial-gradient(circle at 50% 35%, #F0F6FF 0%, #E2E8F0 100%)',
        }}
        title={alt}
      >
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#082B5B 1px, transparent 1px), linear-gradient(90deg, #082B5B 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        />

        {/* Brand Watermark */}
        <div className="absolute top-2 left-2 z-10 flex items-center gap-1 opacity-70">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F20D25]" />
          <span className="text-[10px] font-black tracking-widest text-[#082B5B]">BMV</span>
        </div>

        {/* Dynamic Stylized Product Graphic */}
        <div className="relative z-10 flex flex-col items-center justify-center p-3 text-center">
          {type === 'inverter' && (
            <div className="flex flex-col items-center">
              <div className="w-16 h-20 sm:w-20 sm:h-24 bg-white rounded-xl shadow-md border-2 border-slate-200 flex flex-col items-center p-2 relative">
                <div className="w-10 h-6 bg-[#041C3D] rounded-sm flex items-center justify-center mb-1">
                  <span className="text-[8px] font-mono text-emerald-400 font-bold">5.0 kW</span>
                </div>
                <div className="flex gap-1 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                </div>
                <Zap className="w-5 h-5 text-[#F20D25]" />
                <span className="text-[8px] font-bold text-slate-400 mt-auto uppercase">HYBRID</span>
              </div>
            </div>
          )}

          {type === 'panel' && (
            <div className="flex flex-col items-center">
              <div className="w-18 h-24 sm:w-22 sm:h-28 bg-[#0B2545] rounded-lg shadow-md border-2 border-slate-300 grid grid-cols-3 grid-rows-4 gap-0.5 p-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30" />
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="bg-[#134074]/80 rounded-[1px] border border-blue-400/20" />
                ))}
              </div>
              <div className="flex items-center gap-1 mt-1 text-[9px] font-bold text-[#082B5B]">
                <Sun className="w-3 h-3 text-amber-500" />
                <span>Tier-1 Solar</span>
              </div>
            </div>
          )}

          {type === 'battery' && (
            <div className="flex flex-col items-center">
              <div className="w-20 h-16 sm:w-24 sm:h-20 bg-slate-900 rounded-xl shadow-md border-2 border-slate-700 flex flex-col justify-between p-2">
                <div className="flex justify-between items-center text-[8px] text-slate-300 font-mono">
                  <span>LiFePO4</span>
                  <span className="text-emerald-400">48V 200Ah</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 p-0.5 flex gap-1">
                  <div className="w-full bg-emerald-500 rounded-full" />
                </div>
                <div className="flex items-center justify-center gap-1 text-[9px] text-white font-bold">
                  <BatteryCharging className="w-3 h-3 text-emerald-400" />
                  <span>10.2 kWh Storage</span>
                </div>
              </div>
            </div>
          )}

          {type === 'cctv' && (
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full shadow-md border-2 border-slate-200 flex flex-col items-center justify-center relative p-2">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center border-2 border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-blue-600/80 ring-2 ring-red-500/50" />
                </div>
                <div className="absolute top-1 right-2 w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
              </div>
              <div className="flex items-center gap-1 mt-1 text-[9px] font-bold text-[#082B5B]">
                <Camera className="w-3 h-3 text-[#F20D25]" />
                <span>Smart CCTV 4MP</span>
              </div>
            </div>
          )}

          {type === 'kit' && (
            <div className="flex items-center gap-1 bg-white/80 backdrop-blur-xs p-2 rounded-xl shadow-sm border border-slate-200">
              <Sun className="w-5 h-5 text-amber-500" />
              <Zap className="w-5 h-5 text-[#F20D25]" />
              <Shield className="w-5 h-5 text-[#082B5B]" />
            </div>
          )}

          {type === 'accessory' && (
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center">
                <Wrench className="w-7 h-7 text-[#082B5B]" />
              </div>
              <span className="text-[9px] font-bold text-slate-500 mt-1">Solar Accessory</span>
            </div>
          )}

          {(type === 'technician' || type === 'banner' || type === 'generic') && (
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#082B5B] to-[#F20D25] flex items-center justify-center text-white shadow-md mb-1">
                <Shield className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-black text-[#082B5B] tracking-wider uppercase">
                {brandText || 'BMV Solar & Security'}
              </span>
            </div>
          )}

          {/* Label caption */}
          <span className="text-[10px] sm:text-xs font-bold text-slate-600 max-w-[140px] truncate mt-1">
            {alt}
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading={loading}
      onError={handleImageError}
      {...rest}
    />
  );
};

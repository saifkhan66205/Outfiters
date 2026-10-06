import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { GenderCategory } from '../types';
import { HERO_VIDEO_URL } from '../data/products';

interface HeroVideoBannerProps {
  onSelectCategory: (category: GenderCategory) => void;
  onExploreLookbook: () => void;
}

export const HeroVideoBanner: React.FC<HeroVideoBannerProps> = ({
  onSelectCategory,
  onExploreLookbook,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] max-h-[920px] bg-black overflow-hidden select-none flex items-center justify-center pt-16">
      {/* Looping Streetwear Video Background */}
      <video
        ref={videoRef}
        src={HERO_VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center opacity-85 pointer-events-none"
      />

      {/* Measured Scrim Gradient for Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/50 pointer-events-none" />

      {/* Hero Center Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center">
        <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.95] max-w-4xl text-balance">
          UNFILTERED STREETWEAR
        </h1>

        <p className="mt-4 text-xs sm:text-sm md:text-base text-neutral-200 font-light tracking-widest uppercase max-w-xl">
          Heavyweight essentials, wide-leg raw denim and contemporary boxy cuts.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={() => onSelectCategory('women')}
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-heading font-bold text-xs uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all duration-200 shadow-xl"
          >
            SHOP WOMEN
          </button>

          <button
            onClick={() => onSelectCategory('men')}
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-white text-white font-heading font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-200"
          >
            SHOP MEN
          </button>

          <button
            onClick={onExploreLookbook}
            className="w-full sm:w-auto px-6 py-3.5 bg-black/40 backdrop-blur-md border border-neutral-600 text-neutral-300 font-heading font-semibold text-xs uppercase tracking-[0.15em] hover:text-white hover:border-white transition-all flex items-center justify-center gap-2"
          >
            <span>DENIM VAULT</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};


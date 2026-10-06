import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GenderCategory } from '../types';
import { womenCampaignImg, menStreetwearImg } from '../data/products';

interface SplitCampaignFramesProps {
  onSelectCategory: (category: GenderCategory) => void;
}

export const SplitCampaignFrames: React.FC<SplitCampaignFramesProps> = ({ onSelectCategory }) => {
  return (
    <section className="w-full bg-[#fafafa] py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Clean Header without small micro-subheadings */}
        <div className="mb-8 pb-4 border-b border-neutral-300">
          <h2 className="text-2xl sm:text-4xl font-heading font-black uppercase tracking-tight text-neutral-900">
            THE CONTEMPORARY FRAMES
          </h2>
        </div>

        {/* The Two Main Editorial Frames */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Frame 1: Women */}
          <div 
            onClick={() => onSelectCategory('women')}
            className="group relative cursor-pointer overflow-hidden bg-neutral-900 aspect-[3/4] flex flex-col justify-end p-6 sm:p-10 shadow-sm"
          >
            <img 
              src={womenCampaignImg} 
              alt="Outfitters Women" 
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95"
            />
            {/* Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

            <div className="relative z-10 text-white flex flex-col">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black uppercase tracking-tight leading-none">
                WOMEN
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200 mt-2 font-light max-w-md">
                Boxy blazers, sculpted knit co-ords, and wide-leg trousers.
              </p>

              <div className="mt-6 flex items-center">
                <button 
                  className="px-6 py-3 bg-white text-black font-heading font-bold text-xs uppercase tracking-[0.2em] group-hover:bg-neutral-200 transition-colors flex items-center gap-2"
                >
                  <span>SHOP WOMEN</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Frame 2: Men */}
          <div 
            onClick={() => onSelectCategory('men')}
            className="group relative cursor-pointer overflow-hidden bg-neutral-900 aspect-[3/4] flex flex-col justify-end p-6 sm:p-10 shadow-sm"
          >
            <img 
              src={menStreetwearImg} 
              alt="Outfitters Men" 
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95"
            />
            {/* Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

            <div className="relative z-10 text-white flex flex-col">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black uppercase tracking-tight leading-none">
                MEN
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200 mt-2 font-light max-w-md">
                Heavyweight tees, drop-shoulder hoodies, and tactical cargo pants.
              </p>

              <div className="mt-6 flex items-center">
                <button 
                  className="px-6 py-3 bg-white text-black font-heading font-bold text-xs uppercase tracking-[0.2em] group-hover:bg-neutral-200 transition-colors flex items-center gap-2"
                >
                  <span>SHOP MEN</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

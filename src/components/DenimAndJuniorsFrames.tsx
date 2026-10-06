import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { GenderCategory } from '../types';
import { denimCollectionImg, juniorsKidsImg } from '../data/products';

interface DenimAndJuniorsFramesProps {
  onSelectCategory: (category: GenderCategory) => void;
}

export const DenimAndJuniorsFrames: React.FC<DenimAndJuniorsFramesProps> = ({ onSelectCategory }) => {
  return (
    <section className="w-full bg-[#f5f5f4] py-14 px-4 sm:px-6 lg:px-8 border-b border-neutral-300">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Frame A: The Denim Vault */}
        <div className="bg-white border border-neutral-300 grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-sm">
          
          <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-neutral-900 group">
            <img
              src={denimCollectionImg}
              alt="Outfitters Denim Vault"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl lg:text-4xl font-heading font-black uppercase tracking-tight text-neutral-900 leading-tight">
                DENIM VAULT
              </h3>

              <p className="mt-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                From wide-leg carpenter pants with utility hammer loops to sculpted barrel fits and vintage stonewash jackets. Every pair is crafted with durable, authentic cotton denim built to age with character.
              </p>

              {/* Fit highlights list */}
              <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-neutral-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900" />
                  <span className="font-semibold uppercase tracking-wider text-[11px]">Baggy Carpenter</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900" />
                  <span className="font-semibold uppercase tracking-wider text-[11px]">Curved Barrel</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900" />
                  <span className="font-semibold uppercase tracking-wider text-[11px]">Vintage Acid Tint</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900" />
                  <span className="font-semibold uppercase tracking-wider text-[11px]">Raw Rigid Indigo</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onSelectCategory('denim')}
                className="px-8 py-3.5 bg-black text-white font-heading font-bold text-xs uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors flex items-center gap-2"
              >
                <span>EXPLORE DENIM</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Frame B: Juniors Club */}
        <div className="bg-white border border-neutral-300 grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-sm">
          
          <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between order-2 lg:order-1">
            <div>
              <h3 className="text-3xl lg:text-4xl font-heading font-black uppercase tracking-tight text-neutral-900 leading-tight">
                JUNIORS
              </h3>

              <p className="mt-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Cool skater silhouettes sized down for the next generation. Pastel color-blocked fleece sweatshirts, easy elastic-waist relaxed jeans, and playful graphic tees.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs font-medium uppercase tracking-wider">
                  Boys
                </span>
                <span className="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs font-medium uppercase tracking-wider">
                  Girls
                </span>
                <span className="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs font-medium uppercase tracking-wider">
                  Toddlers
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onSelectCategory('juniors')}
                className="px-8 py-3.5 bg-black text-white font-heading font-bold text-xs uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors flex items-center gap-2"
              >
                <span>SHOP JUNIORS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-neutral-900 group order-1 lg:order-2">
            <img
              src={juniorsKidsImg}
              alt="Outfitters Juniors"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

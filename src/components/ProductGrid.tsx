import React, { useState } from 'react';
import { Grid2X2, Grid3X3, LayoutGrid } from 'lucide-react';
import { Product, GenderCategory } from '../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  activeCategory: GenderCategory | 'all';
  onSelectCategory: (category: GenderCategory | 'all') => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  activeCategory,
  onSelectCategory,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
}) => {
  const [columns, setColumns] = useState<2 | 3 | 4>(4);
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'newest'>('featured');
  const [filterFit, setFilterFit] = useState<string>('all');

  let filtered = products.filter((p) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'sale') return p.isSale;
    return p.category === activeCategory;
  });

  if (filterFit !== 'all') {
    filtered = filtered.filter((p) => p.fit.toLowerCase().includes(filterFit.toLowerCase()));
  }

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    return 0;
  });

  const categoriesList: { id: GenderCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'women', label: 'Women' },
    { id: 'men', label: 'Men' },
    { id: 'denim', label: 'Denim Vault' },
    { id: 'juniors', label: 'Juniors' },
    { id: 'perfumes', label: 'Fragrances' },
    { id: 'sale', label: 'Special Prices' },
  ];

  return (
    <section id="catalog-section" className="w-full bg-[#fafafa] py-14 px-4 sm:px-6 lg:px-8 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Clean Section Header */}
        <div className="mb-8 pb-4 border-b border-neutral-300">
          <h2 className="text-2xl sm:text-4xl font-heading font-black uppercase tracking-tight text-neutral-900">
            TRENDING DROPS
          </h2>
        </div>

        {/* Category Controls */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6">
          {categoriesList.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider transition-all whitespace-nowrap border ${
                activeCategory === cat.id
                  ? cat.id === 'sale'
                    ? 'bg-red-600 text-white border-red-600'
                    : 'bg-black text-white border-black'
                  : cat.id === 'sale'
                    ? 'bg-white text-red-600 border-red-300 hover:border-red-600'
                    : 'bg-white text-neutral-700 border-neutral-300 hover:border-black'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Toolbar: Fit selector, Grid layout switcher, and Sort dropdown */}
        <div className="bg-white border border-neutral-200 p-3 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Fit Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto text-xs">
            {['all', 'Baggy', 'Oversized', 'Relaxed', 'Barrel', 'Tailored'].map((fit) => (
              <button
                key={fit}
                onClick={() => setFilterFit(fit)}
                className={`px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider transition-colors ${
                  filterFit === fit
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:text-black'
                }`}
              >
                {fit === 'all' ? 'All Fits' : fit}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs text-neutral-600">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-neutral-50 border border-neutral-200 py-1.5 px-3 text-xs font-medium text-neutral-800 focus:outline-none focus:border-black"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Column Switcher */}
            <div className="hidden lg:flex items-center gap-1 border-l border-neutral-200 pl-3">
              <button
                onClick={() => setColumns(2)}
                className={`p-1.5 rounded transition-colors ${
                  columns === 2 ? 'bg-neutral-900 text-white' : 'text-neutral-400 hover:text-black'
                }`}
                title="2 Columns"
                aria-label="2 Columns View"
              >
                <Grid2X2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setColumns(3)}
                className={`p-1.5 rounded transition-colors ${
                  columns === 3 ? 'bg-neutral-900 text-white' : 'text-neutral-400 hover:text-black'
                }`}
                title="3 Columns"
                aria-label="3 Columns View"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setColumns(4)}
                className={`p-1.5 rounded transition-colors ${
                  columns === 4 ? 'bg-neutral-900 text-white' : 'text-neutral-400 hover:text-black'
                }`}
                title="4 Columns"
                aria-label="4 Columns View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        {sorted.length > 0 ? (
          <div
            className={`grid gap-4 sm:gap-6 ${
              columns === 2
                ? 'grid-cols-1 sm:grid-cols-2'
                : columns === 3
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            }`}
          >
            {sorted.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlistIds.includes(product.id)}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-white border border-neutral-200 p-8">
            <p className="text-base font-heading uppercase text-neutral-600">No matching garments found</p>
            <button
              onClick={() => {
                onSelectCategory('all');
                setFilterFit('all');
              }}
              className="mt-4 px-6 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

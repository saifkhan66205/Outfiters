import React, { useState } from 'react';
import { Heart, Eye, ShoppingBag, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [addedSize, setAddedSize] = useState<string | null>(null);

  const selectedColor = product.colors[selectedColorIndex] || product.colors[0];

  const handleQuickAdd = (size: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, size, selectedColor.name);
    setAddedSize(size);
    setTimeout(() => setAddedSize(null), 1400);
  };

  return (
    <div 
      className="group relative flex flex-col bg-white border border-neutral-200 hover:border-neutral-400 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Frame */}
      <div 
        onClick={() => onQuickView(product)}
        className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 cursor-pointer"
      >
        <img
          src={isHovered ? product.secondaryImage : product.primaryImage}
          alt={product.title}
          className="w-full h-full object-cover object-center transition-all duration-500 ease-out group-hover:scale-105"
        />

        {/* Status Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          {product.discountPercent && (
            <span className="bg-red-600 text-white text-[10px] font-heading font-black tracking-wider uppercase px-2 py-0.5 shadow-xs">
              {product.discountPercent}% OFF
            </span>
          )}
          {product.isNew && !product.discountPercent && (
            <span className="bg-black text-white text-[10px] font-heading font-bold tracking-wider uppercase px-2 py-0.5">
              NEW
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-2.5 right-2.5 z-10 p-2 rounded-full transition-all duration-200 ${
            isWishlisted 
              ? 'bg-red-50 text-red-600 opacity-100' 
              : 'bg-white/80 hover:bg-white text-neutral-700 opacity-0 group-hover:opacity-100'
          }`}
          aria-label="Save to wishlist"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-600' : ''}`} />
        </button>

        {/* Quick View Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 px-4 py-2 bg-white/95 text-black text-[11px] font-heading font-bold uppercase tracking-widest shadow-lg opacity-0 group-hover:opacity-100 hover:bg-black hover:text-white transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Quick View</span>
        </button>

        {/* Quick Size Selector Bar on Hover */}
        <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-xs border-t border-neutral-200 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
          <div className="flex items-center justify-center gap-1 overflow-x-auto no-scrollbar">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={(e) => handleQuickAdd(size, e)}
                className={`min-w-7 h-7 px-1 text-[11px] font-mono font-bold transition-all border ${
                  addedSize === size
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-neutral-50 hover:bg-black hover:text-white border-neutral-300 text-neutral-800'
                }`}
                title={`Add size ${size}`}
              >
                {addedSize === size ? <Check className="w-3 h-3 mx-auto" /> : size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Details Section without subheadings */}
      <div className="p-3 sm:p-4 flex flex-col justify-between flex-1 bg-white">
        <div>
          {/* Product Title */}
          <h3 
            onClick={() => onQuickView(product)}
            className="text-xs sm:text-sm font-heading font-bold text-neutral-900 line-clamp-1 hover:underline cursor-pointer uppercase tracking-tight"
          >
            {product.title}
          </h3>

          {/* Color Swatch Dots */}
          {product.colors.length > 1 && (
            <div className="flex items-center gap-1.5 mt-2">
              {product.colors.map((color, index) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColorIndex(index)}
                  className={`w-3.5 h-3.5 rounded-full border transition-all ${
                    selectedColorIndex === index 
                      ? 'ring-1 ring-offset-1 ring-black scale-110' 
                      : 'border-neutral-300 hover:scale-105'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          )}
        </div>

        {/* Pricing Baseline */}
        <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xs sm:text-sm font-mono font-bold text-neutral-950 tabular-nums">
              PKR {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-[11px] font-mono text-neutral-400 line-through tabular-nums">
                PKR {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          
          <button
            onClick={() => onQuickView(product)}
            className="text-neutral-500 hover:text-black p-1 text-xs"
            title="View details"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

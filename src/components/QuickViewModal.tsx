import React, { useState } from 'react';
import { X, Star, Truck, ShieldCheck, Ruler, Check, Heart } from 'lucide-react';
import { Product } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: string, quantity: number) => void;
  onBuyNow: (product: Product, size: string, color: string, quantity: number) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  isWishlisted,
}) => {
  if (!product) return null;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'M');
  const [quantity, setQuantity] = useState(1);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const images = [
    product.primaryImage,
    product.secondaryImage,
    ...(product.detailImages || [])
  ].filter((v, i, a) => a.indexOf(v) === i);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 800);
  };

  const handleExpressBuy = () => {
    onBuyNow(product, selectedSize, selectedColor, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto animate-fadeIn">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-4xl bg-white border border-neutral-300 shadow-2xl z-10 overflow-hidden my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-neutral-400 hover:text-black transition-colors bg-white/80 rounded-full"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Gallery Column (Left) */}
          <div className="md:col-span-6 bg-neutral-100 p-4 sm:p-6 flex flex-col items-center">
            <div className="w-full aspect-[3/4] bg-neutral-200 overflow-hidden relative shadow-inner">
              <img
                src={images[selectedImageIndex] || product.primaryImage}
                alt={product.title}
                className="w-full h-full object-cover object-center"
              />
              {product.discountPercent && (
                <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-heading font-black px-2 py-0.5 uppercase">
                  {product.discountPercent}% OFF
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex items-center gap-2 mt-4 overflow-x-auto w-full no-scrollbar pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-16 h-20 shrink-0 border-2 overflow-hidden transition-all ${
                      selectedImageIndex === idx ? 'border-black' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* PDP Purchase Module (Right) */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-white">
            <div>
              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-heading font-black uppercase text-neutral-900 leading-tight">
                {product.title}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-amber-500' : 'text-neutral-300'}`}
                    />
                  ))}
                </div>
                <span className="text-xs font-mono text-neutral-600">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl font-mono font-bold text-neutral-950">
                  PKR {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-sm font-mono text-neutral-400 line-through">
                    PKR {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              {/* Color Selection */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="uppercase text-neutral-500 tracking-wider">Color:</span>
                  <span className="font-semibold text-neutral-900">{selectedColor}</span>
                </div>
                <div className="flex items-center gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${
                        selectedColor === color.name ? 'ring-2 ring-black ring-offset-2' : 'border-neutral-300'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColor === color.name && (
                        <Check className="w-3.5 h-3.5 text-white drop-shadow-sm" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="uppercase text-neutral-500 tracking-wider">Select Size:</span>
                  <button
                    onClick={() => setIsSizeGuideOpen(!isSizeGuideOpen)}
                    className="flex items-center gap-1 text-[11px] font-semibold text-neutral-700 hover:text-black underline"
                  >
                    <Ruler className="w-3 h-3" />
                    <span>Size Guide</span>
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-10 h-10 px-3 text-xs font-mono font-bold transition-all border ${
                        selectedSize === size
                          ? 'bg-black text-white border-black shadow-sm'
                          : 'bg-white hover:border-black text-neutral-800 border-neutral-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Guide Table Toggle */}
              {isSizeGuideOpen && (
                <div className="mt-3 p-3 bg-neutral-50 border border-neutral-200 text-xs">
                  <table className="w-full text-left font-mono text-[11px]">
                    <thead>
                      <tr className="border-b border-neutral-200 text-neutral-500">
                        <th className="pb-1">Size</th>
                        <th className="pb-1">Chest</th>
                        <th className="pb-1">Length</th>
                        <th className="pb-1">Shoulder</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                      <tr><td className="py-1 font-bold">S</td><td>42"</td><td>28"</td><td>21"</td></tr>
                      <tr><td className="py-1 font-bold">M</td><td>44"</td><td>29"</td><td>22"</td></tr>
                      <tr><td className="py-1 font-bold">L</td><td>46"</td><td>30"</td><td>23"</td></tr>
                      <tr><td className="py-1 font-bold">XL</td><td>48"</td><td>31"</td><td>24"</td></tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* Quantity */}
              <div className="mt-6 flex items-center gap-4">
                <span className="text-xs uppercase text-neutral-500">Quantity:</span>
                <div className="flex items-center border border-neutral-300 bg-neutral-50">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center text-sm font-bold hover:bg-neutral-200"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-mono text-xs font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center text-sm font-bold hover:bg-neutral-200"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 space-y-2.5">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleAdd}
                    disabled={addedAnimation}
                    className={`flex-1 py-3.5 font-heading font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${
                      addedAnimation
                        ? 'bg-emerald-600 text-white'
                        : 'bg-black hover:bg-neutral-800 text-white'
                    }`}
                  >
                    {addedAnimation ? <Check className="w-4 h-4" /> : null}
                    <span>{addedAnimation ? 'ADDED TO BAG' : 'ADD TO BAG'}</span>
                  </button>

                  <button
                    onClick={() => onToggleWishlist(product)}
                    className={`p-3.5 border transition-colors ${
                      isWishlisted
                        ? 'border-red-300 text-red-600 bg-red-50'
                        : 'border-neutral-300 text-neutral-700 hover:border-black'
                    }`}
                    title="Wishlist"
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-600' : ''}`} />
                  </button>
                </div>

                <button
                  onClick={handleExpressBuy}
                  className="w-full py-3.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-300 font-heading font-bold text-xs uppercase tracking-[0.2em] transition-colors"
                >
                  BUY IT NOW
                </button>
              </div>

            </div>

            {/* Guarantees */}
            <div className="mt-6 pt-4 border-t border-neutral-200 space-y-2 text-[11px] text-neutral-600">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-neutral-800" />
                <span>Free delivery on orders over PKR 3,490 across Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-neutral-800" />
                <span>7-Day Easy Exchange Policy at any retail store</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

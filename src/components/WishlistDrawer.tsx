import React from 'react';
import { X, Heart, Trash2, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveFromWishlist: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  onQuickView: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onAddToCart,
  onQuickView,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-600 fill-red-600" />
              <h2 className="font-heading font-black text-sm uppercase tracking-wider text-black">
                SAVED ITEMS ({wishlistProducts.length})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-black transition-colors"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-neutral-100">
            {wishlistProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-neutral-500">
                <Heart className="w-12 h-12 text-neutral-300 mb-3" />
                <p className="font-heading uppercase font-bold text-sm text-neutral-800">Your wishlist is empty</p>
                <p className="text-xs text-neutral-500 mt-1 max-w-xs">Tap the heart on any product card to curate your favorite streetwear.</p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-3 bg-black text-white text-xs font-heading font-bold uppercase tracking-widest hover:bg-neutral-800"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              wishlistProducts.map((product) => (
                <div key={product.id} className="py-4 flex gap-4">
                  <img
                    src={product.primaryImage}
                    alt={product.title}
                    onClick={() => {
                      onQuickView(product);
                      onClose();
                    }}
                    className="w-20 h-24 object-cover bg-neutral-100 shrink-0 cursor-pointer hover:opacity-90"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 
                          onClick={() => {
                            onQuickView(product);
                            onClose();
                          }}
                          className="text-xs font-heading font-bold text-neutral-900 uppercase truncate cursor-pointer hover:underline"
                        >
                          {product.title}
                        </h4>
                        <button
                          onClick={() => onRemoveFromWishlist(product)}
                          className="text-neutral-400 hover:text-red-600 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-[11px] font-mono text-neutral-500 mt-0.5">{product.fit}</p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs font-mono font-bold text-neutral-900">
                        PKR {product.price.toLocaleString()}
                      </span>

                      <button
                        onClick={() => {
                          const size = product.sizes[0] || 'M';
                          const color = product.colors[0]?.name || 'Standard';
                          onAddToCart(product, size, color);
                        }}
                        className="px-3 py-1.5 bg-black hover:bg-neutral-800 text-white text-[10px] font-heading font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Move to Bag</span>
                      </button>
                    </div>

                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  Menu, 
  X, 
  MapPin, 
  Truck, 
  ArrowRight 
} from 'lucide-react';
import { GenderCategory, Product } from '../types';
import { PRODUCTS } from '../data/products';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenStoreLocator: () => void;
  onOpenTrackOrder: () => void;
  onSelectCategory: (category: GenderCategory | 'all') => void;
  onSelectProduct: (product: Product) => void;
  activeCategory: GenderCategory | 'all';
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  cartTotal,
  onOpenCart,
  onOpenWishlist,
  onOpenStoreLocator,
  onOpenTrackOrder,
  onSelectCategory,
  onSelectProduct,
  activeCategory,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const filteredSearchResults = searchQuery.trim() === '' 
    ? [] 
    : PRODUCTS.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.fit.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const navItems: { label: string; cat: GenderCategory | 'all'; highlight?: boolean }[] = [
    { label: 'WOMEN', cat: 'women' },
    { label: 'MEN', cat: 'men' },
    { label: 'JUNIORS', cat: 'juniors' },
    { label: 'DENIM VAULT', cat: 'denim' },
    { label: 'FRAGRANCES', cat: 'perfumes' },
    { label: 'SPECIAL PRICES', cat: 'sale', highlight: true },
  ];

  return (
    <>
      {/* Merged Header over Hero Section */}
      <header 
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-md py-3.5 shadow-lg border-b border-neutral-800 text-white' 
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 text-white'
        }`}
      >
        <div className="w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Left Side: 3-Line Menu Bar + Brand Logo pushed to the side */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* 3-Line Hamburger Bar Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2 p-1 text-white hover:text-neutral-300 transition-colors group"
              aria-label="Open navigation menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between py-0.5">
                <span className="w-6 h-0.5 bg-white group-hover:bg-neutral-300 transition-colors" />
                <span className="w-6 h-0.5 bg-white group-hover:bg-neutral-300 transition-colors" />
                <span className="w-4 h-0.5 bg-white group-hover:w-6 transition-all" />
              </div>
              <span className="text-xs font-heading font-bold uppercase tracking-widest hidden sm:inline">
                Menu
              </span>
            </button>

            {/* Brand Logo pushed to the side */}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                onSelectCategory('all');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center"
            >
              <span className="font-heading font-black text-2xl sm:text-3xl tracking-[0.22em] text-white uppercase select-none">
                OUTFITTERS
              </span>
            </a>
          </div>

          {/* Right Side: Search, Wishlist, Bag pushed to the side */}
          <div className="flex items-center gap-3 sm:gap-5">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-white hover:text-neutral-300 transition-colors"
              title="Search"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenWishlist}
              className="relative p-2 text-white hover:text-neutral-300 transition-colors"
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenCart}
              className="flex items-center gap-2 px-3 py-1.5 bg-white text-black hover:bg-neutral-200 transition-colors"
              aria-label="Shopping Bag"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-3.5 h-3.5 bg-red-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-xs font-heading font-bold tracking-wider uppercase hidden sm:inline">
                Bag {cartTotal > 0 ? `· PKR ${cartTotal.toLocaleString()}` : ''}
              </span>
            </button>
          </div>

        </div>
      </header>

      {/* 3-Line Menu Drawer (Holds all categories and options) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsMenuOpen(false)} 
          />

          {/* Sidebar Drawer */}
          <div className="relative w-full max-w-md bg-neutral-950 text-white h-full flex flex-col shadow-2xl z-10 overflow-y-auto border-r border-neutral-800">
            
            {/* Drawer Top */}
            <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
              <span className="font-heading font-black text-2xl tracking-[0.2em] uppercase text-white">
                OUTFITTERS
              </span>
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="p-2 text-neutral-400 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Categories */}
            <div className="p-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    onSelectCategory(item.cat);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left py-4 px-3 text-lg font-heading font-black uppercase tracking-[0.15em] flex items-center justify-between border-b border-neutral-900 hover:bg-neutral-900 transition-colors ${
                    activeCategory === item.cat 
                      ? 'text-white pl-5 border-l-2 border-l-white' 
                      : item.highlight 
                        ? 'text-red-500 hover:text-red-400' 
                        : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </button>
              ))}
            </div>

            {/* Utility Links in Menu */}
            <div className="p-6 mt-auto border-t border-neutral-800 space-y-3 bg-neutral-900/60 text-xs">
              <button
                onClick={() => {
                  onOpenStoreLocator();
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 py-2.5 text-neutral-300 hover:text-white font-medium transition-colors"
              >
                <MapPin className="w-4 h-4 text-neutral-400" />
                <span className="font-heading uppercase tracking-wider">Retail Stores Pakistan</span>
              </button>

              <button
                onClick={() => {
                  onOpenTrackOrder();
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 py-2.5 text-neutral-300 hover:text-white font-medium transition-colors"
              >
                <Truck className="w-4 h-4 text-neutral-400" />
                <span className="font-heading uppercase tracking-wider">Track Courier Order</span>
              </button>

              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-neutral-400 font-mono text-[11px]">
                <span>CURRENCY:</span>
                <span className="font-bold text-white">PKR (Rs.)</span>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Live Search Overlay */}
      {isSearchOpen && (
        <div className="fixed top-0 inset-x-0 z-50 bg-neutral-950 text-white shadow-2xl py-6 px-4 border-b border-neutral-800 animate-fadeIn">
          <div className="max-w-4xl mx-auto">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-neutral-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, baggy jeans, graphic tees, perfumes..."
                className="w-full pl-12 pr-12 py-3.5 bg-neutral-900 border border-neutral-700 text-sm focus:outline-none focus:border-white font-medium text-white placeholder-neutral-500"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-4 text-neutral-400 hover:text-white p-1"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick search tags */}
            <div className="mt-3 flex items-center gap-2 overflow-x-auto no-scrollbar text-xs text-neutral-400">
              <span className="font-bold uppercase tracking-wider text-[11px] shrink-0 text-neutral-300">Popular:</span>
              {['Baggy Denim', 'Graphic Hoodie', 'Parachute Pants', 'Noir Velvet Perfume', 'Oversized Tee'].map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors whitespace-nowrap text-xs"
                >
                  {term}
                </button>
              ))}
            </div>

            {/* Live Results Preview */}
            {searchQuery.trim() !== '' && (
              <div className="mt-6 border-t border-neutral-800 pt-4">
                <div className="flex items-center justify-between mb-3 text-xs text-neutral-400">
                  <span>Found {filteredSearchResults.length} items for "{searchQuery}"</span>
                </div>
                {filteredSearchResults.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-h-96 overflow-y-auto pr-1">
                    {filteredSearchResults.map((prod) => (
                      <div
                        key={prod.id}
                        onClick={() => {
                          onSelectProduct(prod);
                          setIsSearchOpen(false);
                        }}
                        className="group cursor-pointer flex flex-col gap-2 p-2 hover:bg-neutral-900 transition-colors"
                      >
                        <div className="aspect-[3/4] bg-neutral-900 overflow-hidden relative">
                          <img
                            src={prod.primaryImage}
                            alt={prod.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-neutral-200 line-clamp-1">{prod.title}</p>
                          <p className="text-xs font-bold text-white mt-1 font-mono">
                            PKR {prod.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-neutral-400 py-6 text-center">No matching outfits found.</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

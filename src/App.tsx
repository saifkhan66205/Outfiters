/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroVideoBanner } from './components/HeroVideoBanner';
import { SplitCampaignFrames } from './components/SplitCampaignFrames';
import { DenimAndJuniorsFrames } from './components/DenimAndJuniorsFrames';
import { ProductGrid } from './components/ProductGrid';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { StoreLocatorModal } from './components/StoreLocatorModal';
import { TrackOrderModal } from './components/TrackOrderModal';
import { Footer } from './components/Footer';

import { Product, CartItem, GenderCategory, OrderDetails } from './types';
import { PRODUCTS } from './data/products';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<GenderCategory | 'all'>('all');
  const [cartItems, setCartItems] = useState<CartItem[]>(() => [
    {
      id: 'of-001-L-Washed Charcoal',
      product: PRODUCTS[0],
      selectedSize: 'L',
      selectedColor: 'Washed Charcoal',
      quantity: 1,
    }
  ]);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['of-003', 'of-002']);

  // Modals & Drawers state
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isStoreLocatorOpen, setIsStoreLocatorOpen] = useState(false);
  const [isTrackOrderOpen, setIsTrackOrderOpen] = useState(false);

  // Discount & Promo State
  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscountPercent, setAppliedDiscountPercent] = useState(0);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Cart operations
  const handleAddToCart = (product: Product, size: string, color: string, quantity = 1) => {
    const itemKey = `${product.id}-${size}-${color}`;
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === itemKey);
      if (existing) {
        return prev.map((item) =>
          item.id === itemKey
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: itemKey,
          product,
          selectedSize: size,
          selectedColor: color,
          quantity,
        },
      ];
    });
    showToast(`Added "${product.title}" (${size}) to Bag!`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Buy now express flow
  const handleBuyNow = (product: Product, size: string, color: string, quantity = 1) => {
    handleAddToCart(product, size, color, quantity);
    setIsCheckoutOpen(true);
  };

  // Wishlist toggle
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(product.id);
      if (exists) {
        showToast(`Removed from Wishlist`);
        return prev.filter((id) => id !== product.id);
      } else {
        showToast(`Saved to Wishlist!`);
        return [...prev, product.id];
      }
    });
  };

  // Apply discount code
  const handleApplyDiscount = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'STREET30') {
      setDiscountCode(clean);
      setAppliedDiscountPercent(30);
      return { success: true, message: '30% Discount Applied' };
    }
    if (clean === 'WELCOME500' || clean === 'OUTFITTERS10') {
      setDiscountCode(clean);
      setAppliedDiscountPercent(10);
      return { success: true, message: '10% Discount Applied' };
    }
    return { success: false, message: 'Invalid code. Try STREET30 or WELCOME500' };
  };

  // Cart calculations
  const cartSubtotal = cartItems.reduce((acc, i) => acc + i.product.price * i.quantity, 0);
  const discountAmount = Math.round((cartSubtotal * appliedDiscountPercent) / 100);
  const isFreeShipping = cartSubtotal >= 3490;
  const shippingFee = cartItems.length === 0 ? 0 : isFreeShipping ? 0 : 250;
  const cartTotal = Math.max(0, cartSubtotal - discountAmount + shippingFee);
  const cartTotalQuantity = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  const handleSelectCategory = (cat: GenderCategory | 'all') => {
    setActiveCategory(cat);
    const catalogEl = document.getElementById('catalog-section');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col font-sans text-neutral-900 selection:bg-black selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-black text-white px-5 py-3 shadow-2xl border border-neutral-700 text-xs font-heading font-bold uppercase tracking-wider animate-bounce flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Merged Header with 3-Line Menu Bar & Logo pushed to side */}
      <Header
        cartCount={cartTotalQuantity}
        wishlistCount={wishlistIds.length}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenStoreLocator={() => setIsStoreLocatorOpen(true)}
        onOpenTrackOrder={() => setIsTrackOrderOpen(true)}
        onSelectCategory={handleSelectCategory}
        onSelectProduct={(p) => setQuickViewProduct(p)}
        activeCategory={activeCategory}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Cinematic Video merged seamlessly under header */}
        <HeroVideoBanner
          onSelectCategory={handleSelectCategory}
          onExploreLookbook={() => handleSelectCategory('denim')}
        />

        {/* Split Editorial Campaign Frames */}
        <SplitCampaignFrames onSelectCategory={handleSelectCategory} />

        {/* Denim Vault & Juniors Feature Frames */}
        <DenimAndJuniorsFrames onSelectCategory={handleSelectCategory} />

        {/* Catalog & Trending Drops Grid */}
        <ProductGrid
          products={PRODUCTS}
          activeCategory={activeCategory}
          onSelectCategory={(cat) => setActiveCategory(cat)}
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={(p, s, c) => handleAddToCart(p, s, c)}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenStoreLocator={() => setIsStoreLocatorOpen(true)}
        onOpenTrackOrder={() => setIsTrackOrderOpen(true)}
      />

      {/* Modals & Slide-out Drawers */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(p, s, c, q) => handleAddToCart(p, s, c, q)}
        onBuyNow={handleBuyNow}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        discountCode={discountCode}
        onApplyDiscount={handleApplyDiscount}
        appliedDiscountPercent={appliedDiscountPercent}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={handleToggleWishlist}
        onAddToCart={(p, s, c) => handleAddToCart(p, s, c)}
        onQuickView={(p) => setQuickViewProduct(p)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        subtotal={cartSubtotal}
        discount={discountAmount}
        shipping={shippingFee}
        total={cartTotal}
        onOrderPlaced={(order) => {
          setCartItems([]);
          showToast(`Order ${order.orderId} placed successfully!`);
        }}
      />

      <StoreLocatorModal
        isOpen={isStoreLocatorOpen}
        onClose={() => setIsStoreLocatorOpen(false)}
      />

      <TrackOrderModal
        isOpen={isTrackOrderOpen}
        onClose={() => setIsTrackOrderOpen(false)}
      />
    </div>
  );
}

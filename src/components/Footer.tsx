import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface FooterProps {
  onOpenStoreLocator: () => void;
  onOpenTrackOrder: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenStoreLocator, onOpenTrackOrder }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="w-full bg-[#111111] text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Banner */}
        <div className="bg-neutral-900 border border-neutral-800 p-6 sm:p-10 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-heading font-black uppercase text-white">
              GET PKR 500 OFF YOUR FIRST ORDER
            </h3>
            <p className="text-xs text-neutral-400 mt-2 font-light">
              Subscribe for early access to lookbooks, secret drops, and seasonal discounts.
            </p>
          </div>

          <div className="w-full lg:w-auto min-w-[320px]">
            {subscribed ? (
              <div className="p-3 bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-mono flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>WELCOME! USE PROMO CODE <strong>WELCOME500</strong> AT CHECKOUT.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white font-medium"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-black font-heading font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors shrink-0"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-12 border-b border-neutral-800 text-xs">
          
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <span className="font-heading font-black text-2xl tracking-[0.2em] uppercase text-white">
              OUTFITTERS
            </span>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Pakistan's premier high-street destination for western wear. Crafting authentic street utility, heavy washed denim, and youth culture silhouettes.
            </p>
            <div className="pt-2 text-neutral-400 space-y-1 font-mono text-[11px]">
              <p>UAN: +92 42 111 688 348</p>
              <p>Email: contactus@outfitters.com.pk</p>
            </div>
          </div>

          {/* Column 1: Customer Care */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white">
              CUSTOMER CARE
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button onClick={onOpenTrackOrder} className="hover:text-white transition-colors">
                  Track Your Order
                </button>
              </li>
              <li>
                <button onClick={onOpenStoreLocator} className="hover:text-white transition-colors">
                  Store Locator Pakistan
                </button>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">7-Day Exchanges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Column 2: About Us */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white">
              ABOUT US
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">Brand Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Denim Vault</a></li>
            </ul>
          </div>

          {/* Column 3: Collections */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white">
              COLLECTIONS
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#catalog-section" className="hover:text-white transition-colors">Women</a></li>
              <li><a href="#catalog-section" className="hover:text-white transition-colors">Men</a></li>
              <li><a href="#catalog-section" className="hover:text-white transition-colors">Denim Vault</a></li>
              <li><a href="#catalog-section" className="hover:text-white transition-colors">Juniors</a></li>
              <li><a href="#catalog-section" className="hover:text-white transition-colors">Fragrances</a></li>
              <li><a href="#catalog-section" className="text-red-400 hover:text-red-300 transition-colors">Special Prices</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Payments & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-mono">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-semibold text-neutral-400 uppercase tracking-widest text-[10px]">PAYMENTS:</span>
            <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300">VISA</span>
            <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300">MASTERCARD</span>
            <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300">PAYFAST</span>
          </div>

          <div>
            © 2026 OUTFITTERS PAKISTAN. ALL RIGHTS RESERVED.
          </div>
        </div>

      </div>
    </footer>
  );
};

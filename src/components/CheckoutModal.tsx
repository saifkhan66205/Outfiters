import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, CreditCard, Banknote, ArrowRight } from 'lucide-react';
import { CartItem, OrderDetails } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  onOrderPlaced: (order: OrderDetails) => void;
}

const PAKISTAN_CITIES = [
  'Lahore',
  'Karachi',
  'Islamabad',
  'Rawalpindi',
  'Faisalabad',
  'Multan',
  'Peshawar',
  'Sialkot',
  'Gujranwala',
  'Quetta',
  'Hyderabad',
  'Abbottabad',
  'Bahawalpur',
  'Sargodha',
  'Other City'
];

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  subtotal,
  discount,
  shipping,
  total,
  onOrderPlaced,
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: 'Lahore',
    postalCode: '',
    paymentMethod: 'cod' as 'cod' | 'card' | 'easypaisa' | 'jazzcash',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<OrderDetails | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newOrder: OrderDetails = {
        orderId: `OF-${Math.floor(100000 + Math.random() * 900000)}`,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        postalCode: formData.postalCode || '54000',
        paymentMethod: formData.paymentMethod,
        items,
        subtotal,
        shipping,
        discount,
        total,
        createdAt: new Date().toLocaleDateString('en-PK', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        status: 'Confirmed'
      };

      setCompletedOrder(newOrder);
      onOrderPlaced(newOrder);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto animate-fadeIn">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-3xl bg-white border border-neutral-300 shadow-2xl z-10 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-2">
            <span className="font-heading font-black text-lg tracking-[0.15em] uppercase">CHECKOUT</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-black transition-colors"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {completedOrder ? (
            /* Order Success View */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-heading font-black uppercase text-neutral-900">
                  THANK YOU, {completedOrder.fullName.toUpperCase()}!
                </h3>
                <p className="text-xs text-neutral-600 max-w-md mx-auto">
                  Your order has been booked. Confirmation and tracking details will be sent to <strong className="text-neutral-900">{completedOrder.phone}</strong>.
                </p>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 p-4 max-w-md mx-auto text-left space-y-2 text-xs">
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <span className="text-neutral-500 uppercase">Order Number:</span>
                  <span className="font-mono font-bold text-neutral-900">{completedOrder.orderId}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <span className="text-neutral-500 uppercase">Payment:</span>
                  <span className="font-mono font-bold uppercase text-neutral-900">
                    {completedOrder.paymentMethod === 'cod' ? 'Pay Upon Delivery' : 'Debit / Credit Card'}
                  </span>
                </div>
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <span className="text-neutral-500 uppercase">Destination:</span>
                  <span className="font-semibold text-neutral-900">{completedOrder.city}, Pakistan</span>
                </div>
                <div className="flex justify-between border-b border-neutral-200 pb-2">
                  <span className="text-neutral-500 uppercase">Estimated Delivery:</span>
                  <span className="font-semibold text-neutral-900">2 - 4 Business Days</span>
                </div>
                <div className="flex justify-between pt-1 text-sm font-bold">
                  <span>Total:</span>
                  <span className="font-mono">PKR {completedOrder.total.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="mt-6 px-8 py-3 bg-black text-white text-xs font-heading font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
              >
                Back To Store
              </button>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Delivery Details */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-black border-b border-neutral-200 pb-2 mb-4 font-heading">
                  Delivery Information
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-neutral-600 font-medium mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full p-2.5 bg-neutral-50 border border-neutral-300 focus:outline-none focus:border-black font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-600 font-medium mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-2.5 bg-neutral-50 border border-neutral-300 focus:outline-none focus:border-black font-medium"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-neutral-600 font-medium mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-2.5 bg-neutral-50 border border-neutral-300 focus:outline-none focus:border-black font-medium"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-neutral-600 font-medium mb-1">Complete Address *</label>
                    <textarea
                      required
                      rows={2}
                      placeholder="Street address, apartment or house number"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full p-2.5 bg-neutral-50 border border-neutral-300 focus:outline-none focus:border-black font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-600 font-medium mb-1">City *</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full p-2.5 bg-neutral-50 border border-neutral-300 focus:outline-none focus:border-black font-medium"
                    >
                      {PAKISTAN_CITIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-neutral-600 font-medium mb-1">Postal Code</label>
                    <input
                      type="text"
                      placeholder="e.g. 54000"
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full p-2.5 bg-neutral-50 border border-neutral-300 focus:outline-none focus:border-black font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-black border-b border-neutral-200 pb-2 mb-4 font-heading">
                  Payment Method
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <label 
                    className={`flex items-start gap-3 p-3.5 border cursor-pointer transition-all ${
                      formData.paymentMethod === 'cod' 
                        ? 'border-black bg-neutral-50 ring-1 ring-black' 
                        : 'border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                      className="mt-0.5 text-black focus:ring-black"
                    />
                    <div>
                      <div className="flex items-center gap-1.5 font-bold text-neutral-900 uppercase">
                        <Banknote className="w-4 h-4 text-neutral-700" />
                        <span>Pay Upon Delivery</span>
                      </div>
                      <p className="text-[11px] text-neutral-500 mt-0.5">Pay when parcel arrives at your door.</p>
                    </div>
                  </label>

                  <label 
                    className={`flex items-start gap-3 p-3.5 border cursor-pointer transition-all ${
                      formData.paymentMethod === 'card' 
                        ? 'border-black bg-neutral-50 ring-1 ring-black' 
                        : 'border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                      className="mt-0.5 text-black focus:ring-black"
                    />
                    <div>
                      <div className="flex items-center gap-1.5 font-bold text-neutral-900 uppercase">
                        <CreditCard className="w-4 h-4 text-neutral-800" />
                        <span>Debit / Credit Card</span>
                      </div>
                      <p className="text-[11px] text-neutral-500 mt-0.5">Visa, Mastercard, PayFast gateway.</p>
                    </div>
                  </label>
                </div>

                {formData.paymentMethod === 'card' && (
                  <div className="mt-4 p-4 bg-neutral-50 border border-neutral-200 grid grid-cols-2 gap-3 text-xs">
                    <div className="col-span-2">
                      <label className="block text-neutral-600 mb-1">Card Number</label>
                      <input
                        type="text"
                        placeholder="4242 ···· ···· 4242"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        className="w-full p-2 bg-white border border-neutral-300 font-mono text-xs focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-600 mb-1">Expiry</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={formData.cardExpiry}
                        onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                        className="w-full p-2 bg-white border border-neutral-300 font-mono text-xs focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-600 mb-1">CVV</label>
                      <input
                        type="password"
                        placeholder="123"
                        value={formData.cardCvc}
                        onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                        className="w-full p-2 bg-white border border-neutral-300 font-mono text-xs focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Order Summary & Submit */}
              <div className="bg-neutral-50 border border-neutral-200 p-4 space-y-2 text-xs">
                <div className="flex justify-between text-neutral-600">
                  <span>Items ({items.length})</span>
                  <span className="font-mono">PKR {subtotal.toLocaleString()}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Discount</span>
                    <span className="font-mono">- PKR {discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-neutral-600">
                  <span>Shipping</span>
                  <span className="font-mono">{shipping === 0 ? 'FREE' : `PKR ${shipping}`}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-neutral-900 pt-2 border-t border-neutral-200">
                  <span>Total</span>
                  <span className="font-mono">PKR {total.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-black text-white font-heading font-black text-xs uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 shadow-xl"
              >
                <span>{isSubmitting ? 'BOOKING ORDER...' : 'CONFIRM ORDER'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};

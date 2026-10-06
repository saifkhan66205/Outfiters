import React, { useState } from 'react';
import { X, Search, Truck, CheckCircle2, Clock, PackageCheck, AlertCircle } from 'lucide-react';

interface TrackOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrackOrderModal: React.FC<TrackOrderModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [orderQuery, setOrderQuery] = useState('');
  const [trackedResult, setTrackedResult] = useState<{
    orderId: string;
    courier: string;
    trackingNo: string;
    status: string;
    origin: string;
    destination: string;
    estDelivery: string;
    steps: { title: string; date: string; completed: boolean }[];
  } | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderQuery.trim()) return;

    setIsSearching(true);
    setTimeout(() => {
      setTrackedResult({
        orderId: orderQuery.toUpperCase(),
        courier: 'TCS Express Pakistan',
        trackingNo: `TCS-${Math.floor(100000000 + Math.random() * 900000000)}`,
        status: 'In Transit',
        origin: 'Outfitters Central Fulfillment Center, Lahore',
        destination: 'Customer Delivery Address',
        estDelivery: 'Within 48 Hours',
        steps: [
          { title: 'Order Booked & Verified', date: 'Yesterday, 04:30 PM', completed: true },
          { title: 'Dispatched from Lahore Central Warehouse', date: 'Today, 09:15 AM', completed: true },
          { title: 'Received at City Sorting Hub', date: 'Today, 02:40 PM', completed: true },
          { title: 'Out for Courier Delivery (Rider Assigned)', date: 'Expected Tomorrow Morning', completed: false },
          { title: 'Parcel Delivered (COD Collected)', date: 'Pending', completed: false }
        ]
      });
      setIsSearching(false);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto animate-fadeIn">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-xl bg-white border border-neutral-300 shadow-2xl z-10 overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-black" />
            <h2 className="font-heading font-black text-base uppercase tracking-wider text-black">
              TRACK YOUR OUTFITTERS PARCEL
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-black transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-6 bg-white border-b border-neutral-200">
          <p className="text-xs text-neutral-600 mb-3 font-medium">
            Enter your 6-digit Order ID (e.g. <span className="font-mono font-bold text-black">OF-849201</span>) or Mobile Number used at checkout.
          </p>
          <form onSubmit={handleTrack} className="flex gap-2">
            <input
              type="text"
              required
              placeholder="e.g. OF-928172 or 03001234567"
              value={orderQuery}
              onChange={(e) => setOrderQuery(e.target.value)}
              className="flex-1 p-2.5 bg-neutral-50 border border-neutral-300 text-xs font-mono uppercase focus:outline-none focus:border-black font-semibold"
            />
            <button
              type="submit"
              disabled={isSearching}
              className="px-6 py-2.5 bg-black text-white text-xs font-heading font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
            >
              {isSearching ? 'Tracking...' : 'Track'}
            </button>
          </form>
        </div>

        {/* Results Timeline */}
        <div className="flex-1 overflow-y-auto p-6 bg-neutral-50">
          {trackedResult ? (
            <div className="space-y-6">
              <div className="bg-white p-4 border border-neutral-200 space-y-2 text-xs">
                <div className="flex justify-between items-center border-b border-neutral-100 pb-2">
                  <span className="font-mono text-neutral-500 uppercase">Order ID:</span>
                  <span className="font-mono font-bold text-sm text-neutral-900">{trackedResult.orderId}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500">Partner Courier:</span>
                  <span className="font-semibold text-neutral-900">{trackedResult.courier}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500">Consignment Number:</span>
                  <span className="font-mono font-semibold text-neutral-900">{trackedResult.trackingNo}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500">Estimated Delivery:</span>
                  <span className="font-bold text-emerald-700">{trackedResult.estDelivery}</span>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="space-y-4 pl-2">
                {trackedResult.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5">
                      {step.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Clock className="w-4 h-4 text-neutral-300" />
                      )}
                    </div>
                    <div className="text-xs">
                      <p className={`font-semibold uppercase tracking-wider text-[11px] ${step.completed ? 'text-neutral-900' : 'text-neutral-400'}`}>
                        {step.title}
                      </p>
                      <p className="text-[10px] font-mono text-neutral-500 mt-0.5">{step.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="py-8 text-center text-neutral-500 text-xs">
              <PackageCheck className="w-10 h-10 text-neutral-300 mx-auto mb-2" />
              <p>Type your order ID above to trace parcel movement across Pakistan.</p>
            </div>
          )}
        </div>

        {/* Footer Helpline */}
        <div className="p-4 bg-white border-t border-neutral-200 text-xs text-neutral-600 flex items-center justify-between">
          <span>Need help with delivery?</span>
          <span className="font-mono font-bold text-neutral-900">UAN: +92 42 111 688 348</span>
        </div>
      </div>
    </div>
  );
};

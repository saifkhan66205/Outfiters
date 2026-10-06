import React, { useState } from 'react';
import { X, MapPin, Phone, Clock, Search, Building2 } from 'lucide-react';
import { STORE_LOCATIONS } from '../data/products';

interface StoreLocatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoreLocatorModal: React.FC<StoreLocatorModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStores = STORE_LOCATIONS.filter((store) => {
    const matchesCity = selectedCity === 'all' || store.city.toLowerCase() === selectedCity.toLowerCase();
    const matchesQuery = store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         store.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         store.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesQuery;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto animate-fadeIn">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-2xl bg-white border border-neutral-300 shadow-2xl z-10 overflow-hidden my-auto max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-black" />
            <h2 className="font-heading font-black text-base uppercase tracking-wider text-black">
              OUTFITTERS RETAIL STORES PAKISTAN
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

        {/* Filter Toolbar */}
        <div className="p-4 border-b border-neutral-200 bg-white space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-3 text-neutral-400" />
            <input
              type="text"
              placeholder="Search store by mall, street, or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-neutral-50 border border-neutral-300 text-xs font-medium focus:outline-none focus:border-black"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
            <span className="text-[11px] font-mono text-neutral-400 uppercase shrink-0">City:</span>
            {['all', 'Lahore', 'Karachi', 'Islamabad', 'Faisalabad'].map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-3 py-1 font-semibold uppercase tracking-wider text-[11px] transition-colors ${
                  selectedCity === city
                    ? 'bg-black text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {city === 'all' ? 'All Cities' : city}
              </button>
            ))}
          </div>
        </div>

        {/* Stores List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 divide-y divide-neutral-100">
          {filteredStores.map((store) => (
            <div key={store.id} className="py-4 first:pt-0 last:pb-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    {store.city} · {store.mall || 'Flagship Outlet'}
                  </span>
                  <h4 className="text-sm font-heading font-black uppercase text-neutral-900 mt-0.5">
                    {store.name}
                  </h4>
                  <div className="mt-2 space-y-1.5 text-xs text-neutral-600">
                    <p className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                      <span>{store.address}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                      <span className="font-mono">{store.phone}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                      <span>{store.timings}</span>
                    </p>
                  </div>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.name + ' ' + store.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 border border-neutral-300 text-neutral-800 text-[11px] font-heading font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors shrink-0"
                >
                  Directions
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="p-4 bg-neutral-50 border-t border-neutral-200 text-xs text-neutral-500 text-center font-mono">
          Online purchases can be exchanged at any of the 60+ retail outlets across Pakistan within 7 days.
        </div>
      </div>
    </div>
  );
};

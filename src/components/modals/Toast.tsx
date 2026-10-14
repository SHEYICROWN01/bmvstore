import React from 'react';
import { ShoppingBag, Heart, Info, X } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const Toast: React.FC = () => {
  const { toast, clearToast, setCartDrawerOpen } = useShop();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-white rounded-xl shadow-2xl border border-slate-200 p-4 animate-in slide-in-from-bottom-5 duration-200 flex items-start gap-3">
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
          toast.type === 'cart'
            ? 'bg-red-50 text-[#F20D25]'
            : toast.type === 'wishlist'
            ? 'bg-rose-50 text-rose-600'
            : 'bg-blue-50 text-[#082B5B]'
        }`}
      >
        {toast.type === 'cart' && <ShoppingBag className="w-5 h-5" />}
        {toast.type === 'wishlist' && <Heart className="w-5 h-5 fill-current" />}
        {toast.type === 'info' && <Info className="w-5 h-5" />}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-xs font-bold text-[#082B5B] leading-snug">
          {toast.message}
        </p>
        {toast.type === 'cart' && (
          <button
            onClick={() => {
              clearToast();
              setCartDrawerOpen(true);
            }}
            className="text-[11px] font-bold text-[#F20D25] hover:underline mt-1 block cursor-pointer"
          >
            View Cart & Checkout →
          </button>
        )}
      </div>

      <button
        onClick={clearToast}
        className="text-slate-400 hover:text-slate-700 p-1 rounded cursor-pointer"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

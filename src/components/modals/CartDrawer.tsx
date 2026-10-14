import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const CartDrawer: React.FC = () => {
  const {
    cartDrawerOpen,
    setCartDrawerOpen,
    cart,
    cartCount,
    cartSubtotal,
    updateQuantity,
    removeFromCart,
    toggleInstallation,
    setCheckoutModalOpen,
    navigateToProduct
  } = useShop();

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');

  if (!cartDrawerOpen) return null;

  const formatNaira = (amount: number) => {
    return '₦' + amount.toLocaleString('en-NG');
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'BMVSOLAR' || promoCode.trim().toUpperCase() === 'CLEANPOWER') {
      setDiscountPercent(5);
      setPromoMessage('5% Discount Applied!');
    } else {
      setPromoMessage('Invalid coupon code. Try "BMVSOLAR"');
    }
  };

  const discountAmount = Math.round((cartSubtotal * discountPercent) / 100);
  const finalTotal = cartSubtotal - discountAmount;

  const handleProceedToCheckout = () => {
    setCartDrawerOpen(false);
    setCheckoutModalOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setCartDrawerOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#F20D25]" />
              <h2 className="text-base font-bold text-[#082B5B]">
                Your Shopping Cart ({cartCount})
              </h2>
            </div>
            <button
              onClick={() => setCartDrawerOpen(false)}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 divide-y divide-slate-100">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-[#F20D25]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#082B5B]">Your cart is currently empty</h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-xs">
                    Browse our solar panels, hybrid inverters, batteries, and CCTV systems to get started.
                  </p>
                </div>
                <button
                  onClick={() => setCartDrawerOpen(false)}
                  className="px-6 py-2.5 bg-[#082B5B] hover:bg-[#041C3D] text-white text-xs font-bold rounded-lg cursor-pointer"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4 pt-1">
                {cart.map((item) => (
                  <div key={item.product.id} className="pt-3 first:pt-0 flex gap-3">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      onClick={() => {
                        navigateToProduct(item.product.id);
                        setCartDrawerOpen(false);
                      }}
                      className="w-18 h-18 object-contain rounded-lg p-1 bg-slate-50 border border-slate-200 cursor-pointer shrink-0"
                    />

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4
                            onClick={() => {
                              navigateToProduct(item.product.id);
                              setCartDrawerOpen(false);
                            }}
                            className="text-xs font-bold text-[#082B5B] hover:text-[#F20D25] cursor-pointer line-clamp-2"
                          >
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-slate-400 hover:text-red-600 p-1"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-xs font-bold text-[#F20D25] font-mono tabular-nums">
                          {formatNaira(item.product.price)}
                        </span>
                      </div>

                      {/* Installation Service toggle */}
                      {item.product.installationAvailable && (
                        <div className="mt-1 flex items-center gap-1.5 text-[11px] text-slate-600">
                          <input
                            type="checkbox"
                            id={`inst-${item.product.id}`}
                            checked={!!item.includeInstallation}
                            onChange={() => toggleInstallation(item.product.id)}
                            className="rounded text-[#082B5B] focus:ring-0 cursor-pointer"
                          />
                          <label htmlFor={`inst-${item.product.id}`} className="cursor-pointer select-none">
                            Add Installation (+{formatNaira(item.product.installationFee || 35000)})
                          </label>
                        </div>
                      )}

                      {/* Quantity Stepper */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-slate-200 rounded h-7 bg-white">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-7 h-full flex items-center justify-center text-slate-600 hover:bg-slate-100 font-bold text-xs"
                          >
                            –
                          </button>
                          <span className="px-2 text-xs font-mono font-bold text-slate-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-7 h-full flex items-center justify-center text-slate-600 hover:bg-slate-100 font-bold text-xs"
                          >
                            +
                          </button>
                        </div>

                        <span className="text-xs font-bold text-slate-800 font-mono tabular-nums">
                          {formatNaira(
                            item.product.price * item.quantity +
                              (item.includeInstallation ? (item.product.installationFee || 0) : 0)
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Footer Summary */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 space-y-3">
              
              {/* Promo code form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Coupon code (e.g. BMVSOLAR)"
                    className="w-full h-8 pl-8 pr-3 text-xs uppercase bg-white border border-slate-300 rounded focus:outline-none focus:border-[#082B5B]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3 h-8 bg-slate-800 hover:bg-black text-white text-xs font-bold rounded cursor-pointer"
                >
                  Apply
                </button>
              </form>
              {promoMessage && (
                <p className={`text-[11px] ${discountPercent > 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                  {promoMessage}
                </p>
              )}

              {/* Subtotal breakdown */}
              <div className="space-y-1.5 text-xs text-slate-600 pt-1">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono tabular-nums">{formatNaira(cartSubtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Discount (5%)</span>
                    <span className="font-mono tabular-nums">- {formatNaira(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="text-emerald-700 font-bold">Free (Special Promotion)</span>
                </div>
                <div className="flex justify-between text-sm font-black text-[#082B5B] pt-2 border-t border-slate-200">
                  <span>Estimated Total</span>
                  <span className="font-mono tabular-nums text-base text-[#F20D25]">
                    {formatNaira(finalTotal)}
                  </span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={handleProceedToCheckout}
                className="w-full h-12 bg-[#F20D25] hover:bg-[#D6091E] text-white font-bold text-sm rounded-lg flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Secure Checkout & Genuine Warranty</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

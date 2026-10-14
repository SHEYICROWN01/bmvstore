import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, CreditCard, Truck, MessageCircle, ArrowLeft } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const CheckoutModal: React.FC = () => {
  const {
    checkoutModalOpen,
    setCheckoutModalOpen,
    cart,
    cartSubtotal,
    clearCart,
    setCurrentPage
  } = useShop();

  const [step, setStep] = useState<'details' | 'success'>('details');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    state: 'Lagos',
    city: 'Ikeja',
    address: '',
    paymentMethod: 'card' as 'card' | 'cod'
  });
  const [orderId, setOrderId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!checkoutModalOpen) return null;

  const formatNaira = (amount: number) => {
    return '₦' + amount.toLocaleString('en-NG');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address) {
      alert('Please fill in your name, phone number, and delivery address.');
      return;
    }

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    const generatedId = 'BMV-NG-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setIsSubmitting(false);
    setStep('success');
    clearCart();
  };

  const handleClose = () => {
    setCheckoutModalOpen(false);
    setStep('details');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" onClick={handleClose} />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6 sm:p-8 z-10 overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'details' ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold text-[#F20D25] uppercase tracking-wider">Fast Checkout</span>
              <h2 className="text-2xl font-black text-[#082B5B]">Complete Your Order</h2>
              <p className="text-xs text-slate-500 mt-1">
                Enter your delivery details to receive your solar or security equipment.
              </p>
            </div>

            {/* Order Brief Summary */}
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 mb-6 text-xs flex justify-between items-center">
              <div>
                <span className="font-semibold text-slate-600">Total Items: </span>
                <span className="font-bold text-slate-900">{cart.length}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-600">Total Due: </span>
                <span className="font-bold text-[#F20D25] font-mono text-sm">{formatNaira(cartSubtotal)}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Adebayo Ogunlesi"
                    className="w-full h-10 px-3 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#082B5B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0810 123 4567"
                    className="w-full h-10 px-3 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#082B5B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full h-10 px-3 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#082B5B]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">State *</label>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full h-10 px-3 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none focus:border-[#082B5B]"
                  >
                    <option value="Lagos">Lagos State</option>
                    <option value="Abuja">Abuja (FCT)</option>
                    <option value="Rivers">Rivers (Port Harcourt)</option>
                    <option value="Oyo">Oyo (Ibadan)</option>
                    <option value="Ogun">Ogun State</option>
                    <option value="Kano">Kano State</option>
                    <option value="Delta">Delta State</option>
                    <option value="Enugu">Enugu State</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">City / Area *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Ikeja, Lekki, Maitama"
                    className="w-full h-10 px-3 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#082B5B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Street Address *</label>
                <textarea
                  rows={2}
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Plot number, street name, landmarks..."
                  className="w-full p-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#082B5B]"
                />
              </div>

              {/* Payment Methods */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Payment Option</label>
                <div className="grid grid-cols-2 gap-3">
                  <div
                    onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className={`p-3 rounded-xl border flex items-center gap-2.5 cursor-pointer transition-all ${
                      formData.paymentMethod === 'card'
                        ? 'border-[#082B5B] bg-blue-50/70 text-[#082B5B]'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-[#F20D25]" />
                    <div className="text-left">
                      <p className="text-xs font-bold">Online / Bank Transfer</p>
                      <p className="text-[10px] text-slate-500">Paystack / Bank</p>
                    </div>
                  </div>

                  <div
                    onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                    className={`p-3 rounded-xl border flex items-center gap-2.5 cursor-pointer transition-all ${
                      formData.paymentMethod === 'cod'
                        ? 'border-[#082B5B] bg-blue-50/70 text-[#082B5B]'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <Truck className="w-4 h-4 text-[#082B5B]" />
                    <div className="text-left">
                      <p className="text-xs font-bold">Pay on Delivery</p>
                      <p className="text-[10px] text-slate-500">Cash / POS in Lagos</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-[#F20D25] hover:bg-[#D6091E] text-white font-bold text-sm rounded-lg flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Processing Order...</span>
                  ) : (
                    <span>Confirm Order ({formatNaira(cartSubtotal)})</span>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Your order details are verified directly by our logistics dispatch team.</span>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
                Order Placed Successfully!
              </span>
              <h2 className="text-2xl font-black text-[#082B5B] mt-1">
                Thank You, {formData.fullName}!
              </h2>
              <p className="text-xs text-slate-500 mt-2 max-w-sm mx-auto">
                We have received your order. Our logistics supervisor will call you on{' '}
                <span className="font-bold text-slate-800">{formData.phone}</span> within 30 minutes to confirm dispatch and installation details.
              </p>
            </div>

            {/* Order Card */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Order Reference:</span>
                <span className="font-mono font-bold text-[#082B5B]">{orderId}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Delivery Address:</span>
                <span className="font-semibold text-slate-800">{formData.address}, {formData.city}, {formData.state}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Payment Mode:</span>
                <span className="font-semibold text-slate-800 capitalize">
                  {formData.paymentMethod === 'card' ? 'Online / Transfer' : 'Pay on Delivery'}
                </span>
              </div>
              <div className="flex justify-between pt-1 text-sm font-bold text-[#F20D25]">
                <span>Total Amount:</span>
                <span className="font-mono">{formatNaira(cartSubtotal)}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href={`https://wa.me/2348101234567?text=Hello%20BMV,%20I%20just%20placed%20order%20${orderId}%20for%20delivery%20to%20${encodeURIComponent(formData.city)}`}
                target="_blank"
                rel="noreferrer"
                className="h-11 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs rounded-lg inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  handleClose();
                  setCurrentPage('home');
                }}
                className="h-11 px-6 bg-[#082B5B] hover:bg-[#041C3D] text-white font-bold text-xs rounded-lg inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Homepage</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, Calculator, Sun, Battery, Zap, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { QuoteRequestData } from '../../types';

export const QuoteCalculatorModal: React.FC = () => {
  const { quoteModalOpen, setQuoteModalOpen, consultationModalOpen, setConsultationModalOpen, submitQuoteRequest } = useShop();

  const isOpen = quoteModalOpen || consultationModalOpen;

  const [step, setStep] = useState<'calculator' | 'contact' | 'success'>('calculator');
  const [propertyType, setPropertyType] = useState<'residential-flat' | 'residential-duplex' | 'commercial-office' | 'industrial-factory'>('residential-duplex');
  
  // Appliance load items
  const [appliances, setAppliances] = useState({
    airConditioners: 1,
    refrigerators: 2,
    tvs: 2,
    pumps: 1,
    lightingAndFans: true
  });

  const [contactData, setContactData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: 'Lagos',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleClose = () => {
    setQuoteModalOpen(false);
    setConsultationModalOpen(false);
    setStep('calculator');
  };

  // Determine system recommendation based on selected property and appliances
  const getRecommendation = () => {
    if (propertyType === 'industrial-factory' || appliances.airConditioners >= 3) {
      return {
        inverter: '10KW – 15KW Three-Phase Hybrid Inverter',
        battery: '20kWh – 30kWh High-Voltage Lithium Bank',
        panels: '16x – 24x 550W Monocrystalline Panels (8.8kWp)',
        dailyYield: '40 – 50 kWh/day',
        costEstimate: '₦6,800,000 – ₦10,500,000'
      };
    } else if (propertyType === 'residential-duplex' || appliances.airConditioners >= 1) {
      return {
        inverter: '5KW Deye Single-Phase Hybrid Inverter',
        battery: '10.2kWh LiFePO4 Lithium Battery Bank',
        panels: '6x – 8x JA Solar 550W Panels (3.3kWp)',
        dailyYield: '15 – 20 kWh/day',
        costEstimate: '₦2,800,000 – ₦3,500,000'
      };
    } else {
      return {
        inverter: '3KW Growatt Pure Sine Wave Inverter',
        battery: '48V 100Ah / 2x 200Ah Tubular Battery Bank',
        panels: '4x 550W Tier-1 Solar Panels (2.2kWp)',
        dailyYield: '10 – 12 kWh/day',
        costEstimate: '₦1,450,000 – ₦1,950,000'
      };
    }
  };

  const rec = getRecommendation();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactData.fullName || !contactData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    setIsSubmitting(true);
    const payload: QuoteRequestData = {
      fullName: contactData.fullName,
      email: contactData.email,
      phone: contactData.phone,
      location: contactData.location,
      propertyType,
      targetSystem: rec.inverter + ' + ' + rec.battery,
      estimatedBudget: rec.costEstimate,
      notes: contactData.notes
    };

    await submitQuoteRequest(payload);
    setIsSubmitting(false);
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" onClick={handleClose} />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 z-10 my-8 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'calculator' && (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 text-[#F20D25] text-[11px] font-bold uppercase tracking-wider mb-2">
                <Calculator className="w-3.5 h-3.5" />
                <span>Solar Sizing Tool & Custom Quotation</span>
              </div>
              <h2 className="text-2xl font-black text-[#082B5B]">
                Configure Your Power Solution
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Select your building type and major appliances to get an accurate sizing recommendation and quotation.
              </p>
            </div>

            {/* Step 1: Property Type */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">1. Select Property Type</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'residential-flat', label: '2-3 Bed Flat' },
                  { id: 'residential-duplex', label: 'Duplex / Villa' },
                  { id: 'commercial-office', label: 'Office Space' },
                  { id: 'industrial-factory', label: 'Factory / Plant' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPropertyType(item.id as any)}
                    className={`p-3 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                      propertyType === item.id
                        ? 'border-[#F20D25] bg-red-50/60 text-[#F20D25] shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Key Appliances */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">2. What heavy appliances do you intend to run?</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                
                {/* Air Conditioners */}
                <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="font-semibold text-slate-700">1.5HP Inverter ACs</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setAppliances({ ...appliances, airConditioners: Math.max(0, appliances.airConditioners - 1) })}
                      className="w-6 h-6 rounded bg-white border border-slate-300 font-bold"
                    >
                      –
                    </button>
                    <span className="w-5 text-center font-bold text-[#082B5B]">{appliances.airConditioners}</span>
                    <button
                      type="button"
                      onClick={() => setAppliances({ ...appliances, airConditioners: appliances.airConditioners + 1 })}
                      className="w-6 h-6 rounded bg-white border border-slate-300 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Refrigerators */}
                <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="font-semibold text-slate-700">Refrigerators / Freezers</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setAppliances({ ...appliances, refrigerators: Math.max(0, appliances.refrigerators - 1) })}
                      className="w-6 h-6 rounded bg-white border border-slate-300 font-bold"
                    >
                      –
                    </button>
                    <span className="w-5 text-center font-bold text-[#082B5B]">{appliances.refrigerators}</span>
                    <button
                      type="button"
                      onClick={() => setAppliances({ ...appliances, refrigerators: appliances.refrigerators + 1 })}
                      className="w-6 h-6 rounded bg-white border border-slate-300 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Smart TVs */}
                <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="font-semibold text-slate-700">Televisions (55" - 65")</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setAppliances({ ...appliances, tvs: Math.max(0, appliances.tvs - 1) })}
                      className="w-6 h-6 rounded bg-white border border-slate-300 font-bold"
                    >
                      –
                    </button>
                    <span className="w-5 text-center font-bold text-[#082B5B]">{appliances.tvs}</span>
                    <button
                      type="button"
                      onClick={() => setAppliances({ ...appliances, tvs: appliances.tvs + 1 })}
                      className="w-6 h-6 rounded bg-white border border-slate-300 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Water Pumping Machine */}
                <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="font-semibold text-slate-700">Water Pumping Machine</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setAppliances({ ...appliances, pumps: Math.max(0, appliances.pumps - 1) })}
                      className="w-6 h-6 rounded bg-white border border-slate-300 font-bold"
                    >
                      –
                    </button>
                    <span className="w-5 text-center font-bold text-[#082B5B]">{appliances.pumps}</span>
                    <button
                      type="button"
                      onClick={() => setAppliances({ ...appliances, pumps: appliances.pumps + 1 })}
                      className="w-6 h-6 rounded bg-white border border-slate-300 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Instant Calculated Recommendation Box */}
            <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50/80 to-slate-50 p-4.5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-[#082B5B] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#F20D25]" />
                  Engineered Sizing Recommendation
                </span>
                <span className="text-xs font-bold text-emerald-700 font-mono bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                  Estimated {rec.dailyYield}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-400 block font-bold">INVERTER</span>
                  <span className="font-bold text-[#082B5B]">{rec.inverter}</span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-400 block font-bold">BATTERY STORAGE</span>
                  <span className="font-bold text-[#082B5B]">{rec.battery}</span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-400 block font-bold">SOLAR ARRAY</span>
                  <span className="font-bold text-[#082B5B]">{rec.panels}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 text-xs">
                <span className="text-slate-600 font-medium">Turnkey System Budget Range:</span>
                <span className="font-black text-[#F20D25] text-sm font-mono">{rec.costEstimate}</span>
              </div>
            </div>

            {/* Proceed to Contact step */}
            <button
              onClick={() => setStep('contact')}
              className="w-full h-12 bg-[#F20D25] hover:bg-[#D6091E] text-white font-bold text-sm rounded-lg flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <span>Request Formal Proposal & Site Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {step === 'contact' && (
          <div>
            <div className="mb-5">
              <button
                onClick={() => setStep('calculator')}
                className="text-xs font-bold text-[#082B5B] hover:text-[#F20D25] mb-2 inline-block cursor-pointer"
              >
                ← Back to sizing calculator
              </button>
              <h2 className="text-2xl font-black text-[#082B5B]">Where Should We Send Your Proposal?</h2>
              <p className="text-xs text-slate-500 mt-1">
                A certified BMV solar consultant will prepare an itemized bill of materials and schedule a site survey.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={contactData.fullName}
                    onChange={(e) => setContactData({ ...contactData, fullName: e.target.value })}
                    placeholder="Engr. Babatunde Lawal"
                    className="w-full h-10 px-3 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#082B5B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    value={contactData.phone}
                    onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                    placeholder="0802 345 6789"
                    className="w-full h-10 px-3 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#082B5B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={contactData.email}
                    onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                    placeholder="babatunde@example.com"
                    className="w-full h-10 px-3 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#082B5B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Installation Location / City *</label>
                  <input
                    type="text"
                    required
                    value={contactData.location}
                    onChange={(e) => setContactData({ ...contactData, location: e.target.value })}
                    placeholder="e.g. Lekki Phase 1, Lagos"
                    className="w-full h-10 px-3 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#082B5B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Additional Requirements (Optional)</label>
                <textarea
                  rows={2}
                  value={contactData.notes}
                  onChange={(e) => setContactData({ ...contactData, notes: e.target.value })}
                  placeholder="Need CCTV integration, generator changeover, or existing inverter upgrade..."
                  className="w-full p-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#082B5B]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-[#F20D25] hover:bg-[#D6091E] text-white font-bold text-sm rounded-lg flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <span>Submit Free Quote Request</span>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero obligations. We respect your privacy and will never share your contacts.</span>
              </div>
            </form>
          </div>
        )}

        {step === 'success' && (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
                Request Logged
              </span>
              <h2 className="text-2xl font-black text-[#082B5B] mt-1">
                Consultation Request Received!
              </h2>
              <p className="text-xs text-slate-600 mt-2 max-w-md mx-auto">
                Thank you, <span className="font-bold text-slate-900">{contactData.fullName}</span>. One of our lead solar engineers has received your load sizing profile and will reach you at{' '}
                <span className="font-bold text-slate-900">{contactData.phone}</span> within 2 hours with an engineered proposal.
              </p>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                onClick={handleClose}
                className="h-11 px-8 bg-[#082B5B] hover:bg-[#041C3D] text-white font-bold text-xs rounded-lg cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

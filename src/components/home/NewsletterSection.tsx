import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubscribed(true);
    setEmail('');
  };

  return (
    <section className="bg-[#041C3D] text-white py-12 border-y border-blue-950/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left: Icon & Text */}
          <div className="flex items-center gap-4 text-center lg:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
              <Mail className="w-7 h-7 text-[#F20D25]" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-xs sm:text-sm text-blue-200/80 mt-0.5">
                Get the latest updates, new product arrivals, and exclusive seasonal discounts.
              </p>
            </div>
          </div>

          {/* Right: Input Form */}
          <div className="w-full lg:w-auto max-w-md lg:min-w-[380px]">
            {subscribed ? (
              <div className="bg-emerald-950/60 border border-emerald-500/40 p-4 rounded-xl flex items-center gap-3 text-emerald-200 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Thank you! You have been subscribed to BMV updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-1.5">
                <div className="flex items-center bg-white rounded-lg p-1.5 shadow-lg">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Enter your email address"
                    className="flex-1 px-3 py-2 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="h-10 px-5 bg-[#F20D25] hover:bg-[#D6091E] text-white font-bold text-xs sm:text-sm rounded-md flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer shrink-0"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                {error && (
                  <p className="text-xs text-red-400 pl-2">{error}</p>
                )}
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

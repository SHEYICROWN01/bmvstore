import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAFBFD] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-[#F20D25] uppercase tracking-widest">
            Customer Support & Offices
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#082B5B] tracking-tight mt-1">
            Get in Touch with BMV
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Have questions about solar inverters, lithium batteries, CCTV installations, or need a site assessment? We are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Contact Info & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white p-6 rounded-2xl shadow-md space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold">Fastest Response on WhatsApp</h3>
                  <p className="text-xs text-emerald-100">Direct chat with our technical sales team</p>
                </div>
              </div>
              <a
                href="https://wa.me/2348101234567?text=Hello%20BMV,%20I%20would%20like%20to%20enquire%20about%20solar%20and%20CCTV%20systems"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 bg-white text-emerald-800 font-bold text-xs rounded-lg flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors shadow-xs"
              >
                <span>Open WhatsApp Chat</span>
              </a>
            </div>

            {/* Information Cards */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#082B5B] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#F20D25]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#082B5B]">Head Office & Experience Center</h4>
                  <p className="text-xs text-slate-600 mt-0.5">123 Solar Street, Ikeja, Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#082B5B] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#F20D25]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#082B5B]">Telephone</h4>
                  <a href="tel:+2348101234567" className="text-xs text-slate-800 font-mono font-semibold block mt-0.5 hover:text-[#F20D25]">
                    +234 810 123 4567
                  </a>
                  <span className="text-[11px] text-slate-400">Lines open 8:00 AM – 6:00 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#082B5B] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#F20D25]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#082B5B]">Email Support</h4>
                  <a href="mailto:support@bmvng.com" className="text-xs text-slate-800 block mt-0.5 hover:text-[#F20D25]">
                    support@bmvng.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#082B5B] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#082B5B]">Working Hours</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Monday – Saturday: 8:00 AM – 6:00 PM</p>
                  <p className="text-[11px] text-slate-400">Closed on Sundays & Public Holidays</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-[#082B5B]">Message Sent Successfully!</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, <span className="font-bold">{formData.name}</span>. A BMV technical representative will respond to your enquiry within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-[#082B5B] text-white text-xs font-bold rounded-lg cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-[#082B5B] mb-2">Send Us a Direct Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Kolawole Johnson"
                      className="w-full h-10 px-3 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#082B5B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0803 123 4567"
                      className="w-full h-10 px-3 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#082B5B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="kola@example.com"
                      className="w-full h-10 px-3 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#082B5B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Enquiry Type</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full h-10 px-3 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none focus:border-[#082B5B]"
                    >
                      <option value="Solar Energy Systems">Solar Inverters & Panels</option>
                      <option value="Lithium Batteries">Lithium Batteries</option>
                      <option value="CCTV & Security">CCTV & Security Surveillance</option>
                      <option value="Installation Booking">Installation Service Request</option>
                      <option value="Maintenance / Repair">Maintenance & Repairs</option>
                      <option value="General Enquiry">General Information</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your property, estimated power loads, or specific questions..."
                    className="w-full p-3 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#082B5B]"
                  />
                </div>

                <button
                  type="submit"
                  className="h-11 px-8 bg-[#F20D25] hover:bg-[#D6091E] text-white font-bold text-xs rounded-lg flex items-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

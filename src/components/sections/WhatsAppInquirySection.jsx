import React, { useState, useMemo } from 'react';
import { MessageCircle, Send, Copy, Check } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { businessInfo } from '../../data/businessInfo';
import { generateFormInquiryMessage, buildWhatsAppLink } from '../../utils/whatsapp';

export default function WhatsAppInquirySection({ prefilledDivision = null, prefilledProduct = null }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    division: prefilledDivision || 'Al Falah Plumbing Solutions',
    product: prefilledProduct || '',
    message: ''
  });

  const [copied, setCopied] = useState(false);

  // Generate formatted WhatsApp message text
  const formattedMessage = useMemo(() => {
    return generateFormInquiryMessage(formData);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const waUrl = buildWhatsAppLink(formattedMessage);
    window.open(waUrl, '_blank');
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(formattedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="inquiry" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Direct WhatsApp Quotations"
          title="Send an Inquiry for Rates & Material Availability"
          subtitle="Submit your requirements below to generate a formatted message sent directly to our WhatsApp sales counter."
          centered={false}
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 rounded border border-slate-200 p-5 sm:p-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="inquiry-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Sharma"
                    className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-navy-900"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="inquiry-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98200 12345"
                    className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-navy-900"
                  />
                </div>
              </div>

              {/* Division Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Select Product Division <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <label className={`flex items-start gap-2.5 p-3 rounded border cursor-pointer transition-all ${
                    formData.division === 'Al Falah Plumbing Solutions'
                      ? 'bg-gold-50/70 border-gold-600 text-navy-950 font-bold shadow-sm'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}>
                    <input
                      type="radio"
                      name="division"
                      value="Al Falah Plumbing Solutions"
                      checked={formData.division === 'Al Falah Plumbing Solutions'}
                      onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                      className="mt-0.5 accent-navy-900"
                    />
                    <div className="text-xs">
                      <p className="font-bold text-navy-950">Al Falah Plumbing Solutions</p>
                      <p className="text-slate-500 text-[11px]">Pipes, Brass Valves & Sanitary</p>
                    </div>
                  </label>

                  <label className={`flex items-start gap-2.5 p-3 rounded border cursor-pointer transition-all ${
                    formData.division === 'Royal Birdnet Solutions'
                      ? 'bg-emerald-50 border-emerald-700 text-emerald-950 font-bold shadow-sm'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}>
                    <input
                      type="radio"
                      name="division"
                      value="Royal Birdnet Solutions"
                      checked={formData.division === 'Royal Birdnet Solutions'}
                      onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                      className="mt-0.5 accent-emerald-700"
                    />
                    <div className="text-xs">
                      <p className="font-bold text-emerald-950">Royal Birdnet Solutions</p>
                      <p className="text-slate-500 text-[11px]">HDPE Nets & Bird Spikes</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Product Required */}
              <div>
                <label htmlFor="inquiry-product" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Product / Sizing Required
                </label>
                <input
                  id="inquiry-product"
                  type="text"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  placeholder="e.g. CPVC 1 inch pipes, Brass 2 inch ball valves, Balcony bird net"
                  className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-navy-900"
                />
              </div>

              {/* Message / Quantity */}
              <div>
                <label htmlFor="inquiry-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Quantity / Site Dimensions / Notes
                </label>
                <textarea
                  id="inquiry-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention approximate quantities, site location, or required balcony square footage..."
                  className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-navy-900"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <Button
                  variant="whatsapp"
                  size="md"
                  type="submit"
                  icon={Send}
                  iconPosition="right"
                  className="w-full font-bold text-sm"
                >
                  Send Inquiry on WhatsApp
                </Button>
                <p className="text-[11px] text-slate-500 text-center mt-1.5">
                  Opens WhatsApp directly. No sign up or registration needed.
                </p>
              </div>

            </form>
          </div>

          {/* Right: Formatted WhatsApp Message Preview (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900 text-white rounded border border-slate-800 p-4 sm:p-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-green-400">
                  Formatted WhatsApp Message Preview:
                </span>
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="bg-slate-950 p-3 rounded font-mono text-xs text-slate-300 leading-relaxed whitespace-pre-wrap select-all border border-slate-800">
                {formattedMessage}
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>WhatsApp Destination:</span>
                <span className="text-green-400 font-bold">{businessInfo.displayWhatsapp}</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded text-xs text-slate-600 space-y-1.5">
              <p className="font-bold text-slate-800 uppercase tracking-wide">Direct WhatsApp Sales Desk</p>
              <p>• Send your BOQ bill of materials or architectural drawings for itemized rates.</p>
              <p>• Inquiries received during business hours are replied to promptly by our counter staff.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

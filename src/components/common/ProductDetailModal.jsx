import React, { useState } from 'react';
import { X, MessageCircle, FileText } from 'lucide-react';
import Button from './Button';
import { getProductInquiryUrl } from '../../utils/whatsapp';

export default function ProductDetailModal({ product, onClose, onOpenBrochure }) {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState(
    product.sizes && product.sizes.length > 0 ? product.sizes[0] : null
  );

  const isBirdnet = product.divisionId === 'birdnet-solutions';
  const whatsappUrl = getProductInquiryUrl(product, selectedSize);

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div 
        className="relative bg-white rounded max-w-3xl w-full max-h-[90vh] flex flex-col shadow-md border border-slate-300 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 py-3.5 border-b border-slate-200 flex items-center justify-between bg-slate-50 sticky top-0 z-10">
          <div>
            <span className={`text-[11px] font-bold uppercase tracking-wider ${
              isBirdnet ? 'text-emerald-800' : 'text-gold-600'
            }`}>
              {product.divisionName}
            </span>
            <span className="text-xs text-slate-500 font-medium"> / {product.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Top Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Image */}
            <div className="md:col-span-5 aspect-[4/3] bg-slate-100 border border-slate-200 rounded overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title & Sizing */}
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-navy-950 leading-tight">
                {product.name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="pt-2 border-t border-slate-100">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Select Size / Variant for Inquiry:
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {product.sizes.map((size, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`text-xs px-2.5 py-1 rounded border font-medium transition-colors ${
                          selectedSize === size
                            ? 'bg-navy-950 text-gold-400 border-navy-950 font-bold shadow-sm'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Instant WhatsApp Action */}
              <div className="pt-2">
                <Button
                  variant="whatsapp"
                  size="md"
                  as="a"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={MessageCircle}
                  className="w-full font-bold"
                >
                  Send Inquiry on WhatsApp
                </Button>
                <p className="text-[11px] text-slate-500 text-center mt-1.5">
                  Direct connection to our sales desk. Share requirements for itemized rate quotation.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          {product.specifications && (
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                Technical Specifications & Standards:
              </h4>
              <div className="border border-slate-200 rounded overflow-hidden text-xs sm:text-sm">
                <table className="w-full text-left divide-y divide-slate-200">
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {Object.entries(product.specifications).map(([key, val], idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50/70' : 'bg-white'}>
                        <td className="py-2 px-3.5 font-semibold text-slate-700 w-1/3 border-r border-slate-200">{key}</td>
                        <td className="py-2 px-3.5 text-slate-800">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Features */}
          {product.features && product.features.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                Product Features & Capabilities:
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-gold-600 font-bold shrink-0">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Applications */}
          {product.applications && product.applications.length > 0 && (
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded text-xs">
              <span className="font-bold text-slate-800 uppercase tracking-wide block mb-1">
                Recommended Applications:
              </span>
              <p className="text-slate-600 leading-relaxed">
                {product.applications.join(' • ')}
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
          <span>Informational product sheet. Wholesale pricing provided via WhatsApp.</span>
          <button
            type="button"
            onClick={onClose}
            className="font-bold text-slate-800 hover:text-slate-950 underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

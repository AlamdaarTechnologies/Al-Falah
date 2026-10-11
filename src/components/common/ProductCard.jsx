import React from 'react';
import { MessageCircle } from 'lucide-react';
import Button from './Button';
import { getProductInquiryUrl } from '../../utils/whatsapp';

export default function ProductCard({ product, onOpenDetails }) {
  const isBirdnet = product.divisionId === 'birdnet-solutions';
  const whatsappUrl = getProductInquiryUrl(product);

  return (
    <div className="bg-white rounded border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-colors">
      {/* Product Image */}
      <div 
        className="relative aspect-[4/3] bg-slate-100 border-b border-slate-100 overflow-hidden cursor-pointer" 
        onClick={() => onOpenDetails(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center hover:scale-102 transition-transform duration-300"
          loading="lazy"
        />
        
        {/* Division Tag */}
        <div className="absolute top-2.5 left-2.5">
          <span className={`px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded text-white shadow-sm ${
            isBirdnet ? 'bg-emerald-800 border border-emerald-600/40' : 'bg-navy-950 border border-gold-500/40'
          }`}>
            {isBirdnet ? 'Birdnetting' : 'Plumbing'}
          </span>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
            {product.category}
          </p>

          <h3 
            className="mt-1 text-base font-bold text-navy-950 leading-snug cursor-pointer hover:text-gold-600 transition-colors"
            onClick={() => onOpenDetails(product)}
          >
            {product.name}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Sizes / Specification Summary */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-3 pt-2.5 border-t border-slate-100 text-xs text-slate-600">
              <span className="font-semibold text-slate-700">Available: </span>
              <span className="text-slate-600">{product.sizes.slice(0, 3).join(', ')}{product.sizes.length > 3 ? '...' : ''}</span>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onOpenDetails(product)}
            className="w-full text-xs"
          >
            View Details
          </Button>

          <Button
            variant="whatsapp"
            size="sm"
            as="a"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            icon={MessageCircle}
            className="w-full text-xs font-semibold"
          >
            Inquire
          </Button>
        </div>
      </div>
    </div>
  );
}

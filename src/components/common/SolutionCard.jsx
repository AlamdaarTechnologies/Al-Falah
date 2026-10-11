import React from 'react';
import { ArrowRight, Download, MessageCircle } from 'lucide-react';
import Button from './Button';
import { getDivisionInquiryUrl } from '../../utils/whatsapp';

export default function SolutionCard({ division, onExplore, onOpenBrochure }) {
  const isBirdnet = division.id === 'birdnet-solutions';
  const divisionInquiryUrl = getDivisionInquiryUrl(division.name);

  return (
    <div className="bg-white rounded border border-slate-200 flex flex-col justify-between overflow-hidden shadow-sm hover:border-slate-300 transition-colors">
      <div>
        {/* Division Image */}
        <div 
          className="relative h-56 sm:h-64 w-full bg-slate-900 cursor-pointer overflow-hidden" 
          onClick={() => onExplore(division)}
        >
          <img
            src={division.image}
            alt={division.name}
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
              {division.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
              {division.name}
            </h3>
          </div>
        </div>

        {/* Division Details */}
        <div className="p-6 sm:p-7">
          <p className="text-sm font-semibold text-slate-800">
            {division.tagline}
          </p>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {division.description}
          </p>

          {/* Advantages List */}
          <div className="mt-5 pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
              Key Technical Features:
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {division.advantages.slice(0, 3).map((adv, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-gold-600 font-bold shrink-0">•</span>
                  <div>
                    <span className="font-semibold text-navy-950">{adv.title}: </span>
                    <span className="text-slate-600">{adv.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
            {division.categories.map((cat, idx) => (
              <span 
                key={idx} 
                className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-sm border border-slate-200"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-2.5">
        <Button
          variant={isBirdnet ? 'secondary' : 'primary'}
          size="sm"
          className="w-full sm:flex-1 font-semibold"
          icon={ArrowRight}
          iconPosition="right"
          onClick={() => onExplore(division)}
        >
          Explore Division
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="w-full sm:w-auto text-xs"
          icon={Download}
          onClick={() => onOpenBrochure(division.brochure)}
        >
          Brochure
        </Button>

        <Button
          variant="whatsapp"
          size="sm"
          as="a"
          href={divisionInquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          icon={MessageCircle}
          className="w-full sm:w-auto text-xs font-semibold"
        >
          Inquire
        </Button>
      </div>
    </div>
  );
}

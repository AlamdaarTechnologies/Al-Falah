import React from 'react';
import { Download, Eye, FileText, MessageCircle } from 'lucide-react';
import Button from './Button';
import { getBrochureRequestUrl } from '../../utils/whatsapp';

export default function BrochureCard({ 
  divisionName, 
  title, 
  edition, 
  fileSize, 
  format, 
  pages, 
  coverImage, 
  description,
  onViewBrochure 
}) {
  const whatsappUrl = getBrochureRequestUrl(title);

  const handleDownload = () => {
    alert(`Downloading ${title} (${fileSize}). In the live version, this downloads the PDF file.`);
  };

  return (
    <div className="bg-white rounded border border-slate-200 overflow-hidden flex flex-col md:flex-row hover:border-slate-300 transition-colors">
      {/* Cover Visual */}
      <div className="md:w-5/12 relative bg-slate-900 min-h-[200px] md:min-h-[240px]">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-slate-950/60" />
        
        <div className="absolute top-3.5 left-3.5">
          <span className="bg-white text-slate-900 text-xs font-bold px-2 py-0.5 rounded-sm">
            {divisionName}
          </span>
        </div>

        <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
          <p className="text-xs text-slate-300 font-medium mb-1">
            {edition} • {pages}
          </p>
          <h4 className="text-base font-bold text-white leading-snug">
            {title}
          </h4>
        </div>
      </div>

      {/* Info & Actions */}
      <div className="p-5 md:w-7/12 flex flex-col justify-between space-y-4">
        <div>
          <span className="text-xs font-bold text-gold-600 uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
            Official Technical Catalogue
          </span>

          <h3 className="text-lg font-bold text-navy-950 mt-1.5">
            {title}
          </h3>

          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {description}
          </p>

          <div className="mt-3 text-xs text-slate-500">
            <span>Format: {format}</span> • <span>Size: {fileSize}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            icon={Eye}
            onClick={() => onViewBrochure && onViewBrochure({ title, divisionName, edition, pages, fileSize, coverImage })}
            className="text-xs"
          >
            View Details
          </Button>

          <Button
            variant="secondary"
            size="sm"
            icon={Download}
            onClick={handleDownload}
            className="text-xs"
          >
            Download ({fileSize})
          </Button>

          <Button
            variant="whatsapp"
            size="sm"
            as="a"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            icon={MessageCircle}
            className="text-xs font-semibold"
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}

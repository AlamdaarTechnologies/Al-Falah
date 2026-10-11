import React from 'react';
import { X, Download, MessageCircle, FileText } from 'lucide-react';
import Button from './Button';
import { getBrochureRequestUrl } from '../../utils/whatsapp';

export default function BrochureViewerModal({ brochure, onClose }) {
  if (!brochure) return null;

  const whatsappUrl = getBrochureRequestUrl(brochure.title);

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded max-w-2xl w-full max-h-[90vh] flex flex-col shadow-md border border-slate-300 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 py-3.5 border-b border-slate-200 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold">{brochure.title}</h3>
            <p className="text-xs text-slate-400 mt-0.5">{brochure.edition} • {brochure.pages} • {brochure.fileSize}</p>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded">
            <h4 className="text-sm font-bold text-slate-900">
              Technical Documentation & Dimension Schedule
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              This catalogue contains product dimension tables, weight specifications, pressure rating thresholds, material test certificates, and standard pack quantities.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="border border-slate-200 rounded p-4 bg-white text-xs sm:text-sm">
            <h5 className="font-bold text-slate-800 uppercase tracking-wide text-xs mb-2">
              Catalogue Contents:
            </h5>
            <div className="space-y-2 divide-y divide-slate-100 text-slate-700">
              <div className="pt-1 flex justify-between">
                <span>01. Company Profile & Material Standards</span>
                <span className="text-slate-400">Pages 02 - 04</span>
              </div>
              <div className="pt-1 flex justify-between">
                <span>02. Product Dimensions & Sizing Schedules</span>
                <span className="text-slate-400">Pages 05 - 16</span>
              </div>
              <div className="pt-1 flex justify-between">
                <span>03. Pressure Ratings & Temperature Charts</span>
                <span className="text-slate-400">Pages 17 - 22</span>
              </div>
              <div className="pt-1 flex justify-between">
                <span>04. Installation & Site Fastening Guidelines</span>
                <span className="text-slate-400">Pages 23 - 28</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={onClose}
            className="w-full sm:w-auto text-xs"
          >
            Close
          </Button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button
              variant="whatsapp"
              size="sm"
              as="a"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={MessageCircle}
              className="flex-1 sm:flex-initial text-xs font-semibold"
            >
              Get on WhatsApp
            </Button>

            <Button
              variant="secondary"
              size="sm"
              icon={Download}
              onClick={() => alert(`Downloading ${brochure.title}.`)}
              className="flex-1 sm:flex-initial text-xs"
            >
              Download PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

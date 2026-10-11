import React from 'react';
import { MessageCircle } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import { buildWhatsAppLink } from '../../utils/whatsapp';

export default function FloatingWhatsApp() {
  const whatsappUrl = buildWhatsAppLink("Hello Al Falah team, I would like to inquire about product pricing and availability.");

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-xs font-bold py-2.5 px-3.5 rounded shadow hover:shadow-md transition-colors"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 shrink-0" />
        <span className="hidden sm:inline">WhatsApp Inquiry</span>
      </a>
    </div>
  );
}

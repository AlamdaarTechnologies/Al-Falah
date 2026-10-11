import React from 'react';
import { Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import { divisions } from '../../data/solutions';
import BrandLogo from '../common/BrandLogo';
import { buildWhatsAppLink } from '../../utils/whatsapp';

export default function Footer({ onNavigate, onOpenDivision }) {
  const whatsappUrl = buildWhatsAppLink("Hello Al Falah Hardware team, I am contacting you from the website.");

  return (
    <footer className="bg-navy-950 text-slate-300 pt-12 pb-10 border-t-2 border-gold-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-navy-800">
          
          {/* Col 1: Business Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <div 
              className="cursor-pointer"
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <BrandLogo size="md" theme="light" showTagline={true} />
            </div>
            
            <p className="text-xs text-gold-400 font-semibold uppercase tracking-wider">
              Plumbing Solutions & Birdnet Protection
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-2">
              Supplying certified CPVC & UPVC piping systems, brass ball valves, sanitary drainage traps, and architectural virgin HDPE bird netting across India.
            </p>
            <div className="pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {businessInfo.displayWhatsapp}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Business Divisions (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Product Divisions
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              {divisions.map((div) => (
                <li key={div.id}>
                  <button
                    type="button"
                    onClick={() => onOpenDivision ? onOpenDivision(div) : onNavigate('solutions')}
                    className="text-left text-slate-400 hover:text-white transition-colors"
                  >
                    {div.name}
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button
                  type="button"
                  onClick={() => onNavigate('products')}
                  className="text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                >
                  Browse Full Product Catalogue →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Business', id: 'about' },
                { label: 'Solutions', id: 'solutions' },
                { label: 'Product Catalogue', id: 'products' },
                { label: 'Brochures & PDF', id: 'brochures' },
                { label: 'Send Inquiry', id: 'inquiry' },
                { label: 'Contact Us', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Contact Us
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`tel:${businessInfo.phonePrimary}`} className="hover:text-white">
                  {businessInfo.phonePrimary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-white">
                  {businessInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300 font-medium">{businessInfo.workingHours[0].days}</p>
                  <p className="text-slate-400 text-xs">{businessInfo.workingHours[0].time}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {businessInfo.brandName}. All rights reserved.</p>
          <p className="text-slate-500 text-center md:text-right">
            Hardware & Sanitary Product Catalogue • Wholesale Supply Inquiries
          </p>
        </div>
      </div>
    </footer>
  );
}

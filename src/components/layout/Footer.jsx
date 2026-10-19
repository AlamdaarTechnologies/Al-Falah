import { Phone, Mail } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import BrandLogo from '../common/BrandLogo';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 py-8 border-t-2 border-gold-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <BrandLogo size="md" theme="light" showTagline={true} />
        <address className="not-italic flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-slate-400">
          <a href={`tel:${businessInfo.phonePrimary.replace(/\s+/g, '')}`} className="inline-flex items-center gap-2 hover:text-white">
            <Phone className="w-4 h-4" />{businessInfo.phonePrimary}
          </a>
          <a href={`mailto:${businessInfo.email}`} className="inline-flex items-center gap-2 hover:text-white">
            <Mail className="w-4 h-4" />{businessInfo.email}
          </a>
        </address>
      </div>
      <p className="mt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {businessInfo.brandName}. All rights reserved.
      </p>
    </footer>
  );
}

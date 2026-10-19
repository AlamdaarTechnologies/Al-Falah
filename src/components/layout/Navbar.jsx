import { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import Button from '../common/Button';
import BrandLogo from '../common/BrandLogo';
import { buildWhatsAppLink } from '../../utils/whatsapp';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Our Solutions', href: '#solutions' },
  { label: 'Contact / Inquiry', href: '#inquiry' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappUrl = buildWhatsAppLink("Hello Al Falah Hardware team, I am reaching out for a product quotation.");
  const linkClass = 'px-3.5 py-2 text-sm font-semibold rounded-md text-slate-700 hover:text-navy-900 hover:bg-slate-100 transition-colors';

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200/90 shadow-sm">
      <div className="bg-navy-950 text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href={`tel:${businessInfo.phonePrimary.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-gold-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span className="font-semibold">{businessInfo.phonePrimary}</span>
          </a>
          <span className="hidden md:inline text-slate-400">
            {businessInfo.workingHours[0].days}: {businessInfo.workingHours[0].time}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          <a href="#home" aria-label="Al Falah Hardware & Sanitary – Home" className="py-1">
            <BrandLogo size="md" theme="dark" showTagline={true} />
          </a>

          <nav aria-label="Main" className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={linkClass}>{item.label}</a>
            ))}
            <Button
              variant="whatsapp"
              size="sm"
              as="a"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={MessageCircle}
              className="ml-2 text-xs font-bold"
            >
              WhatsApp
            </Button>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav aria-label="Mobile" className="md:hidden bg-white border-t border-slate-200 px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold rounded text-slate-700 hover:bg-slate-50"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

import { useState, useRef, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import { divisions } from '../../data/solutions';
import Button from '../common/Button';
import BrandLogo from '../common/BrandLogo';
import { buildWhatsAppLink } from '../../utils/whatsapp';

export default function Navbar({ onSelectSolution }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const whatsappUrl = buildWhatsAppLink("Hello Al Falah Hardware team, I am reaching out for a product quotation.");
  const linkClass = 'px-3.5 py-2 text-sm font-semibold rounded-md text-slate-700 hover:text-navy-900 hover:bg-slate-100 transition-colors';

  // Close the dropdown on outside click or Escape
  useEffect(() => {
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropdownOpen(false);
    };
    const onKey = (e) => e.key === 'Escape' && setDropdownOpen(false);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const pickSolution = (id) => {
    setDropdownOpen(false);
    setMenuOpen(false);
    onSelectSolution(id);
  };

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
            <a href="#home" className={linkClass}>Home</a>

            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                className={`${linkClass} inline-flex items-center gap-1`}
              >
                Our Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 top-full mt-1 w-56 bg-white border border-slate-200 rounded shadow-lg py-1 z-50">
                  {divisions.map((d) => (
                    <li key={d.id}>
                      <button
                        type="button"
                        onClick={() => pickSolution(d.id)}
                        className="w-full text-left px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-navy-900"
                      >
                        {d.shortName}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <a href="#inquiry" className={linkClass}>Contact / Inquiry</a>
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
          <a href="#home" onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-sm font-semibold rounded text-slate-700 hover:bg-slate-50">
            Home
          </a>
          <p className="px-3 pt-2 text-xs font-bold uppercase tracking-wider text-slate-500">Our Solutions</p>
          {divisions.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => pickSolution(d.id)}
              className="block w-full text-left pl-6 pr-3 py-2 text-sm font-semibold rounded text-slate-700 hover:bg-slate-50"
            >
              {d.shortName}
            </button>
          ))}
          <a href="#inquiry" onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-sm font-semibold rounded text-slate-700 hover:bg-slate-50">
            Contact / Inquiry
          </a>
        </nav>
      )}
    </header>
  );
}

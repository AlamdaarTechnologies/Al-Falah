import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import { divisions } from '../../data/solutions';
import Button from '../common/Button';
import BrandLogo from '../common/BrandLogo';
import { buildWhatsAppLink } from '../../utils/whatsapp';

export default function Navbar({ activePage, setActivePage, onOpenDivision }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Solutions', id: 'solutions', hasDropdown: true },
    { label: 'Products', id: 'products' },
    { label: 'Brochures', id: 'brochures' },
    { label: 'Inquiry', id: 'inquiry' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDivisionClick = (div) => {
    if (onOpenDivision) {
      onOpenDivision(div);
    } else {
      setActivePage('division');
    }
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
  };

  const whatsappDirectUrl = buildWhatsAppLink("Hello Al Falah Hardware team, I am reaching out for a product quotation.");

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200/90 shadow-sm">
      {/* Top Contact Strip */}
      <div className="bg-navy-950 text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6 truncate">
            <a 
              href={`tel:${businessInfo.phonePrimary.replace(/\s+/g, '')}`} 
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-gold-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span className="font-semibold text-xs">{businessInfo.phonePrimary}</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-400 text-xs">
              {businessInfo.workingHours[0].days}: {businessInfo.workingHours[0].time}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold text-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: {businessInfo.displayWhatsapp}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2">
          {/* Brand Name / Logo */}
          <div 
            className="cursor-pointer py-1"
            onClick={() => handleNavClick('home')}
          >
            <BrandLogo size="md" theme="dark" showTagline={true} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              
              if (item.hasDropdown) {
                return (
                  <div 
                    key={item.id} 
                    className="relative"
                    onMouseEnter={() => setSolutionsDropdownOpen(true)}
                    onMouseLeave={() => setSolutionsDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => handleNavClick('solutions')}
                      className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                        isActive 
                          ? 'text-navy-900 bg-gold-50 font-bold border-b-2 border-gold-500' 
                          : 'text-slate-700 hover:text-navy-900 hover:bg-slate-100'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 ${isActive ? 'text-gold-600' : 'text-slate-500'}`} />
                    </button>

                    {/* Solutions Dropdown Menu */}
                    {solutionsDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-white rounded-md border border-slate-200 shadow-xl py-2 z-50 animate-fadeIn">
                        {divisions.map((div) => (
                          <div
                            key={div.id}
                            onClick={() => handleDivisionClick(div)}
                            className="px-4 py-2.5 hover:bg-slate-50 cursor-pointer border-b border-slate-100 last:border-0 group"
                          >
                            <p className="text-sm font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                              {div.name}
                            </p>
                            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                              {div.tagline}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-all ${
                    isActive
                      ? 'text-navy-900 bg-gold-50 font-bold border-b-2 border-gold-500'
                      : 'text-slate-700 hover:text-navy-900 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              variant="whatsapp"
              size="sm"
              as="a"
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={MessageCircle}
              className="text-xs font-bold"
            >
              Send Inquiry
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2 text-sm font-semibold rounded transition-colors ${
                activePage === item.id 
                  ? 'text-navy-900 bg-gold-50 font-bold border-l-4 border-gold-500' 
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Division Direct Links */}
          <div className="pt-2 border-t border-slate-100 space-y-1">
            <p className="text-[11px] font-bold uppercase text-slate-400 px-3">Divisions:</p>
            {divisions.map((div) => (
              <button
                key={div.id}
                onClick={() => handleDivisionClick(div)}
                className="w-full text-left px-3 py-1.5 text-xs font-bold text-navy-900 hover:text-gold-600 hover:bg-slate-50"
              >
                {div.name}
              </button>
            ))}
          </div>

          <div className="pt-2">
            <Button
              variant="whatsapp"
              size="sm"
              as="a"
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={MessageCircle}
              className="w-full text-xs font-bold justify-center"
            >
              WhatsApp Inquiry
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { divisions } from '../../data/solutions';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'mission', label: 'Mission' },
];

const linkClass =
  'px-3 lg:px-4 py-2 text-sm font-medium uppercase tracking-[0.12em] text-slate-200 hover:text-gold-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded';
const mobileItem = 'block w-full text-left px-3 py-2.5 text-sm font-medium rounded text-slate-100 hover:bg-white/10 hover:text-gold-400';

export default function Navbar({ onNavigate, onSelectSolution }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown on outside click or Escape
  useEffect(() => {
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropdownOpen(false);
    };
    const onKey = (e) => e.key === 'Escape' && (setDropdownOpen(false), setMenuOpen(false));
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    onNavigate(id);
  };
  const pickSolution = (id) => {
    setDropdownOpen(false);
    setMenuOpen(false);
    onSelectSolution(id);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-navy-950 border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop / tablet: links centred across the bar */}
        <nav aria-label="Main" className="hidden md:flex items-center justify-center gap-1 lg:gap-4 py-3.5">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={(e) => go(e, l.id)} className={linkClass}>{l.label}</a>
          ))}

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
              <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-60 bg-navy-950 border border-white/10 rounded shadow-lg py-1 z-50">
                {divisions.map((d) => (
                  <li key={d.id}>
                    <button
                      type="button"
                      onClick={() => pickSolution(d.id)}
                      className="w-full text-left px-4 py-2.5 text-sm font-medium text-slate-100 hover:bg-white/10 hover:text-gold-400"
                    >
                      {d.shortName}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a href="#contact" onClick={(e) => go(e, 'contact')} className={linkClass}>Contact</a>
        </nav>

        {/* Mobile: one full-width menu bar */}
        <div className="md:hidden flex items-center justify-between py-3">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-slate-300">Menu</span>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1.5 text-white hover:bg-white/10 rounded"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile"
          className="md:hidden absolute right-0 top-full w-64 max-w-[80vw] bg-navy-950/95 backdrop-blur-sm border border-white/10 rounded-bl-lg shadow-lg px-3 py-3 space-y-1"
        >
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={(e) => go(e, l.id)} className={mobileItem}>{l.label}</a>
          ))}
          <p className="px-3 pt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Our Solutions</p>
          {divisions.map((d) => (
            <button key={d.id} type="button" onClick={() => pickSolution(d.id)} className={`${mobileItem} pl-6`}>
              {d.shortName}
            </button>
          ))}
          <a href="#contact" onClick={(e) => go(e, 'contact')} className={mobileItem}>Contact</a>
        </nav>
      )}
    </header>
  );
}

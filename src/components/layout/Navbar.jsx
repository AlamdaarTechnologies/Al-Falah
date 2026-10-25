import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { divisions } from '../../data/solutions';
import BrandLogo from '../common/BrandLogo';

const linkClass = 'px-3.5 py-2 text-sm font-medium rounded-md text-slate-700 hover:text-navy-900 hover:bg-slate-100 transition-colors';

export default function Navbar({ onSelectSolution }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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
    <header className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur-md border-b border-slate-200/70 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
        <a href="#home" aria-label="Al Falah Enterprise – Home" className="py-1">
          <BrandLogo size="md" theme="dark" showTagline={false} />
        </a>

        <nav aria-label="Main" className="hidden md:flex items-center gap-1">
          <a href="#home" className={linkClass}>Home</a>
          <a href="#about" className={linkClass}>About</a>

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
                      className="w-full text-left px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-navy-900"
                    >
                      {d.shortName}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a href="#contact" className={linkClass}>Contact</a>
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

      {menuOpen && (
        <nav
          aria-label="Mobile"
          className="md:hidden absolute right-0 top-full w-64 max-w-[80vw] bg-white/90 backdrop-blur-sm border border-slate-200 rounded-bl-lg shadow-lg px-3 py-3 space-y-1"
        >
          <a href="#home" onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-sm font-medium rounded text-slate-800 hover:bg-slate-100">Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-sm font-medium rounded text-slate-800 hover:bg-slate-100">About</a>
          <p className="px-3 pt-2 text-xs font-bold uppercase tracking-wider text-slate-500">Our Solutions</p>
          {divisions.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => pickSolution(d.id)}
              className="block w-full text-left pl-6 pr-3 py-2 text-sm font-medium rounded text-slate-800 hover:bg-slate-100"
            >
              {d.shortName}
            </button>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-sm font-medium rounded text-slate-800 hover:bg-slate-100">Contact</a>
        </nav>
      )}
    </header>
  );
}

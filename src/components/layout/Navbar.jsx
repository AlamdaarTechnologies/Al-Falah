import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { divisions } from '../../data/solutions';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'mission', label: 'Mission' },
];

const linkClass = (active) =>
  `relative px-3 lg:px-4 py-2 text-sm font-medium uppercase tracking-[0.12em] transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${active
    ? 'text-[#f0b429] after:absolute after:inset-x-3 lg:after:inset-x-4 after:bottom-0 after:h-0.5 after:rounded after:bg-[#f0b429]'
    : 'text-slate-200 hover:text-[#f0b429]'
  }`;
const mobileItem = (active) =>
  `block w-full text-left px-3 py-2.5 text-sm font-medium rounded hover:bg-white/10 hover:text-[#f0b429] ${active ? 'text-[#f0b429] bg-white/5' : 'text-slate-100'
  }`;

export default function Navbar({ onNavigate, onSelectSolution, inProductView = false }) {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Highlight the link of the section currently on screen (or "Our Solutions" in the product view)
  useEffect(() => {
    if (inProductView) { setActive('solutions'); return; }
    const ids = ['home', 'about', 'mission', 'solutions', 'inquiry', 'contact'];
    const update = () => {
      const y = 120; // just below the sticky bar
      let current = 'home';
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= y) current = id;
      });
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = 'contact';
      setActive(current === 'inquiry' ? 'contact' : current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [inProductView]);

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
            <a key={l.id} href={`#${l.id}`} onClick={(e) => go(e, l.id)} className={linkClass(active === l.id)}>{l.label}</a>
          ))}

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              className={`${linkClass(active === 'solutions')} inline-flex items-center gap-1`}
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
                      className="w-full text-left px-4 py-2.5 text-sm font-medium text-slate-100 hover:bg-white/10 hover:text-[#f0b429]"
                    >
                      {d.shortName}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a href="#contact" onClick={(e) => go(e, 'contact')} className={linkClass(active === 'contact')}>Contact</a>
        </nav>

        {/* Mobile: the whole bar is one toggle button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex h-12 w-full items-center justify-end text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile"
          className="md:hidden absolute right-0 top-full w-[min(18rem,92vw)] bg-navy-950/95 backdrop-blur-sm border border-white/10 rounded-bl-lg shadow-lg px-3 py-3 space-y-1"
        >
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={(e) => go(e, l.id)} className={mobileItem(active === l.id)}>{l.label}</a>
          ))}
          <p className="px-3 pt-2 text-xs font-bold uppercase tracking-wider text-slate-400">Our Solutions</p>
          {divisions.map((d) => (
            <button key={d.id} type="button" onClick={() => pickSolution(d.id)} className={`${mobileItem(active === 'solutions')} pl-6`}>
              {d.shortName}
            </button>
          ))}
          <a href="#contact" onClick={(e) => go(e, 'contact')} className={mobileItem(active === 'contact')}>Contact</a>
        </nav>
      )}
    </header>
  );
}
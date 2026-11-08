import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { divisions } from '../../data/solutions';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'mission', label: 'Mission' },
];

export default function Navbar({
  onNavigate,
  onSelectSolution,
  inProductView = false
}) {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navbarRef = useRef(null);
  const dropdownRef = useRef(null);

  // Automatically highlight the section currently being viewed
  useEffect(() => {
    if (inProductView) {
      setActive('solutions');
      return;
    }

    const ids = [
      'home',
      'about',
      'mission',
      'solutions',
      'inquiry',
      'contact'
    ];

    let ticking = false;

    const updateActiveSection = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const offset = 120;
        let current = 'home';

        ids.forEach((id) => {
          const element = document.getElementById(id);

          if (
            element &&
            element.getBoundingClientRect().top <= offset
          ) {
            current = id;
          }
        });

        // Highlight Contact when reaching the bottom
        if (
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 10
        ) {
          current = 'contact';
        }

        setActive(
          current === 'inquiry' ? 'contact' : current
        );

        ticking = false;
      });
    };

    updateActiveSection();

    window.addEventListener('scroll', updateActiveSection, {
      passive: true
    });

    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [inProductView]);

  // Close menus when clicking outside or pressing Escape
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const go = (e, id) => {
    e.preventDefault();

    setMenuOpen(false);
    setDropdownOpen(false);

    onNavigate(id);
  };

  const pickSolution = (id) => {
    setDropdownOpen(false);
    setMenuOpen(false);

    onSelectSolution(id);
  };

  const navLinkClass = (id) =>
    `relative h-full flex items-center px-1 text-xs lg:text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
      active === id
        ? 'text-[#f0b429]'
        : 'text-slate-200 hover:text-[#f0b429]'
    }`;

  const activeIndicator = (
    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#f0b429] shadow-[0_0_8px_rgba(240,180,41,0.6)]" />
  );

  return (
    <header
      ref={navbarRef}
      className="sticky top-0 z-[100] w-full bg-[#08172c] border-b border-white/10 shadow-md transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop & Tablet Navbar */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center justify-center gap-6 lg:gap-10 h-14 text-white"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => go(e, link.id)}
              aria-current={active === link.id ? 'location' : undefined}
              className={navLinkClass(link.id)}
            >
              {link.label}
              {active === link.id && activeIndicator}
            </a>
          ))}

          {/* Products Dropdown */}
          <div className="relative h-full flex items-center" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              className={`relative h-full flex items-center px-1 text-xs lg:text-[13px] font-semibold uppercase tracking-[0.12em] gap-1.5 transition-colors duration-200 ${
                active === 'solutions'
                  ? 'text-[#f0b429]'
                  : 'text-slate-200 hover:text-[#f0b429]'
              }`}
            >
              Our Products
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  dropdownOpen ? 'rotate-180 text-[#f0b429]' : ''
                }`}
              />
              {active === 'solutions' && activeIndicator}
            </button>

            {dropdownOpen && (
              <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-64 max-h-[70vh] overflow-y-auto bg-[#08172c] border border-white/15 rounded-lg shadow-2xl py-2 z-[110]">
                {divisions.map((division) => (
                  <li key={division.id}>
                    <button
                      type="button"
                      onClick={() => pickSolution(division.id)}
                      className="w-full text-left px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-slate-100 hover:bg-white/10 hover:text-[#f0b429] transition-colors"
                    >
                      {division.shortName}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Contact */}
          <a
            href="#contact"
            onClick={(e) => go(e, 'contact')}
            aria-current={active === 'contact' ? 'location' : undefined}
            className={navLinkClass('contact')}
          >
            Contact
            {active === 'contact' && activeIndicator}
          </a>
        </nav>

        {/* Mobile Bar */}
        <div className="md:hidden flex items-center justify-between h-14">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#f0b429]">
            {active === 'solutions' ? 'Products' : active.toUpperCase()}
          </span>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="p-1.5 rounded-md text-white hover:text-[#f0b429] hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f0b429]"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden w-full bg-[#08172c] border-t border-white/10 shadow-2xl px-5 py-4 space-y-1.5 max-h-[75vh] overflow-y-auto"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => go(e, link.id)}
              className={`block px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors ${
                active === link.id
                  ? 'text-[#f0b429] bg-white/10'
                  : 'text-slate-100 hover:bg-white/5 hover:text-[#f0b429]'
              }`}
            >
              {link.label}
            </a>
          ))}

          <div className="pt-3 pb-1 px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f0b429]">
            Our Products
          </div>

          {divisions.map((division) => (
            <button
              key={division.id}
              type="button"
              onClick={() => pickSolution(division.id)}
              className="w-full text-left px-5 py-2.5 text-xs font-medium text-slate-200 hover:text-[#f0b429] hover:bg-white/5 rounded-lg transition-colors"
            >
              {division.shortName}
            </button>
          ))}

          <a
            href="#contact"
            onClick={(e) => go(e, 'contact')}
            className={`block px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors ${
              active === 'contact'
                ? 'text-[#f0b429] bg-white/10'
                : 'text-slate-100 hover:bg-white/5 hover:text-[#f0b429]'
            }`}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}

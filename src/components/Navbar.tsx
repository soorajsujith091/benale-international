import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Highlights', href: '/highlights' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Rooms', href: '/tariff' },
  { label: 'Dining', href: '/food' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const showFixed = !isHome || scrolled;
  const isTransparent = isHome && !scrolled && transparent;

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-[500] transition-all duration-500 backdrop-blur-md"
        style={{
          backgroundColor: isTransparent ? 'transparent' : 'rgba(255, 255, 255, 0.95)',
          boxShadow: isTransparent ? 'none' : '0 1px 0 rgba(0,0,0,0.05)',
          transform: showFixed ? 'translateY(0)' : 'translateY(-100%)',
          opacity: showFixed ? 1 : 0,
        }}
      >
        <div className="flex items-center justify-between px-8 lg:px-16 py-4">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center">
              <img
                src="/assets/logo.svg"
                alt="Benale International"
                className="h-10 w-auto transition-all duration-300"
                style={{ filter: isTransparent ? 'brightness(0) invert(1)' : 'none' }}
              />
            </Link>
            
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                const textColorClass = isTransparent
                  ? (isActive ? 'text-white' : 'text-white/80 hover:text-white')
                  : (isActive ? 'text-[var(--color-accent-gold)]' : 'text-gray-600 hover:text-gray-900');
                
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`transition-colors font-medium ${textColorClass}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://hotels.eglobe-solutions.com/benaleinternational/booking/hotels/hotel-benale-international-kannur#bookingsteps" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center justify-center btn-gold"
            >
              Book Now
            </a>
            
            {/* Mobile Hamburger */}
            <button
              className={`lg:hidden p-2 transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-gray-900'}`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className="fixed inset-0 z-[499] lg:hidden transition-all duration-500"
        style={{
          backgroundColor: 'var(--color-bg-dark)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              className="font-heading-2 text-white transition-all duration-500"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: mobileOpen ? `${i * 0.08}s` : '0s',
                color: location.pathname === link.href ? 'var(--color-accent-gold)' : 'white',
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

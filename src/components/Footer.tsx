import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const exploreLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Rooms', href: '/tariff' },
  { label: 'Dining', href: '/food' },
  { label: 'Experience', href: '/highlights' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-bg-dark)' }}>
      <div className="container-luxury pt-16 lg:pt-24 pb-8 lg:pb-12">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img
              src="/assets/logo.svg"
              alt="Benale International"
              className="h-12 w-auto mb-4"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p
              className="text-sm"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Luxury Redefined in Kannur
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4
              className="font-label mb-6"
              style={{ color: 'white', letterSpacing: '0.1em' }}
            >
              Explore
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm transition-colors duration-300 hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-label mb-6"
              style={{ color: 'white', letterSpacing: '0.1em' }}
            >
              Contact
            </h4>
            <div className="space-y-3 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
              <p>Padannapalam Road, Opposite Sunshine Apartments, Manjapalam, Kannur, Kerala 670001</p>
              <p>
                <a href="tel:+919288034446" className="hover:text-white transition-colors">
                  +91 92880 34446
                </a>
              </p>
              <p>
                <a href="mailto:info@benaleinternational.com" className="hover:text-white transition-colors">
                  info@benaleinternational.com
                </a>
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4
              className="font-label mb-6"
              style={{ color: 'white', letterSpacing: '0.1em' }}
            >
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/benale_international"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-white"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/benaleinternational"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-white"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-white"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div
          className="mt-16 pt-8 flex flex-col md:flex-row justify-center items-center text-center"
          style={{ borderTop: '1px solid var(--color-border-dark)' }}
        >
          <p className="font-label" style={{ color: 'rgba(255,255,255,0.4)' }}>
            &copy; 2026 Benale International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

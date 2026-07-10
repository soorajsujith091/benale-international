import { Link } from 'react-router-dom';

const menuLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Rooms', href: '/tariff' },
  { label: 'Dining', href: '/food' },
  { label: 'Experience', href: '/highlights' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/benale_international' },
  { label: 'Facebook', href: 'https://facebook.com/benaleinternational' },
  { label: 'Twitter', href: '#' },
];

const contactLinks = [
  { label: 'info@benaleinternational.com', href: 'mailto:info@benaleinternational.com' },
  { label: '+91 92880 34449', href: 'tel:+919288034449' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] text-white overflow-hidden pt-16 lg:pt-24 z-10 pb-8 lg:pb-0">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/assets/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505]"></div>
      </div>

      <div className="container-luxury relative z-10 flex flex-col justify-between h-full">
        
        {/* Top Header */}
        <div className="flex justify-between items-center mb-16 lg:mb-24">
          <img src="/assets/logo.svg" alt="Benale" className="h-12 md:h-16 lg:h-20 brightness-0 invert" />
          <p className="font-heading-3 text-xs md:text-sm lg:text-base tracking-[0.2em] text-white/80 uppercase">
            Luxury Redefined.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 lg:mb-24 w-full">
          
          {/* MENU */}
          <div className="flex flex-col">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4">Menu</h3>
            <div className="w-full h-px bg-white/20 mb-6"></div>
            <ul className="flex flex-col gap-3">
              {menuLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/60 hover:text-white transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIALS */}
          <div className="flex flex-col">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4">Socials</h3>
            <div className="w-full h-px bg-white/20 mb-6"></div>
            <ul className="flex flex-col gap-3">
              {socialLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4">Contact</h3>
            <div className="w-full h-px bg-white/20 mb-6"></div>
            <ul className="flex flex-col gap-3 mb-8">
              {contactLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-block px-6 py-2.5 border border-white/30 rounded-full text-sm text-center hover:bg-white hover:text-black transition-all w-fit">
              Send a message
            </Link>
          </div>

        </div>

        {/* Giant Bottom Text */}
        <div className="w-full relative overflow-hidden flex justify-center items-end mt-8 lg:mt-0">
          <h1 
            className="font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/10"
            style={{ 
              fontSize: 'clamp(5rem, 24vw, 24rem)',
              lineHeight: 0.75,
              transform: 'translateY(16%)'
            }}
          >
            BENALE
          </h1>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="absolute bottom-4 lg:bottom-6 left-0 w-full text-center z-20">
        <p className="text-[10px] md:text-xs text-white/30 tracking-widest uppercase">Copyright 2026 &copy; BENALE INTERNATIONAL | Made with ❤️ Creatox Designs</p>
      </div>
    </footer>
  );
}

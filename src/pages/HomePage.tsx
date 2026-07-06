import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Sparkles, UtensilsCrossed, Waves, Crown } from 'lucide-react';

/* ─── Hero Section ─── */
function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = '/assets/hero-bg.png';
    img.onload = () => {
      setIsLoaded(true);
    };
    const timeout = setTimeout(() => setIsLoaded(true), 5000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const tl = gsap.timeline();
    
    tl.to(navRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
      .to(bgTextRef.current, { opacity: 0.15, scale: 1, duration: 1.2, ease: 'power2.out' }, '-=0.5')
      .to(textRef.current, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }, '-=0.8');

    return () => { tl.kill(); };
  }, [isLoaded]);

  return (
    <div
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden flex flex-col"
      style={{ backgroundColor: '#000' }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/assets/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 1s ease-in-out'
        }}
      >
        {/* Darker overlays to ensure text readability */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60" />
      </div>

      {/* Giant Background Text */}
      <div 
        ref={bgTextRef}
        className="absolute top-32 lg:top-auto lg:bottom-[15%] left-0 lg:left-12 w-full lg:w-auto text-center lg:text-left pointer-events-none overflow-hidden"
        style={{ opacity: 0, transform: 'scale(0.95)' }}
      >
        <span 
          className="font-bold tracking-tighter" 
          style={{ 
            fontSize: 'clamp(8rem, 20vw, 24rem)', 
            lineHeight: 1, 
            color: '#fff',
            mixBlendMode: 'overlay'
          }}
        >
          Benale
        </span>
      </div>

      {/* Navigation */}
      <div 
        ref={navRef} 
        className="relative z-10 w-full px-8 lg:px-16 py-6 flex items-center justify-between"
        style={{ opacity: 0, transform: 'translateY(-20px)' }}
      >
        <div className="flex items-center gap-12">
          <Link to="/">
            <img 
              src="/assets/logo.svg" 
              alt="Benale International" 
              className="h-10 w-auto" 
              style={{ filter: 'brightness(0) invert(1)' }} 
            />
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {['Home', 'About', 'Highlights', 'Facilities', 'Rooms', 'Dining', 'Careers', 'Contact'].map((item) => (
              <Link 
                key={item} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className="text-white/80 hover:text-white transition-colors font-medium"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <a 
            href="https://hotels.eglobe-solutions.com/benaleinternational/booking/hotels/hotel-benale-international-kannur#bookingsteps"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-8 lg:px-16 pb-16 lg:pb-24">
        
        {/* Heading */}
        <div 
          ref={textRef}
          className="w-full"
          style={{ opacity: 0, transform: 'translateX(-30px)' }}
        >
          <h1 className="text-white font-bold leading-tight tracking-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            Find Your Perfect Stay<br />
            at the Best Price
          </h1>
        </div>

      </div>
    </div>
  );
}

/* ─── About Section ─── */
function AboutSection() {
  const { ref: leftRef, visible: leftVisible } = useScrollReveal();
  const { ref: rightRef, visible: rightVisible } = useScrollReveal();

  return (
    <section className="container-luxury pt-24 lg:pt-32 pb-16 lg:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-start">
        <div
          ref={leftRef}
          style={{
            opacity: leftVisible ? 1 : 0,
            transform: leftVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <span className="font-label" style={{ color: 'var(--color-accent-gold)', letterSpacing: '0.2em' }}>
            ABOUT
          </span>
          <h2 className="font-heading-1 mt-6" style={{ maxWidth: '90%' }}>
            Where Heritage Meets Modern Luxury
          </h2>
          <div className="mt-8 space-y-6" style={{ maxWidth: '480px', color: 'var(--color-text-secondary)' }}>
            <p>
              Nestled in the heart of Kannur, Benale International is more than a hotel — it is a sanctuary where the rich cultural tapestry of Kerala intertwines with contemporary sophistication. Every corner tells a story of thoughtful craftsmanship and uncompromising attention to detail.
            </p>
            <p>
              From the moment you step through our doors, you are enveloped in an atmosphere of warmth and refinement. Our architecture pays homage to the region's heritage while embracing modern luxury, creating spaces that are both timeless and thoroughly of-the-moment.
            </p>
            <p>
              Whether you seek a serene escape, a vibrant culinary journey, or an impeccable venue for your most important celebrations, Benale International promises an experience that transcends the ordinary.
            </p>
          </div>
          <Link
            to="/about"
            className="inline-block mt-8 font-nav gold-underline"
            style={{ color: 'var(--color-accent-gold)' }}
          >
            Our Story
          </Link>
        </div>

        <div
          ref={rightRef}
          className="lg:-mt-16"
          style={{
            opacity: rightVisible ? 1 : 0,
            transform: rightVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
            transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s',
          }}
        >
          <div className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
            <img
              src="/assets/about-interior.jpg"
              alt="Benale International Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Rooms Preview ─── */
function RoomsPreview() {
  const { ref, visible } = useScrollReveal();
  const rooms = [
    { image: '/assets/room-deluxe.jpg', name: 'Deluxe Room', desc: '32 sqm \u00b7 City View', price: 'From \u20b98,500 / night' },
    { image: '/assets/room-suite.jpg', name: 'Executive Suite', desc: '52 sqm \u00b7 Garden View \u00b7 Living Room', price: 'From \u20b915,000 / night' },
    { image: '/assets/room-villa.jpg', name: 'Presidential Villa', desc: '120 sqm \u00b7 Private Pool \u00b7 Butler Service', price: 'From \u20b935,000 / night' },
  ];

  return (
    <section style={{ backgroundColor: 'var(--color-bg-white)' }} className="section-padding">
      <div className="container-luxury">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-heading-2">Rooms & Suites</h2>
          <Link to="/tariff" className="font-nav gold-underline" style={{ color: 'var(--color-accent-gold)' }}>
            View All →
          </Link>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <Link
              to="/tariff"
              key={room.name}
              className="group block"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.15}s`,
              }}
            >
              <div className="overflow-hidden" style={{ aspectRatio: '4/3', borderRadius: '2px' }}>
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                  style={{ transitionTimingFunction: 'var(--ease-hover)' }}
                />
              </div>
              <h3 className="font-heading-3 mt-6">{room.name}</h3>
              <p className="text-sm mt-2" style={{ color: 'var(--color-text-muted)' }}>{room.desc}</p>
              <p className="text-sm mt-1" style={{ color: 'var(--color-accent-gold)' }}>{room.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Dining Section ─── */
function DiningSection() {
  const { ref: leftRef, visible: leftVisible } = useScrollReveal();
  const { ref: rightRef, visible: rightVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div
          ref={leftRef}
          style={{
            opacity: leftVisible ? 1 : 0,
            transform: leftVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <span className="font-label" style={{ color: 'var(--color-accent-gold)', letterSpacing: '0.2em' }}>
            DINING
          </span>
          <h2 className="font-heading-1 text-gray-900 mt-6">Culinary Excellence</h2>
          <div className="mt-8 space-y-4 text-gray-600" style={{ maxWidth: '440px' }}>
            <p>
              At Benale International, dining is an art form. Our award-winning chefs craft experiences that celebrate the vibrant flavors of Kerala while drawing inspiration from global gastronomy.
            </p>
            <p>
              Each dish is a masterpiece, presented with meticulous attention to detail in settings that range from intimate to grand.
            </p>
          </div>
          <Link
            to="/food"
            className="inline-block mt-8 font-nav gold-underline text-gray-900"
          >
            Explore Restaurants →
          </Link>
        </div>

        <div
          ref={rightRef}
          className="space-y-8"
          style={{
            opacity: rightVisible ? 1 : 0,
            transform: rightVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s',
          }}
        >
          <div className="overflow-hidden" style={{ aspectRatio: '16/10' }}>
            <img src="/assets/dining-restaurant.jpg" alt="Restaurant" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden ml-[20%]" style={{ aspectRatio: '1/1' }}>
            <img src="/assets/dining-detail.jpg" alt="Dining Detail" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Experience Section ─── */
function ExperienceSection() {
  const { ref, visible } = useScrollReveal();
  const features = [
    { icon: Sparkles, title: 'Spa & Wellness', desc: 'Rejuvenate body and mind in our sanctuary of serenity. Ancient healing traditions meet modern therapeutic techniques.' },
    { icon: UtensilsCrossed, title: 'Fine Dining', desc: 'Savor culinary masterpieces crafted by award-winning chefs. From authentic Kerala cuisine to global gastronomy.' },
    { icon: Crown, title: 'Celebrations', desc: 'From intimate gatherings to grand weddings, our venues and expertise create moments that last a lifetime.' },
    { icon: Waves, title: 'Impeccable Service', desc: 'Our dedicated team anticipates your every need, ensuring a stay that exceeds every expectation.' },
  ];

  return (
    <section style={{ backgroundColor: 'var(--color-bg-primary)' }} className="section-padding">
      <div className="container-luxury">
        <h2 className="font-heading-2 text-center mb-16">The Benale Experience</h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="pt-8"
              style={{
                borderTop: '1px solid var(--color-border)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.15}s`,
              }}
            >
              <feature.icon className="w-12 h-12 mb-6" style={{ color: 'var(--color-accent-gold)', strokeWidth: 1 }} />
              <h3 className="font-heading-3">{feature.title}</h3>
              <p className="text-sm mt-3" style={{ color: 'var(--color-text-secondary)' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonial Section ─── */
function TestimonialSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section style={{ backgroundColor: 'var(--color-bg-white)' }} className="section-padding">
      <div className="container-luxury">
        <div
          ref={ref}
          className="relative max-w-3xl mx-auto text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <span
            className="absolute -top-8 left-0 font-heading-hero"
            style={{ color: 'var(--color-accent-gold)', opacity: 0.3, fontSize: '8rem', lineHeight: 1 }}
          >
            &ldquo;
          </span>
          <blockquote className="font-heading-3 italic relative z-10" style={{ lineHeight: 1.6 }}>
            An unforgettable stay. The attention to detail and warmth of service made our anniversary truly special. Every meal was a revelation, and the spa experience transported us to another world.
          </blockquote>
          <p className="font-label mt-8" style={{ color: 'var(--color-text-muted)' }}>
            — Priya & Rajesh, Mumbai
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Home Page ─── */
export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <div className="relative" style={{ zIndex: 2, backgroundColor: 'var(--color-bg-primary)' }}>
        <Navbar transparent />
        <AboutSection />
        <RoomsPreview />
        <DiningSection />
        <ExperienceSection />
        <TestimonialSection />
        <Footer />
      </div>
    </div>
  );
}

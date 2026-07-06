import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ─── Aspire Section ─── */
function AspireSection() {
  const { ref: imgRef, visible: imgVisible } = useScrollReveal();
  const { ref: textRef, visible: textVisible } = useScrollReveal();

  const features = [
    '500-guest capacity',
    'Panoramic city & sea views',
    'Dedicated bar & VIP lounge',
    'Customizable lighting & decor',
    'Direct kitchen access',
    'Bespoke catering menus',
  ];

  return (
    <section style={{ backgroundColor: 'var(--color-bg-dark)' }} className="py-0">
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%]">
        {/* Large Image */}
        <div
          ref={imgRef}
          className="overflow-hidden"
          style={{
            height: '70vh',
            minHeight: '400px',
            opacity: imgVisible ? 1 : 0,
            transform: imgVisible ? 'translateX(0)' : 'translateX(-40px)',
            transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <img
            src="/assets/aspire-hero.jpg"
            alt="Aspire Rooftop Venue"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div
          ref={textRef}
          className="flex items-center px-6 lg:px-12 py-16"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s',
          }}
        >
          <div style={{ maxWidth: '480px' }}>
            <span className="font-label" style={{ color: 'var(--color-accent-gold)' }}>
              ROOFTOP VENUE
            </span>
            <h2 className="font-heading-1 text-white mt-6">Aspire</h2>
            <div className="mt-8 space-y-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <p>
                Perched atop Benale International, Aspire is a breathtaking rooftop venue that transforms every event into an extraordinary experience. With panoramic views of Kannur's skyline and the Arabian Sea in the distance, this open-air space accommodates up to 500 guests for weddings, corporate gatherings, and celebrations of every kind.
              </p>
              <p>
                By day, Aspire basks in warm sunlight filtered through elegant canopies. By night, it becomes a magical setting under a canopy of stars, illuminated by thousands of fairy lights and the warm glow of fire pits.
              </p>
            </div>

            {/* Features List */}
            <ul className="mt-8 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-accent-gold)' }} />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="inline-block mt-8 font-nav gold-underline"
              style={{ color: 'var(--color-accent-gold)' }}
            >
              Plan Your Event →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Swimming Pool Section ─── */
function PoolSection() {
  const { ref: textRef, visible: textVisible } = useScrollReveal();
  const { ref: imgRef, visible: imgVisible } = useScrollReveal();

  const features = [
    '25-meter infinity pool',
    'Heated jacuzzi',
    'Swim-up bar',
    'Luxury cabanas',
    'Poolside dining service',
    "Children's splash area",
  ];

  return (
    <section style={{ backgroundColor: 'var(--color-bg-primary)' }} className="section-padding">
      <div className="container-luxury grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 items-center">
        {/* Text */}
        <div
          ref={textRef}
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <span className="font-label" style={{ color: 'var(--color-accent-gold)' }}>
            RECREATION
          </span>
          <h2 className="font-heading-1 mt-6">Swimming Pool</h2>
          <div className="mt-8 space-y-4" style={{ color: 'var(--color-text-secondary)' }}>
            <p>
              The centerpiece of Benale International's leisure facilities is our stunning infinity-edge swimming pool. Set amidst lush tropical gardens, the pool appears to merge with the horizon, creating an illusion of swimming into the sky.
            </p>
            <p>
              The 25-meter pool features a separate children's area, heated jacuzzi, and swim-up bar serving refreshing cocktails and light snacks. Luxurious cabanas with plush daybeds line the pool deck, offering private retreats for relaxation.
            </p>
            <p>
              Our poolside service team attends to every need, from fresh towels and sunscreen to curated playlists and chilled beverages.
            </p>
          </div>

          <ul className="mt-8 space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-accent-gold)' }} />
                {feature}
              </li>
            ))}
          </ul>

          <span className="inline-block mt-8 font-nav gold-underline cursor-pointer" style={{ color: 'var(--color-accent-gold)' }}>
            View All Activities →
          </span>
        </div>

        {/* Image */}
        <div
          ref={imgRef}
          style={{
            opacity: imgVisible ? 1 : 0,
            transform: imgVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
            transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s',
          }}
        >
          <div className="overflow-hidden" style={{ aspectRatio: '4/3', borderRadius: '2px' }}>
            <img src="/assets/pool-hero.jpg" alt="Swimming Pool" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Section ─── */
function CTASection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section 
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg-dark)' }}
    >
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/assets/pool-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div
        ref={ref}
        className="container-luxury text-center relative z-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <h2 className="font-heading-2 text-white">Ready to Experience Benale?</h2>
        <p className="mt-6 mx-auto" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px' }}>
          Book your stay today and discover why Benale International is Kannur's finest address.
        </p>
        <a
          href="https://hotels.eglobe-solutions.com/benaleinternational"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-10 py-4 font-nav text-white transition-all duration-300 hover:-translate-y-0.5"
          style={{ backgroundColor: 'var(--color-accent-gold)', letterSpacing: '0.1em' }}
          onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = 'var(--color-accent-gold-light)'; }}
          onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = 'var(--color-accent-gold)'; }}
        >
          Book Your Stay
        </a>
      </div>
    </section>
  );
}

/* ─── Facilities Page ─── */
export default function FacilitiesPage() {
  return (
    <div>
      <Navbar />
      <PageHeader
        title="Our Facilities"
        subtitle="Thoughtfully designed spaces for relaxation and celebration"
        backgroundImage="/assets/facilities-header.jpg"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Our Facilities', href: '/facilities' }]}
      />
      <AspireSection />
      <PoolSection />
      <CTASection />
      <Footer />
    </div>
  );
}

import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';

const galleryImages = [
  { src: '/assets/gallery-lobby.jpg', caption: 'The Grand Lobby' },
  { src: '/assets/gallery-pool.jpg', caption: 'Swimming Pool' },
  { src: '/assets/gallery-restaurant.jpg', caption: 'Bel Canto Restaurant' },
  { src: '/assets/gallery-room.jpg', caption: 'Luxury Accommodation' },
  { src: '/assets/gallery-exterior.jpg', caption: 'Hotel Exterior' },
];

const pillars = [
  { icon: 'Heart', title: 'Authenticity', desc: 'We celebrate the genuine spirit of Kerala in everything we do. From locally sourced ingredients in our kitchens to the warm, personal attention our staff provides, authenticity is at the heart of the Benale experience.' },
  { icon: 'Star', title: 'Excellence', desc: 'We pursue excellence in every detail — from the thread count of our linens to the training of our concierge team. Good enough is never enough. We strive to exceed expectations at every touchpoint.' },
  { icon: 'Leaf', title: 'Sustainability', desc: 'We are committed to preserving the natural beauty of Kannur for future generations. Our practices include rainwater harvesting, solar energy, zero-waste kitchens, and partnerships with local conservation initiatives.' },
];

/* ─── Sliding Gallery ─── */
function SlidingGallery() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % galleryImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '60vh', minHeight: '500px' }}>
      {galleryImages.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-all duration-[1500ms] ease-out"
          style={{
            opacity: current === i ? 1 : 0,
            transform: current === i ? 'scale(1)' : 'scale(1.08)',
          }}
        >
          <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(transparent 60%, rgba(45, 36, 23, 0.5))' }}
      />

      {/* Caption */}
      <div className="absolute bottom-8 left-6 lg:left-12 z-10">
        <h3 className="font-heading-3 text-white">{galleryImages[current].caption}</h3>
        <p className="font-label mt-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
          {String(current + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
        </p>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 right-6 lg:right-12 z-10 flex gap-3">
        {galleryImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-2.5 h-2.5 rounded-full transition-colors duration-300"
            style={{
              backgroundColor: current === i ? 'white' : 'rgba(255,255,255,0.4)',
            }}
          />
        ))}
      </div>
    </section>
  );
}

/* ─── Our Story ─── */
function OurStory() {
  const { ref: leftRef, visible: leftVisible } = useScrollReveal();
  const { ref: rightRef, visible: rightVisible } = useScrollReveal();

  return (
    <section style={{ backgroundColor: 'var(--color-bg-primary)' }} className="section-padding">
      <div className="container-luxury grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 items-center">
        <div
          ref={leftRef}
          style={{
            opacity: leftVisible ? 1 : 0,
            transform: leftVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <span className="font-label" style={{ color: 'var(--color-accent-gold)' }}>OUR BEGINNING</span>
          <h2 className="font-heading-1 mt-6">A Legacy of Hospitality</h2>
          <div className="mt-8 space-y-6" style={{ color: 'var(--color-text-secondary)' }}>
            <p>
              Benale International was born from a singular vision: to create a hotel that embodies the soul of Kannur while setting new standards for luxury hospitality in North Kerala. Founded in 2018 by the Benale Group, the hotel stands as a testament to the region's rich cultural heritage and its embrace of modern sophistication.
            </p>
            <p>
              The name 'Benale' draws from the local heritage, reflecting our deep roots in this land. Every aspect of the hotel — from the architectural design inspired by traditional Kerala vernacular to the culinary programs celebrating Malabar cuisine — pays homage to the traditions that make this region unique.
            </p>
            <p>
              What sets Benale International apart is our unwavering commitment to genuine hospitality. We believe that true luxury lies not in opulence alone, but in the warmth of human connection, the thoughtfulness of service, and the creation of moments that guests carry with them long after their departure.
            </p>
          </div>
        </div>
        <div
          ref={rightRef}
          style={{
            opacity: rightVisible ? 1 : 0,
            transform: rightVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
            transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s',
          }}
        >
          <div className="overflow-hidden" style={{ aspectRatio: '4/5' }}>
            <img src="/assets/IMG_4585.JPG.jpeg" alt="Hotel Interior" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Philosophy ─── */
function Philosophy() {
  const { ref, visible } = useScrollReveal();

  const icons: Record<string, React.ReactNode> = {
    Heart: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    Star: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    Leaf: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 5 18 2 18 2s-3 2.5-3 9a5 5 0 0 0 5 5c-2.5 0-5-2-5-5 0-3 2.5-5 5-5 1.5 0 3 1 3 1s-2-4-7-4a7 7 0 0 0-7 7c0 4 3 7 7 7 4 0 6-3 6-6" />
      </svg>
    ),
  };

  return (
    <section style={{ backgroundColor: 'var(--color-bg-white)' }} className="section-padding">
      <div className="container-luxury">
        <h2 className="font-heading-2 text-center mb-16">Our Philosophy</h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.15}s`,
              }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
                style={{ border: '1px solid var(--color-border)', color: 'var(--color-accent-gold)' }}
              >
                {icons[pillar.icon]}
              </div>
              <h3 className="font-heading-3 mt-8">{pillar.title}</h3>
              <p className="mt-4" style={{ color: 'var(--color-text-secondary)' }}>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Values Quote ─── */
function ValuesSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      className="relative flex items-center justify-center"
      style={{
        height: '50vh',
        minHeight: '400px',
        backgroundImage: `linear-gradient(rgba(45, 36, 23, 0.6), rgba(45, 36, 23, 0.6)), url(/assets/dining-restaurant.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        ref={ref}
        className="text-center px-6 max-w-3xl"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <h2 className="font-heading-2 text-white italic" style={{ lineHeight: 1.4 }}>
          &ldquo;Luxury is not a thing. It is a feeling — the feeling of being truly seen, truly cared for, truly at home.&rdquo;
        </h2>
        <p className="font-label mt-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
          — The Benale Promise
        </p>
      </div>
    </section>
  );
}

/* ─── About Page ─── */
export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <PageHeader
        title="Our Story"
        backgroundImage="/assets/about-header.jpg"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }]}
      />
      <OurStory />
      <SlidingGallery />
      <Philosophy />
      <ValuesSection />
      <Footer />
    </div>
  );
}

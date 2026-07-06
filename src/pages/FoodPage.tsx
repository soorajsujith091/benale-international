import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ─── Bel Canto Section ─── */
function BelCantoSection() {
  const { ref: leftRef, visible: leftVisible } = useScrollReveal();
  const { ref: rightRef, visible: rightVisible } = useScrollReveal();

  return (
    <section style={{ backgroundColor: 'var(--color-bg-dark)' }} className="section-padding">
      <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div
          ref={leftRef}
          style={{
            opacity: leftVisible ? 1 : 0,
            transform: leftVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <span className="font-label" style={{ color: 'var(--color-accent-gold)', letterSpacing: '0.2em' }}>FINE DINING</span>
          <h2 className="font-heading-1 text-white mt-6">Bel Canto</h2>
          <div className="mt-8 space-y-4" style={{ maxWidth: '440px', color: 'rgba(255,255,255,0.7)' }}>
            <p>
              Bel Canto is the crown jewel of Benale International's culinary offerings. Named after the Italian tradition of beautiful singing, our restaurant celebrates the art of exquisite taste.
            </p>
            <p>
              The dining room seats 60 guests in an atmosphere of understated elegance — warm wood, soft candlelight, and curated local artwork create the perfect backdrop for an unforgettable meal.
            </p>
            <p>
              Our wine cellar features over 200 labels from around the world, carefully selected to complement our menu. Our sommelier is always on hand to guide you through the perfect pairing.
            </p>
          </div>

          <div className="flex gap-8 mt-8">
            {[
              { label: 'Cuisine', value: 'Contemporary Kerala \u00b7 Global' },
              { label: 'Hours', value: '7:00 PM \u2013 11:00 PM' },
              { label: 'Dress Code', value: 'Smart Casual' },
            ].map((detail) => (
              <div key={detail.label}>
                <p className="font-label" style={{ color: 'var(--color-accent-gold)' }}>{detail.label}</p>
                <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>{detail.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={rightRef}
          style={{
            opacity: rightVisible ? 1 : 0,
            transform: rightVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s',
          }}
        >
          <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <img src="/assets/belcanto-interior.jpg" alt="Bel Canto Restaurant" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Bel Canto Menu ─── */
function BelCantoMenu() {
  const { ref, visible } = useScrollReveal();
  const dishes = [
    { image: '/assets/dish-1.jpg', name: 'Meen Pollichathu', desc: 'Pearl spot fish marinated in traditional Malabar spices, wrapped in banana leaf and grilled to perfection. Served with fragrant coconut rice.' },
    { image: '/assets/dish-2.jpg', name: 'Nadan Mutton Curry', desc: 'Slow-cooked tender lamb in a rich gravy of roasted coconut, curry leaves, and aromatic spices. A recipe passed down through generations.' },
    { image: '/assets/dish-3.jpg', name: 'Tender Coconut Mousse', desc: 'A delicate mousse of fresh tender coconut with notes of cardamom, topped with caramelized banana and a saffron reduction.' },
  ];

  return (
    <section style={{ backgroundColor: 'var(--color-bg-dark)' }} className="pb-24">
      <div className="container-luxury">
        <p className="font-label text-center mb-12" style={{ color: 'var(--color-accent-gold)', letterSpacing: '0.2em' }}>
          SIGNATURE DISHES
        </p>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, i) => (
            <div
              key={dish.name}
              className="group"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.15}s`,
              }}
            >
              <div className="overflow-hidden" style={{ aspectRatio: '1/1' }}>
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.03]"
                  style={{ transitionTimingFunction: 'var(--ease-hover)' }}
                />
              </div>
              <h3 className="font-heading-3 text-white mt-6">{dish.name}</h3>
              <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.6)' }}>{dish.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Cafe Launch Section ─── */
function CafeLaunchSection() {
  const { ref: leftRef, visible: leftVisible } = useScrollReveal();
  const { ref: rightRef, visible: rightVisible } = useScrollReveal();

  return (
    <section style={{ backgroundColor: 'var(--color-bg-primary)' }} className="section-padding">
      <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div
          ref={leftRef}
          style={{
            opacity: leftVisible ? 1 : 0,
            transform: leftVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <span className="font-label" style={{ color: 'var(--color-accent-gold)', letterSpacing: '0.2em' }}>CAFÉ & LOUNGE</span>
          <h2 className="font-heading-1 mt-6">Cafe Launch</h2>
          <div className="mt-8 space-y-4" style={{ color: 'var(--color-text-secondary)' }}>
            <p>
              Cafe Launch is where the energy of Kannur meets the comfort of Benale International. From the first pour of morning coffee to the last cocktail of the evening, this vibrant space is the hotel's living room — welcoming, warm, and endlessly engaging.
            </p>
            <p>
              Our coffee program celebrates the Malabar's rich coffee heritage, featuring single-origin beans roasted locally and prepared by our skilled baristas.
            </p>
            <p>
              The design merges industrial aesthetics with Kerala warmth — exposed brick, brass accents, leather banquettes, and floor-to-ceiling windows that blur the line between indoors and out.
            </p>
          </div>

          <div className="flex gap-8 mt-8 flex-wrap">
            {[
              { label: 'Cuisine', value: 'All-Day Dining \u00b7 Coffee \u00b7 Cocktails' },
              { label: 'Hours', value: '7:00 AM \u2013 11:00 PM' },
              { label: 'Atmosphere', value: 'Casual \u00b7 Vibrant' },
            ].map((detail) => (
              <div key={detail.label}>
                <p className="font-label" style={{ color: 'var(--color-accent-gold)' }}>{detail.label}</p>
                <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>{detail.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={rightRef}
          style={{
            opacity: rightVisible ? 1 : 0,
            transform: rightVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s',
          }}
        >
          <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <img src="/assets/cafelaunch-interior.jpg" alt="Cafe Launch" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Cafe Launch Menu ─── */
function CafeLaunchMenu() {
  const { ref, visible } = useScrollReveal();
  const items = [
    { name: 'Malabar Filter Coffee', desc: 'Traditional South Indian filter coffee with frothy milk', price: '\u20b9180' },
    { name: 'Avocado Toast', desc: 'Sourdough, smashed avocado, poached egg, microgreens', price: '\u20b9450' },
    { name: 'Kerala Egg Curry Bun', desc: 'Soft brioche bun with spiced egg curry filling', price: '\u20b9320' },
    { name: 'Tiramisu', desc: 'Classic Italian dessert with a Kerala coffee twist', price: '\u20b9380' },
  ];

  return (
    <section style={{ backgroundColor: 'var(--color-bg-primary)' }} className="pb-24">
      <div className="container-luxury">
        <p className="font-label text-center mb-12" style={{ color: 'var(--color-accent-gold)', letterSpacing: '0.2em' }}>
          CAFE FAVORITES
        </p>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={item.name}
              className="p-6"
              style={{
                backgroundColor: 'white',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.1}s`,
              }}
            >
              <h4 className="font-heading-3" style={{ fontSize: '1.1rem' }}>{item.name}</h4>
              <p className="text-sm mt-2" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
              <p className="text-sm mt-4 font-medium" style={{ color: 'var(--color-accent-gold)' }}>{item.price}</p>
            </div>
          ))}
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
          backgroundImage: 'url(/assets/belcanto-main.jpg)',
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
        <h2 className="font-heading-2 text-white">Reserve Your Table</h2>
        <p className="mt-6 mx-auto" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px' }}>
          Experience the finest dining in Kannur. Reserve your table at Bel Canto or Cafe Launch today.
        </p>
        <Link
          to="/contact"
          className="inline-block mt-8 px-10 py-4 font-nav text-white transition-all duration-300 hover:-translate-y-0.5"
          style={{ backgroundColor: 'var(--color-accent-gold)', letterSpacing: '0.1em' }}
          onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = 'var(--color-accent-gold-light)'; }}
          onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = 'var(--color-accent-gold)'; }}
        >
          Make a Reservation
        </Link>
      </div>
    </section>
  );
}

/* ─── Food Page ─── */
export default function FoodPage() {
  return (
    <div>
      <Navbar />
      <PageHeader
        title="Food & Dining"
        subtitle="A culinary journey through Kerala and beyond"
        backgroundImage="/assets/food-header.jpg"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Food & Dining', href: '/food' }]}
      />
      <BelCantoSection />
      <BelCantoMenu />
      <CafeLaunchSection />
      <CafeLaunchMenu />
      <CTASection />
      <Footer />
    </div>
  );
}

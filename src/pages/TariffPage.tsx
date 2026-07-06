import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Wifi, Tv, Wind, Refrigerator, ShieldCheck, UtensilsCrossed, Bath, Car } from 'lucide-react';

const rooms = [
  {
    image: '/assets/room-deluxe.jpg',
    name: 'Deluxe Room',
    desc: '32 sqm \u00b7 City View',
    price: 'From \u20b98,500 / night',
    amenities: [Wifi, Tv, Wind, Refrigerator, ShieldCheck, UtensilsCrossed],
  },
  {
    image: '/assets/room-suite.jpg',
    name: 'Executive Suite',
    desc: '52 sqm \u00b7 Garden View \u00b7 Living Room',
    price: 'From \u20b915,000 / night',
    amenities: [Wifi, Tv, Wind, Refrigerator, ShieldCheck, UtensilsCrossed, Bath],
  },
  {
    image: '/assets/room-villa.jpg',
    name: 'Presidential Villa',
    desc: '120 sqm \u00b7 Private Pool \u00b7 Butler Service',
    price: 'From \u20b935,000 / night',
    amenities: [Wifi, Tv, Wind, Refrigerator, ShieldCheck, UtensilsCrossed, Bath, Car],
  },
];

const comparisonData = [
  { feature: 'Room Size', deluxe: '32 sqm', suite: '52 sqm', villa: '120 sqm' },
  { feature: 'Bed Type', deluxe: 'King', suite: 'King', villa: 'King + Daybed' },
  { feature: 'View', deluxe: 'City', suite: 'Garden', villa: 'Pool & Garden' },
  { feature: 'Living Area', deluxe: '\u2014', suite: '\u2713', villa: '\u2713' },
  { feature: 'Private Pool', deluxe: '\u2014', suite: '\u2014', villa: '\u2713' },
  { feature: 'Butler Service', deluxe: '\u2014', suite: '\u2014', villa: '\u2713' },
  { feature: 'Bathtub', deluxe: '\u2014', suite: '\u2713', villa: '\u2713' },
  { feature: 'In-room Dining', deluxe: '\u2713', suite: '\u2713', villa: '\u2713' },
  { feature: 'Spa Credits', deluxe: '\u2014', suite: '\u2014', villa: '\u20b95,000' },
  { feature: 'Airport Transfer', deluxe: '\u2014', suite: '\u2014', villa: '\u2713' },
  { feature: 'Breakfast', deluxe: '\u2713', suite: '\u2713', villa: '\u2713' },
];

const commonAmenities = [
  { icon: Wifi, label: 'High-Speed Wi-Fi' },
  { icon: UtensilsCrossed, label: '24/7 Room Service' },
  { icon: Tv, label: 'Smart TV' },
  { icon: Wind, label: 'Air Conditioning' },
  { icon: Bath, label: 'Premium Toiletries' },
  { icon: ShieldCheck, label: 'Daily Housekeeping' },
  { icon: Refrigerator, label: 'In-room Safe' },
  { icon: Car, label: 'Tea & Coffee Station' },
  { icon: Wifi, label: 'Iron & Ironing Board' },
  { icon: Tv, label: 'Hair Dryer' },
  { icon: Wind, label: 'Bathrobes & Slippers' },
  { icon: Bath, label: 'Bottled Water' },
];

/* ─── Room Cards ─── */
function RoomCards() {
  const { ref, visible } = useScrollReveal();

  return (
    <section style={{ backgroundColor: 'var(--color-bg-primary)' }} className="section-padding">
      <div className="container-luxury">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-heading-2">Rooms & Suites</h2>
          <span className="font-nav" style={{ color: 'var(--color-accent-gold)' }}>
            Starting Rates
          </span>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <div
              key={room.name}
              style={{
                backgroundColor: 'white',
                borderRadius: '2px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.15}s`,
              }}
            >
              <div className="overflow-hidden group" style={{ aspectRatio: '4/3' }}>
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                  style={{ transitionTimingFunction: 'var(--ease-hover)' }}
                />
              </div>
              <div className="p-8">
                <h3 className="font-heading-3">{room.name}</h3>
                <p className="text-sm mt-2" style={{ color: 'var(--color-text-muted)' }}>{room.desc}</p>

                {/* Amenities icons */}
                <div className="flex gap-4 mt-4" style={{ color: 'var(--color-text-muted)' }}>
                  {room.amenities.slice(0, 6).map((Icon, j) => (
                    <Icon key={j} className="w-4 h-4" />
                  ))}
                </div>

                <div className="my-6" style={{ borderTop: '1px solid var(--color-border)' }} />

                <p style={{ color: 'var(--color-accent-gold)' }}>{room.price}</p>
                <p className="font-label mt-1" style={{ color: 'var(--color-text-muted)' }}>Inclusive of breakfast</p>

                <a
                  href="https://hotels.eglobe-solutions.com/benaleinternational"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center mt-6 py-3 font-nav text-white transition-all duration-300"
                  style={{ backgroundColor: 'var(--color-accent-gold)', letterSpacing: '0.1em' }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = 'var(--color-accent-gold-light)'; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = 'var(--color-accent-gold)'; }}
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Comparison Table ─── */
function ComparisonTable() {
  const { ref, visible } = useScrollReveal();

  return (
    <section style={{ backgroundColor: 'var(--color-bg-white)' }} className="section-padding">
      <div className="container-luxury" style={{ maxWidth: '1000px' }}>
        <h2 className="font-heading-2 text-center mb-12">Compare Room Features</h2>
        <div ref={ref} className="overflow-x-auto" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-border-dark)' }}>
                <th className="font-label text-left py-4 px-4" style={{ color: 'var(--color-accent-gold)' }}>FEATURE</th>
                <th className="font-label text-center py-4 px-4" style={{ color: 'var(--color-accent-gold)' }}>DELUXE ROOM</th>
                <th className="font-label text-center py-4 px-4" style={{ color: 'var(--color-accent-gold)' }}>EXECUTIVE SUITE</th>
                <th className="font-label text-center py-4 px-4" style={{ color: 'var(--color-accent-gold)' }}>PRESIDENTIAL VILLA</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr
                  key={row.feature}
                  style={{
                    backgroundColor: i % 2 === 0 ? 'white' : '#faf8f5',
                    borderBottom: '1px solid var(--color-border)',
                  }}
                >
                  <td className="py-4 px-4 text-sm font-medium">{row.feature}</td>
                  {[row.deluxe, row.suite, row.villa].map((val, j) => (
                    <td
                      key={j}
                      className="py-4 px-4 text-sm text-center"
                      style={{
                        color: val === '\u2713' ? 'var(--color-accent-gold)' : val === '\u2014' ? 'var(--color-text-muted)' : 'var(--color-text-primary)',
                      }}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ─── Amenities Grid ─── */
function AmenitiesGrid() {
  const { ref, visible } = useScrollReveal();

  return (
    <section style={{ backgroundColor: 'var(--color-bg-primary)' }} className="section-padding">
      <div className="container-luxury" style={{ maxWidth: '1000px' }}>
        <h2 className="font-heading-2 text-center mb-12">All Rooms Include</h2>
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {commonAmenities.map((amenity, i) => (
            <div
              key={amenity.label}
              className="text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.08}s`,
              }}
            >
              <amenity.icon className="w-6 h-6 mx-auto" style={{ color: 'var(--color-accent-gold)' }} />
              <p className="text-sm mt-2" style={{ color: 'var(--color-text-secondary)' }}>{amenity.label}</p>
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
          backgroundImage: 'url(/assets/room-suite.jpg)',
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
        <h2 className="font-heading-2 text-white">Find Your Perfect Room</h2>
        <a
          href="https://hotels.eglobe-solutions.com/benaleinternational"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-10 py-4 font-nav text-white transition-all duration-300 hover:-translate-y-0.5"
          style={{ backgroundColor: 'var(--color-accent-gold)', letterSpacing: '0.1em' }}
          onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = 'var(--color-accent-gold-light)'; }}
          onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = 'var(--color-accent-gold)'; }}
        >
          Check Availability
        </a>
      </div>
    </section>
  );
}

/* ─── Tariff Page ─── */
export default function TariffPage() {
  return (
    <div>
      <Navbar />
      <PageHeader
        title="Rooms & Suites"
        subtitle="Luxurious sanctuaries designed for rest and rejuvenation"
        backgroundImage="/assets/tariff-header.jpg"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Rooms & Tariff', href: '/tariff' }]}
      />
      <RoomCards />
      <ComparisonTable />
      <AmenitiesGrid />
      <CTASection />
      <Footer />
    </div>
  );
}

import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface HighlightSectionProps {
  label: string;
  title: string;
  body: string[];
  image: string;
  cta: { text: string; href: string };
  imageLeft: boolean;
  bgColor: string;
}

function HighlightSection({ label, title, body, image, cta, imageLeft, bgColor }: HighlightSectionProps) {
  const { ref: textRef, visible: textVisible } = useScrollReveal();
  const { ref: imgRef, visible: imgVisible } = useScrollReveal();

  const textContent = (
    <div
      ref={textRef}
      style={{
        opacity: textVisible ? 1 : 0,
        transform: textVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      <span className="font-label" style={{ color: 'var(--color-accent-gold)', letterSpacing: '0.2em' }}>
        {label}
      </span>
      <h2 className="font-heading-1 mt-6">{title}</h2>
      <div className="mt-8 space-y-4" style={{ color: 'var(--color-text-secondary)' }}>
        {body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      {cta.href.startsWith('tel:') || cta.href.startsWith('http') || cta.href.startsWith('mailto:') ? (
        <a
          href={cta.href}
          className="inline-block mt-8 font-nav gold-underline"
          style={{ color: 'var(--color-accent-gold)' }}
        >
          {cta.text}
        </a>
      ) : (
        <Link
          to={cta.href}
          className="inline-block mt-8 font-nav gold-underline"
          style={{ color: 'var(--color-accent-gold)' }}
        >
          {cta.text}
        </Link>
      )}
    </div>
  );

  const imageContent = (
    <div
      ref={imgRef}
      style={{
        opacity: imgVisible ? 1 : 0,
        transform: imgVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
        transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s',
      }}
    >
      <div className="overflow-hidden" style={{ aspectRatio: '4/3', borderRadius: '2px' }}>
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    </div>
  );

  return (
    <section style={{ backgroundColor: bgColor }} className="section-padding">
      <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {imageLeft ? (
          <>
            {imageContent}
            {textContent}
          </>
        ) : (
          <>
            {textContent}
            {imageContent}
          </>
        )}
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
          backgroundImage: 'url(/assets/gallery-exterior.jpg)',
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
        <h2 className="font-heading-2 text-white">Experience Benale International</h2>
        <p className="mt-6 mx-auto" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px' }}>
          Let us create an unforgettable experience for you. Contact our team to begin planning your stay, event, or dining experience.
        </p>
        <Link
          to="/contact"
          className="inline-block mt-8 px-10 py-4 font-nav text-white transition-all duration-300 hover:-translate-y-0.5"
          style={{
            backgroundColor: 'var(--color-accent-gold)',
            letterSpacing: '0.1em',
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.backgroundColor = 'var(--color-accent-gold-light)';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.backgroundColor = 'var(--color-accent-gold)';
          }}
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

/* ─── Highlights Page ─── */
export default function HighlightsPage() {
  return (
    <div>
      <Navbar />
      <PageHeader
        title="Our Highlights"
        subtitle="Discover what makes Benale International extraordinary"
        backgroundImage="/assets/about-header.jpg"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Our Highlights', href: '/highlights' }]}
      />

      <HighlightSection
        label="EVENTS & CELEBRATIONS"
        title="Aspire"
        body={[
          "An extraordinary venue designed for grand celebrations and corporate events. Accommodating 300-350 people in a theatre-style arrangement, Aspire provides a majestic setting with state-of-the-art facilities and elegant decor to make your events truly memorable.",
          "For Banquet Enquiries, please contact:\n+91 92880 34447 (GM Benale) or +91 81370 69997 (OM Benale)"
        ]}
        image="/assets/hl3.png"
        cta={{ text: 'Plan Your Event \u2192', href: 'tel:+919288034447' }}
        imageLeft={true}
        bgColor="var(--color-bg-primary)"
      />

      <HighlightSection
        label="EVENTS & CELEBRATIONS"
        title="Mirage"
        body={[
          "A versatile and sophisticated space perfect for medium-sized gatherings. With a capacity of 100-120 people, Mirage offers an intimate yet spacious environment ideal for wedding receptions, corporate meetings, and private parties.",
          "For Banquet Enquiries, please contact:\n+91 92880 34447 (GM Benale) or +91 81370 69997 (OM Benale)"
        ]}
        image="/assets/hl1.png"
        cta={{ text: 'Plan Your Event \u2192', href: 'tel:+919288034447' }}
        imageLeft={false}
        bgColor="var(--color-bg-white)"
      />

      <HighlightSection
        label="MEETINGS & EVENTS"
        title="Harmoney"
        body={[
          "Designed for focused and engaging events, Harmoney is highly flexible, accommodating 40-60 people in a theatre setup or 50 guests in a cluster arrangement. It is the perfect choice for workshops, seminars, and intimate celebrations.",
          "For Banquet Enquiries, please contact:\n+91 92880 34447 (GM Benale) or +91 81370 69997 (OM Benale)"
        ]}
        image="/assets/hl2.png"
        cta={{ text: 'Enquire Now \u2192', href: 'tel:+919288034447' }}
        imageLeft={true}
        bgColor="var(--color-bg-primary)"
      />

      <HighlightSection
        label="BUSINESS"
        title="Executive Board Room"
        body={[
          "Our premium Executive Board Room is fully equipped for high-level corporate meetings and strategy sessions. Designed to comfortably accommodate 25-30 people, it provides a professional environment with advanced audiovisual technology."
        ]}
        image="/assets/hl4.png"
        cta={{ text: 'Enquire Now \u2192', href: '/contact' }}
        imageLeft={false}
        bgColor="var(--color-bg-white)"
      />

      <HighlightSection
        label="BUSINESS"
        title="Board Room"
        body={[
          "An intimate and well-appointed meeting space for smaller corporate discussions and presentations. The Board Room comfortably seats 15-18 people, offering privacy, modern amenities, and a productive atmosphere for your team."
        ]}
        image="/assets/IMG_4585.JPG.jpeg"
        cta={{ text: 'Enquire Now \u2192', href: '/contact' }}
        imageLeft={true}
        bgColor="var(--color-bg-primary)"
      />

      <CTASection />
      <Footer />
    </div>
  );
}

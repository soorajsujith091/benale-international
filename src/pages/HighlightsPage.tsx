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
      <Link
        to={cta.href}
        className="inline-block mt-8 font-nav gold-underline"
        style={{ color: 'var(--color-accent-gold)' }}
      >
        {cta.text}
      </Link>
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
        label="FINE DINING"
        title="Bel Canto"
        body={[
          "Bel Canto, our signature fine-dining restaurant, is a celebration of culinary artistry. Under the guidance of Executive Chef Thomas Zachariah, the kitchen crafts dishes that honor Kerala's rich gastronomic heritage while embracing contemporary techniques and global influences.",
          "The menu changes seasonally, featuring the freshest locally sourced seafood, spices from the Malabar coast, and produce from our own organic garden. Each plate is composed with the precision of a painting and the soul of a family recipe.",
          "The dining room, with its warm wood paneling, soft candlelight, and curated artwork, provides an intimate setting for up to 60 guests. Private dining alcoves offer exclusivity for special occasions."
        ]}
        image="/assets/belcanto-main.jpg"
        cta={{ text: 'View Menu \u2192', href: '/food' }}
        imageLeft={true}
        bgColor="var(--color-bg-primary)"
      />

      <HighlightSection
        label="CAFÉ & LOUNGE"
        title="Cafe Launch"
        body={[
          "Cafe Launch is the beating heart of Benale International \u2014 a vibrant, welcoming space where guests and locals alike gather to enjoy exceptional coffee, artisanal pastries, and light fare throughout the day.",
          "By morning, the cafe buzzes with the aroma of freshly ground Malabar coffee and the gentle clink of porcelain. By afternoon, it transforms into a serene workspace for business travelers. As evening falls, Cafe Launch becomes a sophisticated lounge, offering craft cocktails and an intimate atmosphere for conversation.",
          "The interior design blends industrial chic with Kerala warmth \u2014 exposed brick walls, brass fixtures, comfortable leather seating, and large windows that flood the space with natural light."
        ]}
        image="/assets/cafelaunch-main.jpg"
        cta={{ text: 'Explore Cafe Launch \u2192', href: '/food' }}
        imageLeft={false}
        bgColor="var(--color-bg-white)"
      />

      <HighlightSection
        label="EVENTS & CELEBRATIONS"
        title="Banquet Hall"
        body={[
          "The Benale Banquet Hall is Kannur's premier venue for celebrations, conferences, and corporate events. With a capacity of up to 500 guests, this versatile space can be configured for intimate gatherings or grand galas.",
          "The hall features state-of-the-art audiovisual equipment, customizable lighting systems, and direct access to our catering facilities. Our dedicated events team works closely with each client to create bespoke experiences, from weddings and receptions to product launches and conferences.",
          "A separate bridal suite and pre-function lounge provide elegant spaces for preparation and welcome receptions. The adjacent courtyard offers a stunning outdoor option for cocktail hours and photo opportunities."
        ]}
        image="/assets/banquet-main.jpg"
        cta={{ text: 'Plan Your Event \u2192', href: '/contact' }}
        imageLeft={true}
        bgColor="var(--color-bg-primary)"
      />

      <HighlightSection
        label="BUSINESS & MEETINGS"
        title="Board Rooms"
        body={[
          "Benale International offers three distinct board rooms designed for productive meetings and important decisions. Each space combines cutting-edge technology with refined comfort to create an environment where ideas flourish.",
          "The Executive Board Room accommodates 20 guests in leather-appointed seating around a handcrafted mahogany table. The Conference Room seats 50 in a theater-style arrangement with full presentation capabilities. The intimate Strategy Room is ideal for senior leadership retreats and confidential discussions.",
          "All rooms feature high-speed Wi-Fi, wireless presentation systems, video conferencing capabilities, and dedicated refreshment services. Our business center provides additional support including printing, translation, and secretarial services."
        ]}
        image="/assets/boardroom-main.jpg"
        cta={{ text: 'Enquire Now \u2192', href: '/contact' }}
        imageLeft={false}
        bgColor="var(--color-bg-white)"
      />

      <CTASection />
      <Footer />
    </div>
  );
}

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MapPin, Phone, Mail, Calendar, Instagram, Facebook, Twitter, CheckCircle } from 'lucide-react';

const contactDetails = [
  { icon: MapPin, label: 'ADDRESS', value: 'Padannapalam Road, Opposite Sunshine Apartments, Manjapalam, Kannur, Kerala 670001', href: null },
  { icon: Phone, label: 'PHONE', value: '+91 92880 34449', href: 'tel:+919288034449' },
  { icon: Mail, label: 'EMAIL', value: 'info@benaleinternational.com', href: 'mailto:info@benaleinternational.com' },
  { icon: Calendar, label: 'RESERVATIONS', value: '+91 92880 34449', href: 'tel:+919288034449' },
];

/* ─── Contact Info Section ─── */
function ContactInfo() {
  const { ref: textRef, visible: textVisible } = useScrollReveal();
  const { ref: imgRef, visible: imgVisible } = useScrollReveal();

  return (
    <section style={{ backgroundColor: 'var(--color-bg-primary)' }} className="section-padding">
      <div className="container-luxury grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16">
        <div
          ref={textRef}
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <span className="font-label" style={{ color: 'var(--color-accent-gold)' }}>GET IN TOUCH</span>
          <h2 className="font-heading-1 mt-6">We Are Here to Help</h2>

          <div className="mt-12 space-y-8">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="flex items-start gap-4">
                <detail.icon className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent-gold)' }} />
                <div>
                  <p className="font-label" style={{ color: 'var(--color-text-muted)', letterSpacing: '0.1em' }}>{detail.label}</p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="mt-1 block transition-colors hover:text-[var(--color-accent-gold)]"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="mt-1" style={{ color: 'var(--color-text-primary)' }}>{detail.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social */}
          <div className="mt-12">
            <p className="font-label" style={{ color: 'var(--color-text-muted)' }}>Follow Us</p>
            <div className="flex gap-4 mt-3">
              {[
                { icon: Instagram, href: 'https://instagram.com/benale_international' },
                { icon: Facebook, href: 'https://facebook.com/benaleinternational' },
                { icon: Twitter, href: '#' },
              ].map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{ color: 'var(--color-text-muted)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-accent-gold)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)'; }}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={imgRef}
          style={{
            opacity: imgVisible ? 1 : 0,
            transform: imgVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
            transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s',
          }}
        >
          <div className="overflow-hidden" style={{ aspectRatio: '4/3', borderRadius: '2px' }}>
            <img src="/assets/contact-welcome.jpg" alt="Benale International Entrance" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact Form ─── */
function ContactForm() {
  const { ref, visible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (formData.firstName.length < 2) newErrors.firstName = 'Required';
    if (formData.lastName.length < 2) newErrors.lastName = 'Required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email required';
    if (!formData.subject) newErrors.subject = 'Please select a subject';
    if (formData.message.length < 10) newErrors.message = 'Minimum 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
    setErrors({});
  };

  const inputClass = (field: string) =>
    `w-full p-4 text-sm font-body border transition-all duration-300 focus:outline-none ${
      errors[field] ? 'border-red-500' : 'border-[var(--color-border)]'
    }`;

  if (submitted) {
    return (
      <section style={{ backgroundColor: 'var(--color-bg-white)' }} className="section-padding">
        <div className="container-luxury" style={{ maxWidth: '700px' }}>
          <div className="text-center p-12" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#27ae60' }}>
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-heading-3">Message Sent!</h3>
            <p className="mt-4" style={{ color: 'var(--color-text-secondary)' }}>
              Thank you for reaching out. Our team will respond to your enquiry within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="mt-6 font-nav gold-underline"
              style={{ color: 'var(--color-accent-gold)' }}
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ backgroundColor: 'var(--color-bg-white)' }} className="section-padding">
      <div
        ref={ref}
        className="container-luxury"
        style={{
          maxWidth: '700px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <h2 className="font-heading-2 text-center">Send Us a Message</h2>
        <p className="text-center mt-4 mb-12" style={{ color: 'var(--color-text-secondary)' }}>
          Have a question or special request? Fill out the form below and we'll respond promptly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder="First name *"
                className={inputClass('firstName')}
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
              {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <input
                type="text"
                placeholder="Last name *"
                className={inputClass('lastName')}
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
              {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <input
              type="email"
              placeholder="your@email.com *"
              className={inputClass('email')}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <input
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              className="w-full p-4 text-sm font-body border border-[var(--color-border)] transition-all duration-300 focus:outline-none"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <select
              className={inputClass('subject')}
              style={{ backgroundColor: 'white' }}
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            >
              <option value="">Select a subject *</option>
              <option>General Enquiry</option>
              <option>Room Reservation</option>
              <option>Event & Banquet</option>
              <option>Restaurant Reservation</option>
              <option>Feedback</option>
              <option>Other</option>
            </select>
            {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
          </div>

          <div>
            <textarea
              rows={5}
              placeholder="Your message... *"
              className={inputClass('message')}
              style={{ resize: 'vertical' }}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-4 font-nav text-white transition-all duration-300 disabled:opacity-50"
            style={{ backgroundColor: 'var(--color-accent-gold)', letterSpacing: '0.1em' }}
            onMouseEnter={(e) => { if (!submitting) (e.target as HTMLElement).style.backgroundColor = 'var(--color-accent-gold-light)'; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = 'var(--color-accent-gold)'; }}
          >
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}

/* ─── Map Section ─── */
function MapSection() {
  return (
    <section className="relative" style={{ height: '400px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.4!2d75.37!3d11.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDUyJzEyLjAiTiA3NcKwMjInMTIuMCJF!5e0!3m2!1sen!2sin!4v1"
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'grayscale(0.6) saturate(0.8)' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Benale International Location"
      />

      {/* Overlay Card */}
      <div
        className="absolute bottom-6 left-6 lg:bottom-8 lg:left-12 p-6 hidden md:block"
        style={{
          backgroundColor: 'white',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }}
      >
        <h4 className="font-heading-3" style={{ fontSize: '1.1rem' }}>Benale International</h4>
        <p className="text-sm mt-2" style={{ color: 'var(--color-text-secondary)' }}>
          Kannur, Kerala 670001
        </p>
        <a
          href="https://maps.google.com/?q=Benale+International+Kannur"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 font-nav gold-underline"
          style={{ color: 'var(--color-accent-gold)' }}
        >
          Get Directions →
        </a>
      </div>
    </section>
  );
}

/* ─── Contact Page ─── */
export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you"
        backgroundImage="/assets/hero-hotel.jpg"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact', href: '/contact' }]}
        height="40vh"
      />
      <ContactInfo />
      <ContactForm />
      <MapSection />
      <Footer />
    </div>
  );
}

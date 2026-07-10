import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActionButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 z-[900] flex flex-col gap-3"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
    >
      <a
        href="tel:+919288034449"
        className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: 'var(--color-accent-gold)',
          boxShadow: '0 4px 12px rgba(201, 165, 90, 0.4)',
        }}
        title="Call Us"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>
      <a
        href="https://wa.me/919288034449"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: '#25D366',
          boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
        }}
        title="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}

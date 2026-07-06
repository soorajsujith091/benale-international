import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  breadcrumb: { label: string; href: string }[];
  height?: string;
}

export default function PageHeader({ title, subtitle, backgroundImage, breadcrumb, height = '45vh' }: PageHeaderProps) {
  const { ref: titleRef, visible: titleVisible } = useScrollReveal(0.1);

  return (
    <header
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        height,
        minHeight: '350px',
        backgroundImage: backgroundImage
          ? `linear-gradient(rgba(45, 36, 23, 0.5), rgba(45, 36, 23, 0.7)), url(${backgroundImage})`
          : 'linear-gradient(rgba(45, 36, 23, 0.8), rgba(45, 36, 23, 0.9))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div ref={titleRef} className="text-center px-6">
        {/* Breadcrumb */}
        <div
          className="flex items-center justify-center gap-2 mb-4"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          {breadcrumb.map((crumb, i) => (
            <span key={crumb.href} className="flex items-center gap-2">
              {i > 0 && (
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
              )}
              <Link
                to={crumb.href}
                className="font-label transition-colors hover:text-white"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                {crumb.label}
              </Link>
            </span>
          ))}
        </div>

        {/* Title */}
        <h1
          className="font-heading-hero text-white"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s',
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="mt-4 text-lg"
            style={{
              color: 'rgba(255,255,255,0.7)',
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}

'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import type { Service } from './ServicesSection';

interface Props {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: Props) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const backdrop = backdropRef.current;
    const modal = modalRef.current;
    if (!backdrop || !modal) return;

    if (service) {
      // Small delay for mount
      const t = setTimeout(() => {
        backdrop.classList.add('open');
        modal.classList.add('open');
      }, 10);
      return () => clearTimeout(t);
    } else {
      backdrop.classList.remove('open');
      modal.classList.remove('open');
    }
  }, [service]);

  // Keyboard close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!service) return (
    <>
      <div ref={backdropRef} className="service-modal-backdrop" onClick={onClose} />
      <div ref={modalRef} className="service-modal">
        <div className="min-h-screen" />
      </div>
    </>
  );

  return (
    <>
      <div ref={backdropRef} className="service-modal-backdrop" onClick={onClose} />
      <div ref={modalRef} className="service-modal">
        {/* Close Button */}
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Close service details"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        {/* Modal Content */}
        <div
          className="min-h-screen"
          style={{ background: '#1A1A1A' }}
        >
          {/* Hero Image */}
          <div className="relative h-[55vh] overflow-hidden">
            <AppImage
              src={service.coverImage}
              alt={service.coverAlt}
              fill
              priority
              className="w-full h-full object-cover"
              style={{ transform: 'scale(1.05)' }}
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,26,26,0.3) 0%, rgba(26,26,26,0.8) 100%)' }} />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="max-w-5xl mx-auto">
                <span className="text-echelon-gold text-xs font-bold tracking-widest mb-3 block" style={{ fontFamily: 'DM Sans, sans-serif' }}>{service.tag} / SERVICE</span>
                <h2
                  className="font-display text-white mb-3"
                  style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em' }}
                >
                  {service.title}
                </h2>
                <p className="text-white/70 text-lg max-w-xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {service.description}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-5xl mx-auto px-6 md:px-8 py-16">
            {/* Image Gallery */}
            <div className="mb-16">
              <div className="section-label mb-6" style={{ color: '#C8A96E' }}>
                <span style={{ background: '#C8A96E' }} className="w-6 h-px block" />
                Visual Showcase
              </div>
              <div className="gallery-slider">
                {service.images.map((img, i) => (
                  <div
                    key={i}
                    className="gallery-slide"
                    style={{ width: i === 0 ? '65%' : '45%', minWidth: '280px', height: '320px' }}
                  >
                    <AppImage
                      src={img.src}
                      alt={img.alt}
                      width={600}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Packages */}
            <div>
              <div className="section-label mb-8" style={{ color: '#C8A96E' }}>
                <span style={{ background: '#C8A96E' }} className="w-6 h-px block" />
                Choose Your Package
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {service.packages.map((pkg, i) => (
                  <div key={i} className={`package-card p-6 ${pkg.featured ? 'featured' : ''}`}>
                    {pkg.featured && (
                      <div
                        className="text-xs font-bold mb-4 inline-block px-3 py-1 rounded-full"
                        style={{ background: 'rgba(200,169,110,0.2)', color: '#C8A96E', letterSpacing: '0.1em', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        MOST POPULAR
                      </div>
                    )}
                    <div className="text-2xl mb-3">{pkg.icon}</div>
                    <h3
                      className="font-display text-white text-xl font-bold mb-1"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {pkg.name}
                    </h3>
                    <div
                      className="text-echelon-gold font-bold text-lg mb-5"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {pkg.price}
                    </div>
                    <ul className="space-y-2">
                      {pkg.features.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-sm text-white/70" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                          <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5"/>
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button
                      className="mt-6 w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        background: pkg.featured ? '#C8A96E' : 'rgba(255,255,255,0.08)',
                        color: pkg.featured ? '#1A1A1A' : 'white',
                        border: '1px solid',
                        borderColor: pkg.featured ? '#C8A96E' : 'rgba(255,255,255,0.12)',
                      }}
                    >
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
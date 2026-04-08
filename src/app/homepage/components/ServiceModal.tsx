'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import HowSystemWorksSection from './HowSystemWorksSection';
import type { Service } from './servicesData';

interface Props {
  service: Service | null;
  onClose: () => void;
}

type PlatformId = 'instagram' | 'facebook' | 'youtube' | 'linkedin' | 'twitter';

const PLATFORM_KEYS: { id: PlatformId; aliases: string[] }[] = [
  { id: 'instagram', aliases: ['instagram', 'insta', 'ig'] },
  { id: 'facebook', aliases: ['facebook', 'fb'] },
  { id: 'youtube', aliases: ['youtube', 'yt'] },
  { id: 'linkedin', aliases: ['linkedin', 'li'] },
  { id: 'twitter', aliases: ['twitter', 'x'] },
];

function PlatformLogo({ id }: { id: PlatformId }) {
  if (id === 'instagram') {
    return (
      <span
        className="w-6 h-6 rounded-full flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #FD5949 0%, #D6249F 50%, #285AEB 100%)' }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="5" stroke="white" strokeWidth="2" />
          <circle cx="12" cy="12" r="3.5" stroke="white" strokeWidth="2" />
          <circle cx="17.2" cy="6.8" r="1" fill="white" />
        </svg>
      </span>
    );
  }

  if (id === 'facebook') {
    return (
      <span className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: '#1877F2' }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M14.5 8.5V6.8c0-.8.5-1.3 1.4-1.3H18V2.2h-3c-3 0-4.6 1.8-4.6 4.4v1.9H8v3.4h2.4V22h4.1V11.9H18l.5-3.4h-3.9z" />
        </svg>
      </span>
    );
  }

  if (id === 'youtube') {
    return (
      <span className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: '#FF0000' }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M21.6 8.4a2.9 2.9 0 0 0-2-2c-1.8-.5-7.6-.5-7.6-.5s-5.8 0-7.6.5a2.9 2.9 0 0 0-2 2A30 30 0 0 0 2 12a30 30 0 0 0 .4 3.6 2.9 2.9 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.9 2.9 0 0 0 2-2A30 30 0 0 0 22 12a30 30 0 0 0-.4-3.6zM10 15.4V8.6L16 12l-6 3.4z" />
        </svg>
      </span>
    );
  }

  if (id === 'linkedin') {
    return (
      <span className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: '#0A66C2' }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M6.6 8.6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM4.9 10h3.4v9.5H4.9V10zm5.5 0h3.2v1.3h.1c.4-.8 1.5-1.6 3-1.6 3.2 0 3.8 2.1 3.8 4.8v5h-3.4V15c0-1 0-2.4-1.5-2.4s-1.8 1.1-1.8 2.3v4.6h-3.4V10z" />
        </svg>
      </span>
    );
  }

  return (
    <span className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: '#111111' }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M18.9 2h3.7l-8 9.2L24 22h-7.5l-5.9-7-6.1 7H.8l8.5-9.7L0 2h7.7l5.3 6.3L18.9 2z" />
      </svg>
    </span>
  );
}

export default function ServiceModal({ service, onClose }: Props) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const getFeatureText = (pkg: Service['packages'][number], matcher: RegExp) =>
    pkg.features.find((f) => matcher.test(f));

  const getComparisonValue = (
    pkg: Service['packages'][number],
    row:
      | 'platforms'
      | 'posts'
      | 'reels'
      | 'graphics'
      | 'strategy'
      | 'planning'
      | 'shoots'
  ) => {
    const platformFeature = getFeatureText(pkg, /platform/i);
    const postFeature = getFeatureText(pkg, /posts?\/?month/i);
    const reelsFeature = getFeatureText(pkg, /reels?/i);
    const graphicsFeature = getFeatureText(pkg, /graphics?/i);
    const strategyFeature = getFeatureText(pkg, /strategy/i);
    const planningFeature = getFeatureText(pkg, /planning/i);
    const shootsFeature = getFeatureText(pkg, /shoot/i);

    if (row === 'platforms') {
      const m = platformFeature?.match(/(\d+(?:-\d+)?)\s*platform/i);
      return m ? m[1] : '-';
    }

    if (row === 'posts') {
      const m = postFeature?.match(/(\d+)\s*posts?/i);
      return m ? m[1] : '-';
    }

    if (row === 'reels') {
      const source = reelsFeature ?? '';
      const m = source.match(/(\d+)\s*reels?/i);
      return m ? m[1] : '-';
    }

    if (row === 'graphics') {
      const source = graphicsFeature ?? reelsFeature ?? '';
      const m = source.match(/(\d+)\s*graphics?/i);
      return m ? m[1] : '-';
    }

    if (row === 'strategy') return strategyFeature ? '✓' : '-';
    if (row === 'planning') return planningFeature || strategyFeature ? '✓' : '-';

    const shootsMatch = shootsFeature?.match(/(\d+)\s*shoot/i);
    if (shootsMatch) {
      const days = shootsMatch[1];
      return `${days} day${days === '1' ? '' : 's'}`;
    }
    return '-';
  };

  const getPlatformsFromFeature = (platformFeature?: string) => {
    if (!platformFeature) return [] as PlatformId[];
    const lower = platformFeature.toLowerCase();
    return PLATFORM_KEYS.filter((p) => p.aliases.some((alias) => lower.includes(alias))).map(
      (p) => p.id
    );
  };

  const renderPlatformCell = (pkg: Service['packages'][number]) => {
    const platformFeature = getFeatureText(pkg, /platform/i);
    const platformIds = getPlatformsFromFeature(platformFeature);

    if (!platformIds.length) {
      return <span>-</span>;
    }

    return (
      <div className="flex items-center justify-center gap-1.5 flex-wrap">
        {platformIds.map((id) => (
          <PlatformLogo key={`${pkg.name}-${id}`} id={id} />
        ))}
      </div>
    );
  };

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

  if (!service)
    return (
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
        <button className="close-btn" onClick={onClose} aria-label="Close service details">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="min-h-screen relative overflow-hidden" style={{ background: '#3E2F2B' }}>
          {service.id === 'social-media' && (
            <>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `url(${service.coverImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.38,
                  filter: 'blur(2px) saturate(1.05)',
                  transform: 'scale(1.03)',
                }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(62,47,43,0.58) 0%, rgba(62,47,43,0.72) 40%, rgba(62,47,43,0.82) 100%)',
                }}
              />
            </>
          )}

          {/* Hero Image */}
          <div className="relative z-10 h-[55vh] overflow-hidden">
            <AppImage
              src={service.coverImage}
              alt={service.coverAlt}
              fill
              priority
              className="w-full h-full object-cover"
              style={{ transform: 'scale(1.05)' }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(62,47,43,0.25) 0%, rgba(62,47,43,0.82) 100%)',
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="max-w-5xl mx-auto">
                <span
                  className="text-echelon-gold text-xs font-bold tracking-widest mb-3 block"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {service.tag} / SERVICE
                </span>
                <h2
                  className="font-display text-white mb-3"
                  style={{
                    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {service.title}
                </h2>
                <p
                  className="text-white/70 text-lg max-w-xl"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 py-16">
            {/* Image Gallery */}
            <div className="mb-16">
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
            <div className="relative overflow-hidden rounded-2xl px-3 py-4 md:px-4 md:py-5">
              <div
                className="pointer-events-none absolute -top-24 -left-20 w-64 h-64 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(214,195,163,0.16) 0%, transparent 72%)' }}
              />
              <div
                className="pointer-events-none absolute -bottom-28 -right-20 w-72 h-72 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(122,92,77,0.22) 0%, transparent 72%)' }}
              />

              <div
                className="section-label section-label--no-prefix justify-center mb-8 text-center"
                style={{
                  color: '#D6C3A3',
                  fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
                  letterSpacing: '0.16em',
                  width: '100%',
                }}
              >
                Choose Your Package
              </div>
              {service.id === 'social-media' ? (
                <div className="relative z-10 rounded-2xl border border-white/20 bg-[#3A2D29] overflow-x-auto">
                  <table className="w-full table-fixed min-w-0 md:min-w-[760px] border-collapse">
                    <thead>
                      <tr className="border-b border-white/20 bg-[#463630]">
                        <th
                          className="text-left px-2 md:px-5 py-3 md:py-4 text-[10px] md:text-xs uppercase tracking-[0.12em] md:tracking-[0.16em] text-[#F5EFE7]"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          Features
                        </th>
                        {service.packages.slice(0, 3).map((pkg, i) => {
                          const label = ['Basic', 'Growth', 'Premium'][i] ?? pkg.name;
                          return (
                            <th key={pkg.name} className="px-1.5 md:px-5 py-3 md:py-4 text-center align-top">
                              <div className="text-[11px] md:text-sm font-semibold text-[#F5EFE7]" style={{ fontFamily: 'var(--font-body)' }}>
                                {label}
                              </div>
                              <div className="text-[10px] md:text-xs text-[#E0C9A0] mt-1" style={{ fontFamily: 'var(--font-body)' }}>
                                {pkg.price}
                              </div>
                            </th>
                          );
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { key: 'platforms', label: 'Platforms Managed' },
                        { key: 'posts', label: 'Posts per Month' },
                        { key: 'reels', label: 'Reels' },
                        { key: 'graphics', label: 'Graphic Posts' },
                        { key: 'strategy', label: 'Content Strategy' },
                        { key: 'planning', label: 'Content Planning' },
                        { key: 'shoots', label: 'Shoots per Month' },
                      ].map((row) => (
                        <tr key={row.key} className="border-b border-white/15 last:border-b-0 odd:bg-[#3E2F2B] even:bg-[#43332E]">
                          <td
                            className="px-2 md:px-5 py-3 md:py-4 text-[11px] md:text-sm font-medium text-[#F5EFE7]"
                            style={{ fontFamily: 'var(--font-body)' }}
                          >
                            {row.label}
                          </td>
                          {service.packages.slice(0, 3).map((pkg) => (
                            <td
                              key={`${pkg.name}-${row.key}`}
                              className="px-1.5 md:px-5 py-3 md:py-4 text-[11px] md:text-sm text-center text-[#F5EFE7]"
                              style={{ fontFamily: 'var(--font-body)' }}
                            >
                              {row.key === 'platforms'
                                ? renderPlatformCell(pkg)
                                : getComparisonValue(pkg, row.key as Parameters<typeof getComparisonValue>[1])}
                            </td>
                          ))}
                        </tr>
                      ))}
                      <tr>
                        <td className="px-2 md:px-5 py-4 md:py-5" />
                        {service.packages.slice(0, 3).map((pkg) => (
                          <td key={`${pkg.name}-cta`} className="px-1.5 md:px-5 py-4 md:py-5 text-center">
                            <a
                              href={`https://wa.me/919910706037?text=${encodeURIComponent(
                                `Hi Echelon Media, I want to get started with ${service.title} - ${pkg.name} (${pkg.price}).`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-full py-2 md:py-2.5 rounded-lg md:rounded-xl text-[11px] md:text-sm font-semibold transition-all duration-300"
                              style={{
                                fontFamily: 'var(--font-body)',
                                background: pkg.featured ? '#7A5C4D' : 'rgba(245,239,231,0.08)',
                                color: pkg.featured ? '#F5EFE7' : 'white',
                                border: '1px solid',
                                borderColor: pkg.featured ? '#7A5C4D' : 'rgba(245,239,231,0.14)',
                              }}
                            >
                              Get Started
                            </a>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {service.packages.map((pkg, i) => (
                    <div key={i} className={`package-card p-6 ${pkg.featured ? 'featured' : ''}`}>
                      {pkg.featured && (
                        <div
                          className="text-xs font-bold mb-4 inline-block px-3 py-1 rounded-full"
                          style={{
                            background: 'rgba(214,195,163,0.18)',
                            color: '#D6C3A3',
                            letterSpacing: '0.1em',
                            fontFamily: 'var(--font-body)',
                          }}
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
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {pkg.price}
                      </div>
                      <ul className="space-y-2">
                        {pkg.features.map((f, fi) => (
                          <li
                            key={fi}
                            className="flex items-start gap-2 text-sm text-white/70"
                            style={{ fontFamily: 'var(--font-body)' }}
                          >
                            <svg
                              className="flex-shrink-0 mt-0.5"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#D6C3A3"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={`https://wa.me/919910706037?text=${encodeURIComponent(
                          `Hi Echelon Media, I want to get started with ${service.title} - ${pkg.name} (${pkg.price}).`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'var(--font-body)',
                          background: pkg.featured ? '#7A5C4D' : 'rgba(245,239,231,0.08)',
                          color: pkg.featured ? '#F5EFE7' : 'white',
                          border: '1px solid',
                          borderColor: pkg.featured ? '#7A5C4D' : 'rgba(245,239,231,0.14)',
                        }}
                      >
                        Get Started
                      </a>
                    </div>
                  ))}
                </div>
              )}

              {service.id === 'social-media' && (
                <div className="relative z-10 mt-14 md:mt-16">
                  <HowSystemWorksSection variant="overlay" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

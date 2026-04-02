'use client';

import AppImage from '@/components/ui/AppImage';

export interface AgencyService {
  id: string;
  title: string;
  summary: string;
  visual: string;
  visualAlt: string;
  details: string;
  gallery: { src: string; alt: string }[];
  packages: {
    name: 'Starter' | 'Growth' | 'Premium';
    points: string[];
    featured?: boolean;
  }[];
}

interface ServiceModalProps {
  service: AgencyService | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) {
    return (
      <>
        <div className="fullscreen-modal-backdrop" />
        <div className="fullscreen-modal" />
      </>
    );
  }

  return (
    <>
      <div className="fullscreen-modal-backdrop open" onClick={onClose} />
      <div
        className="fullscreen-modal open"
        role="dialog"
        aria-modal="true"
        aria-label={`${service.title} details`}
      >
        <button
          onClick={onClose}
          aria-label="Close service details"
          className="premium-btn"
          style={{ position: 'sticky', top: '1rem', left: 'calc(100% - 5.2rem)', zIndex: 5 }}
        >
          Close
        </button>

        <div style={{ padding: '1.1rem 1.1rem 2rem' }}>
          <div
            style={{
              borderRadius: '22px',
              overflow: 'hidden',
              position: 'relative',
              minHeight: '320px',
            }}
          >
            <AppImage src={service.visual} alt={service.visualAlt} fill />
            <div className="surface-scrim" />
            <div
              style={{
                position: 'absolute',
                left: '1rem',
                right: '1rem',
                bottom: '1rem',
                zIndex: 2,
              }}
            >
              <h2
                style={{
                  color: '#F5EFE7',
                  fontSize: 'clamp(2rem, 5vw, 3.4rem)',
                  marginBottom: '0.5rem',
                }}
              >
                {service.title}
              </h2>
              <p style={{ color: 'rgba(245, 239, 231, 0.9)', maxWidth: '620px' }}>
                {service.details}
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '0.9rem',
              marginTop: '1rem',
            }}
          >
            {service.gallery.map((image) => (
              <div
                key={image.src}
                style={{ borderRadius: '16px', overflow: 'hidden', minHeight: '220px' }}
              >
                <AppImage src={image.src} alt={image.alt} fill />
              </div>
            ))}
          </div>

          <div style={{ marginTop: '1.1rem' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '0.8rem' }}>Packages</h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: '0.75rem',
              }}
            >
              {service.packages.map((pkg) => (
                <article
                  key={pkg.name}
                  className={`package-card ${pkg.featured ? 'featured' : ''}`}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.55rem',
                    }}
                  >
                    <h4 style={{ fontSize: '1.3rem' }}>{pkg.name}</h4>
                    {pkg.featured ? (
                      <span
                        style={{
                          borderRadius: '999px',
                          background: 'rgba(190, 165, 130, 0.4)',
                          padding: '0.18rem 0.65rem',
                          fontSize: '0.73rem',
                          fontWeight: 600,
                        }}
                      >
                        Recommended
                      </span>
                    ) : null}
                  </div>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: '1rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      fontSize: '0.92rem',
                    }}
                  >
                    {pkg.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

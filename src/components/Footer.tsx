'use client';

import React, { useEffect, useState } from 'react';
import AppLogo from '@/components/ui/AppLogo';

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/echelonmedia__/?hl=en', external: true, icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/echelon-mediaa/posts/?feedView=all', external: true, icon: 'linkedin' },
  { label: 'Mail', href: 'mailto:echelonmedia17@gmail.com', external: false, icon: 'mail' },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919910706037?text=Hi%20Echelon%20Media%2C%20I%20want%20to%20discuss%20a%20project.',
    external: true,
    icon: 'whatsapp',
  },
] as const;

function SocialIcon({ icon }: { icon: (typeof SOCIAL_LINKS)[number]['icon'] }) {
  if (icon === 'instagram') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#E1306C" />
        <path d="M16 11.37a4 4 0 1 1-7.9 1.18 4 4 0 0 1 7.9-1.18z" stroke="#FCAF45" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#833AB4" />
      </svg>
    );
  }
  if (icon === 'linkedin') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.96 1.96 0 1 0 5.3 6.92 1.96 1.96 0 0 0 5.25 3zM20.44 13.36c0-3.23-1.72-4.73-4.02-4.73-1.85 0-2.68 1.02-3.14 1.74V8.5H9.9V20h3.38v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.86 1.71 1.86 3.05V20h3.37v-6.64z"/>
      </svg>
    );
  }
  if (icon === 'mail') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16v16H4z" stroke="#EA4335" />
        <path d="m22 6-10 7L2 6" stroke="#FBBC05" />
      </svg>
    );
  }
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
      <path d="M19.05 4.91A10 10 0 0 0 3 17.04L2 22l5.1-1.34A10 10 0 1 0 19.05 4.9Zm-7.06 15.2a8.3 8.3 0 0 1-4.22-1.15l-.3-.18-3.03.8.8-2.95-.2-.3a8.31 8.31 0 1 1 6.95 3.78Zm4.56-6.2c-.25-.12-1.48-.73-1.71-.8-.23-.08-.4-.12-.57.12-.17.25-.66.8-.81.97-.15.17-.3.19-.55.06-.25-.12-1.07-.4-2.03-1.28-.75-.67-1.25-1.5-1.4-1.76-.15-.25-.02-.38.1-.5.11-.1.25-.25.38-.38.12-.12.17-.21.25-.35.08-.15.04-.28-.02-.4-.06-.12-.57-1.38-.78-1.9-.2-.48-.4-.42-.57-.43h-.49c-.17 0-.44.06-.67.3-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.6c.12.17 1.77 2.7 4.28 3.8.6.26 1.06.41 1.43.52.6.19 1.14.16 1.57.1.48-.07 1.48-.61 1.69-1.2.21-.6.21-1.11.15-1.2-.06-.1-.23-.16-.48-.28Z"/>
    </svg>
  );
}

export default function FooterSection() {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date()?.getFullYear()?.toString());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#1A1A1A', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Top CTA Band */}
      <div
        className="py-20 md:py-28 px-6 md:px-10 text-center relative"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        {/* Atmospheric glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 100%, rgba(200,169,110,0.12) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10">
          <div className="section-label justify-center mb-6" style={{ color: '#C8A96E' }}>
            Let's Create Together
          </div>
          <h2
            className="font-display text-white mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.04em' }}
          >
            Ready to elevate<br />
            <span style={{ fontStyle: 'italic', color: '#C8A96E' }}>your brand?</span>
          </h2>
          <p className="text-white/50 max-w-sm mx-auto mb-8 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            From strategy to execution we handle the digital. You focus on the vision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:echelonmedia17@gmail.com"
              className="btn-primary"
              style={{ background: '#C8A96E', color: '#1A1A1A' }}
            >
              Start a Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href="mailto:echelonmedia17@gmail.com"
              className="text-white/50 text-sm hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              echelonmedia17@gmail.com
            </a>
          </div>
        </div>
      </div>
      {/* Footer Bottom Bar — Pattern 7: Arc Browser Split */}
      <div className="py-8 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Logo + tagline */}
          <div className="flex items-center gap-3">
            <AppLogo size={28} />
            <div>
              <span
                className="font-display text-white font-bold block"
                style={{ fontSize: '0.95rem', letterSpacing: '-0.02em' }}
              >
                ECHELON MEDIA
              </span>
              <span className="text-white/30 text-xs" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Creative Digital Agency
              </span>
            </div>
          </div>

          {/* Center: Nav Links */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {['Services', 'Portfolio', 'Careers']?.map((link) => (
              <a
                key={link}
                href={`#${link?.toLowerCase()}`}
                className="text-white/40 hover:text-white/80 transition-colors duration-200 text-sm font-medium"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {link}
              </a>
            ))}
            <span className="text-white/15">·</span>
            <a
              href="#"
              className="text-white/40 hover:text-white/80 transition-colors duration-200 text-sm"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-white/80 transition-colors duration-200 text-sm"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Terms
            </a>
          </div>

          {/* Right: Back to top + copyright */}
          <div className="flex items-center gap-4">
            <span className="text-white/25 text-xs" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              {year ? `© ${year}` : '©'} Echelon Media
            </span>
            <button
              onClick={scrollToTop}
              className="footer-loop-btn text-xs"
              aria-label="Back to top"
              style={{ padding: '0.6rem 1.2rem', fontSize: '0.75rem' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
              Back to Top
            </button>
          </div>
        </div>

        <div
          className="max-w-7xl mx-auto mt-6 pt-5 flex flex-wrap items-center justify-center gap-2"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <span className="text-white/35 text-xs uppercase tracking-[0.2em] mr-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Connect
          </span>
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{
                color: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.02)',
              }}
              aria-label={item.label}
            >
              <SocialIcon icon={item.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
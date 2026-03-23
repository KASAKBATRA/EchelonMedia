'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppLogo from '@/components/ui/AppLogo';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Careers', href: '#careers' },
];

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/echelonmedia__/?hl=en', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/echelon-mediaa/posts/?feedView=all', icon: 'linkedin' },
  { label: 'Mail', href: 'mailto:echelonmedia17@gmail.com', icon: 'mail' },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919910706037?text=Hi%20Echelon%20Media%2C%20I%20want%20to%20discuss%20a%20project.',
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

export default function NavBar() {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const handleScroll = () => {
      if (window.scrollY > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav ref={navRef} className="nav-bar" aria-label="Main navigation">
      {/* Logo */}
      <a
        href="#hero"
        onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
        className="flex items-center gap-2.5 z-10"
        aria-label="Echelon Media — Go to top"
      >
        <AppLogo size={32} />
        <span
          className="font-display text-echelon-black"
          style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-0.03em' }}
        >
          ECHELON
        </span>
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <button
            key={link.label}
            onClick={() => handleNavClick(link.href)}
            className="text-sm font-medium text-echelon-muted hover:text-echelon-black transition-colors duration-200"
            style={{ fontFamily: 'DM Sans, sans-serif', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {link.label}
          </button>
        ))}
        <div className="hidden lg:flex items-center gap-2">
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="w-8 h-8 rounded-full flex items-center justify-center border border-black/10 text-echelon-muted hover:text-echelon-black hover:border-black/25 transition-colors duration-200"
              aria-label={item.label}
            >
              <SocialIcon icon={item.icon} />
            </a>
          ))}
        </div>
        <button
          onClick={() => handleNavClick('#careers')}
          className="btn-primary py-2.5 px-5 text-sm"
          style={{ padding: '0.625rem 1.25rem', fontSize: '0.85rem' }}
        >
          Work With Us
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-10"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span
          className="block h-0.5 bg-echelon-black transition-all duration-300"
          style={{ width: menuOpen ? '20px' : '22px', transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none' }}
        />
        <span
          className="block h-0.5 bg-echelon-black transition-all duration-300"
          style={{ width: '16px', opacity: menuOpen ? 0 : 1 }}
        />
        <span
          className="block h-0.5 bg-echelon-black transition-all duration-300"
          style={{ width: menuOpen ? '20px' : '22px', transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }}
        />
      </button>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: 'rgba(245,240,232,0.97)', backdropFilter: 'blur(12px)' }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="font-display text-echelon-black text-4xl font-bold hover:text-echelon-gold transition-colors duration-200"
              style={{ background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '-0.03em' }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#careers')}
            className="btn-primary mt-4"
          >
            Work With Us
          </button>
          <div className="mt-2 flex items-center gap-3">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-black/15 text-echelon-black/75 hover:text-echelon-black hover:border-black/30 transition-colors duration-200"
                aria-label={item.label}
              >
                <SocialIcon icon={item.icon} />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
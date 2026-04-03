'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppLogo from '@/components/ui/AppLogo';

const NAV_LINKS = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Join Now', href: '#careers' },
];

const SERVICE_LINKS = [
  { label: 'Social Media Marketing', id: 'social-media' },
  { label: 'Event Coverage', id: 'event-coverage' },
  { label: 'Branding', id: 'branding' },
  { label: 'Advertisement', id: 'advertisement' },
  { label: 'Website Development', id: 'website-dev' },
  { label: 'Wedding Diaries', id: 'wedding-diaries' },
];

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/echelonmedia__/?hl=en',
    icon: 'instagram',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/echelon-mediaa/posts/?feedView=all',
    icon: 'linkedin',
  },
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
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#E1306C" />
        <path d="M16 11.37a4 4 0 1 1-7.9 1.18 4 4 0 0 1 7.9-1.18z" stroke="#FCAF45" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#833AB4" />
      </svg>
    );
  }
  if (icon === 'linkedin') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.96 1.96 0 1 0 5.3 6.92 1.96 1.96 0 0 0 5.25 3zM20.44 13.36c0-3.23-1.72-4.73-4.02-4.73-1.85 0-2.68 1.02-3.14 1.74V8.5H9.9V20h3.38v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.86 1.71 1.86 3.05V20h3.37v-6.64z" />
      </svg>
    );
  }
  if (icon === 'mail') {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 4h16v16H4z" stroke="#EA4335" />
        <path d="m22 6-10 7L2 6" stroke="#FBBC05" />
      </svg>
    );
  }
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
      <path d="M19.05 4.91A10 10 0 0 0 3 17.04L2 22l5.1-1.34A10 10 0 1 0 19.05 4.9Zm-7.06 15.2a8.3 8.3 0 0 1-4.22-1.15l-.3-.18-3.03.8.8-2.95-.2-.3a8.31 8.31 0 1 1 6.95 3.78Zm4.56-6.2c-.25-.12-1.48-.73-1.71-.8-.23-.08-.4-.12-.57.12-.17.25-.66.8-.81.97-.15.17-.3.19-.55.06-.25-.12-1.07-.4-2.03-1.28-.75-.67-1.25-1.5-1.4-1.76-.15-.25-.02-.38.1-.5.11-.1.25-.25.38-.38.12-.12.17-.21.25-.35.08-.15.04-.28-.02-.4-.06-.12-.57-1.38-.78-1.9-.2-.48-.4-.42-.57-.43h-.49c-.17 0-.44.06-.67.3-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.6c.12.17 1.77 2.7 4.28 3.8.6.26 1.06.41 1.43.52.6.19 1.14.16 1.57.1.48-.07 1.48-.61 1.69-1.2.21-.6.21-1.11.15-1.2-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  );
}

export default function NavBar() {
  const navRef = useRef<HTMLElement>(null);
  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const mobileServicesMenuRef = useRef<HTMLDivElement>(null);
  const contactMenuRef = useRef<HTMLDivElement>(null);
  const mobileContactMenuRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [contactMenuOpen, setContactMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => document.body.classList.remove('modal-open');
  }, [menuOpen]);

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

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedInsideDesktopServices = servicesMenuRef.current?.contains(target) ?? false;
      const clickedInsideMobileServices = mobileServicesMenuRef.current?.contains(target) ?? false;
      const clickedInsideDesktopContact = contactMenuRef.current?.contains(target) ?? false;
      const clickedInsideMobileContact = mobileContactMenuRef.current?.contains(target) ?? false;

      if (servicesMenuOpen && !clickedInsideDesktopServices && !clickedInsideMobileServices) {
        setServicesMenuOpen(false);
      }

      if (contactMenuOpen && !clickedInsideDesktopContact && !clickedInsideMobileContact) {
        setContactMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [servicesMenuOpen, contactMenuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setServicesMenuOpen(false);
    setContactMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isMounted) {
    return <nav ref={navRef} className="nav-bar" aria-label="Main navigation" />;
  }

  return (
    <nav
      ref={navRef}
      className="nav-bar"
      aria-label="Main navigation"
      style={
        menuOpen
          ? {
              backdropFilter: 'none',
              WebkitBackdropFilter: 'none',
            }
          : undefined
      }
    >
      {/* Logo */}
      <a
        href="#hero"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick('#hero');
        }}
        className="flex items-center gap-2 sm:gap-2.5 z-10 min-w-0"
        aria-label="Echelon Media — Go to top"
      >
        <AppLogo size={52} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
        <span
          className="font-display"
          style={{
            fontSize: 'clamp(1.08rem, 5.1vw, 1.4rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--color-primary)',
            whiteSpace: 'nowrap',
            lineHeight: 1,
          }}
        >
          Echelon Media
        </span>
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        <div ref={servicesMenuRef} className="relative">
          <button
            onClick={() => {
              setServicesMenuOpen(!servicesMenuOpen);
              setContactMenuOpen(false);
            }}
            className="font-bold hover:text-[#7A5C4D] transition-colors duration-200 flex items-center gap-2"
            style={{
              fontFamily: 'var(--font-body)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              color: 'var(--color-primary)',
            }}
            aria-haspopup="menu"
            aria-expanded={servicesMenuOpen}
          >
            Services
            <span
              style={{
                fontSize: '0.8rem',
                transform: servicesMenuOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s ease',
              }}
            >
              ▾
            </span>
          </button>

          {servicesMenuOpen && (
            <div
              className="absolute top-full mt-3 left-1/2 -translate-x-1/2 rounded-2xl shadow-2xl z-50 overflow-hidden"
              style={{
                minWidth: '280px',
                background: '#F8F2EA',
                border: '1px solid rgba(62,47,43,0.14)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {SERVICE_LINKS.map((service, index) => (
                <a
                  key={service.id}
                  href={`/homepage?service=${service.id}`}
                  onClick={() => {
                    setServicesMenuOpen(false);
                    setMenuOpen(false);
                  }}
                  className="block px-4 py-3 text-echelon-black hover:bg-[#EDE3D7] transition-colors duration-200"
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.94rem',
                    fontWeight: 500,
                    borderBottom:
                      index === SERVICE_LINKS.length - 1 ? 'none' : '1px solid rgba(62,47,43,0.08)',
                  }}
                >
                  {service.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {NAV_LINKS.map((link) => (
          <button
            key={link.label}
            onClick={() => handleNavClick(link.href)}
            className="font-bold hover:text-[#7A5C4D] transition-colors duration-200"
            style={{
              fontFamily: 'var(--font-body)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              color: 'var(--color-primary)',
            }}
          >
            {link.label}
          </button>
        ))}
        <div ref={contactMenuRef} className="relative">
          <button
            onClick={() => {
              setContactMenuOpen(!contactMenuOpen);
              setServicesMenuOpen(false);
            }}
            className="font-bold hover:text-[#7A5C4D] transition-colors duration-200"
            style={{
              fontFamily: 'var(--font-body)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              color: 'var(--color-primary)',
            }}
          >
            Contact Us
          </button>
          {contactMenuOpen && (
            <div
              className="absolute top-full mt-3 right-0 rounded-2xl shadow-2xl z-50 overflow-hidden"
              style={{
                minWidth: '180px',
                background: '#F8F2EA',
                border: '1px solid rgba(62,47,43,0.14)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <a
                href="https://wa.me/919910706037?text=Hi%20Echelon%20Media%2C%20I%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setContactMenuOpen(false)}
                className="block px-4 py-3 text-echelon-black hover:bg-[#EDE3D7] transition-colors duration-200 border-b"
                style={{
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  borderColor: 'rgba(62,47,43,0.12)',
                }}
              >
                WhatsApp
              </a>
              <a
                href="mailto:echelonmedia17@gmail.com"
                onClick={() => setContactMenuOpen(false)}
                className="block px-4 py-3 text-echelon-black hover:bg-[#EDE3D7] transition-colors duration-200"
                style={{ textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}
              >
                Email
              </a>
            </div>
          )}
        </div>
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
          style={{
            width: menuOpen ? '20px' : '22px',
            transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none',
          }}
        />
        <span
          className="block h-0.5 bg-echelon-black transition-all duration-300"
          style={{ width: '16px', opacity: menuOpen ? 0 : 1 }}
        />
        <span
          className="block h-0.5 bg-echelon-black transition-all duration-300"
          style={{
            width: menuOpen ? '20px' : '22px',
            transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
          }}
        />
      </button>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div
          className="fixed inset-0 w-screen min-h-[100dvh] overflow-y-auto flex flex-col items-center justify-center gap-8"
          style={{
            zIndex: 700,
            background: 'rgba(245,239,231,0.97)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          <div ref={mobileServicesMenuRef} className="w-full max-w-sm px-6">
            <button
              onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
              className="w-full font-display text-echelon-black text-4xl font-bold hover:text-[#7A5C4D] transition-colors duration-200 flex items-center justify-center gap-3"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '-0.03em',
              }}
            >
              Services
              <span
                style={{
                  fontSize: '1rem',
                  transform: servicesMenuOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s ease',
                }}
              >
                ▾
              </span>
            </button>

            {servicesMenuOpen && (
              <div
                className="mt-4 rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(62,47,43,0.14)', background: '#F8F2EA' }}
              >
                {SERVICE_LINKS.map((service, index) => (
                  <a
                    key={service.id}
                    href={`/homepage?service=${service.id}`}
                    onClick={() => {
                      setServicesMenuOpen(false);
                      setMenuOpen(false);
                    }}
                    className="block px-4 py-3 text-center text-echelon-black hover:bg-[#EDE3D7] transition-colors duration-200"
                    style={{
                      textDecoration: 'none',
                      borderBottom:
                        index === SERVICE_LINKS.length - 1
                          ? 'none'
                          : '1px solid rgba(62,47,43,0.08)',
                    }}
                  >
                    {service.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="font-display text-echelon-black text-4xl font-bold hover:text-[#7A5C4D] transition-colors duration-200"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '-0.03em',
              }}
            >
              {link.label}
            </button>
          ))}
          <div ref={mobileContactMenuRef} className="flex flex-col items-center">
            <button
              onClick={() => {
                setContactMenuOpen(!contactMenuOpen);
                setServicesMenuOpen(false);
              }}
              className="font-display text-echelon-black text-4xl font-bold hover:text-[#7A5C4D] transition-colors duration-200"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '-0.03em',
              }}
            >
              Contact Us
            </button>
            {contactMenuOpen && (
              <div className="mt-6 flex flex-col gap-4">
                <a
                  href="https://wa.me/919910706037?text=Hi%20Echelon%20Media%2C%20I%20want%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setContactMenuOpen(false)}
                  className="text-center px-6 py-3 bg-echelon-black text-white rounded-lg hover:opacity-90 transition-opacity duration-200 font-bold"
                  style={{ textDecoration: 'none' }}
                >
                  WhatsApp
                </a>
                <a
                  href="mailto:echelonmedia17@gmail.com"
                  onClick={() => setContactMenuOpen(false)}
                  className="text-center px-6 py-3 bg-echelon-black text-white rounded-lg hover:opacity-90 transition-opacity duration-200 font-bold"
                  style={{ textDecoration: 'none' }}
                >
                  Email
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

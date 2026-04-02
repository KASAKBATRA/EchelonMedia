'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function IntroOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef?.current;
    const logo = logoRef?.current;
    if (!overlay || !logo) return;

    document.body.style.overflow = 'hidden';

    const t1 = setTimeout(() => {
      logo?.classList?.add('visible');
    }, 200);

    const t2 = setTimeout(() => {
      overlay?.classList?.add('fade-out');
      document.body.style.overflow = '';
    }, 2000);

    const t3 = setTimeout(() => {
      if (overlay?.parentNode) {
        overlay.style.display = 'none';
      }
    }, 2900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div id="intro-overlay" ref={overlayRef}>
      <div ref={logoRef} className="intro-logo relative flex flex-col items-center gap-4">
        {/* 3D depth rings */}
        <div className="intro-ring intro-ring-1" />
        <div className="intro-ring intro-ring-2" />
        <div className="intro-ring intro-ring-3" />
        <div className="intro-logo-glow" />
        <div className="relative z-10 flex flex-col items-center gap-3">
          {/* Owl Logo Image */}
          <div className="intro-owl-wrap">
            <AppImage
              src="/assets/image/logo.png"
              alt="Echelon Media owl logo"
              width={96}
              height={96}
              className="intro-owl-img"
              priority
            />
          </div>
          {/* Wordmark */}
          <div className="flex flex-col items-center gap-1">
            <span
              className="font-display"
              style={{
                fontSize: '2.8rem',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1,
                color: '#F5EFE7',
              }}
            >
              ECHELON
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.32em',
                color: '#D6C3A3',
                textTransform: 'uppercase',
              }}
            >
              MEDIA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

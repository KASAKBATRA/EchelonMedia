'use client';

import React, { useEffect, useRef, useCallback, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

interface ContentFrame {
  id: number;
  type: 'social' | 'reel' | 'branding' | 'mockup' | 'analytics';
  src: string;
  alt: string;
  layer: 'foreground' | 'mid' | 'background';
  x: number;
  y: number;
  rotation: number;
  scale: number;
  animClass: string;
  label?: string;
  sublabel?: string;
}

const contentFrames: ContentFrame[] = [
  // FOREGROUND - sharp, prominent
  {
    id: 1,
    type: 'social',
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1d00d94cd-1773102560002.png',
    alt: 'Social media campaign post with vibrant creative visuals',
    layer: 'foreground',
    x: 3,
    y: 12,
    rotation: -5,
    scale: 1,
    animClass: 'cs-drift-a',
    label: '@echelonmedia',
    sublabel: '❤️ 4.2k  💬 318',
  },
  {
    id: 2,
    type: 'reel',
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1339fdb1c-1772744539617.png',
    alt: 'Instagram reel frame showing behind-the-scenes brand shoot',
    layer: 'foreground',
    x: 78,
    y: 8,
    rotation: 4,
    scale: 1,
    animClass: 'cs-drift-b',
    label: 'Reel · 2.1M views',
    sublabel: '▶ Play',
  },
  {
    id: 3,
    type: 'branding',
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c9b8227c-1774182636193.png',
    alt: 'Brand identity design showcase with logo and color palette',
    layer: 'foreground',
    x: 6,
    y: 58,
    rotation: 3,
    scale: 1,
    animClass: 'cs-drift-c',
    label: 'Brand Launch',
    sublabel: 'Campaign live ✓',
  },
  {
    id: 4,
    type: 'mockup',
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_135a5c963-1764669618326.png',
    alt: 'Website mockup design for a modern e-commerce client',
    layer: 'foreground',
    x: 74,
    y: 55,
    rotation: -4,
    scale: 1,
    animClass: 'cs-drift-d',
    label: 'Web Design',
    sublabel: 'Live & converting',
  },
  // MID LAYER
  {
    id: 5,
    type: 'social',
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_166163958-1772109763035.png',
    alt: 'Facebook ad creative with product photography',
    layer: 'mid',
    x: 28,
    y: 5,
    rotation: 6,
    scale: 0.88,
    animClass: 'cs-drift-e',
    label: 'FB Ad · 89K reach',
  },
  {
    id: 6,
    type: 'reel',
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_159211668-1772197669963.png',
    alt: 'Short-form video content reel for product promotion',
    layer: 'mid',
    x: 58,
    y: 3,
    rotation: -7,
    scale: 0.85,
    animClass: 'cs-drift-f',
    label: 'Reel · 890K views',
  },
  {
    id: 7,
    type: 'analytics',
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b1dba0d0-1772126100646.png',
    alt: 'Analytics dashboard showing campaign performance metrics',
    layer: 'mid',
    x: 20,
    y: 68,
    rotation: -3,
    scale: 0.9,
    animClass: 'cs-drift-g',
    label: 'Analytics · +34%',
  },
  {
    id: 8,
    type: 'branding',
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1db802c84-1774182635290.png',
    alt: 'Branding visual with typography and color system for luxury brand',
    layer: 'mid',
    x: 64,
    y: 70,
    rotation: 5,
    scale: 0.87,
    animClass: 'cs-drift-h',
    label: 'Branding · Luxury',
  },
  {
    id: 9,
    type: 'mockup',
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f92cd1ce-1770202416323.png',
    alt: 'Mobile app UI mockup for a food delivery startup',
    layer: 'mid',
    x: 43,
    y: 72,
    rotation: -2,
    scale: 0.82,
    animClass: 'cs-drift-a',
    label: 'App UI · Delivered',
  },
  // BACKGROUND - blurred, large
  {
    id: 10,
    type: 'social',
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1985c5b19-1772107701060.png',
    alt: 'Large social media content block in background',
    layer: 'background',
    x: -4,
    y: 30,
    rotation: 8,
    scale: 1.3,
    animClass: 'cs-drift-b',
  },
  {
    id: 11,
    type: 'branding',
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1356f1239-1774182634242.png',
    alt: 'Large branding visual in background layer',
    layer: 'background',
    x: 82,
    y: 28,
    rotation: -9,
    scale: 1.25,
    animClass: 'cs-drift-c',
  },
  {
    id: 12,
    type: 'reel',
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c261a6e6-1774182632059.png',
    alt: 'Large reel frame in background depth layer',
    layer: 'background',
    x: 38,
    y: -5,
    rotation: 3,
    scale: 1.4,
    animClass: 'cs-drift-d',
  },
  {
    id: 13,
    type: 'mockup',
    src: 'https://images.unsplash.com/photo-1652461452537-af7e5be38b72',
    alt: 'Large website mockup in background layer',
    layer: 'background',
    x: 15,
    y: 82,
    rotation: -6,
    scale: 1.2,
    animClass: 'cs-drift-e',
  },
  {
    id: 14,
    type: 'social',
    src: 'https://images.unsplash.com/photo-1665470909892-324bd77a5576',
    alt: 'Background social media post visual',
    layer: 'background',
    x: 60,
    y: 85,
    rotation: 7,
    scale: 1.35,
    animClass: 'cs-drift-f',
  },
];

const layerConfig = {
  foreground: { blur: 0, opacity: 1, zIndex: 6, shadowClass: 'cs-shadow-fg' },
  mid: { blur: 1, opacity: 0.82, zIndex: 4, shadowClass: 'cs-shadow-mid' },
  background: { blur: 8, opacity: 0.45, zIndex: 2, shadowClass: 'cs-shadow-bg' },
};

const frameSize = {
  foreground: { w: 200, h: 240 },
  mid: { w: 170, h: 200 },
  background: { w: 260, h: 300 },
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleScroll = useCallback(() => {
    const sy = window.scrollY;
    setScrolled(sy > 80);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #F5F0E8 0%, #EDE8DF 40%, #F0EBE0 100%)' }}
    >
      {/* ── CONTENT STREAM BACKGROUND ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        {contentFrames.map((frame) => {
          const cfg = layerConfig[frame.layer];
          const sz = frameSize[frame.layer];
          const isHovered = hoveredId === frame.id;
          const isFg = frame.layer === 'foreground';

          return (
            <div
              key={frame.id}
              className={`cs-frame ${frame.animClass} ${scrolled ? 'cs-scrolled' : ''} ${cfg.shadowClass}`}
              style={{
                position: 'absolute',
                left: `${frame.x}%`,
                top: `${frame.y}%`,
                width: sz.w,
                zIndex: cfg.zIndex,
                opacity: cfg.opacity,
                filter: cfg.blur > 0 ? `blur(${cfg.blur}px)` : undefined,
                transform: `rotate(${frame.rotation}deg) scale(${isHovered ? frame.scale * 1.07 : frame.scale})`,
                transition:
                  'transform 0.4s cubic-bezier(0.25,1,0.5,1), box-shadow 0.4s ease, filter 0.4s ease',
                pointerEvents: isFg ? 'auto' : 'none',
                cursor: isFg ? 'pointer' : 'default',
                boxShadow: isHovered
                  ? '0 20px 60px rgba(200,169,110,0.35), 0 0 0 2px rgba(200,169,110,0.4)'
                  : undefined,
              }}
              onMouseEnter={() => isFg && setHoveredId(frame.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Frame image */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  width: sz.w,
                  height: sz.h,
                  position: 'relative',
                  background: '#e8e0d4',
                }}
              >
                <AppImage
                  src={frame.src}
                  alt={frame.alt}
                  width={sz.w}
                  height={sz.h}
                  className="w-full h-full object-cover"
                  style={{
                    transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                    transition: 'transform 0.5s cubic-bezier(0.25,1,0.5,1)',
                  }}
                />

                {/* Warm tone overlay */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background:
                      'linear-gradient(160deg, rgba(200,169,110,0.12) 0%, rgba(245,240,232,0.08) 100%)',
                    mixBlendMode: 'multiply',
                  }}
                />

                {/* Type badge */}
                {frame.layer !== 'background' && (
                  <div
                    className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-semibold"
                    style={{
                      background: 'rgba(62,47,43,0.72)',
                      color: '#D6C3A3',
                      fontFamily: 'var(--font-body)',
                      letterSpacing: '0.06em',
                      backdropFilter: 'blur(6px)',
                    }}
                  >
                    {frame.type === 'social'
                      ? '📱 Social'
                      : frame.type === 'reel'
                        ? '🎬 Reel'
                        : frame.type === 'branding'
                          ? '✦ Brand'
                          : frame.type === 'analytics'
                            ? '📊 Data'
                            : '🖥 Web'}
                  </div>
                )}
              </div>

              {/* Label strip */}
              {frame.label && frame.layer !== 'background' && (
                <div
                  className="mt-1.5 px-3 py-1.5 rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.82)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(214,195,163,0.2)',
                  }}
                >
                  <div
                    className="text-xs font-semibold text-echelon-black"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {frame.label}
                  </div>
                  {frame.sublabel && (
                    <div
                      className="text-xs text-echelon-muted"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {frame.sublabel}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── WARM BEIGE OVERLAY ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 7,
          background:
            'linear-gradient(160deg, rgba(245,240,232,0.72) 0%, rgba(237,232,223,0.65) 50%, rgba(240,235,224,0.72) 100%)',
        }}
      />

      {/* ── CENTER VIGNETTE (clears hero text area) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 8,
          background:
            'radial-gradient(ellipse 55% 60% at 50% 50%, rgba(245,240,232,0.88) 0%, rgba(245,240,232,0.55) 55%, transparent 100%)',
        }}
      />

      {/* ── HERO CONTENT ── */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-20"
        style={{ zIndex: 10 }}
      >
        <div className="text-center max-w-5xl mx-auto">
          <div className="section-label justify-center mb-8">Media and Marketing Company</div>
          <h1 className="hero-headline mb-6">
            We craft
            <br />
            <span
              className="italic-word"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontStyle: 'normal',
                fontSize: '1.15em',
                letterSpacing: '0.01em',
                fontWeight: 700,
              }}
            >
              stories
            </span>{' '}
            that
            <br />
            resonates.
          </h1>
          <p
            className="text-echelon-muted max-w-lg mx-auto mb-10 leading-relaxed whitespace-nowrap"
            style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', fontWeight: 400 }}
          >
            If you want your audience to be your customer then you are on right place
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#portfolio" className="btn-primary">
              Explore Our Work
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div
            className="w-5 h-8 border-2 rounded-full flex items-start justify-center pt-1.5"
            style={{ borderColor: 'rgba(62,47,43,0.3)' }}
          >
            <div
              className="w-1 h-2 rounded-full bg-echelon-black"
              style={{ animation: 'floatA 1.5s ease-in-out infinite' }}
            />
          </div>
          <span
            className="text-xs font-medium text-echelon-muted"
            style={{ letterSpacing: '0.15em', fontFamily: 'var(--font-body)' }}
          >
            SCROLL
          </span>
        </div>
      </div>

      {/* ── TICKER ── */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-echelon-black/5 bg-echelon-black/4 py-3"
        style={{ zIndex: 10 }}
      >
        <div className="ticker-inner">
          {[...Array(2)].map((_, di) => (
            <div key={di} className="flex items-center gap-12 px-8 flex-shrink-0">
              {[
                'Social Media Marketing',
                'Event Coverage',
                'Branding',
                'Advertisments',
                'Website Development',
                'Wedding Diaries',
                'Content Creation',
                'Digital Strategy',
              ].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-echelon-muted"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <span className="w-1 h-1 rounded-full bg-echelon-gold flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

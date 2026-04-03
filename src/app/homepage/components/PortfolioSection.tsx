'use client';

import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  gallery?: string[];
  exploreUrl?: string;
  alt: string;
  span?: 'wide' | 'tall' | 'normal';
  year: string;
  client: string;
  description: string;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Luminary Brand Launch',
    category: 'Branding & Ads',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_12bcd7a0a-1774180571148.png',
    alt: 'Luminary brand identity launch campaign visual',
    span: 'wide',
    year: '2025',
    client: 'Luminary Co.',
    description:
      'Full brand identity system, launch campaign across Meta & Google, and 3x ROI in 60 days.',
    tags: ['Branding', 'Paid Ads', 'Social Media'],
  },
  {
    id: 'p2',
    title: 'LaVya Weddings',
    category: 'Wedding Diaries',
    image: '/assets/image/wedding/1%20(5).png',
    gallery: [
      '/assets/image/wedding/1%20(1).png',
      '/assets/image/wedding/1%20(2).png',
      '/assets/image/wedding/1%20(3).png',
      '/assets/image/wedding/1%20(4).png',
      '/assets/image/wedding/1%20(6).png',
    ],
    exploreUrl: 'https://www.instagram.com/lavya___006/?hl=en',
    alt: 'LaVya Weddings cinematic photography and film',
    span: 'tall',
    year: '2025',
    client: 'LaVya Weddings',
    description: 'A 3-day wedding with cinematic film coverage and 1,200+ edited photographs.',
    tags: ['Photography', 'Videography', 'Cinematic'],
  },
  {
    id: 'p3',
    title: 'Cultural Annual Fest by DAV UNITED',
    category: 'Cultural Event Coverage',
    image: '/assets/image/TechEvent/image.png',
    gallery: [
      '/assets/image/TechEvent/Screenshot%202026-03-22%20210249.png',
      '/assets/image/TechEvent/Screenshot%202026-03-22%20210323.png',
      '/assets/image/TechEvent/Screenshot%202026-03-22%20210622.png',
    ],
    alt: 'Cultural annual fest event visuals by DAV UNITED',
    span: 'normal',
    year: '2025',
    client: 'DAV UNITED',
    description: 'Work done: shooting and editing for the complete cultural annual fest coverage.',
    tags: ['Shooting', 'Editing'],
  },
  {
    id: 'p4',
    title: 'Zest Foods Social',
    category: 'Social Media Marketing',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1278f75e8-1773208857665.png',
    alt: 'Zest Foods social media marketing campaign',
    span: 'normal',
    year: '2024',
    client: 'Zest Foods',
    description: 'Grew Instagram from 4K to 180K followers in 8 months with content-led strategy.',
    tags: ['Social Media', 'Content', 'Growth'],
  },
  {
    id: 'p5',
    title: 'Vibe Studio Website',
    category: 'Website Development',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1379fa25b-1773541486134.png',
    alt: 'Vibe Studio custom website development project',
    span: 'wide',
    year: '2025',
    client: 'Vibe Studio',
    description:
      'Custom Next.js website with 98 Lighthouse score, integrated booking system, and 40% conversion uplift.',
    tags: ['Web Dev', 'UI/UX', 'SEO'],
  },
];

export default function PortfolioSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.08 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal-hidden');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const backdrop = backdropRef.current;
    const detail = detailRef.current;
    if (!backdrop || !detail) return;
    if (activeProject) {
      document.body.classList.add('modal-open');
      const t = setTimeout(() => {
        backdrop.classList.add('open');
        detail.classList.add('open');
      }, 10);
      return () => clearTimeout(t);
    } else {
      document.body.classList.remove('modal-open');
      backdrop.classList.remove('open');
      detail.classList.remove('open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [activeProject]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="portfolio"
        className="relative overflow-hidden py-24 md:py-32"
        style={{ background: '#3E2F2B' }}
      >
        {/* Atmospheric background layers */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute -top-24 -left-20 w-[460px] h-[460px] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(214,195,163,0.26) 0%, rgba(214,195,163,0.1) 38%, transparent 72%)',
              filter: 'blur(12px)',
            }}
          />
          <div
            className="absolute -bottom-28 -right-24 w-[520px] h-[520px] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(245,239,231,0.12) 0%, rgba(245,239,231,0.04) 42%, transparent 75%)',
              filter: 'blur(16px)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(rgba(214,195,163,0.22) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
              opacity: 0.2,
              maskImage: 'linear-gradient(to bottom, rgba(245,239,231,0.32), rgba(245,239,231,0.1))',
              WebkitMaskImage:
                'linear-gradient(to bottom, rgba(245,239,231,0.32), rgba(245,239,231,0.1))',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal-hidden">
            <div>
              <div className="section-label" style={{ color: '#D6C3A3' }}>
                Portfolio
              </div>
              <h2
                className="font-display text-[#F5EFE7]"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                }}
              >
                Work that
                <br />
                <span
                  style={{
                    fontFamily: 'var(--font-cursive)',
                    fontStyle: 'normal',
                    color: '#D6C3A3',
                    fontSize: '1.1em',
                    letterSpacing: '0.01em',
                  }}
                >
                  speaks.
                </span>
              </h2>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((project, i) => (
              <div
                key={project.id}
                className={`portfolio-block reveal-hidden stagger-child ${project.span === 'wide' ? 'md:col-span-2' : ''}`}
                style={{ height: 'clamp(320px, 52vw, 420px)' }}
                onClick={() => setActiveProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveProject(project)}
                aria-label={`View ${project.title} project details`}
              >
                <AppImage
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(62,47,43,0.9) 0%, rgba(62,47,43,0.2) 50%, transparent 100%)',
                  }}
                />

                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{
                          background: 'rgba(214,195,163,0.15)',
                          color: '#D6C3A3',
                          fontFamily: 'var(--font-body)',
                          fontWeight: 600,
                          letterSpacing: '0.05em',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3
                    className="font-display text-white font-bold mb-1"
                    style={{
                      fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.1,
                    }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                    {project.category} · {project.year}
                  </p>
                </div>
                {/* Hover Arrow */}
                <div
                  className="absolute top-5 right-5 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(122,92,77,0.08)' }}
                >
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
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <div
        ref={backdropRef}
        className="service-modal-backdrop"
        onClick={() => setActiveProject(null)}
      />
      <div ref={detailRef} className="service-modal">
        {activeProject && (
          <>
            <button
              className="close-btn"
              onClick={() => setActiveProject(null)}
              aria-label="Close project details"
            >
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
            <div style={{ background: '#F5EFE7', minHeight: '100vh' }}>
              {/* Hero */}
              <div className="relative h-[60vh] overflow-hidden">
                <AppImage
                  src={activeProject.image}
                  alt={activeProject.alt}
                  fill
                  priority
                  className="w-full h-full object-cover"
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to bottom, transparent 40%, rgba(245,239,231,1) 100%)',
                  }}
                />
              </div>
              {/* Content */}
              <div className="max-w-4xl mx-auto px-6 md:px-10 pb-20 -mt-20 relative z-10">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border"
                      style={{
                        background: 'rgba(214,195,163,0.1)',
                        borderColor: 'rgba(214,195,163,0.3)',
                        color: '#D6C3A3',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 600,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2
                  className="font-display text-echelon-black mb-4"
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  {activeProject.title}
                </h2>
                <p
                  className="text-echelon-muted text-lg leading-relaxed mb-8 max-w-xl"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {activeProject.description}
                </p>
                {activeProject.exploreUrl && (
                  <a
                    href={activeProject.exploreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
                    style={{
                      background: '#7A5C4D',
                      color: '#F5EFE7',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 600,
                      letterSpacing: '0.02em',
                    }}
                  >
                    Explore More
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                )}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <div
                      className="text-xs font-bold text-echelon-muted mb-1 uppercase tracking-widest"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Client
                    </div>
                    <div
                      className="font-semibold text-echelon-black"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {activeProject.client}
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-xs font-bold text-echelon-muted mb-1 uppercase tracking-widest"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Category
                    </div>
                    <div
                      className="font-semibold text-echelon-black"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {activeProject.category}
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-xs font-bold text-echelon-muted mb-1 uppercase tracking-widest"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Year
                    </div>
                    <div
                      className="font-semibold text-echelon-black"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {activeProject.year}
                    </div>
                  </div>
                </div>

                {activeProject.gallery && activeProject.gallery.length > 0 && (
                  <div className="mt-12">
                    <h3
                      className="font-display text-echelon-black mb-4"
                      style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      Wedding Highlights
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {activeProject.gallery.map((imgSrc, index) => (
                        <div
                          key={imgSrc}
                          className="relative overflow-hidden rounded-2xl"
                          style={{ aspectRatio: '4 / 5' }}
                        >
                          <AppImage
                            src={imgSrc}
                            alt={`${activeProject.title} photo ${index + 1}`}
                            fill
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

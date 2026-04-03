'use client';

import React, { useEffect, useRef } from 'react';

interface WorkStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tones: {
    cardBg: string;
    border: string;
    hoverBorder: string;
    iconBg: string;
    numberColor: string;
    accent: string;
  };
}

const STEPS: WorkStep[] = [
  {
    number: '01',
    title: 'Onboarding',
    description: 'We connect, understand requirements, and start the process.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8 12h8M12 8v8M4 6h16v12H4z"
          stroke="#3E2F2B"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    tones: {
      cardBg: 'linear-gradient(145deg, rgba(255,255,255,0.96), rgba(245,239,231,0.88))',
      border: 'rgba(62,47,43,0.1)',
      hoverBorder: 'rgba(122,92,77,0.35)',
      iconBg: 'rgba(214,195,163,0.34)',
      numberColor: '#7A5C4D',
      accent: '#D6C3A3',
    },
  },
  {
    number: '02',
    title: 'Understand the Brand',
    description: 'Deep research about your brand, audience, and goals.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="6" stroke="#3E2F2B" strokeWidth="1.8" />
        <path d="M20 20l-4-4" stroke="#3E2F2B" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    tones: {
      cardBg: 'linear-gradient(145deg, rgba(232,220,201,0.9), rgba(214,195,163,0.62))',
      border: 'rgba(122,92,77,0.2)',
      hoverBorder: 'rgba(122,92,77,0.5)',
      iconBg: 'rgba(245,239,231,0.58)',
      numberColor: '#5F463B',
      accent: '#7A5C4D',
    },
  },
  {
    number: '03',
    title: 'Design the Strategy',
    description: 'We create a custom plan tailored for your growth.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 19h14M7 16l2-6 3 3 3-7 2 10"
          stroke="#3E2F2B"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    tones: {
      cardBg: 'linear-gradient(145deg, rgba(245,239,231,0.93), rgba(237,227,215,0.86))',
      border: 'rgba(62,47,43,0.14)',
      hoverBorder: 'rgba(122,92,77,0.45)',
      iconBg: 'rgba(214,195,163,0.36)',
      numberColor: '#7A5C4D',
      accent: '#C9B392',
    },
  },
  {
    number: '04',
    title: 'Execution',
    description: 'We execute, optimize, and scale results.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 12l4 4L19 8"
          stroke="#3E2F2B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="9" stroke="#3E2F2B" strokeWidth="1.4" />
      </svg>
    ),
    tones: {
      cardBg: 'linear-gradient(145deg, rgba(214,195,163,0.44), rgba(237,227,215,0.9))',
      border: 'rgba(122,92,77,0.22)',
      hoverBorder: 'rgba(122,92,77,0.55)',
      iconBg: 'rgba(245,239,231,0.62)',
      numberColor: '#523C33',
      accent: '#6A4F43',
    },
  },
];

export default function HowSystemWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.12 }
    );

    const revealItems = sectionRef.current?.querySelectorAll('.reveal-hidden');
    revealItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-28" style={{ background: '#F5EFE7' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="reveal-hidden mb-12 md:mb-14">
          <div className="section-label" style={{ color: '#D6C3A3' }}>
            How Our System Works
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.1rem, 4.5vw, 3.7rem)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: '#3E2F2B',
            }}
          >
            A clear process
            <br />
            <span
              style={{
                color: '#7A5C4D',
                fontFamily: 'var(--font-cursive)',
                fontSize: '1.05em',
                letterSpacing: '0.005em',
              }}
            >
              from first call to scale.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
          {STEPS.map((step) => (
            <article
              key={step.number}
              className="reveal-hidden stagger-child rounded-3xl p-6 md:p-7"
              style={{
                background: step.tones.cardBg,
                border: `1px solid ${step.tones.border}`,
                boxShadow: '0 10px 30px rgba(62,47,43,0.08)',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(-6px)';
                el.style.boxShadow = '0 20px 42px rgba(62,47,43,0.14)';
                el.style.borderColor = step.tones.hoverBorder;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 10px 30px rgba(62,47,43,0.08)';
                el.style.borderColor = step.tones.border;
              }}
            >
              <span
                aria-hidden="true"
                className="block h-1.5 rounded-full mb-5"
                style={{ background: step.tones.accent }}
              />
              <div className="flex items-center justify-between mb-5">
                <span
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full"
                  style={{
                    background: step.tones.iconBg,
                    border: '1px solid rgba(122,92,77,0.25)',
                  }}
                >
                  {step.icon}
                </span>
                <span
                  className="text-xs font-semibold"
                  style={{
                    color: step.tones.numberColor,
                    letterSpacing: '0.16em',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {step.number}
                </span>
              </div>

              <h3
                className="font-display text-xl mb-2"
                style={{ color: '#3E2F2B', letterSpacing: '-0.02em', lineHeight: 1.15 }}
              >
                {step.title}
              </h3>
              <p className="text-sm" style={{ color: '#8B756B', fontFamily: 'var(--font-body)' }}>
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

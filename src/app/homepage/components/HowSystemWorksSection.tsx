'use client';

import React, { useEffect, useRef, useState } from 'react';

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

interface HowSystemWorksSectionProps {
  variant?: 'default' | 'overlay';
}

export default function HowSystemWorksSection({ variant = 'default' }: HowSystemWorksSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [pathActive, setPathActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            setPathActive(true);
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
    <section
      ref={sectionRef}
      className="relative overflow-hidden rounded-[2rem] px-6 py-14 md:px-10 md:py-16"
      style={{
        background: variant === 'overlay' ? 'transparent' : '#F5EFE7',
        border: variant === 'overlay' ? '1px solid rgba(214,195,163,0.14)' : '1px solid rgba(184,148,105,0.2)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            variant === 'overlay'
              ? 'radial-gradient(circle at 20% 20%, rgba(214,195,163,0.18) 0%, transparent 28%), radial-gradient(circle at 80% 12%, rgba(122,92,77,0.08) 0%, transparent 24%), radial-gradient(circle at 50% 90%, rgba(214,195,163,0.1) 0%, transparent 32%)'
              : 'radial-gradient(circle at 20% 20%, rgba(214,195,163,0.34) 0%, transparent 28%), radial-gradient(circle at 80% 12%, rgba(122,92,77,0.10) 0%, transparent 24%), radial-gradient(circle at 50% 90%, rgba(214,195,163,0.18) 0%, transparent 32%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="reveal-hidden text-center mb-12 md:mb-14">
          <div className="section-label section-label--no-prefix justify-center" style={{ color: '#D6C3A3' }}>
            How Our System Works
          </div>
          <h2
            className="font-display mx-auto"
            style={{
              fontSize: 'clamp(2.3rem, 4.8vw, 4.4rem)',
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: '-0.04em',
              color: variant === 'overlay' ? '#E8DCC9' : '#3E2F2B',
              maxWidth: '12ch',
            }}
          >
            A roadmap that keeps every project moving.
          </h2>
          <p
            className="mt-4 mx-auto max-w-2xl text-sm md:text-base leading-relaxed"
            style={{ color: variant === 'overlay' ? 'rgba(245,239,231,0.82)' : '#7A5C4D', fontFamily: 'var(--font-body)' }}
          >
            A simple system with a clear path from first call to execution, so the work feels
            structured, not random.
          </p>
        </div>

        <div className="relative hidden md:block min-h-[560px]">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 560" fill="none" aria-hidden="true">
            <path
              d="M110 350 C 220 120, 330 120, 440 260 S 700 420, 830 230 S 980 110, 1085 250"
              stroke="#7A5C4D"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              strokeDasharray="1800"
              strokeDashoffset={pathActive ? '0' : '1800'}
              style={{ transition: 'stroke-dashoffset 1.8s ease' }}
            />
            <path
              d="M1060 238 C 1120 260, 1130 325, 1080 350 C 1030 374, 982 350, 972 320"
              stroke="#7A5C4D"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              strokeDasharray="420"
              strokeDashoffset={pathActive ? '0' : '420'}
              style={{ transition: 'stroke-dashoffset 2.1s ease 0.1s' }}
            />
            <path d="M972 320l16 5-9 14" fill="#7A5C4D" />
          </svg>

          {STEPS.map((step, index) => {
            const desktopPositions = [
              { left: '8%', top: '58%' },
              { left: '31%', top: '14%' },
              { left: '56%', top: '62%' },
              { left: '80%', top: '18%' },
            ];

            const position = desktopPositions[index];

            return (
              <article
                key={step.number}
                className="absolute w-[240px] md:w-[260px] transition-all duration-500 ease-out group"
                style={{
                  left: position.left,
                  top: position.top,
                  opacity: pathActive ? 1 : 0,
                  transform: pathActive ? 'translateY(0)' : 'translateY(14px)',
                  transitionDelay: `${index * 170}ms`,
                }}
              >
                <div className="relative pl-10 pr-2">
                  <div
                    className="absolute left-0 top-1.5 w-6 h-6 rounded-full transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: 'radial-gradient(circle, #F5EFE7 0%, #D6C3A3 45%, #7A5C4D 100%)',
                      boxShadow: '0 0 0 10px rgba(214,195,163,0.12), 0 0 28px rgba(122,92,77,0.24)',
                    }}
                  />
                  <div
                    className="transition-transform duration-300 group-hover:scale-[1.03]"
                    style={{
                      paddingLeft: '0.25rem',
                      textShadow: '0 1px 0 rgba(255,255,255,0.2)',
                    }}
                  >
                    <div
                      className="text-xs font-semibold mb-2"
                      style={{
                        color: variant === 'overlay' ? '#E0C9A0' : '#7A5C4D',
                        letterSpacing: '0.18em',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {step.number}
                    </div>
                    <h3
                      className="font-display text-2xl mb-2"
                      style={{
                        color: variant === 'overlay' ? '#F3E8D8' : '#3E2F2B',
                        letterSpacing: '-0.03em',
                        lineHeight: 1.02,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        color: variant === 'overlay' ? 'rgba(245,239,231,0.75)' : '#7B655A',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="relative md:hidden mt-10 min-h-[720px]">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 420 760" fill="none" aria-hidden="true">
            <path
              d="M86 90 C 170 130, 210 180, 190 250 S 100 380, 160 450 S 280 560, 244 650"
              stroke="#7A5C4D"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              strokeDasharray="1300"
              strokeDashoffset={pathActive ? '0' : '1300'}
              style={{ transition: 'stroke-dashoffset 1.8s ease' }}
            />
            <path d="M235 652l16 4-10 14" fill="#7A5C4D" />
          </svg>

          {STEPS.map((step, index) => {
            const mobilePositions = [
              { left: '8%', top: '6%' },
              { left: '48%', top: '23%' },
              { left: '10%', top: '44%' },
              { left: '44%', top: '68%' },
            ];

            const position = mobilePositions[index];
            const alignRight = index % 2 === 1;

            return (
              <article
                key={step.number}
                className="absolute w-[78%] transition-all duration-500 ease-out group"
                style={{
                  left: position.left,
                  top: position.top,
                  opacity: pathActive ? 1 : 0,
                  transform: pathActive ? 'translateY(0)' : 'translateY(12px)',
                  transitionDelay: `${index * 180}ms`,
                }}
              >
                <div className={`relative ${alignRight ? 'pl-12 pr-0 text-right' : 'pl-12 pr-0'}`}>
                  <div
                    className="absolute left-0 top-1.5 w-6 h-6 rounded-full transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: 'radial-gradient(circle, #F5EFE7 0%, #D6C3A3 45%, #7A5C4D 100%)',
                      boxShadow: '0 0 0 10px rgba(214,195,163,0.12), 0 0 28px rgba(122,92,77,0.24)',
                    }}
                  />
                  <div
                    className="transition-transform duration-300 group-hover:scale-[1.02]"
                    style={alignRight ? { paddingRight: '0.25rem' } : { paddingLeft: '0.25rem' }}
                  >
                    <div
                      className="text-xs font-semibold mb-2"
                      style={{
                        color: variant === 'overlay' ? '#E0C9A0' : '#7A5C4D',
                        letterSpacing: '0.18em',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {step.number}
                    </div>
                    <h3
                      className="font-display text-xl mb-2"
                      style={{
                        color: variant === 'overlay' ? '#F3E8D8' : '#3E2F2B',
                        letterSpacing: '-0.03em',
                        lineHeight: 1.05,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        color: variant === 'overlay' ? 'rgba(245,239,231,0.75)' : '#7B655A',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-xs md:text-sm" style={{ color: '#7A5C4D', fontFamily: 'var(--font-body)' }}>
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full" style={{ background: 'rgba(122,92,77,0.12)' }}>↻</span>
          Continuous growth loop from execution back to planning
        </div>
      </div>
    </section>
  );
}

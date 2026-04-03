'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import AppImage from '@/components/ui/AppImage';
import ServiceModal from './ServiceModal';

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  coverImage: string;
  coverAlt: string;
  description: string;
  images: { src: string; alt: string }[];
  packages: {
    name: string;
    price: string;
    icon: string;
    featured: boolean;
    features: string[];
  }[];
}

const SERVICES: Service[] = [
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    subtitle: 'Content · Strategy · Growth',
    tag: '01',
    coverImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_133178471-1772192094084.png',
    coverAlt: 'Social media marketing strategy on mobile devices',
    description:
      'We turn your brand voice into scroll-stopping content that builds community and drives real results.',
    images: [
      {
        src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a8f43c5e-1772140946026.png',
        alt: 'Social media content creation',
      },
      {
        src: 'https://img.rocket.new/generatedImages/rocket_gen_img_194f37308-1772248086109.png',
        alt: 'Social media analytics dashboard',
      },
      {
        src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1d31ae0cc-1768209880909.png',
        alt: 'Influencer marketing campaign',
      },
      {
        src: 'https://img.rocket.new/generatedImages/rocket_gen_img_18e14294d-1772192501563.png',
        alt: 'Content strategy planning session',
      },
    ],

    packages: [
      {
        name: 'Starter',
        price: '₹15,000/mo',
        icon: '🌱',
        featured: false,
        features: [
          '3 platforms managed',
          '12 posts/month',
          'Basic analytics',
          'Story content',
          'Monthly report',
        ],
      },
      {
        name: 'Growth',
        price: '₹35,000/mo',
        icon: '🚀',
        featured: true,
        features: [
          '5 platforms managed',
          '30 posts/month',
          'Paid ad management',
          'Reels & short videos',
          'Weekly analytics',
          'Community management',
        ],
      },
      {
        name: 'Dominance',
        price: '₹65,000/mo',
        icon: '👑',
        featured: false,
        features: [
          'All platforms',
          'Unlimited content',
          'Full ad management',
          'Influencer outreach',
          'Daily monitoring',
          'Dedicated strategist',
          'Custom reports',
        ],
      },
    ],
  },
  {
    id: 'event-coverage',
    title: 'Event Coverage',
    subtitle: 'Photography · Videography · Live',
    tag: '02',
    coverImage: 'https://images.unsplash.com/photo-1695139417491-17cd9a619e27',
    coverAlt: 'Professional event photography and coverage',
    description:
      'Every event tells a story. We capture yours with cinematic precision and editorial flair.',
    images: [
      {
        src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f315285c-1768315082106.png',
        alt: 'Corporate event coverage',
      },
      {
        src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ee4c35e1-1772210450230.png',
        alt: 'Concert and live event photography',
      },
      {
        src: 'https://img.rocket.new/generatedImages/rocket_gen_img_147822a20-1772309808090.png',
        alt: 'Conference event photography',
      },
      {
        src: 'https://img.rocket.new/generatedImages/rocket_gen_img_193e9449d-1768309679086.png',
        alt: 'Team event and gathering coverage',
      },
    ],

    packages: [
      {
        name: 'Starter',
        price: '₹12,000',
        icon: '📸',
        featured: false,
        features: [
          '4-hour coverage',
          '1 photographer',
          '100 edited photos',
          'Online gallery',
          '3-day delivery',
        ],
      },
      {
        name: 'Growth',
        price: '₹28,000',
        icon: '🎬',
        featured: true,
        features: [
          '8-hour coverage',
          'Photo + Video',
          '250 edited photos',
          '3-min highlight reel',
          'Social cuts',
          '2-day delivery',
        ],
      },
      {
        name: 'Dominance',
        price: '₹55,000',
        icon: '🏆',
        featured: false,
        features: [
          'Full-day coverage',
          '2 photographers + 1 videographer',
          'Unlimited photos',
          'Cinematic film',
          'Live social updates',
          'Same-day preview',
          'Drone footage',
        ],
      },
    ],
  },
  {
    id: 'branding',
    title: 'Branding',
    subtitle: 'Identity · Systems · Foundations',
    tag: '03',
    coverImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c25bd1d5-1774180572415.png',
    coverAlt: 'Brand identity mockups and visual system',
    description:
      'Minimal brand systems that make your business feel premium, clear, and memorable.',
    images: [
      {
        src: 'https://img.rocket.new/generatedImages/rocket_gen_img_154f525ad-1774180574640.png',
        alt: 'Logo and visual identity design',
      },
      {
        src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c25bd1d5-1774180572415.png',
        alt: 'Brand identity mockups',
      },
      {
        src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1939c1eb9-1772964019583.png',
        alt: 'Typography and branding presentation',
      },
      {
        src: 'https://img.rocket.new/generatedImages/rocket_gen_img_12947482e-1768612587447.png',
        alt: 'Color palette and creative brand direction',
      },
    ],

    packages: [
      {
        name: 'Starter',
        price: '₹20,000',
        icon: '✏️',
        featured: false,
        features: [
          'Logo design',
          'Brand name creation',
          'Tagline development',
          'Color palette',
          'Brand basics',
        ],
      },
      {
        name: 'Growth',
        price: '₹50,000',
        icon: '🎨',
        featured: true,
        features: [
          'Logo suite',
          'Typography selection',
          'Brand guidelines',
          'Palette system',
          'Mockups',
        ],
      },
      {
        name: 'Premium',
        price: '₹1,20,000',
        icon: '💎',
        featured: false,
        features: [
          'Full identity system',
          'Guideline book',
          'Packaging / launch assets',
          'Creative direction',
          'Template kit',
        ],
      },
    ],
  },
  {
    id: 'advertisement',
    title: 'Advertisement',
    subtitle: 'Meta Ads · Google Ads · Growth',
    tag: '04',
    coverImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_12b4a0b2d-1767380870132.png',
    coverAlt: 'Campaign dashboard and performance ads creative',
    description:
      'Performance-first campaigns built to turn attention into leads, conversions, and growth.',
    images: [
      {
        src: 'https://img.rocket.new/generatedImages/rocket_gen_img_12b4a0b2d-1767380870132.png',
        alt: 'Digital advertising creative',
      },
      {
        src: 'https://img.rocket.new/generatedImages/rocket_gen_img_12947482e-1768612587447.png',
        alt: 'Creative campaign dashboard',
      },
      {
        src: 'https://img.rocket.new/generatedImages/rocket_gen_img_194f37308-1772248086109.png',
        alt: 'Analytics performance dashboard',
      },
      {
        src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1d31ae0cc-1768209880909.png',
        alt: 'Campaign creative and targeting view',
      },
    ],

    packages: [
      {
        name: 'Starter',
        price: '₹20,000',
        icon: '📢',
        featured: false,
        features: [
          'Meta ads setup',
          '1 campaign',
          'Audience research',
          'Basic analytics',
          'Monthly summary',
        ],
      },
      {
        name: 'Growth',
        price: '₹50,000',
        icon: '📈',
        featured: true,
        features: [
          'Meta + Google ads',
          'Lead generation',
          'Campaign strategy',
          'Ad creatives',
          'Weekly optimization',
        ],
      },
      {
        name: 'Premium',
        price: '₹1,20,000',
        icon: '🚀',
        featured: false,
        features: [
          'Full performance marketing',
          'Analytics dashboard',
          'Retargeting',
          'A/B testing',
          'Dedicated strategist',
        ],
      },
    ],
  },
  {
    id: 'website-dev',
    title: 'Website Development',
    subtitle: 'Design · Build · Optimise',
    tag: '05',
    coverImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_18d64831f-1772832014781.png',
    coverAlt: 'Modern website development and design',
    description: 'Websites that load fast, look stunning, and convert visitors into customers.',
    images: [
      {
        src: 'https://img.rocket.new/generatedImages/rocket_gen_img_11eda67f7-1770291130824.png',
        alt: 'Website design mockup on laptop',
      },
      {
        src: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3',
        alt: 'Web development code on screen',
      },
      {
        src: 'https://img.rocket.new/generatedImages/rocket_gen_img_11a0236bb-1764651527759.png',
        alt: 'Responsive web design on multiple devices',
      },
      {
        src: 'https://img.rocket.new/generatedImages/rocket_gen_img_174692856-1766607381991.png',
        alt: 'UI UX design wireframe',
      },
    ],

    packages: [
      {
        name: 'Starter',
        price: '₹25,000',
        icon: '🌐',
        featured: false,
        features: [
          '5-page website',
          'Mobile responsive',
          'Contact form',
          'Basic SEO',
          '1-month support',
        ],
      },
      {
        name: 'Growth',
        price: '₹60,000',
        icon: '⚡',
        featured: true,
        features: [
          '15-page website',
          'Custom design',
          'CMS integration',
          'Speed optimised',
          'Advanced SEO',
          'Analytics setup',
          '3-month support',
        ],
      },
      {
        name: 'Dominance',
        price: '₹1,50,000',
        icon: '🔥',
        featured: false,
        features: [
          'Unlimited pages',
          'Custom web app',
          'E-commerce ready',
          'Performance optimised',
          'Full SEO strategy',
          'Priority support',
          '12-month maintenance',
          'Hosting included',
        ],
      },
    ],
  },
  {
    id: 'wedding-diaries',
    title: 'Wedding Diaries',
    subtitle: 'Candid · Cinematic · Timeless',
    tag: '06',
    coverImage: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a968e0c7-1767512494404.png',
    coverAlt: 'Beautiful wedding photography and videography',
    description:
      'Your love story deserves to be told beautifully. We capture every stolen glance and joyful tear.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1607567079746-d34298c998f0',
        alt: 'Romantic wedding ceremony photography',
      },
      {
        src: 'https://images.unsplash.com/photo-1696224809714-667492755953',
        alt: 'Wedding couple portrait',
      },
      {
        src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1d57d1665-1767725166854.png',
        alt: 'Wedding reception and celebration',
      },
      {
        src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a3a71fbe-1772257476241.png',
        alt: 'Wedding details and decoration photography',
      },
    ],

    packages: [
      {
        name: 'Starter',
        price: '₹40,000',
        icon: '💍',
        featured: false,
        features: [
          '6-hour coverage',
          '1 photographer',
          '300 edited photos',
          'Online album',
          '7-day delivery',
        ],
      },
      {
        name: 'Growth',
        price: '₹85,000',
        icon: '🎥',
        featured: true,
        features: [
          'Full-day coverage',
          'Photo + Cinematic video',
          '500 edited photos',
          '5-min film',
          'Highlight reel',
          'Pre-wedding shoot',
          '5-day delivery',
        ],
      },
      {
        name: 'Dominance',
        price: '₹1,80,000',
        icon: '✨',
        featured: false,
        features: [
          '2-day coverage',
          '2 photographers + cinematographer',
          'Unlimited photos',
          'Feature-length film',
          'Drone shots',
          'Same-day edit',
          'Printed album',
          'Instagram reels',
        ],
      },
    ],
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const searchParams = useSearchParams();
  const hasOpenedFromQueryRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll('.reveal-hidden');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeService) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [activeService]);

  useEffect(() => {
    if (hasOpenedFromQueryRef.current) return;

    const serviceId = searchParams.get('service');
    if (!serviceId) return;

    const matchedService = SERVICES.find((service) => service.id === serviceId);
    if (!matchedService) return;

    hasOpenedFromQueryRef.current = true;
    setActiveService(matchedService);
  }, [searchParams]);

  return (
    <>
      <section
        ref={sectionRef}
        id="services"
        className="py-24 md:py-32"
        style={{ background: '#3E2F2B' }}
      >
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="section-label" style={{ color: '#D6C3A3' }}>
                Our Services
              </div>
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  color: '#F5EFE7',
                }}
              >
                What we
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
                  do best.
                </span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                className="service-block"
                style={{ height: '380px' }}
                onClick={() => setActiveService(s)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveService(s)}
                aria-label={`Open ${s.title} service details`}
              >
                <AppImage
                  src={s.coverImage}
                  alt={s.coverAlt}
                  fill
                  className="service-img absolute inset-0 w-full h-full object-cover"
                />

                <div className="service-overlay" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <span
                    className="text-xs font-bold text-echelon-gold mb-2 block"
                    style={{ letterSpacing: '0.18em', fontFamily: 'var(--font-body)' }}
                  >
                    {s.tag}
                  </span>
                  <h3
                    className="font-display text-white text-2xl font-bold mb-1"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-white/60 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
                    {s.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
    </>
  );
}

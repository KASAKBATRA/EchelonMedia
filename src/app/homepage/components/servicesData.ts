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

export const SERVICES: Service[] = [
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
        name: 'Package 1',
        price: '₹45,000',
        icon: '🌱',
        featured: false,
        features: [
          '3 platforms (Instagram / Facebook / Youtube)',
          '12 posts/month',
          '6 reels + 6 graphics',
          'Content strategy',
          '1 shoot/month',
        ],
      },
      {
        name: 'Package 2',
        price: '₹65,000',
        icon: '🚀',
        featured: true,
        features: [
          '3-4 platforms (Instagram / Facebook / Youtube/ LinkedIn)',
          '18 posts/month',
          '10 reels + 8 graphics',
          'Content strategy',
          '2 shoot/month',
        ],
      },
      {
        name: 'Package 3',
        price: '₹95,000',
        icon: '👑',
        featured: false,
        features: [
          '5 platforms (Instagram / Facebook / Youtube/ LinkedIn/ Twitter)',
          '24 posts/month',
          '12 reels + 12 graphics',
          'Content strategy',
          '2 shoots/month',
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

export interface Sector {
  id: string;
  slug: string;
  title: string;
  titleIt: string;
  image: string;
  description: string;
  applications: {
    title: string;
    description: string;
    image?: string;
  }[];
  webbings: {
    title: string;
    image: string;
  }[];
}

// Placeholder images - will be replaced with actual content
const placeholderImage = 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=400&fit=crop';

export const sectors: Sector[] = [
  {
    id: '1',
    slug: 'clothing-fashion',
    title: 'Clothing and Fashion',
    titleIt: 'Abbigliamento e Moda',
    image: placeholderImage,
    description: 'High-quality webbings and tapes for the fashion and clothing industry.',
    applications: [],
    webbings: [],
  },
  {
    id: '2',
    slug: 'lifting-transport',
    title: 'Lifting, Lashing, Transport and Industrial',
    titleIt: 'Sollevamento, Ancoraggio, Trasporto e Industria',
    image: placeholderImage,
    description: 'Heavy-duty webbings for lifting, lashing, and industrial transport applications.',
    applications: [],
    webbings: [],
  },
  {
    id: '3',
    slug: 'early-childcare',
    title: 'Early Childcare',
    titleIt: 'Prima Infanzia',
    image: placeholderImage,
    description: 'Safe and certified webbings for baby products and childcare equipment.',
    applications: [],
    webbings: [],
  },
  {
    id: '4',
    slug: 'medical-orthopedic',
    title: 'Medical and Orthopedic',
    titleIt: 'Medicale e Ortopedico',
    image: placeholderImage,
    description: 'Specialized webbings for medical devices and orthopedic applications.',
    applications: [],
    webbings: [],
  },
  {
    id: '5',
    slug: 'seatbelts',
    title: 'Seatbelts',
    titleIt: 'Cinture di Sicurezza',
    image: placeholderImage,
    description: 'High-strength webbings meeting automotive safety standards.',
    applications: [],
    webbings: [],
  },
  {
    id: '6',
    slug: 'military-supplies',
    title: 'Military Supplies',
    titleIt: 'Forniture Militari',
    image: placeholderImage,
    description: 'Durable webbings for military equipment and tactical gear.',
    applications: [],
    webbings: [],
  },
  {
    id: '7',
    slug: 'personal-protection',
    title: 'Personal Protection',
    titleIt: 'Protezione Individuale',
    image: placeholderImage,
    description: 'Safety webbings for personal protective equipment.',
    applications: [],
    webbings: [],
  },
  {
    id: '8',
    slug: 'sport-outdoors',
    title: 'Sport and Outdoors',
    titleIt: 'Sport e Outdoor',
    image: placeholderImage,
    description: 'Performance webbings for sports equipment and outdoor gear.',
    applications: [],
    webbings: [],
  },
  {
    id: '9',
    slug: 'home-furnishings',
    title: 'Home Furnishings',
    titleIt: 'Arredamento',
    image: placeholderImage,
    description: 'Decorative and functional webbings for furniture and home decor.',
    applications: [],
    webbings: [],
  },
  {
    id: '10',
    slug: 'pet-accessories',
    title: 'Pet Accessories',
    titleIt: 'Accessori per Animali',
    image: placeholderImage,
    description: 'Quality webbings for pet collars, leashes, and accessories.',
    applications: [],
    webbings: [],
  },
];

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectors.find((sector) => sector.slug === slug);
}

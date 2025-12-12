import apparelFashion from '@/assets/sectors/apparel-fashion.png';
import earlyChildhood from '@/assets/sectors/early-childhood.png';
import furniture from '@/assets/sectors/furniture.png';
import industrialLifting from '@/assets/sectors/industrial-lifting-transport.png';
import medicalOrthopedics from '@/assets/sectors/medical-orthopedics.png';
import military from '@/assets/sectors/military.png';
import personalProtection from '@/assets/sectors/personal-protection.png';
import safetyBelts from '@/assets/sectors/safety-belts.png';
import sportOutdoor from '@/assets/sectors/sport-outdoor.png';

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

export const sectors: Sector[] = [
  {
    id: '1',
    slug: 'apparel-fashion',
    title: 'Apparel & Fashion',
    titleIt: 'Abbigliamento e Moda',
    image: apparelFashion,
    description: 'Stylish webbings for fashion accessories, bags, and apparel.',
    applications: [],
    webbings: [],
  },
  {
    id: '2',
    slug: 'early-childhood',
    title: 'Early Childhood',
    titleIt: 'Prima Infanzia',
    image: earlyChildhood,
    description: 'Safe and comfortable webbings for baby products and child safety.',
    applications: [],
    webbings: [],
  },
  {
    id: '3',
    slug: 'furniture',
    title: 'Furniture',
    titleIt: 'Arredamento',
    image: furniture,
    description: 'Decorative and functional webbings for furniture and home decor.',
    applications: [],
    webbings: [],
  },
  {
    id: '4',
    slug: 'industrial-lifting-transport',
    title: 'Industrial, Lifting & Transport',
    titleIt: 'Industriale, Sollevamento e Trasporto',
    image: industrialLifting,
    description: 'Heavy-duty webbings for lifting, lashing, and industrial applications.',
    applications: [],
    webbings: [],
  },
  {
    id: '5',
    slug: 'medical-orthopedics',
    title: 'Medical & Orthopedics',
    titleIt: 'Medicale e Ortopedico',
    image: medicalOrthopedics,
    description: 'Specialized webbings for medical devices and orthopedic supports.',
    applications: [],
    webbings: [],
  },
  {
    id: '6',
    slug: 'military',
    title: 'Military',
    titleIt: 'Militare',
    image: military,
    description: 'Durable webbings for military equipment and tactical gear.',
    applications: [],
    webbings: [],
  },
  {
    id: '7',
    slug: 'personal-protection',
    title: 'Personal Protection',
    titleIt: 'Protezione Individuale',
    image: personalProtection,
    description: 'Safety webbings for personal protective equipment.',
    applications: [],
    webbings: [],
  },
  {
    id: '8',
    slug: 'safety-belts',
    title: 'Safety Belts',
    titleIt: 'Cinture di Sicurezza',
    image: safetyBelts,
    description: 'High-quality webbings for safety belt systems.',
    applications: [],
    webbings: [],
  },
  {
    id: '9',
    slug: 'sport-outdoor',
    title: 'Sport & Outdoor',
    titleIt: 'Sport e Outdoor',
    image: sportOutdoor,
    description: 'Performance webbings for sports equipment and outdoor gear.',
    applications: [],
    webbings: [],
  },
];

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectors.find((sector) => sector.slug === slug);
}

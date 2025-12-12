import apparelFashion from '@/assets/sectors/apparel-fashion.png';
import earlyChildhood from '@/assets/sectors/early-childhood.png';
import furniture from '@/assets/sectors/furniture.png';
import industrialLifting from '@/assets/sectors/industrial-lifting-transport.png';
import medicalOrthopedics from '@/assets/sectors/medical-orthopedics.png';
import military from '@/assets/sectors/military.png';
import personalProtection from '@/assets/sectors/personal-protection.png';
import safetyBelts from '@/assets/sectors/safety-belts.png';
import sportOutdoor from '@/assets/sectors/sport-outdoor.png';

// Apparel & Fashion webs
import apparelWeb1 from '@/assets/webs/apparel-fashion-1.jpg';
import apparelWeb2 from '@/assets/webs/apparel-fashion-2.jpg';
import apparelWeb3 from '@/assets/webs/apparel-fashion-3.jpg';
import apparelWeb4 from '@/assets/webs/apparel-fashion-4.jpg';
import apparelWeb5 from '@/assets/webs/apparel-fashion-5.jpg';
import apparelWeb6 from '@/assets/webs/apparel-fashion-6.jpg';

// Early Childhood webs
import earlyWeb1 from '@/assets/webs/early-childhood-1.jpg';
import earlyWeb2 from '@/assets/webs/early-childhood-2.jpg';
import earlyWeb3 from '@/assets/webs/early-childhood-3.jpg';
import earlyWeb4 from '@/assets/webs/early-childhood-4.jpg';
import earlyWeb5 from '@/assets/webs/early-childhood-5.jpg';
import earlyWeb6 from '@/assets/webs/early-childhood-6.jpg';
import earlyWeb7 from '@/assets/webs/early-childhood-7.jpg';

// Furniture webs
import furnitureWeb1 from '@/assets/webs/furniture-1.jpg';
import furnitureWeb2 from '@/assets/webs/furniture-2.jpg';
import furnitureWeb3 from '@/assets/webs/furniture-3.jpg';
import furnitureWeb4 from '@/assets/webs/furniture-4.jpg';

// Industrial, Lifting & Transport webs
import industrialWeb1 from '@/assets/webs/industrial-1.jpg';
import industrialWeb2 from '@/assets/webs/industrial-2.jpg';
import industrialWeb3 from '@/assets/webs/industrial-3.jpg';
import industrialWeb4 from '@/assets/webs/industrial-4.jpg';
import industrialWeb5 from '@/assets/webs/industrial-5.jpg';

// Medical & Orthopedics webs
import medicalWeb1 from '@/assets/webs/medical-1.jpg';
import medicalWeb2 from '@/assets/webs/medical-2.jpg';
import medicalWeb3 from '@/assets/webs/medical-3.jpg';
import medicalWeb4 from '@/assets/webs/medical-4.jpg';
import medicalWeb5 from '@/assets/webs/medical-5.jpg';

// Military webs
import militaryWeb1 from '@/assets/webs/military-1.jpg';
import militaryWeb2 from '@/assets/webs/military-2.jpg';
import militaryWeb3 from '@/assets/webs/military-3.jpg';
import militaryWeb4 from '@/assets/webs/military-4.jpg';
import militaryWeb5 from '@/assets/webs/military-5.jpg';
import militaryWeb6 from '@/assets/webs/military-6.jpg';

// Personal Protection webs
import protectionWeb1 from '@/assets/webs/personal-protection-1.jpg';
import protectionWeb2 from '@/assets/webs/personal-protection-2.jpg';
import protectionWeb3 from '@/assets/webs/personal-protection-3.jpg';
import protectionWeb4 from '@/assets/webs/personal-protection-4.jpg';
import protectionWeb5 from '@/assets/webs/personal-protection-5.jpg';
import protectionWeb6 from '@/assets/webs/personal-protection-6.jpg';
import protectionWeb7 from '@/assets/webs/personal-protection-7.jpg';
import protectionWeb8 from '@/assets/webs/personal-protection-8.jpg';

export interface Sector {
  id: string;
  slug: string;
  title: string;
  titleIt: string;
  image: string;
  description: string;
  applicationsImage: string;
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

// Placeholder for square sector card images - will be replaced later
const placeholderImage = 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=600&fit=crop';

export const sectors: Sector[] = [
  {
    id: '1',
    slug: 'apparel-fashion',
    title: 'Apparel & Fashion',
    titleIt: 'Abbigliamento e Moda',
    image: placeholderImage,
    applicationsImage: apparelFashion,
    description: 'Stylish webbings for fashion accessories, bags, and apparel.',
    applications: [],
    webbings: [
      { title: 'Web 1', image: apparelWeb1 },
      { title: 'Web 2', image: apparelWeb2 },
      { title: 'Web 3', image: apparelWeb3 },
      { title: 'Web 4', image: apparelWeb4 },
      { title: 'Web 5', image: apparelWeb5 },
      { title: 'Web 6', image: apparelWeb6 },
    ],
  },
  {
    id: '2',
    slug: 'early-childhood',
    title: 'Early Childhood',
    titleIt: 'Prima Infanzia',
    image: placeholderImage,
    applicationsImage: earlyChildhood,
    description: 'Safe and comfortable webbings for baby products and child safety.',
    applications: [],
    webbings: [
      { title: 'Web 1', image: earlyWeb1 },
      { title: 'Web 2', image: earlyWeb2 },
      { title: 'Web 3', image: earlyWeb3 },
      { title: 'Web 4', image: earlyWeb4 },
      { title: 'Web 5', image: earlyWeb5 },
      { title: 'Web 6', image: earlyWeb6 },
      { title: 'Web 7', image: earlyWeb7 },
    ],
  },
  {
    id: '3',
    slug: 'furniture',
    title: 'Furniture',
    titleIt: 'Arredamento',
    image: placeholderImage,
    applicationsImage: furniture,
    description: 'Decorative and functional webbings for furniture and home decor.',
    applications: [],
    webbings: [
      { title: 'Web 1', image: furnitureWeb1 },
      { title: 'Web 2', image: furnitureWeb2 },
      { title: 'Web 3', image: furnitureWeb3 },
      { title: 'Web 4', image: furnitureWeb4 },
    ],
  },
  {
    id: '4',
    slug: 'industrial-lifting-transport',
    title: 'Industrial, Lifting & Transport',
    titleIt: 'Industriale, Sollevamento e Trasporto',
    image: placeholderImage,
    applicationsImage: industrialLifting,
    description: 'Heavy-duty webbings for lifting, lashing, and industrial applications.',
    applications: [],
    webbings: [
      { title: 'Web 1', image: industrialWeb1 },
      { title: 'Web 2', image: industrialWeb2 },
      { title: 'Web 3', image: industrialWeb3 },
      { title: 'Web 4', image: industrialWeb4 },
      { title: 'Web 5', image: industrialWeb5 },
    ],
  },
  {
    id: '5',
    slug: 'medical-orthopedics',
    title: 'Medical & Orthopedics',
    titleIt: 'Medicale e Ortopedico',
    image: placeholderImage,
    applicationsImage: medicalOrthopedics,
    description: 'Specialized webbings for medical devices and orthopedic supports.',
    applications: [],
    webbings: [
      { title: 'Web 1', image: medicalWeb1 },
      { title: 'Web 2', image: medicalWeb2 },
      { title: 'Web 3', image: medicalWeb3 },
      { title: 'Web 4', image: medicalWeb4 },
      { title: 'Web 5', image: medicalWeb5 },
    ],
  },
  {
    id: '6',
    slug: 'military',
    title: 'Military',
    titleIt: 'Militare',
    image: placeholderImage,
    applicationsImage: military,
    description: 'Durable webbings for military equipment and tactical gear.',
    applications: [],
    webbings: [
      { title: 'Web 1', image: militaryWeb1 },
      { title: 'Web 2', image: militaryWeb2 },
      { title: 'Web 3', image: militaryWeb3 },
      { title: 'Web 4', image: militaryWeb4 },
      { title: 'Web 5', image: militaryWeb5 },
      { title: 'Web 6', image: militaryWeb6 },
    ],
  },
  {
    id: '7',
    slug: 'personal-protection',
    title: 'Personal Protection',
    titleIt: 'Protezione Individuale',
    image: placeholderImage,
    applicationsImage: personalProtection,
    description: 'Safety webbings for personal protective equipment.',
    applications: [],
    webbings: [
      { title: 'Web 1', image: protectionWeb1 },
      { title: 'Web 2', image: protectionWeb2 },
      { title: 'Web 3', image: protectionWeb3 },
      { title: 'Web 4', image: protectionWeb4 },
      { title: 'Web 5', image: protectionWeb5 },
      { title: 'Web 6', image: protectionWeb6 },
      { title: 'Web 7', image: protectionWeb7 },
      { title: 'Web 8', image: protectionWeb8 },
    ],
  },
  {
    id: '8',
    slug: 'safety-belts',
    title: 'Safety Belts',
    titleIt: 'Cinture di Sicurezza',
    image: placeholderImage,
    applicationsImage: safetyBelts,
    description: 'High-quality webbings for safety belt systems.',
    applications: [],
    webbings: [],
  },
  {
    id: '9',
    slug: 'sport-outdoor',
    title: 'Sport & Outdoor',
    titleIt: 'Sport e Outdoor',
    image: placeholderImage,
    applicationsImage: sportOutdoor,
    description: 'Performance webbings for sports equipment and outdoor gear.',
    applications: [],
    webbings: [],
  },
];

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectors.find((sector) => sector.slug === slug);
}

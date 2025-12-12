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
    slug: 'personal-protection',
    title: 'Personal Protection',
    titleIt: 'Protezione Individuale',
    image: placeholderImage,
    description: 'Safety webbings for personal protective equipment.',
    applications: [],
    webbings: [],
  },
  {
    id: '2',
    slug: 'sport-outdoor',
    title: 'Sport and Outdoor',
    titleIt: 'Sport e Outdoor',
    image: placeholderImage,
    description: 'Performance webbings for sports equipment and outdoor gear.',
    applications: [],
    webbings: [],
  },
  {
    id: '3',
    slug: 'furniture',
    title: 'Furniture',
    titleIt: 'Arredamento',
    image: placeholderImage,
    description: 'Decorative and functional webbings for furniture and home decor.',
    applications: [],
    webbings: [],
  },
  {
    id: '4',
    slug: 'military',
    title: 'Military',
    titleIt: 'Militare',
    image: placeholderImage,
    description: 'Durable webbings for military equipment and tactical gear.',
    applications: [],
    webbings: [],
  },
  {
    id: '5',
    slug: 'industrial',
    title: 'Industrial',
    titleIt: 'Industriale',
    image: placeholderImage,
    description: 'Heavy-duty webbings for lifting, lashing, and industrial applications.',
    applications: [],
    webbings: [],
  },
];

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectors.find((sector) => sector.slug === slug);
}

import apparelFashion from '@/assets/sectors/apparel-fashion.png';
import earlyChildhood from '@/assets/sectors/early-childhood.png';
import furniture from '@/assets/sectors/furniture.png';
import industrialLifting from '@/assets/sectors/industrial-lifting-transport.png';
import medicalOrthopedics from '@/assets/sectors/medical-orthopedics.png';
import military from '@/assets/sectors/military.png';
import personalProtection from '@/assets/sectors/personal-protection.png';
import safetyBelts from '@/assets/sectors/safety-belts.png';
import sportOutdoor from '@/assets/sectors/sport-outdoor.png';

// Sector card images
import apparelFashionCard from '@/assets/sectors/apparel-fashion.jpg';
import earlyChildhoodCard from '@/assets/sectors/early-childhood.jpg';
import furnitureCard from '@/assets/sectors/furniture.jpg';
import industrialCard from '@/assets/sectors/industrial-lifting-transport.jpg';
import medicalCard from '@/assets/sectors/medical-orthopedics.jpg';
import militaryCard from '@/assets/sectors/military.jpg';
import personalProtectionCard from '@/assets/sectors/personal-protection.jpg';
import safetyBeltsCard from '@/assets/sectors/safety-belts.jpg';
import sportOutdoorCard from '@/assets/sectors/sport-outdoor.jpg';

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

// Safety Belts webs
import safetyWeb1 from '@/assets/webs/safety-belts-1.jpg';
import safetyWeb2 from '@/assets/webs/safety-belts-2.jpg';
import safetyWeb3 from '@/assets/webs/safety-belts-3.jpg';
import safetyWeb4 from '@/assets/webs/safety-belts-4.jpg';
import safetyWeb5 from '@/assets/webs/safety-belts-5.jpg';
import safetyWeb6 from '@/assets/webs/safety-belts-6.jpg';

// Sport & Outdoor webs
import sportWeb1 from '@/assets/webs/sport-outdoor-1.jpg';
import sportWeb2 from '@/assets/webs/sport-outdoor-2.jpg';
import sportWeb3 from '@/assets/webs/sport-outdoor-3.jpg';
import sportWeb4 from '@/assets/webs/sport-outdoor-4.jpg';
import sportWeb5 from '@/assets/webs/sport-outdoor-5.jpg';
import sportWeb6 from '@/assets/webs/sport-outdoor-6.jpg';
import sportWeb7 from '@/assets/webs/sport-outdoor-7.jpg';
import sportWeb8 from '@/assets/webs/sport-outdoor-8.jpg';

export interface Sector {
  id: string;
  slug: string;
  title: string;
  titleIt: string;
  image: string;
  description: string;
  descriptionIt: string;
  applicationsImage: string;
  applicationsText: string;
  applicationsTextIt: string;
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
    image: apparelFashionCard,
    applicationsImage: apparelFashion,
    description: 'Stylish webbings for fashion accessories, bags, and apparel.',
    descriptionIt: 'Nastri eleganti per accessori moda, borse e abbigliamento.',
    applicationsText: 'Footwear, belts, suitcases and travel bags, fashion handbags',
    applicationsTextIt: 'Calzature, cinture, valigie e borse da viaggio, borse moda',
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
    image: earlyChildhoodCard,
    applicationsImage: earlyChildhood,
    description: 'Safe and comfortable webbings for baby products and child safety.',
    descriptionIt: 'Nastri sicuri e confortevoli per prodotti per bambini e sicurezza infantile.',
    applicationsText: 'Strollers, prams, high chairs, bicycle child seats',
    applicationsTextIt: 'Passeggini, carrozzine, seggioloni, seggiolini bici per bambini',
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
    image: furnitureCard,
    applicationsImage: furniture,
    description: 'Decorative and functional webbings for furniture and home decor.',
    descriptionIt: 'Nastri decorativi e funzionali per arredamento e complementi d\'arredo.',
    applicationsText: 'Rigid webbing for sofas and outdoor seating',
    applicationsTextIt: 'Nastri rigidi per divani e sedute da esterno',
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
    image: industrialCard,
    applicationsImage: industrialLifting,
    description: 'Heavy-duty webbings for lifting, lashing, and industrial applications.',
    descriptionIt: 'Nastri resistenti per sollevamento, ancoraggio e applicazioni industriali.',
    applicationsText: 'Protection sleeves for high-pressure hoses, conveyor belts, filtration, laundry tapes, big bags, lifting slings, cargo securing and packaging systems, textile strapping, ski carriers, bicycle carriers',
    applicationsTextIt: 'Guaine di protezione per tubi alta pressione, nastri trasportatori, filtrazione, nastri per lavanderie, big bags, brache di sollevamento, sistemi di ancoraggio e imballaggio merci, regge tessili, portasci, portabiciclette',
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
    image: medicalCard,
    applicationsImage: medicalOrthopedics,
    description: 'Specialized webbings for medical devices and orthopedic supports.',
    descriptionIt: 'Nastri specializzati per dispositivi medici e supporti ortopedici.',
    applicationsText: 'Stretchers, casualty recovery systems, orthopedic braces, patient restraint systems, disposable equipment',
    applicationsTextIt: 'Barelle, sistemi di recupero infortunati, tutori ortopedici, sistemi di contenimento pazienti, materiale monouso',
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
    slug: 'defense',
    title: 'Military',
    titleIt: 'Militare',
    image: militaryCard,
    applicationsImage: military,
    description: 'Durable webbings for military equipment and tactical gear.',
    descriptionIt: 'Nastri resistenti per equipaggiamento militare e attrezzature tattiche.',
    applicationsText: 'Backpacks, uniforms, vests, belts, tactical gear',
    applicationsTextIt: 'Zaini, uniformi, gilet, cinture, equipaggiamento tattico',
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
    image: personalProtectionCard,
    applicationsImage: personalProtection,
    description: 'Safety webbings for personal protective equipment.',
    descriptionIt: 'Nastri di sicurezza per dispositivi di protezione individuale.',
    applicationsText: 'Fall-arrest harnesses, positioning belts, work helmets, emergency equipment',
    applicationsTextIt: 'Imbracature anticaduta, cinture di posizionamento, elmetti da lavoro, attrezzature di emergenza',
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
    image: safetyBeltsCard,
    applicationsImage: safetyBelts,
    description: 'High-quality webbings for safety belt systems.',
    descriptionIt: 'Nastri di alta qualità per sistemi di cinture di sicurezza.',
    applicationsText: 'Special vehicles, aeronautics, child car seats',
    applicationsTextIt: 'Veicoli speciali, aeronautica, seggiolini auto per bambini',
    applications: [],
    webbings: [
      { title: 'Web 1', image: safetyWeb1 },
      { title: 'Web 2', image: safetyWeb2 },
      { title: 'Web 3', image: safetyWeb3 },
      { title: 'Web 4', image: safetyWeb4 },
      { title: 'Web 5', image: safetyWeb5 },
      { title: 'Web 6', image: safetyWeb6 },
    ],
  },
  {
    id: '9',
    slug: 'sport-outdoor',
    title: 'Sport & Outdoor',
    titleIt: 'Sport e Outdoor',
    image: sportOutdoorCard,
    applicationsImage: sportOutdoor,
    description: 'Performance webbings for sports equipment and outdoor gear.',
    descriptionIt: 'Nastri ad alte prestazioni per attrezzature sportive e outdoor.',
    applicationsText: 'Diving equipment, life jackets, climbing accessories, leashes, motorcycle helmets, skiing, cycling, sports bags, backpacks',
    applicationsTextIt: 'Attrezzature subacquee, giubbotti di salvataggio, accessori per arrampicata, guinzagli, caschi moto, sci, ciclismo, borse sportive, zaini',
    applications: [],
    webbings: [
      { title: 'Web 1', image: sportWeb1 },
      { title: 'Web 2', image: sportWeb2 },
      { title: 'Web 3', image: sportWeb3 },
      { title: 'Web 4', image: sportWeb4 },
      { title: 'Web 5', image: sportWeb5 },
      { title: 'Web 6', image: sportWeb6 },
      { title: 'Web 7', image: sportWeb7 },
      { title: 'Web 8', image: sportWeb8 },
    ],
  },
];

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectors.find((sector) => sector.slug === slug);
}

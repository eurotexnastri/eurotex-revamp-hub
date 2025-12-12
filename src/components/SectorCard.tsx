import { Link } from 'react-router-dom';

interface SectorCardProps {
  title: string;
  image: string;
  slug: string;
  index: number;
}

export function SectorCard({ title, image, slug, index }: SectorCardProps) {
  return (
    <Link
      to={`/sectors/${slug}`}
      className="sector-card group block animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="overflow-hidden rounded-sm">
        <div className="aspect-square relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
      <h3 className="mt-4 text-lg font-light text-foreground group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
    </Link>
  );
}

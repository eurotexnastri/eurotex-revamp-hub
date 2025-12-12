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
      className="sector-card group block"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="sector-card-image"
          loading="lazy"
        />
      </div>
      <h3 className="sector-card-title">{title}</h3>
    </Link>
  );
}

'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({ id, title, description, image }: ServiceCardProps) {
  return (
    <Link href={`/services/${id}`}>
      <div className="h-full bg-white border-t-4 border-primary rounded-lg p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer">
        <Image src={image} alt={title} width={64} height={64} className="mb-4 rounded" />
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex items-center text-primary font-semibold text-sm group">
          Learn More
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

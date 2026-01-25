'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: number;
  title: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  { id: 12, title: ' ', category: 'facilities' },
  { id: 1, title: "Doctor's Consulting Room", category: 'facilities' },
  { id: 2, title: 'Reception Area - I', category: 'equipment' },
  { id: 3, title: 'PFT Room - I', category: 'facilities' },
  { id: 4, title: 'As a AMA Committee Member', category: 'facilities' },
  { id: 5, title: 'Patient Waiting Area', category: 'facilities' },
  { id: 6, title: 'Entrance Area', category: 'facilities' },
  { id: 7, title: 'PFT Room - II', category: 'equipment' },
  { id: 8, title: 'Corridor', category: 'equipment' },
  { id: 9, title: 'Reception Area - II', category: 'equipment' },
  { id: 10, title: 'Shilp Pharmacy', category: 'equipment' },
  { id: 11, title: 'Dr. Gopal Raval', category: 'equipment' },
  { id: 13, title: 'CSR Activity Lecture', category: 'activities' },
  { id: 14, title: 'CSR Activity Workshop', category: 'activities' },
  { id: 15, title: '10th Gujarat Criticon 2024', category: 'activities' },
  { id: 17, title: '10th Gujarat Criticon 2024', category: 'activities' },
  { id: 16, title: 'Poster Presentation at IMA NATCON 2025', category: 'activities' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState('all');

  const filteredImages =
    filter === 'all' ? galleryImages : galleryImages.filter((img) => img.category === filter);

  const categories = [
    { value: 'all', label: 'All Images' },
    { value: 'facilities', label: 'Facilities' },
    { value: 'equipment', label: 'Equipment' },
    { value: 'activities', label: 'Activities' },
  ];

  const handleNavigation = (direction: 'next' | 'prev') => {
    if (!selectedImage) return;

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    let newIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }

    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => {
              setFilter(category.value);
              setSelectedImage(null);
            }}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              filter === category.value
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-foreground hover:bg-border'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className="relative overflow-hidden rounded-lg cursor-pointer group bg-muted h-64"
          >
            <Image
              src={`/gal${image.id}.${image.id >= 13 ? 'png' : 'jpg'}`}
              alt={image.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
              <div className="w-full p-4 bg-gradient-to-t from-black to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-semibold">{image.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full max-h-96">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-accent transition-colors"
              aria-label="Close"
            >
              <X size={32} />
            </button>

            {/* Image Display */}
            <div className="bg-muted rounded-lg overflow-hidden relative h-96">
              <Image
                src={`/gal${selectedImage.id}.${selectedImage.id >= 13 ? 'png' : 'jpg'}`}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Image Title */}
            <div className="mt-4 text-center">
              <p className="text-white text-xl font-semibold">{selectedImage.title}</p>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => handleNavigation('prev')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white hover:text-accent transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={() => handleNavigation('next')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white hover:text-accent transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={40} />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm opacity-75">
              {filteredImages.findIndex((img) => img.id === selectedImage.id) + 1} /{' '}
              {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

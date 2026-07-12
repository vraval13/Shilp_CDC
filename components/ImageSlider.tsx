'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
interface Slide {
  src: string;
  link: string | null;
}

const slides: Slide[] = [
  { src: '/slider8.jpeg', link: null },
  { src: '/slider3.png', link: null },
  { src: '/slider1.jpg', link: null },
  { src: '/slider4.png', link: 'https://www.sbs.com.au/language/gujarati/gu/podcast-episode/dr-gopal-raval-insomnia/z4euso1tz' },
  { src: '/slider7.png', link: 'https://www.facebook.com/watch/?v=2558652464398043' },
  { src: '/slider5.png', link: null },
  { src: '/slider6.png', link: null },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));

  return (
    <section className="w-full mb-2 mt-2">
      <div className="relative w-full h-[260px] sm:h-[380px] md:h-[480px] lg:h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {slide.link ? (
              <Link href={slide.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
              </Link>
            ) : (
              <Image
                src={slide.src}
                alt={`Slide ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
              />
            )}

            {/* Dark overlay (professional look) */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur transition"
        >
          <ChevronLeft size={26} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur transition"
        >
          <ChevronRight size={26} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all ${
                index === current ? 'w-8 bg-white' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30">
          <div
            className="h-full bg-white transition-all duration-[4000ms] ease-linear"
            style={{ width: `${((current + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}

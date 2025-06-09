'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaAngleLeft, FaAngleRight, FaPlay, FaPause } from 'react-icons/fa6';
import { urlFor } from '@/lib/sanity';
import { Button } from './button';

interface FeaturedItem {
  title: string;
  section: string;
  slug: string;
  image: string;
  summary: string;
}

interface Props {
  items: FeaturedItem[];
}

export default function FeaturedCarousel({ items }: Props) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (distance > threshold) {
      nextSlide();
    } else if (distance < -threshold) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    if (!paused) {
      timeoutRef.current = setTimeout(nextSlide, 6000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current, paused]);

  return (
    <div
      className="relative overflow-hidden h-full w-full rounded-2xl shadow-2xl"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-full">
        {items.map((item, index) => (
          <div
            key={index}
            className={`
              absolute inset-0 transition-opacity duration-700 ease-in-out
              ${current === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}
              flex items-center justify-center text-white
            `}
          >
            <div className="absolute inset-0">
              <Image
                src={urlFor(item.image).auto('format').url()}
                alt={item.title}
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/40 to-indigo-600" />
            </div>

            <div className="relative text-center z-20 p-4">
              <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-2">{item.title}</h2>
              <p className="text-white/70 text-sm sm:text-base md:text-lg mb-6">{item.summary}</p>
              <Link href={`/${item.section}/${item.slug}`}>
                <Button variant="secondary" className="hover:bg-white">
                  Read More
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 w-full flex justify-center items-center gap-4 z-20">
        <button
          onClick={() => setPaused((prev) => !prev)}
          className="p-2 text-sm bg-white/30 hover:bg-white/50 text-white rounded-full transition-colors"
          aria-label={paused ? 'Play carousel' : 'Pause carousel'}
        >
          {paused ? <FaPlay /> : <FaPause />}
        </button>
        <div className="flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                current === index ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-6 top-[55%] -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-20"
        aria-label="Previous slide"
      >
        <FaAngleLeft />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-6 top-[55%] -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-20"
        aria-label="Next slide"
      >
        <FaAngleRight />
      </button>
    </div>
  );
}

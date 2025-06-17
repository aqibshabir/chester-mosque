'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import { FaAngleLeft, FaAngleRight, FaPlay, FaPause } from 'react-icons/fa6';
import Slide from './slide';

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

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

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
  }, [current, paused, nextSlide]);

  return (
    <div
      className="relative overflow-hidden h-full w-full rounded-2xl shadow-2xl"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-full">
        {items.map((item, index) => (
          <Slide key={index} item={item} index={index} current={current} />
        ))}
      </div>

      <div className="absolute bottom-4 w-full flex justify-center items-center gap-4 z-10">
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
        className="hidden md:block absolute left-6 top-[55%] -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-10"
        aria-label="Previous slide"
      >
        <FaAngleLeft />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-6 top-[55%] -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-10"
        aria-label="Next slide"
      >
        <FaAngleRight />
      </button>
    </div>
  );
}

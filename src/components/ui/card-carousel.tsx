'use client';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { ImageProps } from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
};

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="relative mx-auto w-full max-w-7xl">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-white/50 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-white/50 to-transparent" />

          <div className={cn('flex flex-row justify-start gap-4 md:gap-6 pl-[10%] md:pl-[20%]')}>
            {[...items, <ViewAllCard key="view-all" />].map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: 'easeOut',
                }}
                viewport={{ once: true }}
                key={'card' + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[20%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 disabled:opacity-50 hover:cursor-pointer disabled:cursor-default"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll Left"
          >
            <FaArrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-2xl bg-gray-100 disabled:opacity-50 hover:cursor-pointer disabled:cursor-default"
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Scroll Right"
          >
            <FaArrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </>
  );
};

export const Card = ({ card, index, href }: { card: Card; index: number; href: string }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.2 * index,
          ease: 'easeOut',
        },
      }}
      key={`card-${index}`}
      className="rounded-xl last:pr-[5%] md:last:pr-[33%]"
    >
      <Link
        href={href}
        className="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-xl bg-gray-100 md:h-[28rem] md:w-74 xl:h-[32rem] xl:w-90 group"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/50 to-indigo-600/90 group-hover:from-indigo-600/30 z-20" />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-40 p-8">
          <p className="text-left font-sans text-sm font-medium text-white md:text-base">
            {card.category}
          </p>
          <p className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl">
            {card.title}
          </p>
        </div>
        <ImageContainer
          src={card.src}
          alt={card.title}
          fill
          className="absolute inset-0 z-10 object-cover group-hover:scale-105 ease-in-out duration-500 transition-all"
        />
      </Link>
    </motion.div>
  );
};

export const ImageContainer = ({ height, width, src, className, alt, ...rest }: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        'h-full w-full transition duration-300',
        isLoading ? 'blur-sm' : 'blur-0',
        className
      )}
      onLoad={() => setLoading(false)}
      src={urlFor(src).auto('format').url()}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt ? alt : 'card background'}
      {...rest}
    />
  );
};

export const ViewAllCard = () => (
  <Link
    href="/updates"
    className="relative z-10 flex h-80 w-56 flex-col items-center justify-center rounded-xl bg-gray-100 text-black md:h-[28rem] md:w-74 xl:h-[32rem] xl:w-90  hover:bg-gray-200 transition-all group"
  >
    <span className="text-lg font-semibold md:text-2xl group-hover:underline">View All</span>
  </Link>
);

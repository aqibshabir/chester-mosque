'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';
import { Button } from './button';

interface SlideProps {
  item: {
    title: string;
    section: string;
    slug: string;
    image: string;
    summary: string;
  };
  index: number;
  current: number;
}

function SlideComponent({ item, index, current }: SlideProps) {
  const isActive = index === current;

  return (
    <div
      className={`
        absolute inset-0 transition-opacity duration-700 ease-in-out
        ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}
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
          priority={index === 0}
          loading={index === 0 ? 'eager' : 'lazy'}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/40 to-indigo-600/80" />
      </div>

      <div className="relative text-center z-10 p-4">
        <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-2">{item.title}</h2>
        <p className="text-white/70 text-sm sm:text-base md:text-lg mb-6">{item.summary}</p>
        <Link href={`/${item.section}/${item.slug}`}>
          <Button
            variant="secondary"
            className="hover:bg-white"
            aria-label={`Read more about ${item.title}`}
          >
            Read More
          </Button>
        </Link>
      </div>
    </div>
  );
}

const Slide = React.memo(SlideComponent);

export default Slide;

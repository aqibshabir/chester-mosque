import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface SubPagesProps {
  subPages: { title: string; summary: string; image: string; slug: string }[];
}

function SubPages({ subPages }: SubPagesProps) {
  return (
    <div className="mx-4">
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-10 mb-20">
        {subPages.map((item) => (
          <Link
            key={item.title}
            href={`/events/${item.slug}`}
            className="relative w-[350px] sm:w-[300px] lg:w-[385px] h-[200px] sm:h-[400px] lg:h-[600] rounded-2xl overflow-hidden group shadow-lg"
          >
            <Image
              src={urlFor(item.image).auto('format').url()}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition duration-300" />
            <div className="absolute top-0 p-6 text-white">
              <p className="text-base sm:text-lg mb-0.5 sm:mb-2 font-light">{item.title}</p>
              <p className="text-xl sm:text-2xl font-semibold leading-snug">{item.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SubPages;

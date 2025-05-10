import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCircle } from 'react-icons/fa';

interface LearnProps {
  subPages: { title: string; summary: string; image: string; slug: string }[];
}

function Learn({ subPages }: LearnProps) {
  return (
    <div className="mx-4">
      <h3 className="border border-black/80 whitespace-nowrap px-2 rounded-full flex gap-1.5 items-center w-fit mb-12">
        <FaCircle className="animate-pulse w-2 text-indigo-600" />
        Learn more
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-10 mb-20">
        {subPages.map((item) => (
          <Link
            key={item.title}
            href={`/about/${item.slug}`}
            className="relative w-[300px] lg:w-[385px] h-[400px] lg:h-[600] rounded-2xl overflow-hidden group shadow-lg"
          >
            <Image
              src={urlFor(item.image).auto('format').url()}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition duration-300" />
            <div className="absolute top-0 p-6 text-white">
              <p className="text-base md:text-lg mb-2 font-light">{item.title}</p>
              <p className="text-xl md:text-2xl font-semibold leading-snug">{item.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Learn;

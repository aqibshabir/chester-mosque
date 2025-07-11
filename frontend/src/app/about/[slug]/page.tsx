import { urlFor } from '@/lib/sanity';
import { sanityFetch } from '@/sanity/sanityFetch';
import { defineQuery, PortableText, PortableTextBlock, PortableTextComponents } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaCircle } from 'react-icons/fa';

interface AboutSubPageProps {
  params: Promise<{ slug: string }>;
}

type SubPageType = {
  _updatedAt: string;
  title: string;
  readTime: number;
  content: PortableTextBlock[];
  image: string;
};

const components: PortableTextComponents = {
  block: {
    h3: ({ children }) => (
      <h3 className="text-2xl md:text-4xl font-semibold mt-16 mb-6 [&>strong]:font-semibold">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg md:text-xl font-semibold mt-2 mb-1 [&>strong]:font-semibold">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-base md:text-lg leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="text-base md:text-lg border-l-4 border-gray-300 pl-4 italic text-black/70 [&>strong]:font-semibold [&+p]:mt-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-base md:text-lg pl-1 [&>strong]:font-semibold my-4">{children}</li>
    ),
    number: ({ children }) => (
      <li className="text-base md:text-lg pl-1 [&>strong]:font-semibold my-4">{children}</li>
    ),
  },
  marks: {
    link: ({ value, children }) => (
      <Link
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-600  visited:text-purple-700 hover:underline"
      >
        {children}
      </Link>
    ),
  },
};

const subPageQuery = defineQuery(
  '*[_type == "aboutSubPageType" && slug.current == $slug][0]{title, content, readTime, "image": image.asset._ref, _updatedAt}'
);

export default async function AboutSubPage({ params }: AboutSubPageProps) {
  const { slug } = await params;
  const about = await sanityFetch<SubPageType>(subPageQuery, { slug });

  if (!about) return notFound();

  const date = new Date(about._updatedAt).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="max-w-[1250px] md:mx-4  xl:mx-auto md:py-4 mb-20">
      <div className="relative w-full aspect-[2/1] md:rounded-md overflow-hidden mb-8">
        <Image
          src={urlFor(about.image).auto('format').url()}
          alt={about.title}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>
      <div className="mx-4 md:mx-0">
        <div className="flex items-center text-black/60 text-sm md:text-base">
          <p className="ml-0.5 md:ml-1">Published at: {date}</p>
          <FaCircle className="w-1 mx-2" />
          <p>{about.readTime} min read</p>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">{about.title}</h2>

        <div className="prose prose-lg max-w-none">
          <PortableText value={about.content} components={components} />
        </div>
      </div>
    </article>
  );
}

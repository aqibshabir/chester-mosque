import { sanityFetch } from '@/sanity/live';
import { defineQuery } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';

interface AboutSubPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugQuery = defineQuery('*[_type == "aboutSubPageType"]{"slug":slug.current}');
  const { data } = await sanityFetch({ query: slugQuery, perspective: 'published' });

  return data;
}

const subPageQuery = defineQuery(
  '*[_type == "aboutSubPageType" && slug.current == $slug][0]{title, content}'
);

export default async function AboutSubPage({ params }: AboutSubPageProps) {
  const slug = params;
  const { data } = await sanityFetch({ query: subPageQuery, params: slug });

  if (!data) {
    return notFound();
  }

  return (
    <div className="mt-4 m-2 h-[800px]">
      <h2 className="text-4xl mb-4">{data.title}</h2>
      <PortableText value={data.content} />
    </div>
  );
}

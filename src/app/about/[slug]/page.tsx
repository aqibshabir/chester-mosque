import { sanityFetch } from '@/sanity/sanityFetch';
import { defineQuery, PortableText } from 'next-sanity';
import { notFound } from 'next/navigation';

interface AboutSubPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugQuery = defineQuery('*[_type == "aboutSubPageType"]{"slug":slug.current}');
  const data = await sanityFetch<string[]>(slugQuery);

  return data;
}

const subPageQuery = defineQuery(
  '*[_type == "aboutSubPageType" && slug.current == $slug][0]{title, content}'
);

export default async function AboutSubPage({ params }: AboutSubPageProps) {
  const { slug } = await params;
  const about = await sanityFetch<{ title: string; content: any }>(subPageQuery, { slug });

  if (!about) {
    return notFound();
  }

  return (
    <div className="mt-4 m-2 h-[800px]">
      <h2 className="text-4xl mb-4">{about.title}</h2>
      <PortableText value={about.content} />
    </div>
  );
}

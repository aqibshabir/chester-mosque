import { sanityFetch } from '@/sanity/sanityFetch';
import { defineQuery, PortableText } from 'next-sanity';
import { notFound } from 'next/navigation';

interface ServicesSubPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugQuery = defineQuery('*[_type == "servicesSubPageType"]{"slug": slug.current}');
  const data = await sanityFetch<string[]>(slugQuery);

  return data;
}
const subPageQuery = defineQuery(
  '*[_type == "servicesSubPageType" && slug.current == $slug][0]{title, content}'
);

export default async function ServicesSubPage({ params }: ServicesSubPageProps) {
  const { slug } = await params;
  const services = await sanityFetch<{ title: string; content: any }>(subPageQuery, { slug });

  if (!services) {
    return notFound();
  }

  return (
    <div className="mt-4 m-2 h-[800px]">
      <h2 className="text-4xl mb-4">{services.title}</h2>
      <PortableText value={services.content} />
    </div>
  );
}

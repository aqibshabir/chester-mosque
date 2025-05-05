import { sanityFetch } from '@/sanity/sanityFetch';
import { defineQuery, PortableText } from 'next-sanity';
import { notFound } from 'next/navigation';

interface EventsSubPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugQuery = defineQuery('*[_type == "eventsSubPageType"]{"slug": slug.current}');
  const data = await sanityFetch<string[]>(slugQuery);

  return data;
}
const subPageQuery = defineQuery(
  '*[_type == "eventsSubPageType" && slug.current == $slug][0]{title, content}'
);

export default async function EventsSubPage({ params }: EventsSubPageProps) {
  const { slug } = await params;
  const events = await sanityFetch<{ title: string; content: any }>(subPageQuery, { slug });

  if (!events) {
    return notFound();
  }

  return (
    <div className="mt-4 m-2 h-[800px]">
      <h2 className="text-4xl mb-4">{events.title}</h2>
      <PortableText value={events.content} />
    </div>
  );
}

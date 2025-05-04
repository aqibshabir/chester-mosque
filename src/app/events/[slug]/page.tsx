import { sanityFetch } from '@/sanity/live';
import { defineQuery, PortableText } from 'next-sanity';
import { notFound } from 'next/navigation';

interface EventsSubPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugQuery = defineQuery('*[_type == "eventsSubPageType"]{"slug": slug.current}');
  const { data } = await sanityFetch({ query: slugQuery, perspective: 'published' });

  return data;
}
const subPageQuery = defineQuery(
  '*[_type == "eventsSubPageType" && slug.current == $slug][0]{title, content}'
);

export default async function EventsSubPage({ params }: EventsSubPageProps) {
  const slug = params;
  const { data: events } = await sanityFetch({ query: subPageQuery, params: slug });

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

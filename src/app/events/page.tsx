import { defineQuery, PortableText } from 'next-sanity';
import { sanityFetch } from '@/sanity/sanityFetch';
import { urlFor } from '../../lib/sanity';
import Image from 'next/image';
import type { PortableTextBlock } from 'sanity';

const mainEventsQuery = defineQuery(
  '*[_type == "eventsMainPageType"]{title, content, "image": image.asset->url, subPages[]->{title, summary, "slug": slug.current}}'
);

type EventsMainPageType = {
  title: string;
  content: PortableTextBlock[];
  image: string;
  subPages: { title: string; summary: string; slug: string }[];
};

export default async function Events() {
  const data = await sanityFetch<EventsMainPageType[]>(mainEventsQuery);
  const events = data[0];
  const subPages: { title: string; summary: string; slug: string }[] = events.subPages;

  return (
    <div className="h-full">
      <div className="max-w-[1280px] mx-auto">
        <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] xl:rounded-2xl xl:my-6 overflow-hidden">
          <Image
            src={urlFor(events.image).auto('format').url()}
            alt="events-image"
            fill
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>
        <h2 className="text-4xl mb-4">{events.title}</h2>
        <PortableText value={events.content} />
        <h3>More Information:</h3>
        <div className="flex items-center flex-wrap">
          {subPages.map((item) => (
            <a key={item.title} className="m-4 border rounded-xl p-6" href={`/events/${item.slug}`}>
              <p className="text-xl">{item.title}:</p>
              <p className="text-sm">{item.summary}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

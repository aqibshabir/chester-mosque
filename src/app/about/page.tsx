import { defineQuery, PortableText } from 'next-sanity';
import { sanityFetch } from '@/sanity/sanityFetch';
import { urlFor } from '../../lib/sanity';
import Image from 'next/image';
import type { PortableTextBlock } from 'sanity';

interface AboutMainPageType {
  title: string;
  content: PortableTextBlock[];
  image: string;
  subPages: { title: string; summary: string; slug: string }[];
}

const mainAboutQuery = defineQuery(
  '*[_type == "aboutMainPageType"]{title, content, "image": image.asset->url, subPages[]->{title, summary, "slug": slug.current}}'
);

export default async function About() {
  const data = await sanityFetch<AboutMainPageType[]>(mainAboutQuery);
  const about = data[0];
  const subPages: { title: string; summary: string; slug: string }[] = about.subPages;

  return (
    <div className="h-full">
      <div className="max-w-[1280px] mx-auto">
        <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] xl:rounded-2xl xl:my-6 overflow-hidden">
          <Image
            src={urlFor(about.image).auto('format').url()}
            alt="about-image"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <h2 className="text-4xl mb-4">{about.title}</h2>
        <PortableText value={about.content} />
        <h3>More Information:</h3>
        <div className="flex items-center flex-wrap">
          {subPages.map((item) => (
            <a key={item.title} className="m-4 border rounded-xl p-6" href={`/about/${item.slug}`}>
              <p className="text-xl">{item.title}:</p>
              <p className="text-sm">{item.summary}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

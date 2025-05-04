import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/live';
import { PortableText } from '@portabletext/react';

const mainAboutQuery = defineQuery(
  '*[_type == "aboutMainPageType"]{title, content, subPages[]->{title, summary, "slug": slug.current}}'
);

export default async function About() {
  const { data } = await sanityFetch({ query: mainAboutQuery });
  const about = data[0];
  const subPages: { title: string; summary: string; slug: string }[] = about.subPages;

  return (
    <div className="mt-4 m-2 h-[800px]">
      <h2 className="text-4xl mb-4">{about.title}</h2>
      <PortableText value={about.content} />
      <h3>More Information:</h3>
      <div className="flex justify-between items-center">
        {subPages.map((item) => (
          <a key={item.title} className="m-4 border rounded-xl p-6" href={`/about/${item.slug}`}>
            <p className="text-xl">{item.title}:</p>
            <p className="text-sm">{item.summary}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

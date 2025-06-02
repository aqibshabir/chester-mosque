import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/sanityFetch';
import Hero from './components/hero';
import Link from 'next/link';

type UpdatesMainPageType = {
  title: string;
  introText: string;
  subPages: {
    _id: string;
    title: string;
    summary: string;
    slug: string;
    publishedAt: string;
    image: string;
  }[];
};

const mainUpdatesQuery = defineQuery(
  '*[_type == "updateMainPageType"][0]{title,introText,"subPages": subPages[]-> | order(publishedAt desc){_id,title,summary,"slug": slug.current,publishedAt,"image": image.asset._ref,}}'
);

export default async function UpdatesPage() {
  const updates = await sanityFetch<UpdatesMainPageType>(mainUpdatesQuery);
  const subPages = updates.subPages;

  return (
    <div>
      <Hero heading={updates.title} introText={updates.introText} />
      <div className="max-w-7xl mx-auto">
        {subPages.map((subPage) => (
          <Link key={subPage._id} href={`/updates/${subPage.slug}`}>
            <p>{subPage.title}</p>
            <p>{subPage.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

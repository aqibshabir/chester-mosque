import { Carousel, Card } from '../../components/ui/card-carousel';
import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/sanityFetch';

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
  '*[_type == "updateMainPageType"][0]{title,introText,"subPages": subPages[]-> | order(publishedAt desc)[0...4]{_id,title,summary,"slug": slug.current,publishedAt,"image": image.asset._ref,}}'
);

export default async function Updates() {
  const updates = await sanityFetch<UpdatesMainPageType>(mainUpdatesQuery);
  const subPages = updates.subPages;

  const items = subPages.map((page, index) => (
    <Card
      key={page._id}
      index={index}
      href={`/updates/${page.slug}`}
      card={{
        src: page.image,
        title: page.title,
        category: new Date(page.publishedAt).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }),
      }}
    />
  ));

  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="flex flex-col justify-center items-start gap-4 md:gap-8 mx-4 xl:mx-0">
        <h3 className="bg-indigo-600 text-white px-4 py-1 rounded-full font-semibold">
          {updates.title}
        </h3>
        <p className="mb-12 md:mb-18 font-semibold text-xl md:text-4xl flex flex-col">
          {updates.introText}
        </p>
      </div>
      <Carousel items={items} />
    </div>
  );
}

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
    <div className="my-10 mx-4">
      <h3 className="text-4xl text-center font-semibold mb-4">{updates.title}</h3>
      <p className="text-center text-sm sm:text-base text-black/70">{updates.introText}</p>
      <Carousel items={items} />
    </div>
  );
}

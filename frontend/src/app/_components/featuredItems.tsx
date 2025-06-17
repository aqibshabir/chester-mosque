import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/sanityFetch';
import FeaturedCarousel from '@/components/ui/featured-carousel';

interface featuredProps {
  featuredItems: {
    title: string;
    section: string;
    slug: string;
    image: string;
    summary: string;
  }[];
}

const featuredItemsQuery = defineQuery(
  '*[_type == "homeMainPageType"][0]{featuredItems[]->{title,"section": string::split(_type, "SubPageType")[0], "slug": slug.current, "image": image.asset._ref, summary}}'
);

export default async function FeaturedItems() {
  const { featuredItems } = await sanityFetch<featuredProps>(featuredItemsQuery);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-full mt-6 mx-4 sm:mx-6 xl:mx-2 2xl:mx-0 max-w-7xl h-[80vh] xl:max-h-[40rem]">
          <FeaturedCarousel items={featuredItems} />
        </div>
      </div>
    </>
  );
}

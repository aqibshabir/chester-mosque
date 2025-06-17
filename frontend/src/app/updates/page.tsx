import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/sanityFetch';
import Hero from './components/hero';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';

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
  '*[_type == "updateMainPageType"][0]{title,introText,"subPages": subPages[]-> | order(publishedAt desc){_id,title,summary,"slug": slug.current,publishedAt,"image": image.asset._ref}}'
);

export default async function UpdatesPage() {
  const updates = await sanityFetch<UpdatesMainPageType>(mainUpdatesQuery);
  const subPages = updates.subPages;

  return (
    <div className="">
      <Hero heading={updates.title} introText={updates.introText} />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-10 mb-30 mx-2">
          {subPages.map((subPage) => (
            <Link
              className="relative w-[300px] md:w-[360px] h-[200px] md:h-[300px] rounded-2xl overflow-hidden group shadow-lg"
              key={subPage._id}
              href={`/updates/${subPage.slug}`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/50 to-indigo-600/70 delay-200 z-18" />
              <Image
                src={urlFor(subPage.image).auto('format').url()}
                alt={subPage.title}
                fill
                className="object-cover group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition duration-300" />
              <div className="absolute top-0 p-6 text-white z-19">
                <p className="text-base md:text-lg mb-2 font-light">
                  {new Date(subPage.publishedAt).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </p>
                <p className="text-xl md:text-3xl font-semibold leading-snug mb-6">
                  {subPage.title}
                </p>
                <p className="flex items-center gap-1.5 font-semibold">
                  Read more
                  <FaArrowRight className="group-hover:translate-x-1 transition-all delay-200" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

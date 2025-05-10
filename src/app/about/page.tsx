import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/sanityFetch';
import Hero from './components/hero';
import Mission from './components/mission';
import Quote from './components/quote';
import Values from './components/values';
import FAQ from './components/faq';
import Timeline from '@/app/about/components/timeline';
import { FaCircle } from 'react-icons/fa';

interface AboutMainPageType {
  title: string;
  missionStatement: { mission: string; description: string }[];
  values: { title: string; icon: string; description: string }[];
  timeline: { date: string; title: string; event: string }[];
  faq: { question: string; answer: string }[];
  subPages: { title: string; summary: string; slug: string }[];
}

const mainAboutQuery = defineQuery(
  '*[_type == "aboutMainPageType"]{title, missionStatement[]{mission, description}, values[]{title, icon, description}, timeline[]{date, title, event}, faq[]{question, answer}, subPages[]->{title, summary, "slug": slug.current}}'
);

export default async function About() {
  const start = Date.now();
  const data = await sanityFetch<AboutMainPageType[]>(mainAboutQuery);
  const about = data[0];
  const subPages: { title: string; summary: string; slug: string }[] = about.subPages;

  return (
    <>
      <Hero heading={about.title} />
      <div className="max-w-[1280px] mx-auto">
        <Mission
          mission={about.missionStatement[0].mission}
          description={about.missionStatement[0].description}
        />
        <Quote />
        <Values values={about.values} />
        <Timeline events={about.timeline} />
        <FAQ faq={about.faq} />

        <div className="mx-4">
          <h3 className="border border-black/80 whitespace-nowrap px-2 rounded-full flex gap-1.5 items-center w-fit mb-12">
            <FaCircle className="animate-pulse w-2 text-indigo-600" />
            Learn more
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-10 mb-20">
            {subPages.map((item) => (
              <a
                key={item.title}
                className="border rounded-2xl w-[300px] lg:w-[385px] h-100 p-4 group"
                href={`/about/${item.slug}`}
              >
                <p className="text-base mb-2">{item.title}</p>
                <p className="text-3xl w-4/5">{item.summary}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

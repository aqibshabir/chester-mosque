import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/sanityFetch';
import Hero from './components/hero';
import Mission from './components/mission';
import Quote from './components/quote';
import Values from './components/values';
import FAQ from './components/faq';
import Timeline from '@/app/about/components/timeline';

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

        <div className="">
          {subPages.map((item) => (
            <a key={item.title} className="" href={`/about/${item.slug}`}>
              <p className="">{item.title}:</p>
              <p className="">{item.summary}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

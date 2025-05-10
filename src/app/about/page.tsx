import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/sanityFetch';
import Hero from './components/hero';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Mission from './components/mission';
import Quote from './components/quote';
import Values from './components/values';

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
    <div className="">
      <Hero heading={about.title} />
      <Mission
        mission={about.missionStatement[0].mission}
        description={about.missionStatement[0].description}
      />
      <Quote />
      <Values values={about.values} />

      {/* 
      <div className="">
        <h3>Timeline</h3>
        {about.timeline.map((item) => (
          <div key={item.title}>
            <p>{item.date}</p>
            <p>{item.title}</p>
            <p>{item.event}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>FAQs</h3>
        <Accordion type="single" collapsible>
          {about.faq.map((item, index) => {
            return (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger className="text-xl">{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
      <div className="">
        {subPages.map((item) => (
          <a key={item.title} className="" href={`/about/${item.slug}`}>
            <p className="">{item.title}:</p>
            <p className="">{item.summary}</p>
          </a>
        ))}
      </div> */}
    </div>
  );
}

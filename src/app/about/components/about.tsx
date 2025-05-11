'use client';
import { useRef } from 'react';

import Hero from './hero';
import Mission from './mission';
import Values from './values';
import Timeline from './timeline';
import FAQ from './faq';
import Learn from './learn';
import Quote from './quote';

interface AboutPageData {
  title: string;
  missionStatement: { mission: string; description: string }[];
  values: { title: string; icon: string; description: string }[];
  timeline: { date: string; title: string; event: string }[];
  faq: { question: string; answer: string }[];
  subPages: { title: string; summary: string; image: string; slug: string }[];
}

interface AboutProps {
  about: AboutPageData;
}

export default function About({ about }: AboutProps) {
  const ref = useRef<HTMLDivElement>(null);
  const subPages: { title: string; summary: string; image: string; slug: string }[] =
    about.subPages;
  const scrollToLearn = () => {
    if (ref.current) {
      const offset = 100;
      const top = ref.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero heading={about.title} onScrollClick={scrollToLearn} />
      <div className="max-w-[1280px] mx-auto">
        <Mission
          mission={about.missionStatement[0].mission}
          description={about.missionStatement[0].description}
        />
        <Timeline events={about.timeline} />
        <Quote />
        <Values values={about.values} />
        <FAQ faq={about.faq} />
        <div ref={ref}>
          <Learn subPages={subPages} />
        </div>
      </div>
    </>
  );
}

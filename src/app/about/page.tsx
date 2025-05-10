import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/sanityFetch';

import About from './components/about';

interface AboutMainPageType {
  title: string;
  missionStatement: { mission: string; description: string }[];
  values: { title: string; icon: string; description: string }[];
  timeline: { date: string; title: string; event: string }[];
  faq: { question: string; answer: string }[];
  subPages: { title: string; summary: string; image: string; slug: string }[];
}

const mainAboutQuery = defineQuery(
  '*[_type == "aboutMainPageType"]{title, missionStatement[]{mission, description}, values[]{title, icon, description}, timeline[]{date, title, event}, faq[]{question, answer}, subPages[]->{title, summary, "image": image.asset._ref, "slug": slug.current}}'
);

export default async function Page() {
  const data = await sanityFetch<AboutMainPageType[]>(mainAboutQuery);
  const about = data[0];

  return <About about={about} />;
}

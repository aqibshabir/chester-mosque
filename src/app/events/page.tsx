import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/sanityFetch';

import Event from './components/event';

type EventsMainPageType = {
  title: string;
  subPages: { title: string; summary: string; image: string; slug: string }[];
};

const mainEventsQuery = defineQuery(
  '*[_type == "eventsMainPageType"]{title, subPages[]->{title, summary, image, "slug": slug.current}}'
);

export default async function Events() {
  const data = await sanityFetch<EventsMainPageType[]>(mainEventsQuery);
  const events = data[0];

  return <Event events={events} />;
}

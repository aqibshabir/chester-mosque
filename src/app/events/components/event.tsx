'use client';
import Hero from './hero';
import SubPages from './subPages';

interface EventPageData {
  title: string;
  subPages: { title: string; summary: string; image: string; slug: string }[];
}

interface EventProps {
  events: EventPageData;
}

export default function Event({ events }: EventProps) {
  const subPages: { title: string; summary: string; image: string; slug: string }[] =
    events.subPages;

  return (
    <>
      <Hero heading={events.title} />
      <div className="max-w-[1280px] mx-auto">
        <SubPages subPages={subPages} />
      </div>
    </>
  );
}

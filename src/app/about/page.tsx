import { defineQuery, PortableText } from 'next-sanity';
import { sanityFetch } from '@/sanity/sanityFetch';
import { urlFor } from '../../lib/sanity';
import Image from 'next/image';
import type { PortableTextBlock } from 'sanity';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface AboutMainPageType {
  title: string;
  content: PortableTextBlock[];
  image: string;
  faq: { question: string; answer: string }[];
  subPages: { title: string; summary: string; slug: string }[];
}

const mainAboutQuery = defineQuery(
  '*[_type == "aboutMainPageType"]{title, content, faq[]{question, answer}, "image": image.asset->url, subPages[]->{title, summary, "slug": slug.current}}'
);

export default async function About() {
  const data = await sanityFetch<AboutMainPageType[]>(mainAboutQuery);
  const about = data[0];
  const subPages: { title: string; summary: string; slug: string }[] = about.subPages;

  return (
    <div className="h-full">
      <div className="max-w-[1280px] mx-auto">
        <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] xl:rounded-2xl xl:my-6 overflow-hidden">
          <Image
            src={urlFor(about.image).auto('format').url()}
            alt="about-image"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="mx-6 lg:max-w-[1100] lg:mx-auto">
          <h2 className="text-5xl text-center md:text-start font-semibold mt-16 md:mt-8 lg:mx-4 xl:mx-0">
            {about.title}
          </h2>
          <div className="my-8 mx-auto lg:mx-4 xl:mx-0 space-y-4 mb-4 text-center md:text-start max-w-[500px] md:max-w-none">
            <PortableText value={about.content} />
          </div>
          <div className="lg:mx-4 xl:mx-0">
            <h3 className="text-2xl font-semibold text-center md:text-start">FAQ</h3>
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
            <h3 className="text-2xl font-semibold my-12 md:my-8 text-center md:text-start">
              More Information:
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
              {subPages.map((item) => (
                <a
                  key={item.title}
                  className="mr-4 border rounded-xl p-6 w-[250px] h-[250px] md:w-[27%] lg:w-[40%]"
                  href={`/about/${item.slug}`}
                >
                  <p className="text-2xl">{item.title}:</p>
                  <p className="text-sm">{item.summary}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

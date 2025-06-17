import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/sanityFetch';

import Service from './components/service';

type ServicesMainPageType = {
  title: string;
  subPages: { title: string; summary: string; image: string; slug: string }[];
};

const mainServicesQuery = defineQuery(
  '*[_type == "servicesMainPageType"]{title, subPages[]->{title, summary, "image": image.asset._ref, "slug": slug.current}}'
);

export default async function Services() {
  const data = await sanityFetch<ServicesMainPageType[]>(mainServicesQuery);
  const services = data[0];

  return <Service services={services} />;
}

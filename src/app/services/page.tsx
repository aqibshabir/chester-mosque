import { defineQuery, PortableText } from 'next-sanity';
import { sanityFetch } from '@/sanity/sanityFetch';

const mainServicesQuery = defineQuery(
  '*[_type == "servicesMainPageType"]{title, content, subPages[]->{title, summary, "slug": slug.current}}'
);

type ServicesMainPageType = {
  title: string;
  content: any;
  subPages: { title: string; summary: string; slug: string }[];
};

export default async function Services() {
  const data = await sanityFetch<ServicesMainPageType[]>(mainServicesQuery);
  const services = data[0];
  const subPages: { title: string; summary: string; slug: string }[] = services.subPages;

  return (
    <div className="mt-4 m-2 h-[800px]">
      <h2 className="text-4xl mb-4">{services.title}</h2>
      <PortableText value={services.content} />
      <h3>More Information:</h3>
      <div className="flex items-center flex-wrap">
        {subPages.map((item) => (
          <a key={item.title} className="m-4 border rounded-xl p-6" href={`/services/${item.slug}`}>
            <p className="text-xl">{item.title}:</p>
            <p className="text-sm">{item.summary}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

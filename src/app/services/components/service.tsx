import Hero from './hero';
import SubPages from './subPages';

interface ServicePageData {
  title: string;
  subPages: { title: string; summary: string; image: string; slug: string }[];
}

interface ServiceProps {
  services: ServicePageData;
}

function Service({ services }: ServiceProps) {
  const subPages: { title: string; summary: string; image: string; slug: string }[] =
    services.subPages;

  return (
    <>
      <Hero heading={services.title} />
      <div className="max-w-[1260px] mx-auto">
        <SubPages subPages={subPages} />
      </div>
    </>
  );
}

export default Service;

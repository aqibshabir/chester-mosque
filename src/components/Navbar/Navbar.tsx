import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/sanityFetch';

import { Button } from '../ui/button';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import Link from 'next/link';

const aboutQuery = defineQuery(
  "*[_type == 'aboutSubPageType' && showInNavbar == true]|order(_createdAt asc){title,summary,'slug': slug.current}"
);

const eventsQuery = defineQuery(
  "*[_type == 'eventsSubPageType' && showInNavbar == true]|order(_createdAt asc){title,summary,'slug': slug.current}"
);

const servicesQuery = defineQuery(
  "*[_type == 'servicesSubPageType' && showInNavbar == true]|order(_createdAt asc){title,summary,'slug': slug.current}"
);

export default async function Navbar() {
  const about = await sanityFetch<{ title: string; summary: string; slug: string }[]>(aboutQuery);
  const events = await sanityFetch<{ title: string; summary: string; slug: string }[]>(eventsQuery);
  const services =
    await sanityFetch<{ title: string; summary: string; slug: string }[]>(servicesQuery);
  return (
    <>
      <nav className="sticky top-0 shadow-md p-2 bg-gradient-to-br from-white/80 to-white/50 backdrop-blur-lg z-50">
        <div className="flex items-center justify-between">
          <div className="md:hidden" aria-hidden="true"></div>
          <a
            href="/"
            className="flex items-center ml-1 hover:scale-101 ease-in-out transition-transform"
          >
            <img className="w-[50px] md:w-[38px]" src="/logo.png" alt="logo" />
            <h1 className="text-2xl md:text-lg lg:text-xl text-indigo-600/90 ml-3.5 md:ml-2.5 mr-1 flex flex-col leading-5.5 md:leading-4.5 font-medium">
              Chester Mosque
              <span className="text-black/60 font-extralight">& Islamic Centre</span>
            </h1>
          </a>
          <div>
            <DesktopNav about={about} events={events} services={services} />
            <MobileNav />
          </div>
          <div className="hidden md:flex gap-2">
            <Link href="/contact">
              <Button variant="ghost">Contact</Button>
            </Link>
            <Link href="/donate">
              <Button className="group bg-indigo-600 hover:bg-indigo-600/95 gap-1">
                Donate
                <MdOutlineKeyboardArrowRight className="group-hover:translate-x-1 ease-in-out transition-all" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

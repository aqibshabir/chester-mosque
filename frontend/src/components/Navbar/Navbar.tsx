import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/sanityFetch';

import { Button } from '../ui/button';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import Link from 'next/link';
import Announcements from './Announcements';
import Image from 'next/image';

const navQuery = defineQuery(`{
  "home": *[_type == 'homeMainPageType' && _id == 'homeMainPage']{announcement, announcementStart, announcementEnd},
  "about": *[_type == 'aboutSubPageType' && showInNavbar == true]|order(_createdAt asc){title,summary,'slug': slug.current},
  "events": *[_type == 'eventsSubPageType' && showInNavbar == true]|order(_createdAt asc){title,summary,'slug': slug.current},
  "services": *[_type == 'servicesSubPageType' && showInNavbar == true]|order(_createdAt asc){title,summary,'slug': slug.current}
}`);

export const dynamic = 'force-static';

export default async function Navbar() {
  const navData = await sanityFetch<{
    home: { announcement: string; announcementStart: string; announcementEnd: string }[];
    about: { title: string; summary: string; slug: string }[];
    events: { title: string; summary: string; slug: string }[];
    services: { title: string; summary: string; slug: string }[];
  }>(navQuery);

  const { home, about, events, services } = navData;

  return (
    <>
      <Announcements home={home} />
      <nav className="sticky top-0 z-20 border shadow-lg p-2 bg-gradient-to-br from-white/80 to-white/50 navbar-blur backdrop-blur-lg">
        <div className="flex items-center justify-between">
          <div className="md:hidden" aria-hidden="true"></div>
          <Link
            href="/"
            className="flex items-center ml-1 hover:scale-102 ease-in-out transition-all duration-20"
          >
            <Image
              width={50}
              height={50}
              src="/logo.png"
              alt="logo"
              priority
              className="w-[50px] md:w-[38px]"
            />
            <h1 className="text-2xl md:text-base lg:text-xl text-indigo-600/90 ml-2 md:ml-2.5 mr-1 flex flex-col leading-5.5 md:leading-4.5 font-medium">
              Chester Mosque
              <span className="text-black/60 font-extralight">& Islamic Centre</span>
            </h1>
          </Link>
          <div>
            <DesktopNav about={about} events={events} services={services} />
            <MobileNav />
          </div>
          <div className="hidden md:flex gap-2 mr-2">
            <Link href="/contact">
              <Button variant="ghost" className="text-base">
                Contact
              </Button>
            </Link>
            <Link href="/donate">
              <Button className="group bg-indigo-600 hover:bg-indigo-600/95 gap-1 text-base">
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

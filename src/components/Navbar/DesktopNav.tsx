'use client';
import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

interface SubPages {
  title: string;
  summary: string;
  slug: string;
}

interface DesktopNavProps {
  about: SubPages[];
}

function DesktopNav({ about }: DesktopNavProps) {
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const onMenuEnter = (index: number) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    setHoveredMenu(index);
  };

  const onMenuLeave = (subMenu = false) => {
    if (subMenu) {
      setHoveredMenu(null);
    } else {
      menuTimeoutRef.current = setTimeout(() => {
        setHoveredMenu(null);
      }, 300);
    }
  };

  return (
    <div className="hidden md:flex">
      <ul className="flex gap-6 lg:gap-10 mx-2">
        <li onMouseEnter={() => onMenuEnter(0)} onMouseLeave={() => onMenuLeave()}>
          <a
            className="hover:text-gray-600 flex items-center text-sm lg:text-md font-medium"
            href="/about"
          >
            About
            {hoveredMenu === 0 ? (
              <MdOutlineKeyboardArrowUp className="ml-1" />
            ) : (
              <MdOutlineKeyboardArrowDown className="ml-1" />
            )}
          </a>
          <AnimatePresence>
            {hoveredMenu === 0 && (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.75 }}
                  transition={{
                    duration: 0.1,
                    scale: { type: 'spring', visualDuration: 0.2, bounce: 0.2 },
                    ease: 'easeInOut',
                  }}
                  onMouseEnter={() => onMenuEnter(0)}
                  onMouseLeave={() => onMenuLeave(true)}
                  className="absolute top-14 left-1/2 -translate-x-[46%] w-[500px] h-[260px] p-2 shadow-sm bg-gradient-to-br from-white-70 to-white/50 backdrop-blur-lg"
                >
                  <div className="flex h-full w-full">
                    <a
                      href="/about"
                      className="bg-linear-to-br to-indigo-600 from-indigo-600/60 hover:to-indigo-600 hover:from-indigo-600/55 m-2 p-2 w-[200px] flex flex-col justify-center items-center gap-1 rounded-xl text-white hover:scale-102 transition-transform duration-300 ease-in-out shadow-sm"
                    >
                      <img className="mb-2 w-[60px]" src="/white_logo.png" alt="logo" />
                      <p className="font-semibold">About The Mosque</p>
                      <p className="text-sm text-gray-200 text-center">
                        Key details about our mosque, our team and FAQs.
                      </p>
                    </a>
                    <div className="flex flex-col h-full justify-center m-1 gap-2">
                      {about.map((item) => (
                        <a
                          key={item.title}
                          href={`/about${item.slug}`}
                          className="hover:bg-black/5 rounded-sm w-[250px] p-2 flex flex-col hover:scale-102 transition-transform duration-300"
                        >
                          <p className="font-semibold">{item.title}</p>
                          <p className="text-sm text-gray-600">{item.summary}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </li>
        <li>
          <a
            className="hover:text-gray-600 text-sm flex items-center font-medium"
            href="/timetable"
          >
            Timetable
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-600 text-sm flex items-center font-medium"
            href="/live_stream"
          >
            Live
          </a>
        </li>
        <li onMouseEnter={() => onMenuEnter(1)} onMouseLeave={() => onMenuLeave()}>
          <a className="hover:text-gray-600 flex items-center text-sm font-medium" href="/events">
            Events
            {hoveredMenu === 1 ? (
              <MdOutlineKeyboardArrowUp className="ml-1" />
            ) : (
              <MdOutlineKeyboardArrowDown className="ml-1" />
            )}
          </a>
          <AnimatePresence>
            {hoveredMenu === 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.75 }}
                transition={{
                  duration: 0.1,
                  scale: { type: 'spring', visualDuration: 0.2, bounce: 0.2 },
                  ease: 'easeInOut',
                }}
                onMouseEnter={() => onMenuEnter(1)}
                onMouseLeave={() => onMenuLeave(true)}
                className="absolute top-14 left-1/2 -translate-x-[46%] w-[500px] h-[260px] p-2 shadow-md bg-gradient-to-br from-white-70 to-white/50 backdrop-blur-lg"
              >
                <div className="flex h-full w-full justify-center items-center">
                  <div className="flex flex-col h-full justify-center m-1 gap-2">
                    <a
                      href="/events/jummah"
                      className="hover:bg-black/5 hover:scale-102 transition-transform duration-300 rounded-sm w-[230px] p-2 flex flex-col"
                    >
                      <p className="font-semibold">Jummah Prayer</p>
                      <p className="text-sm text-gray-600">
                        Weekly Friday prayer timings and topics.
                      </p>
                    </a>
                    <a
                      href="/events/diversity"
                      className="hover:bg-black/5 hover:scale-102 transition-transform duration-300 rounded-sm w-[230px] p-2"
                    >
                      <p className="font-semibold">Cultural Diversity</p>
                      <p className="text-sm text-gray-600">Celebrating unity in diversity.</p>
                    </a>
                    <a
                      href="/events/school"
                      className="hover:bg-black/5 hover:scale-102 transition-transform duration-300 rounded-sm w-[230px] p-2"
                    >
                      <p className="font-semibold">School Visits</p>
                      <p className="text-sm text-gray-600">
                        Building bridges through understanding.
                      </p>
                    </a>
                  </div>
                  <div className="flex flex-col h-full justify-center m-1 gap-2">
                    <a
                      href="/events/fundraisers"
                      className="hover:bg-black/5 hover:scale-102 transition-transform duration-300 rounded-sm w-[230px] p-2 flex flex-col"
                    >
                      <p className="font-semibold">Community Fundraisers</p>
                      <p className="text-sm text-gray-600">
                        Charity events, food drives, or mosque projects.
                      </p>
                    </a>
                    <a
                      href="/events/classes"
                      className="hover:bg-black/5 hover:scale-102 transition-transform duration-300 rounded-sm w-[230px] p-2"
                    >
                      <p className="font-semibold">Islamic Lectures & Classes</p>
                      <p className="text-sm text-gray-600">
                        Regular lectures, guest speakers, or Islamic courses.
                      </p>
                    </a>
                    <a
                      href="/events/ramadan"
                      className="hover:bg-black/5 hover:scale-102 transition-transform duration-300 rounded-sm w-[230px] p-2"
                    >
                      <p className="font-semibold">Taraweeh & Ramadan</p>
                      <p className="text-sm text-gray-600">Prayer and community iftars.</p>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </li>
        <li onMouseEnter={() => onMenuEnter(2)} onMouseLeave={() => onMenuLeave()}>
          <a className="hover:text-gray-600 flex items-center text-sm font-medium" href="/services">
            Services
            {hoveredMenu === 2 ? (
              <MdOutlineKeyboardArrowUp className="ml-1" />
            ) : (
              <MdOutlineKeyboardArrowDown className="ml-1" />
            )}
          </a>
          <AnimatePresence>
            {hoveredMenu === 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.75 }}
                transition={{
                  duration: 0.1,
                  scale: { type: 'spring', visualDuration: 0.2, bounce: 0.2 },
                  ease: 'easeInOut',
                }}
                onMouseEnter={() => onMenuEnter(2)}
                onMouseLeave={() => onMenuLeave(true)}
                className="absolute top-14 left-1/2 -translate-x-[46%] w-[500px] h-[200px] p-2 shadow-md bg-gradient-to-br from-white-70 to-white/50 backdrop-blur-lg"
              >
                <div className="flex h-full w-full justify-center items-center">
                  <div className="flex flex-col h-full justify-start m-1 gap-2">
                    <a href="/services/nikah" className="hover:bg-black/5 rounded-sm w-[230px] p-2">
                      <p className="font-semibold">Nikah Services</p>
                      <p className="text-sm text-gray-600">
                        Conducting and registering Islamic marriages.
                      </p>
                    </a>
                    <a
                      href="/services/funeral"
                      className="hover:bg-black/5 hover:scale-102 transition-transform duration-300 rounded-sm w-[230px] p-2"
                    >
                      <p className="font-semibold">Funeral Services</p>
                      <p className="text-sm text-gray-600">
                        Janazah prayer arrangements and support.
                      </p>
                    </a>
                  </div>
                  <div className="flex flex-col h-full justify-start m-1 gap-2">
                    <a
                      href="/services/zakat"
                      className="hover:bg-black/5 hover:scale-102 transition-transform duration-300 rounded-sm w-[230px] p-2 flex flex-col"
                    >
                      <p className="font-semibold">Zakat & Charity Support</p>
                      <p className="text-sm text-gray-600">
                        Collection and distribution of charitable donations.
                      </p>
                    </a>
                    <a
                      href="/services/classes"
                      className="hover:bg-black/5 hover:scale-102 transition-transform duration-300 rounded-sm w-[230px] p-2"
                    >
                      <p className="font-semibold">Quran & Islamic Studies </p>
                      <p className="text-sm text-gray-600">
                        Madrasa classes, Quran recitation, and Tajweed lessons.
                      </p>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </li>
      </ul>
    </div>
  );
}

export default DesktopNav;

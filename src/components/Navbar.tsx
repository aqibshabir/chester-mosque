'use client';

import { useState, useRef } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { RxHamburgerMenu } from 'react-icons/rx';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

export default function Navbar() {
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
    <>
      <nav className="md:sticky top-0 p-2 bg-gradient-to-br from-white/80 to-white/50 backdrop-blur-lg">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center ml-1">
            <img className="w-[38px]" src="/logo.png" alt="logo" />
            <h1 className="text-xl text-indigo-600/90 ml-1.5 flex flex-col leading-4.5">
              Chester Mosque<span className="text-black/40">& Islamic Centre</span>
            </h1>
          </a>
          <div>
            <div className="hidden md:flex">
              <ul className="flex gap-6 lg:gap-10">
                <li onMouseEnter={() => onMenuEnter(0)} onMouseLeave={() => onMenuLeave()}>
                  <a className="hover:text-gray-600 flex items-center" href="/about">
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
                          className="absolute top-14 left-1/2 -translate-x-[40%] w-[500px] h-[260px] p-2 shadow-sm bg-gradient-to-br from-white-70 to-white/50 backdrop-blur-lg"
                        >
                          <div className="flex h-full w-full">
                            <a
                              href="/about"
                              className="bg-white/90 hover:bg-white m-2 p-2 w-[200px] flex flex-col justify-center items-center gap-1 rounded-2xl border border-0.5"
                            >
                              <img src="/logo.png" alt="logo" width={50} />
                              <p className="font-semibold">About The Mosque</p>
                              <p className="text-sm text-gray-400 text-center">
                                Learn key details on the mosque, our team and FAQs.
                              </p>
                            </a>
                            <div className="flex flex-col h-full justify-center m-1 gap-2">
                              <a
                                href="/about/staff"
                                className="hover:bg-black/5 rounded-sm w-[250px] p-2 flex flex-col"
                              >
                                <p className="font-semibold">Our Staff</p>
                                <p className="text-sm text-gray-600">Information on our staff.</p>
                              </a>
                              <a
                                href="/about/new"
                                className="hover:bg-black/5 rounded-sm w-[250px] p-2"
                              >
                                <p className="font-semibold">New To Islam</p>
                                <p className="text-sm text-gray-600">
                                  Resources for our new brothers and sisters of Islam.
                                </p>
                              </a>
                              <a
                                href="/about/visit"
                                className="hover:bg-black/5 rounded-sm w-[250px] p-2"
                              >
                                <p className="font-semibold">Visiting the Mosque</p>
                                <p className="text-sm text-gray-600">Plan your next visit</p>
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </li>
                <li>
                  <a className="hover:text-gray-600" href="/timetable">
                    Timetable
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-600" href="/live_stream">
                    Live Stream
                  </a>
                </li>
                <li onMouseEnter={() => onMenuEnter(1)} onMouseLeave={() => onMenuLeave()}>
                  <a className="hover:text-gray-600 flex items-center" href="/events">
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
                        className="absolute top-14 left-1/2 -translate-x-[40%] w-[500px] h-[260px] p-2 shadow-md bg-gradient-to-br from-white-70 to-white/50 backdrop-blur-lg"
                      >
                        <div className="flex h-full w-full justify-center items-center">
                          <div className="flex flex-col h-full justify-center m-1 gap-2">
                            <a
                              href="/events/jummah"
                              className="hover:bg-black/5 rounded-sm w-[230px] p-2 flex flex-col"
                            >
                              <p className="font-semibold">Jummah Prayer</p>
                              <p className="text-sm text-gray-600">
                                Weekly Friday prayer timings and topics.
                              </p>
                            </a>
                            <a
                              href="/events/diversity"
                              className="hover:bg-black/5 rounded-sm w-[230px] p-2"
                            >
                              <p className="font-semibold">Cultural Diversity</p>
                              <p className="text-sm text-gray-600">
                                Celebrating unity in diversity.
                              </p>
                            </a>
                            <a
                              href="/events/school"
                              className="hover:bg-black/5 rounded-sm w-[230px] p-2"
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
                              className="hover:bg-black/5 rounded-sm w-[230px] p-2 flex flex-col"
                            >
                              <p className="font-semibold">Community Fundraisers</p>
                              <p className="text-sm text-gray-600">
                                Charity events, food drives, or mosque projects.
                              </p>
                            </a>
                            <a
                              href="/events/classes"
                              className="hover:bg-black/5 rounded-sm w-[230px] p-2"
                            >
                              <p className="font-semibold">Islamic Lectures & Classes</p>
                              <p className="text-sm text-gray-600">
                                Regular lectures, guest speakers, or Islamic courses.
                              </p>
                            </a>
                            <a
                              href="/events/ramadan"
                              className="hover:bg-black/5 rounded-sm w-[230px] p-2"
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
                  <a className="hover:text-gray-600 flex items-center" href="/services">
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
                        className="absolute top-14 left-1/2 -translate-x-[40%] w-[500px] h-[200px] p-2 shadow-md bg-gradient-to-br from-white-70 to-white/50 backdrop-blur-lg"
                      >
                        <div className="flex h-full w-full justify-center items-center">
                          <div className="flex flex-col h-full justify-start m-1 gap-2">
                            <a
                              href="/services/nikah"
                              className="hover:bg-black/5 rounded-sm w-[230px] p-2"
                            >
                              <p className="font-semibold">Nikah Services</p>
                              <p className="text-sm text-gray-600">
                                Conducting and registering Islamic marriages.
                              </p>
                            </a>
                            <a
                              href="/services/funeral"
                              className="hover:bg-black/5 rounded-sm w-[230px] p-2"
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
                              className="hover:bg-black/5 rounded-sm w-[230px] p-2 flex flex-col"
                            >
                              <p className="font-semibold">Zakat & Charity Support</p>
                              <p className="text-sm text-gray-600">
                                Collection and distribution of charitable donations.
                              </p>
                            </a>
                            <a
                              href="/services/classes"
                              className="hover:bg-black/5 rounded-sm w-[230px] p-2"
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
            <div className="flex md:hidden">
              <RxHamburgerMenu size={30} />
            </div>
          </div>
          <div className="hidden md:flex">
            <a
              className="bg-indigo-600 text-white px-2 py-1 rounded-full hover:bg-indigo-600/80 mr-2"
              href="/contact"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

'use client';

import { useState, useRef } from 'react';

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
            <img className="" src="/logo.png" alt="logo" width={40} />
            <h1 className="text-xl text-indigo-600/90 ml-1.5 flex flex-col leading-4.5">
              Chester Mosque<span className="text-black/40">& Islamic Centre</span>
            </h1>
          </a>
          <div>
            <div className="hidden md:flex">
              <ul className="flex gap-6">
                <li onMouseEnter={() => onMenuEnter(0)} onMouseLeave={() => onMenuLeave()}>
                  <a className="hover:text-gray-600 flex items-center" href="/about">
                    About
                    {hoveredMenu === 0 ? (
                      <MdOutlineKeyboardArrowUp className="ml-1" />
                    ) : (
                      <MdOutlineKeyboardArrowDown className="ml-1" />
                    )}
                  </a>
                  {hoveredMenu === 0 && (
                    <>
                      <div
                        onMouseEnter={() => onMenuEnter(0)}
                        onMouseLeave={() => onMenuLeave(true)}
                        className="absolute top-14 left-1/2 -translate-x-[40%] w-[500px] h-[260px] p-2 shadow-md bg-gradient-to-br from-white-70 to-white/50 backdrop-blur-lg"
                      >
                        <div className="flex h-full w-full">
                          <a
                            href="/about"
                            className="bg-white/90 hover:bg-white m-2 p-2 w-[200px] flex flex-col justify-center items-center gap-1 rounded-2xl"
                          >
                            <img src="/logo.png" alt="logo" width={50} />
                            <p className="font-semibold">About The Mosque</p>
                            <p className="text-sm text-gray-400 text-center">
                              Learn key details on the mosque, our team and FAQs.
                            </p>
                          </a>
                          <div className="flex flex-col h-full m-2.5 gap-3.5">
                            <a
                              href="/about/staff"
                              className="hover:bg-black/5 rounded-sm w-[250px] p-1 flex flex-col"
                            >
                              <p className="font-semibold">Our Staff</p>
                              <p className="text-sm text-gray-600">
                                Information on our staff & volunteering oppertunities
                              </p>
                            </a>
                            <a
                              href="/about/new"
                              className="hover:bg-black/5 rounded-sm w-[250px] p-1"
                            >
                              <p className="font-semibold">New To Islam</p>
                              <p className="text-sm text-gray-600">
                                Information and resources for our new brothers and sisters
                              </p>
                            </a>
                            <a
                              href="/about/visit"
                              className="hover:bg-black/5 rounded-sm w-[250px] p-1"
                            >
                              <p className="font-semibold">Visiting the Mosque</p>
                              <p className="text-sm text-gray-600">Plan your next visit</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
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
                  {hoveredMenu === 1 && (
                    <div
                      onMouseEnter={() => onMenuEnter(1)}
                      onMouseLeave={() => onMenuLeave(true)}
                      className="absolute top-14 left-1/2 -translate-x-[40%] w-[500px] h-[260px] p-2 shadow-md bg-gradient-to-br from-white-70 to-white/50 backdrop-blur-lg"
                    >
                      events sub menu
                    </div>
                  )}
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
                  {hoveredMenu === 2 && (
                    <div
                      onMouseEnter={() => onMenuEnter(2)}
                      onMouseLeave={() => onMenuLeave(true)}
                      className="absolute top-14 left-1/2 -translate-x-[40%] w-[500px] h-[260px] p-2 shadow-md bg-gradient-to-br from-white-70 to-white/50 backdrop-blur-lg"
                    >
                      services sub menu
                    </div>
                  )}
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

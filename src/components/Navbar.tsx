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
      <nav className="bg-white/95 md:sticky top-0 p-1 pb-2 border-b border-0.5">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center ml-2">
            <img className="" src="/logo.png" alt="logo" width={30} />
            <h1 className="text-xl pl-1 text-black/80">Chester Mosque</h1>
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
                        className="absolute top-16 left-1/2 -translate-x-[40%] w-[500px] h-[250px] p-2 bg-white rounded-2xl border border-0.5"
                      >
                        about sub menu
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
                      className="absolute top-16 left-1/2 -translate-x-[40%] w-[500px] h-[250px] p-2 bg-white rounded-2xl border border-0.5"
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
                      className="absolute top-16 left-1/2 -translate-x-[40%] w-[500px] h-[250px] p-2 bg-white rounded-2xl border border-0.5"
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
              className="bg-indigo-600 text-white px-2 py-1 rounded-full hover:bg-indigo-600/80 mr-4"
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

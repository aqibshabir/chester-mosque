'use client';

import { useState } from 'react';

import { RxHamburgerMenu } from 'react-icons/rx';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

export default function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState(false);

  const onMenuEnter = () => {
    setHoveredMenu(true);
  };
  const onMenuLeave = () => {
    setHoveredMenu(false);
  };

  return (
    <nav className="bg-white/95 md:sticky top-0 p-1 pb-2 border-b border-0.5">
      <div className="flex items-center justify-between">
        <a href="" className="flex items-center ml-2">
          <img className="p-1" src="/logo.png" alt="logo" width={40} />
          <h1 className="text-xl pl-1 text-black/80">Chester Mosque</h1>
        </a>
        <div className="">
          <div className="hidden md:flex">
            <ul className="flex gap-6">
              <li onMouseEnter={onMenuEnter} onMouseLeave={onMenuLeave}>
                <a className="hover:text-gray-600 flex items-center" href="/about">
                  About
                  {hoveredMenu ? (
                    <MdOutlineKeyboardArrowUp className="ml-1" />
                  ) : (
                    <MdOutlineKeyboardArrowDown className="ml-1" />
                  )}
                </a>
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
              <li onMouseEnter={onMenuEnter} onMouseLeave={onMenuLeave}>
                <a className="hover:text-gray-600 flex items-center" href="/events">
                  Events
                  {hoveredMenu ? (
                    <MdOutlineKeyboardArrowUp className="ml-1" />
                  ) : (
                    <MdOutlineKeyboardArrowDown className="ml-1" />
                  )}
                </a>
              </li>
              <li onMouseEnter={onMenuEnter} onMouseLeave={onMenuLeave}>
                <a className="hover:text-gray-600 flex items-center" href="/services">
                  Services
                  {hoveredMenu ? (
                    <MdOutlineKeyboardArrowUp className="ml-1" />
                  ) : (
                    <MdOutlineKeyboardArrowDown className="ml-1" />
                  )}
                </a>
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
  );
}

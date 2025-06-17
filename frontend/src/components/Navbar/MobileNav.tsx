'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';
import Link from 'next/link';

function MobileNav() {
  const [menuClick, setMenuClick] = useState(false);

  useEffect(() => {
    if (menuClick) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuClick]);

  const onMenuClick = () => {
    setMenuClick(!menuClick);
  };
  return (
    <div className="flex md:hidden">
      {menuClick ? (
        <IoCloseOutline
          className="cursor-pointer hover:text-black/60 hover:scale-110 z-50"
          size={30}
          onClick={onMenuClick}
        />
      ) : (
        <RxHamburgerMenu
          className="cursor-pointer hover:text-black/60 hover:scale-110 z-50"
          size={30}
          onClick={onMenuClick}
        />
      )}
      <AnimatePresence>
        {menuClick && (
          <motion.div
            className="absolute top-16 left-0 right-0 h-[calc(100vh-64px)] bg-white z-30 p-4"
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            exit={{ opacity: 0, y: -12.5 }}
          >
            <motion.ul
              className="flex flex-col justify-center items-center text-4xl gap-10 mt-10"
              initial={{ y: -25, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              exit={{ opacity: 0, y: -12.5 }}
            >
              <li className="cursor-pointer hover:text-black/60 transition-transform duration-300 hover:scale-110">
                <Link onClick={() => setMenuClick(false)} href="/about">
                  About
                </Link>
              </li>
              <li className="cursor-pointer hover:text-black/60 transition-transform duration-300 hover:scale-110">
                <Link onClick={() => setMenuClick(false)} href="/timetable">
                  Timetable
                </Link>
              </li>
              <li className="cursor-pointer hover:text-black/60 transition-transform duration-300 hover:scale-110">
                <Link onClick={() => setMenuClick(false)} href="/events">
                  Events
                </Link>
              </li>
              <li className="cursor-pointer hover:text-black/60 transition-transform duration-300 hover:scale-110">
                <Link onClick={() => setMenuClick(false)} href="/services">
                  Services
                </Link>
              </li>
              <li className="cursor-pointer hover:text-black/60 transition-transform duration-300 hover:scale-110">
                <Link onClick={() => setMenuClick(false)} href="contact">
                  Contact
                </Link>
              </li>
              <li className="cursor-pointer hover:text-black/60 transition-transform duration-300 hover:scale-110">
                <Link onClick={() => setMenuClick(false)} href="/donate">
                  Donate
                </Link>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNav;

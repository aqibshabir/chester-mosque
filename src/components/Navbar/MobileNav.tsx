'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';

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
          className="cursor-pointer hover:text-black/60 hover:scale-110"
          size={30}
          onClick={onMenuClick}
        />
      ) : (
        <RxHamburgerMenu
          className="cursor-pointer hover:text-black/60 hover:scale-110"
          size={30}
          onClick={onMenuClick}
        />
      )}
      {menuClick && (
        <motion.div
          className="absolute top-16 left-0 right-0 h-[calc(100vh-64px)] bg-gradient-to-br from-white/50 to-white/50 backdrop-blur-lg z-50 p-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ animation: 'spring', animationDuration: 0.5, y: 0, opacity: 100 }}
        >
          <motion.ul
            className="flex flex-col justify-center items-center text-4xl gap-8 mt-10"
            initial={{ y: -100, opacity: 0 }}
            animate={{ animation: 'spring', animationDuration: 0.5, y: 0, opacity: 100 }}
          >
            <li className="cursor-pointer hover:text-black/60">About</li>
            <li className="cursor-pointer hover:text-black/60">Timetable</li>
            <li className="cursor-pointer hover:text-black/60">Live Stream</li>
            <li className="cursor-pointer hover:text-black/60">Events</li>
            <li className="cursor-pointer hover:text-black/60">Services</li>
            <li className="cursor-pointer hover:text-black/60">Contact</li>
          </motion.ul>
        </motion.div>
      )}
    </div>
  );
}

export default MobileNav;

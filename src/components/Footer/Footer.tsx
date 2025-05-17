import { Button } from '../ui/button';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-indigo-500 to-indigo-600 sm:pt-0 flex justify-center">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="mt-40 mb-20 md:my-20 flex flex-col justify-center items-center gap-4">
          <img className="w-[70px] md:w-[100px]" src="/white_logo.png" alt="logo" />
          <p className="text-white font-bold text-3xl md:text-5xl">Need help?</p>
          <Link href="/contact">
            <Button
              variant="ghost"
              className="bg-black/10 text-white hover:translate-y-0.5 ease-in-out transition-transform"
            >
              Contact us
            </Button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-4 mx-4">
          <div className="flex items-center justify-center order-2 md:order-1">
            <a href="/" className="flex items-center">
              <img className="w-[38px]" src="/white_logo.png" alt="logo" />
              <p className="text-lg text-white ml-2 mr-1 flex flex-col leading-4.5 font-medium">
                Chester Mosque
                <span className="text-white/60 font-extralight">& Islamic Centre</span>
              </p>
            </a>
          </div>
          <div className="md:order-1 mb-14 md:mb-0 flex justify-center items-center">
            <ul className="text-white grid grid-cols-1 md:grid-cols-3 font-semibold text-sm gap-x-12 gap-y-2 text-center">
              <li>
                <a href="/timetable" className="hover:text-gray-200">
                  Timetable
                </a>
              </li>
              <li>
                <a href="/events" className="hover:text-gray-200">
                  Events
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-200">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-200">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="/donate" className="hover:text-gray-200">
                  Donate
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center md:justify-between text-white/50 text-sm mb-1 mx-4">
          <p className="flex items-center group gap-1">
            &copy; Shah Jalal Jame Masjid {new Date().getFullYear()} <FaAngleRight size={10} />
            <a
              href="https://aqibshabir.com"
              className="group-hover:underline group-hover:text-white hover:cursor-pointer hover:scale-105 transition-transform ease-in-out"
            >
              Made by Aqib Shabir
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

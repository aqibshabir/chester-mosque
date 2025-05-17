import { Button } from '../ui/button';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="bg-indigo-700 sm:pt-0 flex justify-center">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="my-40 md:my-20 flex flex-col justify-center items-center">
          <p className="text-white font-bold text-3xl md:text-5xl mb-4">Here to help.</p>
          <Link href="/contact">
            <Button variant="ghost" className="bg-black/10 text-white hover:translate-y-1">
              Contact us
            </Button>
          </Link>
        </div>

        <div className="max-w-[350px] md:max-w-full flex flex-col md:flex-row md:justify-between md:items-end mb-4 mx-4">
          <div className="flex items-center justify-between order-2 md:order-1">
            <a href="/" className="flex items-center">
              <img className="w-[40px]" src="/white_logo.png" alt="logo" />
              <p className="text-lg text-white ml-2 mr-1 flex flex-col leading-4.5 font-medium">
                Chester Mosque
                <span className="text-white/60 font-extralight">& Islamic Centre</span>
              </p>
            </a>
          </div>
          <div className="md:order-1 mb-14 md:mb-0">
            <ul className="text-white grid grid-cols-2 md:grid-cols-3 font-semibold text-sm gap-x-12 gap-y-2">
              <li>
                <a href="" className="hover:text-gray-200">
                  Timetable
                </a>
              </li>
              <li>
                <a href="" className="hover:text-gray-200">
                  Events
                </a>
              </li>
              <li>
                <a href="" className="hover:text-gray-200">
                  Services
                </a>
              </li>
              <li>
                <a href="" className="hover:text-gray-200">
                  About
                </a>
              </li>
              <li>
                <a href="" className="hover:text-gray-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="" className="hover:text-gray-200">
                  Donate
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between text-white/50 text-sm mx-2 mb-1 sm:mx-4">
          <p className="flex items-center group gap-3">
            &copy; Shah Jalal Jame Masjid {new Date().getFullYear()}. <FaArrowRightLong />
            <span className="group-hover:underline group-hover:text-white hover:cursor-pointer hover:scale-105">
              Made by Aqib Shabir
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

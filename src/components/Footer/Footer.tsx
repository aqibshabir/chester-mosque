import { FaFacebookSquare } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { IoIosHeart } from 'react-icons/io';
import { Button } from '../ui/button';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-indigo-600 sm:pt-0 flex justify-center">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="my-40 md:my-20 flex flex-col justify-center items-center">
          <p className="text-white font-bold text-3xl sm:text-5xl mb-4">Here to help.</p>
          <Link href="/contact">
            <Button variant="ghost" className="bg-black/10 text-white">
              Contact us
            </Button>
          </Link>
        </div>

        <div className="max-w-[350px] mx-start">
          <ul className="text-white grid grid-cols-2 gap-1 mb-10 ml-4 font-semibold text-sm">
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

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center ml-4">
            <img className="w-[40px]" src="/white_logo.png" alt="logo" />
            <p className="text-lg text-white ml-2 mr-1 flex flex-col leading-4.5 font-medium">
              Chester Mosque
              <span className="text-white/60 font-extralight">& Islamic Centre</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

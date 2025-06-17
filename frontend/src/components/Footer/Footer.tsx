import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-indigo-500 to-indigo-600 sm:pt-0 flex justify-center">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="mt-40 mb-20 md:my-10 flex flex-col justify-center items-center gap-4 md:gap-6">
          <Image
            className="w-[70px] md:w-[120px]"
            src="/white_logo.png"
            height={400}
            width={400}
            alt="logo"
          />
          <p className="text-white font-bold text-3xl md:text-5xl">Need help?</p>
          <Link href="/contact">
            <Button
              variant="ghost"
              className="bg-black/20 text-white hover:bg-white hover:translate-y-0.5 ease-in-out transition-transform"
            >
              Contact us
            </Button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-4 mx-4">
          <div className="flex items-center justify-center order-2 md:order-1">
            <Link href="/" className="flex items-center">
              <Image
                className="w-[38px]"
                src="/white_logo.png"
                height={400}
                width={400}
                alt="logo"
              />
              <p className="text-lg text-white ml-2 mr-1 flex flex-col leading-4.5 font-medium">
                Chester Mosque
                <span className="text-white/60 font-extralight">& Islamic Centre</span>
              </p>
            </Link>
          </div>
          <div className="md:order-1 mb-14 md:mb-0 flex justify-center items-center">
            <ul className="text-white grid grid-cols-1 md:grid-cols-4 font-semibold text-sm gap-x-8 lg:gap-x-12 gap-y-2 text-center">
              <li>
                <Link
                  href="http://chester-mosque-studio.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-gray-200">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/timetable" className="hover:text-gray-200">
                  Timetable
                </Link>
              </li>
              <li>
                <Link href="/updates" className="hover:text-gray-200">
                  Updates
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-gray-200">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center md:justify-between text-white/50 text-sm mb-1 sm:mx-4">
          <p className="flex items-center group gap-1">
            &copy; Shah Jalal Jame Masjid {new Date().getFullYear()} <FaAngleRight size={10} />
            <Link
              href="https://aqibshabir.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 group-hover:underline group-hover:text-white hover:cursor-pointer hover:scale-105 transition-transform ease-in-out"
            >
              Made by Aqib Shabir
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

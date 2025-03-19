import { RxHamburgerMenu } from 'react-icons/rx';

export default function Navbar() {
  return (
    <nav className="bg-white/95 md:sticky top-0 p-2 md:pl-4 md:py-4">
      <div className="flex justify-between items-center">
        <a href="" className="flex items-center pl-2">
          <img src="/logo.png" alt="logo" width={60} />
          <h1 className="text-md md:text-xl pl-2 flex flex-col font-semibold uppercase font-stretch-condensed text-black">
            Shah Jalal Jame Masjid<span className="text-gray-400">& Chester Islamic Centre </span>
          </h1>
        </a>
        <div>
          <div className="hidden md:flex md:justify-evenly uppercase w-100 font-semibold">
            <a href="/about">About</a>
            <a href="/timetable">Timetable</a>
            <a href="/events">Events</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="flex md:hidden">
            <RxHamburgerMenu size={30} />
          </div>
        </div>
      </div>
    </nav>
  );
}

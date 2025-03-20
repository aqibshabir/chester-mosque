import { RxHamburgerMenu } from 'react-icons/rx';

export default function Navbar() {
  return (
    <nav className="bg-white/95 md:sticky top-0 p-1 border-b border-0.5">
      <div className="flex items-center justify-between">
        <a href="" className="flex items-center pl-2">
          <img className="p-1" src="/logo.png" alt="logo" width={40} />
          <h1 className="text-xl pl-1 text-black/80">Chester Mosque</h1>
        </a>
        <div className="">
          <div className="hidden md:flex">
            <ul className="flex gap-8">
              <li>
                <a className="hover:text-gray-600 hover:underline" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-gray-600 hover:underline" href="/timetable">
                  Timetable
                </a>
              </li>
              <li>
                <a className="hover:text-gray-600 hover:underline" href="/events">
                  Events
                </a>
              </li>
              <li>
                <a className="hover:text-gray-600 hover:underline" href="/services">
                  Services
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
            className="bg-black text-white px-2 py-1 rounded-full hover:bg-black/80 mr-4"
            href="/contact"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

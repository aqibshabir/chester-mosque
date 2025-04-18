import { Button } from '../ui/button';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 shadow-md p-2 bg-gradient-to-br from-white/80 to-white/50 backdrop-blur-lg z-100">
        <div className="flex items-center justify-between">
          <div className="md:hidden" aria-hidden="true"></div>
          <a href="/" className="flex items-center ml-1 z-50">
            <img className="w-[50px] md:w-[38px]" src="/logo.png" alt="logo" />
            <h1 className="text-2xl md:text-lg lg:text-xl text-indigo-600/90 ml-3.5 md:ml-2.5 mr-1 flex flex-col leading-5.5 md:leading-4.5 font-medium">
              Chester Mosque
              <span className="text-black/60 font-extralight">& Islamic Centre</span>
            </h1>
          </a>
          <div>
            <DesktopNav />
            <MobileNav />
          </div>
          <div className="hidden md:flex gap-2">
            <Button variant="ghost">Contact</Button>
            <Button className="group bg-indigo-600 hover:bg-indigo-600/95 gap-1">
              Donate
              <MdOutlineKeyboardArrowRight className="group-hover:translate-x-1 ease-in-out transition-all" />
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}

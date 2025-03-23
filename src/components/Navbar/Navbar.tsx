import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 p-2 bg-gradient-to-br from-white/80 to-white/50 backdrop-blur-lg">
        <div className="flex items-center justify-between">
          <div className="md:hidden" aria-hidden="true"></div>
          <a href="/" className="flex items-center ml-1 z-50">
            <img className="w-[50px] md:w-[38px]" src="/logo.png" alt="logo" />
            <h1 className="text-2xl md:text-xl text-indigo-600/90 ml-2 md:ml-1.5 flex flex-col leading-5.5 md:leading-4.5">
              Chester Mosque<span className="text-black/40">& Islamic Centre</span>
            </h1>
          </a>
          <div>
            <DesktopNav />
            <MobileNav />
          </div>
          <div className="hidden md:flex">
            <a
              className="bg-indigo-600 text-white px-2 py-1 rounded-full hover:bg-indigo-600/80 mr-2"
              href="/contact"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

import { FaFacebookSquare } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { IoIosHeart } from 'react-icons/io';

function Footer() {
  return (
    <footer className="bg-indigo-600 flex justify-center">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="flex justify-between mx-2 mb-10 mt-4">
          <div className="flex items-center">
            <p className="text-white font-bold text-xl mr-2">Need Help?</p>
            <a href="/contact" className="text-white/80 hover:underline hover:text-white">
              Contact us
            </a>
          </div>
          <div className="flex justify-end items-center">
            <div className="flex gap-3 justify-center items-center ">
              <div className="p-1.5 bg-white/80 hover:bg-white hover:scale-105 cursor-pointer rounded-full">
                <FaFacebookSquare size={20} className="text-indigo-600" />
              </div>
              <div className="p-1.5 bg-white/80 hover:bg-white hover:scale-105 cursor-pointer rounded-full">
                <FaYoutube size={20} className="text-indigo-600" />
              </div>
              <div className="p-1.5 bg-white/80 hover:bg-white hover:scale-105 cursor-pointer rounded-full">
                <FaInstagram size={20} className="text-indigo-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[0.5px] my-2 bg-white/60" />
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center ml-2">
            <img className="w-[30px]" src="/white_logo.png" alt="logo" />
            <p className="text-base text-white ml-2 mr-1 flex flex-col leading-4.5 font-medium">
              Chester Mosque
              <span className="text-white/60 font-extralight">& Islamic Centre</span>
            </p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-white/80 mr-2 text-xs">
              &copy; {new Date().getFullYear()} Shah Jalal Jame Masjid
            </p>
            <a
              href="https://www.aqibshabir.com"
              className="text-white/80 mr-2 text-xs hover:underline hover:text-white hover:scale-105"
            >
              Built by Aqib Shabir
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

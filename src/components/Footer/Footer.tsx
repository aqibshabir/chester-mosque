import { FaFacebookSquare } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { IoIosHeart } from 'react-icons/io';

function Footer() {
  return (
    <footer className="bg-indigo-600 flex justify-center">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="flex flex-col text-sm p-4 justify-center items-center my-4 text-white">
          <p>
            Chester Shahjalal Jame Masjid & Islamic Centre is a charity (1182471) registered in
            England & Wales.
          </p>
          <p>
            Registered Office: 25 Clifton Drive, Blacon, Chester, Cheshire West & Chester, CH1 5LT
          </p>
        </div>

        <div className="flex justify-end items-center my-4">
          <div className="flex gap-3 justify-center items-center ">
            <div className="p-1.5 bg-white/80 hover:bg-white cursor-pointer rounded-full">
              <FaFacebookSquare size={20} className="text-indigo-600" />
            </div>
            <div className="p-1.5 bg-white/80 hover:bg-white cursor-pointer rounded-full">
              <FaYoutube size={20} className="text-indigo-600" />
            </div>
            <div className="p-1.5 bg-white/80 hover:bg-white cursor-pointer rounded-full">
              <FaInstagram size={20} className="text-indigo-600" />
            </div>
          </div>
        </div>

        <div className="w-full h-[0.3px] my-2 bg-white/60"></div>

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
              &copy; Chester Mosque {new Date().getFullYear()}. All rights reserved
            </p>
            <p className="text-white/80 mr-2 text-xs flex">
              Made with <IoIosHeart className="mx-0.5 translate-y-0.5" /> by Aqib Shabir
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

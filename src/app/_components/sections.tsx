import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

function Sections() {
  return (
    <div className="my-28 flex flex-col justify-center items-center gap-8">
      <div className="w-[320px] sm:w-100 lg:w-208 h-120 bg-gray-100 rounded-2xl p-8 lg:p-12">
        <Image
          src="/logo.png"
          alt="logo"
          width={50}
          height={50}
          className="mb-12 md:animate-spin md:[animation-duration:7s] md:transition-all"
        />
        <div className="flex flex-col justify-start items-center lg:items-start gap-8 lg:gap-12">
          <p className="text-4xl sm:text-5xl lg:text-6xl lg:mr-70 font-bold ">
            Built for the community, by the community
          </p>
          <Link href="/about">
            <Button className="bg-indigo-600 hover:bg-indigo-600/90 lg:px-12 lg:py-6 lg:text-xl">
              About Us
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <Link
          href="/events"
          className="bg-indigo-600/90 py-10 px-6 w-[320px] sm:w-100 h-70 rounded-4xl hover:scale-95 transition-all cursor-pointer group delay-100"
        >
          <div className="flex flex-col gap-8 mx-4">
            <p className="bg-white w-fit px-4 py-0.5 rounded-full font-semibold text-xl">Events</p>
            <p className="text-2xl sm:text-4xl font-bold text-white ">
              Join our gatherings, talks & prayers
            </p>
            <p className="flex items-center gap-2 font-semibold text-lg text-white ">
              See what&apos;s new
              <FaArrowRight className="group-hover:translate-x-1 transition-all ease-in-out delay-100" />
            </p>
          </div>
        </Link>

        <Link
          href="/services"
          className="bg-indigo-600/20 py-10 px-6 w-[320px] sm:w-100 h-70 rounded-4xl hover:scale-95 transition-all cursor-pointer group delay-100"
        >
          <div className="flex flex-col gap-8 mx-4">
            <p className="bg-indigo-600/90 text-white w-fit px-4 py-0.5 rounded-full font-semibold text-xl">
              Services
            </p>
            <p className="text-2xl sm:text-4xl font-bold">From Nikah to support: we are here</p>
            <p className="flex items-center gap-2 font-semibold text-lg">
              See what we offer
              <FaArrowRight className="group-hover:translate-x-1 transition-all ease-in-out delay-100" />
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sections;

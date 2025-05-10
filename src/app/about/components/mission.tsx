import { PiMosque } from 'react-icons/pi';
import { FaCircle } from 'react-icons/fa6';

interface MissionProps {
  mission: string;
  description: string;
}

function Mission({ mission, description }: MissionProps) {
  return (
    <section>
      <div className="mx-8 p-4 rounded-4xl shadow-2xl mb-20">
        <div className="p-10 md:flex md:gap-20 lg:gap-40">
          <div className="flex flex-col min-h-20 justify-between md:px-4">
            <h3 className="border border-black/80 whitespace-nowrap px-2 rounded-full flex gap-1.5 items-center w-fit">
              <FaCircle className="animate-pulse w-2 text-indigo-600" />
              Our Mission
            </h3>
            <PiMosque size={80} className="hidden md:block mt-auto text-zinc-200" />
          </div>
          <div className="flex flex-col min-h-40 justify-between">
            <p className="text-xl sm:text-3xl pb-10 border-b border-indigo-600/30 md:border-black/30">
              {mission}
            </p>
            <p className="text-base sm:text-2xl mt-auto pt-10">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;

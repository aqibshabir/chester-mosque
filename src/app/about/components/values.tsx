import { FaCircle } from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi';
import { IoMdHappy } from 'react-icons/io';
import { BsPeople } from 'react-icons/bs';
import { LuHandshake } from 'react-icons/lu';

interface ValuesProps {
  values: { title: string; icon: string; description: string }[];
}

const icons: Record<string, React.ElementType> = {
  IoMdHappy,
  BsPeople,
  LuHandshake,
};

function Values({ values }: ValuesProps) {
  return (
    <div className="sm:mx-8 p-4 sm:p-2 sm:rounded-4xl my-20 bg-gradient-to-br from-indigo-400 to-indigo-700">
      <div className="m-2 sm:m-8 p-4 rounded-xl sm:rounded-4xl bg-white">
        <div className="p-10 lg:flex gap-8 xl:gap-24">
          <div className="flex flex-col min-h-20 justify-between md:px-4">
            <h3 className="bg-gray-100 whitespace-nowrap px-4 py-1 rounded-full w-fit font-semibold">
              Our Values
            </h3>
            <HiSparkles size={80} className="hidden lg:block mt-auto text-zinc-200" />
          </div>
          <div className="flex flex-col min-h-40 justify-between">
            <p className="text-xl sm:text-3xl md:text-5xl text-center sm:text-start">
              Rooted in faith, guided by compassion — our values shape everything we do.
            </p>
            <div className="flex flex-col lg:flex-row gap-10 mt-10 sm:mt-16 md:mt-30">
              {values.map((item) => {
                const Icon = icons[item.icon] || FaCircle;
                return (
                  <div
                    key={item.title}
                    className="flex flex-col items-center justify-center lg:items-start lg:justify-start sm:px-10 md:px-30 lg:px-0"
                  >
                    <Icon className="text-7xl sm:text-6xl rounded-xl p-2 bg-gradient-to-br to-indigo-500 from-indigo-100 text-[#12173d]" />
                    <p className="font-semibold my-4 text-base md:text-lg text-center lg:text-start">
                      {item.title}
                    </p>
                    <p className="text-center lg:text-start">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;

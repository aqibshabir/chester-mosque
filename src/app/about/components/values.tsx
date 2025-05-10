import { FaCircle } from 'react-icons/fa6';
import { VscSparkleFilled } from 'react-icons/vsc';
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
    <div className="sm:mx-8 p-4 sm:rounded-4xl shadow-2xl my-20 bg-indigo-600">
      <div className="m-2 sm:m-8 p-4 rounded-4xl bg-white">
        <div className="p-10 lg:flex gap-8 xl:gap-40">
          <div className="flex flex-col min-h-20 justify-between md:px-4">
            <h3 className="border border-black/80 whitespace-nowrap px-2 rounded-full flex gap-1.5 items-center w-fit">
              <FaCircle className="animate-pulse w-2 text-indigo-600" />
              Our Values
            </h3>
            <VscSparkleFilled size={80} className="hidden lg:block mt-auto text-black/60" />
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
                    <Icon className="text-7xl sm:text-6xl border rounded-xl p-2 bg-indigo-100 text-indigo-900" />
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

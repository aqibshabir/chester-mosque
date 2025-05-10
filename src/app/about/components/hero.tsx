import { Ripple } from '@/components/ui/ripple';
import { FaAngleDown } from 'react-icons/fa';

interface HeroProps {
  heading: string;
  onScrollClick: () => void;
}

function Hero({ heading, onScrollClick }: HeroProps) {
  return (
    <Ripple>
      <div className="relative flex flex-col gap-4 items-center justify-center px-4">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-center">{heading}</h2>
        <p className="font-extralight text-base sm:text-xl md:text-4xl py-4 text-black/60">
          Your mosque. Your community. Your home.
        </p>
        <button
          className="bg-indigo-600 hover:bg-indigo-600/95 rounded-2xl w-fit text-white px-4 py-2 cursor-pointer flex justify-center items-center"
          onClick={onScrollClick}
        >
          Learn more
          <FaAngleDown className="animate-bounce transition-all ease-in-out text-sm translate-y-0.5 ml-2" />
        </button>
      </div>
    </Ripple>
  );
}

export default Hero;

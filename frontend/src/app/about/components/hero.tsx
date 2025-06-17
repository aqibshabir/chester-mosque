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
          className="text-sm md:text-base bg-indigo-600 hover:bg-indigo-600/95 rounded-lg text-white px-4 py-2 cursor-pointer flex justify-center items-center group"
          onClick={onScrollClick}
        >
          Learn more
          <FaAngleDown className="md:group-hover:animate-bounce transition-transform ease-in-out ml-2" />
        </button>
      </div>
    </Ripple>
  );
}

export default Hero;

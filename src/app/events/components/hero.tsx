import { Ripple } from '@/components/ui/ripple';

interface HeroProps {
  heading: string;
}

function Hero({ heading }: HeroProps) {
  return (
    <Ripple>
      <div className="relative flex flex-col gap-4 items-center justify-center px-4">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-center">{heading}</h2>
        <p className="font-extralight text-base sm:text-xl md:text-4xl py-4 text-black/60">
          Where community comes together.
        </p>
      </div>
    </Ripple>
  );
}

export default Hero;

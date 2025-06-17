import { Ripple } from '@/components/ui/ripple';

interface HeroProps {
  heading: string;
  introText: string;
}

function Hero({ heading, introText }: HeroProps) {
  return (
    <Ripple>
      <div className="relative flex flex-col gap-4 items-center justify-center px-4">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center">{heading}</h2>
        <p className="font-extralight text-center text-sm sm:text-base md:text-xl py-4 text-black/60">
          {introText}
        </p>
      </div>
    </Ripple>
  );
}

export default Hero;

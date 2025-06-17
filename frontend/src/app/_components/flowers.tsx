import Image from 'next/image';

function Flowers() {
  return (
    <>
      <Image
        className="absolute hidden sm:block bottom-3 -left-10 lg:-left-0 w-60 xl:w-90 z-10"
        width={1110}
        height={1024}
        src="/flower-left.png"
        alt="flower-left"
      />
      <Image
        className="absolute hidden sm:block bottom-3 -right-4 lg:-right-0 w-50 xl:w-70 z-10"
        width={887}
        height={1024}
        src="/flower-right.png"
        alt="flower-right"
      />
    </>
  );
}

export default Flowers;

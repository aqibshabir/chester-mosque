import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Donate() {
  return (
    <div className="flex flex-col justify-center items-center mb-20 mx-4 md:mx-0">
      <h3 className="bg-gray-100 px-4 py-1 rounded-full font-semibold mb-8">Donate</h3>
      <div className="flex flex-col justify-center items-center text-center gap-2 md:gap-4 mb-8">
        <p className="text-3xl md:text-5xl xl:text-6xl font-bold flex flex-col md:gap-1">
          <span>Plant your future</span>
          <span>in the house of Allah</span>
        </p>
        <p className="text-sm md:text-lg text-black/80">
          Easy card payments make giving simple and secure
        </p>
      </div>
      <Link href="/donate">
        <Button className="bg-indigo-600 hover:bg-indigo-600/90 mt-4">Donate Now</Button>
      </Link>
    </div>
  );
}

export default Donate;

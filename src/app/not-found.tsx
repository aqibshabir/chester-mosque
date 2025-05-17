import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start text-center pt-[20vh]">
      <h2 className="text-9xl font-bold mb-4 text-indigo-600">404</h2>
      <p className="text-2xl text-black/70 mb-6 font-extralight">Page Not Found</p>
      <Link href="/">
        <Button variant="default" className="bg-indigo-600 hover:bg-indigo-600/95 group gap-2">
          <MdOutlineKeyboardArrowLeft className="group-hover:-translate-x-1 ease-in-out transition-all" />
          Go Back
        </Button>
      </Link>
    </div>
  );
}
